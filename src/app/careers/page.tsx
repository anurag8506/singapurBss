'use client'
import Header from '../components/header';
import Footer from '../components/footer'
import Image from 'next/image';


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Home() {


    return (
        <>
            <Header />
            <section className='bg-[#fff'>
                <div className="overflow-hidden sm:px-20 px-6 sm:pt-[100px] pt-[50px] ">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center pb-10 ">
                            <div className="col-md-12">
                                <div className="relative">
                                    <Image
                                        src="/assets/pexels-cottonbro-4065158.png"
                                        alt="Your Cloud BSS career starts here"
                                        className="w-full  sm:h-[60vh] h-[30vh] rounded "
                                        width={8000}
                                        height={1080}
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                                        <div className="px-4">
                                            <p className="font-[cd-b] text-[#fff] sm:text-[45px] text-[30px] sm:leading-[48px] leading-[33px] mb-4">
                                                Your Cloud BSS career starts here
                                            </p>
                                            <div className="flex justify-center items-center gap-3 flex-wrap">
                                                <button
                                                    className="font-[cd-m] text-[#ffff] border border-white px-4 py-[8px] rounded-full hover:bg-[#ffff] hover:text-[#000]  transition duration-300">
                                                    Connect
                                                </button>
                                                <button
                                                    className="font-[cd-m] text-[#ffff] border border-white px-4 py-[8px] rounded-full hover:bg-[#ffff] hover:text-[#000]  transition duration-300">
                                                    Job openings
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>


                    </div>
                </div>

            </section>
            <section className="bg-[#F3EDE6] overflow-hidden sm:px-20 px-6  py-10">
                <div className="container-fluid p-0">

                    <div className="row justify-center align-items-center">
                        <div className="col-md-6 mb-4">
                            <p className='font-[cd-m] text-[25px] '>Who We Are</p>
                            <p className='text-[16px'><span className='font-[cd-m]'>We are Cloud BSS</span> - the innovators supporting visionaries and change-makers  globally. Cloud BSS simplifies commercial fintech so entrepreneurs can focus on improving their business, and making the world a more exciting place in the process. </p>
                            <p className='text-[16px'> Cloud BSS are autonomous and entrepreneurial, we collaborate openly to discover new ways of doing things better. We care to develop each other as we follow our individual paths of growth, and our distributed teams have a shared goal; together creating something truly!</p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className='d-flex justify-end'>
                                <div className='col-md-6'>
                                    <Image src="/assets/Rectangle 4738 (1).png" alt="Start secure trading quickly w-full" width="1080" height="1080" className="object-contain w-full" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <section className="bg-[#FFFCF5] overflow-hidden sm:px-20 px-6 sm:py-[60px] py-[30px]">
                <div>

                    <div className="text-center  ">

                        <div className="row justify-center  pb-3">
                            <div className="col-md-6 sm:pb-[50px] pb-[20px]  ">
                                <p className="font-[cd-se] font-[500]  sm:text-[35px] text-[28px] text-[#212833]  sm:leading-[38px] leading-[32px] text-center">Life more Cloud BSS, a word from our COO</p>
                                <p>When it comes to our company culture, do&apos;t just take our word for it, let us show you. These videos explore our team behind the scenes see how they make Cloud BSS a unique place to be. </p>
                                <p className='sm:pt-[100px] pt-[10px] font-[cd-se] font-[500]  sm:text-[35px] text-[28px] text-[#212833]  sm:leading-[38px] leading-[32px] text-center'>Our international team is growing</p>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-center'>
                        <div className='col-md-8'>
                            <div className='row justify-between align-center'>
                                <div className='col-md-4  mb-4 col-6'>
                                    <p className='text-center text-[#0061FE] font-[cd-b] font-[500]  sm:text-[45px] text-[28px] '>4</p>
                                    <p className='text-center'> Countries</p>
                                </div>
                                <div className='col-md-4  mb-4 col-6'>
                                    <p className='text-center text-[#0061FE] font-[cd-b] font-[500]  sm:text-[45px] text-[28px] '>1500</p>
                                    <p className='text-center'>Employees across the world</p>
                                </div>
                                <div className='col-md-4  mb-4 col-6'>
                                    <p className='text-center text-[#0061FE] font-[cd-b] font-[500]  sm:text-[45px] text-[28px] '>15</p>
                                    <p className='text-center'>Nationalities</p>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>

            </section>
            <section className='overflow-hidden'>
                <div className="row">
                    <div className="col-md-6 m-0 p-0">
                        <Image
                            src="/assets/original.jpeg.png"
                            alt="Your Cloud BSS career starts here"
                            className="w-full h-100 object-cover"
                            width={8000}
                            height={1080}
                        />
                    </div>
                    <div className="col-md-6 m-0 p-0">
                        <Image
                            src="/assets/original.jpeg (1).png"
                            alt="Your Cloud BSS career starts here"
                            className="w-full h-100 object-cover"
                            width={8000}
                            height={1080}
                        />
                    </div>
                    <div className="col-md-5 m-0 p-0">
                        <Image
                            src="/assets/image 70.png"
                            alt="Your Cloud BSS career starts here"
                            className="w-full h-100 object-cover"
                            width={8000}
                            height={1080}
                        />
                    </div>
                    <div className="col-md-2 m-0 p-0">
                        <Image
                            src="/assets/original.jpeg (3).png"
                            alt="Your Cloud BSS career starts here"
                            className="w-full h-100 object-cover"
                            width={8000}
                            height={1080}
                        />
                    </div>
                    <div className="col-md-5 m-0 p-0">
                        <Image
                            src="/assets/original.jpeg (4).png"
                            alt="Your Cloud BSS career starts here"
                            className="w-full h-100 object-cover"
                            width={8000}
                            height={1080}
                        />
                    </div>
                    <div className="col-md-4 m-0 p-0">
                        <Image
                            src="/assets/original.jpeg (5).png"
                            alt="Your Cloud BSS career starts here"
                            className="w-full h-100 object-cover"
                            width={8000}
                            height={1080}
                        />
                    </div>
                    <div className="col-md-4 m-0 p-0">
                        <Image
                            src="/assets/original.jpeg (6).png"
                            alt="Your Cloud BSS career starts here"
                            className="w-full h-100 object-cover"
                            width={8000}
                            height={1080}
                        />
                    </div>
                    <div className="col-md-4 m-0 p-0">
                        <Image
                            src="/assets/original.jpeg (7).png"
                            alt="Your Cloud BSS career starts here"
                            className="w-full h-100 object-cover"
                            width={8000}
                            height={1080}
                        />
                    </div>
                </div>



            </section>

            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6  sm:py-[30px] py-[20px]">
                <div className="row justify-center">
                    <div className="col-md-12 sm:pb-2 m-0 p-0">
                        <div className="text-center   ">

                            <div className="row justify-center  m-0 p-0 sm:pb-4">
                                <div className="col-md-6 sm:pt-3  ">
                                    <p className="font-[cd-se] font-[500]  sm:text-[35px] text-[26px]   text-[#212833]   sm:leading-[38px] leading-[29px] text-center">What We Value</p>
                                    <p className='text-center text-[16px]'>Our Cloud BSS values are the foundation for everything we do</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center !sm:pt-5 pt-4'>
                        <div className='col-md-8'>
                            <div className='row justify-between align-items-center'>
                                <div className='col-md-5 mb-4'>
                                    <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>Care</p>
                                    <p className='font-[cd-r] text-[#000] text-[16px]'>People are what matters most. We help and empower our clients and our team members. We keep promises and follow up on issues.</p>
                                </div>
                                <div className='col-md-5 mb-4'>
                                    <Image src="/assets/aasas.png" className="w-full" width={1080} height={1080} alt="no-img" />
                                </div>
                            </div>
                            <div className='row justify-between align-items-center'>
                                <div className='col-md-5 mb-4 order-md-2 order-1'>
                                    <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>Continuous improvement</p>
                                    <p className='font-[cd-r] text-[#000] text-[16px]'>We always strive to be our best, and we always take responsibility and pride in the work we do. We seek to become better — as individuals, employees, teams, and as a company.</p>
                                </div>
                                <div className='col-md-5 mb-4 order-md-1 order-2'>

                                    <Image src="/assets/akl.png" className="w-full" width={1080} height={1080} alt="no-img" />
                                </div>
                            </div>
                            <div className='row justify-between align-items-center'>
                                <div className='col-md-5 mb-4 order-md-1 order-1'>
                                    <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>Transparency</p>
                                    <p className='font-[cd-r] text-[#000] text-[16px]'>
                                        We get further ahead and move faster when everyone knows where we are now, and where we&apos;re headed. We communicate our priorities, targets, progress, and challenges openly within the team.</p>
                                </div>
                                <div className='col-md-5 mb-4 order-md-2 order-2'>
                                    <Image src="/assets/image 71.png" className="w-full" width={1080} height={1080} alt="no-img" />

                                </div>
                            </div>
                            <div className='row justify-between align-items-center'>
                                <div className='col-md-5 mb-4 order-md-2 order-1'>
                                    <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>Attention to detail</p>
                                    <p className='font-[cd-r] text-[#000] text-[16px]'>Details matter — we know that little things can make a big difference and we build products and services with a precision that makes us stand out! </p>
                                </div>
                                <div className='col-md-5 mb-4 order-md-1 order-2'>

                                    <Image src="/assets/image 72.png" className="w-full" width={1080} height={1080} alt="no-img" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>

            <section className="bg-[#F3EDE6] overflow-hidden sm:px-20 px-6  sm:py-[30px] py-[20px]">
                <div className="row justify-center">
                    <div className="col-md-12 sm:pb-2 m-0 p-0">
                        <div className="text-center   ">

                            <div className="row justify-center  m-0 p-0 sm:pb-4">
                                <div className="col-md-6 sm:pt-3  ">
                                    <p className="font-[cd-se] font-[500]  sm:text-[35px] text-[26px]   text-[#212833]   sm:leading-[38px] leading-[29px] text-center">Our Jobs</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center !sm:pt-5 pt-4'>
                        <div className='col-md-8'>
                            <div className='row'>
                                <div className='col-md-12 mb-4'>
                                    <p className='font-[cd-m] text-[20px]'>Senior Fullstack Engineer</p>
                                    <p className='text-[16px] text-[#7B7B7B] d-flex align-items-center '>Technology. Kuala Lumpur . Hybrid Remote . <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.37438 5.17289C3.09938 3.51789 5.43938 2.50039 8.01938 2.50039C10.5994 2.50039 12.9394 3.51789 14.6644 5.17289C14.9844 5.47789 15.4894 5.46789 15.7944 5.15039C16.0994 4.83289 16.0894 4.32539 15.7719 4.02039C13.7619 2.08789 11.0294 0.900391 8.01938 0.900391C5.00938 0.900391 2.27688 2.08789 0.264378 4.01789C-0.0531222 4.32539 -0.0631222 4.83039 0.241878 5.15039C0.546878 5.47039 1.05438 5.48039 1.37188 5.17289H1.37438ZM8.01938 6.50039C9.43938 6.50039 10.7344 7.02789 11.7244 7.90039C12.0569 8.19289 12.5619 8.16039 12.8544 7.83039C13.1469 7.50039 13.1144 6.99289 12.7844 6.70039C11.5144 5.58039 9.84438 4.90039 8.01938 4.90039C6.19438 4.90039 4.52438 5.58039 3.25688 6.70039C2.92438 6.99289 2.89438 7.49789 3.18688 7.83039C3.47938 8.16289 3.98438 8.19289 4.31688 7.90039C5.30438 7.02789 6.59938 6.50039 8.02188 6.50039H8.01938ZM9.61938 10.5004C9.61938 10.076 9.45081 9.66908 9.15075 9.36902C8.85069 9.06896 8.44372 8.90039 8.01938 8.90039C7.59503 8.90039 7.18807 9.06896 6.88801 9.36902C6.58795 9.66908 6.41938 10.076 6.41938 10.5004C6.41938 10.9247 6.58795 11.3317 6.88801 11.6318C7.18807 11.9318 7.59503 12.1004 8.01938 12.1004C8.44372 12.1004 8.85069 11.9318 9.15075 11.6318C9.45081 11.3317 9.61938 10.9247 9.61938 10.5004Z" fill="#7B7B7B" />
                                    </svg>
                                    </p><div className='border border-[#7B7B7B] border-[1px]'></div>
                                </div>
                                <div className='col-md-12 mb-4'>
                                    <p className='font-[cd-m] text-[20px]'>Talent Acquisition Coordinator (3-6 Months)</p>
                                    <p className='text-[16px] text-[#7B7B7B] d-flex align-items-center '>Talent Acquisition Coordinator (3-6 Months).Kuala Lumpur  .Fully Remote . <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.37438 5.17289C3.09938 3.51789 5.43938 2.50039 8.01938 2.50039C10.5994 2.50039 12.9394 3.51789 14.6644 5.17289C14.9844 5.47789 15.4894 5.46789 15.7944 5.15039C16.0994 4.83289 16.0894 4.32539 15.7719 4.02039C13.7619 2.08789 11.0294 0.900391 8.01938 0.900391C5.00938 0.900391 2.27688 2.08789 0.264378 4.01789C-0.0531222 4.32539 -0.0631222 4.83039 0.241878 5.15039C0.546878 5.47039 1.05438 5.48039 1.37188 5.17289H1.37438ZM8.01938 6.50039C9.43938 6.50039 10.7344 7.02789 11.7244 7.90039C12.0569 8.19289 12.5619 8.16039 12.8544 7.83039C13.1469 7.50039 13.1144 6.99289 12.7844 6.70039C11.5144 5.58039 9.84438 4.90039 8.01938 4.90039C6.19438 4.90039 4.52438 5.58039 3.25688 6.70039C2.92438 6.99289 2.89438 7.49789 3.18688 7.83039C3.47938 8.16289 3.98438 8.19289 4.31688 7.90039C5.30438 7.02789 6.59938 6.50039 8.02188 6.50039H8.01938ZM9.61938 10.5004C9.61938 10.076 9.45081 9.66908 9.15075 9.36902C8.85069 9.06896 8.44372 8.90039 8.01938 8.90039C7.59503 8.90039 7.18807 9.06896 6.88801 9.36902C6.58795 9.66908 6.41938 10.076 6.41938 10.5004C6.41938 10.9247 6.58795 11.3317 6.88801 11.6318C7.18807 11.9318 7.59503 12.1004 8.01938 12.1004C8.44372 12.1004 8.85069 11.9318 9.15075 11.6318C9.45081 11.3317 9.61938 10.9247 9.61938 10.5004Z" fill="#7B7B7B" />
                                    </svg>
                                    </p><div className='border border-[#7B7B7B] border-[1px]'></div>
                                </div>
                                <div className='col-md-12 mb-4'>
                                    <p className='font-[cd-m] text-[20px]'>Talent Acquisition Coordinator (3-6 Months)</p>
                                    <p className='text-[16px] text-[#7B7B7B] d-flex align-items-center '>Talent Acquisition Coordinator (3-6 Months).Kuala Lumpur  .Fully Remote . <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.37438 5.17289C3.09938 3.51789 5.43938 2.50039 8.01938 2.50039C10.5994 2.50039 12.9394 3.51789 14.6644 5.17289C14.9844 5.47789 15.4894 5.46789 15.7944 5.15039C16.0994 4.83289 16.0894 4.32539 15.7719 4.02039C13.7619 2.08789 11.0294 0.900391 8.01938 0.900391C5.00938 0.900391 2.27688 2.08789 0.264378 4.01789C-0.0531222 4.32539 -0.0631222 4.83039 0.241878 5.15039C0.546878 5.47039 1.05438 5.48039 1.37188 5.17289H1.37438ZM8.01938 6.50039C9.43938 6.50039 10.7344 7.02789 11.7244 7.90039C12.0569 8.19289 12.5619 8.16039 12.8544 7.83039C13.1469 7.50039 13.1144 6.99289 12.7844 6.70039C11.5144 5.58039 9.84438 4.90039 8.01938 4.90039C6.19438 4.90039 4.52438 5.58039 3.25688 6.70039C2.92438 6.99289 2.89438 7.49789 3.18688 7.83039C3.47938 8.16289 3.98438 8.19289 4.31688 7.90039C5.30438 7.02789 6.59938 6.50039 8.02188 6.50039H8.01938ZM9.61938 10.5004C9.61938 10.076 9.45081 9.66908 9.15075 9.36902C8.85069 9.06896 8.44372 8.90039 8.01938 8.90039C7.59503 8.90039 7.18807 9.06896 6.88801 9.36902C6.58795 9.66908 6.41938 10.076 6.41938 10.5004C6.41938 10.9247 6.58795 11.3317 6.88801 11.6318C7.18807 11.9318 7.59503 12.1004 8.01938 12.1004C8.44372 12.1004 8.85069 11.9318 9.15075 11.6318C9.45081 11.3317 9.61938 10.9247 9.61938 10.5004Z" fill="#7B7B7B" />
                                    </svg>
                                    </p><div className='border border-[#7B7B7B] border-[1px]'></div>
                                </div>
                                <div className='col-md-12 mb-4'>
                                    <p className='font-[cd-m] text-[20px]'>Talent Acquisition Coordinator (3-6 Months)</p>
                                    <p className='text-[16px] text-[#7B7B7B] d-flex align-items-center '>Talent Acquisition Coordinator (3-6 Months).Kuala Lumpur  .Fully Remote . <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.37438 5.17289C3.09938 3.51789 5.43938 2.50039 8.01938 2.50039C10.5994 2.50039 12.9394 3.51789 14.6644 5.17289C14.9844 5.47789 15.4894 5.46789 15.7944 5.15039C16.0994 4.83289 16.0894 4.32539 15.7719 4.02039C13.7619 2.08789 11.0294 0.900391 8.01938 0.900391C5.00938 0.900391 2.27688 2.08789 0.264378 4.01789C-0.0531222 4.32539 -0.0631222 4.83039 0.241878 5.15039C0.546878 5.47039 1.05438 5.48039 1.37188 5.17289H1.37438ZM8.01938 6.50039C9.43938 6.50039 10.7344 7.02789 11.7244 7.90039C12.0569 8.19289 12.5619 8.16039 12.8544 7.83039C13.1469 7.50039 13.1144 6.99289 12.7844 6.70039C11.5144 5.58039 9.84438 4.90039 8.01938 4.90039C6.19438 4.90039 4.52438 5.58039 3.25688 6.70039C2.92438 6.99289 2.89438 7.49789 3.18688 7.83039C3.47938 8.16289 3.98438 8.19289 4.31688 7.90039C5.30438 7.02789 6.59938 6.50039 8.02188 6.50039H8.01938ZM9.61938 10.5004C9.61938 10.076 9.45081 9.66908 9.15075 9.36902C8.85069 9.06896 8.44372 8.90039 8.01938 8.90039C7.59503 8.90039 7.18807 9.06896 6.88801 9.36902C6.58795 9.66908 6.41938 10.076 6.41938 10.5004C6.41938 10.9247 6.58795 11.3317 6.88801 11.6318C7.18807 11.9318 7.59503 12.1004 8.01938 12.1004C8.44372 12.1004 8.85069 11.9318 9.15075 11.6318C9.45081 11.3317 9.61938 10.9247 9.61938 10.5004Z" fill="#7B7B7B" />
                                    </svg>
                                    </p><div className='border border-[#7B7B7B] border-[1px]'></div>
                                </div>
                                <div className='col-md-12 mb-4'>
                                    <p className='font-[cd-m] text-[20px]'>Talent Acquisition Coordinator (3-6 Months)</p>
                                    <p className='text-[16px] text-[#7B7B7B] d-flex align-items-center '>Talent Acquisition Coordinator (3-6 Months).Kuala Lumpur  .Fully Remote . <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.37438 5.17289C3.09938 3.51789 5.43938 2.50039 8.01938 2.50039C10.5994 2.50039 12.9394 3.51789 14.6644 5.17289C14.9844 5.47789 15.4894 5.46789 15.7944 5.15039C16.0994 4.83289 16.0894 4.32539 15.7719 4.02039C13.7619 2.08789 11.0294 0.900391 8.01938 0.900391C5.00938 0.900391 2.27688 2.08789 0.264378 4.01789C-0.0531222 4.32539 -0.0631222 4.83039 0.241878 5.15039C0.546878 5.47039 1.05438 5.48039 1.37188 5.17289H1.37438ZM8.01938 6.50039C9.43938 6.50039 10.7344 7.02789 11.7244 7.90039C12.0569 8.19289 12.5619 8.16039 12.8544 7.83039C13.1469 7.50039 13.1144 6.99289 12.7844 6.70039C11.5144 5.58039 9.84438 4.90039 8.01938 4.90039C6.19438 4.90039 4.52438 5.58039 3.25688 6.70039C2.92438 6.99289 2.89438 7.49789 3.18688 7.83039C3.47938 8.16289 3.98438 8.19289 4.31688 7.90039C5.30438 7.02789 6.59938 6.50039 8.02188 6.50039H8.01938ZM9.61938 10.5004C9.61938 10.076 9.45081 9.66908 9.15075 9.36902C8.85069 9.06896 8.44372 8.90039 8.01938 8.90039C7.59503 8.90039 7.18807 9.06896 6.88801 9.36902C6.58795 9.66908 6.41938 10.076 6.41938 10.5004C6.41938 10.9247 6.58795 11.3317 6.88801 11.6318C7.18807 11.9318 7.59503 12.1004 8.01938 12.1004C8.44372 12.1004 8.85069 11.9318 9.15075 11.6318C9.45081 11.3317 9.61938 10.9247 9.61938 10.5004Z" fill="#7B7B7B" />
                                    </svg>
                                    </p><div className='border border-[#7B7B7B] border-[1px]'></div>
                                </div>
                                <div className='col-md-12 mb-4'>
                                    <p className='font-[cd-m] text-[20px]'>Talent Acquisition Coordinator (3-6 Months)</p>
                                    <p className='text-[16px] text-[#7B7B7B] d-flex align-items-center '>Talent Acquisition Coordinator (3-6 Months).Kuala Lumpur  .Fully Remote . <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.37438 5.17289C3.09938 3.51789 5.43938 2.50039 8.01938 2.50039C10.5994 2.50039 12.9394 3.51789 14.6644 5.17289C14.9844 5.47789 15.4894 5.46789 15.7944 5.15039C16.0994 4.83289 16.0894 4.32539 15.7719 4.02039C13.7619 2.08789 11.0294 0.900391 8.01938 0.900391C5.00938 0.900391 2.27688 2.08789 0.264378 4.01789C-0.0531222 4.32539 -0.0631222 4.83039 0.241878 5.15039C0.546878 5.47039 1.05438 5.48039 1.37188 5.17289H1.37438ZM8.01938 6.50039C9.43938 6.50039 10.7344 7.02789 11.7244 7.90039C12.0569 8.19289 12.5619 8.16039 12.8544 7.83039C13.1469 7.50039 13.1144 6.99289 12.7844 6.70039C11.5144 5.58039 9.84438 4.90039 8.01938 4.90039C6.19438 4.90039 4.52438 5.58039 3.25688 6.70039C2.92438 6.99289 2.89438 7.49789 3.18688 7.83039C3.47938 8.16289 3.98438 8.19289 4.31688 7.90039C5.30438 7.02789 6.59938 6.50039 8.02188 6.50039H8.01938ZM9.61938 10.5004C9.61938 10.076 9.45081 9.66908 9.15075 9.36902C8.85069 9.06896 8.44372 8.90039 8.01938 8.90039C7.59503 8.90039 7.18807 9.06896 6.88801 9.36902C6.58795 9.66908 6.41938 10.076 6.41938 10.5004C6.41938 10.9247 6.58795 11.3317 6.88801 11.6318C7.18807 11.9318 7.59503 12.1004 8.01938 12.1004C8.44372 12.1004 8.85069 11.9318 9.15075 11.6318C9.45081 11.3317 9.61938 10.9247 9.61938 10.5004Z" fill="#7B7B7B" />
                                    </svg>
                                    </p><div className='border border-[#7B7B7B] border-[1px]'></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-3 flex-wrap pt-4">
                                                <button
                                                    className="font-[cd-m] text-[#000] border border-black px-5 py-[8px] rounded-full hover:bg-[#000] hover:text-[#fff]  transition duration-300">
                                                 All jobs 
                                                </button>
                                             
                                            </div>
                </div>
              
            </section>







            <Footer />
        </>
    );
}
