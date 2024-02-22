"use client";

import Logo from "@/assets/svg/logo";
import { Button } from "@/components/ui/button";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import React from "react";
type HeaderProps = {
  sidebar?: boolean,
  setSidebar?: (val: boolean) => void;
}
export const Header: React.FC<HeaderProps> = ({ sidebar, setSidebar }) => {
  return (
    <div className="py-8 pb-5 fixed w-full px-12 top-0 z-40">
      <div className="px-8 m-auto max-w-custom flex items-center justify-between">
        <h2 className="text-4xl text-white"><span className="font-Agency_Extended">ONE: </span> NILL</h2>
        <div className="py-4 px-8 bg-white font-NORMAL font-Agency_light rounded-[40px] text-center text-dark">
          Get in Touch
        </div>
      </div>
    </div>
  );
};
