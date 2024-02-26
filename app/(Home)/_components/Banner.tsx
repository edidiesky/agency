import React from 'react';
const Banner = () => {
    return <div data-scroll className='h-[20rem] lg:h-[25rem] relative w-full flex items-center justify-center'>
        <div style={{ zIndex: 10 }} className="absolute h-full w-full bg-[rgba(0,0,0,.5)] z-10"></div>
        <img style={{ zIndex: 5 }} src="https://onenil.com/media/pages/home/b8ff3c9f83-1685445527/rocket-01-1920x1080-q72.jpg" alt="" 
        className="object-cover absolute h-full w-full" />

        <div className="w-100 h-100 z-20 w-[90%] max-w-custom_1 mx-auto grid grid-cols-1 items-center justify-center gap-20">
            <div className="flex flex-col gap-8">
                <h1 className="text-4xl lg:text-5xl text-center z-20 leading-[1.3] font-bold text-white uppercase font-Agency_Extended">
                    BUCKLE UP AND ENJOY THE FLIGHT

                </h1>
            </div>
        </div>
    </div>;
}
export default Banner;