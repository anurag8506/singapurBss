'use client'


import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {


  
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    return (
        <>

     
            <section className="bg-[#F3EFE7] sm:px-20 px-6 pb-20 py-5">
                <div className="overflow-hidden">
                    <div className="row justify-center">
                        <div className="col-md-6">
                            <p className="font-[cd-se] text-center no-underline sm:text-[35px] text-[28px] text-[#212833] sm:leading-[45px] leading-[30px]">Frequently Asked Questions on Company Registration</p>
                            <div className="d-flex justify-center">
                                <button className="text-[#212833] underline mt-2 text-center font-[cd-m] text-[16px]">More FAQs</button>

                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-12 mb-4">
                            {/* FAQs */}
                            <div  >

                                <div className="bg-white border-dark border rounded mb-4">
                                    <div
                                        className="flex justify-between items-center  cursor-pointer p-3 "
                                        onClick={() => toggleFAQ(1)}
                                    >
                                        <p className="font-[cd-m] text-[#212833] text-[18px] m-0 p-0">Where can I register my company?</p>
                                        <span className="font-[cd-m] text-[#212833] text-[18px]">{activeFAQ === 1 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 1 && (
                                        <p className="text-[#7C7C7C] font-[cd-r] text-[16px] p-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div className="bg-white border-dark border rounded mb-4">
                                    <div
                                        className="flex justify-between items-center  cursor-pointer p-3 "
                                        onClick={() => toggleFAQ(2)}
                                    >
                                        <p className="font-[cd-m] text-[#212833] text-[18px] m-0 p-0">Where can I register my company?</p>
                                        <span className="font-[cd-m] text-[#212833] text-[18px]">{activeFAQ === 2 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 2 && (
                                        <p className="text-[#7C7C7C] font-[cd-r] text-[16px] p-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div className="bg-white border-dark border rounded mb-4">
                                    <div
                                        className="flex justify-between items-center  cursor-pointer p-3 "
                                        onClick={() => toggleFAQ(3)}
                                    >
                                        <p className="font-[cd-m] text-[#212833] text-[18px] m-0 p-0">Where can I register my company?</p>
                                        <span className="font-[cd-m] text-[#212833] text-[18px]">{activeFAQ === 3 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 3 && (
                                        <p className="text-[#7C7C7C] font-[cd-r] text-[16px] p-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div className="bg-white border-dark border rounded mb-4">
                                    <div
                                        className="flex justify-between items-center  cursor-pointer p-3 "
                                        onClick={() => toggleFAQ(4)}
                                    >
                                        <p className="font-[cd-m] text-[#212833] text-[18px] m-0 p-0">Where can I register my company?</p>
                                        <span className="font-[cd-m] text-[#212833] text-[18px]">{activeFAQ === 4 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 4 && (
                                        <p className="text-[#7C7C7C] font-[cd-r] text-[16px] p-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div className="bg-white border-dark border rounded mb-4">
                                    <div
                                        className="flex justify-between items-center  cursor-pointer p-3 "
                                        onClick={() => toggleFAQ(5)}
                                    >
                                        <p className="font-[cd-m] text-[#212833] text-[18px] m-0 p-0">Where can I register my company?</p>
                                        <span className="font-[cd-m] text-[#212833] text-[18px]">{activeFAQ === 5 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 5 && (
                                        <p className="text-[#7C7C7C] font-[cd-r] text-[16px] p-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div className="bg-white border-dark border rounded mb-4">
                                    <div
                                        className="flex justify-between items-center  cursor-pointer p-3 "
                                        onClick={() => toggleFAQ(6)}
                                    >
                                        <p className="font-[cd-m] text-[#212833] text-[18px] m-0 p-0">Where can I register my company?</p>
                                        <span className="font-[cd-m] text-[#212833] text-[18px]">{activeFAQ === 6 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 6 && (
                                        <p className="text-[#7C7C7C] font-[cd-r] text-[16px] p-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

            </section>








        </>
    );
}
