import Logo from '@/assets/svg/logo';
import gsap from 'gsap';
import SplitType from 'split-type';
import React, { useLayoutEffect, useRef } from 'react';
const Hero = () => {
    const HomeHeroTitle = useRef(null)
    useLayoutEffect(() => {
        const homeHeroTitleElement = HomeHeroTitle.current;
        if (!homeHeroTitleElement) return;

        const home_text_1 = new SplitType(homeHeroTitleElement);
        const home_text_2 = new SplitType('.home_text_2');
        gsap.timeline().to('.preloader', {
            opacity: 1,
            ease: 'power3',
            duration: .1
        }, .4).fromTo('.logo', { y: 100 }, {
            y: -100,
            ease: 'power3',
            duration: 1,
        }, .6).to('.preloader', {
            opacity: 0,
            scale: 1.4,
            ease: 'power3',
            display: "none",
            duration: 1,

        }, 1).fromTo(home_text_1.chars, { y: 100, opacity: 0 }, {
            y: 0,
            opacity: 1,
            stagger: 0.07,
            duration: 1.2,
            ease: "power3",
        }, 2).fromTo(home_text_2.words, { y: 60, opacity: 0 }, {
            y: 0,
            ease: 'power3',
            duration: 1,
            stagger: .05,
            opacity: 1
        }, 3).fromTo('.content_2', { y: 100, opacity: 0 }, {
            y: 0,
            ease: 'power3',
            duration: 1,
            stagger: .05,
            opacity: 1
        }, 4)
    }, [])
    return <div data-scroll style={{ minHeight: "100vh" }} className=' relative w-full flex z-20 items-center justify-center'>
        <div className="absolute h-full w-full bg-[rgba(0,0,0,.7)] z-10"></div>
        <img style={{ minHeight: "100vh", zIndex: 5 }} src="https://onenil.com/media/pages/home/24af6ef326-1685445527/afcajax-frenkie-header-1920x1080-q72.jpg" alt=""
            className="object-cover absolute h-full w-full" />

        <div className="h-full z-20 pt-40 pb-32 w-[95%] max-w-custom_1 mx-auto grid grid-cols-1 items-start justify-center lg:grid-cols-custom gap-6">
            <div className="flex flex-col gap-4">
                <div className="w-full overflow-hidden">
                    <h1 ref={HomeHeroTitle} className="text-5xl home_text_1 lg:text-[75.13px]
                     leading-[.8] w-full z-20 font-normal text-white uppercase font-Agency_Extended">
                        the <br /> creative <br /> agency in <br /> sports


                    </h1>
                </div>
                <div className="overflow-hidden">
                    <span className="block text-lg home_text_2 font-normal text-white w-[90%] lg:w-[450px] font-Agency_medium">
                        We create winning ideas to ignite the most distinctive campaigns in sports.
                    </span>
                </div>
            </div>
            <div className="w-full content_1 h-full px-12 flex items-center justify-center">
                <div className="h-40 content_2 w-40 rounded-full border-2 border-[rgb(255,255,255)] flex items-center justify-center">
                    <Logo />
                </div>
            </div>
        </div>
    </div>;
}
export default Hero;