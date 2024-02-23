import React from 'react';
const Hero = () => {
    return <div style={{ minHeight: "100vh" }} className=' relative w-full flex z-20 items-center justify-center'>
        <div  className="absolute h-full w-full bg-[rgba(0,0,0,.7)] z-10"></div>
        <img style={{ minHeight: "100vh", zIndex:5 }} src="https://onenil.com/media/pages/home/24af6ef326-1685445527/afcajax-frenkie-header-1920x1080-q72.jpg" alt=""
         className="object-cover absolute h-full w-full" />

        <div className="h-full z-20 pt-40 pb-32 w-[90%] max-w-custom_1 mx-auto grid grid-cols-1 items-center justify-center lg:grid-cols-1 gap-20">
           <div className="flex flex-col gap-8">
                <h1 className="text-5xl lg:text-7xl w-full z-20 font-normal text-white uppercase font-Agency_Extended">
                    the <br /> creative <br /> agency in <br /> sports


                </h1>
                <span className="block text-lg text-white w-[90%] lg:w-[450px] font-Agency_medium">
                    We create winning ideas to ignite the most distinctive campaigns in sports.
                </span>
           </div>
            <div className="w-100"></div>
        </div>
    </div>;
}
export default Hero;