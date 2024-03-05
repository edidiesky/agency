
"use client"
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
const Works = () => {
    const titleref = useRef(null);
    const titleRef_2 = useRef(null);
    const titleRef_3 = useRef(null);
    const imageRef = useRef<HTMLDivElement[]>([]);
    const descriptionsRef = useRef<HTMLDivElement[]>([]);
    imageRef.current = []
    descriptionsRef.current = []

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const homeHeroTitleElement = titleref.current;
        const homeHeroTitleElement_2 = titleRef_2.current;
        const homeHeroTitleElement_3 = titleRef_3.current;
        if (!homeHeroTitleElement) return;
        if (!homeHeroTitleElement_2) return;
        if (!homeHeroTitleElement_3) return;

        const workTitle = new SplitType(homeHeroTitleElement);
        const workTitle_2 = new SplitType(homeHeroTitleElement_2);
        const workTitle_3 = new SplitType(homeHeroTitleElement_3);
        const workTitleSplit = workTitle?.chars;
        const workTitleSplit_2 = workTitle_2?.chars;
        const workTitleSplit_3 = workTitle_3?.lines;
        gsap.fromTo(
            workTitleSplit,
            { opacity: 0, y: 100 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.07,
                duration: 1.2,
                ease: "power3",
                scrollTrigger: {
                    trigger: workTitleSplit,
                },
            }
        );

        gsap.fromTo(
            workTitleSplit_2,
            { opacity: 0, y: 100 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.07,
                duration: 1,
                ease: "power3",
                scrollTrigger: {
                    trigger: workTitleSplit_2,
                },
            }
        );

        gsap.fromTo(
            workTitleSplit_3,
            { opacity: 0, y: 40 },
            {
                y: 0,
                opacity: 1,
                delay: 1,
                stagger: 0.07,
                duration: 1.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: workTitleSplit_3,
                },
            }
        );

        imageRef.current.forEach((imageContainer: any, index: any) => {
            gsap.fromTo(
                imageContainer,
                { opacity: 0, y: 450 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.14,
                    duration: 2,
                    delay: index * 0.25,
                    ease: "power3",
                    scrollTrigger: {
                        trigger: imageContainer,
                    },
                }
            );
        })

        descriptionsRef.current.forEach((imageContainer: any, index: any) => {
            const workTitle = new SplitType(imageContainer);
            gsap.fromTo(
                workTitle?.lines,
                { opacity: 0, y: 39 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.09,
                    duration: 2.5,
                    delay: index * 0.1,
                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: workTitle?.lines,
                        start: "top bottom-=200",
                    },
                }
            );
        })
    }, [])

    const AddImageToRefs = (ref: any) => {
        if (ref && !imageRef.current.includes(ref!)) {
            imageRef.current.push(ref!)
        }
    }

    const AddDecsriptionToRefs = (ref: any) => {
        if (ref && !descriptionsRef.current.includes(ref!)) {
            descriptionsRef.current.push(ref!)
        }
    }


    return <div className='py-20 w-full'>
        <div className="h-full z-20 py-32 w-[95%] max-w-custom_1 mx-auto items-start flex flex-col gap-20">
            <div className="flex flex-col gap-8">
                <h1 ref={titleref} className="text-4xl lg:text-6xl z-20 font-bold text-white uppercase font-Agency_Extended">
                    SELECTED
                    <br />
                    WORKS
                </h1>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">

                <Link  href={'/work/1'} ref={AddImageToRefs} data-scroll-speed={"3"} className="w-full lg:mt-24 relative h-[35rem] flex items-end">
                    <img src="https://onenil.com/media/pages/work/heineken-cheers-to-you/03bf898036-1686575712/schermafbeelding-2023-06-12-om-15.14.56.png"
                        alt="" className="absolute h-full object-cover w-full z-10" />
                    <div className="w-full flex items-start z-20 pt-10 pb-20 px-8 justify-start flex-col gap-4">
                        <h3 className="text-3xl font-normal font-Agency_medium leading-[1.3] text-white">Ajax takes a stand against racism</h3>
                        <h5 className="text-sm font-normal font-Agency_light leading-[1.3] text-text_grey_1">View Case</h5>
                    </div>
                </Link>

                <Link href={'/work/1'} ref={AddImageToRefs} data-scroll-speed={"1.6"} className="w-full lg:mt-16 relative h-[35rem] flex items-end">
                    <div className="absolute h-full w-full bg-[rgba(0,0,0,.7)] z-20"></div>

                    {/* https://onenil.com/media/pages/work/future-goals/cd6dec9cdb-1685445528/01.png */}
                    <img src="https://onenil.com/media/pages/work/future-goals/cd6dec9cdb-1685445528/01.png" alt="" className="absolute z-10 h-full object-cover w-full" />
                    <img src="https://onenil.com/media/pages/work/future-goals/ffe84afcc9-1685445528/02.png" alt="" className="absolute z-20 h-full object-cover w-full" />

                    <div className="w-full flex items-start z-40 pt-10 pb-16 px-8 justify-start flex-col gap-4">
                        <h3 className="text-3xl font-normal font-Agency_medium leading-[1.3] text-white">From making fishing nets to football goals</h3>
                        <h5 className="text-sm font-normal font-Agency_light leading-[1.3] text-text_grey_1">View Case</h5>
                    </div>
                </Link>

                <Link href={'/work/1'} ref={AddImageToRefs} data-scroll-speed={"2.6"} className="w-full lg:mt-8 relative h-[35rem] flex items-end">
                    <div className="absolute h-full w-full bg-[rgba(0,0,0,.1)] z-10"></div>

                    <img src="https://onenil.com/media/pages/home/15159f1d0c-1685445527/on-2021-eredivisie-otw-collage-1920x1080-q72.jpg"
                        alt="" className="absolute h-full object-cover w-full" />

                    <div className="w-full flex items-start z-40 pt-10 pb-16 px-8 justify-start flex-col gap-4">
                        <h3 className="text-3xl font-normal font-Agency_medium leading-[1.2] text-white">Ajax celebrate a much Champoins Cup</h3>
                        <h5 className="text-sm font-normal font-Agency_light leading-[1.3] text-text_grey_1">View Case</h5>
                    </div>
                </Link>
            </div>
        </div>

        <div className="h-full z-20 pt-32 pb-12 w-[95%] max-w-custom_1 mx-auto items-start flex flex-col gap-20">

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-20">
                <h1 ref={titleRef_2} className="text-3xl lg:text-5xl z-20 font-bold text-white uppercase font-Agency_Extended">
                    Our
                    <br />
                    Main
                    <br />
                    Philosophy
                </h1>
                <h1 className="text-3xl lg:text-5xl z-20 font-medium text-white font-Agency_medium flex flex-col gap-8">
                    <div className="overflow-hidden w-full">
                        <span ref={titleRef_3} className="title_1">
                            We believe sports is the most thrilling thing on earth
                        </span>
                    </div>


                    <div className="w-full overflow-hidden">
                        <span ref={AddDecsriptionToRefs} className="description block text-base font-normal font-Agency_light">
                            We create winning ideas to ignite the most distinctive campaigns in sports. Like no other we know how to find the sweet spots between brands and sports culture, which makes us the specialists in our game.
                        </span>
                    </div>

                    <div className="overflow-hidden">
                        <span ref={AddDecsriptionToRefs} className="description block text-base font-normal font-Agency_light">
                            We create winning ideas to ignite the most distinctive campaigns in sports. Like no other we know how to find the sweet spots between brands and sports culture, which makes us the specialists in our game.
                        </span>
                    </div>

                </h1>
            </div>
        </div>


        <div className="h-full z-20 pt-20 pb-12 w-[95%] max-w-custom_1 mx-auto items-start flex flex-col gap-20">

            <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-20 items-center">
                <img src="https://onenil.com/media/pages/home/ace1b65ac3-1685445527/uefa.svg" alt="" className="w-16" />
                <img src="https://onenil.com/media/pages/home/64813f6452-1685445527/mercedesbenz.svg" alt="" className="w-12" />
                <img src="https://onenil.com/media/pages/home/a8a7f87618-1685445527/totoknvbbeker.svg" alt="" className="w-12" />
                <img src="https://onenil.com/media/pages/home/272378d751-1685445527/kwf.png" alt="" className="w-16" />
                <img src="https://onenil.com/media/pages/home/1bbf909cda-1685445527/ea.png" alt="" className="w-16" />
                <img src="https://onenil.com/media/pages/home/e71ad14bfc-1685445527/hema.svg" alt="" className="w-16" />
            </div>
        </div>
    </div>;
}
export default Works;