import { ReactIcon } from "@/assets";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import styled from "styled-components";
import { Button } from "../ui/button";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  position: relative;
`;

const LogoWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  .logo {
    width: 24px;
    height: 24px;
  }

  .text {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const NavWrapper = styled.nav<{ isOpen: boolean }>`
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 24px;
    height: 2px;
    background-color: #000;
    transition: all 0.3s ease;
  }
`;

const Header: React.FC = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="shadow-sm">
      <HeaderWrapper className="!container">
        <Link to="/">
          <LogoWrapper>
            <img src={ReactIcon} alt="Logo" className="logo" />
            <span className="text">React App</span>
          </LogoWrapper>
        </Link>

        <HamburgerButton onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </HamburgerButton>

        <NavWrapper isOpen={isMenuOpen}>
          <NavList>
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/to-do">To do</Link>
            </li>
            <li className="hover:underline">
              <Link to="/search-filter">Search Filter & Fetch Data</Link>
            </li>
            <li className="hover:underline">
              <Link to="/counter">Counter</Link>
            </li>
            <li className="hover:underline">
              <Link to="/validation">Form Validation</Link>
            </li>
          </NavList>
        </NavWrapper>

        <ButtonGroup>
          <Button variant="ghost">Login</Button>
          <Button>Register</Button>
        </ButtonGroup>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
