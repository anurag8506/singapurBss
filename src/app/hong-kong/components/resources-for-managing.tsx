
import Image from "next/image";

import Link from "next/link";




import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    return (
        <>
           


            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6  sm:py-[80px] py-[30px]">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-6 pt-1">
                            <div className="text-center">
                                <p className="font-[cd-se]  sm:text-[40px] text-[30px]  text-[#212833] text-center sm:leading-[43px] leading-[33px]">Explore over 600 resources for managing small business finances</p>

                            </div>
                        </div>
                    </div>

                    <div className="row justify-between pt-14">
                        <div className="col-md-4 mb-4">
                            <div>
                                <div className="">
                                    <Image
                                        src="/assets/image 20.png"
                                        className="w-full"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                    />
                                </div>
                                <div className="pt-6 sm:pb-0 pb-4">
                                    <p className='font-[cd-se] text-[#0D0D0D] text-[25px]  leading-[28px]  mb-0'>How to Deal with Inflation&apos;s Effects on Your Small Business</p>
                                    <p className='font-[cd-r]  text-[14px] text-[#4F4F4F]  text-[18px]  sm:pt-6 pt-3'>A year end package with everything you need to file comes standard with Cloud Inc. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>

                                    <div className="sm:py-6">
                                        <Link href="/"><button className="font-[cd-m] font-[500] text-[18px] text-[#212833] bg-[#fff] border-[1px] border-[#212833] px-5 py-[8px] rounded-[30px] text-center hover:bg-[#000] hover:text-[#fff] ">Learn More</button></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <div className="">
                                    <Image
                                        src="/assets/image 21.png"
                                        className="w-full"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                    />
                                </div>
                                <div className="pt-6 sm:pb-0 pb-4">
                                    <p className='font-[cd-se] text-[#0D0D0D] text-[25px]  leading-[28px]  mb-0'>How to Deal with Inflation&apos;s Effects on Your Small Business</p>
                                    <p className='font-[cd-r]  text-[14px] text-[#4F4F4F]  text-[18px] sm:pt-6 pt-3'>A year end package with everything you need to file comes standard with Cloud Inc. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>

                                    <div className="sm:py-6 py-3">
                                        <Link href="/"><button className="font-[cd-m] font-[500] text-[18px] text-[#212833] bg-[#fff] border-[1px] border-[#212833] px-5 py-[8px] rounded-[30px] text-center hover:bg-[#000] hover:text-[#fff] ">Learn More</button></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <div className="">
                                    <Image
                                        src="/assets/image 22.png"
                                        className="w-full"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                    />
                                </div>
                                <div className="pt-6 sm:pb-0 pb-4">
                                    <p className='font-[cd-se] text-[#0D0D0D] text-[25px]  leading-[28px]  mb-0'>How to Deal with Inflation&apos;s Effects on Your Small Business</p>
                                    <p className='font-[cd-r]  text-[18px] text-[#4F4F4F]  text-[16px] sm:pt-6 pt-3'>A year end package with everything you need to file comes standard with Cloud Inc. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>

                                    <div className="sm:py-6 py-3">
                                        <Link href="/"><button className="font-[cd-m] font-[500] text-[18px] text-[#212833] bg-[#fff] border-[1px] border-[#212833] px-5 py-[8px] rounded-[30px] text-center hover:bg-[#000] hover:text-[#fff] ">Learn More</button></Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
   






        </>
    );
}
