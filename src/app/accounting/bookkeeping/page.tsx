'use client'
import Header from '../../components/header';
import Footer from '../../components/footer'
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
                        <div className="row align-items-center ">
                            <div className="col-md-6 mb-4">
                                <div className='col-md-8'>
                                    <p className="font-[cd-b] text-[#212833] text-[33px] leading-[35px] p-text sm:text-left sm:text-[45px] sm:leading-[45px]">
                                    Bookkeeping services in Singapore
                                    </p>
                                </div>
                                <div className='col-md-10'>
                                    <p className="font-[cd-r] p-text sm:text-left text-[18px]  text-[#212833]  ">Free up time to grow your business by choosing us for your bookkeeping services. Onshore experts paired with a single online platform for paying taxes, reconciling transactions, and preparing invoices.</p>
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
                                            src="/assets/bookipiBanner.png"
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
                                    <p className="font-[cd-se] font-[500]  sm:text-[35px] text-[28px] text-[#212833]  sm:leading-[38px] leading-[32px] text-center">Expert Bookkeeping Services with Cloud Bss</p>
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
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]    leading-[20px] sm:h-[20px]">
                                        Your own bookkeeper
                                        
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0">
                                        You&apos;ll work directly with an Cloud Bss expert to make your business&apos;s bookkeeping more efficient. We make sure you pay the right tax from day one with our complete, online bookkeeping services.
                                        
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4 d-flex ">
                                <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                    <div className="mb-4  align-items-center sm:h-[80px]">
                                        <Image
                                            src="/assets/image 38 (4).png"
                                            alt="Start secure trading quickly"
                                            width="90"
                                            height="90"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]   leading-[20px] sm:h-[20px]">
                                        Easy-to-use software
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-3">
                                        Your own software — a secure and central online storage place for all your important business documents. Manage your bookkeeping seamlessly with the Cloud Bss software.
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
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]  mb-2  leading-[20px] sm:h-[20px]">
                                        Cash flow clarity
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-4">
                                        Get daily insight into your cash flow to give you financial clarity, with complete bookkeeping services to help you make sense of it all.
                                        </p>

                                    </div>
                      
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                    <div className="mb-4  align-items-center sm:h-[80px]">
                                        <Image
                                            src="/assets/image 34 (2).png"
                                            alt="Start secure trading quickly"
                                            width="90"
                                            height="90"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]  mb-2  leading-[20px] sm:h-[20px]">
                                        Compliance and Reporting
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-4">
                                        You don&apos;t have to deal with the IRD — we&apos;ll do it for you. Our online bookkeeping services will handle all tax, deadlines, and filing so that you pay the right tax and stay compliant.
                                        </p>

                                    </div>
                      
                                </div>
                            </div>

                        </div>

                


                </div>
            
            </section>
            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6  sm:py-[30px] py-[20px]">
                <div className="row justify-center">
                    <div className="col-md-12 sm:pb-2 m-0 p-0">
                        <div className="text-center   ">
                            <div className='d-flex justify-center'>
                                <div className="px-2 py-[10px] font-[cd-m]  text-[18px]  text-[#212833] rounded-[30px] sm:w-[180px] w-[180px] tracking-wider ">
                                WHY CLOUD BSS
                                </div>

                            </div>
                            <div className="row justify-center  m-0 p-0 sm:pb-4">
                                <div className="col-md-6 sm:pt-3  ">
                                    <p className="font-[cd-se] font-[500]  sm:text-[35px] text-[26px]   text-[#212833]   sm:leading-[38px] leading-[29px] text-center">Benefits of Cloud Bss services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center !sm:pt-5 pt-4'>
                        <div className='col-md-10'>
                            <div className='row justify-between align-items-center'>
                                <div className='col-md-5 mb-4'>
                                <Image src="/assets/Rectangle 4630 (2).png" className="w-full" width={1080} height={1080} alt="no-img" />
                                </div>
                                <div className='col-md-5 mb-4'>
                                    <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>Keep all 
                                    documents in order for bookkeeping</p>
                                    <p className='font-[cd-r] text-[#000] text-[16px]'>Our online bookkeeping services keep your books up-to-date and organised — not just at the end of the month, but every day.</p>
                            
                                </div>
                            </div>
                            <div className='row justify-between align-items-center'>
                                <div className='col-md-5 mb-4 order-md-2 order-1'>
                                <Image src="/assets/Rectangle 4631 (1).png" className="w-full" width={1080} height={1080} alt="no-img" />
                                </div>
                                <div className='col-md-5 order-md-1 order-2'>
                                    <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>Bookkeeping in a matter of minutes</p>
                                    <p className='font-[cd-r] text-[#000] text-[16px]'>Send us important documents the moment you receive them. We reconcile everything within 24 hours and leave no room for error — if something&apos;s missing, we&apos;ll let you know immediately.</p>
                                 
                                </div>
                            </div>
                            <div className='row justify-between align-items-center'>
                                <div className='col-md-5 mb-4 order-md-1 order-1'>
                                <Image src="/assets/Rectangle 4639 (3).png" className="w-full" width={1080} height={1080} alt="no-img" />
                                </div>
                                <div className='col-md-5 mb-4 order-md-2 order-2'>
                                    <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>A personal bookkeeper</p>
                                    <p className='font-[cd-r] text-[#000] text-[16px]'>
                                    You&apos;ll get your own dedicated bookkeeper who will respond to your queries whenever you have them via the live in-app chat.
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='text-center text-[18px] pt-4'>WHY CLOUD BSS</div>
                <div className='d-flex justify-center'>
                    <div className='col-md-5 pt-4'><p className='text-[#000] text-center text-[25px] leading-[28px] font-[cd-se]'>Stay in tune with your business finances</p></div>
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
        
            <section className="bg-[#FFFCF5] overflow-hidden sm:px-20 px-6  py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2  ">
                                <div className='d-flex justify-center'>
                                    <div className=" px-2 py-[7px] font-[cd-m]  text-[13px] font-[500]  text-[#212833]  border border-black rounded-[30px] sm:w-[120px] w-[120px] ">PRICING</div>
                                </div>

                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-6 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[25px]   text-[#212833]   sm:leading-[40px] leading-[25px] text-center   ">Plans to fit your business</p>
                                        <p className='text-[16px]'>Our packages are tailored to your business stage and monthly revenue. Customise your package with add-ons to suit your needs as you grow.</p>
                                        <div className='sm:flex  justify-center align-items-center'>
                                            <div className='d-flex align-items-center justify-center text-[16px]'><span className='mr-2'>Your annual revenue range</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="9.5" stroke="#ADADAD" />
                                                <path d="M11.212 7.23H9.7V5.62H11.212V7.23ZM11.212 15H9.7V8.042H11.212V15Z" fill="#ADADAD" />
                                            </svg>
                                            </div>
                                            <div className='sm:pb-0 pb-4 sm:ml-4'>
                                                <div className="sm:pt-0 pt-4">
                                                    <div className="border border-dark py-2 sm:w-[220px] px-3 w-full flex justify-between items-center rounded-[10px]">
                                                        <span>₹0 - ₹10,00,000</span>
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
                    <div className='row'>
                        <div className='col-md-4 mb-4'>
                            <div className='bg-[#F3EFE7] rounded-[20px] p-2 '>
                                <div className='bg-[#FFFDFA] rounded-[20px] p-4'>
                                    <p className='font-[cd-se] text-[20px]  text-[#212833] '>Operate</p>
                                    <p className='text-[16px] text-[#767676]'>If you want to nail your first year of business and stay compliant</p>
                                    <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>₹2963.89/m</p>
                                    <p className='text-[#767676] text-[14px] pb-2'>₹35,567.00 billed annually</p>
                                    <button className='bg-[#212833] w-full py-[13px] text-[#fff] text-[16px] rounded-full border border-[#212833]' >Get this plan</button>
                                    <div className='pt-3'>
                                        <button className='bg-[#fff] w-full py-[13px]  text-[#212833]  text-[16px] border border-dark rounded-full ' >Talk to an expert</button>

                                    </div>
                                </div>
                                <div className='p-4 '>
                                    <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Cloud BssAccounting software</p>
                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                        <li>Create, send, and chase invoices</li>
                                        <li>Capture bills and receipts easily</li>
                                        <li>Expense Management</li>
                                        <li>Real-time financial reports (Profit & Loss, Balance Sheet, Aged Payables, Aged Receivables)</li>
                                        <li>Use multiple currencies</li>
                                    </ul>
                                    <div className='pt-2'>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Ecommerce</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li>Connect one marketplace</li>

                                        </ul>

                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Bookkeeping</p>


                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li>Unlimited bookkeeping</li>
                                            <li>Automatic reconciliations</li>
                                        </ul>
                                    </div>
                                    <div className='pt-2 pb-3'>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Expert service</p>




                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li>Annual Management reports</li>
                                            <li>In-app chat</li>
                                            <li>Payroll and dividends tax advice</li>
                                            <li>Dedicated accounting team</li>

                                        </ul>

                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Tax and filings</p>


                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">


                                            <li>Unaudited Financial Statements (UFS)</li>
                                            <li>Annual tax return filling</li>
                                        </ul>
                                    </div>
                                    <div className='border border-dark border-t'></div>
                                    <div className='pt-4 d-flex justify-content-between align-items-center'><span className='font-[cd-se] text-[18px]  text-[#212833] '>Optional add-ons</span>
                                   
                                    </div>
                             
        <div>
          <div className="pt-4 d-flex justify-content-between align-items-center">
            <p className="font-[cd-r] text-[14px] text-[#767676] underline">
              Xero Subscription
            </p>
            <p className="font-[cd-r] text-[14px] text-[#767676]">₹37048.64/y</p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <p className="font-[cd-r] text-[14px] text-[#767676]">
              Video call with an expert
            </p>
            <p className="font-[cd-r] text-[14px] text-[#767676]">₹6174.77/h</p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <p className="font-[cd-r] text-[14px] text-[#767676]">
              Personal Income Tax
            </p>
            <p className="font-[cd-r] text-[14px] text-[#767676]">₹9262.16</p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <p className="font-[cd-r] text-[14px] text-[#767676]">
              Full XBRL report
            </p>
            <p className="font-[cd-r] text-[14px] text-[#767676]">₹30873.83</p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <p className="font-[cd-r] text-[14px] text-[#767676]">
              Simplified XBRL report
            </p>
            <p className="font-[cd-r] text-[14px] text-[#767676]">₹18524.30</p>
          </div>
        </div>
    
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <div className='bg-[#F3EFE7] rounded-[20px] p-2 '>
                                <div className='bg-[#FFFDFA] rounded-[20px] p-4'>
                                    <p className='font-[cd-se] text-[20px]  text-[#212833] '>Grow</p>
                                    <p className='text-[16px] text-[#767676]'>For those growing a team and needing payroll and employee services</p>
                                    <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>₹5557.29/m</p>
                                    <p className='text-[#767676] text-[14px] pb-2'>₹66,687.48 billed annually</p>
                                    <button className='bg-[#212833] w-full py-[13px] text-[#fff] text-[16px] rounded-full border border-[#212833]' >Get this plan</button>
                                    <div className='pt-3'>
                                        <button className='bg-[#fff] w-full py-[13px]  text-[#212833]  text-[16px] border border-dark rounded-full ' >Talk to an expert</button>

                                    </div>
                                </div>
                                <div className='p-4 '>
                                    <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Cloud BssAccounting software</p>
                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                        <li>Create, send, and chase invoices</li>
                                        <li>Capture bills and receipts easily</li>
                                        <li>Expense Management</li>
                                        <li>Real-time financial reports (Profit & Loss, Balance Sheet, Aged Payables, Aged Receivables)</li>
                                        <li>Use multiple currencies</li>
                                    </ul>
                                    <div className='pt-2'>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Ecommerce</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#3945BA]">
                                            <li>Connect one marketplace</li>

                                        </ul>

                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Bookkeeping</p>


                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li>Unlimited bookkeeping</li>
                                            <li>Automatic reconciliations</li>
                                        </ul>
                                    </div>
                                    <div className='pt-2 pb-3'>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Expert service</p>







                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li className='text-[#3945BA]'>Monthly Management reports</li>
                                            <li className='text-[#3945BA]'>Video calls with an expert</li>
                                            <li className='text-[#3945BA]'>Ad-hoc tax advice</li>
                                            <li>In-app chat</li>
                                            <li>Payroll and dividends tax advice</li>
                                            <li>Dedicated accounting team</li>

                                        </ul>

                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Tax and filings</p>


                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">


                                            <li>Unaudited Financial Statements (UFS)</li>
                                            <li>Annual tax return filling</li>
                                        </ul>
                                    </div>
                                    <div className='border border-dark border-t'></div>
                                    <div className='pt-4 d-flex justify-content-between align-items-center'><span   className='font-[cd-se] text-[18px]  text-[#212833] '>Optional add-ons</span>
                                        <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 2C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H13C13.2652 0 13.5196 0.105357 13.7071 0.292893C13.8946 0.48043 14 0.734784 14 1C14 1.26522 13.8946 1.51957 13.7071 1.70711C13.5196 1.89464 13.2652 2 13 2H1Z" fill="black" />
                                        </svg>
                                    </div>

                                    <div className='pt-4 d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] underline'>Xero Subscription</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹37048.64/y</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] '>GST filing</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹74097.20/y</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] '>GST registration</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹18524.30</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676]'>Personal Income Tax</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹9262.15</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] '>Full XBRL report</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹30873.83</p>
                                    </div>

                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] '>Simplified XBRL report</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹18524.30</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] underline '>Payroll services, per employee</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹18524.30/y</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] '>Employee leave tracking, per employee</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹4940.00/y</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <div className='bg-[#F3EFE7] rounded-[20px] p-2 '>
                                <div className='bg-[#FFFDFA] rounded-[20px] p-4'>
                                    <p className='font-[cd-se] text-[20px]  text-[#212833] '>Scale</p>
                                    <p className='text-[16px] text-[#767676]'>For founders wanting a financial co-pilot and strategic accounting support</p>
                                    <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>₹15,436.92/m</p>
                                    <p className='text-[#767676] text-[14px] pb-2'>₹185,243.04 billed annually</p>
                                    <button className='bg-[#212833] w-full py-[13px] text-[#fff] text-[16px] rounded-full border border-[#212833]' >Get this plan</button>
                                    <div className='pt-3'>
                                        <button className='bg-[#fff] w-full py-[13px]  text-[#212833]  text-[16px] border border-dark rounded-full ' >Talk to an expert</button>

                                    </div>
                                </div>
                                <div className='p-4 '>
                                    <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Cloud BssAccounting software</p>
                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                        <li>Create, send, and chase invoices</li>
                                        <li>Capture bills and receipts easily</li>
                                        <li>Expense Management</li>
                                        <li>Real-time financial reports (Profit & Loss, Balance Sheet, Aged Payables, Aged Receivables)</li>
                                        <li>Use multiple currencies</li>
                                    </ul>
                                    <div className='pt-2'>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Ecommerce</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li>Connect one marketplace</li>

                                        </ul>

                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Bookkeeping</p>


                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li>Unlimited bookkeeping</li>
                                            <li>Automatic reconciliations</li>
                                        </ul>
                                    </div>
                                    <div className='pt-2 pb-3'>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Expert service</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li className='text-[#3945BA]'>Monthly Management reports</li>
                                            <li className='text-[#3945BA]'>Video calls with an expert</li>
                                            <li className='text-[#3945BA]'>Ad-hoc tax advice</li>
                                            <li className='text-[#3945BA]'>Quarterly strategic session</li>
                                            <li>In-app chat</li>
                                            <li>Payroll and dividends tax advice</li>
                                            <li>Dedicated accounting team</li>

                                        </ul>

                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Tax and filings</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li className='text-[#3945BA]'>GST filing</li>
                                            <li className='text-[#3945BA]'>GST registration</li>

                                            <li>Unaudited Financial Statements (UFS)</li>
                                            <li>Annual tax return filling</li>
                                        </ul>
                                    </div>
                                    <div className='border border-dark border-t'></div>
                                    <div className='pt-4 d-flex justify-content-between align-items-center'><span   className='font-[cd-se] text-[18px]  text-[#212833] '>Optional add-ons</span>
                                        <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 2C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H13C13.2652 0 13.5196 0.105357 13.7071 0.292893C13.8946 0.48043 14 0.734784 14 1C14 1.26522 13.8946 1.51957 13.7071 1.70711C13.5196 1.89464 13.2652 2 13 2H1Z" fill="black" />
                                        </svg>
                                    </div>

                                    <div className='pt-4 d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] underline'>Xero Subscription</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹37048.64/y</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] '>GST filing</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹74097.20/y</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] '>GST registration</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹18524.30</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676]'>Personal Income Tax</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹9262.15</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] '>Full XBRL report</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹30873.83</p>
                                    </div>

                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] '>Simplified XBRL report</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹18524.30</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] underline '>Payroll services, per employee</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹18524.30/y</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] '>Employee leave tracking, per employee</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹4940.00/y</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            <section className="bg-[#FFFCF5] overflow-hidden sm:px-20 px-6  py-10">
                <div className="container-fluid p-0">
                   <div className='row justify-center align-items-start'>
                    <div className='col-md-4 mb-4'>
                    <p className='font-[cd-m] text-[25px] text-[#000] p-text'>Add-ons you
                    might need</p>
                    </div>
                    <div className='col-md-8 mb-4'>
                    <div  className='row justify-between align-items-center'>
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
                    <div  className='row justify-between align-items-center'>
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
                    <div  className='row justify-between align-items-center'>
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
            </section>
            <section className="bg-[#F3EFE7] sm:px-20 px-6  py-5">
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
                                            <div className="sm:flex  items-center gap-4 pt-4">
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
