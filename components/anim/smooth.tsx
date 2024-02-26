"use client";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

type smoothType = {
    children: React.ReactNode
}
const SmoothScrolling: React.FC<smoothType> = ({ children })=> {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5}}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;