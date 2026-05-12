// import { useEffect, useState } from "react"; 
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import InputCard from "../components/InputCard";
// import MetricCard from "../components/MetricCard";
// import Navbar from "../components/Navbar";
// import Content from "../components/content";
// import Recommendation from "../components/Recommendation";
// import AddStrategy from "../components/AddStrategy";
// import CompareStrategies from "../components/CompareStrategies";

// export default function Dashboard() {
//   const navigate = useNavigate();

//   const [metrics, setMetrics] = useState({
//     expected_profit: 0,
//     best_case: 0,
//     worst_case: 0,
//     strategy_label: '',
//     stability_index: 0,
//     avg_market_share: 0,
//   });

//   const [recommendationData, setRecommendationData] = useState(null);

//   const [strategies, setStrategies] = useState([]);
//   useEffect(() => {
//     const user = localStorage.getItem("user_id");
//     if (!user) {
//       navigate("/auth/signin");
//     }
//   }, []);

//   const handleStrategySubmit = (formData, metricsData) => {
//   setMetrics(metricsData);

//   const newStrategy = {
//     id: Date.now(),
//     title: `Strategy ${strategies.length + 1}`,
//     rank: `#${strategies.length + 1}`,
//     statusColor: strategies.length % 2 === 0 ? "green" : "blue",
//    productName: formData.product,  // ✅ this was missing
//     price: `$${formData.price ?? 0}`,
//     quality: `${formData.quality ?? 0}%`,
//     marketing: `$${formData.marketing ?? 0}`,
//     cost: `$${formData.cost ?? 0}`,
//     expectedProfit: `$${metricsData.expected_profit}`,
//     riskScore: `${metricsData.stability_index ?? 0}%`,
//     stability: `${metricsData.avg_market_share ?? 0}%`,
//   };

//   setStrategies((prev) => [...prev, newStrategy]);
// };

//   const handleDeleteStrategy = (id) => {
//     setStrategies((prev) => prev.filter((s) => s.id !== id));
//   };

//   return (
//     <>
//       <Navbar />
//       <Content />

//       <Container>
//         <LeftPanel>
//           <InputCard setMetrics={setMetrics} setRecommendation={setRecommendationData}onStrategySubmit={handleStrategySubmit}/>
//            <AddStrategy
//                       strategies={strategies}
//                       onDelete={handleDeleteStrategy}
//                     />
//         </LeftPanel>

//         <RightPanel>
//           <MetricsGrid>
//             <MetricCard title="Expected Profit" value={`₹ ${metrics.expected_profit}`} type="profit" />
//             <MetricCard title="Best" value={`₹ ${metrics.best_case}`} type="best" />
//             <MetricCard title="Worst Case" value={`₹ ${metrics.worst_case}`} type="worst" />
//             <MetricCard title="Risk Level" value={`${metrics.strategy_label}`} type="risk" />
//             <MetricCard title="Stability Index" value={`${metrics.stability_index}%`} type="stable" />
//             <MetricCard title="Avg Market Share" value={`${metrics.avg_market_share}%`} type="avg" />
//           </MetricsGrid>
//           {recommendationData && <Recommendation data={recommendationData} />}
//           <CompareStrategies strategies={strategies} />
//         </RightPanel>
//       </Container>
      
//     </>
//   );
// }

// const Container = styled.div`
//   padding-top: 80px;
//   display: grid;
//   grid-template-columns: 380px 1fr;
//   gap: 100px;
// `;

// const LeftPanel = styled.div``;
// const RightPanel = styled.div``;

// const MetricsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 16px;
// `;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import InputCard from "../components/InputCard";
import MetricCard from "../components/MetricCard";
import Navbar from "../components/Navbar";
import Content from "../components/content";
import Recommendation from "../components/Recommendation";
import AddStrategy from "../components/AddStrategy";
import CompareStrategies from "../components/CompareStrategies";

export default function Dashboard() {
  const navigate = useNavigate();

  const [metrics, setMetrics] = useState({
    expected_profit: 0,
    best_case: 0,
    worst_case: 0,
    strategy_label: "",
    stability_index: 0,
    avg_market_share: 0,
  });

  const [recommendationData, setRecommendationData] = useState(null);
  const [strategies, setStrategies] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("user_id");
    if (!user) navigate("/auth/signin");
  }, []);

  const handleStrategySubmit = (formData, metricsData) => {
    setMetrics(metricsData);

    const newStrategy = {
      id: Date.now(),
      title: `Strategy ${strategies.length + 1}`,
      productName: formData.product,
      price: formData.price,
      cost: formData.cost,
      marketing: formData.marketing,
      quantity: formData.quantity,
      expectedProfit: metricsData.expected_profit,
      riskScore: metricsData.stability_index,
      stability: metricsData.avg_market_share,
    };

    setStrategies((prev) => [...prev, newStrategy]);
  };

  const handleDeleteStrategy = (id) => {
    setStrategies((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <>
      <Navbar />
      <Content />

      <Container>
        {/* LEFT SIDE */}
        <LeftPanel>
          <InputCard
            setMetrics={setMetrics}
            setRecommendation={setRecommendationData}
            onStrategySubmit={handleStrategySubmit}
          />

          <AddStrategy
            strategies={strategies}
            onDelete={handleDeleteStrategy}
          />
        </LeftPanel>

        {/* RIGHT SIDE */}
        <RightPanel>
          <MetricsGrid>
            <MetricCard title="Expected Profit" value={`₹ ${metrics.expected_profit}`} type="profit" />
            <MetricCard title="Best Case" value={`₹ ${metrics.best_case}`} type="best" />
            <MetricCard title="Worst Case" value={`₹ ${metrics.worst_case}`} type="worst" />
            <MetricCard title="Risk Level" value={metrics.strategy_label} type="risk" />
            <MetricCard title="Stability Index" value={`${metrics.stability_index}%`} type="stable" />
            <MetricCard title="Market Share" value={`${metrics.avg_market_share}%`} type="avg" />
          </MetricsGrid>

          {recommendationData && <Recommendation data={recommendationData} />}
          <CompareStrategies strategies={strategies} />
        </RightPanel>
      </Container>
    </>
  );
}

/* ================= RESPONSIVE LAYOUT ================= */

const Container = styled.div`
  padding: 80px 16px 20px;

  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 1024px) {
    grid-template-columns: 380px 1fr;
    gap: 60px;
  }
`;

const LeftPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightPanel = styled.div`
  width: 100%;
`;

/* ================= METRICS GRID ================= */

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;