"use client";
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button";
import { HiBars2 } from "react-icons/hi2";
import React, { useState } from "react";
type HeaderProps = {
  menu?: boolean,
  type?: boolean,
  setMenu: (val: boolean) => void;
}
export const Header: React.FC<HeaderProps> = ({ menu, setMenu, type }) => {
  const [active, setActive] = useState(false)
  return (
    <div className="py-8 pb-5 fixed w-full md:px-12 top-0 z-50">
      <div className="w-[90%] m-auto max-w-custom flex items-center justify-between">
        <h2 className={`text-2xl md:text-4xl ${type ? 'text-[#fff]' : 'text-[#Fff]'}`}>
          <span className="font-Agency_Extended">ONE: </span> <span style={{letterSpacing:"3px"}} className="text-light font-Agency_light">NILL</span></h2>
        <div className="flex items-center gap-4">
          {
            !type && <div
              onMouseLeave={() => setActive(false)}
              onMouseOver={() => setActive(true)}

              className="h-14 cursor-pointer relative overflow-hidden min-w-52 rounded-[40px] text-lg bg-transparent text-text_dark_1 font-Agency_medium font-normal">
              <motion.div
                animate={{ top: active ? '-100%' : "0" }}
                transition={{ duration: .5, ease: [0.75, 0, 0.24, 1] }}
                className="flex relative h-full min-w-52 flex-col rounded-[40px]">
                <Button

                  className={`h-full w-full ${type ? 'bg-[#000] text-white' : 'bg-[#Fff] text-text_dark_1'} font-normal text-base font-Agency_medium rounded-[40px] text-center`}>
                  Get in Touch
                </Button>
                <Button className={`h-full w-full ${type ? 'bg-[#000] text-white' : 'bg-[#000] text-white'} 
            absolute top-[100%] left-0 font-normal text-base font-Agency_medium rounded-[40px] text-center`}>
                  Visit Our Works
                </Button>
              </motion.div>
            </div>
          }

          {/*  */}
          {
            type ? <div onClick={() => setMenu(!menu)} className={"icons w-12 h-12 cursor-pointer z-50 relative text-text_dark_1 text-xl md:text-3xl hover:bg-[rgba(180,180,180,.2)] hover:transform hover:-translate-y-1 transition ease-in duration-300 rounded-full flex items-center justify-center"}>
              <HiBars2 />
            </div> : <div onClick={() => setMenu(!menu)} className={"icons w-12 h-12 cursor-pointer z-50 relative text-white text-xl md:text-3xl hover:bg-[rgba(180,180,180,.2)] hover:transform hover:-translate-y-1 transition ease-in duration-300 rounded-full flex items-center justify-center"}>
              <HiBars2 />
            </div>
          }
        </div>
      </div>
    </div>
  );
};
