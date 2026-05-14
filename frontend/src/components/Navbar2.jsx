import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Navbar2() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <Nav>
        <Logo>⚡ StrategyAI</Logo>

        <Menu>
          <MenuItem onClick={() => scrollTo("features")}>Features</MenuItem>
          <MenuItem onClick={() => scrollTo("how-it-works")}>How it Works</MenuItem>
          <MenuItem onClick={() => { navigate("/articles"); setMenuOpen(false); }}>Knowledge</MenuItem>
        </Menu>

        {/* ✅ use $open (transient prop) — won't pass to DOM */}
        <Hamburger $open={menuOpen} onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </Hamburger>
      </Nav>

      <MobileMenu $open={menuOpen}>
        <MobileItem onClick={() => scrollTo("features")}>Features</MobileItem>
        <MobileItem onClick={() => scrollTo("how-it-works")}>How it Works</MobileItem>
        <MobileItem onClick={() => { navigate("/articles"); setMenuOpen(false); }}>Knowledge</MobileItem>
      </MobileMenu>
    </>
  );
}

const Nav = styled.nav`
  width: 100%; height: 70px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 32px;
  background: rgba(15, 23, 42, 0.85);
  border-bottom: 2px solid rgba(128,128,128,0.4);
  backdrop-filter: blur(12px);
  position: fixed; top: 0; left: 0; z-index: 1000;
  @media (max-width: 768px) { padding: 0 20px; }
`;

const Logo = styled.h2`color: #19c6d4;`;

const Menu = styled.ul`
  display: flex; list-style: none; gap: 30px; color: #ccc;
  @media (max-width: 768px) { display: none; }
`;

const MenuItem = styled.li`
  cursor: pointer;
  &:hover { color: #19c6d4; }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column; justify-content: center; align-items: center;
  width: 44px; height: 44px; gap: 6px;
  background: none; border: none; cursor: pointer;

  span {
    display: block; width: 26px; height: 2.5px;
    background: #ccc; border-radius: 3px;
    transform-origin: center;
    transition: all 0.3s ease;
  }

  /* ✅ $open instead of open */
  ${({ $open }) => $open && `
    span:nth-child(1) { transform: translateY(8.5px) rotate(45deg); background: #19c6d4; }
    span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    span:nth-child(3) { transform: translateY(-8.5px) rotate(-45deg); background: #19c6d4; }
  `}

  @media (max-width: 768px) { display: flex; }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed; top: 70px; left: 0; width: 100%;
  background: rgba(10, 18, 38, 0.97);
  backdrop-filter: blur(16px);
  border-bottom: 2px solid rgba(25,198,212,0.25);
  flex-direction: column;
  z-index: 999; padding: 12px 0 20px;

  /* ✅ $open instead of open */
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: translateY(${({ $open }) => ($open ? "0" : "-10px")});
  pointer-events: ${({ $open }) => ($open ? "all" : "none")};
  transition: opacity 0.3s ease, transform 0.3s ease;

  @media (max-width: 768px) { display: flex; }
`;

const MobileItem = styled.li`
  list-style: none; padding: 14px 32px;
  color: #ccc; font-size: 1rem; cursor: pointer;
  border-left: 3px solid transparent;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
  &:hover { color: #19c6d4; border-left-color: #19c6d4; background: rgba(25,198,212,0.06); }
`;