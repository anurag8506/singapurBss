'use client'
import Header from '../../components/header';
import Footer from '../../components/footer'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Home() {
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };
    
    return (
        <>
            <Header />
            <section className='bg-[#fff]'>
                <div className="overflow-hidden sm:px-20 px-6  sm:pt-[100px] pt-[50px] sm:py-[40px] py-[20px]">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center ">
                            <div className="col-md-6 mb-4">
                                <div className='col-md-8'>
                                    <p className="font-[cd-b] text-[#212833] text-[33px] leading-[35px] p-text sm:text-left sm:text-[45px] sm:leading-[45px]">
                                    Company Secretary Services in Hong Kong
                                    </p>
                                </div>
                                <div className='col-md-10'>
                                    <p className="font-[cd-r] p-text sm:text-left text-[18px]  text-[#212833]  ">Our software seamlessly integrates with various ecommerce platforms, ensuring precision in your bookkeeping. Opt for Cloud BSS for comprehensive ecommerce accounting services, tax filings, and insightful reporting.</p>
                                    <div className="sm:flex sm:justify-start justify-center items-center sm:pt-[50px] pt-[10px] pb-2 sm:gap-3 gap-2">
                                        <button className="font-[cd-m] font-[500] text-[14px] text-[#212833]  border-[1px] border-[#212833]  py-[8px] rounded-[30px] text-center bg-[#fff] hover:bg-[#000] hover:text-[#fff] sm:w-[260px] w-full ">
                                        Book a consultation
                                        </button>
                                        <div className='sm:mt-[0px] mt-[10px]'>
                                        <button className="font-[cd-m] font-[500] text-[14px] text-[#212833]  border-[1px] border-[#212833] py-[8px] rounded-[30px] text-center bg-[#fff] hover:bg-[#000] hover:text-[#fff] sm:w-[140px] w-full ">
                                            Pricing
                                        </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 mb-4'>
                                <div className='d-flex justify-content-end'>
                                    <div className='col-md-10'>
                                        <Image
                                            src="/assets/eco.png"
                                            alt=".."
                                            className="w-full object-contain"
                                            width='8000'
                                            height='100'
                                        />

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
     
            <section className="bg-[#F3EDE6] overflow-hidden sm:px-20 px-6  sm:py-[50px] py-[20px]">
                <div className="row justify-center">
                    <div className="col-md-12 sm:pb-2 m-0 p-0">
                        <div className="text-center   ">
                            <div className='d-flex justify-center'>
                                <div className="px-2 py-[10px] font-[cd-m]  text-[18px]  text-[#212833] rounded-[30px] sm:w-[180px] w-[180px] tracking-wider ">
                                WHY CLOUD BSS
                                </div>

                            </div>
                            <div className="row justify-center  m-0 p-0 sm:pb-4">
                                <div className="col-md-6 sm:pt-3  ">
                                    <p className="font-[cd-se] font-[500]  sm:text-[35px] text-[26px]   text-[#212833]   sm:leading-[38px] leading-[29px] text-center">Automated accounting solutions tailored to online selling needs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center !sm:pt-5 pt-4'>
                        <div className='col-md-10'>
                            <div className='row justify-between align-items-center'>
                                <div className='col-md-5 mb-4'>
                                <Image src="/assets/image.png" className="w-full" width={1080} height={1080} alt="no-img" />
                                </div>
                                <div className='col-md-5 mb-4'>
                                    <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>
                                    Up-to-the-minute sales insights</p>
                                    <p className='font-[cd-r] text-[#000] text-[16px]'>Cloud BSS Accounting seamlessly integrates with your marketplace data via our API, ensuring automatic synchronisation. Stay informed about your online sales performance effortlessly.</p>
                            
                                </div>
                            </div>
                            <div className='row justify-between align-items-center'>
                                <div className='col-md-5 mb-4 order-md-2 order-1'>
                                <Image src="/assets/image (1).png" className="w-full" width={1080} height={1080} alt="no-img" />
                               
                                </div>
                                <div className='col-md-5 order-md-1 order-2 mb-4'>
                                    <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>Seamless platform integration</p>
                                    <p className='font-[cd-r] text-[#000] text-[16px]'>No more platform-hopping for sales insights! Our system handles fees, discounts, returns, and gift cards across Lazada, Amazon, Shopify, and eBay. Plus, there is seamless integration with PayPal and Stripe payment gateways.</p>
                                    <Image src="/assets/image 31 (2).png" className="w-full" width={1080} height={1080} alt="no-img" />
                               
                                </div>
                            </div>
                            <div className='row justify-between align-items-center'>
                                <div className='col-md-5 mb-4 order-md-1 order-1'>
                                <Image src="/assets/Rectangle 4639 (3).png" className="w-full" width={1080} height={1080} alt="no-img" />
                                </div>
                                <div className='col-md-5 mb-4 order-md-2 order-2'>
                                    <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>Accountants that know ecommerce</p>
                                    <p className='font-[cd-r] text-[#000] text-[16px]'>
                                    Let us handle processing your sales platform fees, discounts, refunds, and gift cards. Ensure transparency in your commissions — our skilled accountants are ready to assist you with taxes and necessary marketplace calculations.
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='text-center text-[18px] pt-4'>WHY CLOUD BSS</div>
                <div className='d-flex justify-center'>
                    <div className='col-md-5 pt-4'><p className='text-[#000] text-center text-[25px] leading-[28px] font-[cd-se]'>Stay in tune with your business finances</p></div>
                </div>
            </section>
       
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 py-5 ">
                <div className="container-fluid p-0">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-2">
                            <div className="col-md-9">
                                <p className='font-[cd-se] text-[#fff] sm:text-[40px] text-[28px] leading-[32px] sm:leading-[43px]  mb-0 p-text '>Got questions? Chat with our local experts</p>
                                <p className='font-[cd-r] text-[#ABABAB] text-[16px] pt-4 mb-0 p-text '>Choose a convenient time to chat with our accounting experts and get the answers you need to take the next step.
                                </p>
                                <div className="flex sm:justify-start justify-center items-center pt-4">
                                    <button className="bg-white text-black font-[cd-m] py-[10px] rounded-full sm:w-[180px] w-[180px] mb-4 text-[14px]">
                                        Schedule a call
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
            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6  sm:py-[50px] py-[20px]">
                <div className="row justify-center">
                    <div className="col-md-12 sm:pb-2 m-0 p-0">
                        <div className="text-center   ">
                            <div className='d-flex justify-center'>
                                <div className="px-2 py-[10px] font-[cd-m]  text-[18px]  text-[#212833] rounded-[30px] sm:w-[180px] w-[180px] tracking-wider ">
                                WHO WE HELP
                                </div>

                            </div>
                            <div className="row justify-center  m-0 p-0 sm:pb-4">
                                <div className="col-md-6 sm:pt-3  ">
                                    <p className="font-[cd-se] font-[500]  sm:text-[35px] text-[26px]   text-[#212833]   sm:leading-[38px] leading-[29px] text-center">Resources catered to digital entrepreneurs at every level</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center !sm:pt-5 pt-4'>
                        <div className='col-md-10'>
                            <div className='row justify-between align-items-center'>
                                <div className='col-md-4 mb-4'>
                                <Image src="/assets/image (2).png" className="w-full" width={1080} height={1080} alt="no-img" />
                                <div className='pt-4 p-3'>
                                    <p className='text-[22px] font-[cd-m] text-[#000] text-center'>Dropshippers</p>
                                    <p className='text-[16px] font-[cd-r] text-[#9D9D9D] text-center'>Boost your margins and achieve greater success in the ecommerce industry with the support of our expert team.</p>
                                </div>
                                </div>
                                <div className='col-md-4 mb-4'>
                                <Image src="/assets/image (3).png" className="w-full" width={1080} height={1080} alt="no-img" />
                                <div className='pt-4 p-3'>
                                    <p className='text-[22px] font-[cd-m] text-[#000] text-center'>Brand owners</p>
                                    <p className='text-[16px] font-[cd-r] text-[#9D9D9D] text-center'>Whether you&apos;re a garage entrepreneur or expanding to your first office, our services fit your needs.</p>
                                </div>
                                </div>
                                <div className='col-md-4 mb-4'>
                                <Image src="/assets/image (4).png" className="w-full" width={1080} height={1080} alt="no-img" />
                                <div className='pt-4 p-3'>
                                    <p className='text-[22px] font-[cd-m] text-[#000] text-center'>White-label sellers</p>
                                    <p className='text-[16px] font-[cd-r] text-[#9D9D9D] text-center'>Channel your efforts into product and revenue growth while we take charge of tax management, filing, and financial backend.</p>
                                </div>
                                </div>
                            
                            </div>
                        
                        </div>
                    </div>


                </div>
                <div className='text-center text-[18px] pt-4'>WHY CLOUD BSS</div>
                <div className='d-flex justify-center'>
                    <div className='col-md-5 pt-4'><p className='text-[#000] text-center text-[25px] leading-[28px] font-[cd-se]'>Stay in tune with your business finances</p></div>
                </div>
            </section>
        
            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6  py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2  ">
                                <div className='d-flex justify-center'>
                                    <div className=" px-2 py-[7px] font-[cd-m]  text-[13px] font-[500]  text-[#212833]  border border-black rounded-[30px] sm:w-[120px] w-[120px] ">PRICING</div>
                                </div>

                                <div className="row justify-center  pb-3">
                                    <div className="col-md-6 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[28px]   text-[#212833]   sm:leading-[40px] leading-[32px] text-center   ">Tailored Plans for Your Business</p>
                                        <p className='text-[16px]'>Our packages are customized based on your monthly revenue and include comprehensive bookkeeping services for a single, transparent fee.</p>
                                        <div className='d-flex justify-center'>
                                      <div className='bg-[#F3EFE7] p-2 flex justify-center align-items-center rounded-full w-[400px]'>
                                        <div className='d-flex align-items-center justify-around gap-4'>
                                            <span>Pay monthly</span>
                                            <div className=' bg-[#fff] p-2 px-6 gap-4  align-items-center justify-around text-[#000] rounded-full d-flex w-[220px] '>
                                                <span>Pay annually</span>
                                                <div className='bg-[#0061FE] text-[#fff] p-2 rounded-full px-4 text-center'>-17%</div>
                                            </div>
                                        </div>

                                      </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>




                    </div>
                    <Swiper
      spaceBetween={10} // Space between slides
      loop={true} // Enable infinite loop (optional)
      // navigation={true} // Enable navigation arrows
      modules={[Navigation]} // Use only the Navigation module
      className="items-center"
      navigation={{
        nextEl: '.custom-next', // Reference to your custom Next button
        prevEl: '.custom-prev', // Reference to your custom Previous button
      }}
      breakpoints={{
        640: { // Small screens (Mobile)
          slidesPerView: 1, // 1 slide per view on mobile
        },
        768: { // Medium screens (Tablet)
          slidesPerView: 2, // 2 slides per view on tablet
        },
        1024: { // Large screens (Desktop)
          slidesPerView: 3, // 3 slides per view on desktop
        },
      }}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="sm:mb-0 col-11">
          <div className="sm:mb-0 w-full sm:w-[100%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[32px] px-6 py-6">
          <div>
                                <div className='bg-[#FFFDFA] rounded-[20px] p-4 flex-1'>
                                    <p className='font-[cd-se] text-[20px] text-[#212833]'>Essential</p>
                                    <p className='text-[16px] text-[#767676]'>For those who already have a Hong Kong office address</p>
                                    <div className='align-items-center d-flex gap-2'>
                                        <p className='text-[25px] font-[cd-m] text-[#212833] p-0 m-0'>HK$</p>
                                        <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>5,800</p>
                                    </div>
                                    <p className='text-[#767676] text-[14px] pb-2'>HK$3,850 government fees included</p>
                                    <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                        Get this plan
                                    </button>
                                    <div className='pt-3'>
                                        <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                            Talk to an expert
                                        </button>
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Incorporation</p>
                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                        <li>Incorporation application</li>
                                        <li>Certificate of Incorporation (CI)</li>
                                        <li>Articles of Association</li>
                                        <li>Business Registration Certificate (BRC) for 1 year</li>
                                        <li>Cloud Bss app document storage</li>
                                        <li>Neobank account opening assistance</li>
                                    </ul>
                                    <div className='pt-2'>
                                        <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Corporate Secretary</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                            <li>Personal Corporate Secretary On‑demand support via live chat</li>
                                            <li>Annual General Meeting papers</li>
                                            <li>Annual Returns Filing (NAR1)</li>
                                            <li>Automated reminders of filing deadlines</li>
                                            <li>Online shares distribution management and capital table</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
          </div>
        </div>,
      </SwiperSlide>
      <SwiperSlide>
        <div className="sm:mb-0 col-11">
          <div className="sm:mb-0 w-full sm:w-[100%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[32px] px-6 py-6">
          <div>
                                <div className='bg-[#FFFDFA] rounded-[20px] p-4 flex-1'>
                                    <p className='font-[cd-se] text-[20px] text-[#212833]'>Essential</p>
                                    <p className='text-[16px] text-[#767676]'>For those who already have a Hong Kong office address</p>
                                    <div className='align-items-center d-flex gap-2'>
                                        <p className='text-[25px] font-[cd-m] text-[#212833] p-0 m-0'>HK$</p>
                                        <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>5,800</p>
                                    </div>
                                    <p className='text-[#767676] text-[14px] pb-2'>HK$3,850 government fees included</p>
                                    <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                        Get this plan
                                    </button>
                                    <div className='pt-3'>
                                        <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                            Talk to an expert
                                        </button>
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Incorporation</p>
                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                        <li>Incorporation application</li>
                                        <li>Certificate of Incorporation (CI)</li>
                                        <li>Articles of Association</li>
                                        <li>Business Registration Certificate (BRC) for 1 year</li>
                                        <li>Cloud Bss app document storage</li>
                                        <li>Neobank account opening assistance</li>
                                    </ul>
                                    <div className='pt-2'>
                                        <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Corporate Secretary</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                            <li>Personal Corporate Secretary On‑demand support via live chat</li>
                                            <li>Annual General Meeting papers</li>
                                            <li>Annual Returns Filing (NAR1)</li>
                                            <li>Automated reminders of filing deadlines</li>
                                            <li>Online shares distribution management and capital table</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
          </div>
        </div>,
      </SwiperSlide>
    
      <SwiperSlide>
        <div className="sm:mb-0 col-11">
          <div className="sm:mb-0 w-full sm:w-[100%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[32px] px-6 py-6">
          <div>
                                <div className='bg-[#FFFDFA] rounded-[20px] p-4 flex-1'>
                                    <p className='font-[cd-se] text-[20px] text-[#212833]'>Essential</p>
                                    <p className='text-[16px] text-[#767676]'>For those who already have a Hong Kong office address</p>
                                    <div className='align-items-center d-flex gap-2'>
                                        <p className='text-[25px] font-[cd-m] text-[#212833] p-0 m-0'>HK$</p>
                                        <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>5,800</p>
                                    </div>
                                    <p className='text-[#767676] text-[14px] pb-2'>HK$3,850 government fees included</p>
                                    <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                        Get this plan
                                    </button>
                                    <div className='pt-3'>
                                        <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                            Talk to an expert
                                        </button>
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Incorporation</p>
                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                        <li>Incorporation application</li>
                                        <li>Certificate of Incorporation (CI)</li>
                                        <li>Articles of Association</li>
                                        <li>Business Registration Certificate (BRC) for 1 year</li>
                                        <li>Cloud Bss app document storage</li>
                                        <li>Neobank account opening assistance</li>
                                    </ul>
                                    <div className='pt-2'>
                                        <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Corporate Secretary</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                            <li>Personal Corporate Secretary On‑demand support via live chat</li>
                                            <li>Annual General Meeting papers</li>
                                            <li>Annual Returns Filing (NAR1)</li>
                                            <li>Automated reminders of filing deadlines</li>
                                            <li>Online shares distribution management and capital table</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
          </div>
        </div>,
      </SwiperSlide>
      <SwiperSlide>
        <div className="sm:mb-0 col-11">
          <div className="sm:mb-0 w-full sm:w-[100%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[32px] px-6 py-6">
          <div>
                                <div className='bg-[#FFFDFA] rounded-[20px] p-4 flex-1'>
                                    <p className='font-[cd-se] text-[20px] text-[#212833]'>Essential</p>
                                    <p className='text-[16px] text-[#767676]'>For those who already have a Hong Kong office address</p>
                                    <div className='align-items-center d-flex gap-2'>
                                        <p className='text-[25px] font-[cd-m] text-[#212833] p-0 m-0'>HK$</p>
                                        <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>5,800</p>
                                    </div>
                                    <p className='text-[#767676] text-[14px] pb-2'>HK$3,850 government fees included</p>
                                    <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                        Get this plan
                                    </button>
                                    <div className='pt-3'>
                                        <button className='hover:bg-[#212833] hover:text-[#fff] w-full py-[10px] text-[#000] text-[16px] rounded-full border border-dark'>
                                            Talk to an expert
                                        </button>
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Incorporation</p>
                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                        <li>Incorporation application</li>
                                        <li>Certificate of Incorporation (CI)</li>
                                        <li>Articles of Association</li>
                                        <li>Business Registration Certificate (BRC) for 1 year</li>
                                        <li>Cloud Bss app document storage</li>
                                        <li>Neobank account opening assistance</li>
                                    </ul>
                                    <div className='pt-2'>
                                        <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Corporate Secretary</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                                            <li>Personal Corporate Secretary On‑demand support via live chat</li>
                                            <li>Annual General Meeting papers</li>
                                            <li>Annual Returns Filing (NAR1)</li>
                                            <li>Automated reminders of filing deadlines</li>
                                            <li>Online shares distribution management and capital table</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
          </div>
        </div>,
      </SwiperSlide>

    </Swiper>



                </div>
            </section>
        
            
            <section className="bg-[#F3EFE7] overflow-hidden sm:px-20 px-6  sm:py-[50px] py-[30px]">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-6">
                            <div className="text-center">
                                <div className='d-flex justify-center  pb-4'>
                                    <div className='border border-dark rounded-full text-center text-[#000] font-[cd-m] text-[18px] w-[160px] py-[8px]'>RESOURCES</div>
                                </div>
                                <p className="font-[cd-se]  no-underline sm:text-[35px] text-[30px]  text-[#212833] text-center sm:leading-[38px] leading-[30px]">Fresh insights from our business blog</p>

                            </div>
                        </div>
                    </div>

                    <div className="row justify-between sm:pt-14 pt-4">
                        <div className="col-md-4">
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
                                    <p className='font-[cd-se] text-[#0D0D0D] text-[22px]  leading-[25px]  mb-0'>How to Deal with Inflation&apos;s Effects on Your Small Business</p>
                                    <p className='font-[cd-r]  text-[14px] text-[#4F4F4F]  text-[16px] sm:pt-6 pt-3'>A year end package with everything you need to file comes standard with Cloud Inc. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>

                                    <div className="sm:py-6">
                                        <Link href="/"><button className="font-[cd-m]  text-[16px] text-[#212833] border-[#212833] border-[1px]  rounded-[5px] px-8 py-[8px] rounded-full hover:bg-[#000] hover:text-[#fff]">Learn More</button></Link>
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
                                    <p className='font-[cd-se] text-[#0D0D0D] text-[22px]  leading-[25px]  mb-0'>How to Deal with Inflation&apos;s Effects on Your Small Business</p>
                                    <p className='font-[cd-r]  text-[14px] text-[#4F4F4F]  text-[16px] sm:pt-6 pt-3'>A year end package with everything you need to file comes standard with Cloud Inc. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>

                                    <div className="sm:py-6 py-3">
                                        <Link href="/"><button className="font-[cd-m]  text-[16px] text-[#212833] border-[#212833] border-[1px]  rounded-[5px] px-8 py-[8px] rounded-full hover:bg-[#000] hover:text-[#fff]">Learn More</button></Link>
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
                                    <p className='font-[cd-se] text-[#0D0D0D] text-[22px]  leading-[25px]  mb-0'>How to Deal with Inflation&apos;s Effects on Your Small Business</p>
                                    <p className='font-[cd-r]  text-[14px] text-[#4F4F4F]  text-[16px] sm:pt-6 pt-3'>A year end package with everything you need to file comes standard with Cloud Inc. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>

                                    <div className="sm:py-6 py-3">
                                        <Link href="/"><button className="font-[cd-m]  text-[16px] text-[#212833] border-[#212833] border-[1px]  rounded-[5px] px-8 py-[8px] rounded-full hover:bg-[#000] hover:text-[#fff]">Learn More</button></Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
                    
            <section className="bg-[#fff] sm:px-20 px-6  py-5">
                <div className="overflow-hidden">
                    <div className="row justify-center">
                        <div className="col-md-6 sm:pt-4">
                            <p className="font-[cd-se] text-center  sm:text-[35px] text-[28px] text-[#212833] sm:leading-[38px] leading-[30px]">Frequently Asked Questions on Company Registration</p>
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
