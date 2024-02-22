'use client';
import Hero from './_components/Hero'
import Works from './_components/Works'
import Services from './_components/Services'
import Banner from './_components/Banner';
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
export default function Home() {

  return (
    <div className="w-full bg-[#000] font-Agency_medium min-h-full">
      <Header/>
      <Hero />
      <Works />
      <Banner />
      <Services />
      <Footer/>
    </div>
  );
}