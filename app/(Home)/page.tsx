'use client';
import { AnimatePresence, motion } from 'framer-motion'

import Hero from './_components/Hero'
import Works from './_components/Works'
import Services from './_components/Services'
import Banner from './_components/Banner';
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import Menu from '@/components/common/Menu';
import { useState } from 'react';
export default function Home() {
  const [menu, setMenu] = useState(true)
  return (
    <div className="w-full bg-[#000] font-Agency_medium min-h-full">
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
