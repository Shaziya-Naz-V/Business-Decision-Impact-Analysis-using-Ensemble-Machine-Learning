import styled from "styled-components";

export default function HowItWorks() {
  return (
    <Wrapper id="how-it-works">
      <h2>
        How It <span style={{ color: "#19c6d4" }}>Works</span>
      </h2>

      <Section>
        <Step>
          <StepNum>01</StepNum>
          <StepTitle>Define Strategy</StepTitle>
          <StepText>
            Business users enter key parameters such as pricing, marketing spend,
            and production costs. The system analyzes historical data and market
            trends to generate multiple strategies for evaluation.
          </StepText>
        </Step>

        <Step>
          <StepNum>02</StepNum>
          <StepTitle>Run Simulation</StepTitle>
          <StepText>
            Each strategy is processed through ensemble ML models (XGBoost,
            CatBoost, Extra Trees Regressor) to simulate revenue, profit, and
            market impact before launch.
          </StepText>
        </Step>

        <Step>
          <StepNum>03</StepNum>
          <StepTitle>Get Insights</StepTitle>
          <StepText>
            The platform compares predicted results and presents actionable
            insights, helping businesses choose the most effective strategy with
            confidence.
          </StepText>
        </Step>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 80px 40px;
  text-align: center;
  background: #0f172a;

  h2 {
    font-size: clamp(1.5rem, 4vw, 2rem);
    color: #fff;
  }

  @media (max-width: 900px) { padding: 60px 24px; }
  @media (max-width: 560px) { padding: 50px 16px; }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* ✅ grid instead of fixed flex */
  gap: 24px;
  margin-top: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;           /* ✅ stacks on tablet & mobile */
    gap: 20px;
  }
`;

const Step = styled.div`
  background: #152146;
  padding: 30px;
  border-radius: 14px;
  color: white;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(25, 198, 212, 0.12);
  }

  @media (max-width: 560px) { padding: 24px 20px; }
`;

const StepNum = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
  color: #19c6d4;
`;

const StepTitle = styled.strong`
  font-size: 1.1rem;
  color: #fff;
`;

const StepText = styled.p`
  color: #aaa;
  font-size: 0.92rem;
  line-height: 1.7;
  margin: 0;
`;