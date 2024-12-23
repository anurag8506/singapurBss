'use client'

import Header from '../components/header';

import Footer from '../components/footer'
import Image from 'next/image';

import RunBusiness from '../components/run-your-business'

import FAQ from "../components/faq"

import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    return (
        <>
            <Header />

            <section className='bg-[#FFFCF5]'>
                <div className="overflow-hidden sm:px-20 px-6 py-4 sm:pt-[100px] pt-[50px] ">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center pb-4 ">
                            <div className="col-md-6 mb-4">
                                <div className='col-md-8'>
                                    <p className="font-[cd-se]  no-underline sm:text-[45px] text-[28px]  text-[#212833] sm:leading-[40px] leading-[30px] p-text">Company Secretarial services in  Singapore </p>


                                </div>
                                <div className='col-md-10'>
                                    <p className="font-[cd-r] font-[500] no-underline text-[16px]  text-[#212833] p-text">Focus on your business and outsource corporate secretary expertise to us. Our dedicated experts support your business with tracking tax deadlines, filing documents and staying compliant.</p>
                                    <div className="flex sm:justify-start justify-center   items-center sm:pt-4 pt-2">
                                        <button className="border border-dark  text-[#000] font-[cd-m] sm:w-[180px]  w-[180px]  px-6 py-[8px] rounded-full mb-4 hover:b-[#000] hover:text-[#fff]">
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 mb-4'>
                                <div className='d-flex justify-content-end'>
                                    <div className='col-md-10'>
                                        <Image
                                            src="/assets/aaaa.png"
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
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6  py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2  ">
                                <div className='d-flex justify-center'>
                                    <div className=" px-2 py-[10px] font-[cd-m]  text-[13px] font-[500]  text-[#212833] border border-black rounded-[30px] sm:w-[180px] w-[180px] tracking-wider ">WHAT YOU GET</div>
                                </div>

                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-6 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[25px]  text-[#212833] sm:leading-[40px] leading-[30px] text-center   ">Fully-guided online company registration for foreigners</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row m-0 p-0">
                            <div className="col-md-4 mb-4 d-flex">
                                <div className="bg-white rounded-[20px] p-4 d-flex flex-column h-100">
                                    <div className="mb-3  align-items-center h-[130px]" >
                                        <Image
                                            src="/assets/https___lottiefiles.com_animations_analytics-lWmthBe5AJ (1).gif"
                                            alt="Start secure trading quickly"
                                            width="150"
                                            height="100"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500] text-[#212833] text-[22px] mb-2">
                                            Experienced secretary
                                        </p>
                                        <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                            Get a dedicated digital corporate secretary with 10+ years of experience from day one. Easily contact them through live chat and get a response within 24 hours.

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4 d-flex">
                                <div className="bg-white rounded-[20px] p-4 d-flex flex-column h-100">
                                    <div className="mb-3 align-items-center h-[130px]" >
                                        <Image
                                            src="/assets/https___lottiefiles.com_animations_compliancely-animation-mJEzNlvIyF.gif"
                                            alt="Supportive Experts"
                                            width="150"
                                            height="100"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500] text-[#212833] text-[22px]  mb-2">
                                            Keeping you compliant
                                        </p>
                                        <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                            We make sure your statutory registWhy switch to Cloud Bss?ers are maintained and updated accordingly, ensuring compliance with the authorities as your company evolves.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4 d-flex">
                                <div className="bg-white rounded-[20px] p-4 d-flex flex-column h-100">
                                    <div className="mb-3  align-items-center h-[130px]" >
                                        <Image
                                            src="/assets/https___lottiefiles.com_animations_folder-bZc6sSslC8.gif"
                                            alt="Setup business banking"
                                            width="150"
                                            height="100"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500] text-[#212833] text-[22px]  mb-2">
                                            Documents in one place
                                        </p>
                                        <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                            Never worry about searching for missing documents again. We securely store all your documents in your account, making them easy to sort and access.
                                        </p>
                                    </div>
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
                            <div className="col-md-10">
                                <p className='font-[cd-se] text-[#fff] sm:text-[40px] text-[25px] leading-[20px] sm:leading-[30px]  mb-0 '>Why switch to Cloud Bss?</p>
                                <p className='font-[cd-r] text-[#ABABAB] sm:text-[16px] text-[14px] pt-4 mb-0 '>We take care of the transition from your old company secretary to us so that you do not have to. We gather your documents and get their sign off on their resignation for an efficient and hassle-free process.
                                </p>
                                <div className="sm:flex  sm:justify-start  items-center g  pt-4">
                                    <button className="bg-white text-black font-[14px] py-[10px] rounded-full sm:w-[150px] w-[160px] font-[cd-m]  mb-4 text-[14px] tracking-wider ">
                                        Switch Now
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
            <section className="bg-[#FFFCF5] overflow-hidden sm:px-20 px-6  pt-3 pb-3">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2  ">
                                <div className='d-flex justify-center'>
                                    <div className=" px-2 py-[10px] font-[cd-m]  text-[13px] font-[500]  text-[#212833] border border-black rounded-[30px] sm:w-[180px] w-[180px] tracking-wider ">OUR SERVICES</div>
                                </div>

                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-5 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[25px]  text-[#212833] sm:leading-[40px] leading-[30px] text-center   ">Upgrade your company secretary services</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row m-0 p-0">
                            <div className="col-md-12 mb-4 ">
                                <div className="bg-white rounded-[20px] sm:p-2 p-4 border border-dark rounded-[20px]">
                                    <div className='row align-items-center'>
                                        <div className='col-md-2'>
                                            <div>
                                                <Image
                                                    src="/assets/https___lottiefiles.com_37211-google-icons-forms.gif"
                                                    alt="Start secure trading quickly"
                                                    width="200"
                                                    height="100"

                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-10 mb-4 '>
                                            <div>
                                                <p className="font-[cd-se] font-[500] text-[#212833] text-[22px]  mb-2">
                                                    Annual return filing
                                                </p>
                                                <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                                    Annual return (AR) – a set of documents that indicate your company’s financial health and status. All Singapore-incorporated companies must file ARs with ACRA within a month after the shareholders signed the resolution on the financial statementsand no later than 7 months after the FYE.

                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-12 mb-4 ">
                                <div className="bg-white rounded-[20px] sm:p-2 p-4 border border-dark rounded-[20px]">
                                    <div className='row align-items-center'>
                                        <div className='col-md-2 mb-4'>
                                            <div>
                                                <Image
                                                    src="/assets/https___lottiefiles.com_77359-refresh-update-reload-restart-sync-load.gif"
                                                    alt="Start secure trading quickly"
                                                    width="120"
                                                    height="100"

                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-10 mb-4 '>
                                            <div>
                                                <p className="font-[cd-se] font-[500] text-[#212833] text-[22px]  mb-2">
                                                    Transfer of shares in  Singapore 
                                                </p>
                                                <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                                    Transfer of shares in a private limited company — a procedure when a shareholder sells all of his shares or some of them to a company or an individual. It must happen in accordance with the company’s Constitution and the legal requirements.

                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-12 mb-4 ">
                                <div className="bg-white rounded-[20px] sm:p-2 p-4 border border-dark rounded-[20px]">
                                    <div className='row align-items-center'>
                                        <div className='col-md-2 mb-4'>
                                            <div>
                                                <Image
                                                    src="/assets/https___lottiefiles.com_68269-pie-chart-of-internet-users.gif"
                                                    alt="Start secure trading quickly"
                                                    width="200"
                                                    height="100"

                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-10 mb-4 '>
                                            <div>
                                                <p className="font-[cd-se] font-[500] text-[#212833] text-[22px]  mb-2">
                                                    Allotment of shares in  Singapore 
                                                </p>
                                                <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                                    According to Companies Act, Allotment of shares is a procedure of creating and issuing shares, either for new or existing shareholders. To initiate the process, the directors must get the existing shareholders’ approval at a general meeting.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>


                        </div>
                        <div className="col-md-12 ">
                            <div className="text-center pb-2 pt-4 ">

                                <div className="row justify-center  ">
                                    <div className="col-md-6 ">
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[25px]  text-[#212833] sm:leading-[40px] leading-[30px] sm:text-center text-left ">Switch to a corporate secretary who always answers</p>
                                        <p className='text-[16px] sm:text-center text-left'>We’ve made sure the transition to a new company secretary is seamless. We get in touch with your company secretary, take over the documents and sign their resignation. Even if they don’t respond, we can carry out the procedure without them and ensure you don’t lose any time.</p>
                                    </div>

                                </div>

                                <button className="bg-[#212833] text-white font-medium sm:w-[180px]  w-[180px]  px-6 py-[10px] rounded-full mb-4 tracking-wider">
                                    Get Started
                                </button>

                            </div>
                        </div>

                    </div>


                </div>
            </section>

            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6  py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2  ">
                                <div className='d-flex justify-center sm:pb-2 pb-3'>
                                    <div className=" px-2 py-[10px] font-[cd-m]  text-[13px] font-[500]  text-[#212833] border border-black rounded-[30px] sm:w-[180px] w-[180px] tracking-wider ">HOW IT WORKS</div>
                                </div>

                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-5 sm:pt-3   ">
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[25px]  text-[#212833] sm:leading-[40px] leading-[30px] text-center   ">What are corporate secretarial services?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-center'>
                        <div className='col-md-10 mb-4'>
                            <div className='row align-items-center justify-between'>
                                <div className='col-md-5 mb-4'>     <Image src='/assets/Rectangle 4607.png' alt=".." width='3000' height='3000' className="w-full" /></div>
                                <div className='col-md-5 mb-4'>
                                    <p className='text-[22px] font-[cd-se] text-[#000] leading-[20px]'>The importance of a corporate secretary</p>
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[13px] text-[16px] mb-0 '>Corporate secretarial services ensure compliance with legal and regulatory obligations, helping businesses avoid penalties and legal risks. Company secretaries handle important administrative tasks such as maintaining statutory registers, filing annual returns, and organising board meetings, ensuring that the company operates within the bounds of the law.
                                    </p>
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0 pt-2 '>Overall, corporate secretarial services are essential for ensuring smooth operations, regulatory compliance, and effective corporate governance.</p>

                                </div>
                            </div>
                            <div className='row align-items-center justify-between'>
                                <div className='col-md-5 mb-4 order-md-1 order-2'>
                                <p className='text-[22px] font-[cd-se] text-[#000] leading-[20px] '>Why outsource your corporate secretarial services?</p>
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[16px]  mb-0 '>Outsourcing corporate secretarial services gives business owners peace of mind and more time to focus on their core activities, all while remaining compliant with legal and regulatory requirements. With Cloud Bss, you will get tailored advice from onshore experts.

                                    </p>
                                </div>
                                <div className='col-md-5 mb-4 order-md-2 order-1'>
                                <Image src='/assets/Rectangle 4608.png' alt=".." width='3000' height='3000' className="w-full" />
                                </div>
                                </div>

                        </div>
                    </div>
                
                </div>
            </section>



<RunBusiness />
<FAQ />



            <Footer />
        </>
    );
}
