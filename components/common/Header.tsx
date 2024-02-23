"use client";

import Logo from "@/assets/svg/logo";
import { Button } from "@/components/ui/button";
import { RxCross1 } from "react-icons/rx";
import { HiBars2 } from "react-icons/hi2";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import React from "react";
type HeaderProps = {
  sidebar?: boolean,
  setSidebar?: (val: boolean) => void;
}
export const Header: React.FC<HeaderProps> = ({ sidebar, setSidebar }) => {
  return (
    <div className="py-8 pb-5 fixed w-full  md:px-12 top-0 z-40">
      <div className="w-[90%] m-auto max-w-custom flex items-center justify-between">
        <h2 className="text-2xl md:text-4xl text-white"><span className="font-Agency_Extended">ONE: </span> NILL</h2>
        <div className="flex items-center gap-4">
          <Button className="py-3 md:py-3 px-4 md:px-8 bg-white font-normal text-base font-Agency_medium rounded-[40px] text-center text-dark">
            Get in Touch
          </Button>
          <div className="icons w-12 h-12 text-white text-xl md:text-3xl hover:bg-[rgba(180,180,180,.2)] hover:transform hover:-translate-y-1 transition ease-in duration-300 rounded-full flex items-center justify-center">
            <HiBars2 />
          </div>
        </div>
      </div>
    </div>
  );
};
