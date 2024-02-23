



import React from 'react';
const Hero = () => {
    return <div style={{ minHeight: "100vh" }} className=' relative w-full flex items-center bg-white justify-center'>


        <div className="flex flex-col gap-12 py-24 h-full w-full">
            <div className="h-full z-20 pt-20 pb-12 w-[90%] md:w-[60%] max-w-custom_1 mx-auto flex items-start justify-center gap-8">

                <div className="flex flex-col items-start gap-4">
                    <h1 className="text-5xl lg:text-7xl z-20 md:text-center font-normal text-text_dark_1 uppercase font-Agency_Extended">
                        A DEEP DIVE INTO OUR CASES
                    </h1>
                    <div className="pt-4 w-full flex gap-4">
                        <span className="block text-base  md:text-center text-text_dark_1 w-[90%] font-light font-Agency_light">
                            Over the last years we’ve helped many of our clients build and accelerate their business through sports. Here’s how.
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </div>;
}
export default Hero;