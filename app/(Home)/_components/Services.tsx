
"use client"
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const servicedata = [
    {
        image: "https://onenil.com/media/pages/home/9a99d95339-1685445527/target.svg",
        title: "Strategy",
        description: "Strategic masterplans and business/concept strategy"
    },
    {
        image: "https://onenil.com/media/pages/home/b47b697f2e-1685445527/image-landscape.svg",
        title: "Concept",
        description: "Award winning concepts and ideas"
    },
    {
        image: "https://onenil.com/media/pages/home/95a17772d0-1685445527/package.svg",
        title: "Campaign",
        description: "High quality campaigns that offer an all-in solution"
    },
    {
        image: "https://onenil.com/media/pages/home/ae712e8910-1685445527/film.svg",
        title: "Production",
        description: "Standard of own film production that delivers"
    }
]
const Services = () => {

    const titleref = useRef(null);
    const imageRef = useRef < HTMLDivElement[]>([]);
    imageRef.current = []

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const homeHeroTitleElement = titleref.current;
        if (!homeHeroTitleElement) return;

        const workTitle = new SplitType(homeHeroTitleElement);
        const workTitleSplit = workTitle?.chars;
        gsap.fromTo(
            workTitleSplit,
            { opacity: 0, y: 100 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.02,
                duration: 1.2,
                ease: "power3",
                scrollTrigger: {
                    trigger: workTitleSplit,
                },
            }
        );

        imageRef.current.forEach((imageContainer: any, index: any) => {
            gsap.fromTo(
                imageContainer,
                { opacity: 0, y: 350 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.14,
                    duration: 2,
                    delay: .3 * index,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: imageContainer,
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
    return <>
        <div data-scroll data-scroll-speed='4' className='w-full'>
            {/* <h2 className="fontextrabold text-4xl">Services section</h2> */}
            <div className=" w-full pt-32 pb-32">
                <div className="w-[90%] max-w-custom_1 mx-auto flex flex-col gap-20">
                    <div className="w-full">
                        <h2 ref={titleref} className="text-4xl flex flex-col font-bold font-Agency_medium text-white">
                            <span>
                                Offering a variety of
                            </span>
                            <span className="block">
                                high-end services
                            </span>
                        </h2>
                    </div>

                    <div className="w-full grid text-white sm:grid-cols-2 xl:grid-cols-4 grid-cols-2 gap-12">
                        {
                            servicedata.map((x?: any, index?: any) => {
                                return <div key={index} className="w-full overflow-hidden px-4 py-2">
                                    <div ref={AddImageToRefs} key={index} className="flex flex-col gap-4 md:gap-8 font-bold font-Agency_medium">
                                        <img src={x?.image} alt="" className="w-10" />
                                        <div className="flex font-medium flex-col gap-4 lg:gap-8">
                                            <h4 className="text-xl font-Agency_light">{x?.title}</h4>
                                            <h5 className="text-base font-Agency_light">{x?.description}</h5>
                                        </div>


                                    </div>
                                </div>
                            })
                        }
                    </div>



                </div>
            </div>

        </div>
        <div className='bg-[#fff] w-full'>
            {/* <h2 className="fontextrabold text-4xl">Services section</h2> */}
            <div className=" w-full">
                <div className=" grid grid-cols-1 md:grid-cols-2 items-center justify-center">
                    <div className="w-full  relative">
                        <img src="https://onenil.com/media/pages/home/61e73134a1-1685445527/e6107-18-1080x.jpg" alt="" className="absolute object-cover h-full w-full z-10" />
                        <div className="max-w-custom_1 py-16 md:py-24 z-20 relative mx-auto w-[90%] pl-12 md:pl-20 pr-12 flex flex-col gap-12">
                            <h2 className="text-4xl font-medium text-white font-Agency_bold">

                                <span className="block mb-8 font-medium text-base">Get Inspired by our work</span>
                                Explore our Infinite archive, full of inspiration

                            </h2>

                            <span className="block mb-8 text-text_grey_1 font-light font-Agency_light text-sm">Explore our Archive</span>

                        </div>
                    </div>
                    <div className="w-full">
                        <div className="max-w-custom_1 py-16 md:py-24 z-20 relative mx-auto w-[90%] pl-12 md:pl-20 pr-12 flex flex-col gap-12">
                            <h2 className="text-4xl font-medium text-dark font-Agency_bold">
                                <span className="block mb-8 font-medium text-base">Get Inspired by our work</span>
                                We currently have 4 open positions
                            </h2>

                            <span className="block mb-8 text-dark font-light font-Agency_light text-sm">Explore our Archive</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>

        ;
}
export default Services;