'use client'
import Header from '../components/header';
import Footer from '../components/footer'
import Image from 'next/image';

import FAQ from "../components/faq"
import PreIncorportaion from "../components/pre‑Incorporation"
import Link from 'next/link';


export default function Home() {
    return (
        <>
            <Header />
            <section className='bg-[#fff]'>
                <div className="overflow-hidden sm:px-20 px-6 sm:pt-[100px] pt-[50px] sm:py-[10px]">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center pb-[20px] justify-center">
                            <div className='col-md-6 mb-4'>
                                <p className="font-[cd-b] text-[#212833] text-[28px] p-text sm:text-left sm:text-[45px] sm:leading-[45px] leading-[31px] text-center ">
                                    Business Name Generator
                                </p>
                                <p className="font-[cd-r] text-[#212833] text-[18px] text-[#232323] text-center ">
                                    Generate a creative company name and instantly check its availability using our free AI-powered business name generator.
                                </p>
                                <div className="sm:flex  items-center gap-4  pt-4">
                                    <input
                                        type="search"
                                        placeholder="Any Company Name you have in mind"
                                        className="w-full px-4 py-2 rounded-full  text-[#0D0D0D]  border border-dark mb-4 outline-none"
                                    />
                                    <button className=" border border-dark border-[1px] text-[#0D0D0D]  font-[cd-m] py-2 rounded-full sm:!w-[300px] w-full mb-4 hover:text-[#fff] hover:bg-[#000] ">
                                        Generate Now
                                    </button>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
            <section className="bg-[#F3EDE6] overflow-hidden sm:px-20 px-6  py-10">
                <div className="container-fluid p-0">

                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2">
                                <div className='d-flex justify-center'>
                                    <div className=" px-2 py-[10px] font-[cd-m]  font-[500]  text-[#212833]  border border-dark rounded-[30px] sm:w-[180px] w-[180px] text-[14px] tracking-wider ">Company name</div>
                                </div>

                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-5 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se]  no-underline sm:text-[40px] text-[30px] text-[#212833]  sm:leading-[40px] leading-[30px]">How to choose a perfect company name in 4 simple steps</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-center'>
                        <div className='col-md-10'>
                            <div className="row align-items-center justify-between pt-4">
                                <div className="col-md-5 mb-4 ">


                                    <Image src='/assets/image (13).png' alt=".." width='3000' height='3000' className="w-full" />


                                </div>
                                <div className="col-md-5 mb-4">
                                    <p className='text-[20px] font-[cd-se]  text-[#212833] '>Define your brand identity</p>
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[16px]  mb-0 '>Start by identifying your company&apos;s core values, mission, and vision. Think about your target audience and the message you want to convey. Make a list of keywords related to your business and industry to guide your brainstorming process.
                                    </p>
                                </div>


                            </div>
                            <div className='row align-items-center justify-between'>
                                <div className="col-md-5 mb-4 order-md-2 order-1  ">
                                    <Image src='/assets/image (14).png' alt=".." width='3000' height='3000' className="w-full" />
                                </div>

                                <div className="col-md-5 mb-4 order-md-1 order-2">

                                    <p className='text-[20px] font-[cd-se]  text-[#212833] '>Brainstorm and research</p>
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[16px]  mb-0 '>

                                        Generate a list of potential names through brainstorming sessions. Use online tools and name generators for inspiration. Check the availability of domain names and social media handles to ensure you can create a consistent online presence.

                                    </p>

                                </div>
                            </div>
                            <div className='row align-items-center justify-between'>
                                <div className="col-md-5 mb-4  order-md-2 order-2">
                                    <p className='text-[20px] font-[cd-se]  text-[#212833] '>Ensure uniqueness and compliance</p>
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[16px]  mb-4 '>Conduct a thorough search to confirm the name isn&apos;t already in use or trademarked. Verify its availability with business registration authorities. Consider linguistic and cultural implications, especially if you plan to operate internationally.
                                    </p>
                                    <Link href='#' className='no-underline'>
                                        <div className='border border-dark rounded-full text-[16px] text-center px-2 py-2 w-[300px] text-[#000] d-flex align-items-center gap-3 justify-center' >
                                            <span className='p-0 m-0'>Check your company’s name
                                            </span>
                                            <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.3536 4.35356C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464468C16.9763 0.269205 16.6597 0.269205 16.4645 0.464468C16.2692 0.65973 16.2692 0.976312 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53554C16.6597 7.7308 16.9763 7.7308 17.1716 7.53554L20.3536 4.35356ZM-4.37114e-08 4.5L20 4.5L20 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#212833" />
                                            </svg>
                                        </div></Link>
                                </div>
                                <div className="col-md-5 mb-4  order-md-1 order-1 ">

                                    <Image src='/assets/image (15).png' alt=".." width='3000' height='3000' className="w-full" />
                                </div>
                            </div>
                            <div className='row align-items-center justify-between'>
                                <div className="col-md-5 mb-4  order-md-1 order-2">
                                    <p className='text-[20px] font-[cd-se]  text-[#212833] '>Test and validate</p>
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[16px]  mb-4 '>Get feedback from potential customers, stakeholders, and employees. Conduct surveys or focus groups to gauge reactions to your chosen names. Ensure the name is easy to pronounce, spell, and remember to make a lasting impression.
                                    </p>

                                </div>
                                <div className="col-md-5 mb-4 order-md-2 order-1">

                                    <Image src='/assets/image (16).png' alt=".." width='3000' height='3000' className="w-full" />
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </section>
       
<PreIncorportaion />
<FAQ />
            <Footer />
        </>
    );
}
