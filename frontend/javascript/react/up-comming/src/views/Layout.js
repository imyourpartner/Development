import React from "react";
import Footer from "./Footer";
import Home from "./HomePage";
import Nav from '../components/TopNavBar/Nav';

export default function Layout() {
  return (
    <div>
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}
