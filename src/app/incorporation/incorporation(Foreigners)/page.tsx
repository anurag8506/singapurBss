'use client'

import Header from '../../components/header';
import { useState } from "react";
import Footer from '../../components/footer'
import Image from 'next/image';

import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    const [selectedButton, setSelectedButton] = useState('btn1');
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setActiveFAQ(activeFAQ === index ? null : index);
      };

    const renderSelectedPart = () => {
        if (selectedButton === 'btn1') {
            return (
                <section>
                    <div className="overflow-hidden sm:px-20 px-6  ">
                        <div className="container-fluid p-0">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-4 p-0 m-0">
                                    <div className="border border-dark  bg-[#FFFCF5]  text-black rounded-[20px] ">
                                        <div className="row m-0 p-0 align-items-center" >
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-12">
                                                    <div className="sm:p-5 p-3 pt-4">
                                                        <p className='font-[cd-m] font-[500]  text-[#212833] text-[20px] mb-2'>Joint venture</p>
                                                        <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[14px] mb-0 '>A foreign entity will elect a local partner in  Singapore  with whom it wishes to enter into a joint venture to operate its business in  Singapore . A Letter of Intent or Memorandum of Understanding (MOU) is signed between the foreign entity and the local partner, which will state the joint venture agreement basis. The joint venture agreement contains all the business terms, and it must be consistent with regional and international law. 
                                                        </p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="d-flex justify-content-end ">
                                                    <div className="col-md-6">
                                                        <Image src='/assets/Group 17648.png' alt=".." width='15000' height='3000' className="w-full rounded" />

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        } else if (selectedButton === 'btn2') {
            return (
                <section>
                    <div className="overflow-hidden sm:px-20 px-6 ">
                        <div className="container-fluid p-0">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-4 p-0 m-0">
                                    <div className="border border-dark  bg-[#FFFCF5]  text-black rounded-[20px] ">
                                        <div className="row m-0 p-0 align-items-center" >
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-12">
                                                    <div className="sm:p-5 p-3 pt-4">
                                                        <p className='font-[cd-m] font-[500]  text-[#212833] text-[20px] mb-2'>Wholly-owned subsidiary</p>
                                                        <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[14px] mb-0 '>A foreign national/company can invest 100% FDI in an  Singapore n company through the automatic route for the purpose of registering foreign in  Singapore . When a foreign entity invests 100% FDI in an  Singapore n company, the  Singapore n company will become a wholly-owned subsidiary of the foreign entity/company.
                                                        </p>
                                                        <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[14px] mb-0 pt-2'>A foreign company can register a liaison office, project office or branch office in  Singapore  to carry on its operations in  Singapore . However, opening these offices requires RBI or government approval. </p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="d-flex justify-content-end ">
                                                    <div className="col-md-6">
                                                        <Image src='/assets/Group 17649 (1).png' alt=".." width='15000' height='3000' className="w-full rounded" />

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        } else if (selectedButton === 'btn3') {
            return (
                <section>
                    <div className="overflow-hidden sm:px-20 px-6 ">
                        <div className="container-fluid p-0">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-4 p-0 m-0">
                                    <div className="border border-dark  bg-[#FFFCF5]  text-black rounded-[20px] ">
                                        <div className="row m-0 p-0 align-items-center" >
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-12">
                                                    <div className="sm:p-5 p-3 pt-4">
                                                        <p className='font-[cd-m] font-[500]  text-[#212833] text-[20px] mb-2'>Liaison office</p>
                                                        <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[14px] mb-0 '>A foreign company can establish a liaison office for all liaison activities in  Singapore . The parent company (foreign company) will meet all the expenses of a liaison office through foreign remittance.</p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="d-flex justify-content-end ">
                                                    <div className="col-md-6">
                                                        <div className="p-2">
                                                            <Image src='/assets/Group.png' alt=".." width='15000' height='3000' className="w-full rounded" />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        } else if (selectedButton === 'btn4') {
            return (
                <section>
                    <div className="overflow-hidden sm:px-20 px-6 ">
                        <div className="container-fluid p-0">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-4 p-0 m-0">
                                    <div className="border border-dark  bg-[#FFFCF5]  text-black rounded-[20px] ">
                                        <div className="row m-0 p-0 align-items-center" >
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-12">
                                                    <div className="sm:p-5 p-3 pt-4">
                                                        <p className='font-[cd-m] font-[500]  text-[#212833] text-[20px] mb-2'>Project office</p>
                                                        <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[14px] mb-0 '>A foreign company can establish a project office in  Singapore  to execute projects awarded to them by an  Singapore n Company. However, to establish such a project office, the foreign company may be required to obtain approval from the Reserve Bank of  Singapore .
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="d-flex justify-content-end ">
                                                    <div className="col-md-6">
                                                        <div className="p-2">
                                                            <Image src='/assets/Group 17650.png' alt=".." width='15000' height='3000' className="w-full rounded" />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        } else if (selectedButton === 'btn5') {
            return (
                <section>
                    <div className="overflow-hidden sm:px-20 px-6  ">
                        <div className="container-fluid p-0">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-4 p-0 m-0">
                                    <div className="border border-dark  bg-[#FFFCF5]  text-black rounded-[20px] ">
                                        <div className="row m-0 p-0 align-items-center" >
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-12">
                                                    <div className="sm:p-5 p-3 pt-4">
                                                        <p className='font-[cd-m] font-[500]  text-[#212833] text-[20px] mb-2'>Branch office</p>
                                                        <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[14px] mb-0 '>A foreign company can establish a branch office in  Singapore . To establish a branch office, the foreign company must be a large business and provide proof of profitability. 

                                                        </p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="d-flex justify-content-end ">
                                                    <div className="col-md-6">
                                                        <div className="p-2">
                                                            <Image src='/assets/OBJECTS.png' alt=".." width='15000' height='3000' className="w-full rounded" />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
      
        else {
            return <div className="text-center">Please select a button</div>;
        }
    };

    return (
             <>
            <Header />

            <section className='bg-[#fff] '>
                <div className="overflow-hidden sm:px-20 px-6 sm:pt-[100px] pt-[50px] pb-5 ">
                    <div className="container-fluid p-0">
                        <div className="row justify-center  pb-5">
                            <div  className="col-md-7 sm:pt-1 ">
                                <p className="font-[cd-se] font-[500] no-underline sm:text-[50px] text-[30px] text-[#212833] text-center sm:leading-[50px] leading-[30px]">Company Incorporation For Foreigners in  Singapore </p>
                                <p className="font-[cd-r] font-[500] no-underline sm:text-[18px] text-[16px]  text-[#212833] text-center">We’ll get your company registered, set up the annual reporting, and help open a bank account online — no need to go anywhere</p>
                                <div className="flex justify-content-center items-center pt-4">


                                    <button className="bg-[#212833] text-white font-[cd-m] sm:w-[180px]  w-[180px]  px-6 py-[12px] rounded-full mb-4">
                                        Get Started
                                    </button>
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
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6  py-5">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 pt-3">
                            <div className="text-center pb-2 ">
                                <div className='d-flex justify-center'>
                                    <div className=" px-2 py-[10px] font-[cd-m]  text-[13px] font-[500]  text-[#212833] border border-black rounded-[30px] sm:w-[180px] w-[180px] tracking-wider ">WHY CLOUD BSS</div>
                                </div>
                          
                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-6 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[25px]  text-[#212833] sm:leading-[40px] leading-[30px] text-center   ">Fully-guided online company registration for foreigners</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row m-0 p-0">
                            <div className="col-md-3 mb-4 d-flex">
                                <div  className="bg-[#FFFCF5] rounded-3 p-4 d-flex flex-column align-items-start h-100">
                                    <div className="d-flex align-items-center h-[100px] w-100 mb-3">
                                        <Image
                                              src="/assets/https___lottiefiles.com_animations_customer-support-icon-kiqHVqelLS.gif"
                                            alt="Start secure trading quickly"
                                            width="100"
                                            height="70"
                                        />
                                    </div>
                                    <p className="font-[cd-se] text-[#212833] text-[18px] mb-2">
                                    Local experts on your side
                                    </p>
                                    <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                    Work closely with experts on-the-ground in Singapore. Get support via live chat, email or phone as well as easy access to advice and in-person consultations.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4 d-flex">
                                <div className="bg-[#FFFCF5] rounded-3 p-4 d-flex flex-column align-items-start h-100">
                                    <div className="d-flex align-items-center h-[100px] w-100 mb-3">
                                        <Image
                                               src="/assets/https___lottiefiles.com_animations_login-leady-6vlP4Naigl.gif"
                                            alt="Supportive Experts"
                                            width="100"
                                            height="70"
                                        />
                                    </div>
                                    <p className="font-[cd-se] text-[#212833] text-[18px] mb-2">
                                    Register online from anywhere
                                    </p>
                                    <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                    No need to travel; we handle everything remotely and online. We collect documents, fill in forms and help you comply with local requirements.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4 d-flex">
                                <div className="bg-[#FFFCF5] rounded-3 p-4 d-flex flex-column align-items-start h-100">
                                    <div className="d-flex align-items-center h-[100px] w-100 mb-3">
                                        <Image
                                            src="/assets/https___lottiefiles.com_animations_team-CgSs0tVAqL.gif"
                                            alt="Setup business banking"
                                            width="100"
                                            height="70"
                                        />
                                    </div>
                                    <p className="font-[cd-se] text-[#212833] text-[18px] mb-2">
                                    Tax right from day one
                                    </p>
                                    <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                    We’ll advise on business structure, accounting set-up, and tax reliefs available to your business.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4 d-flex">
                                <div className="bg-[#FFFCF5] rounded-3 p-4 d-flex flex-column align-items-start h-100">
                                    <div className="d-flex align-items-center h-[100px] w-100 mb-3">
                                        <Image
                                            src="/assets/https___lottiefiles.com_animations_business-case-p0zwZX3QE3.gif"
                                            alt="Register from anywhere"
                                            width="100"
                                            height="70"
                                        />
                                    </div>
                                    <p className="font-[cd-se] text-[#212833] text-[18px] mb-2">
                                    Long-term visa support
                                    </p>
                                    <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                    We help you get an Employment Pass — a long-term visa to stay and work in Singapore, and Dependant is Passes for your family.
                                    </p>
                                </div>
                            </div>
                        </div>
                      

                    </div>
                    <div className="row justify-center ">
                                <div className="col-md-6 sm:pt-1 ">
                                    <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[25px] text-[#212833] text-center sm:leading-[40px] leading-[25px] pt-4 ">Have a name? Check it now</p>
                                    <p className="font-[cd-r] font-[500] text-[14px]   text-[#212833] text-center">Company incorporation in  Singapore  does not have to be a hassle. We handle the process for you in just a few steps online. Let is  start by checking if your company name is available.</p>
                                    <div className="sm:flex justify-center items-center gap-2 pt-4">
                                        <input
                                            type="search"
                                            placeholder="Any Company Name you have in mind"
                                            className="w-full px-4 py-2 text-black form-control border border-black mb-4 focus:outline-none focus:ring-2  rounded-full !rounded-full bg-transparent"
                                        />

                                        <button className="bg-[#212833] text-white font-[cd-m] sm:w-[280px] w-full px-6 py-2 rounded-full mb-4">
                                            Check The Name
                                        </button>
                                    </div>


                                </div>
                            </div>

                </div>
            </section>
            <section className=" bg-[#FFFCF5]  overflow-hidden sm:px-20 px-6 sm:py-10 py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2 ">
                                <div className='d-flex justify-center'>
                                    <div className=" px-2 py-[10px] font-[cd-m]  text-[14px] font-[500] text-[#212833] tracking-wider border border-dark rounded-[30px] sm:w-[250px] w-[250px] ">COMPANY INCORPORATION</div>
                                </div>

                                <div className="row justify-center pb-4">
                                    <div className="col-md-6 pt-4 text-center">
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[25px]  text-[#212833] sm:leading-[40px] leading-[25px] text-center ">What are the Ways in Which Foreign companies can be Registered in  Singapore ?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center ">
                            <div className="col-md-2 mb-4">
                                <button
                                    className={`py-[10px] sm:px-4 rounded-full border border-black text-[14px] font-[cd-m] w-full ${selectedButton === 'btn1' ? 'bg-black text-white' : ' text-black'
                                        }`}
                                    onClick={() => setSelectedButton('btn1')}
                                >
                                 Joint venture
                                </button>
                            </div>
                            <div className="col-md-3 mb-4">
                                <button
                                    className={`py-[10px] sm:px-4 rounded-full border border-black text-[14px] font-[cd-m] w-full tracking-wider  ${selectedButton === 'btn2' ? 'bg-black text-white' : ' text-black'
                                        }`}
                                    onClick={() => setSelectedButton('btn2')}
                                >
                               Wholly-owned subsidiary
                                </button>
                            </div>
                            <div className="col-md-2 mb-4">
                                <button
                                    className={`py-[10px] sm:px-4 rounded-full border border-black text-[14px] font-[cd-m] w-full tracking-wider ${selectedButton === 'btn3' ? 'bg-black text-white' : ' text-black'
                                        }`}
                                    onClick={() => setSelectedButton('btn3')}
                                >
                                  Liaison office
                                </button>
                            </div>


                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-2 mb-4">
                                <button
                                    className={`py-[10px] sm:px-4 rounded-full border border-black text-[14px] font-[cd-m] w-full tracking-wider ${selectedButton === 'btn4' ? 'bg-black text-white' : ' text-black'
                                        }`}
                                    onClick={() => setSelectedButton('btn4')}
                                >
                                  Project office
                                </button>
                            </div>
                            <div className="col-md-2 mb-4">
                                <button
                                    className={`py-[10px] sm:px-4 rounded-full border border-black text-[14px] font-[cd-m] w-full tracking-wider ${selectedButton === 'btn5' ? 'bg-black text-white' : ' text-black'
                                        }`}
                                    onClick={() => setSelectedButton('btn5')}
                                >
                                 Branch office
                                </button>
                            </div>
                           
                        </div>


                        <div className="mt-4">{renderSelectedPart()}</div>

                    </div>

                </div>
            </section>
            <section className="bg-[#F3EFE7] sm:px-20 px-6  py-10 ">
                <div className="overflow-hidden">
                    <div className="container-fluid p-0">
                        <div className="row justify-sm-center">
                            <div className="col-md-12 sm:pb-2">
                                <div className="text-center pb-2 ">
                                    <div className="d-flex justify-center">
                                        <div className=" px-2 py-[10px] font-[cd-m]  text-[13px] font-[500] text-[#212833] border border-dark rounded-[30px] sm:w-[220px] w-[220px] ">INCORPORATION PROCESS</div>
                                    </div>

                                    <div className="row justify-center pb-4">
                                        <div className="col-md-6 pt-3 text-center">

                                            <p className="font-[cd-se]  no-underline sm:text-[40px] text-[28px] text-[#212833] text-center sm:leading-[45px] leading-[30px]">What are the types of business structures in  Singapore </p>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-center">
                            <div className="col-md-10">
                                <div className="row justify-between align-items-center">
                                    <div className="col-md-5 mb-4 ">
                                        <div>
                                            <Image src='/assets/Rectangle 4590.png' alt=".." width='3000' height='3000' className="w-full" />

                                        </div>
                                    </div>
                                    <div className="col-md-5 mb-4 ">

                                        <div>
                                            < p className="font-[cd-se] text-[20px] text-[#212833] ">STEP 1</p>
                                            <p className="font-[cd-se] text-[20px] text-[#212833] ">Digital Signature Certificate (DSC)</p>
                                            <p className="font-[cd-r] text-[#7C7C7C] text-[16px]">As the registration process of the company is completely online, Digital signatures are required to file the forms on the MCA portal. DSC is mandatory for all the proposed directors and the subscribers of the Memorandum of Association (MoA) and Articles of Association (AoA).</p>
                                            <p className="font-[cd-r] text-[#7C7C7C] text-[16px]">

                                                DSC can be obtained from government recognised certifying authorities. The list of such certified authorities can be accessed here. DSC can also be obtained online in just two days from here. Class 3 category of DSC must be obtained by the directors and subscribers of MoA and AoA</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="d-flex justify-center">
                            <div className="col-md-10">
                                <div className="row justify-between align-items-center">
                                    <div className="col-md-5 mb-4 order-md-1 order-2">
                                        < p className="font-[cd-se] text-[20px] text-[#212833] ">STEP 2</p>
                                        <p className="font-[cd-se] text-[20px] text-[#212833] ">Director Identification Number (DIN)</p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px]">The Director Identification Number (DIN) is an identification number for a director and it has to be obtained by anyone who wants to be a director in a company. The DIN of all the proposed directors of the company along with the name and the address proof are to be provided in the company registration form. DIN can be obtained while filing the SPICe+ form, i.e. company registration form.</p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px]">SPICe+ is a web-based company registration form, through which DIN can be obtained for a maximum of three directors. If there are more directors in the company and they do not have a DIN, the company can be incorporated with three directors and it has to appoint new directors later on after incorporation. The appointed directors can obtain DIN by filing the DIR-3 form since only the proposed directors of an existing company can apply for DIN in the SPICe+ form.</p>

                                    </div>
                                    <div className="col-md-5 mb-4 order-md-2 order-1">
                                        <Image src='/assets/Rectangle 4590.png' alt=".." width='3000' height='3000' className="w-full" />

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-center sm:pt-4">
                            <div className="col-md-10">
                                <div className="row justify-between align-items-center">
                                    <div className="col-md-5 mb-4">
                                        <Image src='/assets/Rectangle 4590.png' alt=".." width='3000' height='3000' className="w-full" />
                                    </div>
                                    <div className="col-md-5 mb-4">
                                        < p className="font-[cd-se] text-[20px] text-[#212833] ">STEP 3</p>
                                        <p className="font-[cd-m] text-[#212833]">Registration on the MCA Portal</p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px]">To apply for company registration, the SPICe+ form is to be filled out and submitted on the MCA portal. To fill out the SPICe+ form and submit documents, the director of the company has to register on the MCA portal. After registration, the director can log in and will obtain access to the MCA portal services which include filing e-forms and viewing public documents. </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px]">
                                            The company must also reserve its name by submitting two proposed names in the Part-A of the SPICe+ form. The reservation of the name is essential because if the company name is similar to the name of an existing/registered company, LLP, trademark or it contains words prohibited under the Companies (Incorporation Rules) 2014, the SPICe+ form will get rejected.</p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px]">If the SPICe+ form gets rejected due to non-approval of the company name, the applicant has to re-file another SPICe+ form for the reservation of a new name by paying the prescribed fee. However, after the approval of the name filed in Part-A of the SPICe+ form, it will be reserved for a period of 20 days within which the company must fill Part-B of the SPICe+ form and submit the form online. The applicant must provide the details of the company and directors in the Part-B of the SPICe+ form, attach documents, attach DSC, check the form and submit it.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-center sm:pt-4">
                            <div className="col-md-10">
                                <div className="row justify-between align-items-center">
                                    <div className="col-md-5 mb-4 order-md-1 order-2">
                                        < p className="font-[cd-se] text-[20px] text-[#212833] ">STEP 4</p>
                                        <p className="font-[cd-se] text-[20px] text-[#212833] ">Certificate of Incorporation</p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px]">Once, the registration application is filled and submitted along with the required documents, the Registrar of Companies will examine the application. Upon verification of the application, he will issue the Certificate of Incorporation of the Company.</p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px]">
                                            The Certificate of Incorporation is issued with PAN and TAN as allotted by the Income Tax Department. An electronic mail with a Certificate of Incorporation as an attachment along with PAN and TAN will also be sent to the applicant.</p>

                                    </div>
                                    <div className="col-md-5 mb-4 order-md-2 order-1">
                                        <Image src='/assets/Rectangle 4590.png' alt=".." width='3000' height='3000' className="w-full" />

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 ">
                <div className="container-fluid p-0">
                    <div className="row align-items-center pt-4 pb-4">
                        <div className="col-md-6 ">
                            <div className="col-md-8">
                                <Image src="/assets/Picture ⏵ sg-inc-checklist.png" className="w-full"
                                    width={1080}
                                    height={1080}
                                    alt="no-img"
                                />

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="col-md-10">
                                <p className="font-[cd-se]  no-underline sm:text-[35px] text-[28px] text-[#fff] sm:leading-[45px] leading-[30px]">Download your free Pre‑Incorporation checklist</p>
                                <p className='font-[cd-r] text-[#ABABAB] text-[16px] pt-4 mb-0'>We have put together all of the documents and details you need to figure out before you open a company</p>
                                <div className="sm:flex  items-center gap-4   pt-4">

                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full px-4 py-3 text-white form-control border border-white mb-4 focus:outline-none bg-black focus:ring-2 focus:ring-white-400 rounded-full !rounded-full placeholder-white !placeholder-white"
                                    />
                                    <button className="bg-[#FFFCF5] text-[#212833] font-[cd-m]  py-3 rounded-full sm:w-[250px] w-full mb-4 text-[14px] ">
                                        Download for free
                                    </button>

                                </div>

                                <p className="text-[#fff] text-[16px]">By clicking, you agree to our <a className="underline text-[#ABABAB] " href="#">Terms & Conditions Privacy and Data , Protection Policy</a>
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

            </section>
            <section className="bg-[#F3EFE7] sm:px-20 px-6 pb-20 py-5">
                <div className="overflow-hidden">
                    <div className="row justify-center">
                        <div className="col-md-6">
                            <p className="font-[cd-se] text-center no-underline sm:text-[35px] text-[28px] text-[#212833] sm:leading-[45px] leading-[30px]">Frequently Asked Questions on Company Registration</p>
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



                    <Footer />
                      </>
    );
}
