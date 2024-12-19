'use client'

import Header from '../../components/header';

import Footer from '../../components/footer'
import Image from 'next/image';
import Link from 'next/link';

import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {

    return (
        <>
            <Header />

            <section className='bg-[#FFFCF5]'>
                <div className="overflow-hidden sm:px-20 px-6 sm:pt-[100px] pt-[50px] ">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center pb-10 ">
                            <div className="col-md-6 mb-4">
                                <div className='col-md-9'>
                                    <p className="font-[cd-se]  no-underline sm:text-[45px] text-[30px] text-[#212833]  sm:leading-[40px] leading-[30px] p-text">Time-saving
                                    ecommerce accounting
                                    </p>


                                </div>
                                <div className='col-md-10'>
                                    <p className="font-[cd-r] font-[500] no-underline text-[16px]  text-[#212833] p-text ">It is time to leave traditional accounting behind. Our software integrates with multiple ecommerce platforms to keep your bookkeeping accurate. Choose Cloud Bss for ecommerce accounting services, tax filings, and reporting.</p>
                                    <div className='sm:flex sm:justify-start justify-center   '>
                                    <div className="flex sm:justify-start justify-center   items-center sm:pt-4 pt-2 sm:mr-4">
                                        <button className="bg-[#212833] border border-dark text-white font-[cd-m] sm:w-[220px] w-full  px-6 py-[10px] rounded-full mb-4 ">
                                        Book a Consultation
                                        </button>
                                    </div>
                                    <div className="flex sm:justify-start justify-center   items-center sm:pt-4">
                                        <button className=" border border-dark text-black font-[cd-m] sm:w-[160px]  w-full  px-6 py-[10px] rounded-full mb-4">
                                        Pricing
                                        </button>
                                    </div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className='col-md-6 '>
                                <div className='d-flex justify-content-end'>
                                    <div className='col-md-9'>
                                        <Image
                                            src="/assets/av.png"
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
                            <div className="text-center pb-2">
                                <div className='d-flex justify-center'> 
                                    <div className=" px-2 py-[10px] font-[cd-m]  font-[500]  text-[#212833]  border border-dark rounded-[30px] sm:w-[180px] w-[180px] text-[14px] tracking-wider ">WHY CLOUD BSS</div>
                                </div>

                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-5 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se]  no-underline sm:text-[40px] text-[30px] text-[#212833]  sm:leading-[40px] leading-[30px]">Automated accounting software for e-commerce businesses.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-center'>
                        <div className='col-md-10'>
                     <div className="row align-items-center justify-between pt-4">
                        <div className="col-md-5 mb-4 order-md-1 order-2">
                                    <p className='text-[20px] font-[cd-se]  text-[#212833] '>Instant access to sales data</p>
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[16px]  mb-0 '>Our API seamlessly integrates your marketplace data with Cloud Bss Accounting, ensuring you always have up-to-date insights on your online sales performance.
                                    </p>
                        </div>

                        <div className="col-md-5 mb-4 order-md-2 order-1 ">
                       
                          
                                    <Image src='/assets/Rectangle 4611 (2).png' alt=".." width='3000' height='3000' className="w-full" />
                              
                          
                        </div>
                        </div>
                        <div className='row align-items-center justify-between'>
                        <div className="col-md-5 mb-4 ">
                         
                                    <Image src='/assets/Rectangle 4612 (2).png' alt=".." width='3000' height='3000' className="w-full" />
                                </div>
                          
                             <div className="col-md-5 mb-4">
                            
                                    <p className='text-[20px] font-[cd-se]  text-[#212833] '>Sync your e-commerce platforms with our integration tools.</p>
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[16px]  mb-0 '>Eliminate the need to switch between platforms for sales analytics. Our comprehensive service handles platform fees, discounts, returns, and gift cards for major marketplaces like Lazada, Shopee, Amazon, Shopify, and eBay. We also offer seamless integration with payment processors like PayPal and Stripe.

                                    </p>

                        </div>
                        </div>
                        <div className='row align-items-center justify-between'>
                        <div className="col-md-5 mb-4  order-md-2 order-1">
                         <p className='text-[20px] font-[cd-se]  text-[#212833] '>E-commerce-savvy accountants ready to assist you</p>
                     <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[16px]  mb-0 '>Our team manages sales platform fees, discounts, refunds, and gift cards, ensuring you always understand your commissions. Our accountants are here to assist with GST and precise marketplace calculations.
                                    </p>
                        </div>
                             <div className="col-md-5 mb-4  order-md-2 order-1 ">
                       
                                    <Image src='/assets/Rectangle 4613 (1).png' alt=".." width='3000' height='3000' className="w-full" />
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
                            <div className="col-md-9">
                                <p className='font-[cd-se] text-[#fff] sm:text-[40px] text-[25px] leading-[25px] sm:leading-[40px]  mb-0 '>Got questions? Chat with our local experts</p>
                                <p className='font-[cd-r] text-[#ABABAB] sm:text-[16px] text-[14px] pt-4 mb-0 '>Choose a convenient time to chat with our accounting experts and get the answers you need to take the next step.
                                </p>
                                <div className="sm:flex  sm:justify-start  items-center g  pt-4">
                                    <button className="bg-white text-black font-[cd-m]  py-[10px] rounded-full sm:w-[160px] w-[160px]  mb-4 text-[14px] ">
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
                                    <div className=" px-2 py-[10px] font-[cd-m]  text-[13px] font-[500]  text-[#212833]  border border-black rounded-[30px] sm:w-[120px] w-[120px] ">PRICING</div>
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
