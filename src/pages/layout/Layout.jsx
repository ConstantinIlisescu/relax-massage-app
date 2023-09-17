import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../components";

function Layout() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
