import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./Layout.scss";
import Sidebar from "./Sidebar";
import MainNavigation from "@/components/navigation/MainNavigation";

/**
 * Layout principal de l'application
 */
const Layout: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-wrapper">
        <Header />
        <MainNavigation />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
