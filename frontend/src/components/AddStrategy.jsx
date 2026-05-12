import styled from "styled-components";

// ─── Styled Components ────────────────────────────────────────────────

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const SectionLabel = styled.p`
  color: #94a3b8;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 20px 0px 16px 40px;

`;

const CardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Card = styled.div`
  width:380px;
  background: #131c2e;
  border: 1px solid #1e2d45;
  border-radius: 14px;
  padding: 20px;
  transition: border-color 0.2s;
  margin-left:40px;
  margin-bottom: 30px;
  &:hover {
    border-color: #2d4a6e;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ProductName = styled.div`
  color: #94a3b8;
  font-size: 13px;
  margin-top: 2px;
`;
const StatusDot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ color }) => color};
  flex-shrink: 0;
`;

const CardTitle = styled.span`
  color: #f1f5f9;
  font-size: 16px;
  font-weight: 700;
`;

const DeleteBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  &:hover svg {
    fill: #f87171;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 16px;
`;

const MetricBoxWrapper = styled.div`
  background: #0d1525;
  border-radius: 8px;
  padding: 10px 12px;
`;

const MetricLabel = styled.div`
  color: #64748b;
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const MetricValue = styled.div`
  color: #38bdf8;
  font-size: 17px;
  font-weight: 700;
`;

const Divider = styled.div`
  height: 1px;
  background: #1e2d45;
  margin-bottom: 14px;
`;

const StatsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StatLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatName = styled.span`
  color: #94a3b8;
  font-size: 13px;
`;

const StatValue = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({ color }) => color};
`;

// ─── Sub Components ───────────────────────────────────────────────────

const MetricBox = ({ label, value }) => (
  <MetricBoxWrapper>
    <MetricLabel>{label}</MetricLabel>
    <MetricValue>{value}</MetricValue>
  </MetricBoxWrapper>
);

const StatLine = ({ label, value, color }) => (
  <StatLineWrapper>
    <StatName>{label}</StatName>
    <StatValue color={color}>{value}</StatValue>
  </StatLineWrapper>
);

// ─── Strategy Card ────────────────────────────────────────────────────

const formatRupee = (num) => {
  return "₹ " + String(num).replace("$", "");
};

const StrategyCard = ({
  title,
  productName, 
  rank,
  statusColor = "green",
  price,
  marketing,
  cost,
  expectedProfit,
  riskScore,
  stability,
  onDelete,
}) => {
  return (
    <Card>
      <CardHeader>
        <div>
          <TitleRow>
            <StatusDot color={statusColor === "green" ? "#4ade80" : "#38bdf8"} />
            <CardTitle>{title}</CardTitle>
            <ProductName>{productName}</ProductName>
            <DeleteBtn onClick={onDelete} title="Delete">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#475569">
                <path d="M3 6h18v2H3zm2 2h14l-1.5 13H6.5L5 8zm5 2v9h2v-9h-2zm4 0v9h2v-9h-2zm-5-6V3h4v1h4V2H7v2h4V4H9z" />
              </svg>
            </DeleteBtn>
          </TitleRow>
        </div>
      </CardHeader>

      <MetricsGrid>
        <MetricBox label="Price" value={formatRupee(price)} />
        {/* <MetricBox label="Quality" value={quality} /> */}
        <MetricBox label="Marketing" value={formatRupee(marketing)} />
        <MetricBox label="Cost" value={formatRupee(cost)} />
      </MetricsGrid>

      <Divider />

      <StatsRow>
        <StatLine label="Expected Profit" value={formatRupee(expectedProfit)} color="#4ade80" />
        <StatLine label="Risk Score" value={riskScore} color="#fb923c" />
        <StatLine label="Stability" value={stability} color="#38bdf8" />
      </StatsRow>
    </Card>
  );
};


// ─── Main Export ──────────────────────────────────────────────────────

export default function AddStrategy({ strategies = [], onDelete }) {
  if (strategies.length === 0) return null;

  return (
    <Wrapper>
      <SectionLabel>Your Strategies ({strategies.length})</SectionLabel>
      <CardsList>
        {strategies.map((s) => (
          <StrategyCard key={s.id} {...s} onDelete={() => onDelete(s.id)} />
        ))}
      </CardsList>
    </Wrapper>
  );
}
