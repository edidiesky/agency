'use client';
import { useEffect, useRef, useState } from 'react';
import Hero from './_components/Hero'
import Works from './_components/Works'
import Services from './_components/Services'
import Banner from './_components/Banner';
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';


export default function Page({ params }: { params: { food: string } }) {
    // return <div>My Post: {params.food}</div>
    const [sidebar, setSidebar] = useState(false)

    // console.log(params.food)


    return (
        <div className="w-full min-h-full overflow-hidden">
            <Header />
            <Hero />
            {/* <Works />
            <Banner />
            <Services />
            <Footer /> */}
        </div>
    );
}
