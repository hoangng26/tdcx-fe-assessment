import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import { Toaster } from "../ui/toaster";
import Header from "./Header";

const Main = styled.main`
  min-height: calc(100vh - 52px);
  padding: 16px 0;
`;

const RootLayout: React.FC = () => {
  return (
    <>
      <Header />

      <Main className="!container">
        <Outlet />

        <Toaster />
      </Main>

      {/* <footer className="container">Footer</footer> */}
    </>
  );
};

export default RootLayout;
