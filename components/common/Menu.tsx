import React from 'react';
const Menu = () => {
    return <div style={{ height: "100vh", zIndex: 200 }} className='bg-[#000] fixed top-0 w-full flex items-center justify-center'>

        <div className="h-full z-20 pt-40 pb-32 w-[90%] max-w-custom_1 mx-auto grid grid-cols-1 items-center justify-center lg:grid-cols-custom gap-20">
            <div className="flex flex-col gap-3">
                <h1 className="text-5xl lg:text-7xl w-full z-20 font-normal text-white uppercase font-Agency_Extended">
                    WORK
                </h1>
                <h1 className="text-5xl lg:text-7xl w-full z-20 font-normal text-white uppercase font-Agency_Extended">
                    ARCHIVE
                </h1>
                <h1 className="text-5xl lg:text-7xl w-full z-20 font-normal text-white uppercase font-Agency_Extended">
                    JOBS
                </h1>
                <h1 className="text-5xl lg:text-7xl w-full z-20 font-normal text-white uppercase font-Agency_Extended">
                    CONTACT
                </h1>
            </div>

            <div className="w-100 flex flex-col gap-6">
                <span className="text-base text-text_grey_1 font-light font-Agency_light">
                    Sarphatikade 14 <br />
                    1017 WV Amsterdam <br />
                    Netherlands
                </span>

                <span className="text-base text-text_grey_1 font-light font-Agency_light">
                    hello@onenil.com
                </span>

                <div className="flex flex-col gap-1">
                    <span className="text-base text-text_grey_1 font-light font-Agency_light">
                        Twitter
                    </span>
                    <span className="text-base text-text_grey_1 font-light font-Agency_light">
                        Facebook
                    </span> <span className="text-base text-text_grey_1 font-light font-Agency_light">
                        Instagram
                    </span>
                </div>
            </div>
        </div>
    </div>;
}
export default Menu;