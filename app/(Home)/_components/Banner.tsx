
"use client"
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Banner = () => {

    const titleref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const homeHeroTitleElement = titleref.current;
        if (!homeHeroTitleElement) return;
        const workTitle = new SplitType(homeHeroTitleElement);
        const workTitleSplit = workTitle?.chars;

        gsap.fromTo(
            workTitleSplit,
            { opacity: 0, y: 50 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 1,
                ease: "power4.inOut",
                scrollTrigger: {
                    trigger: workTitleSplit,
                    start: "top bottom-=100",

                },
            }
        );

    }, [])
    return <div data-scroll className='h-[20rem] lg:h-[25rem] relative w-full flex items-center justify-center'>
        <div style={{ zIndex: 10 }} className="absolute h-full w-full bg-[rgba(0,0,0,.5)] z-10"></div>
        <img style={{ zIndex: 5 }} src="https://onenil.com/media/pages/home/b8ff3c9f83-1685445527/rocket-01-1920x1080-q72.jpg" alt=""
            className="object-cover absolute h-full w-full" />

        <div className="w-100 h-100 z-20 w-[90%] max-w-custom_1 mx-auto grid grid-cols-1 items-center justify-center gap-20">
            <div className="flex flex-col gap-8">
                <h1 ref={titleref} className="text-5xl lg:text-6xl text-center z-20 leading-[1.3] font-bold text-white uppercase font-Agency_Extended">
                    BUCKLE UP AND ENJOY THE FLIGHT

                </h1>
            </div>
        </div>
    </div>;
}
export default Banner;