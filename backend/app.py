from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
from expert_guidance_module import search_articles

app = Flask(__name__)
CORS(app)

# def get_db():
#     return sqlite3.connect("database.db", check_same_thread=False)

def get_db():
    conn = sqlite3.connect("database.db", check_same_thread=False, timeout=10)
    conn.execute("PRAGMA journal_mode=WAL")
    return conn

def create_tables():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT
    )
    """)
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS strategies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        product TEXT,
        price REAL,
        cost REAL,
        marketing REAL,
        quantity REAL,
        profit REAL,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )
    """)
    conn.commit()
    conn.close()

create_tables()

@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    email = data["email"]
    password = data["password"]
    conn = get_db()
    cursor = conn.cursor()
    try:
        cursor.execute("INSERT INTO users (email, password) VALUES (?, ?)", (email, password))
        conn.commit()
        return jsonify({"status": "success", "user_id": cursor.lastrowid})
    except:
        return jsonify({"status": "fail", "message": "User already exists"})

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data["email"]
    password = data["password"]
    conn = get_db()
    cursor = conn.cursor()
    user = cursor.execute(
        "SELECT * FROM users WHERE email=? AND password=?", (email, password)
    ).fetchone()
    if user:
        return jsonify({"status": "success", "user_id": user[0]})
    else:
        return jsonify({"status": "fail"})
    
@app.route("/search", methods=["GET"])
def search():
    query = request.args.get("q", "")

    try:
        if query.strip() == "":
            # default → return first 10 articles
            results = search_articles("business", top_n=10)
        else:
            results = search_articles(query, top_n=10)

        return jsonify(results.to_dict(orient="records"))

    except Exception as e:
        return jsonify({"error": str(e)})

@app.route("/api/predict", methods=["POST"])
def predict():
    data = request.json

    user_id  = data.get("user_id") or 1
    product  = data.get("product_name") or data.get("product")
    price    = float(data.get("unit_price") or data.get("price"))
    cost     = float(data.get("production_cost") or data.get("cost"))
    marketing = float(data.get("marketing_spend") or data.get("marketing") or 0)
    quantity = float(data.get("quantity"))

    # Business logic
    profit    = (price - cost) * quantity
    best      = round(profit * 1.2, 2)
    worst     = round(profit * 0.7, 2)
    risk      = round((cost / price) * 100 if price != 0 else 0, 2)
    stability = round((profit / best) * 100 if best != 0 else 0, 2)
    market    = round((profit / (price * quantity)) * 100 if price * quantity != 0 else 0, 2)

    # Optimal values
    opt_price      = round(price * 1.1, 2)
    opt_cost       = round(cost * 0.9, 2)
    opt_net_profit = round((opt_price - opt_cost) * quantity, 2)

    # Strategy label + dynamic text
    if risk < 40:
        strategy_label = "Strong"
        why_it_works = [
            f"Price ₹{price} gives a strong margin over cost ₹{cost}",
            f"With quantity {quantity}, total profit is highly positive",
        ]
        key_insights = [
            f"Unit margin is ₹{round(price - cost, 2)} per unit",
            f"Total revenue potential is ₹{round(price * quantity, 2)}",
            f"Cost ratio is only {risk}% — very healthy",
        ]
        risk_mitigation = [
            "Monitor competitor pricing to protect margin",
            "Keep production cost below current levels",
        ]
    elif risk < 70:
        strategy_label = "Moderate"
        why_it_works = [
            f"Price ₹{price} covers cost ₹{cost} but margin is moderate",
            f"Quantity {quantity} provides reasonable revenue",
        ]
        key_insights = [
            f"Unit margin is ₹{round(price - cost, 2)} per unit",
            f"Cost ratio of {risk}% leaves some room for growth",
            f"Total revenue potential is ₹{round(price * quantity, 2)}",
        ]
        risk_mitigation = [
            "Consider reducing production cost to improve margin",
            "Monitor market indicators for early scenario shifts",
        ]
    else:
        strategy_label = "Weak"
        why_it_works = [
            f"Cost ₹{cost} is too close to price ₹{price}",
            f"Current margin may not sustain profitability at scale",
        ]
        key_insights = [
            f"Unit margin is only ₹{round(price - cost, 2)} per unit",
            f"Cost ratio of {risk}% is dangerously high",
            f"Consider revising pricing or reducing cost",
        ]
        risk_mitigation = [
            "Reduce production cost before scaling",
            "Increase price or reduce cost to improve margins",
        ]

    # Save to DB
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO strategies (user_id, product, price, cost, marketing, quantity, profit)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    """, (user_id, product, price, cost, marketing, quantity, profit))
    conn.commit()

    return jsonify({
        "expected_profit":  round(profit, 2),
        "best_case":        best,
        "worst_case":       worst,
        "strategy_label":   strategy_label,
        "risk_score":       risk,
        "stability_index":  stability,
        "avg_market_share": market,
        "opt_price":        opt_price,
        "opt_cost":         opt_cost,
        "opt_net_profit":   opt_net_profit,
        "why_it_works":     why_it_works,
        "key_insights":     key_insights,
        "risk_mitigation":  risk_mitigation,
    })

@app.route("/my_strategies/<int:user_id>", methods=["GET"])
def get_strategies(user_id):
    conn = get_db()
    cursor = conn.cursor()
    data = cursor.execute(
        "SELECT * FROM strategies WHERE user_id=?", (user_id,)
    ).fetchall()
    return jsonify(data)

@app.route("/all_users")
def all_users():
    conn = get_db()
    cursor = conn.cursor()
    data = cursor.execute("SELECT * FROM users").fetchall()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)

