'use client'
import Header from '../components/header';
import Footer from '../components/footer'
import Image from 'next/image';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Home() {
;
    return (
        <>
            <Header />
            <section className='bg-[#fff]'>
                <div className="overflow-hidden sm:px-20 px-6  sm:pt-[80px]  sm:py-[100px] py-[20px]">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center justify-center ">
                            <div className='col-md-8 sm:mb-[40px]'>
                                <p className="font-[cd-b] text-[#212833] text-[33px] leading-[35px] text-center sm:text-[45px] sm:leading-[45px]">
                                    About us
                                </p>
                            </div>
                            <div className='col-md-8 mb-4'>
                                <p className="font-[cd-r] p-text text-center sm:text-left sm:text-[20px] text-[18px]  text-[#212833] sm:pb-[50px]  pb-[30px] ">
                                    We believe that entrepreneurs are society’s problem solvers. They see opportunities in complexities and drive us towards progress. Cloud BSS doesn’t want entrepreneurs to be distracted from the important search for the best solutions. By letting us handle all the routine tasks, entrepreneurs can focus on driving their business forward.
                                </p>


                            </div>
                            <div className='col-md-12 mb-4'>

                                <Image src="/assets/image (5).png" alt="Start secure trading quickly" width="1080" height="1080" className="object-contain w-full" />

                            </div>
                        </div>
                        <div className='bg-[#F6F6F6] py-[30px] rounded-[20px] mt-5 sm:p-[50px] p-[30px] sm:mb-[0px] mb-[40px]'>
                            <div className="row align-items-center justify-between ">
                                <div className='col-md-2 mb-4'>
                                    <p className='font-[cd-m] sm:text-[25px] text-[22px] sm:leading-[28px] leading-[25px] p-text m-0'>They talk about us</p>
                                </div>
                                <div className='col-md-1 mb-4 col-6'>
                                    <Image src="/assets/international-business-times-p-50.png" alt="Start secure trading quickly" width="1080" height="1080" className="object-contain w-full" />
                                </div>
                                <div className='col-md-1 mb-4 col-6'>
                                    <Image src="/assets/yahoo-finance-p-.png" alt="Start secure trading quickly" width="1080" height="1080" className="object-contain w-full" />
                                </div>
                                <div className='col-md-1 mb-4 col-6'>
                                    <Image src="/assets/Techcrunch-p-500-1.png.webp.png" alt="Start secure trading quickly" width="1080" height="1080" className="object-contain w-full" />
                                </div>
                                <div className='col-md-1 mb-4 col-6'>
                                    <Image src="/assets/on-deck-p-500-1.png.webp.png" alt="Start secure trading quickly" width="1080" height="1080" className="object-contain w-full" />
                                </div>

                                <div className='col-md-1 mb-4 col-6'>
                                    <Image src="/assets/card-rates-p-500-1.png.webp.png" alt="Start secure trading quickly" width="1080" height="1080" className="object-contain w-full" />
                                </div>
                                <div className='col-md-1 mb-4 col-6'>
                                    <Image src="/assets/BFM-p-500-1.png.webp.png" alt="Start secure trading quickly" width="1080" height="1080" className="object-contain w-full" />
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </section>
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6  sm:py-[40px] py-[40px]">
                <div className="row justify-center align-items-center">
                    <div className='col-md-6'>
                        <div>
                            <p className='text-[18px] font-[cd-m] text-[#276EF1] p-text'>How it started</p>
                            <p className='sm:text-[30px] text-[25px] font-[cd-m] text-[#000] p-text sm:leading-[33px] leading-[28px]'>Talent is everywhere. But opportunity is not.</p>
                            <p className='sm:text-[20px] text-[16px] font-[cd-r] text-[#000] p-text'>Cloud BSS is on a mission to help 1B people turn their dream idea into their dream US  business and democratize access to the US financial ecosystem.</p>
                            <div className='row m-0 p-0 align-center justify-between  pt-4'>
                                <div className='col-md-3 mb-4 col-6'>
                                    <p className='text-[25px] font-[cd-se] text-[#000]  leading-[21px] p-text'>10k+</p>
                                    <p className='p-text sm:text-[18px] text-[16px]'>Happy customers</p>
                                </div>
                                <div className='col-md-3 mb-4 col-6 '>
                                    <p className='text-[25px] font-[cd-se] text-[#000]  leading-[21px] p-text'>1,200+</p>
                                    <p className='p-text sm:text-[18px] text-[16px]'>5 star reviews</p>
                                </div>
                                <div className='col-md-3 mb-4 col-6'>
                                    <p className='text-[25px] font-[cd-se] text-[#000]  leading-[21px] p-text'>175+ Countries</p>
                                    <p className='p-text sm:text-[18px] text-[16px]'>Countries</p>
                                </div>
                                <div className='col-md-3 mb-4 col-6'>
                                    <p className='text-[25px] font-[cd-se] text-[#000]  leading-[21px] p-text'>6</p>
                                    <p className='p-text sm:text-[18px] text-[16px]'>Continents</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>

                        <div className='d-flex sm:justify-end'>
                            <div className='col-md-6'>
                                <Image src="/assets/Rectangle 4738.png" alt="Start secure trading quickly" width="1080" height="1080" className="object-contain w-full" />
                            </div>

                        </div>

                    </div>


                </div>

            </section>
            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6  sm:py-[50px] py-[30px]">
                <div className="row justify-center">
                    <div className="col-md-12 sm:pb-2 m-0 p-0">
                        <div className="text-center   ">

                            <div className="row justify-center  m-0 p-0 sm:pb-4">
                                <div className="col-md-6 ">
                                    <p className="font-[cd-se] font-[500]  sm:text-[35px] text-[26px]   text-[#212833]   sm:leading-[38px] leading-[29px] text-center">Our mission is to enable entrepreneurs to accelerate positive changes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center sm:pt-[50px] pt-[30px]'>
                        <div className='col-md-10'>
                            <div className='row justify-between align-items-center'>
                                <div className='col-md-5 mb-4'>
                                    <Image src="/assets/image 59.png" className="w-full" width={1080} height={1080} alt="no-img" />
                                </div>
                                <div className='col-md-5 mb-4'>
                                    <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>Building a better future for the entrepreneurs</p>
                                    <p className='font-[cd-r] text-[#000] text-[16px]'>We believe that in years entrepreneurs will know that administrative routine is not their job. They will not even consider taking it upon themselves. Cloud BSS stands for freedom from this routine and working to bring this future closer.</p>

                                </div>
                            </div>
                            <div className='row justify-between align-items-center'>
                                <div className='col-md-5 mb-4 order-md-2 order-1'>
                                    <Image src="/assets/image 60.png" className="w-full" width={1080} height={1080} alt="no-img" />

                                </div>
                                <div className='col-md-5 order-md-1 order-2'>
                                    <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>Keeping transparency as a key-value</p>
                                    <p className='font-[cd-r] text-[#000] text-[16px]'>Cloud BSS makes communication as open as possible and never refuses feedback from our customers and teammates. We believe it is the best way to make a positive change.</p>

                                </div>
                            </div>
                            <div className='row justify-between align-items-center'>
                                <div className='col-md-5 mb-4 order-md-1 order-1'>
                                    <Image src="/assets/image 59.png" className="w-full" width={1080} height={1080} alt="no-img" />
                                </div>
                                <div className='col-md-5 mb-4 order-md-2 order-2'>
                                    <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>Improving our services and product continuously</p>
                                    <p className='font-[cd-r] text-[#000] text-[16px]'>
                                        We are a team of professionals that always strive to become better — as individuals, employees, business partners, and a company. Cloud BSS never stops seeking a faster and better-quality way to work.
                                    </p>
                                </div>
                            </div>

                            <div className='row justify-between align-items-center'>
                                <div className='col-md-5 mb-4 order-md-2 order-1'>
                                    <Image src="/assets/image 60.png" className="w-full" width={1080} height={1080} alt="no-img" />

                                </div>
                                <div className='col-md-5 order-md-1 order-2'>
                                    <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>Taking details into account</p>
                                    <p className='font-[cd-r] text-[#000] text-[16px]'>Details are important — only through paying attention and precisely follow the process we can see the big picture and spot opportunities to improve.</p>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='flex justify-center sm:pt-[50px] pt-[30px]'>
                        <div className='col-md-8'>
                            <div className='bg-[#212833] rounded-[20px] px-5 '>
                                <div className='row justify-between align-items-center pt-5'>
                                <div className='col-md-5  mb-4'>
                                        <p className='font-[cd-se] text-[#fff] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px] mb-3 p-text'>Excited to join our team?</p>
                                        <p className='font-[cd-r] text-[#FFFFFF] text-[16px] p-text'>We invite you to join our team to help us build a Business-in-a-Box™. Let’s Cloud Bss it.</p>
                                        <div className='d-flex sm:justify-start justify-center'>
                                        <div className='d-flex justify-center gap-3 px-2 py-[8px] align-items-center bg-[#fff]  w-[185px] rounded-full'>
                                            See open roles
                                            <svg width="12" height="12" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.28125 9L5.13951 5.14174C5.21779 5.06346 5.21779 4.93654 5.13951 4.85826L1.28125 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>

                                        </div>
                                    </div>
                                    <div className='col-md-5 '>
                                        <Image src="/assets/Figure → Frame-12166.png.webp.png" className="w-full" width={1080} height={1080} alt="no-img" />
                                    </div>
                                    
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

      

         



            <Footer />
        </>
    );
}
