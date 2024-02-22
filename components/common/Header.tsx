"use client";

import Logo from "@/assets/svg/logo";
import { Button } from "@/components/ui/button";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import React from "react";
type HeaderProps = {
  sidebar?: boolean,
  setSidebar: (val: boolean) => void;
}
export const Header: React.FC<HeaderProps> = ({ sidebar, setSidebar }) => {
  return (
    <div className="py-6 pb-5 border-b border-[rgba(0,0,0,.4)] sticky top-0 bg-white backdrop-filter backdrop-blur-md">
      <div className="px-8 m-auto max-w-custom flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Logo />

        </div>
        <div className="flex-1 md:flex hidden item-center justify-end">
          <ul className="flex items-center justify-between gap-x-3 sm:gap-x-6">
            <li className="text-base cursor-pointer font-blog-light hover:bg-gray-100 py-1 px-3 rounded-md font-medium">
              My Story
            </li>
            <li className="text-base cursor-pointer hover:bg-gray-100 py-1 px-3 rounded-md font-blog-light">
              Write
            </li>
            <li className="text-base cursor-pointer hover:bg-gray-100 py-1 px-3 rounded-md font-medium font-blog-light">
              Sign In
            </li>
            <Button size="default" className="font-blog-light font-medium text-sm">Get Started</Button>
          </ul>

        </div>
        <div className="flex md:hidden text-text_dark_1 cursor-pointer items-center">
          <div onClick={() => setSidebar(!sidebar)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[rgba(0,0,0,.1)]">
            {sidebar ? <RxCross1 fontSize={'26px'} /> : <HiOutlineBars3CenterLeft fontSize={'27px'} />}
          </div>
        </div>
      </div>
    </div>
  );
};
