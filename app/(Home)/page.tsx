'use client';
import { AnimatePresence, motion } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import Hero from './_components/Hero'
import Works from './_components/Works'
import Services from './_components/Services'
import Banner from './_components/Banner';
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import Menu from '@/components/common/Menu';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const Homeref = useRef<null | HTMLDivElement>(null);
  let locoScroll: LocomotiveScroll;
  let LocomotiveScroll: new (arg0: { el: HTMLDivElement; smooth: boolean; multiplier: number; class: string; }) => LocomotiveScroll;
  if (typeof window !== 'undefined') {
    LocomotiveScroll = require('locomotive-scroll').default;
  }

  const [menu, setMenu] = useState(false)


  return (
    <div style={{ perspective: "1px", minHeight: "100vh" }}
      data-scroll-section
      className="w-full bg-[#000] font-Agency_medium min-h-full">
      <AnimatePresence>
        <Menu menu={menu} setMenu={setMenu} />
      </AnimatePresence>


      <Header menu={menu} setMenu={setMenu} />
      <Hero />
      <Works />
      <Banner />
      <Services />
      <Footer />
    </div>
  );
}
