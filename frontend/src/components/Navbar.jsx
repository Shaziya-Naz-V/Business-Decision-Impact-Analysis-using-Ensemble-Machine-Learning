// import styled from "styled-components";
// import { Menu, LogOut } from "lucide-react";
// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();
//   const menuRef = useRef(null);

//   const user = localStorage.getItem("user_id");

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // ✅ LOGOUT FUNCTION (FINAL)
//   const handleLogout = () => {
//     localStorage.removeItem("user_id");
//     window.location.href = "/"; // 🔥 refresh + redirect
//   };

//   return (
//     <Bar>
//       <Left>
//         <>⚡</>
//         <Title>
//           <h1>DecisionAI</h1>
//           <h3>Business Decision Analysis</h3>
//         </Title>
//       </Left>

//       <Right ref={menuRef}>
//         {/* ✅ Logout only if logged in */}
//         {user && (
//           <Logout onClick={handleLogout}>
//             <LogOut size={16} />
//             Logout
//           </Logout>
//         )}

//         <MenuBox>
//           <Menu
//             size={22}
//             onClick={() => setOpen(!open)}
//             style={{ cursor: "pointer" }}
//           />

//           {open && (
//             <Dropdown>
//               {/* ✅ Dashboard only if logged in */}
//               {user && (
//                 <Item onClick={() => navigate("/articles")}>
//                   Article
//                 </Item>
//               )}

//               {/* ✅ Knowledge always */}
//               <Item onClick={() => navigate("/Dashboard")}>
//                 Dashboard
//               </Item>
//             </Dropdown>
//           )}
//         </MenuBox>
//       </Right>
//     </Bar>
//   );
// }

// /* styles unchanged */
// const Bar = styled.div`
//   width: 100%;
//   height: 70px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 32px;
//   background: rgba(15, 23, 42, 0.75);
//   backdrop-filter: blur(12px);
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 100;
// `;

// const Left = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 14px;
// `;

// const Title = styled.div`
//   display: flex;
//   flex-direction: column;
//   h1 { margin: 0; font-size: 18px; color: #e5e7eb; }
//   h3 { margin: 0; font-size: 13px; color: #94a3b8; }
// `;

// const Right = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 18px;
// `;

// const Logout = styled.button`
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   background: transparent;
//   border: 1px solid rgba(255,255,255,0.1);
//   color: #e5e7eb;
//   padding: 8px 14px;
//   border-radius: 10px;
//   cursor: pointer;

//   &:hover {
//     background: linear-gradient(135deg, #22c55e, #06b6d4);
//   }
// `;

// const MenuBox = styled.div`
//   position: relative;
// `;

// const Dropdown = styled.div`
//   position: absolute;
//   right: 0;
//   top: 42px;
//   background: linear-gradient(180deg, #1f293d, #070c16);
//   border-radius: 10px;
//   min-width: 160px;
// `;

// const Item = styled.div`
//   padding: 12px 16px;
//   cursor: pointer;
//   &:hover { 
//   text-decoration:underline;
//  }
// `;
import styled from "styled-components";
import { Menu, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const user = localStorage.getItem("user_id");

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    window.location.href = "/";
  };

  return (
    <Bar>
      <Left onClick={() => navigate("/")}>
        <Logo>⚡</Logo>
        <Title>
          <h1>DecisionAI</h1>
          <h3>Business Decision Analysis</h3>
        </Title>
      </Left>

      <Right ref={menuRef}>
        {user && (
          <Logout onClick={handleLogout}>
            <LogOut size={16} />
            Logout
          </Logout>
        )}

        <MenuBox>
          <Menu
            size={22}
            onClick={() => setOpen(!open)}
            style={{ cursor: "pointer" }}
          />

          {open && (
            <Dropdown>
              {user && (
                <Item onClick={() => navigate("/articles")}>
                  Articles
                </Item>
              )}

              <Item onClick={() => navigate("/dashboard")}>
                Dashboard
              </Item>
            </Dropdown>
          )}
        </MenuBox>
      </Right>
    </Bar>
  );
}

/* ================= STYLES ================= */

const Bar = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(12px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  @media (min-width: 600px) {
    padding: 0 24px;
  }

  @media (min-width: 1024px) {
    padding: 0 40px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Logo = styled.div`
  font-size: 20px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0;
    font-size: 14px;
    color: #e5e7eb;
  }

  h3 {
    margin: 0;
    font-size: 11px;
    color: #94a3b8;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 16px;
    }

    h3 {
      font-size: 12px;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 18px;
    }

    h3 {
      font-size: 13px;
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (min-width: 600px) {
    gap: 18px;
  }
`;

const Logout = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.1);
  color: #e5e7eb;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background: linear-gradient(135deg, #22c55e, #06b6d4);
  }

  @media (min-width: 600px) {
    padding: 8px 14px;
    font-size: 13px;
  }
`;

const MenuBox = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: 40px;
  background: linear-gradient(180deg, #1f293d, #070c16);
  border-radius: 10px;
  min-width: 150px;
  overflow: hidden;
`;

const Item = styled.div`
  padding: 12px 14px;
  cursor: pointer;
  font-size: 13px;
  color: #e5e7eb;

  &:hover {
    background: rgba(255,255,255,0.08);
  }
`;