'use client'
import Header from '../components/header';
import Footer from '../components/footer'
import Image from 'next/image';

import { useState } from "react";
import FAQ from '../../components/faq'
import RunBusiness from '../components/run-your-business'
import ResourcesForManaging from "../components/resources-for-managing"


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
                                    <p className="font-[cd-b] text-[#212833] text-[33px] leading-[35px] p-text sm:text-left sm:text-[45px] sm:leading-[45px]">
                                    Company Secretary Services in Hong Kong
                                    </p>
                                </div>
                                <div className='col-md-10'>
                                    <p className="font-[cd-r] p-text sm:text-left text-[18px]  text-[#212833]  ">Focus on your business while we handle your company secretary duties. Our dedicated experts manage tax deadlines, file documents, and ensure your business stays compliant.</p>
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
                                            src="/assets/se.png"
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
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6 sm:py-[50px] py-[30px]">
                <div >
                    
                        <div className="text-center  ">
                            <div className='d-flex justify-center'>
                                <div className="px-2 py-[10px] font-[cd-m]  text-[16px]  text-[#212833] rounded-[30px] sm:w-[180px] w-[180px] tracking-wider sm:pt-4 ">
                                WHAT YOU GET
                                </div>
                            </div>
                            <div className="row justify-center  pb-3">
                                <div className="col-md-6 sm:pt-5 pt-2 sm:pb-5 pb-2  ">
                                    <p className="font-[cd-se] font-[500]  sm:text-[35px] text-[28px] text-[#212833]  sm:leading-[38px] leading-[32px] text-center">Why hire an Cloud Bss company secretary?</p>
                                </div>
                            </div>
                        </div>
                        <div className="row m-0 p-0 ">
                            <div className="col-md-3 mb-4 ">
                                <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                    <div className="mb-4  align-items-center sm:h-[80px]">
                                        <Image src="/assets/image 33 (1).png" alt="Start secure trading quickly"  width="90" height="90" className="object-contain" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]    leading-[20px] ">
                                        Experienced secretary
                                        
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0">
                                        Get a dedicated online company secretary with 10+ years of experience from the start. Message them through live chat and get a response within one day.
                                        
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
                                        Keeping you compliant
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-3">
                                        Our company secretaries ensure your statutory registers are kept up to date, so you remain compliant as your company evolves.
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
                                        Documents in one place
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-4">
                                        Don&apos;t stress about searching for documents ever again. We store all your documents in your secure account, making them easy to manage.
                                        </p>

                                    </div>
                      
                                </div>
                            </div>
                        
                            <div className="col-md-3 mb-4">
                                <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                    <div className="mb-4  align-items-center sm:h-[80px]">
                                        <Image
                                            src="/assets/image 40 (4).png"
                                            alt="Start secure trading quickly"
                                            width="90"
                                            height="90"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]  mb-2  leading-[20px] ">
                                        Focus on your business
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-4">
                                        Outsourcing company secretary services frees you up to focus on your business and access experts without internal hiring costs.
                                        </p>

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
            <section className="bg-[#F3EFE7] sm:px-20 px-6  py-[20px]">
                <div className="overflow-hidden">
                    <div className="row justify-center">
                        <div className="col-md-6">
                            <p className='text-[18px] text-[#212833] text-center sm:pt-4'>THE PROCESS</p>
                            <p className="font-[cd-se] text-center  sm:text-[35px] text-[28px] text-[#212833] sm:leading-[38px] leading-[30px]  ">What do corporate secretarial services include for Hong Kong companies?</p>

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
            <section className="bg-[#0061FE] overflow-hidden sm:px-20 px-6 py-5 ">
                <div className="container-fluid p-0">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-2">
                            <div className="col-md-8">
                                <p className='font-[cd-se] text-[#fff] sm:text-[40px] text-[28px] leading-[32px] sm:leading-[43px]  mb-0 p-text '>Switching to Cloud Bss is simple</p>
                                <p className='font-[cd-r] text-[#E1E1E1] text-[16px] pt-4 mb-0 p-text '>We take care of the transition process from your old company secretary to us. It&apos;s efficient and hassle-free: we gather your documents and get their resignation sign-off.
                                </p>
                                <div className="flex sm:justify-start justify-center items-center pt-4">
                                    <button className="bg-white text-[#0061FE] font-[cd-m] py-[10px] rounded-full sm:w-[180px] w-[180px] mb-4 text-[14px]">
                                    Switch now
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
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[28px]   text-[#212833]   sm:leading-[40px] leading-[32px] text-center   ">Plans to fit your business</p>
                                        <p className='text-[16px]'>We’ve got you covered no matter what you need, from just the essentials to a full-service compliance package.</p>
                                      
                                    </div>

                                </div>
                            </div>
                        </div>




                    </div>
                    <div className='row justify-center'>
                        <div className='col-md-4 mb-4 d-flex'>
                            <div className='bg-[#F3EFE7] rounded-[20px] p-2 w-full'>
                                <div className='bg-[#FFFDFA] rounded-[20px] p-4  '>
                                    <div className='flex-1 sm:h-[250px]'>
                                    <p className='font-[cd-se] text-[20px] text-[#212833]'>Essential</p>
                                    <p className='text-[16px] text-[#767676]'>The basics for founders just starting out</p>
                                    <p  className='text-[16px] text-[#767676] p-0 m-0'>HK$ 2,100 with any Accounting plan </p>
                                    <div className='align-items-center d-flex gap-2 p-0 m-0'>
                                        <p className='text-[25px] font-[cd-m] text-[#212833] p-0 m-0'>HK$</p>
                                        <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>1,200</p>
                                    </div>
                                    <p className='text-[#767676] text-[14px] pb-2'>HK$3,850 government fees included</p>

                                    </div>
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
                                    <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Corporate Secretary services</p>
                                    
                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                        <li>Corporate secretary support via online chat</li>
                                        <li>Annual General Meeting papers</li>
                                        <li>Annual Returns Filing</li>
                                        <li>Cloud Bss app document storage</li>
                                    </ul>
                                  
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 mb-4 d-flex'>
                            <div className='bg-[#F3EFE7] rounded-[20px] p-2 w-full'>
                                <div className='bg-[#FFFDFA] rounded-[20px] p-4 '>
                                <div className='flex-1 sm:h-[250px]'>
                                    <p className='font-[cd-se] text-[20px] text-[#212833]'>Unlimited</p>
                                    <p className='text-[16px] text-[#767676]'>Ongoing maintenance for stress-free business management</p>
                                    <div className='align-items-center d-flex gap-2'>
                                        <p className='text-[25px] font-[cd-m] text-[#212833] p-0 m-0'>HK$</p>
                                        <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>3,300</p>
                                    </div>
                                    <p className='text-[#767676] text-[14px] pb-2'>HK$3,850 government fees included</p>
                                    </div>
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
                                    <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Corporate Secretary services</p>

                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                        <li>Corporate secretary support via online chat</li>
                                        <li>Annual General Meeting papers</li>
                                        <li>Annual Returns Filing</li>
                                        <li>Cloud Bss app document storage</li>
                             
                                    </ul>
                                    <div className='pt-2'>
                                        <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Corporate actions</p>
                                   


                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                            <li>Change of directors or shareholders</li>
                                            <li>Transfer of shares</li>
                                            <li>Company changes e.g. name or address</li>
                                            
                                        </ul>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-4 d-flex'>
                            <div className='bg-[#F3EFE7] rounded-[20px] p-2 w-full'>
                                <div className='bg-[#FFFDFA] rounded-[20px] p-4 '>

                                <div className='flex-1 sm:h-[250px]'>
                                    <p className='font-[cd-se] text-[20px] text-[#212833]'>Compliance kit</p>
                                    <p className='text-[16px] text-[#767676]'>Everything you need to focus fully on your business</p>
                                    <div className='align-items-center d-flex gap-2'>
                                        <p className='text-[25px] font-[cd-m] text-[#212833] p-0 m-0'>HK$</p>
                                        <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>7,800</p>
                                    </div>
                                    <p className='text-[#767676] text-[14px] pb-2'>HK$3,850 government fees included</p>
                                    </div>
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
                                    <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Corporate Secretary services</p>

                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                        <li>Corporate secretary support via online chat</li>
                                        <li>Annual General Meeting papers</li>
                                        <li>Annual Returns Filing</li>
                                        <li>Cloud Bss app document storage</li>
                             
                                    </ul>
                                    <div className='pt-2'>
                                        <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Corporate actions</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                            <li>Change of directors or shareholders</li>
                                            <li>Transfer of shares</li>
                                            <li>Company changes e.g. name or address</li>
                                            
                                        </ul>
                                        <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Compliance add-ons</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                            <li>Business Registration Certificate (BRC) for 1 year</li>
                                            <li>Registered address with notifications</li>
                                            <li>scanning and forwarding</li>
                                            
                                        </ul>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-start sm:pt-4'>
                        <div className='col-md-6 mb-4'>
                            <p  className='font-[cd-m] text-[22px] leading-[25px]'>Add-ons you might need</p>
                        </div>
                        <div className='col-md-6 mb-4'>
                            <div className='row align-items-start justify-between'>
                                <div className='col-md-8 mb-4'>
                                    <p  className='font-[cd-m] text-[18px] leading-[20px]'>Registered Address</p>
                                    <p className='font-[cd-r] text-[16px] '>All Hong Kong companies must have a local registered address to receive government and bank correspondence.Whenever you get mail, we open, scan and upload letters to your Cloud Bss account and send you a notification so you never miss a thing.</p>

                                </div>
                                <div className='col-md-4 mb-2'>
                                    <div className='d-flex sm:justify-end'>

                                    <p  className='font-[cd-m] text-[18px] leading-[20px]'>HK$ 2,750</p>
                                    </div>
                                </div>

                            </div>
                            <div className='border border-dark border-t'> </div>
                            <div className='row align-items-start justify-between pt-4'>
                                <div className='col-md-8 mb-4'>
                                    <p  className='font-[cd-m] text-[18px] leading-[20px]'>Chop and Seal Package</p>
                                    <p className='font-[cd-r] text-[16px] '>A corporate stamp is no longer a legal requirement for companies in Hong Kong. If you need one, we can typically arrange delivery within 3-4 business days.</p>

                                </div>
                                <div className='col-md-4 mb-4'>
                                    <div className='d-flex sm:justify-end'>
                                    <p  className='font-[cd-m] text-[18px] leading-[20px]'>HK$ 550</p>

                                    </div>
                                </div>

                            </div>

                            <div className='border border-dark border-t'> </div>
                            <div className='row align-items-start justify-between pt-4'>
                                <div className='col-md-8 mb-4'>
                                    <p  className='font-[cd-m] text-[18px] leading-[20px]'>Business Registration Certificate</p>
                                    <p className='font-[cd-r] text-[16px] '>Hong Kong businesses must apply for a Business Registration Certificate within 30 days of starting. We&apos;ll manage this process with the Business Registration Office, so you&apos;re compliant from day one.</p>

                                </div>
                                <div className='col-md-4 mb-4'>
                                    <div className='d-flex sm:justify-end'>

                                    <p  className='font-[cd-m] text-[18px] leading-[20px]'>HK$ 2,750</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </section>
        
         
          
            <section className="bg-[#CCDFFF] overflow-hidden sm:px-20 px-6 sm:py-5 py-5">
                <div className="container-fluid p-0">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4">
                            <div className="col-md-8">
                                <p className='font-[cd-m] text-[#0061FE] sm:text-[30px] text-[18px] leading-[20px] sm:leading-[30px]  mb-0'>Download our free compliance guide</p>
                                <p className='font-[cd-r] text-[#0061FE] sm:text-[16px] text-[14px] pt-4 mb-0'>Get clear on all the filing requirements and dates for Hong Kong businesses.</p>
                                <div className="sm:flex justify-center items-center gap-4 max-w-lg mx-auto pt-4">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full px-4 py-2 rounded-full text-[#0061FE] mb-4   "
                                    />
                                    <button className="bg-[#0061FE] text-[#fff] font-medium px-6 py-2 rounded-full sm:w-[140px] w-full mb-4 ">
                                        SUBSCRIBE
                                    </button>

                                </div>
                                <p className="text-[#0061FE] text-[14px]">By clicking, you agree to our <a className="underline text-[#0061FE] font-[cd-m] " href="#">Terms & Conditions, Privacy and Data Protection Policy</a> 
                                </p>
                            </div>

                        </div>
                        <div className="col-md-6 ">
                            <div className='d-flex justify-content-end'>
                                <div className='col-md-6'>
                            <Image src="/assets/Group (1).png" className="w-full"
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

      <FAQ/>
      <ResourcesForManaging/>
      <RunBusiness/>
         


            <Footer />
        </>
    );
}
