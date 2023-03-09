import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const Main = () => {
  return (
    <>
      <Header />
      <main className="w-full  flex flex-col justify-start items-center gap-2">
        <Sidebar />

        <Outlet />
      </main>
      <Footer />
    </>
  );
};
