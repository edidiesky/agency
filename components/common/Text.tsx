import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link';
const linklist = [
    {
        title: "Work",
        path: "/Work",
    },
    {
        title: "Archive",
        path: "/Archive",
    },
    {
        title: "Jobs",
        path: "/Jobs",
    },
    {
        title: "Contact",
        path: "/Contact",
    }
]


const textvariants = {
    initial: {
        opacity: "0",
        y: 100,
        transition: { duration: .8, ease: [0.76, 0, 0.24, 1] }
    },
    enter: (index?: any) => ({
        opacity: 1,
        y: 0,
        transition: { duration: .8, ease: [0.76, 0, 0.24, 1], delay: 0.7 + index * 0.1 }
    }),
    exit: (index?: any) => ({
        opacity: 0,
        y: 100,
        transition: { duration: .8, ease: [0.76, 0, 0.24, 1], delay: 0.1 + index * 0.1 }
    }),
}



type menuType = {
    menu: boolean,
    setMenu: (val: boolean) => void;
}
const Text: React.FC<menuType> = ({ menu, setMenu }) => {
    return <div className="h-full">
        <AnimatePresence>
            {
                menu && <div className="flex flex-col gap-3">
                    {
                        linklist?.map((x?: any, index?: any) => {
                            return <div key={index} className="menulist overflow-hidden">
                                <motion.h1
                                    variants={textvariants}
                                    initial={'initial'}
                                    animate={'enter'}
                                    exit={'exit'}
                                    custom={index}
                                    className="list text-5xl lg:text-7xl w-full z-20 font-normal text-white uppercase font-Agency_Extended">
                                    <Link
                                        href={`${x?.path}`}
                                    >
                                        {x?.title}</Link>
                                </motion.h1>
                            </div>
                        })
                    }

                </div>

            }
        </AnimatePresence>

    </div>
}
export default Text;