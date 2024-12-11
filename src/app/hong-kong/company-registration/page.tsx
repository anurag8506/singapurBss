'use client'
import Header from '../../components/header';
import Footer from '../../components/footer'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";

export default function Home() {
    const [activeRegStep, setActiveRegStep] = useState<number | null>(null);
    const regStep = (index: number) => {
        setActiveRegStep(activeRegStep === index ? null : index);
    };
    return (
        <>
            <Header />
            <section className='bg-[#fff]'>
                <div className="overflow-hidden sm:px-20 px-6  pt-32">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center pb-[20px]">
                            <div className="col-md-6 mb-4">
                                <div className='col-md-10'>
                                    <p className="font-[cd-se] text-[#212833] text-[33px] leading-[35px] p-text sm:text-left sm:text-[45px] sm:leading-[45px]">
                                        Hong Kong Company Formation Services
                                    </p>
                                </div>
                                <div className='col-md-10'>
                                    <p className="font-[cd-r] p-text sm:text-left text-[18px]  text-[#212833]  ">Let Cloud Bss manage your Hong Kong company formation online, from bank accounts to compliance. No paperwork, quick registration, and expert support throughout.</p>
                                    <div className="flex sm:justify-start justify-center   items-center sm:pt-[50px] pt-[10px] pb-2 gap-3">
                                        <button className="bg-[#212833] border border-dark  text-white font-[cd-m] sm:w-[160px]  w-[160px]  px-4 py-[10px] rounded-full sm:mb-4 tracking-wider">
                                            Get Started
                                        </button>
                                        <button className="bg-[#fff] border border-dark text-[#000] font-[cd-m] sm:w-[160px]  w-[160px]  px-4 py-[10px] rounded-full sm:mb-4 tracking-wider">
                                            Pricing
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 mb-4'>
                                <div className='d-flex justify-content-end'>
                                    <div className='col-md-12'>
                                        <Image
                                            src="/assets/hong.png"
                                            alt=".."
                                            className="w-full object-contain"
                                            width='8000'
                                            height='100'
                                        />

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6 py-[20px]">
                <div className="row justify-center">
                    <div className="col-md-12 ">
                        <div className="text-center  ">
                            <div className='d-flex justify-center'>
                                <div className=" px-2 py-[10px] font-[cd-m]  text-[16px]  text-[#212833] rounded-[30px] sm:w-[180px] w-[180px] tracking-wider ">
                                    WHY CLOUD BSS
                                </div>

                            </div>
                            <div className="row justify-center  pb-3">
                                <div className="col-md-5 sm:pt-4 pt-2  ">
                                    <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[28px] text-[#212833]   sm:leading-[43px] leading-[32px] text-center">Effortless Company Formation in Hong Kong</p>
                                </div>
                            </div>
                        </div>

                        <div className="row m-0 p-0">
                            <div className="col-md-4 mb-4 d-flex">
                                <div className="bg-white rounded-[20px] p-4 d-flex flex-column h-100">
                                    <div className="mb-4  align-items-center sm:h-[80px]">
                                        <Image
                                            src="/assets/image 29.gif"
                                            alt="Start secure trading quickly"
                                            width="90"
                                            height="90"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]    leading-[20px] sm:h-[20px]">
                                            Zero paperwork on your end
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0">
                                            All you have to do is send us your documents via chat. We&apos;ll handle the application with the authorities and send it back for your electronic signature.


                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4 d-flex">
                                <div className="bg-white rounded-[20px] p-4 d-flex flex-column h-100">
                                    <div className="mb-4  align-items-center sm:h-[80px]">
                                        <Image
                                            src="/assets/alp.png"
                                            alt="Start secure trading quickly"
                                            width="90"
                                            height="90"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]   leading-[20px] sm:h-[20px]">
                                            Speedy registration
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0">
                                            We prepare and file your application with Companies Registry. Your business is typically registered in less than three business days.


                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="bg-white rounded-[20px] p-4 d-flex flex-column h-100">
                                    <div className="mb-4  align-items-center sm:h-[80px]">
                                        <Image
                                            src="/assets/image 31.png"
                                            alt="Start secure trading quickly"
                                            width="90"
                                            height="90"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]  mb-2  leading-[20px] sm:h-[20px]">
                                            Business bank account, sorted
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0">
                                            We link you up with our local network of neobanks and traditional banks and fast-track your application for the most suitable bank account.


                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </section>
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 py-5 ">
                <div className="container-fluid p-0">
                    <div className="row align-items-center">

                        <div className="col-md-6 mb-2">
                            <div className="col-md-9">
                                <p className='font-[cd-se] text-[#fff] sm:text-[40px] text-[28px] leading-[32px] sm:leading-[43px]  mb-0 p-text '>Got questions? Chat with our local experts</p>
                                <p className='font-[cd-r] text-[#ABABAB] text-[16px] pt-4 mb-0 p-text '>Choose a convenient time to chat with our accounting experts and get the answers you need to take the next step.
                                </p>
                                <div className="flex sm:justify-start justify-center items-center pt-4">
                                    <button className="bg-white text-black font-[cd-m] py-[10px] rounded-full sm:w-[180px] w-[180px] mb-4 text-[14px]">
                                        Schedule a call
                                    </button>
                                </div>



                            </div>

                        </div>
                        <div className="col-md-6 ">
                            <div className='d-flex justify-end'>
                                <div className="col-md-8">
                                    <Image src="/assets/image 27.png" className="w-full"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                    />

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6  py-[20px]">
                <div className="row justify-center">
                    <div className="col-md-12 sm:pb-2">
                        <div className="text-center   ">
                            <div className='d-flex justify-center'>
                                <div className="px-2 py-[10px] font-[cd-m]  text-[18px]  text-[#212833] rounded-[30px] sm:w-[180px] w-[180px] tracking-wider ">
                                    WHO WE HELP
                                </div>

                            </div>
                            <div className="row justify-center  sm:pb-4">
                                <div className="col-md-5 sm:pt-3  ">
                                    <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[26px]   text-[#212833]   sm:leading-[40px] leading-[29px] text-center">For Local and International Entrepreneurs</p>
                                </div>
                            </div>
                        </div>

                        <div className="row m-0 pt-3">
                            <div className="col-md-4 mb-4 d-flex">
                                <div >
                                    <Image src="/assets/Rectangle 4601 (1).png" alt="Start secure trading quickly" width="9000" height="9000" className="object-contain w-full rounded" />
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[22px]  leading-[25px] sm:h-[45px] text-center pt-4">
                                            Local Entrepreneurs
                                            
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0 text-center leading-[19px] pr-2 pl-2">
                                            For Hong Kong entrepreneurs seeking hassle-free incorporation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4 d-flex">
                                <div >
                                    <Image src="/assets/Rectangle 4602.png" alt="Start secure trading quickly" width="9000" height="9000" className="object-contain w-full rounded" />
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[22px]  leading-[25px] sm:h-[45px] text-center pt-4">
                                            Entering the Asian Market
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0 text-center leading-[18px] pr-2 pl-2">
                                            For international entrepreneurs seeking a tax-friendly base to expand into Asian markets.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4 d-flex">
                                <div >
                                    <Image src="/assets/Rectangle 4603.png" alt="Start secure trading quickly" width="9000" height="9000" className="object-contain w-full rounded" />
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[22px]  leading-[25px] sm:h-[45px] text-center pt-4">
                                            English-Speaking Regions
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0 text-center leading-[18px] pr-2 pl-2">
                                            For Chinese professionals aiming to build relationships with English-speaking clients in the region.
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>


                </div>
            </section>
            <section className="bg-[#F3EFE7] sm:px-20 px-6  py-[20px]">
                <div className="overflow-hidden">
                    <div className="row justify-center">
                        <div className="col-md-6">
                            <p className='text-[18px] text-[#212833] text-center sm:pt-4'>THE PROCESS</p>
                            <p className="font-[cd-se] text-center  sm:text-[35px] text-[28px] text-[#212833] sm:leading-[45px] leading-[30px]  sm:pt-3">4 Steps to Registering Your Business in Hong Kong</p>
                        
                        </div>
                    </div>
                    <div className="row justify-center pt-5">
                        <div className="col-md-10 mb-4">
                     
                            <div  >

                                <div>
                                    <div
                                        className="flex justify-between items-center  cursor-pointer bg-white p-3 rounded-[20px] mb-2 "
                                        onClick={() => regStep(1)}
                                    >
                                        <div className='flex gap-3 align-items-center'>
                                        <div className='bg-[#0061FE] rounded-[50%] text-white w-8 h-8 flex items-center justify-center'>1</div>


                                        <span className="font-[cd-m] text-[#212833] text-[16px]">Meet the official requirements</span>

                                        </div>
                                        
                                        <span className="font-[cd-m] text-[#212833] text-[16px]">{activeRegStep === 1 ? "-" : "+"}</span>
                                    </div>
                                    {activeRegStep === 1 && (
                                        <p className="text-[#7C7C7C] font-[cd-r] text-[13px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div
                                        className="flex justify-between items-center  cursor-pointer bg-white p-3 rounded-[20px] mb-2 "
                                        onClick={() => regStep(2)}
                                    >
                                        <div className='flex gap-3 align-items-center'>
                                        <div className='bg-[#0061FE] rounded-[50%] text-white w-8 h-8 flex items-center justify-center'>2</div>


                                        <span className="font-[cd-m] text-[#212833] text-[16px]">Register Your Company</span>

                                        </div>
                                        
                                        <span className="font-[cd-m] text-[#212833] text-[16px]">{activeRegStep === 2 ? "-" : "+"}</span>
                                    </div>
                                    {activeRegStep === 2 && (
                                        <p className="text-[#7C7C7C] font-[cd-r] text-[13px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div
                                        className="flex justify-between items-center  cursor-pointer bg-white p-3 rounded-[20px] mb-2 "
                                        onClick={() => regStep(3)}
                                    >
                                        <div className='flex gap-3 align-items-center'>
                                        <div className='bg-[#0061FE] rounded-[50%] text-white w-8 h-8 flex items-center justify-center'>3</div>


                                        <span className="font-[cd-m] text-[#212833] text-[16px]">Establish Your Accounting Schedule</span>

                                        </div>
                                        
                                        <span className="font-[cd-m] text-[#212833] text-[16px]">{activeRegStep === 3 ? "-" : "+"}</span>
                                    </div>
                                    {activeRegStep === 3 && (
                                        <p className="text-[#7C7C7C] font-[cd-r] text-[13px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div
                                        className="flex justify-between items-center  cursor-pointer bg-white p-3 rounded-[20px] mb-2 "
                                        onClick={() => regStep(4)}
                                    >
                                        <div className='flex gap-3 align-items-center'>
                                        <div className='bg-[#0061FE] rounded-[50%] text-white w-8 h-8 flex items-center justify-center'>4</div>


                                        <span className="font-[cd-m] text-[#212833] text-[16px]">Set Up Your Business Banking Account</span>

                                        </div>
                                        
                                        <span className="font-[cd-m] text-[#212833] text-[16px]">{activeRegStep === 4 ? "-" : "+"}</span>
                                    </div>
                                    {activeRegStep === 4 && (
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


            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6  py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2  ">
                                <div className='d-flex justify-center'>
                                    <div className=" px-2 py-[7px] font-[cd-m]  text-[13px] font-[500]  text-[#212833]  border border-black rounded-[30px] sm:w-[120px] w-[120px] ">PRICING</div>
                                </div>

                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-6 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[28px]   text-[#212833]   sm:leading-[40px] leading-[32px] text-center   ">Customizable Plans to Suit Your Business</p>
                                        <p className='text-[16px]'>Tailored Registration Packages to Suit Your Requirements. From Registration Only to Full Compliance Services.</p>
                                        <div className='sm:flex  justify-center align-items-center'>
                                            <div className='d-flex align-items-center justify-center text-[16px]'><span className='mr-2'></span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="9.5" stroke="#ADADAD" />
                                                <path d="M11.212 7.23H9.7V5.62H11.212V7.23ZM11.212 15H9.7V8.042H11.212V15Z" fill="#ADADAD" />
                                            </svg>
                                            </div>
                                            <div className='sm:pb-0 pb-4 sm:ml-4'>
                                                <div className="sm:pt-0 pt-4">
                                                    <div className="border border-dark py-2 sm:w-[130px] px-3 w-full flex justify-between items-center rounded-[10px]">
                                                        <span>HK$ HKD</span>
                                                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.40226 11.3701C9.48086 11.2915 9.48084 11.1641 9.40222 11.0855C9.32363 11.007 9.19628 11.007 9.11772 11.0856L5.83453 14.3686C5.24786 14.9553 4.29672 14.9553 3.71006 14.3686L0.426865 11.0856C0.348309 11.007 0.220955 11.007 0.142373 11.0855C0.0637509 11.1641 0.0637283 11.2915 0.142323 11.3701L3.71004 14.9378C4.2967 15.5245 5.24788 15.5245 5.83455 14.9378L9.40226 11.3701Z" fill="black" />
                                                            <path d="M9.40226 4.62988C9.48086 4.70847 9.48084 4.83591 9.40222 4.91447C9.32363 4.993 9.19628 4.99298 9.11772 4.91442L5.83453 1.63137C5.24786 1.04474 4.29672 1.04474 3.71006 1.63137L0.426865 4.91443C0.348309 4.99298 0.220955 4.993 0.142373 4.91447C0.0637509 4.83591 0.0637283 4.70847 0.142323 4.62988L3.71004 1.06216C4.2967 0.475493 5.24788 0.475493 5.83455 1.06216L9.40226 4.62988Z" fill="black" />

                                                        </svg>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>




                    </div>
                    <div className='row justify-center'>
                        <div className='col-md-4 mb-4'>
                            <div className='bg-[#F3EFE7] rounded-[20px] p-2 '>
                                <div className='bg-[#FFFDFA] rounded-[20px] p-4'>
                                    <p className='font-[cd-se] text-[20px]  text-[#212833] '>Essential</p>
                                    <p className='text-[16px] text-[#767676]'>For those who already have a Hong Kong office address</p>
                                    <div className='align-items-center d-flex gap-2'>
                                    <p className='text-[25px] font-[cd-m] text-[#212833] p-0 m-0'>HK$</p>
                                    <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>5,800</p>
                                    </div>
                                    <p className='text-[#767676] text-[14px] pb-2'>HK$3,850 government fees included</p>
                                    <button className='bg-[#212833] w-full py-[13px] text-[#fff] text-[16px] rounded-full border border-[#212833]' >Get this plan</button>
                                    <div className='pt-3'>
                                        <button className='bg-[#fff] w-full py-[13px]  text-[#212833]  text-[16px] border border-dark rounded-full ' >Talk to an expert</button>

                                    </div>
                                </div>
                                <div className='p-4 '>
                                    <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Incorporation</p>
                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                        <li>Incorporation application</li>
                                        <li>Certificate of Incorporation (CI)</li>
                                        <li>Articles of Association</li>
                                        <li>Business Registration Certificate (BRC) for 1 year</li>
                                        <li>Cloud Bss app document storage</li>
                                        <li>Neobank account opening assistance</li>
                                    </ul>
                                    <div className='pt-2'>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Corporate Secretary</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li>Personal Corporate Secretary On‑demand support via live chat</li>
                                            <li>Annual General Meeting papers</li>
                                            <li>Annual Returns Filing (NAR1)</li>
                                            <li>Automated reminders of filing deadlines</li>
                                            <li>Online shares distribution management and capital table</li>
                                        </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <div className='bg-[#F3EFE7] rounded-[20px] p-2 '>
                                <div className='bg-[#FFFDFA] rounded-[20px] p-4'>
                                    <p className='font-[cd-se] text-[20px]  text-[#212833] '>All-inclusive</p>
                                    <p className='text-[16px] text-[#767676]'>For those who already have a Hong Kong office address</p>
                                    <div className='align-items-center d-flex gap-2'>
                                    <p className='text-[25px] font-[cd-m] text-[#212833] p-0 m-0'>HK$</p>
                                    <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>7,800</p>
                                    </div>
                                    <p className='text-[#767676] text-[14px] pb-2'>HK$3,850 government fees included</p>
                                    <button className='bg-[#212833] w-full py-[13px] text-[#fff] text-[16px] rounded-full border border-[#212833]' >Get this plan</button>
                                    <div className='pt-3'>
                                        <button className='bg-[#fff] w-full py-[13px]  text-[#212833]  text-[16px] border border-dark rounded-full ' >Talk to an expert</button>

                                    </div>
                                </div>
                                <div className='p-4 '>
                                    <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Incorporation</p>
                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                        <li>Incorporation application</li>
                                        <li>Certificate of Incorporation (CI)</li>
                                        <li>Articles of Association</li>
                                        <li>Business Registration Certificate (BRC) for 1 year</li>
                                        <li>Cloud Bss app document storage</li>
                                        <li>Neobank account opening assistance</li>
                                    </ul>
                                    <div className='pt-2'>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Corporate Secretary</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li>Personal Corporate Secretary On‑demand support via live chat</li>
                                            <li>Annual General Meeting papers</li>
                                            <li>Annual Returns Filing (NAR1)</li>
                                            <li>Automated reminders of filing deadlines</li>
                                            <li>Online shares distribution management and capital table</li>
                                        </ul>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Registered Address</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li>Registered address for 1 year</li>
                                            <li>Notifications when you receive mail</li>
                                            <li>Scanning and forwarding of notices and documents to this address</li>
                                         
                                        </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>


                </div>
            </section>
            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6  py-5">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-6">
                            <div className="text-center">
                                <p className="font-[cd-se]  no-underline sm:text-[40px] text-[30px]  text-[#212833] text-center sm:leading-[40px] leading-[30px]">Explore over 600 resources for managing small business finances</p>

                            </div>
                        </div>
                    </div>

                    <div className="row justify-between pt-14">
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
                                        <Link href="/"><button className="font-[cd-m] bg-[#fff] text-[16px] text-[#212833] border-[#212833] border-[2px]  rounded-[5px] px-10 py-[10px]" type="button">Learn More</button></Link>
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
                                        <Link href="/"><button className="font-[cd-m] bg-[#fff] text-[14px] text-[#212833] border-[#212833] border-[2px]  rounded-[5px] px-10 py-[10px]" type="button">Learn More</button></Link>
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
                                        <Link href="/"><button className="font-[cd-m] bg-[#fff] text-[14px] text-[#212833] border-[#212833] border-[2px]  rounded-[5px] px-10 py-[10px]" type="button">Learn More</button></Link>
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

                            <p className="font-[cd-se]  no-underline sm:text-[38px] text-[30px]  text-[#fff]  sm:leading-[38px] leading-[30px]">Get tips on how to run your business smarter</p>
                            <div className="col-md-9">
                                <p className='font-[cd-r] text-[#ABABAB] text-[16px]  pt-4 mb-0'>Learn crucial tips on how to save money and build a flourishing business, with real entrepreneurs sharing their own experiences.</p>
                                <div className="sm:flex  items-center gap-4  pt-4">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full px-4 py-2 rounded-full  text-[#0D0D0D]  border border-gray-400 mb-4 "
                                    />
                                    <button className="bg-white  text-[#0D0D0D]  font-[cd-m] px-6 py-2 rounded-full w-[140px] w-full mb-4 ">
                                        SUBSCRIBE
                                    </button>

                                </div>
                                <p className="text-[#fff] text-[14px]"><a className="no-underline text-[#ABABAB] " href="#">By clicking, you agree to our</a> Terms & Conditions, Privacy and Data Protection Policy
                                </p>

                            </div>


                        </div>
                        <div className="col-md-6 ">
                            <Image src="/assets/original-4703d0ba72b72f87fa49a618a24a1f6d 1.gif" className="w-full"
                                width={1080}
                                height={1080}
                                alt="no-img"
                            />
                        </div>
                    </div>
                </div>

            </section>




            <Footer />
        </>
    );
}
