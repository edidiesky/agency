"use client";
import Logo from "@/assets/svg/logo";
import React from "react";
export const Loader = () => {
  return (
    <div className="flex preloader fixed top-0 left-0 items-center justify-center z-50 bg-[#000] w-full h-[100vh]">
     <span className="logo">
        <Logo />
     </span>
    </div>
  );
};
