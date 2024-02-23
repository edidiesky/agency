'use client';
import { useEffect, useRef, useState } from 'react';
import Hero from './_components/Hero'
import Works from './_components/Works'
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';


export default function Page({ params }: { params: { food: string } }) {
    

    return (
        <div className="w-full min-h-full bg-[#000] overflow-hidden">
            <Header />
            <Hero />
            <Works />
            <Footer />
        </div>
    );
}
