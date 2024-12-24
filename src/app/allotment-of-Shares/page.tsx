'use client'
import Header from '../components/header';
import Footer from '../components/footer'

import RunBusiness from '../components/run-your-business'
import ResourcesForManaging from "../components/resources-for-managing"
import FAQ from "../components/faq"

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
                                    Allotment of shares in Singapore
                                </p>
                                <p className="font-[cd-r] p-text text-center text-[18px]  text-[#212833]   ">According to Companies Act, Allotment of shares is a procedure of creating and issuing shares, either for new or existing shareholders. To initiate the process, the directors must get the existing shareholders’ approval at a general meeting.</p>

                                <div className='d-flex justify-center'>   <button className="font-[cd-m] font-[500] text-[14px] text-[#212833]  border-[1px] border-[#212833]  py-[8px] rounded-[30px] text-center bg-[#fff] hover:bg-[#000] hover:text-[#fff] w-[160px]">
                                    Get Started
                                </button></div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6  py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-8 sm:pb-2">
                            <div className="text-center pb-2  ">
                                <div className='d-flex justify-center'>
                                    <div className=" px-2 py-[7px] font-[cd-m]  text-[13px] font-[500]  text-[#212833]  border border-black rounded-[30px] sm:w-[120px] w-[120px] ">PRICING</div>
                                </div>
                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-6 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[25px]   text-[#212833]   sm:leading-[40px] leading-[25px] text-center   ">Our plans grow with your business needs</p>
                                        <p className='text-[16px]'>Start with an Essential package that covers all key business needs or switch to a more flexible Unlimited plan later</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-center'>
                        <div className='col-md-4 mb-4'>
                            <div className='bg-[#FFFDFA] rounded-[20px] p-2 '>
                                <div className='bg-[#F3EFE7] rounded-[20px] p-4'>
                                    <p className='text-[16px] text-[#767676]'>from</p>
                                    <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>S$300</p>

                                    <button className='bg-[#212833] w-full py-[13px] text-[#fff] text-[16px] rounded-full border border-[#212833]' >Get this plan</button>
                                    <div className='pt-3'>
                                        <button className='bg-[#fff] w-full py-[13px]  text-[#212833]  text-[16px] border border-dark rounded-full ' >Talk to an expert</button>

                                    </div>
                                </div>
                                <div className='p-4 '>
                                    <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Essential Secretary</p>

                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                        <li>Annual General Meeting preparation</li>
                                        <li>Routine Annual filing</li>
                                        <li>Personal support by your Corporate Secretary via chat</li>
                                        <li>Reminders on filing deadlines</li>
                                        <li>Full service for 1 year</li>
                                        <li>S$60 government fees included</li>
                                    </ul>

                                    <div className='border border-dark border-t'></div>
                                    <div className='pt-4 d-flex justify-content-between align-items-center'><span className='font-[cd-se] text-[18px]  text-[#212833] '>Additional services you might need</span>

                                    </div>

                                    <div>
                                        <div className="pt-4 d-flex justify-content-between align-items-center">
                                            <p className="font-[cd-r] text-[14px] text-[#767676] underline">
                                                Company stamp
                                            </p>
                                            <p className="font-[cd-r] text-[14px] text-[#767676]">S$60</p>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="font-[cd-r] text-[14px] text-[#767676] underline">
                                                CorpPass Registration
                                            </p>
                                            <p className="font-[cd-r] text-[14px] text-[#767676]">S$100</p>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="font-[cd-r] text-[14px] text-[#767676] underline">
                                                Striking off a company
                                            </p>
                                            <p className="font-[cd-r] text-[14px] text-[#767676]">S$400</p>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="font-[cd-r] text-[14px] text-[#767676]">
                                                Striking off a dormant company
                                            </p>
                                            <p className="font-[cd-r] text-[14px] text-[#767676]">S$600</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>

            <FAQ />
            <ResourcesForManaging />
            <RunBusiness />





            <Footer />
        </>
    );
}
