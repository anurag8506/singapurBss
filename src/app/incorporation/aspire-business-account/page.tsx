'use client'
import Header from '../../components/header';
import Footer from '../../components/footer'
import Image from 'next/image';
import RunBusiness from '../../components/run-your-business'
import ResourcesForManaging from "../../components/resources-for-managing"
import FAQ from "../../components/faq"
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Home() {

    const [activeRegStep, setActiveRegStep] = useState<number | null>(null);

 

    const regStep = (step: number) => {

        setActiveRegStep(activeRegStep === step ? null : step);
    };

    const closeContent = () => {
        setActiveRegStep(null);
    };

    return (
        <>
            <Header />
               
              <section className='bg-[#fff'>
                           <div className="overflow-hidden sm:px-20 px-6 sm:pt-[100px] pt-[50px] ">
                               <div className="container-fluid p-0">
                                   <div className="row align-items-center pb-10 ">
                                       <div className="col-md-6 mb-4">
                                           <div className='col-md-9'>
                                               <p className="font-[cd-se]  no-underline sm:text-[45px] text-[30px] text-[#212833]  sm:leading-[40px] leading-[30px] p-text">
                                               Start a company and get an Aspire business account online
                                               </p>
                                           </div>
                                           <div className='col-md-10'>
                                               <p className="font-[cd-r] font-[500] no-underline text-[16px]  text-[#212833] p-text ">Once we&apos;ve completed your business registration online, we help you open a business account with our partner, Aspire — Singapore&apos;s best digital payment service for entrepreneurs.</p>
                                               <div className='sm:flex sm:justify-start justify-center   '>
                                               <div className="flex sm:justify-start justify-center   items-center sm:pt-4 pt-2 sm:mr-4">
                                                   <button className=" border border-dark font-[cd-m] sm:w-[220px] w-full  px-6 py-[8px] rounded-full mb-4 hover:bg-[#000] hover:text-[#fff] ">
                                                   Book a Consultation
                                                   </button>
                                               </div>
                                               <div className="flex sm:justify-start justify-center   items-center sm:pt-4">
                                                   <button className=" border border-dark  font-[cd-m] sm:w-[160px]  w-full  px-6 py-[8px] rounded-full mb-4 hover:bg-[#000] hover:text-[#fff] ">
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
                                      <div className="row">
                                                               <div className="col-md-3 mb-4  flex flex-col items-center">
                                                                   <div className="h-[50px] w-[100px]">
                                                                       <Image
                                                                           src="/assets/image 23 (2).png"
                                                                           alt=".."
                                                                           className="w-[180px]  object-contain"
                                                                           width='8000'
                                                                           height='100'
                                                                       />
                                                                   </div>
                                                                   <p className="font-[cd-r] text-[16px] leading-[20px]  text-[#212833] pt-3 text-center col-md-6 ">
                                                                       Registered filing agent FA20170653
                                                                   </p>
                                                               </div>
                                                               <div className="col-md-3 mb-4  flex flex-col items-center">
                                                                   <div className="h-[50px] w-[100px]">
                                                                       <Image
                                                                           src="/assets/image 24.png"
                                                                           alt=".."
                                                                           className="w-[180px]  object-contain"
                                                                           width='8000'
                                                                           height='100'
                                                                       />
                                                                   </div>
                                                                   <p className="font-[cd-r] text-[16px] leading-[20px]  text-[#212833] pt-3 text-center col-md-6 ">
                                                                       Our accountants are certified by ISCA
                                                                   </p>
                                                               </div>
                                                               <div className="col-md-3 mb-4 flex flex-col items-center">
                                                                   <div className="h-[50px] w-[100px]">
                                                                       <Image
                                                                           src="/assets/image 25.png"
                                                                           alt=".."
                                                                           className="w-[180px]  object-contain"
                                                                           width='8000'
                                                                           height='100'
                                                                       />
                                                                   </div>
                                                                   <p className="font-[cd-r] text-[16px] leading-[20px]  text-[#212833] pt-3 text-center col-md-6 ">
                                                                       Employment Agency License No. 22S1231
                                                                   </p>
                                                               </div>
                                                               <div className="col-md-3   flex flex-col items-center">
                                                                   <div className="h-[50px] w-[100px]">
                                                                       <Image
                                                                           src="/assets/image 26.png"
                                                                           alt=".."
                                                                           className="w-[180px]  object-contain"
                                                                           width='8000'
                                                                           height='100'
                                                                       />
                                                                   </div>
                                                                   <p className="font-[cd-r] text-[16px] leading-[20px]  text-[#212833] pt-3 text-center col-md-6 ">
                                                                       Registered filing agent FA20170653
                                                                   </p>
                                                               </div>
                                                           </div>
           
                               </div>
                           </div>
           
                       </section>
                       <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6 sm:py-[50px] py-[30px]">
                <div >
                    
                        <div className="text-center  ">
                            <div className='d-flex justify-center'>
                                <div className="px-2 py-[10px] font-[cd-m]  border border-dark rounded-full text-[16px]  text-[#212833] rounded-[30px] sm:w-[180px] w-[180px] tracking-wider sm:pt-4 ">
                                WHY CLOUD BSS
                                </div>
                            </div>
                            <div className="row justify-center  pb-3">
                                <div className="col-md-6 sm:pt-5 pt-2 sm:pb-5 pb-2  ">
                                    <p className="font-[cd-se] font-[500]  sm:text-[35px] text-[28px] text-[#212833]  sm:leading-[38px] leading-[32px] text-center">A one-stop solution you can trust</p>
                                </div>
                            </div>
                        </div>
                        <div className="row m-0 p-0 d-flex justify-center ">
                            <div className="col-md-3 mb-4 ">
                                <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                    <div className="mb-4  align-items-center sm:h-[80px]">
                                        <Image src="/assets/Group (5).png" alt="Start secure trading quickly"  width="90" height="90" className="object-contain" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]    leading-[20px] sm:h-[20px]">
                                        On-the-ground experts
                                        
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0">
                                        Unlike competitors, we have a fully-fledged tax team based in Singapore. Get answers through the app&apos;s live chat, via email or phone for easy access to advice and in-person consultations.
                                        
                                        </p>
                                    </div>
                                </div>
                            </div>

                          
                            <div className="col-md-3 mb-4 ">
                                <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                    <div className="mb-4  align-items-center sm:h-[80px]">
                                        <Image
                                            src="/assets/Group 17743.png"
                                            alt="Start secure trading quickly"
                                            width="90"
                                            height="90"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]  mb-2  leading-[20px] sm:h-[20px]">
                                        Get registered remotely
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-4">
                                        Start a company and open an Aspire business account from anywhere in the world. We assist you online and help you with local compliance.
                                        </p>

                                    </div>
                      
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                    <div className="mb-4  align-items-center sm:h-[80px]">
                                        <Image
                                            src="/assets/Group 17744.png"
                                            alt="Start secure trading quickly"
                                            width="60"
                                            height="60"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]  mb-2  leading-[20px] sm:h-[20px]">
                                        Tax right from day one
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-4">
                                        We give you guidance on the best business structure, set up your accounting, and inform you on tax reliefs available to your business so that yo&apos;re set up to pay tax efficiently from the get-go.
                                        </p>

                                    </div>
                      
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                    <div className="mb-4  align-items-center sm:h-[80px]">
                                        <Image
                                            src="/assets/Group 17745.png"
                                            alt="Start secure trading quickly"
                                            width="90"
                                            height="90"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]  mb-2  leading-[20px] sm:h-[20px]">
                                        Long-term visa support
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-4">
                                        We help you get an Employment Pass so that you can stay and work in Singapore long-term. We also assist with Dependant&apos;s Passes for your family to join you.
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
            <section className="bg-[#FFFCF5] overflow-hidden sm:px-20 px-6  py-10">
                                       <div className="container-fluid p-0">
                       
                                           <div className="row justify-center">
                                               <div className="col-md-12 sm:pb-2">
                                                   <div className="text-center pb-2">
                                                       <div className='d-flex justify-center'> 
                                                           <div className=" px-2 py-[10px] font-[cd-m]  font-[500]  text-[#212833]  border border-dark rounded-[30px] sm:w-[180px] w-[180px] text-[14px] tracking-wider ">What you get</div>
                                                       </div>
                       
                                                       <div className="row justify-center  sm:pb-4 pb-3">
                                                           <div className="col-md-5 sm:pt-3 pt-4  ">
                                                               <p className="font-[cd-se]  no-underline sm:text-[40px] text-[30px] text-[#212833]  sm:leading-[40px] leading-[30px]">Helping you succeed in Singapore</p>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className='d-flex justify-center'>
                                               <div className='col-md-10'>
                                            <div className="row align-items-center justify-between pt-4">
                                            <div className="col-md-5 mb-4  ">
                                              
                                                 
                                              <Image src='/assets/image (18).png' alt=".." width='3000' height='3000' className="w-full" />
                                        
                                    
                                  </div>
                                               <div className="col-md-5 mb-4  ">
                                                           <p className='text-[20px] font-[cd-se]  text-[#212833] '>Business account opening with Aspire</p>
                                                           <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[16px]  mb-0 '>Aspire is a service partner of Cloud BSS that has revolutionised SME and startup finance. They offer a fee-free business account, corporate card, borderless payments, and leading FX services. The Aspire Advance Card ensures efficient corporate spend management and is connected shortly after business registration.
                                                           </p>
                                               </div>
                       
                                             
                                               </div>
                                               <div className='row align-items-center justify-between'>
                                               <div className="col-md-5 mb-4  order-md-2 order-1">
                                                           <Image src='/assets/image (19).png' alt=".." width='3000' height='3000' className="w-full" />
                                                       </div>
                                                 
                                                    <div className="col-md-5 mb-4 order-md-1 order-2">
                                                   
                                                           <p className='text-[20px] font-[cd-se]  text-[#212833] '>Seamless integration to make your life easier</p>
                                                           <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[16px]  mb-0 '>We&apos;ve made the data exchange between Cloud BSS and Aspire as simple as possible. Download your transactions to prepare for reports — our software will recognise them and populate your accounting reports and dashboards in as fast as 30 minutes.
                       
                                                           </p>
                       
                                               </div>
                                               </div>
                                               <div className='row align-items-center justify-between'>
                                               <div className="col-md-5 mb-4  order-md-2 order-2">
                                                <p className='text-[20px] font-[cd-se]  text-[#212833] '>A Nominee Director&apos;s role for Singapore businesses</p>
                                            <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[16px]  mb-0 '>To fulfil the legal obligation of having a resident director, Singapore companies can choose to engage a Nominee Director. This individual will assume legal responsibilities without active involvement in the day-to-day operations of the business.
                                                           </p>
                                               </div>
                                                    <div className="col-md-5 mb-4  order-md-1 order-1 ">
                                              
                                                           <Image src='/assets/image (20).png' alt=".." width='3000' height='3000' className="w-full" />
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
        
            <section className="bg-[#F3EFE7] sm:px-20 px-6  sm:py-[60px] py-[50px]">
                            <div className="overflow-hidden">
                                <div className="row justify-center">
                                    <div className="col-md-6">
                                        <div className='d-flex justify-center'>
                                            <div className='border border-dark rounded-full px-3 py-[8px] w-[160px]'>
                                                <p className='text-[18px] text-[#212833] text-center  m-0'>The process</p>
                                            </div>
            
                                        </div>
                                        <p className="font-[cd-se] text-center  sm:text-[40px] text-[28px] text-[#212833] sm:leading-[45px] leading-[30px] sm:pt-[50px] pt-[30px] ">5 steps to setting up in Singapore</p>

            
                                    </div>
                                </div>
                                <div className="row justify-center pt-5">
                                    <div className="col-md-10 mb-4">
            
                                        <div  >
            
                                            <div className="bg-white rounded-[20px]">
                                                <div className="flex justify-between items-center cursor-pointer bg-white sm:p-[20px] p-[20px] rounded-[20px] mb-2"
                                                    onClick={() => regStep(1)} >
                                                    <div>
                                                        <div className="flex gap-3 align-items-center">
                                                            <div className="bg-[#0061FE] rounded-[50%] text-white w-8 h-8 flex items-center justify-center">1</div>
                                                            <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Meet the official requirements</span>
                                                        </div>
                                                    </div>
                                                    <span className="font-[cd-m] text-[#212833] text-[25px]">{activeRegStep === 1 ? "-" : "+"}</span>
                                                </div>
            
                                                {activeRegStep === 1 && (
                                                    <div className="row justify-between items-center sm:p-[50px] p-[30px] rounded-[20px] mb-2">
                                                        <div className="col-md-6 mb-4 relative">
                                                            <p>We help you with everything Singapore&apos;s Accounting and Corporate Regulatory Authority (ACRA) needs from business founders:</p>
                                                          <p className='font-[cd-m]'>Corporate Secretary</p>

                                                          <p>Singapore law requires each company to have a secretary. This officer is in charge of state compliance. They file annual returns and resolutions on changes, prepare Annual General meetings, and processes dividends distribution.</p>
            <div className='pt-4 pb-4'>
                <div className='border border-dark'></div>
            </div>
            <p className='font-[cd-m]'>Nominee Director</p>

<p>At least one of your directors has to be a Singapore resident. Hiring a nominee is a common and legal practice.A nominee puts their name on your papers but can’t make any core business decisions. If there’s any wrongdoing, such as late or incorrect reports, the nominee director shares legal responsibility. That’s why you have to get an accounting package with this service.</p>

                     <div className='pt-4 pb-4'>
                <div className='border border-dark'></div>
            </div>    
            <p className='font-[cd-m]'>Registered address</p>   
            <p>All Singaporean companies must have a local registered address. It goes on all legal documents. We receive your correspondence, scan and forward them to you.</p>                            


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
                                                            <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Get your company registered</span>
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
                                                            <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Open Aspire business account</span>
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
                                        <div className="bg-white rounded-[20px]">
                                                <div className="flex justify-between items-center cursor-pointer bg-white sm:p-[20px] p-[20px] rounded-[20px] mb-2"
                                                    onClick={() => regStep(4)} >
                                                    <div>
                                                        <div className="flex gap-3 align-items-center">
                                                            <div className="bg-[#0061FE] rounded-[50%] text-white w-8 h-8 flex items-center justify-center">4</div>
                                                            <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Set up your accounting calendar</span>
                                                        </div>
                                                    </div>
                                                    <span className="font-[cd-m] text-[#212833] text-[25px]">{activeRegStep === 4 ? "-" : "+"}</span>
                                                </div>
            
                                                {activeRegStep === 4 && (
                                                    <div className="row justify-between items-center sm:p-[50px] p-[30px] rounded-[20px] mb-2">
                                                        <div className="col-md-6 mb-4 relative">
                                                            <p>We help you with everything Singapore&apos;s Accounting and Corporate Regulatory Authority (ACRA) needs from business founders:</p>
                                                          <p className='font-[cd-m]'>Corporate Secretary</p>

                                                          <p>Singapore law requires each company to have a secretary. This officer is in charge of state compliance. They file annual returns and resolutions on changes, prepare Annual General meetings, and processes dividends distribution.</p>
            <div className='pt-4 pb-4'>
                <div className='border border-dark'></div>
            </div>
            <p className='font-[cd-m]'>Nominee Director</p>

<p>At least one of your directors has to be a Singapore resident. Hiring a nominee is a common and legal practice.A nominee puts their name on your papers but can’t make any core business decisions. If there’s any wrongdoing, such as late or incorrect reports, the nominee director shares legal responsibility. That’s why you have to get an accounting package with this service.</p>

                     <div className='pt-4 pb-4'>
                <div className='border border-dark'></div>
            </div>    
            <p className='font-[cd-m]'>Registered address</p>   
            <p>All Singaporean companies must have a local registered address. It goes on all legal documents. We receive your correspondence, scan and forward them to you.</p>                            


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
                                                <div className="flex justify-between items-center cursor-pointer bg-white sm:p-[20px] p-[20px] rounded-[20px] mb-2"
                                                    onClick={() => regStep(5)} >
                                                    <div>
                                                        <div className="flex gap-3 align-items-center">
                                                            <div className="bg-[#0061FE] rounded-[50%] text-white w-8 h-8 flex items-center justify-center">5</div>
                                                            <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Get an Employment Pass, move to Singapore</span>
                                                        </div>
                                                    </div>
                                                    <span className="font-[cd-m] text-[#212833] text-[25px]">{activeRegStep === 5 ? "-" : "+"}</span>
                                                </div>
            
                                                {activeRegStep === 5 && (
                                                    <div className="row justify-between items-center sm:p-[50px] p-[30px] rounded-[20px] mb-2">
                                                        <div className="col-md-6 mb-4 relative">
                                                            <p>We help you with everything Singapore&apos;s Accounting and Corporate Regulatory Authority (ACRA) needs from business founders:</p>
                                                          <p className='font-[cd-m]'>Corporate Secretary</p>

                                                          <p>Singapore law requires each company to have a secretary. This officer is in charge of state compliance. They file annual returns and resolutions on changes, prepare Annual General meetings, and processes dividends distribution.</p>
            <div className='pt-4 pb-4'>
                <div className='border border-dark'></div>
            </div>
            <p className='font-[cd-m]'>Nominee Director</p>

<p>At least one of your directors has to be a Singapore resident. Hiring a nominee is a common and legal practice.A nominee puts their name on your papers but can’t make any core business decisions. If there’s any wrongdoing, such as late or incorrect reports, the nominee director shares legal responsibility. That’s why you have to get an accounting package with this service.</p>

                     <div className='pt-4 pb-4'>
                <div className='border border-dark'></div>
            </div>    
            <p className='font-[cd-m]'>Registered address</p>   
            <p>All Singaporean companies must have a local registered address. It goes on all legal documents. We receive your correspondence, scan and forward them to you.</p>                            


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
                                        <div className='d-flex justify-center text-center'>
                                          
            
                                        </div>
                                    </div>
                                </div>
            
                            </div>
            
                        </section>
     <FAQ/>
<ResourcesForManaging />
<RunBusiness />
             
                    
        



            <Footer />
        </>
    );
}
