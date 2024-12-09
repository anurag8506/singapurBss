'use client'

import Header from '../components/header';
import { useState } from "react";
import Footer from '../components/footer'
import Image from 'next/image';

import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {

    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

 

    return (
        <>
            <Header />

            <section>
                <div className="overflow-hidden sm:px-20 px-6  pt-32 pb-10">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center pb-20 pt-4">
                            <div className="col-md-6 mb-4">
                                <div className='col-md-8'>
                                    <p className=" font-[cd-b]  font-[500] no-underline sm:text-[50px] text-[29px] text-[#000]   sm:leading-[50px] leading-[30px]">Company Secretarial services in India</p>


                                </div>
                                <div className='col-md-10'>
                                    <p className="font-[cd-r] font-[500] no-underline sm:text-[16px] text-[14px]  text-[#000] ">Focus on your business and outsource corporate secretary expertise to us. Our dedicated experts support your business with tracking tax deadlines, filing documents and staying compliant.</p>
                                    <div className="flex sm:justify-start justify-center   items-center sm:pt-4 pt-2">
                                        <button className="bg-[#212833] text-white font-medium sm:w-[180px]  w-[180px]  px-6 py-3 rounded-full mb-4">
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
                        <div className="row sm:pt-3 pb-3">
                            <div className="col-md-3 mb-4  flex flex-col items-center">
                                <div className="w-full  flex items-center justify-center overflow-hidden col-md-4">
                                    <Image
                                        src="/assets/image 23 (2).png"
                                        alt=".."
                                        className="w-[180px]  object-contain"
                                        width='8000'
                                        height='100'
                                    />
                                </div>
                                <p className="font-medium sm:text-[13px] text-black pt-3 text-center col-md-6">
                                    Registered filing agent FA20170653
                                </p>
                            </div>
                            <div className="col-md-3 mb-4  flex flex-col items-center">
                                <div className="w-full  flex items-center justify-center overflow-hidden col-md-4">
                                    <Image
                                        src="/assets/image 24.png"
                                        alt=".."
                                        className="w-[180px]  object-contain"
                                        width='8000'
                                        height='100'
                                    />
                                </div>
                                <p className="font-medium sm:text-[13px] text-black pt-3 text-center col-md-6">
                                    Our accountants are certified by ISCA
                                </p>
                            </div>
                            <div className="col-md-3 mb-4 flex flex-col items-center">
                                <div className="w-full  flex items-center justify-center overflow-hidden col-md-4">
                                    <Image
                                        src="/assets/image 25.png"
                                        alt=".."
                                        className="w-[180px]  object-contain"
                                        width='8000'
                                        height='100'
                                    />
                                </div>
                                <p className="font-medium sm:text-[13px] text-black pt-3 text-center col-md-6">
                                    Employment Agency License No. 22S1231
                                </p>
                            </div>
                            <div className="col-md-3 mb-4  flex flex-col items-center">
                                <div className="w-full  flex items-center justify-center overflow-hidden col-md-4">
                                    <Image
                                        src="/assets/image 26.png"
                                        alt=".."
                                        className="w-[180px]  object-contain"
                                        width='8000'
                                        height='100'
                                    />
                                </div>
                                <p className="font-medium sm:text-[13px] text-black pt-3 text-center col-md-6">
                                    Registered filing agent FA20170653
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6 sm:py-20 py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2 pt-4 ">
                                <button className=" px-2 py-[15px] font-[cd-m]  text-[13px] font-[500] text-[#000] border border-black rounded-[30px] sm:w-[180px] w-[180px] ">WHAT YOU GET</button>
                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-6 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-m] font-[500]  sm:text-[40px] text-[25px]  text-[#000]  sm:leading-[40px] leading-[30px] text-center   ">Fully-guided online company registration for foreigners</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row m-0 p-0">
                            <div className="col-md-4 mb-4 d-flex">
                                <div className="bg-white rounded-[20px] p-4 d-flex flex-column h-100">
                                    <div className="mb-3  align-items-center" style={{ height: "130px" }}>
                                        <Image
                                            src="/assets/https___lottiefiles.com_animations_analytics-lWmthBe5AJ (1).gif"
                                            alt="Start secure trading quickly"
                                            width="150"
                                            height="100"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-m] font-[500] text-[#000] sm:text-[18px] text-[16px] mb-2">
                                            Experienced secretary
                                        </p>
                                        <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[13px] mb-0">
                                            Get a dedicated digital corporate secretary with 10+ years of experience from day one. Easily contact them through live chat and get a response within 24 hours.

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4 d-flex">
                                <div className="bg-white rounded-[20px] p-4 d-flex flex-column h-100">
                                    <div className="mb-3 align-items-center" style={{ height: "130px" }}>
                                        <Image
                                            src="/assets/https___lottiefiles.com_animations_compliancely-animation-mJEzNlvIyF.gif"
                                            alt="Supportive Experts"
                                            width="150"
                                            height="100"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-m] font-[500] text-[#000] sm:text-[18px] text-[16px] mb-2">
                                            Keeping you compliant
                                        </p>
                                        <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[13px] mb-0">
                                            We make sure your statutory registers are maintained and updated accordingly, ensuring compliance with the authorities as your company evolves.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4 d-flex">
                                <div className="bg-white rounded-[20px] p-4 d-flex flex-column h-100">
                                    <div className="mb-3  align-items-center" style={{ height: "130px" }}>
                                        <Image
                                            src="/assets/https___lottiefiles.com_animations_folder-bZc6sSslC8.gif"
                                            alt="Setup business banking"
                                            width="150"
                                            height="100"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-m] font-[500] text-[#000] sm:text-[18px] text-[16px] mb-2">
                                            Documents in one place
                                        </p>
                                        <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[13px] mb-0">
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
                                <p className='font-[cd-b] text-[#fff] sm:text-[40px] text-[25px] leading-[20px] sm:leading-[30px]  mb-0 '>Why switch to Cloud Bss?</p>
                                <p className='font-[cd-r] text-[#ABABAB] sm:text-[16px] text-[14px] pt-4 mb-0 '>We take care of the transition from your old company secretary to us so that you do not have to. We gather your documents and get their sign off on their resignation for an efficient and hassle-free process.
                                </p>
                                <div className="sm:flex  sm:justify-start  items-center g  pt-4">
                                    <button className="bg-white text-black font-medium  sm:py-3 py-[13px] rounded-full sm:w-[150px] w-[160px]  mb-4 text-[14px] ">
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
            <section className="bg-[#FFFCF5] overflow-hidden sm:px-20 px-6 sm:py-20 py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2 pt-4 ">
                                <button className=" px-2 py-[15px] font-[cd-m]  text-[13px] font-[500] text-[#000] border border-black rounded-[30px] sm:w-[160px] w-[160px] ">OUR SERVICES</button>
                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-5 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-m] font-[500]  sm:text-[40px] text-[25px]  text-[#000]  sm:leading-[40px] leading-[30px] text-center   ">Upgrade your company secretary services</p>
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
                                        <p className="font-[cd-m] font-[500] text-[#000] sm:text-[18px] text-[16px] mb-2">
                                        Annual return filing
                                        </p>
                                        <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[13px] mb-0">
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
                                        <p className="font-[cd-m] font-[500] text-[#000] sm:text-[18px] text-[16px] mb-2">
                                        Transfer of shares in India
                                        </p>
                                        <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[13px] mb-0">
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
                                        <p className="font-[cd-m] font-[500] text-[#000] sm:text-[18px] text-[16px] mb-2">
                                        Allotment of shares in India
                                        </p>
                                        <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[13px] mb-0">
                                        According to Companies Act, Allotment of shares is a procedure of creating and issuing shares, either for new or existing shareholders. To initiate the process, the directors must get the existing shareholders’ approval at a general meeting.
                                        </p>
                                    </div>
                                        </div>
                                    </div>
                                   
                                  
                                </div>
                            </div>
                            

                        </div>
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2 pt-4 ">

                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-6 sm:pt-3 pt-5  ">
                                        <p className="font-[cd-m] font-[500]  sm:text-[40px] text-[25px]  text-[#000]  sm:leading-[40px] leading-[30px] sm:text-center text-left ">Switch to a corporate secretary who always answers</p>
                                        <p className='text-[13px] sm:text-center text-left'>We’ve made sure the transition to a new company secretary is seamless. We get in touch with your company secretary, take over the documents and sign their resignation. Even if they don’t respond, we can carry out the procedure without them and ensure you don’t lose any time.</p>
                                    </div>
                                    
                                </div>
                                
                                        <button className="bg-[#212833] text-white font-medium sm:w-[180px]  w-[180px]  px-6 py-3 rounded-full mb-4">
                                            Get Started
                                        </button>
                                 
                            </div>
                        </div>

                    </div>


                </div>
            </section>
            
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6 sm:py-20 py-10">
                <div className="container-fluid p-0">
                    
                    <div className="row justify-center">
                    <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2 pt-4 ">
                                <button className=" px-2 py-[15px] font-[cd-m]  text-[13px] font-[500] text-[#000] border border-black rounded-[30px] sm:w-[160px] w-[160px] ">HOW IT WORKS</button>
                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-5 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-m] font-[500]  sm:text-[40px] text-[25px]  text-[#000]  sm:leading-[40px] leading-[30px] text-center   ">What are corporate secretarial services?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4">
                            <div className="d-flex justify-content-start">
                                <div className="col-md-10">
                                    <Image src='/assets/Rectangle 4607.png' alt=".." width='3000' height='3000' className="w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="d-flex justify-content-start">
                                <div className="col-md-10">
                                    <p className='text-[16px] font-[cd-m] text-[#000]'>The importance of a corporate secretary</p>
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[13px] text-[16px] mb-0 '>Corporate secretarial services ensure compliance with legal and regulatory obligations, helping businesses avoid penalties and legal risks. Company secretaries handle important administrative tasks such as maintaining statutory registers, filing annual returns, and organising board meetings, ensuring that the company operates within the bounds of the law.
</p>
<p  className='font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[13px] text-[16px] mb-0 pt-2 '>Overall, corporate secretarial services are essential for ensuring smooth operations, regulatory compliance, and effective corporate governance.</p>
                              
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="d-flex justify-content-start">
                            <div className="col-md-10">
                                    <p className='text-[16px] font-[cd-m] text-[#000]'>Why outsource your corporate secretarial services?</p>
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[13px] text-[16px] mb-0 '>Outsourcing corporate secretarial services gives business owners peace of mind and more time to focus on their core activities, all while remaining compliant with legal and regulatory requirements. With Cloud Bss, you will get tailored advice from onshore experts.

</p>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="d-flex justify-content-start">
                                <div className="col-md-10">
                                    <Image src='/assets/Rectangle 4608.png' alt=".." width='3000' height='3000' className="w-full" />
                                </div>
                            </div>
                        </div>
                      

                    </div>
                </div>
            </section>
        
         
            <section className="bg-[#F3EFE7] sm:px-20 px-6 pb-20 ">
                <div className="overflow-hidden">
                    <div className="row justify-center">
                        <div className="col-md-6">
                            <p className="font-[cd-m] font-[500] sm:text-[40px] text-[25px] text-[#000] text-center sm:leading-[50px] leading-[30px] pt-5">Frequently Asked Questions on Company Registration</p>
                            <div className="d-flex justify-center">
                                <button className="text-[#000] underline mt-2 text-center font-[cd-r] text-[14px]">More FAQs</button>

                            </div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-md-12 mb-4">
                            {/* FAQs */}
                            <div >

                                <div>
                                    <div
                                        className="flex justify-between items-center  cursor-pointer "
                                        onClick={() => toggleFAQ(1)}
                                    >
                                        <p className="font-[cd-m] text-[#000] text-[16px]">Where can I register my company?</p>
                                        <span className="font-[cd-m] text-[#000] text-[16px]">{activeFAQ === 1 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 1 && (
                                        <p className="text-[#1B202C] font-[cd-r] text-[13px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div
                                        className="flex justify-between items-center  cursor-pointer "
                                        onClick={() => toggleFAQ(2)}
                                    >
                                        <p className="font-[cd-m] text-[#000] text-[16px]">Where can I register my company?</p>
                                        <span className="font-[cd-m] text-[#000] text-[16px]">{activeFAQ === 2 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 2 && (
                                        <p className="text-[#1B202C] font-[cd-r] text-[13px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div
                                        className="flex justify-between items-center  cursor-pointer "
                                        onClick={() => toggleFAQ(3)}
                                    >
                                        <p className="font-[cd-m] text-[#000] text-[16px]">Where can I register my company?</p>
                                        <span className="font-[cd-m] text-[#000] text-[16px]">{activeFAQ === 3 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 3 && (
                                        <p className="text-[#1B202C] font-[cd-r] text-[13px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div
                                        className="flex justify-between items-center  cursor-pointer "
                                        onClick={() => toggleFAQ(4)}
                                    >
                                        <p className="font-[cd-m] text-[#000] text-[16px]">Where can I register my company?</p>
                                        <span className="font-[cd-m] text-[#000] text-[16px]">{activeFAQ === 4 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 4 && (
                                        <p className="text-[#1B202C] font-[cd-r] text-[13px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div
                                        className="flex justify-between items-center  cursor-pointer "
                                        onClick={() => toggleFAQ(5)}
                                    >
                                        <p className="font-[cd-m] text-[#000] text-[16px]">Where can I register my company?</p>
                                        <span className="font-[cd-m] text-[#000] text-[16px]">{activeFAQ === 5 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 5 && (
                                        <p className="text-[#1B202C] font-[cd-r] text-[13px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div
                                        className="flex justify-between items-center  cursor-pointer "
                                        onClick={() => toggleFAQ(6)}
                                    >
                                        <p className="font-[cd-m] text-[#000] text-[16px]">Where can I register my company?</p>
                                        <span className="font-[cd-m] text-[#000] text-[16px]">{activeFAQ === 6 ? "-" : "+"}</span>
                                    </div>
                                    {activeFAQ === 6 && (
                                        <p className="text-[#1B202C] font-[cd-r] text-[13px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                                        </p>
                                    )}
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
                                <div className="sm:flex justify-center items-center gap-4 max-w-lg mx-auto pt-4">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full px-4 py-2 rounded-full text-black border  bg-transparent mb-4  text-white "
                                    />
                                    <button className="bg-white text-black font-medium px-6 py-2 rounded-full sm:w-[140px] w-full mb-4 ">
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
