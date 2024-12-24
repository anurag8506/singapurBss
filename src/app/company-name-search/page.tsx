'use client'
import Header from '../components/header';
import Footer from '../components/footer'
import Image from 'next/image';

import PreIncorportaion from "../components/pre‑Incorporation"
import FAQ from "../components/faq"



import { useState } from "react";

export default function Home() {

    const [activeRegStep, setActiveRegStep] = useState<number | null>(null);
    const [selected, setSelected] = useState<"locals" | "foreigners">("locals");
    const handleToggle = (option: "locals" | "foreigners") => {
        setSelected(option);
    };

    const regStep = (step: number) => {

        setActiveRegStep(activeRegStep === step ? null : step);
    };

    const closeContent = () => {
        setActiveRegStep(null);
    };



    return (
        <>
            <Header />
            <section className='bg-[#fff]'>
                <div className="overflow-hidden sm:px-20 px-6 sm:pt-[100px] pt-[50px] sm:py-[100px]">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center pb-[20px] justify-center">
                            <div className='col-md-6 mb-4'>
                                <p className="font-[cd-b] text-[#212833] text-[28px] p-text sm:text-left sm:text-[45px] sm:leading-[45px] leading-[31px] text-center ">
                                    Singapore Business Name Check
                                </p>
                                <p className="font-[cd-r] text-[#212833] text-[18px] text-[#232323] text-center ">
                                    The first step in setting up a company in Singapore is choosing a name and having your filing agency validate it in the Accounting and Corporate Regulatory Authority (ACRA). Use our free tool to search for a company name and see if it’s available.
                                </p>
                                <div className="sm:flex  items-center gap-4  pt-4">
                                    <input
                                        type="search"
                                        placeholder="Any Company Name you have in mind"
                                        className="w-full px-4 py-2 rounded-full  text-[#0D0D0D]  border border-dark mb-4 outline-none"
                                    />
                                    <button className=" border border-dark border-[1px] text-[#0D0D0D]  font-[cd-m] py-2 rounded-full sm:!w-[300px] w-full mb-4 hover:text-[#fff] hover:bg-[#000] ">
                                        Check The Name
                                    </button>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </section>



            <section className="bg-[#F3EFE7] sm:px-20 px-6  sm:py-[60px] py-[50px]">
                <div className="overflow-hidden">
                    <div className="row justify-center">
                        <div className="col-md-6">
                            <div className='d-flex justify-center'>
                                <div className='border border-dark rounded-full px-3 py-[8px] w-[280px]'>
                                    <p className='text-[18px] text-[#212833] text-center  m-0'>WHERE ARE YOU FROM?</p>
                                </div>

                            </div>
                            <p className="font-[cd-se] text-center  sm:text-[40px] text-[28px] text-[#212833] sm:leading-[45px] leading-[30px] sm:pt-[50px] pt-[30px] ">How to pick a company name</p>
                            <p className='p-text text-[16px] text-center'>You don’t want ACRA to reject your business name, so we have listed some restrictions that you should know about before you start choosing one. Your business name has to be:</p>

                        </div>
                    </div>
                    <div className="row justify-center pt-5">
                        <div className="col-md-10 mb-4">

                            <div  >

                                <div className="bg-white rounded-[20px]">
                                    <div
                                        className="flex justify-between items-center cursor-pointer bg-white sm:p-[20px] p-[20px] rounded-[20px] mb-2"
                                        onClick={() => regStep(1)}
                                    >
                                        <div>
                                            <div className="flex gap-3 align-items-center">
                                                <div className="bg-[#0061FE] rounded-[50%] text-white w-8 h-8 flex items-center justify-center">1</div>
                                                <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Unique</span>
                                            </div>
                                        </div>
                                        <span className="font-[cd-m] text-[#212833] text-[25px]">{activeRegStep === 1 ? "-" : "+"}</span>
                                    </div>

                                    {activeRegStep === 1 && (
                                        <div className="row justify-between items-center sm:p-[50px] p-[30px] rounded-[20px] mb-2">
                                            <div className="col-md-6 mb-4 relative">
                                                <p>Mind that in Singapore, a business name is considered taken even if you add the following elements to distinguish your name from the existing one:</p>
                                                <ul className="list-disc pl-6 text-[16px] text-gray-500 mb-5">
                                                    <li>Articles (Cloudbss = The Cloudbss)</li>
                                                    <li>A generic word (Cloudbss = Cloudbss Corporation = Cloudbss International = Cloudbss Singapore)</li>
                                                    <li>A business entity type (Cloudbss = Cloudbss Pte Ltd = Cloudbss Limited)</li>
                                                </ul>

                                                {/* Close Button */}
                                                <button
                                                    className="border border-dark rounded-full w-[100px] py-[5px] text-[16px] font-[cd-m] text-center"
                                                    onClick={closeContent}
                                                >
                                                    Close
                                                </button>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="d-flex justify-end">
                                                    <div className="col-md-6">
                                                        <Image src="/assets/Group (3).png" className="w-full" width={1080} height={1080} alt="no-img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="bg-white rounded-[20px]">
                                    <div
                                        className="flex justify-between items-center cursor-pointer bg-white sm:p-[20px] p-[20px] rounded-[20px] mb-2"
                                        onClick={() => regStep(2)}
                                    >
                                        <div>
                                            <div className="flex gap-3 align-items-center">
                                                <div className="bg-[#0061FE] rounded-[50%] text-white w-8 h-8 flex items-center justify-center">2</div>
                                                <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Licence-free</span>
                                            </div>
                                        </div>
                                        <span className="font-[cd-m] text-[#212833] text-[25px]">{activeRegStep === 2 ? "-" : "+"}</span>
                                    </div>

                                    {activeRegStep === 2 && (
                                        <div className="row justify-between items-center sm:p-[50px] p-[30px] rounded-[20px] mb-2">
                                            <div className="col-md-6 mb-4 relative">
                                                <p>Mind that in Singapore, a business name is considered taken even if you add the following elements to distinguish your name from the existing one:</p>
                                                <ul className="list-disc pl-6 text-[16px] text-gray-500 mb-5">
                                                    <li>Articles (Cloudbss = The Cloudbss)</li>
                                                    <li>A generic word (Cloudbss = Cloudbss Corporation = Cloudbss International = Cloudbss Singapore)</li>
                                                    <li>A business entity type (Cloudbss = Cloudbss Pte Ltd = Cloudbss Limited)</li>
                                                </ul>

                                                {/* Close Button */}
                                                <button
                                                    className="border border-dark rounded-full w-[100px] py-[5px] text-[16px] font-[cd-m] text-center"
                                                    onClick={closeContent}
                                                >
                                                    Close
                                                </button>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="d-flex justify-end">
                                                    <div className="col-md-6">
                                                        <Image src="/assets/Group (3).png" className="w-full" width={1080} height={1080} alt="no-img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="bg-white rounded-[20px]">
                                    <div
                                        className="flex justify-between items-center cursor-pointer bg-white sm:p-[20px] p-[20px] rounded-[20px] mb-2"
                                        onClick={() => regStep(3)}
                                    >
                                        <div>
                                            <div className="flex gap-3 align-items-center">
                                                <div className="bg-[#0061FE] rounded-[50%] text-white w-8 h-8 flex items-center justify-center">3</div>
                                                <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Non-sensitive</span>
                                            </div>
                                        </div>
                                        <span className="font-[cd-m] text-[#212833] text-[25px]">{activeRegStep === 3 ? "-" : "+"}</span>
                                    </div>

                                    {activeRegStep === 3 && (
                                        <div className="row justify-between items-center sm:p-[50px] p-[30px] rounded-[20px] mb-2">
                                            <div className="col-md-6 mb-4 relative">
                                                <p>Mind that in Singapore, a business name is considered taken even if you add the following elements to distinguish your name from the existing one:</p>
                                                <ul className="list-disc pl-6 text-[16px] text-gray-500 mb-5">
                                                    <li>Articles (Cloudbss = The Cloudbss)</li>
                                                    <li>A generic word (Cloudbss = Cloudbss Corporation = Cloudbss International = Cloudbss Singapore)</li>
                                                    <li>A business entity type (Cloudbss = Cloudbss Pte Ltd = Cloudbss Limited)</li>
                                                </ul>

                                                {/* Close Button */}
                                                <button
                                                    className="border border-dark rounded-full w-[100px] py-[5px] text-[16px] font-[cd-m] text-center"
                                                    onClick={closeContent}
                                                >
                                                    Close
                                                </button>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="d-flex justify-end">
                                                    <div className="col-md-6">
                                                        <Image src="/assets/Group (3).png" className="w-full" width={1080} height={1080} alt="no-img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>



                            </div>
                            <div className='d-flex justify-center text-center'>
                                <p className='text-center pt-4 text-[25px] font-[cd-m] align-items-center d-flex'>Company name <Image src="/assets/image 43 (1).png"
                                    width={50}
                                    height={50}
                                    alt="no-img"
                                />
                                    is good to go</p>

                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6 sm:py-[50px] py-[30px]">
                <div >

                    <div className="text-center  ">
                        <div className='d-flex justify-center'>
                            <div className="px-2 py-[10px] font-[cd-m]  text-[16px]  text-[#212833] rounded-[30px] sm:w-[180px] w-[180px] tracking-wider sm:pt-4 ">
                                WHAT YOU GET
                            </div>
                        </div>
                        <div className="row justify-center  pb-3">
                            <div className="col-md-6 sm:pt-5 pt-2 sm:pb-5 pb-2  ">
                                <p className="font-[cd-se] font-[500]  sm:text-[35px] text-[28px] text-[#212833]  sm:leading-[38px] leading-[32px] text-center">Expert Bookkeeping Services with Cloud Bss</p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 p-0 ">
                        <div className="col-md-3 mb-4 ">
                            <div className="bg-[#F3EFE7] rounded-[10px] p-4 d-flex flex-column h-100">
                                <div className="mb-4  align-items-center sm:h-[80px]">
                                    <Image src="/assets/icon_one_c687226aa7 1.png" alt="Start secure trading quickly" width="90" height="90" className="object-contain" />
                                </div>
                                <div className="flex-grow-1">
                                    <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]    leading-[20px] sm:h-[20px]">
                                        Choose a business name

                                    </p>
                                    <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0">
                                        We’ll check company name availability with ACRA in seconds and help you to reserve it.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 ">
                            <div className="bg-[#F3EFE7] rounded-[10px] p-4 d-flex flex-column h-100">
                                <div className="mb-4  align-items-center sm:h-[80px]">
                                    <Image src="/assets/Group 17846.png" alt="Start secure trading quickly" width="60" height="60" className="object-contain" />
                                </div>
                                <div className="flex-grow-1">
                                    <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]    leading-[20px] sm:h-[20px]">
                                        Fulfill the official requirements

                                    </p>
                                    <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0">
                                        We help you with everything the Singapore government requires from the founders: Corporate Secretary, Nominee Director, registered address, and company name.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 ">
                            <div className="bg-[#F3EFE7] rounded-[10px] p-4 d-flex flex-column h-100">
                                <div className="mb-4  align-items-center sm:h-[80px]">
                                    <Image src="/assets/Group 17847.png" alt="Start secure trading quickly" width="60" height="60" className="object-contain" />
                                </div>
                                <div className="flex-grow-1">
                                    <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]    leading-[20px] sm:h-[20px]">
                                        Delegate the filing
                                    </p>
                                    <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0">
                                        We prepare your documents online whether you are a Singaporean, PR or a foreigner. In a chat, we collect your papers, fill out the application, and send it to you for e-﻿signatures.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 ">
                            <div className="bg-[#F3EFE7] rounded-[10px] p-4 d-flex flex-column h-100">
                                <div className="mb-4  align-items-center sm:h-[80px]">
                                    <Image src="/assets/Group 17848.png" alt="Start secure trading quickly" width="60" height="60" className="object-contain" />
                                </div>
                                <div className="flex-grow-1">
                                    <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]    leading-[20px] sm:h-[20px]">
                                        Set up the accounting routine

                                    </p>
                                    <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0">
                                        Once you are registered, our Chartered accountant will prepare and file your documents neatly and save you time and effort. We also assist you with tax exemptions so you pay your taxes wisely.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>




                </div>

            </section>

            <section className=" bg-[#F3EFE7] overflow-hidden sm:px-20 px-6  sm:py-[50px] py-[20px]">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2  ">
                                <div className='d-flex justify-center'>
                                    <div className=" px-2 py-[7px] font-[cd-m]  text-[13px] font-[500]  text-[#212833]  border border-black rounded-[30px] sm:w-[120px] w-[120px] ">PRICING</div>
                                </div>

                                <div className="row justify-center  pb-3">
                                    <div className="col-md-6 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[28px]   text-[#212833]   sm:leading-[40px] leading-[32px] text-center   ">Plans to fit your business</p>
                                        <p className='text-[16px]'>Tailored Registration Packages to Suit Your Requirements. From Registration Only to Full Compliance Services.</p>
                                        <div className='sm:flex  justify-center align-items-center'>



                                        </div>
                                    </div>

                                </div>
                                <div className="d-flex justify-center ">
                                    <div className="col-md-3">
                                        <div className="flex flex-col items-center justify-center ">
                                            <div className="flex bg-[#fff] rounded-full p-2 w-full">

                                                <button
                                                    onClick={() => handleToggle("locals")}
                                                    className={`flex-1 py-3 px-2 rounded-full text-sm  ${selected === "locals"
                                                        ? "bg-[#F3EFE7] text-black shadow"
                                                        : "text-gray-500"
                                                        }`}
                                                >
                                                    For Locals
                                                </button>

                                                {/* For Foreigners Button */}
                                                <button
                                                    onClick={() => handleToggle("foreigners")}
                                                    className={`flex-1 py-3 px-2 rounded-full text-sm font-medium ${selected === "foreigners"
                                                        ? "bg-[#F3EFE7] text-black shadow"
                                                        : "text-gray-500"
                                                        }`}
                                                >
                                                    For Foreigners
                                                </button>
                                            </div>

                                            {/* Info Text */}
                                            <div className="mt-4">
                                                <p className="text-lg font-medium text-gray-700">
                                                    {selected === "locals"
                                                        ? "S$ SGD (Local Price)"
                                                        : "Foreign Price Selected"}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                    <div className='row sm:d-flex justify-center'>
                        <div className='col-md-3 mb-4'>
                            <div className='bg-[#ffff] rounded-[20px] p-2 '>
                                <div className="bg-[#F3EFE7] rounded-[20px] border-4 border-[#FE0004] p-4">
                                    <button className='bg-[#FE0004] w-[160px] py-[8px]  text-[#fff]  text-[16px] rounded-[20px] border-1 border-[#FE0004]  rounded-full ' >Most Valued</button>
                                    <p className='font-[cd-se] text-[20px]  text-[#212833] pt-3 '>Fully compliant</p>
                                    <p className='text-[16px] text-[#767676]'>For business owners seeking a hassle-free, Singapore-based incorporation service</p>
                                    <p className='text-[#767676] text-[14px] pt-4 m-0'>from</p>
                                    <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>S$3,690</p>
                                    <div >
                                        <button className='bg-[#fff] w-full py-[10px]  text-[#212833]  text-[16px] border border-dark rounded-full hover:bg-[#000] hover:text-[#fff]' >Get this plan</button>

                                    </div>
                                </div>
                                <div className='p-4 '>
                                    <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Incorporation</p>

                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                        <li>Registration preparation and filing, including S$315 government fee</li>
                                        <li>Company constitution</li>
                                        <li>
                                            All post-incorporation documents (share certificates, registers, minutes book)</li>
                                        <li>RACRA name checking</li>
                                        <li>ACRA business profile set-up</li>
                                        <li>Assistance in connecting with our banking partners</li>
                                    </ul>
                                    <div className='pt-2'>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Government required services</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">


                                            <li className='underline'>Nominee director for 1 year, no deposit required</li>
                                            <li> Registered address for 1 year</li>

                                        </ul>

                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Corporate secretary</p>



                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li> Expert support via in-app chat</li>
                                            <li>Preparation and filing of Annual Return, including S$60 government fee</li>
                                            <li>Holding of Annual General Meeting (AGM)</li>
                                            <li>Appointments and resignations of directors, officers, or auditors</li>
                                            <li>
                                                Unlimited changes in company name, address, business activity</li>
                                            <li>Shares management of up to 50 shareholders</li>
                                            <li>CorpPass account registration</li>
                                        </ul>
                                    </div>
                                    <div className='pt-2 pb-3'>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Accounting and tax</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">

                                            <li>Filing and bookkeeping support via in-app chat</li>
                                            <li>Support SLA 6 business hours</li>
                                            <li>Management reports reviewed by accountant annually</li>
                                            <li>Estimated Chargeable Income (ECI) filing</li>
                                            <li>Unaudited Financial Statements preparation</li>
                                            <li>Annual tax return filing (C-S/C)</li>

                                        </ul>

                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Bookkeeping</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li>Unlimited bookkeeping</li>
                                            <li> Automatic reconciliations</li>
                                        </ul>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Financial software</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li> Create, send and chase invoices</li>
                                            <li> Capture bills and receipts easily</li>
                                            <li>Reimburse expenses</li>
                                            <li>Connect your banks</li>
                                            <li>Use multiple currencies</li>
                                            <li>
                                                Get real-time ecommerce sales reports</li>
                                            <li>Connect ecommerce marketplaces</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-4'>
                            <div className='bg-[#fff] rounded-[20px] p-2 '>
                                <div className="bg-[#F3EFE7] rounded-[20px]  p-4">
                                    <p>Employment Pass included</p>

                                    <p className='font-[cd-se] text-[20px]  text-[#212833] pt-3 '>Fully compliant + Visa</p>
                                    <p className='text-[16px] text-[#767676]'>For those seeking to establish in Singapore with compliance and visa application</p>
                                    <p className='text-[#767676] text-[14px] pt-4 m-0'>from</p>
                                    <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>S$3,740</p>
                                    <div >
                                        <button className='bg-[#fff] w-full py-[10px]  text-[#212833]  text-[16px] border border-dark rounded-full hover:bg-[#000] hover:text-[#fff]' >Get this plan</button>

                                    </div>
                                </div>
                                <div className='p-4 '>
                                    <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Incorporation</p>

                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                        <li>Registration preparation and filing, including S$315 government fee</li>
                                        <li>Company constitution</li>
                                        <li>
                                            All post-incorporation documents (share certificates, registers, minutes book)</li>
                                        <li>RACRA name checking</li>
                                        <li>ACRA business profile set-up</li>
                                        <li>Assistance in connecting with our banking partners</li>
                                    </ul>
                                    <div className='pt-2'>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Government required services</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">


                                            <li className='underline'>Nominee director for 1 year, no deposit required</li>
                                            <li> Registered address for 1 year</li>

                                        </ul>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Immigration services</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#0061FE] ">
                                            <li >Employment visa consultation</li>
                                            <li>Employment Pass application</li>

                                        </ul>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Corporate secretary</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li> Expert support via in-app chat</li>
                                            <li>Preparation and filing of Annual Return, including S$60 government fee</li>
                                            <li>Holding of Annual General Meeting (AGM)</li>
                                            <li>Appointments and resignations of directors, officers, or auditors</li>
                                            <li>
                                                Unlimited changes in company name, address, business activity</li>
                                            <li>Shares management of up to 50 shareholders</li>
                                            <li>CorpPass account registration</li>
                                        </ul>
                                    </div>
                                    <div className='pt-2 pb-3'>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Accounting and tax</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">

                                            <li>Filing and bookkeeping support via in-app chat</li>
                                            <li>Support SLA 6 business hours</li>
                                            <li>Management reports reviewed by accountant annually</li>
                                            <li>Estimated Chargeable Income (ECI) filing</li>
                                            <li>Unaudited Financial Statements preparation</li>
                                            <li>Annual tax return filing (C-S/C)</li>

                                        </ul>

                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Bookkeeping</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li>Unlimited bookkeeping</li>
                                            <li> Automatic reconciliations</li>
                                        </ul>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Financial software</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li> Create, send and chase invoices</li>
                                            <li> Capture bills and receipts easily</li>
                                            <li>Reimburse expenses</li>
                                            <li>Connect your banks</li>
                                            <li>Use multiple currencies</li>
                                            <li>
                                                Get real-time ecommerce sales reports</li>
                                            <li>Connect ecommerce marketplaces</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='row justify-center align-items-start pt-4'>
                            <div className='col-md-4 mb-4'>
                                <p className='font-[cd-m] text-[25px] text-[#000] p-text'>Add-ons you
                                    might need</p>
                            </div>
                            <div className='col-md-8 mb-4'>
                                <div className='row justify-between align-items-center'>
                                    <div className='col-md-8 mb-4 '>
                                        <p className='font-[cd-m] text-[22px]'>Urgency filing</p>
                                        <p className='font-[cd-r] text-[16px]'>Where applicable, an urgency fee may be applied depending on your filing deadline.</p>
                                    </div>
                                    <div className='col-md-4 mb-4 '>
                                        <div className='d-flex sm:justify-end'>
                                            <p className='font-[cd-m] text-[22px]'>S$ 750</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-2 sm:mb-4'>
                                    <div className='border border-dark'></div>
                                </div>
                                <div className='row justify-between align-items-center'>
                                    <div className='col-md-8 mb-4 '>
                                        <p className='font-[cd-m] text-[22px]'>Simplified XBRL filing</p>
                                        <p className='font-[cd-r] text-[16px]'>The Simplified XBRL template caters to smaller businesses and non-publicly traded companies in Singapore. It provides a simple report and a complete set of financial statements in PDF format.</p>
                                    </div>
                                    <div className='col-md-4 mb-4  sm:pt-4'>
                                        <div className='d-flex sm:justify-end'>
                                            <p className='font-[cd-m] text-[22px]'>S$ 300/y</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-2 sm:mb-4'>
                                    <div className='border border-dark'></div>
                                </div>
                                <div className='row justify-between align-items-center'>
                                    <div className='col-md-8 mb-4  '>
                                        <p className='font-[cd-m] text-[22px]'>Full XBRL filing</p>
                                        <p className='font-[cd-r] text-[16px]'>Cloud BSS will provide a Full XBRL report including primary statements and selected notes to the financial statements. This comprehensive report represents a company’s financial performance and position.</p>
                                    </div>
                                    <div className='col-md-4 mb-4 '>
                                        <div className='d-flex sm:justify-end'>
                                            <p className='font-[cd-m] text-[22px]'>S$ 750</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-2 sm:mb-4'>
                                    <div className='border border-dark'></div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
            <PreIncorportaion />
            <FAQ />




            <Footer />
        </>
    );
}
