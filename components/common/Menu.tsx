import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { RxCross1 } from "react-icons/rx";

import Link from 'next/link';
import { Cross, CrossIcon } from 'lucide-react';
type menuType = {
    menu: boolean,
    setMenu: (val: boolean) => void;
}
const Menu: React.FC<menuType> = ({ menu, setMenu }) => {
    const menuref = useRef(null)
    useLayoutEffect(() => {
        const timeline = gsap.timeline({ paused: true })
        // gsap.set(menuref?.current, {
        //     clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)"
        // })

        gsap.set('.menulist .list', {
            y: 240
        })

        timeline.to(menuref?.current, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            duration: 1.5,
            ease: "power4.inOut"
        }).to('.menulist .list', {
            y: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: "power4.out"
        }, "-=1")

        if (menu) {
            timeline.reverse()
        } else {
            timeline.play()
        }
    }, [menu])
    // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    return <div style={{ height: "100vh", zIndex: 200, clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)" }}
        ref={menuref}

        className='bg-[#000] fixed top-0 w-full flex items-center justify-center'>
        <div
            onClick={() => setMenu(!menu)}
            className="h-20 absolute top-10 right-10 cursor-pointer text-2xl text-white bg-[rgba(255,255,255,.1)] w-20 rounded-full flex items-center justify-center">
            <RxCross1 />
        </div>
        <div className="h-full z-20 pt-40 pb-32 w-[90%] max-w-custom_1 mx-auto grid grid-cols-1 items-center justify-center lg:grid-cols-custom gap-20">
            <div className="flex flex-col gap-3">
                <div className="menulist overflow-hidden">
                    <Link href={'/work'} className="list text-5xl lg:text-7xl w-full z-20 font-normal text-white uppercase font-Agency_Extended">
                        WORK
                    </Link>
                </div>
                <div className="menulist overflow-hidden">
                    <Link href={'/archive'} className="list text-5xl lg:text-7xl w-full z-20 font-normal text-white uppercase font-Agency_Extended">
                        ARCHIVE
                    </Link>
                </div>
                <div className="menulist overflow-hidden">
                    <Link href={'/jobs'} className="list text-5xl lg:text-7xl w-full z-20 font-normal text-white uppercase font-Agency_Extended">
                        JOBS
                    </Link>
                </div>
                <div className="menulist overflow-hidden">
                    <Link href={'/contact'} className="list text-5xl lg:text-7xl w-full z-20 font-normal text-white uppercase font-Agency_Extended">
                        CONTACT
                    </Link>
                </div>
            </div>

            <div className="w-100 flex flex-col gap-6">
                <span className="text-base text-text_grey_1 font-light font-Agency_light">
                    Sarphatikade 14 <br />
                    1017 WV Amsterdam <br />
                    Netherlands
                </span>

                <span className="text-base text-text_grey_1 font-light font-Agency_light">
                    hello@onenil.com
                </span>

                <div className="flex flex-col gap-1">
                    <span className="text-base text-text_grey_1 font-light font-Agency_light">
                        Twitter
                    </span>
                    <span className="text-base text-text_grey_1 font-light font-Agency_light">
                        Facebook
                    </span> <span className="text-base text-text_grey_1 font-light font-Agency_light">
                        Instagram
                    </span>
                </div>
            </div>
        </div>
    </div>;
}
export default Menu;