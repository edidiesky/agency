import React from 'react';

const Works = () => {
    return <div className='py-4 w-full'>
       
        <div className=" max-w-custom_1 mx-auto py-20 grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="w-full lg:mt-24 relative h-[35rem] flex items-end">
                <img src="https://onenil.com/media/pages/work/heineken-cheers-to-you/03bf898036-1686575712/schermafbeelding-2023-06-12-om-15.14.56.png"
                    alt="" className="absolute h-full object-cover w-full z-10" />
                <div className="w-full flex items-start z-20 pt-10 pb-20 px-8 justify-start flex-col gap-4">
                    <h3 className="text-3xl font-normal font-Agency_medium leading-[1.3] text-white">Ajax takes a stand against racism</h3>
                    <h5 className="text-sm font-normal font-Agency_light leading-[1.3] text-text_grey_1">View Case</h5>
                </div>
            </div>

            <div className="w-full lg:mt-16 relative h-[35rem] flex items-end">
                <div className="absolute h-full w-full bg-[rgba(0,0,0,.7)] z-20"></div>

                {/* https://onenil.com/media/pages/work/future-goals/cd6dec9cdb-1685445528/01.png */}
                <img src="https://onenil.com/media/pages/work/future-goals/cd6dec9cdb-1685445528/01.png" alt="" className="absolute z-10 h-full object-cover w-full" />
                <img src="https://onenil.com/media/pages/work/future-goals/ffe84afcc9-1685445528/02.png" alt="" className="absolute z-20 h-full object-cover w-full" />

                <div className="w-full flex items-start z-40 pt-10 pb-16 px-8 justify-start flex-col gap-4">
                    <h3 className="text-3xl font-normal font-Agency_medium leading-[1.3] text-white">From making fishing nets to football goals</h3>
                    <h5 className="text-sm font-normal font-Agency_light leading-[1.3] text-text_grey_1">View Case</h5>
                </div>
            </div>

            <div className="w-full lg:mt-8 relative h-[35rem] flex items-end">
                <div className="absolute h-full w-full bg-[rgba(0,0,0,.1)] z-10"></div>

                <img src="https://onenil.com/media/pages/home/15159f1d0c-1685445527/on-2021-eredivisie-otw-collage-1920x1080-q72.jpg"
                    alt="" className="absolute h-full object-cover w-full" />

                <div className="w-full flex items-start z-40 pt-10 pb-16 px-8 justify-start flex-col gap-4">
                    <h3 className="text-3xl font-normal font-Agency_medium leading-[1.2] text-white">Ajax celebrate a much Champoins Cup</h3>
                    <h5 className="text-sm font-normal font-Agency_light leading-[1.3] text-text_grey_1">View Case</h5>
                </div>
            </div>
        </div>

      
    </div>;
}
export default Works;