'use client';
import LocomotiveScroll from 'locomotive-scroll';
import React, { useState, useEffect, useRef } from 'react';
type SmoothScrollType = {
    children:React.ReactNode
}
const SmoothScroll: React.FC<SmoothScrollType> = ({ children }) => {
    const Homeref = useRef<null | HTMLDivElement>(null);
    let locoScroll: LocomotiveScroll;
    let LocomotiveScroll: new (arg0: { el: HTMLDivElement; smooth: boolean; multiplier: number; class: string; }) => LocomotiveScroll;
    if (typeof window !== 'undefined') {
        LocomotiveScroll = require('locomotive-scroll').default;
    }
    useEffect(() => {


        // Check if Homeref.current is not null before creating the LocomotiveScroll instance
        if (Homeref.current) {
            locoScroll = new LocomotiveScroll({
                el: Homeref.current,
                smooth: true,
                multiplier: 1,
                class: "is-reveal"
            });

            // Use a function to update LocomotiveScroll on resize
            const handleResize = () => locoScroll.update();
            const resizeObserver = new ResizeObserver(handleResize);
            resizeObserver.observe(Homeref.current);

            // Cleanup functions
            return () => {
                if (locoScroll) {
                    locoScroll.destroy();
                }
                resizeObserver.disconnect();
            };
        }

        // If Homeref.current is null, return a cleanup function without creating LocomotiveScroll
        return () => {
            // Cleanup without creating LocomotiveScroll
        };
    }, [Homeref]);
    return (
        <div
            ref={Homeref} style={{ perspective: "1px", minHeight: "100vh" }}
            data-scroll-section
            className="w-full bg-[#000] font-Agency_medium min-h-full">
            {children}
        </div>
    );
}

export default SmoothScroll