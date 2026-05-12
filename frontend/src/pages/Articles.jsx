// import { useState, useEffect } from "react";
// import styled from "styled-components";
// import Navbar from "../components/Navbar";
// import ArticleCard from "../components/ArticleCard";

// export default function Articles() {

//   const [articles, setArticles] = useState([]);
//   useEffect(() => {
//     fetch("http://127.0.0.1:5000/search")
//       .then(res => res.json())
//       .then(data => setArticles(data));
//   }, []);

//   const handleSearch = async (value) => {

//     const res = await fetch(`http://127.0.0.1:5000/search?q=${value}`);
//     const data = await res.json();
//     setArticles(data);
//   };

//   return (
//     <>
//       <Navbar />

//       <Wrapper>
//         <Header>
//           <h1>
//             Articles & <span>Insights</span>
//           </h1>

//           <p>
//             Explore expert articles on strategy, pricing, marketing, and risk analysis from{" "}
//             <a href="https://hbr.org" target="_blank" rel="noreferrer">
//               trusted business blogs
//             </a>
//           </p>

//           <SearchBox
//             placeholder="Search articles..."
//             onChange={(e)=>handleSearch(e.target.value)}
//           />

//         </Header>

//         <Grid>
//           {articles.map((item, index) => (
//             <ArticleCard key={index} {...item} />
//           ))}
//         </Grid>

//       </Wrapper>
//     </>
//   );
// }

// const Wrapper = styled.div`
//   padding-top: 120px;
//   padding-left: 80px;
//   padding-right: 80px;
// `;

// const Header = styled.div`
//   text-align: center;
//   margin-bottom: 40px;

//   h1 {
//     font-size: 46px;
//     color: white;
//   }

//   span {
//     background: linear-gradient(90deg, #1fece1, #1ebbef);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }

//   p {
//     margin-top: 10px;
//     color: #94a3b8;
//   }

//   p a {
//     color: #1fece1;
//     text-decoration: none;
//   }
// `;

// const SearchBox = styled.input`
//   width: 420px;
//   margin: 0 auto 40px auto;
//   display: block;
//   padding: 14px 18px;
//   border-radius: 999px;
//   background: #0f172a;
//   border: 1px solid rgba(255,255,255,0.1);
//   color: white;
//   outline: none;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 26px;
// `;

import { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  // 🔹 Load default articles
  useEffect(() => {
    fetch("http://127.0.0.1:5000/search")
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  // 🔹 Debounced search (optimized)
  useEffect(() => {
    const delay = setTimeout(() => {
      fetch(`http://127.0.0.1:5000/search?q=${search}`)
        .then(res => res.json())
        .then(data => setArticles(data));
    }, 300);

    return () => clearTimeout(delay);
  }, [search]);

  return (
    <>
      <Navbar />

      <Wrapper>
        <Header>
          <h1>
            Articles & <span>Insights</span>
          </h1>

          <p>
            Explore expert articles on strategy, pricing, marketing, and risk analysis from{" "}
            <a href="https://hbr.org" target="_blank" rel="noreferrer">
              trusted business blogs
            </a>
          </p>

          <SearchBox
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Header>

        <Grid>
          {articles.map((item) => (
            <ArticleCard key={item.title} {...item} />
          ))}
        </Grid>
      </Wrapper>
    </>
  );
}

/* ================= STYLES ================= */

const Wrapper = styled.div`
  padding-top: 100px;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 1024px) {
    padding-left: 80px;
    padding-right: 80px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 28px;
    color: white;
  }

  span {
    background: linear-gradient(90deg, #1fece1, #1ebbef);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-top: 10px;
    color: #94a3b8;
    font-size: 14px;
    padding: 0 10px;
  }

  p a {
    color: #1fece1;
    text-decoration: none;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 36px;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 46px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const SearchBox = styled.input`
  width: 100%;
  max-width: 420px;
  margin: 20px auto 30px auto;
  display: block;
  padding: 12px 16px;
  border-radius: 999px;
  background: #0f172a;
  border: 1px solid rgba(255,255,255,0.1);
  color: white;
  outline: none;
  font-size: 14px;

  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 26px;
  }
`;