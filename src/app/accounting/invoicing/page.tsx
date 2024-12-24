'use client'

import Header from '../../components/header';

import Footer from '../../components/footer'
import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css"
import RunBusiness from '../../components/run-your-business'
import FAQ from "../../components/faq"

export default function Home() {

    return (
        <>
            <Header />

            <section className='bg-[#FFFCF5]'>
                <div className="overflow-hidden sm:px-20 px-6  sm:pt-[100px] pt-[50px] py-10">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center ">
                            <div className="col-md-6 mb-4">
                                <div className='col-md-9'>
                                    <p className=" font-[cd-se]    no-underline sm:text-[50px] text-[30px] text-[#212833]   sm:leading-[50px] leading-[30px] p-text">Online invoicing made simple.
                                    </p>


                                </div>
                                <div className='col-md-10'>
                                    <p className="font-[cd-r]  no-underline text-[16px] p-text   text-[#212833] ">Generate and dispatch invoices swiftly to accelerate payment collection and maintain control of your cash flow.</p>
                                    <div className='sm:flex sm:justify-start justify-center   '>
                                    <div className="flex sm:justify-start justify-center   items-center sm:pt-4 pt-2 sm:mr-4">
                                        <button className="border border-dark  font-medium sm:w-[200px] w-[200px]   px-6 py-[8px] rounded-full mb-4 text-[#000] hover:bg-[#000] hover:text-[#fff] ">
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
                            <div className="text-center pb-2">
                                <div className='d-flex justify-center '>
                                    <div className=" px-4 py-[13px] font-[cd-m]  text-[13px]   text-[#212833] border border-dark rounded-[30px] sm:w-[180px] w-[180px] text-[14px] " >WHY CLOUD BSS</div>
                                </div>

                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-6 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se]    sm:text-[40px] text-[25px]  text-[#212833]  sm:leading-[40px] leading-[30px] text-center   ">Automated accounting software for e-commerce businesses..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-center'>
                        <div className='col-md-10 pt-4'>
                            <div className='row align-items-center justify-between '>
                            <div className="col-md-5 mb-4 ">
                          
                                    <Image src='/assets/Rectangle 4611 (3).png' alt=".." width='3000' height='3000' className="w-full" />
                             
                        </div>
                        <div className="col-md-5 mb-4">
                        
                                    <p className='text-[20px] font-[cd-se] text-[#212833] text-[20px]'>Speed up your payments using UPI</p>
                                    <p className='font-[cd-r]   text-[#7C7C7C] sm:text-[16px]  mb-0 '>Generate invoices and offer your customers a secure payment method. Enable UPI to accept credit and debit card payments without requiring a UPI account.
                                    </p>


                            
                        </div> 
                            </div>
                            <div className='row align-items-center justify-between '>
                            <div className="col-md-5 mb-4  order-md-1 order-2">
                                    <p  className='text-[20px] font-[cd-se] text-[#212833] text-[20px]'>Stay in control of your financial health</p>
                                    <p className='font-[cd-r]   text-[#7C7C7C] sm:text-[16px]  mb-0 '>Your dashboard provides a clear and immediate summary of all your invoices, including pending, overdue, and paid amounts.

                                    </p>
                        </div>
                        <div className="col-md-5 mb-4 order-md-2 order-1">
                           
                                    <Image src='/assets/Rectangle 4628.png' alt=".." width='3000' height='3000' className="w-full" />
                                </div>
                            </div>
                            <div className='row align-items-center justify-between '>
                            <div className="col-md-5 mb-4 ">
                         
                                    <Image src='/assets/Rectangle 4613 (3).png' alt=".." width='3000' height='3000' className="w-full" />
                              
                        </div>
                        <div className="col-md-5 mb-4">
                           
                                    <p  className='text-[20px] font-[cd-se] text-[#212833] text-[20px]'>Intelligent accounting leverages your invoices for streamlined tax reporting.</p>
                                    <p className='font-[cd-r]   text-[#7C7C7C] sm:text-[16px]  mb-0 '>Our app handles the heavy lifting by automatically importing transactions, assigning tax codes, organizing tax records, and ensuring full tax compliance, so you can concentrate on what matters most.
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
                                <p className='font-[cd-se] text-[#fff] sm:text-[40px] text-[25px] leading-[25px] sm:leading-[40px]  mb-0 '>Got questions? Chat with our local experts</p>
                                <p className='font-[cd-r] text-[#ABABAB] text-[16px]  pt-4 mb-0 '>Choose a convenient time to chat with our accounting experts and get the answers you need to take the next step.
                                </p>
                                <div className="sm:flex  sm:justify-start  items-center g  pt-4">
                                    <button className="bg-white text-[#212833] font-[cd-m]  rounded-full sm:w-[150px] w-[150px] py-[10px]  text-[14px] tracking-wider ">
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
                            <div className="text-center pb-2 ">

                                <div className="row justify-center  sm:pb-4 pb-3 pt-3">
                                    <div className="col-md-5   ">
                                        <p className="font-[cd-se]    sm:text-[40px] text-[25px]  text-[#212833]  sm:leading-[40px] leading-[30px] text-center   ">Cloud BSS who?
                                        We are glad you asked</p>
                                        <p className='text-[16px]'>We power small businesses with financial management tools and a dedicated accounting expert to maximise your business success</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-center'>
                        <div className='col-md-10 pt-4'>
                            <div className='row justify-between align-items-center'>
                            <div className="col-md-5 mb-4 ">
                         
                                    <Image src='/assets/Group 17704.png' alt=".." width='3000' height='3000' className="w-full" />
                              
                        </div>
                        <div className="col-md-5 mb-4">
                          
                                    <p  className='text-[20px] font-[cd-se] text-[#212833] text-[20px]'>Rely on your specialized advisor</p>
                                    <p className='font-[cd-r]   text-[#7C7C7C] sm:text-[16px]  mb-0 '>While automation handles the routine, complex financial and business challenges require a human touch. That is why we provide a friendly, knowledgeable accounting expert as your dedicated point of contact. Consider it like having a Financial Director on call, without the hefty price tag.
                                    </p>


                               
                        </div>
                            </div>
                            <div className='row justify-between align-items-center'>
                            <div className="col-md-5 mb-4 order-md-1 order-2 ">
                          
                                    <p  className='text-[20px] font-[cd-se] text-[#212833] text-[20px]'>Smart software</p>
                                    <p className='font-[cd-r]   text-[#7C7C7C] sm:text-[16px]  mb-0 '>That said – robots are nice when used right. We automated menial tasks – collecting documents, recognising accounts, assigning tax rates, preparing draft reports, etc. Where necessary, our robots reroute their output to a human expert so that you can be compliant with confidence!

                                    </p>

                              
                        </div>
                        <div className="col-md-6 mb-4 order-md-2 order-1 ">
                         
                                    <Image src='/assets/abh.png' alt=".." width='3000' height='3000' className="w-full" />
                            
                        </div>
                                </div>
                                <div className='row justify-between align-items-center'>
                                <div className="col-md-5 mb-4 ">
                           
                                    <Image src='/assets/Rectangle 4632.png' alt=".." width='3000' height='3000' className="w-full" />
                              
                        </div>
                        <div className="col-md-5 mb-4">
                            
                                    <p  className='text-[20px] font-[cd-se] text-[#212833] text-[20px]'>All your data in one place</p>
                                    <p className='font-[cd-r]   text-[#7C7C7C] sm:text-[16px]  mb-0 '>Get rid of app clutter: we are the only accounting and financial management solution you will need. Finally, all your data, tools and accounting details are in one place – as they should be.
                                    </p>
                                    <div className="items-center  pt-4">
                                        <button className=" border border-dark text-[#000] font-medium sm:w-[220px] w-[220px]   px-6 py-[8px] rounded-full mb-4 tracking-wider hover:bg-[#000] hover:text-[#fff] ">
                                        Get Started
                                        </button>
                                    </div>

                            
                        </div>
                                </div>
                            
                             </div>
                    </div>
                 
                </div>
            </section>
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6  py-10">
                <div className="container-fluid p-0">
                <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2">
                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-6 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se]    sm:text-[40px] text-[25px]  text-[#fff]  sm:leading-[40px] leading-[30px] text-center   ">Trusted by Cloud Bss entrepreneurs around the world</p>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    
                    </div>
                    <div className="row pt-4" >
  <div className="col-md-3 mb-4  d-flex flex-column align-items-center">
    <p className="font-[cd-se] sm:text-[40px] text-[25px] text-[#D9D9D9] sm:leading-[40px] leading-[30px] text-center mb-2">
      89%
    </p>
    <p className="text-center font-[cd-r] text-[18px] text-[#D9D9D9] px-4">
      of customers recommend Cloud BSS service
    </p>
  </div>
  <div className="col-md-3 mb-4  d-flex flex-column align-items-center">
    <p className="font-[cd-se] sm:text-[40px] text-[25px] text-[#D9D9D9] sm:leading-[40px] leading-[30px] text-center mb-2">
      15,000+
    </p>
    <p className="text-center font-[cd-r] text-[18px] text-[#D9D9D9] px-4">
      of customers recommend Cloud BSS service
    </p>
  </div>
  <div className="col-md-3 mb-4  d-flex flex-column align-items-center">
    <div className="d-flex justify-center mb-2 h-[40px]" >
      <Image
        src="/assets/Group 17707.png"
        width={120}
        height={60}
        alt="Cloud BSS Service"
      />
    </div>
    <p className="text-center font-[cd-r] text-[18px] text-[#D9D9D9] px-4">
      of customers recommend Cloud BSS service
    </p>
  </div>
  <div className="col-md-3 mb-4  d-flex flex-column align-items-center">
    <div className="d-flex justify-center mb-2 h-[40px]" >
      <Image
        src="/assets/Group 17706.png"
        width={120}
        height={60}
        alt="Cloud BSS Service"
      />
    </div>
    <p className="text-center font-[cd-r] text-[18px] text-[#D9D9D9] px-4">
      of customers recommend Cloud BSS service
    </p>
  </div>
</div>

                <Swiper
      spaceBetween={10} 
      loop={true} 
  
      modules={[Navigation]} 
      className="items-center"
      navigation={{
        nextEl: '.custom-next', 
        prevEl: '.custom-prev', 
      }}
      breakpoints={{
        640: { 
          slidesPerView: 1, 
        },
        768: { 
          slidesPerView: 2, 
        },
        1024: { 
          slidesPerView: 3, 
        },
      }}
    >
   <SwiperSlide>
        <div className="sm:mb-0 col-11">
    <div  className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between w-full rounded-[20px]">
      <div  className="flex items-center">
            <Image src="/assets/Rectangle 4628.png" alt=".."className="w-12 h-12 rounded-full" width='8000' height='100' />
        <div  className="ml-3">
          <h4  className="font-[cd-m] text-[18px] m-0 p-0">Tingsager Michael</h4>
          <p  className="font-[cd-r] text-[16px] m-0 p-0">Tingsager Consulting Pte. Ltd.</p>
        </div>
      </div>
      <p  className="mt-3 text-sm text-gray-600">
        I&apos;ve moved not just one business to Cloud Bss, but a number. If you&apos;re a
        small business it&apos;s the place to be—you&apos;ll save time and sleep.
      </p>
    </div>
 
        </div>,
      </SwiperSlide>
      <SwiperSlide>
        <div className="sm:mb-0 col-11">
    <div  className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between w-full rounded-[20px]">
      <div  className="flex items-center">
            <Image src="/assets/Rectangle 4628.png" alt=".."className="w-12 h-12 rounded-full" width='8000' height='100' />
        <div  className="ml-3">
          <h4  className="font-[cd-m] text-[18px] m-0 p-0">Tingsager Michael</h4>
          <p  className="font-[cd-r] text-[16px] m-0 p-0">Tingsager Consulting Pte. Ltd.</p>
        </div>
      </div>
      <p  className="mt-3 text-sm text-gray-600">
        I&apos;ve moved not just one business to Cloud Bss, but a number. If you&apos;re a
        small business it&apos;s the place to be—you&apos;ll save time and sleep.
      </p>
    </div>
 
        </div>,
      </SwiperSlide>
      <SwiperSlide>
        <div className="sm:mb-0 col-11">
    <div  className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between w-full rounded-[20px]">
      <div  className="flex items-center">
            <Image src="/assets/Rectangle 4628.png" alt=".."className="w-12 h-12 rounded-full" width='8000' height='100' />
        <div  className="ml-3">
          <h4  className="font-[cd-m] text-[18px] m-0 p-0">Tingsager Michael</h4>
          <p  className="font-[cd-r] text-[16px] m-0 p-0">Tingsager Consulting Pte. Ltd.</p>
        </div>
      </div>
      <p  className="mt-3 text-sm text-gray-600">
        I&apos;ve moved not just one business to Cloud Bss, but a number. If you&apos;re a
        small business it&apos;s the place to be—you&apos;ll save time and sleep.
      </p>
    </div>
 
        </div>,
      </SwiperSlide>
      <SwiperSlide>
        <div className="sm:mb-0 col-11">
    <div  className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between w-full rounded-[20px]">
      <div  className="flex items-center">
            <Image src="/assets/Rectangle 4628.png" alt=".."className="w-12 h-12 rounded-full" width='8000' height='100' />
        <div  className="ml-3">
          <h4  className="font-[cd-m] text-[18px] m-0 p-0">Tingsager Michael</h4>
          <p  className="font-[cd-r] text-[16px] m-0 p-0">Tingsager Consulting Pte. Ltd.</p>
        </div>
      </div>
      <p  className="mt-3 text-sm text-gray-600">
        I&apos;ve moved not just one business to Cloud Bss, but a number. If you&apos;re a
        small business it&apos;s the place to be—you&apos;ll save time and sleep.
      </p>
    </div>
 
        </div>,
      </SwiperSlide>

     
      

    </Swiper>
                 
                </div>
            </section>

   

            <FAQ />

<RunBusiness />

    
      


            <Footer />
        </>
    );
}
