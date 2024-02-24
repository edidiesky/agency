'use client';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'

import Hero from './_components/Hero'
import Works from './_components/Works'
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import Menu from '@/components/common/Menu';

export default function Page() {
    const [menu, setMenu] = useState(false)


    return (
        <div className="w-full min-h-full bg-[#fff] overflow-hidden">
            <AnimatePresence>
                <Menu menu={menu} setMenu={setMenu} />
            </AnimatePresence>

            <Header type={true} menu={menu} setMenu={setMenu} />
            <Hero />
            <Works />
            <Footer/>
        </div>
    );
}
