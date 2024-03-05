'use client';
import Hero from './_components/Hero'
import { Header } from '@/components/common/Header';
import Menu from '@/components/common/Menu';
import { useState } from 'react';
import { Loader } from '@/components/common/Loader';


export default function Home() {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <div className="w-full bg-[#000] font-Agency_medium min-h-full relative">
        <Header
          menu={menu}
          setMenu={setMenu}
        />

        <Hero />
      </div>
    </>
  );
}

