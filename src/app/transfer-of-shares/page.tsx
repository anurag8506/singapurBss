'use client'
import Header from '../components/header';
import Footer from '../components/footer'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Home() {
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };
    return (
        <>
            <Header />
               <section className='bg-[#fff]'>
                        <div className="overflow-hidden sm:px-20 px-6  sm:pt-[100px] pt-[50px] sm:py-[40px] py-[20px]">
                            <div className="container-fluid p-0">
                                <div className="d-flex justify-center">
                                    <div className="col-md-6 mb-4">
                                        <p className="font-[cd-b] text-[#212833] text-[33px] leading-[35px] p-text text-center sm:text-[45px] sm:leading-[45px]">
                                        Transfer of shares in Singapore
                                        </p>
                                        <p className="font-[cd-r] p-text text-center text-[18px]  text-[#212833]   "> Transfer of shares in a private limited company — a procedure when a shareholder sells all of his shares or some of them to a company or an individual. It must happen in accordance with the company’s Constitution and the legal requirements.</p>
        
                                        <div className='d-flex justify-center'>   <button className="font-[cd-m] font-[500] text-[14px] text-[#212833]  border-[1px] border-[#212833]  py-[8px] rounded-[30px] text-center bg-[#fff] hover:bg-[#000] hover:text-[#fff] w-[160px]">
                                            Get Started
                                        </button></div>
                                    </div>
        
                                </div>
                            
                            </div>
                        </div>
                       
                    </section>
       
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6  py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-8 sm:pb-2">
                            <div className="text-center pb-2  ">
                                <div className='d-flex justify-center'>
                                    <div className=" px-2 py-[7px] font-[cd-m]  text-[13px] font-[500]  text-[#212833]  border border-black rounded-[30px] sm:w-[120px] w-[120px] ">PRICING</div>
                                </div>
                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-6 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[25px]   text-[#212833]   sm:leading-[40px] leading-[25px] text-center   ">Our plans grow with your business needs</p>
                                        <p className='text-[16px]'>Start with an Essential package that covers all key business needs or switch to a more flexible Unlimited plan later</p>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-center'>
                        <div className='col-md-4 mb-4'>
                            <div className='bg-[#FFFDFA] rounded-[20px] p-2 '>
                                <div className='bg-[#F3EFE7] rounded-[20px] p-4'>
                                    <p className='text-[16px] text-[#767676]'>from</p>
                                    <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>S$300</p>
                                  
                                    <button className='bg-[#212833] w-full py-[13px] text-[#fff] text-[16px] rounded-full border border-[#212833]' >Get this plan</button>
                                    <div className='pt-3'>
                                        <button className='bg-[#fff] w-full py-[13px]  text-[#212833]  text-[16px] border border-dark rounded-full ' >Talk to an expert</button>

                                    </div>
                                </div>
                                <div className='p-4 '>
                                    <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Essential Secretary</p>
                                
                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                        <li>Annual General Meeting preparation</li>
                                        <li>Routine Annual filing</li>
                                        <li>Personal support by your Corporate Secretary via chat</li>
                                        <li>Reminders on filing deadlines</li>
                                        <li>Full service for 1 year</li>
                                        <li>S$60 government fees included</li>
                                    </ul>
                                 
                                    <div className='border border-dark border-t'></div>
                                    <div className='pt-4 d-flex justify-content-between align-items-center'><span className='font-[cd-se] text-[18px]  text-[#212833] '>Additional services you might need</span>
                                   
                                    </div>
                             
        <div>
          <div className="pt-4 d-flex justify-content-between align-items-center">
            <p className="font-[cd-r] text-[14px] text-[#767676] underline">
            Company stamp
            </p>
            <p className="font-[cd-r] text-[14px] text-[#767676]">S$60</p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <p className="font-[cd-r] text-[14px] text-[#767676] underline">
            CorpPass Registration
            </p>
            <p className="font-[cd-r] text-[14px] text-[#767676]">S$100</p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <p className="font-[cd-r] text-[14px] text-[#767676] underline">
            Striking off a company
            </p>
            <p className="font-[cd-r] text-[14px] text-[#767676]">S$400</p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <p className="font-[cd-r] text-[14px] text-[#767676]">
            Striking off a dormant company
            </p>
            <p className="font-[cd-r] text-[14px] text-[#767676]">S$600</p>
          </div>
        </div>
    
                                </div>
                            </div>
                        </div>
                     
                    </div>


                </div>
            </section>
      
            <section className="bg-[#fff] sm:px-20 px-6  py-5">
                <div className="overflow-hidden">
                    <div className="row justify-center">
                        <div className="col-md-6 sm:pt-4">
                            <p className="font-[cd-se] text-center  sm:text-[35px] text-[28px] text-[#212833] sm:leading-[38px] leading-[30px]">Frequently Asked Questions on Company Registration</p>
                            <div className="d-flex justify-center">
                                <button className="text-[#212833] underline mt-2 text-center font-[cd-m] text-[16px]">More FAQs</button>

                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-12 mb-4">
                            {/* FAQs */}
                            <div  >

                                <div>
                                    <div
                                        className="flex justify-between items-center  cursor-pointer "
                                        onClick={() => toggleFAQ(1)}
                                    >
                                        <p className="font-[cd-m] text-[#212833] text-[16px]">Where can I register my company?</p>
                                        <span className="font-[cd-m] text-[#212833] text-[16px]">{activeFAQ === 1 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 1 && (
                                        <p className="text-[#7C7C7C] font-[cd-r] text-[13px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div
                                        className="flex justify-between items-center  cursor-pointer "
                                        onClick={() => toggleFAQ(2)}
                                    >
                                        <p className="font-[cd-m] text-[#212833] text-[16px]">What happens if my company name is already taken?</p>
                                        <span className="font-[cd-m] text-[#212833] text-[16px]">{activeFAQ === 2 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 2 && (
                                        <p className="text-[#7C7C7C] font-[cd-r] text-[13px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div
                                        className="flex justify-between items-center  cursor-pointer "
                                        onClick={() => toggleFAQ(3)}
                                    >
                                        <p className="font-[cd-m] text-[#212833] text-[16px]">Can a foreign national be a director of a company?</p>
                                        <span className="font-[cd-m] text-[#212833] text-[16px]">{activeFAQ === 3 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 3 && (
                                        <p className="text-[#7C7C7C] font-[cd-r] text-[13px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div
                                        className="flex justify-between items-center  cursor-pointer "
                                        onClick={() => toggleFAQ(4)}
                                    >
                                        <p className="font-[cd-m] text-[#212833] text-[16px]">Can a foreign national be a director of a company?</p>
                                        <span className="font-[cd-m] text-[#212833] text-[16px]">{activeFAQ === 4 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 4 && (
                                        <p className="text-[#7C7C7C] font-[cd-r] text-[13px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div
                                        className="flex justify-between items-center  cursor-pointer "
                                        onClick={() => toggleFAQ(5)}
                                    >
                                        <p className="font-[cd-m] text-[#212833] text-[16px]">Where can I register my company?</p>
                                        <span className="font-[cd-m] text-[#212833] text-[16px]">{activeFAQ === 5 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 5 && (
                                        <p className="text-[#7C7C7C] font-[cd-r] text-[13px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div
                                        className="flex justify-between items-center  cursor-pointer "
                                        onClick={() => toggleFAQ(6)}
                                    >
                                        <p className="font-[cd-m] text-[#212833] text-[16px]">How do I check if my company is registered or not?</p>
                                        <span className="font-[cd-m] text-[#212833] text-[16px]">{activeFAQ === 6 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 6 && (
                                        <p className="text-[#7C7C7C] font-[cd-r] text-[13px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

            </section>
            
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6  sm:py-[50px] py-[30px]">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-6">
                            <div className="text-center">
                                <div className='d-flex justify-center  pb-4'>
                                    <div className='border border-dark rounded-full text-center text-[#000] font-[cd-m] text-[18px] w-[160px] py-[8px]'>RESOURCES</div>
                                </div>
                                <p className="font-[cd-se]  no-underline sm:text-[35px] text-[30px]  text-[#212833] text-center sm:leading-[38px] leading-[30px]">Fresh insights from our business blog</p>

                            </div>
                        </div>
                    </div>

                    <div className="row justify-between sm:pt-14 pt-4">
                        <div className="col-md-4">
                            <div>
                                <div className="">
                                    <Image
                                        src="/assets/image 20.png"
                                        className="w-full"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                    />
                                </div>
                                <div className="pt-6 sm:pb-0 pb-4">
                                    <p className='font-[cd-se] text-[#0D0D0D] text-[22px]  leading-[25px]  mb-0'>How to Deal with Inflation&apos;s Effects on Your Small Business</p>
                                    <p className='font-[cd-r]  text-[14px] text-[#4F4F4F]  text-[16px] sm:pt-6 pt-3'>A year end package with everything you need to file comes standard with Cloud Inc. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>

                                    <div className="sm:py-6">
                                        <Link href="/"><button className="font-[cd-m]  text-[16px] text-[#212833] border-[#212833] border-[1px]  rounded-[5px] px-8 py-[8px] rounded-full hover:bg-[#000] hover:text-[#fff]">Learn More</button></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <div className="">
                                    <Image
                                        src="/assets/image 21.png"
                                        className="w-full"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                    />
                                </div>
                                <div className="pt-6 sm:pb-0 pb-4">
                                    <p className='font-[cd-se] text-[#0D0D0D] text-[22px]  leading-[25px]  mb-0'>How to Deal with Inflation&apos;s Effects on Your Small Business</p>
                                    <p className='font-[cd-r]  text-[14px] text-[#4F4F4F]  text-[16px] sm:pt-6 pt-3'>A year end package with everything you need to file comes standard with Cloud Inc. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>

                                    <div className="sm:py-6 py-3">
                                        <Link href="/"><button className="font-[cd-m]  text-[16px] text-[#212833] border-[#212833] border-[1px]  rounded-[5px] px-8 py-[8px] rounded-full hover:bg-[#000] hover:text-[#fff]">Learn More</button></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <div className="">
                                    <Image
                                        src="/assets/image 22.png"
                                        className="w-full"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                    />
                                </div>
                                <div className="pt-6 sm:pb-0 pb-4">
                                    <p className='font-[cd-se] text-[#0D0D0D] text-[22px]  leading-[25px]  mb-0'>How to Deal with Inflation&apos;s Effects on Your Small Business</p>
                                    <p className='font-[cd-r]  text-[14px] text-[#4F4F4F]  text-[16px] sm:pt-6 pt-3'>A year end package with everything you need to file comes standard with Cloud Inc. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>

                                    <div className="sm:py-6 py-3">
                                        <Link href="/"><button className="font-[cd-m]  text-[16px] text-[#212833] border-[#212833] border-[1px]  rounded-[5px] px-8 py-[8px] rounded-full hover:bg-[#000] hover:text-[#fff]">Learn More</button></Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
                <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-5 py-5">
                            <div className="container-fluid p-0">
                                <div className="row align-items-center">
                                    <div className="col-md-6 mb-4">
                                        <div className="col-md-8">
                                            <p className='font-[cd-m] text-[#fff] sm:text-[30px] text-[18px] leading-[20px] sm:leading-[30px]  mb-0'>Get tips on how to run your business smarter</p>
                                            <p className='font-[cd-r] text-[#ABABAB] sm:text-[16px] text-[14px] pt-4 mb-0'>Learn crucial tips on how to save money and build a flourishing business, with real entrepreneurs sharing their own experiences.</p>
                                            <div className="sm:flex items-center gap-4 max-w-lg  pt-4">
                                                <input
                                                    type="email"
                                                    placeholder="Email address"
                                                    className="w-full px-4 py-2 rounded-full text-[#212833] border  bg-transparent mb-4  text-white "
                                                />
                                                <button className="bg-white text-[#212833] font-medium px-6 py-2 rounded-full sm:w-[140px] w-full mb-4 ">
                                                    SUBSCRIBE
                                                </button>
            
                                            </div>
                                            <p className="text-[#fff] text-[14px]"><a className="no-underline text-[#ABABAB] " href="#">By clicking, you agree to our</a> Terms & Conditions, Privacy and Data Protection Policy
                                            </p>
                                        </div>
            
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className='d-flex justify-content-end'>
                                            <Image src="/assets/original-4703d0ba72b72f87fa49a618a24a1f6d 1.png" className="w-full"
                                                width={1080}
                                                height={1080}
                                                alt="no-img"
                                            />
            
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                        </section>
                    
        



            <Footer />
        </>
    );
}
