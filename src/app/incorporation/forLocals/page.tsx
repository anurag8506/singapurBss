'use client'
import Image from "next/image";
import Header from '../../components/header';

import Footer from '../../components/footer'
import { useState } from "react";
import FAQ from "../../components/faq"
import PreIncorportaion from "../../components/pre‑Incorporation"


import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {


    const [selectedButton, setSelectedButton] = useState('btn1');
  
  
    const renderSelectedPart = () => {
        if (selectedButton === 'btn1') {
            return (
                <section>
                    <div className="overflow-hidden sm:px-20 px-6  ">
                        <div className="container-fluid p-0">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-4 p-0 m-0">
                                    <div className="border border-dark bg-[#FFFCF5] text-[#212833] rounded-[20px] ">
                                        <div className="row m-0 p-0 align-items-center">
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-12">
                                                    <div className="sm:p-5 p-3 pt-4">
                                                        <p className="font-[cd-se] font-[500] text-[#212833] text-[20px] mb-2">
                                                            Proprietorship Firm
                                                        </p>
                                                        <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                                            A proprietorship firm can be established and managed by a single person.
                                                            Only one person runs the business, and it is ideal for small business owners
                                                            with low investments. The entire control of the business will be with the sole
                                                            proprietor, who can enjoy the profits, but he/she will also have to bear all
                                                            the business losses.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-2">
                                                <div className="d-flex justify-content-end">
                                                    <div className="col-md-6">
                                                        <div className="image-container position-relative">
                                                            <Image
                                                                src="/assets/https___lottiefiles.com_99692-team-work.gif"
                                                                alt="Team Work"
                                                                width={600}
                                                                height={400}
                                                                className="w-100 h-auto rounded"
                                                                style={{ objectFit: "cover", maxHeight: "300px" }}
                                                            />
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
        } else if (selectedButton === 'btn2') {
            return (
                <section>
                    <div className="overflow-hidden sm:px-20 px-6 ">
                        <div className="container-fluid p-0">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-4 p-0 m-0">
                                    <div className="border border-dark bg-[#FFFCF5] text-[#212833] rounded-[20px] ">
                                        <div className="row m-0 p-0 align-items-center" >
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-12">
                                                    <div className="sm:p-5 p-3 pt-4">
                                                        <p className='font-[cd-se] font-[500] text-[#212833] sm:text-[20px] text-[16px] mb-2'>Partnership Firm</p>
                                                        <p className='font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[16px] text-[13px] mb-0 '>Two or more persons enter into a partnership and establish a partnership firm. The partners of the firm equally share the profits derived from the business. They will also have to bear the losses of the firm. The partnership firm is regulated under the Partnership Act, 1932. It is ideal for small businesses run by two or more persons with low investment.

                                                        </p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="d-flex justify-content-end ">
                                                    <div className="col-md-6">
                                                        <Image src='/assets/https___lottiefiles.com_animations_business-partnership-contract-handshake-1simYO5B3U.gif' alt=".."  width='200' height='100' className="w-full rounded" />

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
                                    <div className="border border-dark bg-[#FFFCF5] text-[#212833] rounded-[20px] ">
                                        <div className="row m-0 p-0 align-items-center" >
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-12">
                                                    <div className="sm:p-5 p-3 pt-4">
                                                        <p className='font-[cd-se] font-[500] text-[#212833] sm:text-[20px] text-[16px] mb-2'>Public Limited Company</p>
                                                        <p className='font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[16px] text-[13px] mb-0 '>A Public Limited Company is a company established by seven or more members under the Companies Act, 2013. The directors are responsible for the affairs of the company. It has a separate legal existence and the liability of its members are limited to the shares they hold. It is ideal for medium to big businesses who wish to raise capital from the public.
                                                        </p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="d-flex justify-content-end ">
                                                    <div className="col-md-6">
                                                        <div className="p-2">
                                                            <Image src='/assets/https___lottiefiles.com_animations_team-DcyvCbHDCB.gif' alt=".."  width='200' height='100' className="w-full rounded" />

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
                                    <div className="border border-dark bg-[#FFFCF5] text-[#212833] rounded-[20px] ">
                                        <div className="row m-0 p-0 align-items-center" >
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-12">
                                                    <div className="sm:p-5 p-3 pt-4">
                                                        <p className='font-[cd-se] font-[500] text-[#212833] sm:text-[20px] text-[16px] mb-2'>One Person Company (OPC)</p>
                                                        <p className='font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[16px] text-[13px] mb-0 '>Recently introduced in the year 2013, an OPC is the best way to start a company if there exists only one promoter or owner. It enables a sole proprietor to carry on his work and still be part of the corporate framework. It is registered under the Companies Act, 2013. It is ideal for small businesses who want to raise capital.

                                                        </p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="d-flex justify-content-end ">
                                                    <div className="col-md-6">
                                                        <div className="sm:h-[100px] sm:w-[100px]">
                                                            <Image src='/assets/https___lottiefiles.com_animations_walking-business-woman-N2iuLD2WkH.gif' alt=".." width='200' height='100' className="rounded" />

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
                                    <div className="border border-dark bg-[#FFFCF5] text-[#212833] rounded-[20px] ">
                                        <div className="row m-0 p-0 align-items-center" >
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-12">
                                                    <div className="sm:p-5 p-3 pt-4">
                                                        <p className='font-[cd-se] font-[500] text-[#212833] sm:text-[20px] text-[16px] mb-2'>Limited Liability Partnership (LLP)</p>
                                                        <p className='font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[16px] text-[13px] mb-0 '>An LLP is a separate legal entity where the liabilities of partners are only limited only to their agreed contribution. An LLP is established under the Limited Liability Act, 2008 with the Registrar of Companies (ROC). It has features of both the partnership firm and the company. It is ideal for businesses established by partners who want limited liability.

                                                        </p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="d-flex justify-content-end ">
                                                    <div className="col-md-6">
                                                        <div className="p-2">
                                                            <Image src='/assets/https___lottiefiles.com_animations_team-cH56A8t9Ul.gif' alt=".."  width='200' height='100' className="w-full rounded" />

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
        else if (selectedButton === 'btn6') {
            return (
                <section>
                    <div className="overflow-hidden sm:px-20 px-6 ">
                        <div className="container-fluid p-0">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-4 p-0 m-0">
                                    <div className="border border-dark bg-[#FFFCF5] text-[#212833] rounded-[20px] ">
                                        <div className="row m-0 p-0 align-items-center" >
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-12">
                                                    <div className="sm:p-5 p-3 pt-4">
                                                        <p className='font-[cd-se] font-[500] text-[#212833] sm:text-[20px] text-[16px] mb-2'>Private Limited Company (PLC)</p>
                                                        <p className='font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[16px] text-[13px] mb-0 '>A PLC in the eyes of the law is regarded as a separate legal entity from its founders. The directors of the company look after the affairs of the company. The shareholders (stakeholders) invest in the company and are part owners. A PLC is registered under the Companies Act, 2013 with the ROC. It is ideal for medium to big businesses who wish to raise capital.

                                                        </p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="d-flex justify-content-end ">
                                                    <div className="col-md-6">
                                                        <div className="p-2">
                                                            <Image src='/assets/https___lottiefiles.com_animations_team-CgSs0tVAqL.gif' alt=".."  width='200' height='100' className="w-full rounded" />

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

            <div className="bg-[#FFFCF5]">
                <Header />
                <section>
                    <div className="overflow-hidden sm:px-20 px-6  sm:pt-[100px] pt-[50px] pb-10">
                        <div className="container-fluid p-0">
                            <div className="row justify-center  pb-10">
                                <div className="col-md-6 ">
                                    <p className="font-[cd-se]  no-underline sm:text-[45px] text-[28px]  text-[#212833] text-center sm:leading-[50px] leading-[30px]">Company Incorporation Services in  Singapore </p>
                                    <p className="font-[cd-r] font-[500] no-underline text-[16px]  text-[#212833] text-center">Company incorporation in  Singapore  does not have to be a hassle. We handle the process for you in just a few steps online. Let is  start by checking if your company name is available.</p>
                                    <div className="sm:flex justify-center items-center gap-2 pt-4">
                                        <input
                                            type="search"
                                            placeholder="Any Company Name you have in mind"
                                            className="w-full px-4 py-2 text-[#212833] form-control border border-black mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full !rounded-full bg-transparent"
                                        />


                                        <button className="bg-[#212833] text-white font-medium sm:w-[280px] w-full px-6 py-2 rounded-full mb-4">
                                            Check The Name
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
            </div>
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6 py-5">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2 ">
                                <div className="d-flex justify-center">
                                    <div className=" px-2 py-2 font-[cd-m]  text-[13px] font-[500] text-[#212833] border border-dark rounded-[30px] sm:w-[200px] w-[200px] rounded-full !rounded-full tracking-wider ">WHERE ARE YOU FROM?

                                    </div>

                                </div>

                                <div className="row justify-center pt-2 sm:pb-4 pb-2">
                                    <div className="col-md-6 pt-3 ">
                                        <p className="font-[cd-se]  no-underline sm:text-[40px] text-[28px] text-[#212833] text-center sm:leading-[45px] leading-[30px]">Company incorporation in  Singapore : are you local?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-center">
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="d-flex justify-content-end">
                                            <div>
                                                <div className="sm:h-[600px]">
                                                    <Image src='/assets/Rectangle 4590.png' alt=".." width='500' height={1080} />
                                                </div>
                                                <div className="pt-4">
                                                    <p className='font-[cd-se] font-[500] text-[#212833] text-[20px]  mb-2 text-center '>Corporate Secretary</p>
                                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C]  text-[16px] mb-0 text-center '>We can get your company up and running in 30 minutes</p>
                                                    <div className="d-flex justify-content-center pt-4">
                                                        <button className=" py-[10px]  font-[cd-m] text-[14px] font-[500] text-[#212833] border border-dark rounded-full sm:w-[160px] w-[160px] d-flex justify-center align-items-center gap-2 tracking-wider">
                                                            <span className="flex-shrink-0">I am a Local</span>
                                                            <svg
                                                                className="flex-shrink-0"
                                                                width="18"
                                                                height="11"
                                                                viewBox="0 0 18 11"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M12.7237 0.328595C12.5494 0.502969 12.555 0.778595 12.7237 0.96422L16.4587 5.14922L0.45 5.14922C0.2025 5.14922 -2.46894e-07 5.35172 -2.36076e-07 5.59922C-2.25257e-07 5.84672 0.2025 6.04922 0.45 6.04922L16.4587 6.04922L12.7294 10.2342C12.5662 10.4255 12.5494 10.6898 12.7238 10.8642C12.8981 11.0386 13.2019 11.0498 13.365 10.8698C13.365 10.8698 17.82 5.97609 17.865 5.91984C17.91 5.86359 18 5.76235 18 5.59922C18 5.43609 17.91 5.32359 17.865 5.27859C17.82 5.23359 13.365 0.328595 13.365 0.328595C13.2806 0.244219 13.1625 0.19922 13.0444 0.19922C12.9262 0.19922 12.8137 0.244219 12.7237 0.328595Z"
                                                                    fill="#000"
                                                                />
                                                            </svg>
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="d-flex justify-content-start">
                                            <div>
                                                <div className="sm:h-[600px]">

                                                    <Image src='/assets/Rectangle 4589.png' alt=".." width='500' height={1080} />
                                                </div>
                                                <div>
                                                    <div className="pt-4">
                                                        <p className='font-[cd-se] font-[500] text-[#212833] text-[20px]  mb-2 text-center '>Incorporation for foreigners</p>
                                                        <p className='font-[cd-r] font-[500] text-[#7C7C7C]  text-[16px] mb-0 text-center '>Packages with Nominee Director and Employment Pass</p>
                                                        <div className="d-flex justify-content-center pt-4">
                                                            <button className=" py-[10px]  font-[cd-m] text-[14px] font-[500] text-[#212833] border border-dark rounded-full sm:w-[180px] w-[180px] d-flex justify-center align-items-center gap-2 tracking-wider">
                                                                <span className="flex-shrink-0">I am a foreigner</span>
                                                                <svg
                                                                    className="flex-shrink-0"
                                                                    width="18"
                                                                    height="11"
                                                                    viewBox="0 0 18 11"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M12.7237 0.328595C12.5494 0.502969 12.555 0.778595 12.7237 0.96422L16.4587 5.14922L0.45 5.14922C0.2025 5.14922 -2.46894e-07 5.35172 -2.36076e-07 5.59922C-2.25257e-07 5.84672 0.2025 6.04922 0.45 6.04922L16.4587 6.04922L12.7294 10.2342C12.5662 10.4255 12.5494 10.6898 12.7238 10.8642C12.8981 11.0386 13.2019 11.0498 13.365 10.8698C13.365 10.8698 17.82 5.97609 17.865 5.91984C17.91 5.86359 18 5.76235 18 5.59922C18 5.43609 17.91 5.32359 17.865 5.27859C17.82 5.23359 13.365 0.328595 13.365 0.328595C13.2806 0.244219 13.1625 0.19922 13.0444 0.19922C12.9262 0.19922 12.8137 0.244219 12.7237 0.328595Z"
                                                                        fill="#000"
                                                                    />
                                                                </svg>
                                                            </button>

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

                </div>
            </section>

            <section className="bg-[#0F0F0F] overflow-hidden sm:px-20 px-6  sm:py-10 py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2 ">
                                <div className="d-flex justify-center">
                                    <div className=" px-2 py-[10px] font-[cd-m]  text-[13px] font-[500] text-[#fff] border border-white rounded-[30px] sm:w-[160px] w-[160px] ">
                                        Why Could BSS?
                                    </div>
                                </div>

                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-8 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se]  no-underline sm:text-[45px] text-[28px]  text-[#fff] text-center sm:leading-[48px] leading-[30px]">Why choose Cloud Bss for your company incorporation?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row m-0 p-0">
                            <div className="col-md-3 mb-4 d-flex">
                                <div className="bg-[#FFFCF5] rounded-3 p-4 d-flex flex-column align-items-start h-100">
                                    <div className="d-flex align-items-center h-[100px] w-100 mb-3">
                                        <Image
                                            src="/assets/se.gif"
                                            alt="Start secure trading quickly"
                                            width="100"
                                            height="70"
                                        />
                                    </div>
                                    <p className="font-[cd-se] text-[#212833] text-[18px] mb-2">
                                        Start secure trading quickly
                                    </p>
                                    <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                        Consolidate the incorporation process by using a professional who
                                        understands the legal obligations of your new company.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4 d-flex">
                                <div className="bg-[#FFFCF5] rounded-3 p-4 d-flex flex-column align-items-start h-100">
                                    <div className="d-flex align-items-center h-[100px] w-100 mb-3">
                                        <Image
                                            src="/assets/wf.gif"
                                            alt="Supportive Experts"
                                            width="100"
                                            height="70"
                                        />
                                    </div>
                                    <p className="font-[cd-se] text-[#212833] text-[18px] mb-2">
                                        Supportive Experts
                                    </p>
                                    <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                        Talk to an expert anytime via chat or phone. They will give you insight
                                        on anything that is unclear throughout the registration process.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4 d-flex">
                                <div className="bg-[#FFFCF5] rounded-3 p-4 d-flex flex-column align-items-start h-100">
                                    <div className="d-flex align-items-center h-[100px] w-100 mb-3">
                                        <Image
                                            src="/assets/https___lottiefiles.com_animations_bank-leuxEm9E0w.gif"
                                            alt="Setup business banking"
                                            width="100"
                                            height="70"
                                        />
                                    </div>
                                    <p className="font-[cd-se] text-[#212833] text-[18px] mb-2">
                                        Setup business banking
                                    </p>
                                    <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                        With Cloud bss incorporation, your first year of business banking is
                                        included, so your business is entirely compliant and ready to trade.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4 d-flex">
                                <div className="bg-[#FFFCF5] rounded-3 p-4 d-flex flex-column align-items-start h-100">
                                    <div className="d-flex align-items-center h-[100px] w-100 mb-3">
                                        <Image
                                            src="/assets/https___lottiefiles.com_animations_i-stay-at-home-oDIS28xBC6.gif"
                                            alt="Register from anywhere"
                                            width="100"
                                            height="70"
                                        />
                                    </div>
                                    <p className="font-[cd-se] text-[#212833] text-[18px] mb-2">
                                        Register from anywhere
                                    </p>
                                    <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                        Our software automates the incorporation process for you, so you won’t
                                        need to complete any of the paperwork yourself.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6 sm:py-10 py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2 ">
                                <div className="d-flex justify-center">
                                    <div className=" px-2 py-[10px] font-[cd-m]  text-[13px] font-[500] text-[#212833] border border-dark rounded-[30px] sm:w-[230px] w-[230px] tracking-wider ">COMPANY INCORPORATION</div>
                                </div>

                                <div className="row justify-center pb-4">
                                    <div className="col-md-6 pt-3 text-center">

                                        <p className="font-[cd-se]  no-underline sm:text-[40px] text-[28px] px-6 text-[#212833] text-center sm:leading-[45px] leading-[30px]">What are the types of business structures in  Singapore </p>
                                        <p className="font-[cd-r] font-[500]  text-[18px]  text-[#212833]  sm:text-center text-left text-center">Let’s try and understand the types of business structures available in  Singapore :
                                        </p>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center ">
                            <div className="col-md-2 mb-4">
                                <button
                                    className={`py-[10px] font-[cd-m] sm:px-4 rounded-full border border-black text-[13px] tracking-wider w-full ${selectedButton === 'btn1' ? 'bg-black text-white' : ' text-[#212833]'
                                        }`}
                                    onClick={() => setSelectedButton('btn1')}
                                >
                                    Proprietorship Firm
                                </button>
                            </div>
                            <div className="col-md-2 mb-4">
                                <button
                                    className={`py-[10px] font-[cd-m] sm:px-4 rounded-full border border-black text-[13px] tracking-wider w-full ${selectedButton === 'btn2' ? 'bg-black text-white' : ' text-[#212833]'
                                        }`}
                                    onClick={() => setSelectedButton('btn2')}
                                >
                                    Partnership Firm
                                </button>
                            </div>
                            <div className="col-md-2 mb-4">
                                <button
                                    className={`py-[10px] font-[cd-m] sm:px-4 rounded-full border border-black text-[13px] tracking-wider w-full ${selectedButton === 'btn3' ? 'bg-black text-white' : ' text-[#212833]'
                                        }`}
                                    onClick={() => setSelectedButton('btn3')}
                                >
                                    Public Limited Company
                                </button>
                            </div>


                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-3 mb-4">
                                <button
                                    className={`py-[10px] font-[cd-m] sm:px-4 rounded-full border border-black text-[13px] tracking-wider w-full ${selectedButton === 'btn4' ? 'bg-black text-white' : ' text-[#212833]'
                                        }`}
                                    onClick={() => setSelectedButton('btn4')}
                                >
                                    One Person Company (OPC)
                                </button>
                            </div>
                            <div className="col-md-3 mb-4">
                                <button
                                    className={`py-[10px] font-[cd-m] sm:px-4 rounded-full border border-black text-[13px] tracking-wider w-full ${selectedButton === 'btn5' ? 'bg-black text-white' : ' text-[#212833]'
                                        }`}
                                    onClick={() => setSelectedButton('btn5')}
                                >
                                    Limited Liability Partnership (LLP)
                                </button>
                            </div>
                            <div className="col-md-3 mb-4">
                                <button
                                    className={`py-[10px] font-[cd-m] sm:px-4 rounded-full border border-black text-[13px] tracking-wider w-full ${selectedButton === 'btn6' ? 'bg-black text-white' : ' text-[#212833]'
                                        }`}
                                    onClick={() => setSelectedButton('btn6')}
                                >
                                    Private Limited Company (PLC)
                                </button>
                            </div>
                        </div>


                        <div className="mt-4">{renderSelectedPart()}</div>

                    </div>

                </div>
            </section>

            <section className="bg-[#F3EFE7] sm:px-20 px-6 pb-5 ">
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
          <PreIncorportaion/>
          <FAQ/>



            <Footer />






        </>
    );
}
