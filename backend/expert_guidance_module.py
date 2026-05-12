import pandas as pd
import csv
business_df = pd.read_csv(
    "business_datas.csv",
    quoting=csv.QUOTE_ALL,
    encoding="utf-8"
)
cols = ["introduction","key_concepts","when_where_how_to_use","common_mistakes_to_avoid","real_world_business_example"]

for col in cols:
    business_df[col] = business_df[col].fillna("").astype(str).str.replace("\r\n", "\n").str.replace("\r", "\n")



business_df.columns

business_df.shape

business_df.duplicated().sum()

business_df.isnull().sum()

# business_df['category'].unique()

business_df

business_df.drop_duplicates(inplace=True)

business_df.shape

business_df.columns
business_df["content"] = (business_df["title"] + " " + business_df["introduction"]).str.lower()

business_df.columns

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

vectorizer = TfidfVectorizer(
    stop_words="english",
    max_features=300
)

tfidf_matrix = vectorizer.fit_transform(
    business_df["content"]
)

print("TF-IDF shape:", tfidf_matrix.shape)

cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)

print("Similarity matrix ready")

def search_articles(user_query, top_n=10):
    """
    Takes user keyword query
    Returns top similar articles
    """
    query_vec = vectorizer.transform([user_query])
    sim_scores = cosine_similarity(query_vec, tfidf_matrix).flatten()
    top_indices = sim_scores.argsort()[-top_n:][::-1]
    results = business_df.iloc[top_indices][
        ["title", "introduction","key_concepts","when_where_how_to_use","common_mistakes_to_avoid","real_world_business_example"]
    ].copy()

    results["similarity_score"] = sim_scores[top_indices]

    return results.reset_index(drop=True)


