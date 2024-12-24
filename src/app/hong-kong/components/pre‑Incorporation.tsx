'use client'
import Image from "next/image";

import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {



    return (
        <>
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 ">
                <div className="container-fluid p-0">
                    <div className="row align-items-center pt-4 pb-4">
                        <div className="col-md-6 ">
                            <div className="col-md-6">
                                <Image src="/assets/Picture ⏵ sg-inc-checklist.png" className="w-full"
                                    width={1080}
                                    height={1080}
                                    alt="no-img"
                                />

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex  justify-end">
                            <div className="col-md-10">
                                <p className="font-[cd-se]  no-underline sm:text-[35px] text-[28px] text-[#fff] sm:leading-[45px] leading-[30px]">Download your free Pre‑Incorporation checklist</p>
                                <p className='font-[cd-r] text-[#ABABAB] text-[16px] pt-4 mb-0'>We have put together all of the documents and details you need to figure out before you open a company</p>
                                <div className="sm:flex  items-center gap-4   pt-4">

                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full px-4 py-2 text-white form-control border border-white mb-4 focus:outline-none bg-black focus:ring-2 focus:ring-white-400 rounded-full !rounded-full placeholder-white !placeholder-white"
                                    />
                                    <button className="bg-[#FFFCF5] text-[#212833] font-[cd-m]  py-2 rounded-full sm:w-[250px] w-full mb-4 text-[14px] ">
                                        Download for free
                                    </button>

                                </div>

                                <p className="text-[#fff] text-[16px]">By clicking, you agree to our <a className="underline text-[#ABABAB] " href="#">Terms & Conditions Privacy and Data , Protection Policy</a>
                                </p>
                            </div>

                            </div>

                        </div>

                    </div>
                </div>

            </section>
        
        </>
    );
}
