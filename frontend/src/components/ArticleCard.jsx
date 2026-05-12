// import { useState } from "react";
// import styled from "styled-components";

// export default function ArticleCard({
//   title,
//   introduction,
//   key_concepts,
//   when_where_how_to_use,
//   common_mistakes_to_avoid,
//   real_world_business_example
// }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <Card>
//         <h3>{title}</h3>

//         {/* Preview only 3 lines */}
//         <Preview>{introduction}</Preview>

//         <Bottom>
//           <ReadMore onClick={() => setOpen(true)}>Read more →</ReadMore>
//         </Bottom>
//       </Card>

//       {open && (
//         <ModalBg>
//           <Modal>
//             <h2>{title}</h2>

//             {/* Full content */}
//             {introduction && (
//               <>
//                 <SectionTitle>Introduction</SectionTitle>
//                 <ArticleText>{introduction}</ArticleText>
//               </>
//             )}

//             {key_concepts && (
//               <>
//                 <SectionTitle>Key Concepts</SectionTitle>
//                 <ArticleText>{key_concepts}</ArticleText>
//               </>
//             )}

//             {when_where_how_to_use && (
//               <>
//                 <SectionTitle>When / Where / How to Use</SectionTitle>
//                 <ArticleText>{when_where_how_to_use}</ArticleText>
//               </>
//             )}

//             {common_mistakes_to_avoid && (
//               <>
//                 <SectionTitle>Common Mistakes to Avoid</SectionTitle>
//                 <ArticleText>{common_mistakes_to_avoid}</ArticleText>
//               </>
//             )}

//             {real_world_business_example && (
//               <>
//                 <SectionTitle>Real World Business Example</SectionTitle>
//                 <ArticleText>{real_world_business_example}</ArticleText>
//               </>
//             )}

//             <Source>Content reference: businessblogs.com, medium.com</Source>

//             <Close onClick={() => setOpen(false)}>Close</Close>
//           </Modal>
//         </ModalBg>
//       )}
//     </>
//   );
// }

// // Styled components
// const Card = styled.div`
//   background: linear-gradient(180deg, #1e2f50, #395387);
//   border-radius: 18px;
//   padding: 24px;
//   color: white;
// `;

// const Preview = styled.p`
//   display: -webkit-box;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   line-height: 1.5;
//   margin-top: 10px;
// `;

// const Bottom = styled.div`
//   margin-top: 18px;
// `;

// const ReadMore = styled.span`
//   color: #22d3ee;
//   cursor: pointer;
// `;

// const ModalBg = styled.div`
//   position: fixed;
//   inset: 0;
//   background: rgba(0,0,0,0.7);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const Modal = styled.div`
//   background: #0f172a;
//   padding: 25px;
//   width: 600px;
//   max-height: 80vh;
//   overflow-y: auto;
//   border-radius: 12px;
//   color: white;
// `;

// const ArticleText = styled.p`
//   margin-top: 15px;
//   line-height: 1.6;
//   white-space: pre-line;
// `;

// const SectionTitle = styled.h4`
//   margin-top: 20px;
//   color: #22d3ee;
// `;

// const Source = styled.div`
//   margin-top: 15px;
//   font-size: 12px;
//   color: gray;
// `;

// const Close = styled.button`
//   margin-top: 15px;
//   padding: 8px 16px;
//   background: #22c55e;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
// `;


import { useState } from "react";
import styled from "styled-components";

export default function ArticleCard({
  title,
  introduction,
  key_concepts,
  when_where_how_to_use,
  common_mistakes_to_avoid,
  real_world_business_example
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card onClick={() => setOpen(true)}>
        <h3>{title}</h3>
        <Preview>{introduction}</Preview>
        <ReadMore>Read more →</ReadMore>
      </Card>

      {open && (
        <ModalBg onClick={() => setOpen(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <h2>{title}</h2>

            {introduction && (
              <>
                <SectionTitle>Introduction</SectionTitle>
                <ArticleText>{introduction}</ArticleText>
              </>
            )}

            {key_concepts && (
              <>
                <SectionTitle>Key Concepts</SectionTitle>
                <ArticleText>{key_concepts}</ArticleText>
              </>
            )}

            {when_where_how_to_use && (
              <>
                <SectionTitle>When / Where / How to Use</SectionTitle>
                <ArticleText>{when_where_how_to_use}</ArticleText>
              </>
            )}

            {common_mistakes_to_avoid && (
              <>
                <SectionTitle>Common Mistakes to Avoid</SectionTitle>
                <ArticleText>{common_mistakes_to_avoid}</ArticleText>
              </>
            )}

            {real_world_business_example && (
              <>
                <SectionTitle>Real World Business Example</SectionTitle>
                <ArticleText>{real_world_business_example}</ArticleText>
              </>
            )}

            <Source>Content reference: businessblogs.com, medium.com</Source>

            <Close onClick={() => setOpen(false)}>Close</Close>
          </Modal>
        </ModalBg>
      )}
    </>
  );
}

/* ================= STYLES ================= */

const Card = styled.div`
  background: linear-gradient(180deg, #1e2f50, #395387);
  border-radius: 12px;
  padding: 16px;
  color: white;
  cursor: pointer;

  h3 {
    font-size: 16px;
    line-height: 1.3;
  }

  @media (min-width: 600px) {
    padding: 18px;
    border-radius: 14px;

    h3 {
      font-size: 17px;
    }
  }

  @media (min-width: 1024px) {
    padding: 22px;
    border-radius: 16px;

    h3 {
      font-size: 18px;
    }

    &:hover {
      transform: translateY(-6px);
      transition: 0.3s;
    }
  }
`;

const Preview = styled.p`
  margin-top: 8px;
  color: #cbd5f5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 13px;

  @media (min-width: 600px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    font-size: 15px;
    -webkit-line-clamp: 3;
  }
`;

const ReadMore = styled.span`
  display: inline-block;
  margin-top: 10px;
  color: #22d3ee;
  font-size: 14px;
`;

const ModalBg = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: #0f172a;
  width: 100%;
  height: 100%;
  padding: 18px;
  overflow-y: auto;
  color: white;

  h2 {
    font-size: 18px;
  }

  @media (min-width: 600px) {
    width: 95%;
    max-width: 700px;
    height: auto;
    max-height: 90vh;
    border-radius: 14px;
    padding: 22px;

    h2 {
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) {
    padding: 26px;

    h2 {
      font-size: 22px;
    }
  }
`;

const ArticleText = styled.p`
  margin-top: 12px;
  line-height: 1.6;
  font-size: 14px;
  white-space: pre-line;
  color: #e2e8f0;

  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;

const SectionTitle = styled.h4`
  margin-top: 18px;
  color: #22d3ee;
`;

const Source = styled.div`
  margin-top: 15px;
  font-size: 12px;
  color: gray;
`;

const Close = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  background: #22c55e;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
`;