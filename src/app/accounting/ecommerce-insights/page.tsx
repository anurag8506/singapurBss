'use client'

import Header from '../../components/header';

import Footer from '../../components/footer'
import Image from 'next/image';
import { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };
    return (
        <>
            <Header />

            <section className='bg-[#FFFCF5]'>
                <div className="overflow-hidden sm:px-20 px-6 py-10  pt-32 ">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center  pt-4">
                            <div className="col-md-6 mb-4">
                                <div className='col-md-9'>
                                    <p className=" font-[cd-se]     no-underline sm:text-[50px] text-[30px]  text-[#212833]    sm:leading-[50px] leading-[30px]">E-commerce insights at your fingertips
                                    </p>
                                </div>
                                <div className='col-md-10'>
                                    <p className="font-[cd-r] text-[16px]    text-[#212833]  ">See your sales, returns, and fees when you connect your marketplaces. Make smarter business decisions with online retail insights about performance and profitability.
                                    </p>
                                    <div className='sm:flex sm:justify-start justify-center   '>
                                        <div className="flex sm:justify-start justify-center   items-center sm:pt-4 pt-2 sm:mr-4">
                                            <button className="bg-[#212833] border border-dark text-white font-[cd-m] sm:w-[200px] w-[200px]   px-6 py-[10px] rounded-full mb-4  tracking-wider">
                                                Get Started
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className='col-md-6 '>
                                <div className='d-flex justify-content-end'>
                                    <div className='col-md-10'>
                                        <Image
                                            src="/assets/Rectangle 4628.png"
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
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6  py-10">
                <div className="container-fluid p-0">

                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2  ">

                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-6   ">
                                        <p className="font-[cd-se]     sm:text-[40px] text-[25px]   text-[#212833]   sm:leading-[40px] leading-[30px] text-center   ">Accounting & tax solution built for e‑commerce sellers</p>
                                        <p className='font-[cd-r]    text-[#7C7C7C] text-[14px]  mb-0 '>We’ve rounded up the most-used platforms in Singapore and globally. We’re on a mission to make them easier to handle. Lazada sending in 150+ fees and charges? Facebook sales running on Shopify? Stripe dumping receipts from your website in a completely different format? We got it. And we know how to handle them, too.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-3 mb-4'>
                            <div className='bg-white m-0 p-0 rounded-[20px] d-flex flex-column h-100'>
                                <div className='m-auto flex items-center  h-[100px] w-[150px]'>
                                    <Image
                                        src="/assets/image 34.png"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                        className="w-full"
                                    />
                                </div>
                                <div className='border border-dark border-t'></div>
                                <div className='p-5 flex-grow-1'>
                                    <div>
                                        <p className="font-[cd-se]    sm:text-[25px] text-[20px]  text-[#212833] ">Lazada</p>
                                        <p className="font-[cd-m]    text-[16px]  text-[#212833] ">Supported platform</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] mt-3">
                                            <li className='text-[#484848] text-[14px]'>
                                                Dedicated expert specialised in Lazada accounting
                                            </li>
                                            <li className='text-[#484848] text-[14px]'>
                                                Automated Lazada accounting coming soon
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3 mb-4'>
                            <div className='bg-white m-0 p-0 rounded-[20px] d-flex flex-column h-100'>
                                <div className='m-auto flex items-center  h-[100px] w-[150px]'>
                                    <Image
                                        src="/assets/image 35.png"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                        className="w-full"
                                    />
                                </div>
                                <div className='border border-dark border-t'></div>
                                <div className='p-5 flex-grow-1'>
                                    <div>
                                        <p className="font-[cd-se]    sm:text-[25px] text-[20px]  text-[#212833] ">Shopee</p>
                                        <p className="font-[cd-m]    text-[16px]  text-[#212833] ">Supported platform</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] mt-3">
                                            <li className='text-[#484848] text-[14px]'>
                                                Dedicated expert specialised in Lazada accounting
                                            </li>
                                            <li className='text-[#484848] text-[14px]'>
                                                Automated Lazada accounting coming soon
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3 mb-4'>
                            <div className='bg-white m-0 p-0 rounded-[20px] d-flex flex-column h-100'>
                                <div className='m-auto flex items-center  h-[100px] w-[150px]'>
                                    <Image
                                        src="/assets/image 36.png"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                        className="w-full"
                                    />
                                </div>
                                <div className='border border-dark border-t'></div>
                                <div className='p-5 flex-grow-1'>
                                    <div>
                                        <p className="font-[cd-se]    sm:text-[25px] text-[20px]  text-[#212833] ">Qoo10</p>
                                        <p className="font-[cd-m]    text-[16px]  text-[#212833] ">Supported platform</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] mt-3">
                                            <li className='text-[#484848] text-[14px]'>
                                                Dedicated expert specialised in Qoo10 accounting
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='row justify-content-center'>
                        <div className='col-md-3 mb-4'>
                            <div className='bg-white m-0 p-0 rounded-[20px] d-flex flex-column h-100'>
                                <div className='m-auto flex items-center  h-[100px] w-[150px]'>
                                    <Image
                                        src="/assets/image 37.png"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                        className="w-full"
                                    />
                                </div>
                                <div className='border border-dark border-t'></div>
                                <div className='p-5 flex-grow-1'>
                                    <div>
                                        <p className="font-[cd-se]    sm:text-[25px] text-[20px]  text-[#212833] ">Shopify</p>
                                        <p className="font-[cd-m]    text-[16px]  text-[#212833] ">Integrated platform</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] mt-3">
                                            <li className='text-[#484848] text-[14px]'>
                                            Fully automated accounting
                                            </li>
                                            <li className='text-[#484848] text-[14px]'>
                                            Bulk transaction reconciliation
                                            </li>
                                            <li className='text-[#484848] text-[14px]'>
                                            Real-time financial reports
                                            </li>
                                            <li className='text-[#484848] text-[14px]'>
                                            Dedicated expert specialised in Shopify accounting
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3 mb-4'>
                            <div className='bg-white m-0 p-0 rounded-[20px] d-flex flex-column h-100'>
                                <div className='m-auto flex items-center  h-[100px] w-[150px]'>
                                    <Image
                                        src="/assets/image 38.png"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                        className="w-full"
                                    />
                                </div>
                                <div className='border border-dark border-t'></div>
                                <div className='p-5 flex-grow-1'>
                                    <div>
                                        <p className="font-[cd-se]    sm:text-[25px] text-[20px]  text-[#212833] ">eBay </p>
                                        <p className="font-[cd-m]    text-[16px]  text-[#212833] ">Integrated platform</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] mt-3">
                                            <li className='text-[#484848] text-[14px]'>
                                            Fully automated accounting
                                            </li>
                                            <li className='text-[#484848] text-[14px]'>
                                            Bulk transaction reconciliation
                                            </li>
                                            <li className='text-[#484848] text-[14px]'>
                                            Real-time financial reports
                                            </li>
                                            <li className='text-[#484848] text-[14px]'>
                                            Dedicated expert specialised in Shopify accounting
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3 mb-4'>
                            <div className='bg-white m-0 p-0 rounded-[20px] d-flex flex-column h-100'>
                                <div className='m-auto flex items-center  h-[100px] w-[150px]'>
                                    <Image
                                        src="/assets/image 39.png"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                        className="w-full"
                                    />
                                </div>
                                <div className='border border-dark border-t'></div>
                                <div className='p-5 flex-grow-1'>
                                    <div>
                                        <p className="font-[cd-se]    sm:text-[25px] text-[20px]  text-[#212833] ">Amazon</p>
                                        <p className="font-[cd-m]    text-[16px]  text-[#212833] ">Supported platform</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] mt-3">
                                            <li className='text-[#484848] text-[14px]'>
                                            Dedicated expert specialised in Amazon accounting
                                            </li>
                                            <li className='text-[#484848] text-[14px]'>Automated Amazon accounting coming March, 2023</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
{/*  */}
<div className='row justify-content-center'>
                        <div className='col-md-3 mb-4'>
                            <div className='bg-white m-0 p-0 rounded-[20px] d-flex flex-column h-100'>
                                <div className='m-auto flex items-center  h-[100px] w-[80px] '>
                                    <Image
                                        src="/assets/image 40.png"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                        className="w-full"
                                    />
                                </div>
                                <div className='border border-dark border-t'></div>
                                <div className='p-5 flex-grow-1'>
                                    <div>
                                        <p className="font-[cd-se]    sm:text-[25px] text-[20px]  text-[#212833] ">Square</p>
                                        <p className="font-[cd-m]    text-[16px]  text-[#212833] ">Supported payment gateway</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] mt-3">
                                            <li className='text-[#484848] text-[14px]'>
                                            Dedicated expert specialised in Square accounting
                                            </li>
                                            <li className='text-[#484848] text-[14px]'>
                                            Automated payment processing coming soon
                                            </li>
                                       
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3 mb-4'>
                            <div className='bg-white m-0 p-0 rounded-[20px] d-flex flex-column h-100'>
                                <div className='m-auto flex items-center  h-[100px] w-[80px]'>
                                    <Image
                                        src="/assets/image 41.png"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                        className="w-full"
                                    />
                                </div>
                                <div className='border border-dark border-t'></div>
                                <div className='p-5 flex-grow-1'>
                                    <div>
                                        <p className="font-[cd-se]    sm:text-[25px] text-[20px]  text-[#212833] ">PayPal</p>
                                        <p className="font-[cd-m]    text-[16px]  text-[#212833] ">Supported payment gateway</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] mt-3">
                                            <li className='text-[#484848] text-[14px]'>
                                            Dedicated expert specialised in PayPal accounting
                                            </li>
                                      
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3 mb-4'>
                            <div className='bg-white m-0 p-0 rounded-[20px] d-flex flex-column h-100'>
                                <div className='m-auto flex items-center  h-[100px] w-[80px] '>
                                    <Image
                                        src="/assets/image 42.png"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                        className="w-full"
                                    />
                                </div>
                                <div className='border border-dark border-t'></div>
                                <div className='p-5 flex-grow-1'>
                                    <div>
                                        <p className="font-[cd-se]    sm:text-[25px] text-[20px]  text-[#212833] ">Stripe</p>
                                        <p className="font-[cd-m]    text-[16px]  text-[#212833] ">Supported payment gateway</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] mt-3">
                                            <li className='text-[#484848] text-[14px]'>
                                            Dedicated expert specialised in Stripe accounting
                                            </li>
                                            <li className='text-[#484848] text-[14px]'>Automated payment processing coming soon</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6 sm:py-5 ">
                <div className="container-fluid p-0">
                    <div className="row align-items-center justify-content-center">
                    <div className="col-md-9 m-0 p-0">
                        <div className='row m-0 p-0 align-items-center'>
                            <div className='col-md-6 mb-4'>
                            <p className='text-[20px] font-[cd-se]  text-[#212833] leading-[22px]'>Enhance Your Decision-Making with Top Google Ranking Strategies</p>
                                    <p className='font-[cd-r] text-[#7C7C7C] text-[16px]  mb-0 '>Automatically sync and aggregate data from your integrated marketplaces to generate comprehensive reports on sales, transactions, and overall marketplace performance, empowering you to make informed decisions confidently.

                                    </p>
                            </div>
                            <div className='col-md-6 mb-4'>
                            <Image src='/assets/image 43.png' alt=".." width='3000' height='3000' className="w-full" />
                            </div>
                            {/*  */}
                            <div className='col-md-6 mb-4 order-md-1 order-2'>
                            <Image src='/assets/image 44.png' alt=".." width='3000' height='3000' className="w-full" />
                            </div>
                            <div className='col-md-6 mb-4 order-md-2 order-1'>
                            <p  className='text-[20px] font-[cd-se]  text-[#212833] leading-[22px]'>Experience seamless automated accounting.
                            </p>
                                    <p  className='font-[cd-r] text-[#7C7C7C] text-[16px]  mb-0 '>Benefit from integrated accounting tailored to your business processes, producing reports verified and filed by our professional accountants.
                                    </p>
                            </div>
                        </div>
                        </div>
                      
                     


                      
                    </div>
                </div>
            </section>
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-5 py-5">
                <div className="container-fluid p-0">
                    <div className="row align-items-center pt-4 pb-4">

                        <div className="col-md-6 mb-4">
                            <div className="col-md-9">
                                <p className='font-[cd-b] text-[#fff] sm:text-[40px] text-[25px] leading-[25px] sm:leading-[40px]  mb-0 '>Got questions? Chat with our local experts</p>
                                <p className='font-[cd-r] text-[#ABABAB] text-[16px]  pt-4 mb-0 '>Choose a convenient time to chat with our accounting experts and get the answers you need to take the next step.
                                </p>
                                <div className="sm:flex  sm:justify-start  items-center g  pt-4">
                                    <button className="bg-white text-black font-[cd-m] py-[10px] rounded-full sm:w-[150px] w-[160px]  mb-4 text-[14px] tracking-wider ">
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
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6  py-10">
                <div className="container-fluid p-0">

                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center ">

                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-6  ">
                                        <p className="font-[cd-se] sm:text-[40px] text-[25px]   text-[#212833]   sm:leading-[40px] leading-[30px] text-center   ">Cloud BSS who?
                                            We are glad you asked</p>
                                        <p className='text-[16px]'>We power small businesses with financial management tools and a dedicated accounting expert to maximise your business success</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-center '>
                        <div className='col-md-10 pt-4'>
                            <div className='row align-items-center justify-between'>
                            <div className="col-md-5 mb-4 ">
                                    <Image src='/assets/Group 17704.png' alt=".." width='3000' height='3000' className="w-full" />
                                </div>
                           
                            <div className="col-md-5 mb-4">
                                    <p  className='text-[20px] font-[cd-se]  text-[#212833] leading-[22px]'>Rely on your specialized advisor</p>
                                    <p  className='font-[cd-r] text-[#7C7C7C] text-[16px]  mb-0 '>While automation handles the routine, complex financial and business challenges require a human touch. That is why we provide a friendly, knowledgeable accounting expert as your dedicated point of contact. Consider it like having a Financial Director on call, without the hefty price tag.
                                    </p>    
                        </div>
                            </div>
                            <div className='row align-items-center justify-between'>
                            <div className="col-md-5 mb-4 order-md-1 order-2">
                           
                                    <p  className='text-[20px] font-[cd-se]  text-[#212833] leading-[22px]'>Smart software</p>
                                    <p  className='font-[cd-r] text-[#7C7C7C] text-[16px]  mb-0 '>That said – robots are nice when used right. We automated menial tasks – collecting documents, recognising accounts, assigning tax rates, preparing draft reports, etc. Where necessary, our robots reroute their output to a human expert so that you can be compliant with confidence!

                                    </p>
                        </div>
                        <div className="col-md-5 mb-4 order-md-2 order-1">
                          
                                    <Image src='/assets/abh.png' alt=".." width='3000' height='3000' className="w-full" />
                               
                        </div>
                            </div>
                            <div className='row align-items-center justify-between'>
                            <div className="col-md-5 mb-4 ">
                         
                                    <Image src='/assets/Rectangle 4632.png' alt=".." width='3000' height='3000' className="w-full" />
                                
                          </div>
                          <div className="col-md-5 mb-4">
                          
                                    <p  className='text-[20px] font-[cd-se]  text-[#212833] leading-[22px]'>All your data in one place</p>
                                    <p  className='font-[cd-r] text-[#7C7C7C] text-[16px]  mb-0 '>Get rid of app clutter: we are the only accounting and financial management solution you will need. Finally, all your data, tools and accounting details are in one place – as they should be.
                                    </p>
                                    <div className="items-center  pt-4">
                                        <button className="bg-[#212833] border border-dark text-white font-medium sm:w-[220px] w-[220px]   px-6 py-[13px] rounded-full mb-4 ">
                                            Get Started
                                        </button>
                                    
                            </div>
                          </div>
                                </div>
                        </div>
                    </div>
                  
                </div>
            </section>
            <section className="bg-[#F3EFE7] sm:px-20 px-6  py-5">
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
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-5 py-5">
                <div className="container-fluid p-0">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4">
                            <div className="col-md-8">
                                <p className='font-[cd-m] text-[#fff] sm:text-[30px] text-[18px] leading-[20px] sm:leading-[30px]  mb-0'>Get tips on how to run your business smarter</p>
                                <p className='font-[cd-r] text-[#ABABAB] sm:text-[16px] text-[14px] pt-4 mb-0'>Learn crucial tips on how to save money and build a flourishing business, with real entrepreneurs sharing their own experiences.</p>
                                <div className="sm:flex justify-center items-center gap-4 max-w-lg mx-auto pt-4">
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
