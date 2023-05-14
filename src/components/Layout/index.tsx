import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { ScriptProps } from "next/script";

export default function Layout({ children }: ScriptProps) {
  return (
    <>
      <main className="w-full h-screen bg-bodyColor font-bodyFont text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </>
  );
}
