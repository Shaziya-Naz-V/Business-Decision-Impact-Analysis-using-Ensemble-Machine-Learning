// // Recommendation.jsx
// import styled from "styled-components";
// import { FaLightbulb, FaArrowUp, FaShieldAlt, FaExclamationTriangle } from "react-icons/fa";

// const Card = styled.div`
// background: linear-gradient(180deg, #1f293d, #070c16);
//   border-radius: 16px;
//   padding: 30px;
//   color: #cbd5e1;
//   width: 700px;
//   margin-top: 20px;

//   h3 {
//     color: #1fece1;
//     font-size: 24px;
//     margin-bottom: 20px;
//   }

//   h4 {
//     color: #cbd5e1;
//     margin-bottom: 10px;
//   }

//   ul {
//     padding-left: 20px;
//     li {
//       margin-bottom: 8px;
//     }
//   }
// `;

// const Metrics = styled.div`
//   display: flex;
//   flex-wrap: wrap; /* Allows items to wrap to the next line */
//   gap: 16px; /* Space between boxes */
//   justify-content: center; /* Center align horizontally */
//   max-width: 660px; /* 3 boxes per row (200px each + gaps) */
//   margin: 0 auto; /* Center container */
// `;

// const Metric = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content:center;
//   border: 2px solid gray;
//   border-radius:15px;
//   width: 200px;
//   background-color: #172435;
//   height: 80px;
//   span {
//     font-size: 14px;
//     color: #94a3b8;
//     margin-bottom: 4px;
//   }
//   strong {
//     font-size: 18px;
//     color: #fff;
//   }
// `;

// const SectionHeader = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   margin-top: 20px;
//   margin-bottom: 10px;
//   font-weight: 600;
//   color: #1fece1;
// `;

// export default function Recommendation({ data }) {
//   return (
//     <Card>
//       <h3>Strategy Assessment</h3>

//       <Metrics>
//         <Metric>
//     <span>Optimal Price</span>
//     <strong>₹{data.opt_price}</strong>
//   </Metric>
//   <Metric>
//     <span>Optimal Cost</span>
//     <strong>₹{data.opt_cost}</strong>
//   </Metric>
//   <Metric>
//     <span>Optimal Net Profit</span>
//     <strong>₹{data.opt_net_profit}</strong>
//   </Metric>
//       </Metrics>

//       <SectionHeader>
//         <FaLightbulb /> Why This Works
//       </SectionHeader>
//       <ul>
//         {data.why.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>

//       <SectionHeader>
//         <FaArrowUp /> Key Insights
//       </SectionHeader>
//       <ul>
//         {data.insights.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>

//       <SectionHeader>
//         <FaShieldAlt /> Risk Mitigation
//       </SectionHeader>
//       <ul>
//         {data.riskMitigation.map((item, i) => (
//           <li key={i}>
//             <FaExclamationTriangle style={{ marginRight: "5px", color: "#facc15" }} />
//             {item}
//           </li>
//         ))}
//       </ul>
//     </Card>
//   );
// }
// Recommendation.jsx
import styled from "styled-components";
import { FaLightbulb, FaArrowUp, FaShieldAlt, FaExclamationTriangle } from "react-icons/fa";

export default function Recommendation({ data }) {
  return (
    <Card>
      <h3>Strategy Assessment</h3>

      <Metrics>
        <Metric>
          <span>Optimal Price</span>
          <strong>₹{data.opt_price}</strong>
        </Metric>

        <Metric>
          <span>Optimal Cost</span>
          <strong>₹{data.opt_cost}</strong>
        </Metric>

        <Metric>
          <span>Optimal Net Profit</span>
          <strong>₹{data.opt_net_profit}</strong>
        </Metric>
      </Metrics>

      <SectionHeader>
        <FaLightbulb /> Why This Works
      </SectionHeader>
      <ul>
        {data.why.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <SectionHeader>
        <FaArrowUp /> Key Insights
      </SectionHeader>
      <ul>
        {data.insights.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <SectionHeader>
        <FaShieldAlt /> Risk Mitigation
      </SectionHeader>
      <ul>
        {data.riskMitigation.map((item, i) => (
          <li key={i}>
            <FaExclamationTriangle style={{ marginRight: "5px", color: "#facc15" }} />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

/* ================= STYLES ================= */

const Card = styled.div`
  background: linear-gradient(180deg, #1f293d, #070c16);
  border-radius: 16px;
  padding: 20px;
  color: #cbd5e1;

  /* ✅ FIX RESPONSIVE WIDTH */
  width: 100%;
  max-width: 700px;
  margin-top: 20px;

  h3 {
    color: #1fece1;
    font-size: 22px;
    margin-bottom: 20px;
  }

  h4 {
    color: #cbd5e1;
    margin-bottom: 10px;
  }

  ul {
    padding-left: 20px;

    li {
      margin-bottom: 8px;
    }
  }

  /* MOBILE */
  @media (max-width: 600px) {
    padding: 16px;

    h3 {
      font-size: 18px;
    }
  }
`;

const Metrics = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin: 0 auto 10px auto;
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px solid gray;
  border-radius: 15px;

  width: 180px;
  background-color: #172435;
  height: 80px;

  span {
    font-size: 13px;
    color: #94a3b8;
    margin-bottom: 4px;
  }

  strong {
    font-size: 16px;
    color: #fff;
  }

  /* MOBILE */
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 600;
  color: #1fece1;
`;