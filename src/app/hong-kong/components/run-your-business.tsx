
import Image from "next/image";





import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    return (
        <>
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-5 py-5">
                <div className="container-fluid p-0">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4">
                            <div className="col-md-8">

                            <p className="font-[cd-se]  no-underline sm:text-[40px] text-[30px]  text-[#fff]  sm:leading-[42px] leading-[30px] p-text">Get tips on how to run your business smarter</p>
                                <p className='font-[cd-r] text-[#ABABAB] text-[16px]  pt-4 mb-0 p-text'>Learn crucial tips on how to save money and build a flourishing business, with real entrepreneurs sharing their own experiences.</p>
                                <div className="sm:flex  items-center gap-4  pt-4">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full px-4 py-2 rounded-full  text-[#0D0D0D]  border border-gray-400 mb-4 outline-none"
                                    />
                                    <button className="bg-white  text-[#0D0D0D]  text-[16px] font-[cd-m] py-2 rounded-full sm:w-[210px] w-full mb-4 ">
                                        SUBSCRIBE
                                    </button>

                                </div>
                                <p className="text-[#fff] text-[14px] p-text"><a className="no-underline text-[#ABABAB]  " href="#">By clicking, you agree to our</a> Terms & Conditions, Privacy and Data Protection Policy
                                </p>

                            </div>


                        </div>
                        <div className="col-md-6 ">
                            <div className="d-flex sm:justify-end">
                                <div className="col-md-6">
                            <Image src="/assets/original-4703d0ba72b72f87fa49a618a24a1f6d 1.gif" className="w-full"
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

        </>
    );
}
