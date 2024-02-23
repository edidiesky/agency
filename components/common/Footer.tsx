"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
export const Footer = () => {
  return (
    <div className="pb-20 pt-32 bg-[#000] w-full">
      <div className="w-[90%] max-w-custom_1 mx-auto flex flex-col gap-20">
        <div className="w-full">
          <h2 className="text-4xl font-bold font-Agency_medium text-white">
            Ready for take-off?
            <span className="block">
              Get in touch
            </span>
          </h2>
        </div>

        <div className="w-full grid text-white md:grid-cols-3 grid-cols-2 gap-12">
          <div className="flex flex-col gap-4 font-bold font-Agency_medium">
            <h4 className="text-xl font-medium font-Agency_bold">Sitemap</h4>
            <div className="flex font-medium flex-col gap-2">
              <h5 className="text-base font-Agency_light">Home</h5>

              <h5 className="text-base font-Agency_light">

                Work</h5>
              <h5 className="text-base font-Agency_light">

                Jobs (2)</h5>
              <h5 className="text-base font-Agency_light">
                Contact</h5>

            </div>


          </div>


          <div className="flex flex-col gap-4 font-bold font-Agency_medium">
            <h4 className="text-xl font-medium font-Agency_bold">Address</h4>
            <div className="flex font-medium flex-col gap-1">
              <h5 className="text-base font-Agency_light">Sarphatikade 14</h5>

              <h5 className="text-base font-Agency_light">4017 WV Amsterdam</h5>
              <h5 className="text-base font-Agency_light">Netherlands</h5>

            </div>


          </div>


          <div className="flex flex-col gap-4 font-bold font-Agency_medium">
            <h4 className="text-xl font-medium font-Agency_bold">Contact</h4>
            <div className="flex font-medium flex-col gap-2">
              <h5 className="text-base font-Agency_light">Hello@onenil.comm</h5>
            </div>


          </div>
        </div>

        <div className="w-full flex items-center gap-4">
          <h4 className="text-xs text-text_grey_1 font-light font-Agency_light">
            Privacy Policy
          </h4>
          <h4 className="text-xs text-text_grey_1 font-light font-Agency_light">
            Terms and Conditions
          </h4>
        </div>


        <div className="w-full pt-8 border-t border-[rgba(255,255,255,.1)] flex items-center gap-4 justify-between">
          <h4 className="text-sm text-text_grey_1 font-light font-Agency_light">
            Code By Victor Essien
          </h4>
          <div className="text-lg flex items-center gap-4 text-text_grey_1 font-light font-Agency_light">
            <Twitter />
            <Facebook />
            <Instagram />
          </div>
        </div>

      </div>
    </div>
  );
};
