"use client"
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';
const Hero = () => {
    return <div data-scroll style={{ minHeight: "100vh" }} className=' relative w-full flex items-center justify-center'>
        <div style={{ background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.2) 100%)" }} className="absolute h-full w-full z-30 left-0 top-0"></div>
        <div style={{ background: "#C700DA", backgroundSize: "700%" }} className="absolute h-full w-full z-10 left-0 top-0"></div>
        <div className="w-full relative flex flex-col">
            <div className="flex w-[95%] max-w-custom_1 relative mx-auto z-40 flex-col gap-12 pt-64 pb-20 h-full">
                <h1 className="text-4xl lg:text-7xl z-40 font-normal text-white text-center uppercase font-Agency_Extended">

                    <span>
                        LET US MAKE <br /> HISTORY
                    </span>

                    <span className="block mt-6 text-center text-base w-[70%] mx-auto text-white font-light font-Agency_light">
                        We’re looking for each other. Fill in your company details or give use a phone or video call.
                    </span>
                </h1>


            </div>

            <div className="h-full z-40 relative pb-32 w-[90%] max-w-custom_1 mx-auto grid grid-cols-1 justify-center lg:grid-cols-custom gap-20">
                <div className="w-full flex flex-col gap-8">
                    <input type="text" placeholder='First Name' className="text-lg z-40 font-normal text-white h-16 font-Agency_light px-8 w-full border bg-transparent border-[rgba(255,255,255,.4)]" />
                    <input type="text" placeholder='Last Name' className="text-lg z-40 font-normal text-white h-16 font-Agency_light px-8 w-full border bg-transparent
                     border-[rgba(255,255,255,.4)]" />
                    <input type="email" placeholder='Email' className="text-lg z-40 font-normal text-white h-16 font-Agency_light px-8 w-full border bg-transparent border-[rgba(255,255,255,.4)]" />
                    <textarea placeholder='A few sentences about the project....' className="text-lg z-40 font-normal text-white h-44 py-12 font-Agency_light px-8 w-full border bg-transparent border-[rgba(255,255,255,.4)]" />
                    <div className="w-full flex items-start">
                        <Button

                            className={`py-[20px] px-6 bg-[#fff] text-text_dark_1 font-normal text-base font-Agency_medium rounded-[40px] text-center`}>
                            Send Message
                        </Button>
                    </div>
                </div>
                <div className="w-full flex 2-40 flex-col gap-8">
                    <span className="text-base text-white font-light font-Agency_light">
                        Sarphatikade 14 <br />
                        1017 WV Amsterdam <br />
                        Netherlands
                    </span>

                    <span className="text-base text-white font-light font-Agency_light">
                        hello@onenil.com
                    </span>

                    <div className="flex flex-col gap-1">
                        <span className="text-base text-white font-light font-Agency_light">
                            Twitter
                        </span>
                        <span className="text-base text-white font-light font-Agency_light">
                            Facebook
                        </span> <span className="text-base text-white font-light font-Agency_light">
                            Instagram
                        </span>
                    </div>
                </div>
            </div>


            <div className="h-full z-40 relative py-16 pb-12 w-[90%] max-w-custom_1 border-t border-[rgba(255,255,255,.4)] mx-auto flex items-center flex-col md:flex-row 
            justify-between gap-20">
                <div className="flex items-center gap-6">
                    <h4 className="hover:transform hover:-translate-y-1 hover:text-text_grey_1 transition ease-in duration-300 text-base font-light cursor-pointer font-Agency_light text-white">Code by Victor</h4>

                    <h4 className="hover:transform hover:-translate-y-1 hover:text-text_grey_1 transition ease-in duration-300 text-base font-light cursor-pointer font-Agency_light text-white">Design by Graphic Huntersr</h4>

                </div>

                <div className="flex items-center gap-6">
                    <h4 className="hover:transform hover:-translate-y-1 hover:text-text_grey_1 transition ease-in duration-300 text-base font-light cursor-pointer
                     font-Agency_light text-white">Privacy Policy</h4>

                    <h4 className="hover:transform hover:-translate-y-1 hover:text-text_grey_1 transition ease-in duration-300
                     text-base font-light cursor-pointer font-Agency_light text-white">Terms and Conditions</h4>

                    <div className="flex items-center text-white gap-4">
                        <span className="hover:transform hover:-translate-y-1 hover:text-text_grey_1 transition ease-in duration-300
                     text-base font-light cursor-pointer font-Agency_light text-white">
                            <Twitter fontSize={'24px'} />
                        </span>
                        <span className="hover:transform hover:-translate-y-1 hover:text-text_grey_1 transition ease-in duration-300
                     text-base font-light cursor-pointer font-Agency_light text-white">
                            <Linkedin fontSize={'24px'} />
                        </span>
                        <span className="hover:transform hover:-translate-y-1 hover:text-text_grey_1 transition ease-in duration-300
                     text-base font-light cursor-pointer font-Agency_light text-white">
                            <Instagram fontSize={'24px'} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
export default Hero;