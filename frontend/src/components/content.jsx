// import styled from "styled-components";

// export default function content() {
//   return (
//     <Wrapper>
//       <Content>
//         <h1>Make <GradientText>Data-Driven</GradientText> Decisions</h1>
//         <p>Analyze strategic choices under uncertain market conditions.Get recommendations </p>
//         <p>predicted profits and risk insights.Make informed decisions with confidence.</p>
//       </Content>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 150px; 
//   // background: radial-gradient(circle at top, #0b1220, #05070f);
//   margin-top: 100px; 
// `;

// const Content = styled.div`
//   text-align: center;

//   h1 {
//     margin-bottom: 16px;
//     font-size: 50px;
//     color: white;
//   }

//   p {
//     margin: 4px 0;
//     font-size: 16px;
//     color: #97e1cd;
//   }
// `;
// const GradientText = styled.span`
//   background: linear-gradient(90deg, #1fece1, #1ebbef); 
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   display: inline-block;
// `;

import styled from "styled-components";

export default function Content() {
  return (
    <Wrapper>
      <Box>
        <h1>
          Make <GradientText>Data-Driven</GradientText> Decisions
        </h1>

        <p>
          Analyze strategic choices under uncertain market conditions.
        </p>

        <p>
          Get recommendations, predicted profits, and risk insights.
          Make informed decisions with confidence.
        </p>
      </Box>
    </Wrapper>
  );
}

/* ================= STYLES ================= */

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 16px 40px;
  margin-top: 80px;
`;

const Box = styled.div`
  text-align: center;
  max-width: 900px;

  h1 {
    margin-bottom: 16px;
    font-size: 28px;
    color: white;
    line-height: 1.3;
  }

  p {
    margin: 6px 0;
    font-size: 14px;
    color: #97e1cd;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 15px;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 48px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #1fece1, #1ebbef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;