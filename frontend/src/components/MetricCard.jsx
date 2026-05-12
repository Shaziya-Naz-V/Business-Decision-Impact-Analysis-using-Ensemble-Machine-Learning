// import styled from "styled-components";
// import {
//   TrendingUp,
//   TrendingDown,
//   ShieldAlert,
//   BarChart3,
//   Activity,
// } from "lucide-react";

// const Card = styled.div`
//   background: linear-gradient(180deg, #1e293d, #070c16);
//   border:1px solid gray;
//   margin-bottom:20px;
//   border-radius: 18px;
//   padding: 18px;
//   width: 220px;
// `;

// const Header = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 12px;
// `;

// const IconWrap = styled.div`
//   width: 38px;
//   height: 38px;
//   border-radius: 12px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   background: ${({ color }) => `${color}22`};
//   box-shadow: 0 0 12px ${({ color }) => `${color}55`};

//   svg {
//     stroke: ${({ color }) => color};
//   }
// `;

// const Title = styled.p`
//   font-size: 13px;
//   color: #9ca3af;
// `;

// const Value = styled.h2`
//   margin-top: 14px;
//   font-size: 22px;
//   font-weight: 700;
//   color: ${({ color }) => color};
// `;

// export default function MetricCard({ title, value, type }) {
//   const config = {
//     profit: { icon: TrendingUp, color: "#22c55e" },
//     best: { icon: TrendingUp, color: "#10b981" },
//     worst: { icon: TrendingDown, color: "#ef4444" },
//     risk: { icon: ShieldAlert, color: "#db0000" },
//     stable: { icon: Activity, color: "#3b82f6" },
//     avg: { icon: BarChart3, color: "#06b6d4" },
//   };

//   const Icon = config[type].icon;
//   const color = config[type].color;

//   return (
//     <Card>
//       <Header>
//         <IconWrap color={color}>
//           <Icon size={18} />
//         </IconWrap>
//         <Title>{title}</Title>
//       </Header>

//       <Value color={color}>{value}</Value>
//     </Card>
//   );
// }

import styled from "styled-components";
import {
  TrendingUp,
  TrendingDown,
  ShieldAlert,
  BarChart3,
  Activity,
} from "lucide-react";

/* ================= CARD ================= */

const Card = styled.div`
  background: linear-gradient(180deg, #1e293d, #070c16);
  border: 1px solid #374151;
  border-radius: 18px;
  padding: 18px;

  width: 100%;
  max-width: 240px;

  /* center in grid */
  margin: 0 auto;

  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

/* ================= HEADER ================= */

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

/* ================= ICON ================= */

const IconWrap = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ color }) => `${color}22`};
  box-shadow: 0 0 12px ${({ color }) => `${color}40`};

  svg {
    stroke: ${({ color }) => color};
  }
`;

/* ================= TEXT ================= */

const Title = styled.p`
  font-size: 13px;
  color: #9ca3af;
`;

const Value = styled.h2`
  margin-top: 14px;
  font-size: 22px;
  font-weight: 700;
  color: ${({ color }) => color};
`;

/* ================= COMPONENT ================= */

export default function MetricCard({ title, value, type }) {
  const config = {
    profit: { icon: TrendingUp, color: "#22c55e" },
    best: { icon: TrendingUp, color: "#10b981" },
    worst: { icon: TrendingDown, color: "#ef4444" },
    risk: { icon: ShieldAlert, color: "#f43f5e" },
    stable: { icon: Activity, color: "#3b82f6" },
    avg: { icon: BarChart3, color: "#06b6d4" },
  };

  const { icon: Icon, color } = config[type] || config.avg;

  return (
    <Card>
      <Header>
        <IconWrap color={color}>
          <Icon size={18} />
        </IconWrap>
        <Title>{title}</Title>
      </Header>

      <Value color={color}>{value}</Value>
    </Card>
  );
}