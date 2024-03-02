import React, { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { RxCross1 } from "react-icons/rx";
import Text from './Text';
const linklist = [
    {
        title: "Work",
        path: "/work",
        color: "#FFC700"
    },
    {
        title: "Archive",
        path: "/archive",
        color: "#00FAFF"
    },
    {
        title: "Jobs",
        path: "/jobs",
        color: "#0433FF"
    },
    {
        title: "Contact",
        path: "/contact",
        color: "#FF00B0"
    }
]
const variants = {
    open: {
        width: "100vw",
        height: "100vh",
        transition: { duration: .8, ease: [0.76, 0, 0.24, 1] }
    },
    close: {
        width: 0,
        height: 0,
        transition: { duration: .8, ease: [0.76, 0, 0.24, 1], delay: .9 }
    }
}


const locationvariants = {
    initial: {
        opacity: "0",
        transition: { duration: .8, ease: [0.76, 0, 0.24, 1] }
    },
    enter: (index?: any) => ({
        opacity: 1,
        transition: { duration: .8, ease: [0.76, 0, 0.24, 1], delay: 0.5 }
    }),
    exit: {
        opacity: 0,
        transition: { duration: .8, ease: [0.76, 0, 0.24, 1] }
    }
}


type menuType = {
    menu: boolean,
    setMenu: (val: boolean) => void;
}
const Menu: React.FC<menuType> = ({ menu, setMenu }) => {
    const menuref = useRef(null)
    return <motion.div
        variants={variants}
        initial={'close'}
        animate={menu ? "open" : "close"}
        style={{ height: "100vh", zIndex: 200 }}
        ref={menuref}

        className='bg-[#000] fixed top-0 w-full left-0 right-0 flex items-center justify-center'>
        <div
            onClick={() => setMenu(!menu)}
            className="h-20 absolute top-10 right-10 cursor-pointer text-2xl text-white bg-[rgba(255,255,255,.1)] w-20 rounded-full flex items-center justify-center">
            <RxCross1 />
        </div>

        <div className="h-full z-20 pt-40 pb-32 w-[90%] max-w-custom_1 mx-auto grid grid-cols-1 items-center justify-center lg:grid-cols-custom gap-20">
            <AnimatePresence>
                {
                    menu && <div className="flex flex-col gap-1">
                        {
                            linklist?.map((x?: any, index?: any) => {
                                return <Text index={index} key={index} x={x} menu={menu} setMenu={setMenu} />
                            })
                        }

                    </div>

                }
            </AnimatePresence>

            <AnimatePresence>
                {
                    menu && <motion.div
                        initial={'initial'}
                        animate={'enter'}
                        exit={'exit'}
                        variants={locationvariants}
                        className="w-100 flex flex-col gap-6">

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
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    </motion.div>;
}
export default Menu;