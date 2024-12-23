'use client'
import Header from '../components/header';
import Footer from '../components/footer'
import Image from 'next/image';
import Link from 'next/link';


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Home() {
  
    return (
        <>
            <Header />
            <section className='bg-[#fff]'>
                <div className="overflow-hidden sm:px-20 px-6  sm:pt-[100px] pt-[50px] sm:py-[40px] py-[20px]">
                    <div className="container-fluid p-0">
                        <div className="d-flex justify-center">
                            <div className="col-md-6 mb-4">
                                <p className="font-[cd-b] text-[#212833] text-[33px] leading-[35px] p-text text-center sm:text-[45px] sm:leading-[45px]">
                                    How can we help you succeed?  We&apos;ll show you
                                </p>
                                <p className="font-[cd-r] p-text text-center text-[18px]  text-[#212833]   ">Watch a 2-minute overview of how Cloud Bss can help you manage your business and grow.</p>

                                <div className='d-flex justify-center'>   <button className="font-[cd-m] font-[500] text-[14px] text-[#212833]  border-[1px] border-[#212833]  py-[8px] rounded-[30px] text-center bg-[#fff] hover:bg-[#000] hover:text-[#fff] w-[160px]">
                                    Get Started
                                </button></div>
                            </div>

                        </div>
                        <div className="d-flex justify-center">
                            <div className="col-md-8  mb-4">
                            <Image src="/assets/image 23 (6).png"alt=".."
                                className="w-full object-contain"
                                width='8000'
                                height='100'
                            />
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
                                <p className="font-[cd-se] font-[500]  sm:text-[35px] text-[28px] text-[#212833]  sm:leading-[38px] leading-[32px] text-center">Get things done with Cloud Bss</p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 p-0 ">
                        <div className="col-md-4 mb-4 ">
                            <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                <div className="mb-4  align-items-center sm:h-[80px]">
                                    <Image src="/assets/image 33 (1).png" alt="Start secure trading quickly" width="90" height="90" className="object-contain" />
                                </div>
                                <div className="flex-grow-1">
                                    <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]    leading-[20px] sm:h-[20px]">
                                        Your own bookkeeper

                                    </p>
                                    <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0">
                                        You&apos;ll work directly with an Cloud Bss expert to make your business&apos;s bookkeeping more efficient. We make sure you pay the right tax from day one with our complete, online bookkeeping services.

                                    </p>
                                </div>
                                <div className="sm:py-6">
                                        <Link href="/"><button className="font-[cd-m]  text-[16px] text-[#212833] border-[#212833] border-[1px]  rounded-[5px] px-8 py-[8px] rounded-full hover:bg-[#000] hover:text-[#fff]">Learn More</button></Link>
                                    </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 d-flex ">
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
                                <div className="sm:py-6">
                                        <Link href="/"><button className="font-[cd-m]  text-[16px] text-[#212833] border-[#212833] border-[1px]  rounded-[5px] px-8 py-[8px] rounded-full hover:bg-[#000] hover:text-[#fff]">Learn More</button></Link>
                                    </div>

                            </div>
                        </div>
                        <div className="col-md-4 mb-4 ">
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
                                <div className="sm:py-6">
                                        <Link href="/"><button className="font-[cd-m]  text-[16px] text-[#212833] border-[#212833] border-[1px]  rounded-[5px] px-8 py-[8px] rounded-full hover:bg-[#000] hover:text-[#fff]">Learn More</button></Link>
                                    </div>

                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
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
                                <div className="sm:py-6">
                                        <Link href="/"><button className="font-[cd-m]  text-[16px] text-[#212833] border-[#212833] border-[1px]  rounded-[5px] px-8 py-[8px] rounded-full hover:bg-[#000] hover:text-[#fff]">Learn More</button></Link>
                                    </div>

                            </div>
                        </div>
                        <div className="col-md-4 mb-4 ">
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
                                <div className="sm:py-6">
                                        <Link href="/"><button className="font-[cd-m]  text-[16px] text-[#212833] border-[#212833] border-[1px]  rounded-[5px] px-8 py-[8px] rounded-full hover:bg-[#000] hover:text-[#fff]">Learn More</button></Link>
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
                                <div className="sm:flex  items-center gap-4 max-w-lg  pt-4">
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
