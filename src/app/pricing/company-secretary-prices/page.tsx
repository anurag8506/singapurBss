





'use client'
import React from "react";

import Header from '../../components/header';

import Footer from '../../components/footer'
import Image from 'next/image';



import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {


    return (
        <>
     
            <Header />
            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6  py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2  ">
                                <div className="row justify-center  pb-3">
                                    <div className="col-md-6 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[28px] text-[#212833]   sm:leading-[40px] leading-[32px] text-center   ">Company secretary packages to fit your business</p>
                                        <p className='text-[16px]'>Cloud BSS corporate secretary packages are tailored to what your business needs. Not sure which plan to choose? This breakdown should help you select the one just right for you. Choose extra add-ons according to your operational needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#FFFCF5]'>
                <div className="overflow-hidden sm:px-20 px-6 sm:pt-[100px] pt-[10px] py-[40px] ">
                    <div className="container-fluid p-0">
                        <div className='d-flex justify-center'>
                            <div className='col-md-10'>
                                
                                <div className='row justify-end'>
                                <div className='col-md-4 mb-4 d-flex'>
                                        <div className='bg-[#F3EFE7] rounded-[20px] p-2 w-full'>
                                            <div className='bg-[#FFFDFA] rounded-[20px] p-4  '>
                                                <div className='flex-1 sm:h-[200px]'>
                                                    <p className='font-[cd-se] text-[20px] text-[#212833]'>Essential</p>
                                                    <p className='text-[16px] text-[#767676]'>Perfect for a small company or a business with a settled structure</p>
                                                </div>
                                                        <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>S$300/y</p>
                                                <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                                    Get this plan
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4 mb-4 d-flex'>
                                        <div className='bg-[#F3EFE7] rounded-[20px] p-2 w-full'>
                                            <div className='bg-[#FFFDFA] rounded-[20px] p-4  '>
                                                <div className='flex-1 sm:h-[200px]'>
                                                    <p className='font-[cd-se] text-[20px] text-[#212833]'>Unlimited</p>
                                                    <p className='text-[16px] text-[#767676]'>For growing businesses anticipating structural changes, or the first year of business with several changes</p>
                                                </div>
                                                        <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>S$600/y</p>
                                                <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                                    Get this plan
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-end">
                                    <div className="col-md-4  mb-4">
                                        <h2 className="font-[cd-m] text-[25px]">Secretary essentials</h2>
                                        <ul className="space-y-6 m-0 p-0">
                                            <li className="text-[16px]">Expert support via in-app chat</li>
                                            <li className="text-[16px]">Preparation and filing of Annual Return, including S$60 government fee</li>
                                            <li className="text-[16px]">Holding of Annual General Meeting (AGM)</li>
                                            <li className="text-[16px]">All documents stored on the Cloud BSS app</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                             
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                             
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-end">
                                    <div className="col-md-4  mb-4">
                                        <h2 className="font-[cd-m] text-[25px]">Corporate changes</h2>
                                        <ul className="space-y-6 p-0 m-0">
                                
                                            <li className="text-[16px] underline">Change in company name, address, and activity (including ACRA fee)</li>
                                            <li className="text-[16px]">Change in officers and their particulars</li>
                                            <li className="text-[16px]">Filing of Register of Registrable Controllers (RORC)</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">-</p>
                                                    <p className="text-[16px]">-</p>
                                                    <p className="text-[16px]">-</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                <p className="text-[16px]">✓</p>
                                                <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-end">
                                    <div className="col-md-4  mb-4">
                                        <h2 className="font-[cd-m] text-[25px]">Share management</h2>
                                        <ul className="space-y-6 p-0 m-0">
                                            <li className="text-[16px]">Declaration and distribution of dividends</li>
                                            <li className="text-[16px] underline">Changes in shareholding</li>
                                            <li className="text-[16px] underline">Adoption of a new Constitution</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">-</p>
                                                    <p className="text-[16px]">-</p>
                                                    <p className="text-[16px]">-</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-end">
                                    <div className="col-md-4  mb-4">
                                        <h2 className="font-[cd-m] text-[25px]">Additional services</h2>
                                        <ul className="space-y-6 m-0 p-0">
                                            <li className="text-[16px] underline">CorpPass account registration</li>
                                            <li className="text-[16px] underline">Company rubber stamp</li>
                                            <li className="text-[16px] underline">Corporate Secretary strike off</li>
                                            <li className="text-[16px] underline">Strike off termination charge</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">S$100</p>
                                                    <p className="text-[16px]">S$60</p>
                                                    <p className="text-[16px]">S$40</p>
                                                    <p className="text-[16px]">S$500</p>
                                        
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">S$100</p>
                                                    <p className="text-[16px]">S$60</p>
                                                    <p className="text-[16px]">S$40</p>
                                                    <p className="text-[16px]">S$500</p>
                                        
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-end">
                                    <div className="col-md-4  mb-4">
                                        <h2 className="font-[cd-m] text-[25px]">Accounting and tax</h2>
                                        <ul className="space-y-6 m-0 p-0">
                                            <li className="text-[16px]">Filing and bookkeeping support via in-app chat</li>
                                            <li className="text-[16px]">Support SLA 6 business hours</li>
                                            <li className="text-[16px]">Management reports reviewed by accountant annually</li>
                                            <li className="text-[16px]">Estimated Chargeable Income (ECI) filing</li>
                                            <li className="text-[16px]">Unaudited Financial Statements preparation</li>
                                            <li className="text-[16px]">Annual tax return filing (C-S/C)</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>



                                </div>
                                <div className="row justify-end">
                                    <div className="col-md-4  mb-4">
                                        <h2 className="font-[cd-m] text-[25px]">Bookkeeping</h2>
                                        <ul className="space-y-6 p-0 m-0">
                                            <li className="text-[16px]">Unlimited bookkeeping</li>
                                            <li className="text-[16px]">Automatic reconciliations</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-end">
                                    <div className="col-md-4  mb-4">
                                        <h2 className="font-[cd-m] text-[25px]">Financial software</h2>
                                        <ul className="space-y-6 p-0 m-0">
                                            <li className="text-[16px]">Create, send and chase invoices</li>
                                            <li className="text-[16px]">Capture bills and receipts easily</li>
                                            <li className="text-[16px]">Reimburse expenses</li>
                                            <li className="text-[16px]">Connect your banks</li>
                                            <li className="text-[16px]">Use multiple currencies</li>
                                            <li className="text-[16px]">Get real-time ecommerce sales reports</li>
                                            <li className="text-[16px]">Connect ecommerce marketplaces</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-end">
                                    <div className="col-md-4  mb-4">
                                        <h2 className="font-[cd-m] text-[25px]">Additional services</h2>
                                        <ul className="space-y-6 p-0 m-0">
                                            <li className="text-[16px]  underline">Letter of Consent (LOC)</li>
                                            <li className="text-[16px]  underline">Letter of Consent (LOC)</li>
                                            <li className="text-[16px] underline">Long Term Visit Pass (LTVP) application</li>
                                        
                                        </ul>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">S$400</p>
                                                    <p className="text-[16px]">S$400</p>
                                                    <p className="text-[16px]">S$400</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">S$400</p>
                                                    <p className="text-[16px]">S$400</p>
                                                    <p className="text-[16px]">S$400</p>
                                                </div>
                                            </div>

                                        </div>
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
                            <div className="col-md-9">
                                <p className='font-[cd-se] text-[#0061FE] sm:text-[40px] text-[25px] leading-[25px] sm:leading-[40px]  mb-0 '>Fast, affordable incorporation in Singapore</p>
                                <p className='font-[cd-r] text-[#0061FE] sm:text-[16px] text-[14px] pt-4 mb-0 '>We’ll help you set up your company with confidence, giving you peace of mind from day one. Get incorporated online in a few hassle-free steps. Cloud BSS experts handle the entire incorporation process, from paperwork to registration, so you can focus on what matters - building your business.
                                </p>
                                <div className="sm:flex  sm:justify-start  items-center g  pt-4">
                                    <button className="bg-[#0061FE] text-white font-[cd-m]  py-[10px] rounded-full sm:w-[160px] w-[160px]  mb-4 text-[14px] ">
                                        Schedule a call
                                    </button>

                                </div>


                            </div>

                        </div>
                        <div className="col-md-6 ">
                            <div className='d-flex justify-end'>
                                <div className="col-md-6">
                                    <Image src="/assets/Clip path group.png" className="w-full"
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




            <Footer />
        </>
    );
}
