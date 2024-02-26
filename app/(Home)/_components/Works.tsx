import React from 'react';

const Works = () => {
    return <div data-scroll className='py-20 w-full'>
        <div className="h-full z-20 py-32 w-[95%] max-w-custom_1 mx-auto items-start flex flex-col gap-20">
            <div className="flex flex-col gap-8">
                <h1 className="text-4xl lg:text-6xl z-20 font-bold text-white uppercase font-Agency_Extended">
                    SELECTED
                    <br />
                    WORKS
                </h1>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">

                <div data-scroll-speed={"3"} className="w-full lg:mt-24 relative h-[35rem] flex items-end">
                    <img src="https://onenil.com/media/pages/work/heineken-cheers-to-you/03bf898036-1686575712/schermafbeelding-2023-06-12-om-15.14.56.png"
                        alt="" className="absolute h-full object-cover w-full z-10" />
                    <div className="w-full flex items-start z-20 pt-10 pb-20 px-8 justify-start flex-col gap-4">
                        <h3 className="text-3xl font-normal font-Agency_medium leading-[1.3] text-white">Ajax takes a stand against racism</h3>
                        <h5 className="text-sm font-normal font-Agency_light leading-[1.3] text-text_grey_1">View Case</h5>
                    </div>
                </div>

                <div data-scroll-speed={"1.6"} className="w-full lg:mt-16 relative h-[35rem] flex items-end">
                    <div className="absolute h-full w-full bg-[rgba(0,0,0,.7)] z-20"></div>

                    {/* https://onenil.com/media/pages/work/future-goals/cd6dec9cdb-1685445528/01.png */}
                    <img src="https://onenil.com/media/pages/work/future-goals/cd6dec9cdb-1685445528/01.png" alt="" className="absolute z-10 h-full object-cover w-full" />
                    <img src="https://onenil.com/media/pages/work/future-goals/ffe84afcc9-1685445528/02.png" alt="" className="absolute z-20 h-full object-cover w-full" />

                    <div className="w-full flex items-start z-40 pt-10 pb-16 px-8 justify-start flex-col gap-4">
                        <h3 className="text-3xl font-normal font-Agency_medium leading-[1.3] text-white">From making fishing nets to football goals</h3>
                        <h5 className="text-sm font-normal font-Agency_light leading-[1.3] text-text_grey_1">View Case</h5>
                    </div>
                </div>

                <div data-scroll-speed={"2.6"} className="w-full lg:mt-8 relative h-[35rem] flex items-end">
                    <div className="absolute h-full w-full bg-[rgba(0,0,0,.1)] z-10"></div>

                    <img src="https://onenil.com/media/pages/home/15159f1d0c-1685445527/on-2021-eredivisie-otw-collage-1920x1080-q72.jpg"
                        alt="" className="absolute h-full object-cover w-full" />

                    <div className="w-full flex items-start z-40 pt-10 pb-16 px-8 justify-start flex-col gap-4">
                        <h3 className="text-3xl font-normal font-Agency_medium leading-[1.2] text-white">Ajax celebrate a much Champoins Cup</h3>
                        <h5 className="text-sm font-normal font-Agency_light leading-[1.3] text-text_grey_1">View Case</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="h-full z-20 pt-32 pb-12 w-[95%] max-w-custom_1 mx-auto items-start flex flex-col gap-20">

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-20">
                <h1 className="text-3xl lg:text-5xl z-20 font-bold text-white uppercase font-Agency_Extended">
                    Our
                    <br />
                    Main
                    <br />
                    Philosophy
                </h1>
                <h1 className="text-3xl lg:text-5xl z-20 font-medium text-white font-Agency_medium">
                    We believe sports is the most thrilling thing on earth

                    <span className="block text-base my-12 font-normal font-Agency_light">
                        We create winning ideas to ignite the most distinctive campaigns in sports. Like no other we know how to find the sweet spots between brands and sports culture, which makes us the specialists in our game.
                    </span>

                    <span className="block text-base my-12 font-normal font-Agency_light">
                        We create winning ideas to ignite the most distinctive campaigns in sports. Like no other we know how to find the sweet spots between brands and sports culture, which makes us the specialists in our game.
                    </span>

                </h1>
            </div>
        </div>


        <div className="h-full z-20 pt-20 pb-12 w-[95%] max-w-custom_1 mx-auto items-start flex flex-col gap-20">

            <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-20 items-center">
                <img src="https://onenil.com/media/pages/home/ace1b65ac3-1685445527/uefa.svg" alt="" className="w-16" />
                <img src="https://onenil.com/media/pages/home/64813f6452-1685445527/mercedesbenz.svg" alt="" className="w-12" />
                <img src="https://onenil.com/media/pages/home/a8a7f87618-1685445527/totoknvbbeker.svg" alt="" className="w-12" />
                <img src="https://onenil.com/media/pages/home/272378d751-1685445527/kwf.png" alt="" className="w-16" />
                <img src="https://onenil.com/media/pages/home/1bbf909cda-1685445527/ea.png" alt="" className="w-16" />
                <img src="https://onenil.com/media/pages/home/e71ad14bfc-1685445527/hema.svg" alt="" className="w-16" />
            </div>
        </div>
    </div>;
}
export default Works;