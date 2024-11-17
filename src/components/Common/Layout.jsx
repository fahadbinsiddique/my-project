import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
};

export default Layout;
