import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
