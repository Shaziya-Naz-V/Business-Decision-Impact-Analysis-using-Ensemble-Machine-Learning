// import styled from "styled-components";

// export default function CompareStrategies({ strategies }) {
//   if (!strategies || strategies.length < 2) return null;

//   // Group strategies by category
//   const groupedByCategory = strategies.reduce((acc, s) => {
//     const category = s.product || "Other";
//     if (!acc[category]) acc[category] = [];
//     acc[category].push(s);
//     return acc;
//   }, {});

//   const COLORS = ["#00c896", "#4f8ef7", "#f7a94f", "#f75f5f", "#a78bfa"];

//   const tableMetrics = [
//     { label: "Price Point", key: "price" },
//     { label: "Marketing Budget", key: "marketing" },
//     { label: "Production Cost", key: "cost" },
//     { label: "Predicted Profit", key: "expectedProfit", isProfit: true },
//     { label: "Risk Level", key: "riskScore", isRisk: true },
//   ];

//   // ✅ Safe parser (handles number + string)
//   const parseProfit = (value) => {
//     if (typeof value === "number") return value;
//     if (!value) return 0;
//     return Number(String(value).replace(/[^0-9.-]+/g, "")) || 0;
//   };

//   // ✅ Fixed best strategy logic (NO .replace crash)
//   const getBestStrategy = (list) => {
//     return list.reduce((best, current) => {
//       return parseProfit(current.expectedProfit) >
//         parseProfit(best.expectedProfit)
//         ? current
//         : best;
//     });
//   };

//   return (
//     <Wrapper>
//       {Object.entries(groupedByCategory).map(([category, list]) => {
//         if (list.length < 2) return null;

//         const bestStrategy = getBestStrategy(list);

//         return (
//           <CategorySection key={category}>
//             {/* Header */}
//             <Header>
//               <TitleRow>
//                 <h2>Compare Your Strategies</h2>
//                 <CategoryBadge>{category}</CategoryBadge>
//               </TitleRow>
//               <p>
//                 Comparing all strategies under <strong>{category}</strong>.
//               </p>
//             </Header>

//             {/* Table */}
//             <TableWrapper>
//               <Table>
//                 <thead>
//                   <tr>
//                     <Th $align="left">Metric</Th>
//                     {list.map((s, i) => (
//                       <Th key={s.id} style={{ color: COLORS[i % COLORS.length] }}>
//                         {s.title}
//                       </Th>
//                     ))}
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {tableMetrics.map((m) => (
//                     <tr key={m.label}>
//                       <Td $align="left">{m.label}</Td>

//                       {list.map((s) => (
//                         <Td
//                           key={s.id}
//                           $isProfit={m.isProfit}
//                           $isRisk={m.isRisk}
//                         >
//                           {m.isProfit
//                             ? `₹ ${parseProfit(s[m.key]).toLocaleString()}`
//                             : s[m.key]}
//                         </Td>
//                       ))}
//                     </tr>
//                   ))}

//                   {/* Recommendation */}
//                   <tr>
//                     <Td $align="left">Recommendation</Td>
//                     {list.map((s) => (
//                       <Td key={s.id}>
//                         {s.id === bestStrategy.id ? (
//                           <RecommendedBadge>✔ Recommended</RecommendedBadge>
//                         ) : (
//                           <Dash>—</Dash>
//                         )}
//                       </Td>
//                     ))}
//                   </tr>
//                 </tbody>
//               </Table>
//             </TableWrapper>

//             {/* Best Strategy Card */}
//             <BestCard>
//               <TrophyIcon>🏆</TrophyIcon>
//               <BestInfo>
//                 <h3>Best Performing Strategy</h3>
//                 <p>
//                   <strong>{bestStrategy.title}</strong> gives highest profit of{" "}
//                   <Highlight>
//                     ₹ {parseProfit(bestStrategy.expectedProfit).toLocaleString()}
//                   </Highlight>{" "}
//                   with risk score <strong>{bestStrategy.riskScore}</strong>.
//                 </p>
//               </BestInfo>
//             </BestCard>
//           </CategorySection>
//         );
//       })}
//     </Wrapper>
//   );
// }

// /* ================= STYLES ================= */

// const Wrapper = styled.div`
//   padding: 40px;
// `;

// const CategorySection = styled.div`
//   margin-bottom: 60px;
// `;

// const Header = styled.div`
//   margin-bottom: 20px;
//   p {
//     color: #777;
//   }
// `;

// const TitleRow = styled.div`
//   display: flex;
//   gap: 10px;
//   align-items: center;
// `;

// const CategoryBadge = styled.span`
//   color: #00c896;
//   border: 1px solid #00c896;
//   padding: 4px 10px;
//   border-radius: 20px;
// `;

// const TableWrapper = styled.div`
//   overflow-x: auto;
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
// `;

// const Th = styled.th`
//   padding: 12px;
//   text-align: ${(p) => p.$align || "center"};
// `;

// const Td = styled.td`
//   padding: 12px;
//   text-align: ${(p) => p.$align || "center"};
//   color: ${(p) =>
//     p.$isProfit ? "#00c896" : p.$isRisk ? "#f7a94f" : "#ccc"};
// `;

// const RecommendedBadge = styled.span`
//   color: #00c896;
//   font-weight: bold;
// `;

// const Dash = styled.span`
//   color: #555;
// `;

// const BestCard = styled.div`
//   margin-top: 20px;
//   padding: 20px;
//   border: 1px solid #00c89633;
//   display: flex;
//   gap: 10px;
//   align-items: center;
// `;

// const TrophyIcon = styled.div`
//   font-size: 28px;
// `;

// const BestInfo = styled.div`
//   h3 {
//     margin-bottom: 6px;
//   }
// `;

// const Highlight = styled.span`
//   color: #00c896;
//   font-weight: bold;
// `;


import styled from "styled-components";

export default function CompareStrategies({ strategies }) {
  if (!strategies || strategies.length < 2) return null;

  // ✅ Group strategies by category (product)
  const groupedByCategory = strategies.reduce((acc, s) => {
  const category = (s.productName || "Other").trim().toLowerCase();

  if (!acc[category]) acc[category] = [];
  acc[category].push(s);

  return acc;
}, {});

  const COLORS = ["#00c896", "#4f8ef7", "#f7a94f", "#f75f5f", "#a78bfa"];

  const tableMetrics = [
    { label: "Price Point", key: "price" },
    { label: "Marketing Budget", key: "marketing" },
    { label: "Production Cost", key: "cost" },
    { label: "Predicted Profit", key: "expectedProfit", isProfit: true },
    // { label: "Risk Level", key: "strategyLabel", isRisk: true },
    { label: "Risk Level", key: "strategy_label", isRisk: true },
  ];

  const parseProfit = (value) => {
    if (typeof value === "number") return value;
    if (!value) return 0;
    return Number(String(value).replace(/[^0-9.-]+/g, "")) || 0;
  };

  const getBestStrategy = (list) => {
    return list.reduce((best, current) => {
      return parseProfit(current.expected_profit) >
        parseProfit(best.expected_profit)
        ? current
        : best;
    });
  };
  return (
    <Wrapper>
      {Object.entries(groupedByCategory).map(([category, list]) => {
        if (list.length < 2) return null;

        const bestStrategy = getBestStrategy(list);

        return (
          <CategorySection key={category}>
            {/* Header */}
            <Header>
              <TitleRow>
                <h2>Compare Your Strategies</h2>
                <CategoryBadge>{category}</CategoryBadge>
              </TitleRow>
              <p>Comparing all strategies under <strong>{category}</strong></p>
            </Header>

            {/* Table */}
            <TableWrapper>
              <Table>
                <thead>
                  <tr>
                    <Th $align="left">Metric</Th>
                    {list.map((s, i) => (
                      <Th key={i} style={{ color: COLORS[i % COLORS.length] }}>
                        Strategy {i + 1}
                      </Th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                 {tableMetrics.map((m) => (
  <tr key={m.label}>
    <Td $align="left">{m.label}</Td>

    {list.map((s, i) => (
      <Td key={i} $isProfit={m.isProfit} $isRisk={m.isRisk}>
        {m.label === "Risk Level"
          ? (s.strategy_label || s.riskScore || "N/A")
          : m.isProfit
          ? `₹ ${parseProfit(s[m.key]).toLocaleString()}`
          : s[m.key]}
      </Td>
    ))}
  </tr>
))}

                  {/* Recommendation */}
                  <tr>
                    <Td $align="left">Recommendation</Td>
                    {list.map((s, i) => (
                      <Td key={i}>
                        {s === bestStrategy ? (
                          <RecommendedBadge>✔ Recommended</RecommendedBadge>
                        ) : (
                          <Dash>—</Dash>
                        )}
                      </Td>
                    ))}
                  </tr>
                </tbody>
              </Table>
            </TableWrapper>

            {/* Best Strategy */}
            <BestCard>
              <TrophyIcon>🏆</TrophyIcon>
              <BestInfo>
                <h3>Best Performing Strategy</h3>
                <p>
                  This strategy gives highest profit of{" "}
                  <Highlight>
                    ₹ {parseProfit(bestStrategy.expectedProfit).toLocaleString()}
                  </Highlight>
                </p>
              </BestInfo>
            </BestCard>
          </CategorySection>
        );
      })}
    </Wrapper>
  );
}

/* ================= STYLES ================= */

const Wrapper = styled.div`
  padding: 40px;
`;

const CategorySection = styled.div`
  margin-bottom: 60px;
`;

const Header = styled.div`
  margin-bottom: 20px;
  p {
    color: #777;
  }
`;

const TitleRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const CategoryBadge = styled.span`
  color: #00c896;
  border: 1px solid #00c896;
  padding: 4px 10px;
  border-radius: 20px;
`;

/* ✅ SCROLLABLE */
const TableWrapper = styled.div`
  overflow-x: auto;
`;

/* ✅ BORDER ADDED HERE */
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #333;

  th, td {
    border: 1px solid #333;   /* 🔥 MAIN FIX */
  }
`;

const Th = styled.th`
  padding: 12px;
  text-align: ${(p) => p.$align || "center"};
  background: #111827;
`;

const Td = styled.td`
  padding: 12px;
  text-align: ${(p) => p.$align || "center"};
  color: ${(p) =>
    p.$isProfit ? "#00c896" : p.$isRisk ? "#f7a94f" : "#ccc"};
`;

const RecommendedBadge = styled.span`
  color: #00c896;
  font-weight: bold;
`;

const Dash = styled.span`
  color: #555;
`;

const BestCard = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #00c89633;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const TrophyIcon = styled.div`
  font-size: 28px;
`;

const BestInfo = styled.div`
  h3 {
    margin-bottom: 6px;
  }
`;

const Highlight = styled.span`
  color: #00c896;
  font-weight: bold;
`;