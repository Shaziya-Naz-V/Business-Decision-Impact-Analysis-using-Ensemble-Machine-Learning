// import styled from "styled-components";
// import simulationImg from "../assets/simulation.jpg";
// import riskImg from "../assets/risk1.jpg";
// import growthImg from "../assets/growth.jpg" // ✅ Proper import

// const Section = styled.section`
//   padding: 80px;
//   text-align: center;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 30px;
//   margin-top: 50px;
// `;

// const Card = styled.div`
//   background: #152146;
//   padding: 30px;
//   border-radius: 14px;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 16px;
// `;

// const Img = styled.img`
//   width: 250px;
//   height: 200px;
//   object-fit: cover;
//   border-radius: 8px;
// `;

// const CardTitle = styled.h3`
//   margin: 0;
//   font-size: 1.1rem;
// `;

// export default function Features() {
//   return (
//     <Section id="features">
//       <h2>
//         Powerful Features for{" "}
//         <span style={{ color: "#19c6d4" }}>Smart Decisions</span>
//       </h2>

//       <Grid>
//         <Card>
//           <Img src={simulationImg} alt="Scenario Simulation" /> 
//           <CardTitle>Scenario Simulation</CardTitle>
//         </Card>

//         <Card>
         
//            <Img src={riskImg} alt="Scenario Simulation" />
//           <CardTitle>Risk Assessment</CardTitle>
//         </Card>

//         <Card>
          
//            <Img src={growthImg} alt="Scenario Simulation" />
//           <CardTitle>Growth Projections</CardTitle>
//         </Card>
//       </Grid>
//     </Section>
//   );
// }

import styled from "styled-components";
import simulationImg from "../assets/simulation.jpg";
import riskImg from "../assets/risk1.jpg";
import growthImg from "../assets/growth.jpg";

export default function Features() {
  return (
    <Section id="features">
      <Heading>
        Powerful Features for{" "}
        <span>Smart Decisions</span>
      </Heading>

      <Grid>
        <Card>
          <Img src={simulationImg} alt="Scenario Simulation" />
          <CardTitle>Scenario Simulation</CardTitle>
        </Card>

        <Card>
          <Img src={riskImg} alt="Risk Assessment" />
          <CardTitle>Risk Assessment</CardTitle>
        </Card>

        <Card>
          <Img src={growthImg} alt="Growth Projections" />
          <CardTitle>Growth Projections</CardTitle>
        </Card>
      </Grid>
    </Section>
  );
}

const Section = styled.section`
  padding: 80px 40px;
  text-align: center;
  background: #0f172a;

  @media (max-width: 900px) { padding: 60px 24px; }
  @media (max-width: 560px) { padding: 50px 16px; }
`;

const Heading = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #fff;
  line-height: 1.3;

  span { color: #19c6d4; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 36px;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 28px;
  }
`;

const Card = styled.div`
  background: #152146;
  padding: 30px;
  border-radius: 14px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(25, 198, 212, 0.15);
  }

  @media (max-width: 560px) {
    padding: 20px;
    flex-direction: row;        /* image + title side by side on mobile */
    align-items: center;
    gap: 16px;
    text-align: left;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 280px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;

  @media (max-width: 900px) {
    height: 180px;
  }

  @media (max-width: 560px) {
    width: 90px;
    height: 80px;
    max-width: 90px;
    border-radius: 8px;
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #fff;

  @media (max-width: 560px) {
    font-size: 1rem;
  }
`;