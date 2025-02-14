import { ReactIcon } from "@/assets";
import React from "react";
import { Link, Outlet } from "react-router";
import styled from "styled-components";
import { Button } from "../ui/button";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
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

const Main = styled.main`
  min-height: calc(100vh - 52px);
  padding: 16px 0;
`;

const RootLayout: React.FC = () => {
  return (
    <>
      <header className="shadow-sm">
        <HeaderWrapper className="!container">
          <Link to="/">
            <LogoWrapper>
              <img src={ReactIcon} alt="Logo" className="logo" />

              <span className="text">React App</span>
            </LogoWrapper>
          </Link>

          <nav>
            <ul className="flex space-x-8">
              <li className="hover:underline">
                <Link to="/">Home</Link>
              </li>

              <li className="hover:underline">
                <Link to="/to-do">To do</Link>
              </li>

              <li className="hover:underline">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="flex space-x-4">
            <Button variant="ghost">Login</Button>
            <Button>Register</Button>
          </div>
        </HeaderWrapper>
      </header>

      <Main className="!container">
        <Outlet />
      </Main>

      {/* <footer className="container">Footer</footer> */}
    </>
  );
};

export default RootLayout;
