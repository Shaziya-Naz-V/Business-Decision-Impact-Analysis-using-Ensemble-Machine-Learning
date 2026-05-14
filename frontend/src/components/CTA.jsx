import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();
  return (
    <Box>
      <Heading>
        Ready to Transform Your <span>Decision Making?</span>
      </Heading>
      <SubText>Join 500+ companies already making smarter business decisions.</SubText>
      <Button onClick={() => navigate("/auth/signin")}>Get Started Free →</Button>
    </Box>
  );
}

const Box = styled.section`
  margin: 40px auto;
  padding: 80px 60px;
  border-radius: 20px;
  text-align: center;
  background: linear-gradient(135deg, #0c2a4a 0%, #152146 100%);
  border: 1px solid rgba(25, 198, 212, 0.2);
  max-width: 900px;
  width: calc(100% - 80px);   /* ✅ breathing room on all screens */

  @media (max-width: 768px) {
    padding: 60px 32px;
    width: calc(100% - 40px);
    margin: 30px auto;
  }

  @media (max-width: 480px) {
    padding: 50px 20px;
    width: calc(100% - 32px);
    border-radius: 14px;
    margin: 20px auto;
  }
`;

const Heading = styled.h2`
  font-size: clamp(1.4rem, 4vw, 2rem);
  color: #fff;
  line-height: 1.3;
  margin: 0;

  span { color: #19c6d4; }
`;

const SubText = styled.p`
  color: #aaa;
  margin: 16px auto 0;
  max-width: 480px;
  font-size: clamp(0.88rem, 2vw, 1rem);
  line-height: 1.6;
`;

const Button = styled.button`
  margin-top: 28px;
  background: #19c6d4;
  border: none;
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
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