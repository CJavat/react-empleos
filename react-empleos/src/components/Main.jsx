import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const Main = () => {
  return (
    <div className="flex flex-col desktopL:h-screen">
      <Header />

      <main className="w-full h-full flex flex-col justify-start items-center gap-2 mb-11">
        <Sidebar />

        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
