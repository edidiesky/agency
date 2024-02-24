import React, { useState } from 'react';
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
    x?: any,
    index?: any,
    setMenu: (val: boolean) => void;
}
const Text: React.FC<menuType> = ({ menu, setMenu, x, index }) => {
    const [active, setActive] = useState(false)

    return <div className="h-full overflow-hidden">
        <motion.h1
            variants={textvariants}
            initial={'initial'}
            animate={'enter'}
            exit={'exit'}
            custom={index}
            key={index}
            onMouseLeave={() => setActive(false)}
            onMouseOver={() => setActive(true)}
            className="list text-5xl lg:text-7xl border-b border-[rgba(255,255,255,.09)] h-20 overflow-hidden w-full z-20 
                                relative font-normal text-white uppercase font-Agency_Extended">

            <motion.div
                animate={{ top: active ? '-100%' : "0" }}
                transition={{ duration: .5, ease: [0.75, 0, 0.24, 1] }}
                className="menulist relative h-full w-full">

                <h1
                    className="list text-5xl lg:text-7xl w-full z-20 font-normal text-white uppercase font-Agency_Extended">
                    <Link
                        href={`${x?.path}`}
                    >
                        {x?.title}</Link>
                </h1>

                <h1
                    style={{ color: `${x?.color}` }}
                    className="list text-5xl absolute text-[#00FAFF] top-[100%] left-0 lg:text-7xl w-full z-20 font-normaluppercase font-Agency_Extended bg-cover bg-blend-multiply">
                    <Link
                        href={`${x?.path}`}
                    >
                        {x?.title}</Link>
                </h1>
            </motion.div>
        </motion.h1>

    </div>
}
export default Text;