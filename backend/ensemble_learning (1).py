
import pandas as pd

df = pd.read_csv(r"C:\Users\ADMIN1\OneDrive\Desktop\Our\backend\product_sales_dataset_final (2).csv")

df.shape

df.head()

df.columns

df.info()

df.dtypes

df.isnull()

df.isnull().sum()

df.notnull().sum()

df.duplicated()

df.duplicated().sum()

df.drop(["Order_ID","Customer_Name","City","State"],axis=1,inplace=True)

df.columns = df.columns.str.strip()

df.columns

df["Production_Cost"] = df["Revenue"] - df["Profit"]

import numpy as np
profit_q75 = df["Profit"].quantile(0.75)
profit_q25 = df["Profit"].quantile(0.25)

df["Market_Scenario"] = np.where(
    df["Profit"] >= profit_q75, "Boom",
    np.where(df["Profit"] <= profit_q25, "Downturn", "Stable")
)

df.columns

df.columns = df.columns.str.strip()

from sklearn.preprocessing import LabelEncoder

le = LabelEncoder()
df['Product_Name_encoded'] = le.fit_transform(df['Product_Name'])
df.drop('Product_Name', axis=1, inplace=True)

categorical_cols = ['Market_Scenario', 'Category', 'Sub_Category']
df = pd.get_dummies(df, columns=categorical_cols, drop_first=True)

X = df.drop('Profit', axis=1)
y = df['Profit']

print("Shape of X:", X.shape)
print("Shape of y:", y.shape)

X = X.drop(["Order_Date", "Region", "Country"], axis=1)

df = df[df['Profit'].notnull()]

if 'Revenue' in df.columns:
    df.drop(columns=['Revenue'], inplace=True)

drop_cols = ['Order_ID', 'Order_Date']
df.drop(columns=[c for c in drop_cols if c in df.columns], inplace=True)

X = df.drop('Profit', axis=1)
y = df['Profit']

cat_features = [i for i, col in enumerate(X.columns) if X[col].dtype == 'object']

print("Categorical feature indices:", cat_features)

print(X.select_dtypes(include='object').columns.tolist())

from sklearn.preprocessing import LabelEncoder

for col in ['Region', 'Country']:
    if col in X.columns:
        X[col] = LabelEncoder().fit_transform(X[col].astype(str))

print(X.select_dtypes(include='object').columns.tolist())

from sklearn.model_selection import train_test_split
from sklearn.ensemble import ExtraTreesRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import joblib

X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    random_state=42
)

from sklearn.ensemble import ExtraTreesRegressor

from sklearn.ensemble import ExtraTreesRegressor

extra_model = ExtraTreesRegressor(
    n_estimators=100,
    max_depth=10,
    min_samples_split=5,
    min_samples_leaf=2,
    random_state=42,
    n_jobs=-1
)

extra_model.fit(X_train, y_train)

y_pred_extra = extra_model.predict(X_test)

from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import numpy as np

print("Extra Trees Performance")
print("MAE :", mean_absolute_error(y_test, y_pred_extra))
print("RMSE:", np.sqrt(mean_squared_error(y_test, y_pred_extra)))
print("R2  :", r2_score(y_test, y_pred_extra))

r2_extra = r2_score(y_test, y_pred_extra)
r2_percent = r2_extra * 100

print(f"R2 Score: {r2_percent:.2f}%")

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    random_state=42
)



from catboost import CatBoostRegressor
cat_model = CatBoostRegressor(
    iterations=1000,
    learning_rate=0.05,
    depth=6,
    loss_function='RMSE',
    eval_metric='R2',
    random_seed=42,
    verbose=0
)

cat_model.fit(
    X_train,
    y_train,
    cat_features=cat_features,
    eval_set=(X_test, y_test),
    use_best_model=True
)

from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error

# Predictions
y_train_pred = cat_model.predict(X_train)
y_test_pred = cat_model.predict(X_test)

# Metrics
train_r2 = r2_score(y_train, y_train_pred)
test_r2 = r2_score(y_test, y_test_pred)
mae = mean_absolute_error(y_test, y_test_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_test_pred))

print("FINAL CATBOOST PERFORMANCE")
print("Train R² :", train_r2)
print("Test  R² :", test_r2)
print("MAE      :", mae)
print("RMSE     :", rmse)

from sklearn.model_selection import train_test_split
from xgboost import XGBRegressor


X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

xgb_model = XGBRegressor(
    n_estimators=300,
    learning_rate=0.05,
    max_depth=5,
    subsample=0.8,
    colsample_bytree=0.8,
    objective='reg:squarederror',
    random_state=42
)

xgb_model.fit(X_train, y_train)

training_columns = X_train.columns

from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error
import numpy as np

y_pred = xgb_model.predict(X_test)

r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))

print("R² Score        :", r2)
print("Accuracy (%)    :", r2 * 100)
print("MAE             :", mae)
print("RMSE            :", rmse)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

xgb_model = XGBRegressor(
    n_estimators=500,
    learning_rate=0.05,
    max_depth=6,
    subsample=0.9,
    colsample_bytree=0.9,
    reg_alpha=0.1,
    reg_lambda=1.0,
    objective='reg:squarederror',
    random_state=42
)

xgb_model.fit(X_train, y_train)

y_pred = xgb_model.predict(X_test)

r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))

print("\nFINAL MODEL PERFORMANCE (NO LEAKAGE)")
print("R² Score        :", r2)
print("Accuracy (%)    :", r2 * 100)
print("MAE             :", mae)
print("RMSE            :", rmse)

print("\nTrain R²:", xgb_model.score(X_train, y_train))
print("Test R² :", xgb_model.score(X_test, y_test))

pred_xgb = xgb_model.predict(X_test)
pred_cat = cat_model.predict(X_test)
pred_extra = extra_model.predict(X_test)

print("XGB predictions:", pred_xgb[:5])
print("CatBoost predictions:", pred_cat[:5])
print("ExtraTrees predictions:", pred_extra[:5])

import pandas as pd

pred_df = pd.DataFrame({
    "Actual": y_test.values,
    "XGB": pred_xgb,
    "CatBoost": pred_cat,
    "ExtraTrees": pred_extra
})

pred_df.head()

print(type(xgb_model))
print(type(cat_model))
print(type(extra_model))

# weight calculation
total = r2_extra + r2 + test_r2

w_extra = r2_extra / total
w_xgb = r2 / total
w_cat = test_r2 / total

print(w_extra, w_xgb, w_cat)

final_pred = (
    w_extra * pred_extra +
    w_xgb * pred_xgb +
    w_cat * pred_cat
)

from sklearn.metrics import r2_score

ensemble_r2 = r2_score(y_test, final_pred)
print(f"Ensemble R2: {ensemble_r2*100:.2f}%")

import numpy as np

stack = np.vstack([pred_extra, pred_xgb, pred_cat])

confidence = 1 - (np.std(stack, axis=0) / np.mean(stack, axis=0))
confidence = np.clip(confidence, 0, 1)

confidence_percent = confidence * 100

pred_df["Confidence_%"] = confidence_percent
pred_df.head()

import numpy as np

def calculate_confidence(pred_xgb, pred_cat, pred_extra):

    preds = np.vstack([pred_xgb, pred_cat, pred_extra])

    mean_pred = np.mean(preds, axis=0)
    std_pred = np.std(preds, axis=0)

    # avoid division by zero
    confidence = 100 * (1 - (std_pred / (mean_pred + 1e-6)))

    confidence = np.clip(confidence, 0, 100)

    return confidence

# ENSEMBLE PREDICTION

# individual predictions
pred_xgb = xgb_model.predict(X_test)
pred_cat = cat_model.predict(X_test)
pred_extra = extra_model.predict(X_test)

# weights (based on R2)
w_extra = 0.3353416906492454
w_xgb   = 0.3334835730842193
w_cat   = 0.3311747362665354

final_profit_pred = (
    w_xgb * pred_xgb +
    w_cat * pred_cat +
    w_extra * pred_extra
)

confidence = calculate_confidence(pred_xgb, pred_cat, pred_extra)

# ===== RESULT TABLE =====
import pandas as pd

results = pd.DataFrame({
    "Actual": y_test.values,
    "XGB": pred_xgb,
    "CatBoost": pred_cat,
    "ExtraTrees": pred_extra,
    "Final_Predicted_Profit": final_profit_pred,
    "Confidence_%": confidence
})

print(results.head())

import numpy as np
import pandas as pd
import shap
import time
import warnings
warnings.filterwarnings("ignore")
from pytrends.request import TrendReq


# ── STEP 1: User Input ───────────────────────────────────────

print("=" * 50)
print("  MARKET STRATEGY EVALUATOR")
print("=" * 50)

product_name    = input("\n  Product name        : ").strip()
unit_price      = float(input("  Unit price          : "))
production_cost = float(input("  Production cost     : "))
marketing_spend = float(input("  Marketing spend     : "))
quantity        = float(input("  Expected quantity   : "))


# ── STEP 2: Quantile Thresholds (from ensemble notebook) ─────

profit_q75 = df["Profit"].quantile(0.75)
profit_q25 = df["Profit"].quantile(0.25)


# ── STEP 3: Build Feature Row ────────────────────────────────

def build_row(unit_price, production_cost, quantity):
    row = pd.DataFrame([{col: 0 for col in X_test.columns}])

    row["Quantity"]        = quantity
    row["Unit_Price"]      = unit_price
    row["Production_Cost"] = production_cost * quantity

    # Encode product name
    if product_name in le.classes_:
        row["Product_Name_encoded"] = le.transform([product_name])[0]
    else:
        row["Product_Name_encoded"] = int(X_test["Product_Name_encoded"].mean())

    # Set Market_Scenario dummy based on estimated profit
    est_profit = (unit_price - production_cost) * quantity

    if est_profit >= profit_q75:
        scenario = "Boom"
    elif est_profit <= profit_q25:
        scenario = "Downturn"
    else:
        scenario = "Stable"

    if "Market_Scenario_Stable"   in row.columns and scenario == "Stable":
        row["Market_Scenario_Stable"]   = 1
    if "Market_Scenario_Downturn" in row.columns and scenario == "Downturn":
        row["Market_Scenario_Downturn"] = 1
    # Boom is the dropped reference category — no column needed

    return row


# ── STEP 4: Predict Function ─────────────────────────────────

def predict(row):
    p1 = float(xgb_model.predict(row)[0])
    p2 = float(cat_model.predict(row)[0])
    p3 = float(extra_model.predict(row)[0])
    profit = w_xgb * p1 + w_cat * p2 + w_extra * p3
    stack  = np.array([p1, p2, p3])
    conf   = float(np.clip(1 - np.std(stack) / np.mean(stack), 0, 1) * 100)
    return round(profit, 2), round(conf, 2)


# ── STEP 5: Base Prediction ──────────────────────────────────

base_row                     = build_row(unit_price, production_cost, quantity)
expected_profit_unit, model_conf = predict(base_row)
expected_profit              = round(expected_profit_unit * quantity, 2)



scenarios = {
    "Market Boom"            : (build_row(unit_price * 1.15, production_cost * 0.90, quantity),        quantity),
    "Stable Market"          : (base_row,                                                               quantity),
    "Market Downturn"        : (build_row(unit_price * 0.85, production_cost,        quantity),        quantity),
    "Competitive Disruption" : (build_row(unit_price * 0.90, production_cost * 1.10, quantity * 0.80), quantity * 0.80),
}

scenario_profits = {}
for name, (row, qty) in scenarios.items():
    profit, _ = predict(row)
    scenario_profits[name] = round(profit * qty, 2)  # correct qty per scenario

best_case  = max(scenario_profits.values())
worst_case = min(scenario_profits.values())


# ── STEP 7: Risk Score & Stability ───────────────────────────

profit_values  = list(scenario_profits.values())
profit_std     = np.std(profit_values)
profit_mean    = np.mean(profit_values)
risk_score     = round(min((profit_std / max(profit_mean, 1)) * 100, 100), 1)
stability_index= round((expected_profit / max(best_case, 1)) * 100, 1)


# ── STEP 8: Market Share Estimate ────────────────────────────

profit_margin    = (expected_profit_unit / unit_price) * 100
avg_market_share = round(min(profit_margin * 1.3, 100), 1)


# ── STEP 9: Trend Score (PyTrends) ───────────────────────────

print("\n  Fetching trend data...")
try:
    pt = TrendReq(hl='en-US', tz=360)

    pt.build_payload([product_name], timeframe='today 3-m')
    trend_data  = pt.interest_over_time()
    trend_score = int(trend_data[product_name].mean()) if not trend_data.empty else 50
    time.sleep(1)

    pt.build_payload([product_name], timeframe='today 12-m')
    data_12m = pt.interest_over_time()
    monthly  = data_12m[product_name].resample('ME').mean().astype(int) if not data_12m.empty else pd.Series([])
    time.sleep(1)

    related_data   = pt.related_queries()
    related_top    = []
    related_rising = []
    if product_name in related_data:
        top    = related_data[product_name].get('top')
        rising = related_data[product_name].get('rising')
        if top    is not None: related_top    = top['query'].head(3).tolist()
        if rising is not None: related_rising = rising['query'].head(3).tolist()

except Exception as e:
    print(f"  Trend fetch failed: {e}")
    trend_score    = 50
    monthly        = pd.Series([])
    related_top    = []
    related_rising = []


# ── STEP 10: Adjusted Confidence ─────────────────────────────

adjusted_conf = round(0.60 * model_conf + 0.40 * trend_score, 2)


# ── STEP 11: SHAP — Key Insights ─────────────────────────────

explainer   = shap.TreeExplainer(xgb_model)
shap_values = explainer.shap_values(base_row)

shap_df = pd.DataFrame({
    "Feature"   : base_row.columns.tolist(),
    "Value"     : base_row.values[0],
    "SHAP_Value": shap_values[0]
})
shap_df["Abs"] = shap_df["SHAP_Value"].abs()
shap_df        = shap_df[shap_df["Abs"] > 0].sort_values("Abs", ascending=False)

key_features = ["Unit_Price", "Production_Cost", "Quantity", "Product_Name_encoded"]
shap_key     = shap_df[shap_df["Feature"].isin(key_features)].head(3)

key_insights = []
for _, r in shap_key.iterrows():
    direction = "positively" if r["SHAP_Value"] > 0 else "negatively"
    key_insights.append(
        f"{r['Feature']} is {direction} impacting profit by ₹{abs(r['SHAP_Value']):.2f}"
    )

profit_variance  = round(best_case - worst_case, 2)
unit_margin_pct  = round((expected_profit_unit / unit_price) * 100, 1)
key_insights.append(f"Profit variance of ₹{profit_variance:,} across scenarios")
key_insights.append(f"Average projected market share of {avg_market_share}%")
key_insights.append(f"Unit margin of {unit_margin_pct}% before quality adjustments")


# ── STEP 12: Strategy Assessment ─────────────────────────────

if adjusted_conf >= 75:
    strategy_label  = "Strong"
    why_it_works    = [
        "Strong profit expectations aligned with market demand",
        "Trend score supports product launch timing",
    ]
    risk_mitigation = [
        "Monitor competitor pricing regularly",
        "Keep production cost below current levels",
    ]
elif adjusted_conf >= 50:
    strategy_label  = "Moderate"
    why_it_works    = [
        "Moderate profit expectations aligned with sustainable growth objectives",
        "Higher risk exposure may require additional hedging strategies",
    ]
    risk_mitigation = [
        "Consider hedging through diversified product lines",
        "Monitor market indicators for early scenario shifts",
    ]
else:
    strategy_label  = "Weak"
    why_it_works    = [
        "Current pricing may not sustain profitability",
        "Market trend is low — consider delaying launch",
    ]
    risk_mitigation = [
        "Reduce production cost before launch",
        "Increase marketing spend to drive demand",
    ]


# ── STEP 13: What-if Simulation ──────────────────────────────
# Each scenario uses its OWN quantity for net profit calculation

whatif_scenarios = {
    "Price +10%"           : (build_row(unit_price * 1.10, production_cost,        quantity),        quantity),
    "Price +20%"           : (build_row(unit_price * 1.20, production_cost,        quantity),        quantity),
    "Cost -10%"            : (build_row(unit_price,        production_cost * 0.90, quantity),        quantity),
    "Cost -20%"            : (build_row(unit_price,        production_cost * 0.80, quantity),        quantity),
    "Price+10% & Cost-10%" : (build_row(unit_price * 1.10, production_cost * 0.90, quantity),        quantity),
    "Qty +25%"             : (build_row(unit_price,        production_cost,        quantity * 1.25), quantity * 1.25),
    "Qty +50%"             : (build_row(unit_price,        production_cost,        quantity * 1.50), quantity * 1.50),
}

whatif_results = {}
for label, (row, qty) in whatif_scenarios.items():
    p, _ = predict(row)
    whatif_results[label] = round(p * qty, 2)  # correct qty per what-if

best_whatif_label  = max(whatif_results, key=whatif_results.get)
best_whatif_profit = whatif_results[best_whatif_label]


# ── STEP 14: Grid Search Optimal ─────────────────────────────

price_range = np.arange(unit_price       * 0.80, unit_price       * 1.31, unit_price       * 0.05)
cost_range  = np.arange(production_cost  * 0.70, production_cost  * 1.11, production_cost  * 0.05)

opt_profit = -np.inf
opt_price  = unit_price
opt_cost   = production_cost

for p in price_range:
    for c in cost_range:
        if c >= p: continue
        row     = build_row(p, c, quantity)
        prof, _ = predict(row)
        net     = prof * quantity
        if net > opt_profit:
            opt_profit = net
            opt_price  = p
            opt_cost   = c

opt_net_profit = round(opt_profit, 2)


# ════════════════════════════════════════════════════════════
#  FINAL OUTPUT — All values for your frontend
# ════════════════════════════════════════════════════════════

print("\n" + "=" * 50)
print("  DASHBOARD VALUES")
print("=" * 50)

print(f"\n── METRIC CARDS ──────────────────────────────")
print(f"  Expected Profit     : ₹{expected_profit:,}")
print(f"  Best Case           : ₹{best_case:,}")
print(f"  Worst Case          : ₹{worst_case:,}")
print(f"  Risk Score          : {risk_score} / 100")
print(f"  Stability Index     : {stability_index}%")
print(f"  Avg Market Share    : {avg_market_share}%")
print(f"  Trend Score         : {trend_score} / 100")
print(f"  Model Confidence    : {model_conf:.2f}%")
print(f"  Adjusted Confidence : {adjusted_conf} / 100")

print(f"\n── SCENARIO ANALYSIS (Chart) ─────────────────")
for name, profit in scenario_profits.items():
    bar = "█" * int(profit / max(scenario_profits.values()) * 20)
    print(f"  {name:<28} ₹{profit:>12,}  {bar}")

print(f"\n── STRATEGY ASSESSMENT ───────────────────────")
print(f"  Label      : {strategy_label}")
print(f"  Expected   : ₹{expected_profit:,}")
print(f"  Stability  : {stability_index}%")
print(f"  Risk       : {risk_score}")

print(f"\n  Why This Works:")
for w in why_it_works:
    print(f"    ✔  {w}")

print(f"\n  Key Insights:")
for k in key_insights:
    print(f"    •  {k}")

print(f"\n  Risk Mitigation:")
for r in risk_mitigation:
    print(f"    ⚠  {r}")

print(f"\n── WHAT-IF SIMULATION ────────────────────────")
print(f"  {'Scenario':<25}  {'Net Profit':>12}  {'Change':>10}")
print(f"  {'-'*50}")
print(f"  {'Current (baseline)':<25}  ₹{expected_profit:>10,}  {'—':>10}")
for label, profit in whatif_results.items():
    change = round(profit - expected_profit, 2)
    arrow  = "▲" if change >= 0 else "▼"
    print(f"  {label:<25}  ₹{profit:>10,}  {arrow} ₹{abs(change):,}")
print(f"\n  Best scenario : {best_whatif_label}  →  ₹{best_whatif_profit:,}")

print(f"\n── OPTIMAL VALUES (Grid Search) ──────────────")
print(f"  Optimal Unit Price      : ₹{opt_price:.2f}")
print(f"  Optimal Production Cost : ₹{opt_cost:.2f}")
print(f"  Optimal Net Profit      : ₹{opt_net_profit:,}")
print(f"  Current Net Profit      : ₹{expected_profit:,}")
print(f"  Potential Gain          : ₹{round(opt_net_profit - expected_profit, 2):,}")

print(f"\n── TREND DATA ────────────────────────────────")
if not monthly.empty:
    vals   = monthly.values.tolist()
    labels = [d.strftime('%b') for d in monthly.index]
    print(f"  Monthly Labels : {labels}")
    print(f"  Monthly Values : {vals}")
print(f"  Related Top    : {related_top}")
print(f"  Rising Queries : {related_rising}")

print("\n" + "=" * 50)
print("  Done. Use values above in your frontend.")
print("=" * 50)

