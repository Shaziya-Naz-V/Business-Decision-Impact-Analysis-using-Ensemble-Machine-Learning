import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <Section>
      <Badge>Business Intelligence</Badge>
      <Title>
        Make Smarter <span>Business Decisions</span>
      </Title>
      <Text>
        Analyze strategic choices under uncertain market conditions. Get recommendations,
        predicted profits and risk insights. Make informed decisions with confidence.
      </Text>

      <Btn>
        <Primary onClick={() => navigate("/auth/signin")}>Get Start →</Primary>
      </Btn>

      <StatsBox>
        <Item><h2>10K+</h2><p>Simulations</p></Item>
        <Item><h2>95%</h2><p>Accuracy</p></Item>
        <Item><h2>500+</h2><p>Companies</p></Item>
        <Item><h2>24/7</h2><p>Support</p></Item>
      </StatsBox>
    </Section>
  );
}

const Section = styled.section`
  text-align: center;
  padding: 120px 20px 60px;

  @media (max-width: 768px) { padding: 90px 16px 40px; }
  @media (max-width: 480px) { padding: 80px 16px 30px; }
`;

const Badge = styled.span`
  background: #0c3c52;
  padding: 8px 14px;
  border-radius: 20px;
  color: #19c6d4;
  font-size: 0.85rem;
  font-weight: 500;
  display: inline-block;
`;

const Title = styled.h1`
  /* clamp: scales smoothly from 2rem (mobile) → 56px (desktop) */
  font-size: clamp(2rem, 6vw, 56px);
  margin: 20px 0 16px;
  line-height: 1.15;
  color: #fff;

  span { color: #19c6d4; }
`;

const Text = styled.p`
  color: #aaa;
  max-width: 600px;
  margin: 0 auto;
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.7;
`;

const Btn = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const Primary = styled.button`
  background: #19c6d4;
  border: none;
  padding: 14px 28px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  color: #0f172a;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #12aab7;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 320px;
  }
`;

const StatsBox = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 24px;
  padding: 40px 20px;
  margin-top: 40px;
  color: #19c6d4;
  border-top: 1px solid rgba(255, 255, 255, 0.07);

  @media (max-width: 480px) {
    gap: 20px;
    padding: 30px 16px;
  }
`;

const Item = styled.div`
  text-align: center;
  min-width: 100px;

  h2 {
    font-size: clamp(1.6rem, 4vw, 32px);
  }

  p {
    color: #aaa;
    font-size: 0.9rem;
    margin-top: 4px;
  }

  /* 2-column grid on very small screens */
  @media (max-width: 480px) {
    min-width: calc(50% - 20px);
  }
`;