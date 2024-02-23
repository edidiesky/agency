import React from 'react';
const Hero = () => {
    return <div style={{ minHeight: "100vh" }} className=' relative w-full flex items-center justify-center'>
        <div style={{ background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.2) 100%)" }} className="absolute h-full w-full z-10"></div>
        <img style={{ minHeight: "100vh", zIndex: 5 }} src="https://onenil.com/media/pages/work/future-goals/198accd6a3-1685445528/news-1-ajax-and-sandals-1920x1080-q72.jpg" alt=""
            className="object-cover absolute h-full w-full" />

        <div className="flex flex-col gap-12 h-full w-full">
            <div className="h-full z-20 pt-40 pb-20 w-[90%] max-w-custom_1 mx-auto grid items-start justify-center grid-cols-custom_2 gap-8">
                <div className="w-full">
                    <h4 className="lg:text-xl z-20 font-normal text-white uppercase font-Agency_Extended">
                        case

                    </h4>
                </div>
                <div className="flex flex-col items-start gap-8">
                    <h1 className="text-4xl lg:text-5xl z-20 font-normal text-white uppercase font-Agency_Extended">
                        FROM FISHING NETS TO FOOTBALL GOALS
                    </h1>
                    <div className="pt-16 w-full flex gap-4">
                        <div className="flex flex-col gap-4">
                            <span className="block text-base text-text_grey_1 w-[90%] font-light font-Agency_light">
                                CLIENT
                            </span>
                            <span className="block text-base text-white w-[90%] font-light font-Agency_light">
                                Sandals Resorts
                            </span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="block text-base text-text_grey_1 w-[90%] font-light font-Agency_light">
                                SERVICE
                            </span>
                            <span className="block text-base text-white w-[90%] font-light font-Agency_light">
                                Strategy, Concept, Campaign, Design, Video, Social
                            </span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="block text-base text-text_grey_1 w-[90%] font-light font-Agency_light">
                                DATE
                            </span>
                            <span className="block text-base text-white w-[90%] font-light font-Agency_light">
                                2022
                            </span>
                        </div> 



                    </div>
                </div>

            </div>


            <div className="h-full z-20 pt-40 pb-32 w-[90%] max-w-custom_1 mx-auto items-start justify-center flex flex-col gap-8">
                
                <div className="flex flex-col items-start gap-8">
                    <h1 className="text-4xl lg:text-5xl z-20 font-normal text-white uppercase font-Agency_Extended">
                        Ajax and Sandals Resorts join forces to facilitate football in The Caribbean
                    </h1>
                    <div className="pt-4 w-full flex gap-4">
                        <span className="block text-base text-white w-[90%] font-light font-Agency_light">
                            Children in Curaçao are celebrating new goals, as AFC Ajax and Sandals Resorts, together with its philanthropic arm, the Sandals Foundation, launch an island-wide program that creatively turns fishing nets sourced from the ocean and plastic waste into colorful football goals. Through the new Future Goals program, primary schools across the Dutch Caribbean island are set to receive new football equipment, accompanied by a sports program designed by the professional football team. With a common objective of empowering children through the game of football and providing the resources to play, the program marks the beginning of a collaboration between AFC Ajax and SRI, which is opening a new resort on the island.
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </div>;
}
export default Hero;