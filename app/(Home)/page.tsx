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
import { Loader } from '@/components/common/Loader';
import SplitType from 'split-type';

export default function Home() {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <Loader />
      <div style={{ perspective: "1px", minHeight: "100vh" }}
        data-scroll-section
        className="w-full bg-[#000] font-Agency_medium min-h-full relative">

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
    </>
  );
}
