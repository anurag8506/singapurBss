





'use client'
import React, { useState } from "react";

import Header from '../../components/header';

import Footer from '../../components/footer'
import Image from 'next/image';



import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    const [selected, setSelected] = useState<"locals" | "foreigners">("locals");
  const handleToggle = (option: "locals" | "foreigners") => {
    setSelected(option);
  };

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
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[28px] text-[#212833]   sm:leading-[40px] leading-[32px] text-center   ">Accounting plans to fit your business</p>
                                        <p className='text-[16px]'>Cloud BSS accounting packages are tailored to what your business needs. Not sure which plan to choose? This breakdown should help you select the one just right for you. Choose extra add-ons according to your operational needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="d-flex justify-center ">
                            <div className="col-md-3">
                        <div className="flex flex-col items-center justify-center ">
      <div className="flex bg-[#F3EFE7] rounded-full p-2 w-full">

        <button
          onClick={() => handleToggle("locals")}
          className={`flex-1 py-3 px-2 rounded-full text-sm  ${
            selected === "locals"
              ? "bg-white text-black shadow"
              : "text-gray-500"
          }`}
        >
          For Locals
        </button>

        {/* For Foreigners Button */}
        <button
          onClick={() => handleToggle("foreigners")}
          className={`flex-1 py-3 px-2 rounded-full text-sm font-medium ${
            selected === "foreigners"
              ? "bg-white text-black shadow"
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
            </section>

            <section className='bg-[#FFFCF5]'>
                <div className="overflow-hidden sm:px-20 px-6 sm:pt-[100px] pt-[10px] py-[40px] ">
                    <div className="container-fluid p-0">
                        <div className='d-flex justify-center'>
                            <div className='col-md-10'>
                                
                                <div className='row justify-end'>
                                <div className='col-md-3 mb-4 d-flex'>
                                        <div className='bg-[#F3EFE7] rounded-[20px] p-2 w-full'>
                                            <div className='bg-[#FFFDFA] rounded-[20px] p-4  '>
                                                <div className='flex-1 sm:h-[200px]'>
                                                    <p className='font-[cd-se] text-[20px] text-[#212833]'>Operate</p>
                                                    <p className='text-[16px] text-[#767676]'>If you want to nail your first year of business and stay compliant</p>
                                                   
                                                    <div className='align-items-center d-flex gap-2 p-0 m-0'>
                                                       
                                                    </div>
                                                </div>
                                                <p className='text-[16px] text-[#767676] p-0 m-0'>from </p>
                                                        <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>S$68/m</p>
                                                        <p className='text-[16px] text-[#767676] pb-4 m-0'>S$816 billed annually, per financial year </p>
                                                <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                                    Get this plan
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3 mb-4 d-flex'>
                                        <div className='bg-[#F3EFE7] rounded-[20px] p-2 w-full'>
                                            <div className='bg-[#FFFDFA] rounded-[20px] p-4  '>
                                                <div className='flex-1 sm:h-[200px]'>
                                                    <p className='font-[cd-se] text-[20px] text-[#212833]'>Grow</p>
                                                    <p className='text-[16px] text-[#767676]'>For those growing a team and needing payroll and employee services</p>
                                                   
                                                    <div className='align-items-center d-flex gap-2 p-0 m-0'>
                                                       
                                                    </div>
                                                </div>
                                                <p className='text-[16px] text-[#767676] p-0 m-0'>from </p>
                                                        <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>S$90/m</p>
                                                        <p className='text-[16px] text-[#767676] pb-4 m-0'>S$1,080 billed annually, per financial year</p>
                                                <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                                    Get this plan
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3 mb-4 d-flex'>
                                        <div className='bg-[#F3EFE7] rounded-[20px] p-2 w-full'>
                                            <div className='bg-[#FFFDFA] rounded-[20px] p-4  '>
                                                <div className='flex-1 sm:h-[200px]'>
                                                    <p className='font-[cd-se] text-[20px] text-[#212833]'>Scale</p>
                                                    <p className='text-[16px] text-[#767676]'>For founders wanting a financial co-pilot and strategic accounting support</p>
                                                   
                                                    <div className='align-items-center d-flex gap-2 p-0 m-0'>
                                                       
                                                    </div>
                                                </div>
                                                <p className='text-[16px] text-[#767676] p-0 m-0'>from </p>
                                                        <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>S$207/m</p>
                                                        <p className='text-[16px] text-[#767676] pb-4 m-0'>S$2,480 billed annually, per financial year</p>
                                                <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                                    Get this plan
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-end">
                                    <div className="col-md-3  mb-4">
                                        <h2 className="font-[cd-m] text-[25px]">Financial software</h2>
                                        <ul className="space-y-6 m-0 p-0">
                                            <li className="text-[16px]">Create, send and chase invoices</li>
                                            <li className="text-[16px]">Capture bills and receipts easily</li>
                                            <li className="text-[16px]">Reimburse expenses</li>
                                            <li className="text-[16px]">Connect your banks</li>
                                            <li className="text-[16px]">Use multiple currencies</li>

                                        </ul>
                                    </div>
                                    <div className="col-md-3  mb-4">
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
                                    <div className="col-md-3  mb-4">
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
                                    <div className="col-md-3  mb-4">
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
                                    <div className="col-md-3  mb-4">
                                        <h2 className="font-[cd-m] text-[25px]">Ecommerce</h2>
                                        <ul className="space-y-6 m-0 p-0">
                                            <li className="text-[16px]">Ecommerce platforms integration</li>
                                            <li className="text-[16px]">Real-time ecommerce sales reports</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>                                          
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>                                          
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3  mb-4">
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
                                    <div className="col-md-3  mb-4">
                                        <h2 className="font-[cd-m] text-[25px]">Bookkeeping</h2>
                                        <ul className="space-y-6 m-0 p-0">
                                            <li className="text-[16px]">Unlimited bookkeeping</li>
                                            <li className="text-[16px]">Automatic reconciliations</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>                                          
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>                                          
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3  mb-4">
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
                                    <div className="col-md-3  mb-4">
                                        <h2 className="font-[cd-m] text-[25px]">Expert service</h2>
                                        <ul className="space-y-6 m-0 p-0">
                                            <li className="text-[16px]">Filing and bookkeeping support via in-app chat</li>
                                            <li className="text-[16px]">Support SLA 6 business hours</li>
                                            <li className="text-[16px]">Planning and optimisation advice via video call</li>
                                            <li className="text-[16px]">Planning and optimisation advice via video call</li>
                                            <li className="text-[16px]">Dedicated accountant</li>

                                        </ul>
                                    </div>
                                    <div className="col-md-3  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">S$200/h</p>
                                                    <p className="text-[16px]">Annually</p>
                                                    <p className="text-[16px]">-</p>                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">1 hour/q</p>
                                                    <p className="text-[16px]">Quarterly</p>
                                                    <p className="text-[16px]">✓</p>                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">Unlimited</p>
                                                    <p className="text-[16px]">Unlimited</p>
                                                    <p className="text-[16px]">✓</p>                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-end">
                                    <div className="col-md-3  mb-4">
                                        <h2 className="font-[cd-m] text-[25px]">Tax and filings</h2>
                                        <ul className="space-y-6 m-0 p-0">
                                            <li className="text-[16px]">Estimated Chargeable Income (ECI) filing</li>
                                            <li className="text-[16px]">Unaudited Financial Statements preparation</li>
                                            <li className="text-[16px]">Annual tax return filing (C-S/C)</li>
                                            <li className="text-[16px]">GST return filing</li>
                                            <li className="text-[16px]">GST registration</li>

                                        </ul>
                                    </div>
                                    <div className="col-md-3  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">-</p>
                                                    <p className="text-[16px]">-</p>                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">✓</p>
                                                    <p className="text-[16px]">S$1,200/y</p>
                                                    <p className="text-[16px]">S$300</p>                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3  mb-4">
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
                                    <div className="col-md-3  mb-4">
                                        <h2 className="font-[cd-m] text-[25px]">Additional services</h2>
                                        <ul className="space-y-6 m-0 p-0">
                                            <li className="text-[16px] underline">Historical accounting work</li>
                                            <li className="text-[16px] underline">Urgency filing</li>
                                            <li className="text-[16px] underline">Payroll services, per employee</li>
                                            <li className="text-[16px]">Personal Income Tax</li>
                                            <li className="text-[16px]">Consolidation for one subsidiary</li>
                                            <li className="text-[16px]">Consolidation Currency Translation, per subsidiary</li>
                                            <li className="text-[16px] underline">Simplified XBRL filing</li>
                                            <li className="text-[16px] underline">Full XBRL filing</li>

                                        </ul>
                                    </div>
                                    <div className="col-md-3  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">S$816/y</p>
                                                    <p className="text-[16px]">S$750</p>
                                                    <p className="text-[16px]">-</p>
                                                    <p className="text-[16px]">-</p>
                                                    <p className="text-[16px]">S$1,000/y</p>    
                                                    <p className="text-[16px]">S$300/y</p>     
                                                    <p className="text-[16px]">S$300/y</p>     
                                                    <p className="text-[16px]">S$300/y</p>     
                                                    <p className="text-[16px]">S$300/y</p>     
                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">S$816/y</p>
                                                    <p className="text-[16px]">S$750</p>
                                                    <p className="text-[16px]">S$350/y</p>
                                                    <p className="text-[16px]">S$150</p>
                                                    <p className="text-[16px]">S$1,000/y</p>    
                                                    <p className="text-[16px]">S$300/y</p>     
                                                    <p className="text-[16px]">S$300/y</p>     
                                                    <p className="text-[16px]">S$300/y</p>     
                                                    <p className="text-[16px]">S$300/y</p>     
                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3  mb-4">
                                        <div className="border-2 border-transparent rounded-[35px] p-6 space-y-4 bg-[#f5f1ea]">
                                            <div className="flex justify-center">
                                                <div className="space-y-6">
                                                    <p className="text-[16px]">S$816/y</p>
                                                    <p className="text-[16px]">S$750</p>
                                                    <p className="text-[16px]">S$350/y</p>
                                                    <p className="text-[16px]">S$150</p>
                                                    <p className="text-[16px]">S$1,000/y</p>    
                                                    <p className="text-[16px]">S$300/y</p>     
                                                    <p className="text-[16px]">S$300/y</p>     
                                                    <p className="text-[16px]">S$300/y</p>     
                                                    <p className="text-[16px]">S$300/y</p>     
                                            
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
