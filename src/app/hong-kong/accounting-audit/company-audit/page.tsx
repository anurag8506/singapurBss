'use client'
import Header from '../../components/header';
import Footer from '../../components/footer'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FAQ from '../../components/faq'



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
                <div className="overflow-hidden sm:px-20 px-6 sm:pt-[100px] pt-[50px]">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center pb-[20px]">
                            <div className="col-md-6 mb-4">
                                <div className='col-md-9'>
                                    <p className="font-[cd-b] text-[#212833] text-[28px] leading-[35px] p-text sm:text-left sm:text-[45px] sm:leading-[45px]">
                                        Hassle-free company audit services in Hong Kong
                                    </p>
                                </div>
                                <div className='col-md-10'>
                                    <p className="font-[cd-r] p-text sm:text-left text-[18px]  text-[#212833]  ">We handle all admin and paperwork, answer your queries quickly, and provide advice at every stage. Our audit services come at a flat, transparent fee, so there’s no need to worry about any unexpected extra charges.</p>
                                    <div className="sm:flex sm:justify-start justify-center items-center sm:pt-[50px] pt-[10px] pb-2 sm:gap-3 gap-2">
                                        <button className="font-[cd-m] font-[500] text-[14px] text-[#212833]  border-[1px] border-[#212833]  py-[8px] rounded-[30px] text-center bg-[#fff] hover:bg-[#000] hover:text-[#fff] sm:w-[260px] w-full ">
                                            Book a consultation
                                        </button>
                                        <div className='sm:mt-[0px] mt-[10px]'>
                                            <button className="font-[cd-m] font-[500] text-[14px] text-[#212833]  border-[1px] border-[#212833] py-[8px] rounded-[30px] text-center bg-[#fff] hover:bg-[#000] hover:text-[#fff] sm:w-[140px] w-full ">
                                                Pricing
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 mb-4'>
                                <div className='d-flex justify-content-end'>
                                    <div className='col-md-10'>
                                        <Image
                                            src="/assets/audit-banner.png"
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
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6 py-[30px]">
                <div >

                    <div className="text-center  ">
                        <div className='d-flex justify-center'>
                            <div className="px-2 py-[10px] font-[cd-m]  text-[16px]  text-[#212833] rounded-[30px] sm:w-[180px] w-[180px] tracking-wider sm:pt-4 ">
                                WHY CLOUD BSS
                            </div>
                        </div>
                        <div className="row justify-center  pb-3">
                            <div className="col-md-6 sm:pt-5 pt-2 sm:pb-5 pb-2  ">
                                <p className="font-[cd-se] font-[500]  sm:text-[35px] text-[28px] text-[#212833]  sm:leading-[38px] leading-[32px] text-center">Comprehensive company audit services</p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 p-0 ">
                        <div className="col-md-3 mb-4 ">
                            <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                <div className="mb-4  align-items-center sm:h-[80px]">
                                    <Image src="/assets/image 33 (1).png" alt="Start secure trading quickly" width="90" height="90" className="object-contain" />
                                </div>
                                <div className="flex-grow-1">
                                    <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]    leading-[20px] ">
                                        Access to experts

                                    </p>
                                    <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0">
                                        You get access to an Cloud Bss expert who will answer your questions and give you guidance. Your app connects you directly an auditor — you&apos;ll never be left in the dark.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 ">
                            <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                <div className="mb-4  align-items-center sm:h-[80px]">
                                    <Image
                                        src="/assets/image 31 (1).png"
                                        alt="Start secure trading quickly"
                                        width="90"
                                        height="90"
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]  mb-2  leading-[20px] ">
                                        Simple app-based process
                                    </p>
                                    <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-4">
                                        From the day you complete your incorporation, we become your one-stop provider that handles all your documents. All you have to do is attend to any app notifications, and our in-house team will handle everything in the Cloud Bss app.
                                    </p>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-3 mb-4 d-flex ">
                            <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                <div className="mb-4  align-items-center sm:h-[80px]">
                                    <Image
                                        src="/assets/image 39 (3).png"
                                        alt="Start secure trading quickly"
                                        width="90"
                                        height="90"
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]   leading-[20px] ">
                                        An on-the-ground team
                                    </p>
                                    <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-3">
                                        Our company auditors are based in Hong Kong and know local business requirements like the back of their hands. We&apos;ll get your compliance up to scratch.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                <div className="mb-4  align-items-center sm:h-[80px]">
                                    <Image
                                        src="/assets/image 40 (3).png"
                                        alt="Start secure trading quickly"
                                        width="90"
                                        height="90"
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]  mb-2  leading-[20px] ">
                                        Convenient storage for documents
                                    </p>
                                    <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-4">
                                        All your company documents are stored in one, secure place which you can access whenever you need to.
                                    </p>

                                </div>

                            </div>
                        </div>

                    </div>




                </div>

            </section>
            <section className="bg-[#F3EFE7] sm:px-20 px-6  py-[10px]">
                <div className="overflow-hidden">
                    <div className="row justify-center">
                        <div className="col-md-6">
                            <p className='text-[18px] text-[#212833] text-center sm:pt-4'>WHAT IS A COMPANY AUDIT?</p>
                            <p className="font-[cd-se] text-center  sm:text-[35px] text-[28px] text-[#212833] sm:leading-[38px] leading-[30px]  sm:pt-3">Audit and tax filing requirements in Hong Kong</p>

                        </div>
                    </div>
                    <div className="row justify-center pt-4 ">
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
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6 py-[30px]">
                <div >

                    <div className="text-center  ">
                        <div className='d-flex justify-center'>
                            <div className="px-2 py-[10px] font-[cd-m]  text-[16px]  text-[#212833] rounded-[30px] sm:w-[180px] w-[180px] tracking-wider sm:pt-4 ">
                                WHY CLOUD BSS
                            </div>
                        </div>
                        <div className="row justify-center  pb-3">
                            <div className="col-md-6 sm:pt-5 pt-2 sm:pb-5 pb-2  ">
                                <p className="font-[cd-se] font-[500]  sm:text-[35px] text-[28px] text-[#212833]  sm:leading-[38px] leading-[32px] text-center">Comprehensive company audit services</p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 p-0 ">
                        <div className="col-md-4 mb-4 ">
                            <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                <div className="mb-4  align-items-center sm:h-[80px]">
                                    <Image src="/assets/image 41 (2).png" alt="Start secure trading quickly" width="90" height="90" className="object-contain" />
                                </div>
                                <div className="flex-grow-1">
                                    <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]    leading-[20px] ">
                                        Get an instant quote from us

                                    </p>
                                    <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0">
                                        Speak to our experts who will guide you on the necessary documents to provide for getting a quote. This will be based on your company&apos;s yearly revenue.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 ">
                            <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                <div className="mb-4  align-items-center sm:h-[80px]">
                                    <Image
                                        src="/assets/image 42 (1).png"
                                        alt="Start secure trading quickly"
                                        width="90"
                                        height="90"
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]  mb-2  leading-[20px] ">
                                        Submit documents
                                    </p>
                                    <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-4">
                                        Once we&apos;ve confirmed our audit services are a good fit, we collect your documents via the Cloud Bss app to start the audit process.
                                    </p>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mb-4 d-flex ">
                            <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                <div className="mb-4  align-items-center sm:h-[80px]">
                                    <Image
                                        src="/assets/image 34 (3).png"
                                        alt="Start secure trading quickly"
                                        width="90"
                                        height="90"
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]   leading-[20px] ">
                                        The audit and report
                                    </p>
                                    <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-3">
                                        We process your company audit within the required timeline. Our auditor will prepare the report, get your company director&apos;s signature, and then arrange regular tax reporting for you.
                                    </p>
                                </div>

                            </div>
                        </div>


                    </div>




                </div>

            </section>
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6  sm:py-[30px] py-[20px]">
                <div className="row justify-center">
                    <div className="col-md-12 sm:pb-2 m-0 p-0">
                        <div className="text-center   ">
                            <div className='d-flex justify-center'>
                                <div className="px-2 py-[10px] font-[cd-m]  text-[18px]  text-[#212833] rounded-[30px] sm:w-[180px] w-[180px] tracking-wider ">
                                    DEADLINES
                                </div>

                            </div>
                            <div className="row justify-center  m-0 p-0 sm:pb-4">
                                <div className="col-md-4 sm:pt-3  ">
                                    <p className="font-[cd-se] font-[500]  sm:text-[35px] text-[26px]   text-[#212833]   sm:leading-[38px] leading-[29px] text-center">Profits Tax Return deadlines in Hong Kong</p>
                                </div>
                            </div>
                            <div className="row justify-center  m-0 p-0 sm:pb-4">
                                <div className='col-md-6'>
                                    <p className='font-[cd-r] text-[#232323] text-[16px]'>Based on your company&apos;s year-end date, take note of the deadline that your company needs to submit your Profits Tax Return with audit documents. Speak to our experts and get advice on when and how you need to start the audit process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center '>
                        <div className='col-md-10'>
                            <div className=" py-5">
                                {/* Table Wrapper */}
                                <div className="bg-white rounded-lg shadow-sm p-4">
                                    {/* Responsive Table */}
                                    <div className="overflow-hidden">
                                        <table className="table-auto w-full text-left  hidden md:table">
                                            <thead className="border-b border-gray-300">
                                                <tr>
                                                    <th className="px-4 py-2 text-[18px] font-[cd-m] whitespace-wrap">
                                                        Company year-end date
                                                    </th>
                                                    <th className="px-4 py-2 text-[18px] font-[cd-m] whitespace-wrap leading-[20px]">
                                                        Standard deadline for submitting Profits Tax Return to the government (IRD)
                                                    </th>
                                                    <th className="px-4 py-2 text-[18px] font-[cd-m] whitespace-wrap">
                                                        Extended due date
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="px-4 py-2 text-[14px]  whitespace-wrap">
                                                        April 1 - November 30 (N code)
                                                    </td>
                                                    <td className="px-4 py-2 text-[14px]  whitespace-wrap">
                                                        May 2 of the next year
                                                    </td>
                                                    <td className="px-4 py-2 text-[14px]  whitespace-wrap">
                                                        No extension
                                                    </td>
                                                </tr>
                                                <tr >
                                                    <td className="px-4 py-2 text-[14px]  whitespace-wrap">
                                                        December 1 - 31 (D code)
                                                    </td>
                                                    <td className="px-4 py-2 text-[14px]  whitespace-wrap">
                                                        August 15 of the next year
                                                    </td>
                                                    <td className="px-4 py-2 text-[14px]  whitespace-wrap">
                                                        No extension
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 text-[14px]  whitespace-wrap">
                                                        January 1 - March 31 (M code)
                                                    </td>
                                                    <td className="px-4 py-2 text-[14px]  whitespace-wrap">
                                                        November 15 of the same year
                                                    </td>
                                                    <td className="px-4 py-2 text-[14px]  whitespace-wrap">
                                                        January 31 of the next year for companies that have suffered a tax loss (application must be lodged on or before October 31)
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>


                                        <div className="md:hidden">
                                            <div className="border-b border-gray-300 py-2">
                                                <h3 className="font-semibold text-sm">Company year-end date</h3>
                                                <p className="px-4 py-2 text-[14px]  whitespace-wrap">April 1 - November 30 (N code)</p>
                                                <p className="px-4 py-2 text-[14px]  whitespace-wrap">December 1 - 31 (D code)</p>
                                                <p className="px-4 py-2 text-[14px]  whitespace-wrap">January 1 - March 31 (M code)</p>
                                            </div>

                                            <div className="border-b border-gray-300 py-2">
                                                <h3 className="font-semibold text-sm mt-2">Standard deadline for submitting Profits Tax Return to the government (IRD)</h3>
                                                <p className="px-4 py-2 text-[14px]  whitespace-wrap">May 2 of the next year</p>
                                                <p className="px-4 py-2 text-[14px]  whitespace-wrap">August 15 of the next year</p>
                                                <p className="px-4 py-2 text-[14px]  whitespace-wrap">November 15 of the same year</p>
                                            </div>

                                            <div className="border-b border-gray-300 py-2">
                                                <h3 className="font-semibold text-sm mt-2">Extended due date</h3>
                                                <p className="px-4 py-2 text-[14px]  whitespace-wrap">No extension</p>
                                                <p className="px-4 py-2 text-[14px]  whitespace-wrap">No extension</p>
                                                <p className="px-4 py-2 text-[14px]  whitespace-wrap">January 31 of the next year for companies that have suffered a tax loss (application must be lodged on or before October 31)</p>
                                            </div>
                                        </div>
                                    </div>
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

                                <div className="row justify-center  pb-3">
                                    <div className="col-md-6 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[28px]   text-[#212833]   sm:leading-[40px] leading-[32px] text-center   ">Tailored Plans for Your Business</p>
                                        <p className='text-[16px]'>Our packages are customized based on your monthly revenue and include comprehensive bookkeeping services for a single, transparent fee.</p>
                                        <div className='d-flex justify-center'>
                                            <div className='bg-[#F3EFE7] p-2 flex justify-center align-items-center rounded-full w-[400px]'>
                                                <div className='d-flex align-items-center justify-around gap-4'>
                                                    <span>Pay monthly</span>
                                                    <div className=' bg-[#fff] p-2 px-6 gap-4  align-items-center justify-around text-[#000] rounded-full d-flex w-[220px] '>
                                                        <span>Pay annually</span>
                                                        <div className='bg-[#0061FE] text-[#fff] p-2 rounded-full px-4 text-center'>-17%</div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>




                    </div>
                    <Swiper
                        spaceBetween={10} // Space between slides
                        loop={true} // Enable infinite loop (optional)
                        // navigation={true} // Enable navigation arrows
                        modules={[Navigation]} // Use only the Navigation module
                        className="items-center"
                        navigation={{
                            nextEl: '.custom-next', // Reference to your custom Next button
                            prevEl: '.custom-prev', // Reference to your custom Previous button
                        }}
                        breakpoints={{
                            640: { // Small screens (Mobile)
                                slidesPerView: 1, // 1 slide per view on mobile
                            },
                            768: { // Medium screens (Tablet)
                                slidesPerView: 2, // 2 slides per view on tablet
                            },
                            1024: { // Large screens (Desktop)
                                slidesPerView: 3, // 3 slides per view on desktop
                            },
                        }}
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="sm:mb-0 col-11">
                                <div className="sm:mb-0 w-full sm:w-[100%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[32px] px-6 py-6">
                                    <div>
                                        <div className='bg-[#FFFDFA] rounded-[20px] p-4 flex-1'>
                                            <p className='font-[cd-se] text-[20px] text-[#212833]'>Essential</p>
                                            <p className='text-[16px] text-[#767676]'>For those who already have a Hong Kong office address</p>
                                            <div className='align-items-center d-flex gap-2'>
                                                <p className='text-[25px] font-[cd-m] text-[#212833] p-0 m-0'>HK$</p>
                                                <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>5,800</p>
                                            </div>
                                            <p className='text-[#767676] text-[14px] pb-2'>HK$3,850 government fees included</p>
                                            <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                                Get this plan
                                            </button>
                                            <div className='pt-3'>
                                                <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                                    Talk to an expert
                                                </button>
                                            </div>
                                        </div>
                                        <div className='p-4'>
                                            <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Incorporation</p>
                                            <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                                <li>Incorporation application</li>
                                                <li>Certificate of Incorporation (CI)</li>
                                                <li>Articles of Association</li>
                                                <li>Business Registration Certificate (BRC) for 1 year</li>
                                                <li>Cloud Bss app document storage</li>
                                                <li>Neobank account opening assistance</li>
                                            </ul>
                                            <div className='pt-2'>
                                                <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Corporate Secretary</p>
                                                <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
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
                            </div>,
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sm:mb-0 col-11">
                                <div className="sm:mb-0 w-full sm:w-[100%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[32px] px-6 py-6">
                                    <div>
                                        <div className='bg-[#FFFDFA] rounded-[20px] p-4 flex-1'>
                                            <p className='font-[cd-se] text-[20px] text-[#212833]'>Essential</p>
                                            <p className='text-[16px] text-[#767676]'>For those who already have a Hong Kong office address</p>
                                            <div className='align-items-center d-flex gap-2'>
                                                <p className='text-[25px] font-[cd-m] text-[#212833] p-0 m-0'>HK$</p>
                                                <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>5,800</p>
                                            </div>
                                            <p className='text-[#767676] text-[14px] pb-2'>HK$3,850 government fees included</p>
                                            <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                                Get this plan
                                            </button>
                                            <div className='pt-3'>
                                                <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                                    Talk to an expert
                                                </button>
                                            </div>
                                        </div>
                                        <div className='p-4'>
                                            <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Incorporation</p>
                                            <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                                <li>Incorporation application</li>
                                                <li>Certificate of Incorporation (CI)</li>
                                                <li>Articles of Association</li>
                                                <li>Business Registration Certificate (BRC) for 1 year</li>
                                                <li>Cloud Bss app document storage</li>
                                                <li>Neobank account opening assistance</li>
                                            </ul>
                                            <div className='pt-2'>
                                                <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Corporate Secretary</p>
                                                <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
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
                            </div>,
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="sm:mb-0 col-11">
                                <div className="sm:mb-0 w-full sm:w-[100%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[32px] px-6 py-6">
                                    <div>
                                        <div className='bg-[#FFFDFA] rounded-[20px] p-4 flex-1'>
                                            <p className='font-[cd-se] text-[20px] text-[#212833]'>Essential</p>
                                            <p className='text-[16px] text-[#767676]'>For those who already have a Hong Kong office address</p>
                                            <div className='align-items-center d-flex gap-2'>
                                                <p className='text-[25px] font-[cd-m] text-[#212833] p-0 m-0'>HK$</p>
                                                <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>5,800</p>
                                            </div>
                                            <p className='text-[#767676] text-[14px] pb-2'>HK$3,850 government fees included</p>
                                            <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                                Get this plan
                                            </button>
                                            <div className='pt-3'>
                                                <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                                    Talk to an expert
                                                </button>
                                            </div>
                                        </div>
                                        <div className='p-4'>
                                            <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Incorporation</p>
                                            <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                                <li>Incorporation application</li>
                                                <li>Certificate of Incorporation (CI)</li>
                                                <li>Articles of Association</li>
                                                <li>Business Registration Certificate (BRC) for 1 year</li>
                                                <li>Cloud Bss app document storage</li>
                                                <li>Neobank account opening assistance</li>
                                            </ul>
                                            <div className='pt-2'>
                                                <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Corporate Secretary</p>
                                                <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
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
                            </div>,
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sm:mb-0 col-11">
                                <div className="sm:mb-0 w-full sm:w-[100%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[32px] px-6 py-6">
                                    <div>
                                        <div className='bg-[#FFFDFA] rounded-[20px] p-4 flex-1'>
                                            <p className='font-[cd-se] text-[20px] text-[#212833]'>Essential</p>
                                            <p className='text-[16px] text-[#767676]'>For those who already have a Hong Kong office address</p>
                                            <div className='align-items-center d-flex gap-2'>
                                                <p className='text-[25px] font-[cd-m] text-[#212833] p-0 m-0'>HK$</p>
                                                <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>5,800</p>
                                            </div>
                                            <p className='text-[#767676] text-[14px] pb-2'>HK$3,850 government fees included</p>
                                            <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                                Get this plan
                                            </button>
                                            <div className='pt-3'>
                                                <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                                    Talk to an expert
                                                </button>
                                            </div>
                                        </div>
                                        <div className='p-4'>
                                            <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Incorporation</p>
                                            <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                                <li>Incorporation application</li>
                                                <li>Certificate of Incorporation (CI)</li>
                                                <li>Articles of Association</li>
                                                <li>Business Registration Certificate (BRC) for 1 year</li>
                                                <li>Cloud Bss app document storage</li>
                                                <li>Neobank account opening assistance</li>
                                            </ul>
                                            <div className='pt-2'>
                                                <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Corporate Secretary</p>
                                                <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
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
                            </div>,
                        </SwiperSlide>

                    </Swiper>



                </div>
            </section>

            <FAQ />



            <Footer />
        </>
    );
}
