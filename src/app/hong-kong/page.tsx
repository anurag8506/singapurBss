
import Image from "next/image";
import Header from './components/header';
import Link from "next/link";
import Footer from './components/footer'

import "../globals.css";

import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    return (
        <>
            <div className="bg-[#f3efe7]">
                <Header />
                <section className="overflow-hidden sm:px-20 px-6  sm:pt-[100px] pt-[50px] pb-5">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center px-4 py-2 border rounded-full border-black">
                            <div className="flex-space-x-2">
                                <Image src="/assets/Group 17583.png"  alt="Person 1" width='50' height='20'/>
                            </div>

                            <div className="ml-3 font-[cd-m] font-[500] no-underline sm:text-[13px] text-[#000]">
                                Trusted by 200k+ Companies
                            </div>
                        </div>
                    </div>

                </section>
                <section>
                    <div className="overflow-hidden sm:px-20 px-6 ">
                        <div className="container-fluid p-0">
                            <div className="row justify-center ">
                                <div className="col-md-8">
                                    <div className="text-center">
                                        <p className="font-[cd-b]  no-underline sm:text-[45px] text-[28px] text-[#000] text-center sm:leading-[46px] leading-[31px]">Seamless Incorporation and Accounting Experts for Business Growth</p>

                                    </div>
                                </div>
                                <div className="col-md-8 mb-4 pt-4 ">
                                    <div className="text-center">
                                        <div className="flex justify-center  gap-2">
                                            <div className="mb-3">
                                            <Link href="#">
                                            <button className="font-[cd-m] font-[500] text-[14px] text-[#212833]  border-[1px] border-[#212833] px-5 py-[8px] rounded-[30px] text-center bg-[#fff] hover:bg-[#000] hover:text-[#fff] w-full">
                                                Login
                                            </button>
                                        </Link>
                                            </div>
                                            <div>
                                            <Link href="#">
                                            <button className="font-[cd-m] font-[500] text-[14px] text-[#212833]  border-[1px] border-[#212833] px-5 py-[8px] rounded-[30px] text-center  bg-[#fff]  hover:bg-[#000] hover:text-[#fff] w-full">
                                                Schedule a call
                                            </button>
                                        </Link>
                                                </div>
                                        </div>
                                    
                                      
                                    </div>
                                </div>
                                <div className="col-md-8">

                                    <Image src='/assets/image 23 (3).png' alt=".." width='3000' height='3000' className="w-full rounded-[10px]" />



                                </div>

                            </div>
                        </div>

                    </div>

                </section>
            </div>

            <section className="bg-[#f3efe7] overflow-hidden sm:px-20 px-6 sm:py-10 py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-6 pb-4">
                            <div className="text-center  ">
                                <p className="text-[#353535] font-[cd-r] text-[16px]">WHAT WE DO</p>
                                <p className="font-[cd-se]  sm:text-[35px] text-[28px]  text-[#000] text-center sm:leading-[38px] leading-[31px]">Customized Services for Every Stage of Your Business</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="bg-white p-4 rounded-[20px] h-full flex flex-col">
                                <p className="text-[#000] font-[cd-m] text-[22px] leading-[25px] m-0 p-0">
                                    Company incorporation <p className="text-[#0073FD] font-[cd-m]">from HK$ 5,800</p>
                                </p>
                                <p className="text-[#616161] font-[cd-r] text-[16px] pb-3 leading-[16px]">
                                    Start your business the right way with hassle-free incorporation, help opening a bank account and a registered local address.
                                </p>


                                <Link href="#" className="w-full no-underline">
                                    <button className="w-full py-[8px] px-6 rounded-full font-[cd-m] text-[16px] border-2 border-[#0073FD] text-blue-500 hover:bg-[#0073FD] hover:text-white hover:border-[#0073FD] focus:outline-none flex items-center justify-center gap-2 group">
                                        Go to Incorporation
                                        <svg
                                            width="22"
                                            height="16"
                                            viewBox="0 0 22 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-blue-500 group-hover:fill-white transition-all duration-300"
                                        >
                                            <path
                                                d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0V9Z"
                                            />
                                        </svg>
                                    </button>
                                </Link>





                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="bg-white p-4 rounded-[20px] h-full flex flex-col">
                                <p className="text-[#000] font-[cd-m] text-[22px] leading-[25px] m-0 p-0">
                                    Accounting and audit  <p className="text-[#0073FD] font-[cd-m]">from HK$ 317/m</p>
                                </p>
                                <p className="text-[#616161] font-[cd-r] text-[16px] pb-3 leading-[16px]">
                                    Meet deadlines and get guidance from a dedicated accountant. Bookkeeping is included in your monthly plan.
                                </p>


                                <Link href="#" className="w-full no-underline">
                                    <button className="w-full py-[8px] px-6 rounded-full font-[cd-m] text-[16px] border-2 border-[#0073FD] text-blue-500 hover:bg-[#0073FD] hover:text-white hover:border-[#0073FD] focus:outline-none flex items-center justify-center gap-2 group">
                                        Go to Accounting
                                        <svg
                                            width="22"
                                            height="16"
                                            viewBox="0 0 22 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-blue-500 group-hover:fill-white transition-all duration-300"
                                        >
                                            <path
                                                d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0V9Z"
                                            />
                                        </svg>
                                    </button>
                                </Link>





                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="bg-white p-4 rounded-[20px] h-full flex flex-col">
                                <p className="text-[#000] font-[cd-m] text-[22px] leading-[25px] m-0 p-0">
                                    Corporate secretary <p className="text-[#0073FD]">from HK$ 1,200 </p>
                                </p>
                                <p className="text-[#616161] font-[cd-r] text-[16px] pb-3 leading-[16px]">
                                    Our experts will track deadlines, file documents and ensure the company and its operations run in accordance with the law.
                                </p>


                                <Link href="#" className="w-full no-underline">
                                    <button className="w-full py-[8px] px-6 rounded-full font-[cd-m] text-[16px] border-2 border-[#0073FD] text-blue-500 hover:bg-[#0073FD] hover:text-white hover:border-[#0073FD] focus:outline-none flex items-center justify-center gap-2 group">
                                        Go to Secretary
                                        <svg
                                            width="22"
                                            height="16"
                                            viewBox="0 0 22 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-blue-500 group-hover:fill-white transition-all duration-300"
                                        >
                                            <path
                                                d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0V9Z"
                                            />
                                        </svg>
                                    </button>
                                </Link>





                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6 sm:py-10 py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-8 sm:pb-4">
                            <div className="text-center ">
                                <p className="text-[#353535] font-[cd-r] text-[16px]">WHO WE HELP</p>
                                <p className="font-[cd-se]  sm:text-[35px] text-[30px]  text-[#000] text-center sm:leading-[38px] leading-[35px]">Founders Eager to Ditch Financial Admin with Streamlined Solutions</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="col-md-10 pt-4">
                            <div className="row align-items-center justify-between">
                                <div className="col-md-5 mb-4">
                                    <Image
                                        src="/assets/group-people-working-out-business-plan-office 2 (1).png"
                                        className="w-full"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                    />

                                </div>
                                <div className="col-md-5 mb-4">
                                    <div className="" >
                                    
                                        <p className="text-[22px] text-[#000] font-[cd-m]  leading-[25px] ">
                                            <span className="text-center sm:text-left">Local Founders Seeking to Reclaim Weekends by Automating Financial Admin</span>
                                        </p>

                                    </div>
                                </div>

                            </div>
                            <div className="row align-items-center justify-between">
                                <div className="col-md-5 order-md-2 order-1 mb-4">
                                    <Image src="/assets/brunette-businesswoman-posing 2 (1).png" className="w-full" width={1080} height={1080} alt="no-img"
                                    />
                                </div>
                                <div className="col-md-5 mb-4 order-md-1 order-2">
                                    <p className="text-[22px] text-[#000] font-[cd-m]  leading-[25px] ">Ideal for Foreign Entrepreneurs Seeking a Tax-Friendly Base for Expansion</p>
                                </div>
                            </div>
                            <div className="row align-items-center justify-between">
                                <div className="col-md-5 mb-4 ">
                                    <Image src="/assets/group-people-working-out-business-plan-office 3.png" className="w-full" width={1080} height={1080} alt="no-img"
                                    />
                                </div>
                                <div className="col-md-5 ">
                                    <p className="text-[22px] text-[#000] font-[cd-m]  leading-[25px] ">Perfect for Chinese Companies Building Relationships with English-Speaking Clients</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F3EFE7] sm:px-20 px-6 ">
                <div className="overflow-hidden">
                    <div className="container-fluid p-0">
                        <div className="row  sm:pt-5 pt-4 sm:pb-5 pb-4 justify-content-center  ">
                            <div className="col-md-6">
                                <p className="font-[cd-r]   text-[16px]  text-[#353535] text-center">WHY CHOOSE US</p>
                                <p className="font-[cd-se]  sm:text-[40px] text-[28px]  text-[#000] text-center sm:leading-[40px] leading-[31px]">Your Partners, From Formation to Filing and Beyond</p>
                            </div>

                        </div>
                        <div className="d-flex justify-center sm:pb-5">
                            <div className="col-md-10">
                                <div className="row justify-between">
                                    <div className="col-md-6">
                                    <Image
                                    src="/assets/image 24 (1).png"
                                    alt="Person 1"

                                    width='5550'
                                    height='550'
                                    className="w-full"

                                />
                                <div className="pt-4 pb-4">
                                  <div   className="sm:h-[180] ">
                                <p className="font-[cd-se] text-[22px] text-[#000] leading-[24px]">Dedicated in-house  team of experts</p>
                                <p className="font-[cd-r] text-[16px]">All of our experts advising you are full-time company employees. We don&apos;t use call centres, out staffing or outsourcing. Our team helps you set up a company, pay the right tax, track deadlines and manage filing.</p>

                                  </div>
                                <Link href='#'>
                                            <button className="font-[cd-m] font-[500] text-[14px] text-[#212833]  border-[1px] border-[#212833] px-5 py-[8px] rounded-[30px] text-center  hover:bg-[#000] hover:text-[#fff] ">Schedule a call</button>
                                        </Link>

                                </div>

                                    </div>
                                    <div className="col-md-6">
                                    <Image
                                    src="/assets/image 25 (1).png"
                                    alt="Person 1"

                                    width='5550'
                                    height='550'
                                    className="w-full"

                                />
                                <div className="pt-4 pb-4 ">
                                    <div className="sm:h-[180] ">
                                <p className="font-[cd-se] text-[22px] text-[#000] leading-[24px]">Smart software made for business owners</p>
                                <p className="font-[cd-r] text-[16px]">Our success formula: top-notch accountants combined with user-friendly tools, providing the clarity needed for informed business decisions.</p>
                                <p  className="font-[cd-r] text-[16px]">
                                Our proprietary software streamlines bookkeeping, taxes, compliance, and more. It&apos;s your financial data, all in one place..</p>

                                    </div>
                                <Link href='#'>
                                            <button className="font-[cd-m] font-[500] text-[14px] text-[#212833]  border-[1px] border-[#212833] px-5 py-[8px] rounded-[30px] text-center  hover:bg-[#000] hover:text-[#fff] ">Schedule a call</button>
                                        </Link>

                                </div>

                                    </div>


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
