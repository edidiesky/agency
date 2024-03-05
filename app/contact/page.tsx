'use client';
import { AnimatePresence, motion } from 'framer-motion'
import Hero from './_components/Hero'
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import Menu from '@/components/common/Menu';
import { useState} from 'react';
import { Loader } from '@/components/common/Loader';

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
        <Footer />
      </div>
    </>
  );
}
