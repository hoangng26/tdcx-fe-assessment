import React from "react";
import { Outlet } from "react-router";

const RootLayout: React.FC = () => {
  return (
    <>
      <header className="container">Header</header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">Footer</footer>
    </>
  );
};

export default RootLayout;
