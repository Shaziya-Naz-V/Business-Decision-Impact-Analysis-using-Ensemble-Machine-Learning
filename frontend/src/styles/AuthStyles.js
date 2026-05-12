// import styled from "styled-components";

// export const Page = styled.div`
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: radial-gradient(circle at top, #0f172a, #020617);
// `;

// export const Card = styled.div`
//   width: 420px;
//   background: rgba(80, 67, 67, 0.15);
//   backdrop-filter: blur(12px);
//   -webkit-backdrop-filter: blur(12px);
//   padding: 30px;
//   border-radius: 16px;
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   text-align: center;
//   color: white;
//   box-shadow: 0 20px 40px rgba(0,0,0,0.5);

// `;

// export const Title = styled.h2`
//   margin-bottom: 6px;
// `;

// export const Subtitle = styled.p`
//   color: #94a3b8;
//   font-size: 14px;
//   margin-bottom: 30px;
// `;

// export const Input = styled.input`
//   width: 100%;
//   padding: 14px;
//   margin-bottom: 16px;
//   border-radius: 10px;
//   border: 1px solid rgba(255,255,255,0.1);
//   color: black;
// `;

// export const Button = styled.button`
//   width: 100%;
//   padding: 14px;
//   border-radius: 12px;
//   border: none;
//   background: linear-gradient(90deg, #22d3ee, #2dd4bf);
//   font-weight: bold;
//   cursor: pointer;
// `;

// export const SwitchText = styled.p`
//   margin-top: 20px;
//   font-size: 14px;
//   color: #94a3b8;

//   span {
//     color: #22d3ee;
//     cursor: pointer;
//   }
// `;
import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: radial-gradient(circle at top, #0f172a, #020617);
`;

export const Card = styled.div`
  width: 100%;
  max-width: 420px;
  background: rgba(80, 67, 67, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  color: white;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);

  @media (min-width: 600px) {
    padding: 28px;
  }

  @media (min-width: 1024px) {
    padding: 32px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 6px;
  font-size: 20px;

  @media (min-width: 600px) {
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  color: #94a3b8;
  font-size: 13px;
  margin-bottom: 24px;

  @media (min-width: 600px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 14px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.1);
  background: #f8fafc;
  color: #0f172a;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #22d3ee;
    box-shadow: 0 0 0 2px rgba(34, 211, 238, 0.2);
  }

  @media (min-width: 1024px) {
    padding: 14px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(90deg, #22d3ee, #2dd4bf);
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (min-width: 1024px) {
    padding: 14px;
    font-size: 15px;
  }
`;

export const SwitchText = styled.p`
  margin-top: 18px;
  font-size: 13px;
  color: #94a3b8;

  span {
    color: #22d3ee;
    cursor: pointer;
    font-weight: 500;
  }

  @media (min-width: 600px) {
    font-size: 14px;
  }
`;