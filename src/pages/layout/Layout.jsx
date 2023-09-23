import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../components";
import ScrollButton from "../../components/scrollButton/ScrollButton";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default Layout;
