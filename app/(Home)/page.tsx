'use client';
import Hero from './_components/Hero'
import Works from './_components/Works'
import Services from './_components/Services'
import Banner from './_components/Banner';
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import Menu from '@/components/common/Menu';
import { useState } from 'react';
export default function Home() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="w-full bg-[#000] font-Agency_medium min-h-full">
      <Menu menu={menu} setMenu={setMenu} />
      <Header menu={menu} setMenu={setMenu} />
      <Hero />
      <Works />
      <Banner />
      <Services />
      <Footer />
    </div>
  );
}
