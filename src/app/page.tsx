
import Image from "next/image";
import Header from './components/header';
import Link from "next/link";
import Footer from './components/footer'
import RunBusiness from './components/run-your-business'
import ResourcesForManaging from "./components/resources-for-managing"



import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    return (
        <>
            <div className="bg-[#f3efe7]">
                <Header />
                <section className="overflow-hidden sm:px-20 px-6  sm:pt-[100px] pt-[50px] pb-10">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center px-2 py-2 border rounded-full border-black">
                            <div className="flex">
                                <Image src="/assets/Group 17583.png"
                                    alt="Person 1"

                                    width='50'
                                    height='20'
                                />


                            </div>

                            <div className="ml-3 font-[cd-m] font-[500] no-underline sm:text-[13px] text-[12px] text-[#212833] sm:w-full w-[180px] ">
                                Trusted by 200k+ Companies
                            </div>
                        </div>
                    </div>

                </section>
                <section>
                    <div className="overflow-hidden  sm:px-20 px-6 ">
                        <div className="container-fluid p-0">
                            <div className="row justify-center ">
                                <div className="col-md-8">
                                    <div className="text-center">
                                        <p className="sm:font-[cd-b] font-[cd-b]  sm:text-[50px] text-[28px]   text-[#212833] text-center sm:leading-[48px] leading-[33px]">We free you from manual Accounting, untangle E-commerce, and set up Companies</p>

                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <p className="font-[cd-r] text-center sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px] text-[#212833] ">Let our experts take care of invoices, reports, and taxes while you grow your business</p>
                                </div>
                                <div className="col-md-8 mb-4 pt-3 ">
                                    <div className="text-center">
                                        <div className="flex justify-center gap-2">
                                            <div className="mb-3">
                                                <Link href="/">
                                                    <button className="font-[cd-m] font-[500] text-[14px] text-[#212833]  border-[1px] border-[#212833] px-5 py-[8px] rounded-[30px] text-center hover:bg-[#000] hover:text-[#fff] w-full">
                                                        Login
                                                    </button>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link href="/">
                                                    <button className="font-[cd-m] font-[500] text-[14px] text-[#212833]  border-[1px] border-[#212833] px-5 py-[8px] rounded-[30px] text-center hover:bg-[#000] hover:text-[#fff] w-full">
                                                        Schedule a call
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>


                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>

                </section>



                <section className=" overflow-hidden ">
                    <div className="container-fluid p-0  ">
                        <div className="row justify-center align-items-center  px-0  " >
                            <div className="col-md-12 sm:pt-4 ">
                                <Image src='/assets/trusted.png' alt=".." width='3000' height='3000' className="w-full" />

                            </div>

                            <div className="col-md-3 px-6">
                                <p className="font-[cd-m] font-[500]  sm:text-[20px] leading-[23px] text-[20px] px-6 text-[#212833]  pt-4 p-text">Trusted by Cloud Bss entrepreneurs around the world</p>
                            </div>
                            <div className="col-md-9 mb-5 px-6 ">
                                <div className="row justify-between px-6">
                                    <div className="col-md-3 col-6">
                                        <p className="font-[cd-m] font-[500]  sm:text-[25px] text-[20px] text-[#212833] text-center pt-4 ">89%</p>
                                        <p className="font-[cd-r] font-[500]  text-[16px]  text-[#7C7C7C] text-center leading-[19px] ">of customers recommend Cloud Bss service</p>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <p className="font-[cd-m] font-[500] sm:text-[25px] text-[20px] text-[#212833 text-center pt-4">15,000+</p>
                                        <p className="font-[cd-r] font-[500]   text-[16px] text-[#7C7C7C] text-center leading-[19px] "> Cloud Bss clients worldwide</p>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <p className="font-[cd-m] font-[500] sm:text-[25px] text-[20px] text-[#212833 text-center pt-4">6,555</p>
                                        <p className="font-[cd-r] font-[500]  text-[16px] text-[#7C7C7C] text-center leading-[19px] ">Companies opened in India</p>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <p className="font-[cd-m] font-[500] sm:text-[25px] text-[20px] text-[#212833 text-center pt-4">4,243</p>
                                        <p className="font-[cd-r] font-[500] text-[16px] text-[14px] text-[#7C7C7C] text-center leading-[19px] ">India companies chose cloud bss secretaries</p>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>
                </section>
            </div>

            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6 sm:py-10 py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12">
                            <div>
                                <p className="font-[cd-se] font-[500]  text-[18px] text-[#212833] text-center pt-4">Incorporation</p>
                            </div>
                        </div>
                        <div className="col-md-6 sm:pb-[50px] pb-[20px]">
                            <div className="text-center ">
                                <p className="font-[cd-se]  sm:text-[40px] text-[28px]  text-[#212833] text-center sm:leading-[50px] leading-[31px]">You grow your business, we&apos;ll do the rest</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-center">
                        <div className="col-md-10">
                            <div className="row align-items-center justify-between">
                                <div className="col-md-5 mb-5">
                                    <div className="d-flex justify-content-center">
                                        <Image src='/assets/grow1.png' alt=".." width='3000' height='3000' className="w-full" />
                                    </div>
                                </div>
                                <div className="col-md-5 mb-5">
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[18px] text-[18px] mb-0 p-text '>Get your company registered fast and online, and fast-tracked to a business account. All government fees and must-have services are included, for foreigners and India locals.</p>
                                    <div className="sm:flex pt-4 justify-content-sm-start justify-content-between gap-2 ">

                                        <div className="pt-3">
                                            <button className="font-[cd-m] font-[500] text-[14px] text-[#212833] bg-[#fff] border-[1px] border-[#212833]  py-[10px] rounded-[30px] text-center hover:bg-[#000] hover:text-[#fff] tracking-wider px-4 w-full">
                                                LET’S START IT
                                            </button>
                                        </div>
                                        <div className="pt-3">
                                            <button className="font-[cd-m] font-[500] text-[14px] text-[#212833] bg-[#fff] border-[1px] border-[#212833] px-4 py-[10px] rounded-[30px] text-center hover:bg-[#000] hover:text-[#fff] tracking-wider w-full">LET&apos;S SEE HOW IT WORKS</button>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="d-flex justify-center">
                        <div className="col-md-10">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-md-5 order-md-2 order-1 mb-5">
                                    <Image
                                        src="/assets/brunette-businesswoman-posing 2.png"
                                        alt="Corporate Secretary"
                                        width="3000"
                                        height="3000"
                                        className="w-full"
                                    />

                                </div>

                                {/* Text Content Column */}
                                <div className="col-md-5 order-md-1 order-2 mb-5">


                                    <p className="font-[cd-se] font-[500] text-[#212833] sm:text-[22px] text-[22px] mb-3 p-text">
                                        Corporate Secretary
                                    </p>
                                    <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[18px] mb-0 p-text">
                                        Your compliance in check. We track deadlines, file documents, and answer questions daily. All standard resolutions and routine filings are included in the plan.
                                    </p>
                                    <div className="sm:flex pt-4 gap-2">
                                        <div className="pt-3">
                                            <button className="font-[cd-m] font-[500] text-[14px] text-[#212833] bg-[#fff] border-[1px] border-[#212833]  py-[10px] rounded-[30px] text-center hover:bg-[#000] hover:text-[#fff] tracking-wider px-4 w-full">
                                                READY TO START
                                            </button>

                                        </div>
                                        <div className="pt-3">
                                            <button className="font-[cd-m] font-[500] text-[14px] text-[#212833] bg-[#fff] border-[1px] border-[#212833]  py-[10px] rounded-[30px] text-center hover:bg-[#000] hover:text-[#fff] tracking-wider px-4 w-full">
                                                TELL ME MORE
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-center">
                        <div className="col-md-10">
                            <div className="row align-items-center justify-between">
                                <div className="col-md-5  mb-5">

                                    <Image src='/assets/closeup-economist-using-calculator-while-going-through-bills-taxes-office 2.png' alt=".." width='3000' height='3000' className="w-full" />

                                </div>
                                <div className="col-md-5   mb-5">

                                    <p className='font-[cd-se] font-[500] text-[#212833] text-[22px] mb-3 p-text  '>Accounting and Taxation</p>
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C]  text-[18px] mb-0 p-text '>A personal Chartered Accountant who gets to know your business: files reports, optimises tax, and keeps books tamed. Get solutions for your industry and forget manual labour.</p>
                                    <div className="sm:flex pt-4 gap-2">
                                        <div className="pt-3">
                                            <button className="font-[cd-m] font-[500] text-[14px] text-[#212833] bg-[#fff] border-[1px] border-[#212833]  py-[10px] rounded-[30px] text-center hover:bg-[#000] hover:text-[#fff] tracking-wider px-4 w-full">PERFECT,  LET’S GO</button>
                                        </div>


                                        <div className="pt-3">
                                            <button className="font-[cd-m] font-[500] text-[14px] text-[#212833] bg-[#fff] border-[1px] border-[#212833]  py-[10px] rounded-[30px] text-center hover:bg-[#000] hover:text-[#fff] tracking-wider px-4 w-full">MORE DETAILS</button>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="d-flex justify-center">
                        <div className="col-md-10">
                            <div className="row align-items-center justify-between">
                                <div className="col-md-5 mb-4 order-md-1 order-2">


                                    <p className='font-[cd-se] font-[500] text-[#212833] text-[22px] mb-3 p-text '>Break free from the paperwork</p>
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[18px] mb-0 p-text '>Just dump any documents that need sorting on us: we’ll categorise, tag, and store them. Then we ll create management reports, tax returns, and draft resolutions.</p>
                                    <div className="sm:flex pt-4 gap-2">
                                        <div className="pt-3">
                                            <button className="font-[cd-m] font-[500] text-[14px] text-[#212833] bg-[#fff] border-[1px] border-[#212833]  py-[10px] rounded-[30px] text-center hover:bg-[#000] hover:text-[#fff] tracking-wider px-4 w-full"> READY TO START</button>
                                        </div>


                                        <div className="pt-3">
                                            <button className="font-[cd-m] font-[500] text-[14px] text-[#212833] bg-[#fff] border-[1px] border-[#212833]  py-[10px] rounded-[30px] text-center hover:bg-[#000] hover:text-[#fff] tracking-wider px-4 w-full">TELL ME MORE</button>
                                        </div>

                                    </div>


                                </div>

                                <div className="col-md-5 mb-4 order-md-2 order-1">

                                    <Image src='/assets/aaa.png' alt=".." width='3000' height='3000' className="w-full" />
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </section>

            <section className="bg-[#F3EFE7] sm:px-20 px-6 ">
                <div className="overflow-hidden">
                    <div className="container-fluid p-0">
                        <div className="row pt-[30px] justify-content-center  ">
                            <div className="col-md-8 sm:pt-[40px] pt-[10px] sm:pb-[40px] pb-[10px] ">
                                <p className="font-[cd-se]  no-underline sm:text-[40px] text-[30px]  text-[#212833] text-center sm:leading-[43px] leading-[33px]">Facilitate the day to day of your clients with a complete solution</p>
                            </div>

                        </div>
                        <div className="d-flex justify-center">
                            <div className="col-md-10 mb-5">
                                <div className="row justify-between">
                                    <div className="col-md-4 sm:mb-[40px] mb-[10px]">
                                        <div className="d-flex align-items-center mb-3">
                                            <div>
                                                <svg className="m-0 p-0" width="30" height="30" viewBox="0 0 39 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.0937 36.75C29.0937 38.1024 28.0075 39.2 26.6692 39.2H12.1224C10.784 39.2 9.69789 38.1024 9.69789 36.75C9.69789 35.3976 10.784 34.3 12.1224 34.3H26.6692C28.0075 34.3 29.0937 35.3976 29.0937 36.75ZM9.69789 26.95C9.69789 25.5976 10.784 24.5 12.1224 24.5H19.3958C20.7341 24.5 21.8202 25.5976 21.8202 26.95C21.8202 28.3024 20.7341 29.4 19.3958 29.4H12.1224C10.784 29.4 9.69789 28.3024 9.69789 26.95ZM31.5184 44.1002H7.27352C5.93762 44.1002 4.84904 43.0002 4.84904 41.6502V7.35014C4.84904 6.00019 5.93762 4.90014 7.27352 4.90014H21.8204V12.2501C21.8204 14.9525 23.9952 17.1501 26.6694 17.1501H33.9429V41.6502C33.9429 43.0002 32.8543 44.1002 31.5184 44.1002ZM26.6694 8.36428L30.5147 12.25H26.6694V8.36428ZM38.6026 13.7568C38.4815 13.4603 38.3021 13.1908 38.0815 12.9654L25.959 0.71785C25.7384 0.4949 25.4717 0.3136 25.1783 0.1911C24.885 0.06615 24.5698 0 24.2449 0H7.27346C3.26337 0 0 3.2977 0 7.35V41.65C0 45.7023 3.26337 49 7.27346 49H31.5184C35.5285 49 38.7917 45.7023 38.7917 41.65V14.7C38.7917 14.3717 38.7262 14.0532 38.6026 13.7568Z" fill="#212833" />
                                                </svg>
                                            </div>
                                            <div>
                                                <span className="font-[cd-se] font-[500] text-[25px] p-0 ml-2 text-[#212833]">Billing</span>
                                            </div>
                                        </div>
                                        <p className="font-[cd-r] font-[500] text-[18px] text-[#454545] ">Your customer can create and send invoices from their phone the moment they make a sale.</p>

                                    </div>
                                    <div className="col-md-4 sm:mb-[40px] mb-[10px]">

                                        <div className="d-flex align-items-center mb-3">
                                            <div>
                                                <svg width="30" height="30" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.006 35H4.30217V34.9934L10.9901 19.6874H40.6956L34.006 35ZM6.45244 4.37505H12.7549C13.4743 4.37505 14.1438 4.73819 14.5438 5.3485L16.2924 8.01506C17.491 9.84599 19.4977 10.9376 21.6609 10.9376H34.4125C35.5997 10.9376 36.5644 11.9175 36.5644 13.125V15.3125H10.9901C9.29152 15.3125 7.74939 16.3341 7.06059 17.9113L4.30217 24.2222V6.56255C4.30217 5.35506 5.26681 4.37505 6.45244 4.37505ZM44.3041 17.3031C43.5395 16.1043 42.2619 15.389 40.8649 15.3343V13.125C40.8649 9.50686 37.9726 6.5625 34.4125 6.5625H21.6609C20.9398 6.5625 20.272 6.19937 19.8719 5.58906L18.1233 2.9225C16.9248 1.09156 14.9181 0 12.7549 0H6.45244C2.89553 0 0 2.94437 0 6.5625V35C0 35.0349 0.0193573 35.0635 0.0193573 35.0984C0.0387147 35.8969 0.250032 36.6865 0.692025 37.3843C1.4889 38.6311 2.83746 39.375 4.29894 39.375H34.006C35.703 39.375 37.2483 38.3555 37.9355 36.7763H37.9388L44.6267 21.4658C45.2203 20.1053 45.101 18.55 44.3041 17.3031Z" fill="#212833" />
                                                </svg>

                                            </div>
                                            <div>
                                                <span className="font-[cd-se] font-[500] text-[25px] p-0 ml-2 text-[#212833]">Document Manager</span>
                                            </div>
                                        </div>
                                        <p className="font-[cd-r] font-[500] text-[18px] text-[#454545]">Provide your client with a cloud folder to share documents that are automatically sorted.</p>
                                    </div>
                                    <div className="col-md-4 sm:mb-[40px] mb-[10px]">

                                        <div className="d-flex align-items-center mb-3">
                                            <div>
                                                <svg width="30" height="30" viewBox="0 0 47 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.1817 14.6875C34.1817 13.5272 35.1367 12.5888 36.3181 12.5888C37.4995 12.5888 38.4544 13.5272 38.4544 14.6875C38.4544 15.8478 37.4995 16.7862 36.3181 16.7862C35.1367 16.7862 34.1817 15.8478 34.1817 14.6875ZM8.54534 14.6875C8.54534 13.5272 9.5003 12.5888 10.6817 12.5888C11.8631 12.5888 12.8181 13.5272 12.8181 14.6875C12.8181 15.8478 11.8631 16.7862 10.6817 16.7862C9.5003 16.7862 8.54534 15.8478 8.54534 14.6875ZM4.27286 25.1793H42.7275V4.19736H4.27286V25.1793ZM42.7273 0H4.27273C1.91632 0 0 1.88163 0 4.19573V25.1793C0 27.4934 1.91632 29.375 4.27273 29.375H42.7273C45.0838 29.375 47 27.4934 47 25.1793V4.19573C47 1.88163 45.0838 0 42.7273 0ZM23.4998 12.5888C24.6793 12.5888 25.6363 13.5288 25.6363 14.6875C25.6363 15.8462 24.6793 16.7862 23.4998 16.7862C22.3206 16.7862 21.3635 15.8462 21.3635 14.6875C21.3635 13.5288 22.3206 12.5888 23.4998 12.5888ZM23.5002 20.9819C27.0338 20.9819 29.9092 18.157 29.9092 14.6875C29.9092 11.2164 27.0338 8.39309 23.5002 8.39309C19.9666 8.39309 17.0911 11.2164 17.0911 14.6875C17.0911 18.157 19.9666 20.9819 23.5002 20.9819Z" fill="#212833" />
                                                </svg>

                                            </div>
                                            <div>
                                                <span className="font-[cd-se] font-[500] text-[25px] p-0 ml-2 text-[#212833]">Treasury</span>
                                            </div>
                                        </div>
                                        <p className="font-[cd-r] font-[500] text-[18px]  text-[#454545] ">Your client has all the information in real time on the financial status of their business.</p>
                                    </div>


                                </div>
                                <div className="row justify-between ">
                                    <div className="col-md-4 sm:mb-[40px] mb-[10px] ">
                                        <div className="d-flex align-items-center mb-3  ">
                                            <div className="d-flex align-items-center gap-2">
                                                <svg width="25" height="25" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.05 16.5C28.05 15.587 27.3103 14.85 26.4 14.85H6.6C5.68975 14.85 4.95 15.587 4.95 16.5C4.95 17.413 5.68975 18.15 6.6 18.15H26.4C27.3103 18.15 28.05 17.413 28.05 16.5ZM33 28.05V26.4C33 25.487 32.2603 24.75 31.35 24.75C30.4397 24.75 29.7 25.487 29.7 26.4V28.05C29.7 28.9602 28.9589 29.7 28.05 29.7H26.4C25.4898 29.7 24.75 30.437 24.75 31.35C24.75 32.263 25.4898 33 26.4 33H28.05C30.7794 33 33 30.7794 33 28.05ZM33 6.6V4.95C33 2.22062 30.7794 0 28.05 0H26.4C25.4898 0 24.75 0.737 24.75 1.65C24.75 2.563 25.4898 3.3 26.4 3.3H28.05C28.9589 3.3 29.7 4.03975 29.7 4.95V6.6C29.7 7.513 30.4397 8.25 31.35 8.25C32.2603 8.25 33 7.513 33 6.6ZM8.25 31.35C8.25 30.437 7.51025 29.7 6.6 29.7H4.95C4.04112 29.7 3.3 28.9602 3.3 28.05V26.4C3.3 25.487 2.56025 24.75 1.65 24.75C0.73975 24.75 0 25.487 0 26.4V28.05C0 30.7794 2.22062 33 4.95 33H6.6C7.51025 33 8.25 32.263 8.25 31.35ZM1.65 8.25C0.73975 8.25 0 7.513 0 6.6V4.95C0 2.22062 2.22062 0 4.95 0H6.6C7.51025 0 8.25 0.737 8.25 1.65C8.25 2.563 7.51025 3.3 6.6 3.3H4.95C4.04112 3.3 3.3 4.03975 3.3 4.95V6.6C3.3 7.513 2.56025 8.25 1.65 8.25Z" fill="#212833" />
                                                </svg>
                                                <span className="font-[cd-se] font-[500] text-[25px] p-0 ml-2 text-[#212833] leading-[20px]">
                                                    Digitization of expenses
                                                </span>
                                            </div>
                                        </div>

                                        {/* Description Text */}
                                        <p className="font-[cd-r] font-[500] text-[18px] text-[#454545] mt-2">
                                            If your client generates a deductible expense, with a photo of the ticket
                                            or invoice, CleverScan technology will extract the data.
                                        </p>
                                    </div>

                                    <div className="col-md-4 sm:mb-[40px] mb-[10px]">

                                        <div className="d-flex align-items-center mb-3">
                                            <div>
                                                <svg width="30" height="30" viewBox="0 0 32 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1428 51.2H6.85712C3.0857 51.2 0 48.0591 0 44.2191V6.98092C0 3.14092 3.0857 0 6.85712 0H25.1428C28.9142 0 32 3.14092 32 6.98092V44.2191C32 48.0591 28.9142 51.2 25.1428 51.2ZM6.85712 4.65526C5.59998 4.65526 4.57142 5.70092 4.57142 6.98092V44.2191C4.57142 45.4991 5.59998 46.5447 6.85712 46.5447H25.1428C26.3999 46.5447 27.4285 45.4991 27.4285 44.2191V6.98092C27.4285 5.70092 26.3999 4.65526 25.1428 4.65526H6.85712Z" fill="#212833" />
                                                </svg>


                                            </div>
                                            <div>
                                                <span className="font-[cd-se] font-[500] text-[25px] p-0 ml-2 text-[#212833]">Mobile app</span>
                                            </div>
                                        </div>
                                        <p className="font-[cd-r] font-[500] text-[18px] text-[#454545]">Make it easy for your client to review information and manage their business wherever they are.</p>
                                    </div>


                                    <div className="col-md-4 sm:mb-[40px] mb-[10px]">

                                        <div className="d-flex align-items-center mb-3">
                                            <div>
                                                <svg width="30" height="30" viewBox="0 0 27 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9366 3.42831H18.2581C17.5493 1.44 15.693 0 13.5 0C11.3057 0 9.44932 1.44 8.74059 3.42831H5.06199C2.27749 3.42831 0 5.74338 0 8.57077V30.8575C0 33.6863 2.27749 36 5.06199 36H21.9366C24.7212 36 27 33.6863 27 30.8575V8.57077C27 5.74338 24.7212 3.42831 21.9366 3.42831ZM13.5 3.42831C14.4282 3.42831 15.1873 4.19954 15.1873 5.14246C15.1873 6.08538 14.4282 6.85662 13.5 6.85662C12.5718 6.85662 11.8127 6.08538 11.8127 5.14246C11.8127 4.19954 12.5718 3.42831 13.5 3.42831ZM23.624 30.8575C23.624 31.8005 22.8648 32.5717 21.9366 32.5717H5.06199C4.13382 32.5717 3.37466 31.8005 3.37466 30.8575V8.57077C3.37466 7.62923 4.13382 6.85662 5.06199 6.85662H6.74932V8.57077C6.74932 9.51369 7.50984 10.2863 8.43665 10.2863H18.562C19.4902 10.2863 20.2493 9.51369 20.2493 8.57077V6.85662H21.9366C22.8648 6.85662 23.624 7.62923 23.624 8.57077V30.8575Z" fill="#212833" />
                                                </svg>



                                            </div>
                                            <div>
                                                <span className="font-[cd-se] font-[500] text-[25px] p-0 ml-2 text-[#212833]">Reports</span>
                                            </div>
                                        </div>
                                        <p className="font-[cd-r] font-[500] text-[18px] text-[#454545]" >
                                            Offer your client more useful and accessible advice, which allows them to achieve their goals.</p>
                                    </div>

                                    <div className="w-full sm:pb-[40px] pb-[10px] pt-4 ">
                                        <button className="font-[cd-m] font-[500] sm:text-[22px] text-[16px] text-[#212833]  border-[1px] border-[#212833] px-5 py-[10px] rounded-[30px] text-center hover:bg-[#000] hover:text-[#fff] w-full ">
                                            Schedule a Demo
                                        </button>
                                    </div>



                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </section>

            <section className=" bg-[#fff]">
                <div className="overflow-hidden sm:px-20 px-6 ">
                    <div className="container-fluid p-0">
                        <div className="row justify-content-center">
                            <div className="col-md-12 sm:pt-[60px] pt-[20px] sm:pb-[40px] pb-[20px]">
                                <p className="font-[cd-se]  no-underline sm:text-[40px] text-[30px]  text-[#212833] text-center sm:leading-[50px] leading-[30px] pt-4" >Here’s how Cloud Bss works</p>
                            </div>
                        </div>
                        <div className="d-flex justify-center">
                            <div className="col-md-10">
                                <div className="row justify-between align-items-start">
                                    <div className="col-md-4 mb-4">
                                        <div className="rounded-[10px] ">
                                            <Image src='/assets/image 11.png' alt=".." width='5000' height='5000' className="w-full" />
                                            <p className="font-[cd-se] font-[500] text-[#212833] text-[22px]  pt-4 mb-2">Uploading docs  is easy</p>
                                            <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[18px] mb-3">Snap a phone picture, drag and drop a file from your desktop, or forward an email with docs attached.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="rounded-[10px] ">
                                            <Image src='/assets/image 12.png' alt=".." width='5000' height='5000' className="w-full" />

                                            <p className="font-[cd-se] font-[500] text-[#212833] text-[22px]  pt-4 mb-2">We organise docs  ourselves</p>


                                            <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[18px]  mb-3">We store all docs neatly, match them, tag accounts, and report what’s missing. Everyday.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="rounded-[10px] ">
                                            <Image src='/assets/image 13.png' alt=".." width='5000' height='5000' className="w-full" />

                                            <p className="font-[cd-se] font-[500] text-[#212833] text-[22px]  pt-4 mb-2">Expert advice is only a few clicks away</p>


                                            <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[18px]  mb-3">No question is too complicated. We  are on-call through live chat and respond within 24 hours.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 sm:pt-[50px] pt-[0px]  pb-3">
                            <p className="border border-t border-[#BFBFBF] w-full"></p>
                        </div>
                    </div>
                </div>

            </section>


            <ResourcesForManaging />
            <RunBusiness />
            <Footer />






        </>
    );
}
