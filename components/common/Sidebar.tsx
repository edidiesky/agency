import React, { useState } from "react";
const sidebarData = [
    {
        title: "Home",
        path: "",
    },
    {
        title: "My Story",
        path: "",
    },
    {
        title: "Membership",
        path: "",
    },
    {
        title: "Write",
        path: "",
    },
    {
        title: "Sign In",
        path: "",
    },
];

type sidebarProps = {
    active?: boolean,
    sidebar?: boolean,
    setSidebar: (val: boolean) => void;
}
const Sidebar: React.FC<sidebarProps> = ({ active, sidebar, setSidebar }) => {

    return (

        <div className={`${sidebar ? "left-0" : "-left-[100%]"} w-[300px] h-full transition-all ease duration-300 z-40 fixed flex md:hidden top-0 bg-text_dark_1 column gap-2`}>
            <div className="w-full Header_wrapper flex item-center column justify-space gap-2">

                <ul className="flex flex-col w-full">
                    {
                        sidebarData.map((x?: any, key?: any) => {
                            return (
                                <div
                                    key={key}
                                    className="text-white flex items-center gap-2 w-full font-blog-light font-light hover:bg-[rgba(255,255,255,.1)] py-6 px-8 text-[14px]"
                                >
                                    {<span>{x.title}</span>}
                                </div>
                            );
                        })
                    }

                </ul>
            </div>
        </div>
    )
}


export default Sidebar