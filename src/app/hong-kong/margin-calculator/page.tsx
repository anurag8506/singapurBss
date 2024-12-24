'use client'
import Header from '../components/header';
import Footer from '../components/footer'
import Image from 'next/image';
import FAQ from '../components/faq'
import PreIncorporation from '../components/pre‑Incorporation'
import { useState } from "react";

export default function Home() {
  const [cost, setCost] = useState<number>(0);
  const [revenue, setRevenue] = useState<number>(0);
  const [activeRegStep, setActiveRegStep] = useState<number | null>(null);

  const regStep = (index: number) => {
    setActiveRegStep(activeRegStep === index ? null : index);
  };

  const handleCostChange = (value: string) => {
    setCost(value ? parseFloat(value) : 0);
  };

  const handleRevenueChange = (value: string) => {
    setRevenue(value ? parseFloat(value) : 0);
  };

  const calculateProfit = (): number => {
    return revenue - cost;
  };

  const calculateMargin = (): string => {
    if (revenue === 0) return "-Infinity %";
    const margin = ((calculateProfit() / revenue) * 100).toFixed(2);
    return `${margin} %`;
  };

  return (
    <>
      <Header />
      <section className='bg-[#fff]'>
        <div className="overflow-hidden sm:px-20 px-6 sm:pt-[100px] pt-[50px] sm:py-[100px]">
          <div className="container-fluid p-0">
            <div className="row align-items-center pb-[20px] justify-center">
              <div className='col-md-8 mb-4'>
                <p className="font-[cd-b] text-[#212833] text-[28px] p-text sm:text-left sm:text-[45px] sm:leading-[45px] leading-[31px] text-center ">
                  Profit Margin Calculator
                </p>
                <p className="font-[cd-r] text-[#212833] text-[18px] text-[#232323] text-center ">
                  We created this free-to-use profit margin calculator so you can measure the increase in your revenue and determine the best price for your products in Hong Kong. We would love to hear from you if you have any questions.
                </p>
              </div>
            </div>
            <div className="row align-items-center pb-[20px] justify-center">
              <div className='col-md-10 sm:pt-5'>
                <div className="row align-items-start ">
                  <div className='col-md-6 mb-4'>
                    <div className='rounded-[20px] bg-[#F3EDE6] py-3 sm:px-5 px-3 w-full'>
                      <div className='sm:p-5'>
                        <p className='sm:text-[25px] text-[22px] leading-[25px] font-[cd-m] pt-4'>Selling information</p>
                        <p className='sm:text-[18px] text-[16px]'>First, lets enter some numbers. You don&apos;t need to calculate anything from top to bottom - do it in any order you like.</p>
                        <div className='pt-4'>
                          <input type="number" className="form-control py-2" value={cost || ""} onChange={(e) => handleCostChange(e.target.value)} placeholder="Enter cost" />
                        </div>
                        <div className='pt-3'>
                          <input type="number" className="form-control py-2 " value={revenue || ""} onChange={(e) => handleRevenueChange(e.target.value)} placeholder="Enter revenue"
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className='col-md-6 mb-4'>
                    <div className='px-4 py-3'>
                      <div className='d-flex align-items-center justify-between'>
                        <div><p className='sm:text-[30px] text-[22px] font-[cd-m]'>Cost :</p></div>
                        <div><p className='sm:text-[30px] text-[22px] font-[cd-m] '>HK$ {cost}</p></div>
                      </div>
                      <div className='border-dark border '></div>
                      <div className='d-flex align-items-center justify-between pt-4'>
                        <div><p className='sm:text-[30px] text-[22px] font-[cd-m]'>Profit:</p></div>
                        <div><p className='sm:text-[30px] text-[22px] font-[cd-m] block'>HK$ {calculateProfit()}</p></div>
                      </div>
                      <div className='border-dark border '></div>
                      <div className='d-flex align-items-center justify-between pt-4'>
                        <div><p className='sm:text-[30px] text-[22px] font-[cd-m]'>Revenue:</p></div>
                        <div><p className='sm:text-[30px] text-[22px] font-[cd-m]'>HK$ {revenue}</p></div>
                      </div>
                      <div className='border-dark border '></div>
                      <div className='d-flex align-items-center justify-between pt-4'>
                        <div><p className='sm:text-[30px] text-[22px] font-[cd-m]'>Margin:</p></div>
                        <div><p className='sm:text-[30px] text-[22px] font-[cd-m]'>{calculateMargin()}</p></div>
                      </div>

                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </section>

      <section className="bg-[#CCDFFF] overflow-hidden sm:px-20 px-6 py-5 ">
        <div className="container-fluid p-0">
          <div className="row align-items-center">
            <div className="col-md-6 mb-2">
              <div className="col-md-9">
                <p className='font-[cd-se] text-[#0061FE] sm:text-[40px] text-[28px] leading-[32px] sm:leading-[43px]  mb-0 p-text '>Got questions? Chat with our local experts</p>
                <p className='font-[cd-r] text-[#0061FE] text-[16px] pt-4 mb-0 p-text '>Choose a convenient time to chat with our accounting experts and get the answers you need to take the next step.
                </p>
                <div className="flex sm:justify-start justify-center items-center pt-4">
                  <button className="bg-[#0061FE] text-[#fff] font-[cd-m] py-[10px] rounded-full sm:w-[180px] w-[180px] mb-4 text-[14px]">
                    Schedule a call
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className='d-flex justify-end'>
                <div className="col-md-6">
                  <Image src="/assets/Group (2).png" className="w-full"
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

      <section className="bg-[#F3EFE7] sm:px-20 px-6  sm:py-[60px] py-[50px]">
        <div className="overflow-hidden">
          <div className="row justify-center">
            <div className="col-md-8">
              <div className='d-flex justify-center'>
                <div className='border border-dark rounded-full px-3 py-[8px] w-[180px]'>
                  <p className='text-[18px] text-[#212833] text-center  m-0'>How it works</p>
                </div>

              </div>
              <p className="font-[cd-se] text-center  sm:text-[40px] text-[28px] text-[#212833] sm:leading-[45px] leading-[30px] sm:pt-[50px] pt-[30px] ">Gross margin calculator: how does it work?</p>
              <p className='p-text text-[16px] text-center'> For any business to grow, monitoring and measuring performance is essential. Profit margin is an important metric to keep in mind, this will allow you to plan your profitability accordingly.</p>

            </div>
          </div>
          <div className="row justify-center pt-5">
            <div className="col-md-10 mb-4">

              <div  >

                <div className='bg-white rounded-[20px]'>
                  <div
                    className="flex justify-between items-center  cursor-pointer bg-white sm:p-[50px] p-[30px] rounded-[20px] mb-2 "
                    onClick={() => regStep(1)}
                  >
                    <div>
                    <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Profit</span>

                    </div>
                    <span className="font-[cd-m] text-[#212833] text-[25px]">{activeRegStep === 1 ? "-" : "+"}</span>
                  </div>
                  {activeRegStep === 1 && (

                    <div className='row justify-between items-center sm:p-[50px] p-[30px] rounded-[20px] mb-2  '>
                      <div className='col-md-6 mb-4 relative'>
                        <p className="font-[cd-r] text-[#212833] sm:text-[18px] text-[16px] ">Profit is the difference between the amount of money a company spends on its products and how much it earns in revenue.
                          To figure out your business’ profitability, you must understand how to calculate net profit margin.
                          To determine whether you are profitable on each item you sell, use the gross profit margin. Ultimately it is important to calculate the net profit in order to understand the business’ revenue and profitability.</p>
                     <div className='border border-dark rounded-full w-[100px] py-[5px] text-[16px] font-[cd-m] text-center bottom-['>Close</div>
                      </div>
                      <div className='col-md-6 mb-4'>
                        <div  className='d-flex justify-end'>
                        <div className='col-md-6'>
                      <Image src="/assets/accountant-d3df4dd4ef 1.png" className="w-full" width={1080} height={1080} alt="no-img"/>

                        </div>

                        </div>
                      
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <div
                    className="flex justify-between items-center  cursor-pointer bg-white p-3 rounded-[20px] mb-2 "
                    onClick={() => regStep(2)}
                  >
                    <div className='flex gap-3 align-items-center'>
                      <div className='bg-[#0061FE] rounded-[50%] text-white w-8 h-8 flex items-center justify-center'>2</div>


                      <span className="font-[cd-m] text-[#212833] text-[16px]">Register Your Company</span>

                    </div>

                    <span className="font-[cd-m] text-[#212833] text-[16px]">{activeRegStep === 2 ? "-" : "+"}</span>
                  </div>
                  {activeRegStep === 2 && (
                    <p className="text-[#7C7C7C] font-[cd-r] text-[13px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                    </p>
                  )}
                </div>
                <div>
                  <div
                    className="flex justify-between items-center  cursor-pointer bg-white p-3 rounded-[20px] mb-2 "
                    onClick={() => regStep(3)}
                  >
                    <div className='flex gap-3 align-items-center'>
                      <div className='bg-[#0061FE] rounded-[50%] text-white w-8 h-8 flex items-center justify-center'>3</div>


                      <span className="font-[cd-m] text-[#212833] text-[16px]">Establish Your Accounting Schedule</span>

                    </div>

                    <span className="font-[cd-m] text-[#212833] text-[16px]">{activeRegStep === 3 ? "-" : "+"}</span>
                  </div>
                  {activeRegStep === 3 && (
                    <p className="text-[#7C7C7C] font-[cd-r] text-[13px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum maxime nam quo aliquam! Officia deleniti a vel labore necessitatibus autem in assumenda, maiores voluptatibus aliquam dolor saepe! Quam, sit?
                    </p>
                  )}
                </div>
                <div>
                  <div
                    className="flex justify-between items-center  cursor-pointer bg-white p-3 rounded-[20px] mb-2 "
                    onClick={() => regStep(4)}
                  >
                    <div className='flex gap-3 align-items-center'>
                      <div className='bg-[#0061FE] rounded-[50%] text-white w-8 h-8 flex items-center justify-center'>4</div>


                      <span className="font-[cd-m] text-[#212833] text-[16px]">Set Up Your Business Banking Account</span>

                    </div>

                    <span className="font-[cd-m] text-[#212833] text-[16px]">{activeRegStep === 4 ? "-" : "+"}</span>
                  </div>
                  {activeRegStep === 4 && (
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


      <section className="bg-[#fff] overflow-hidden sm:px-20 px-6  sm:py-[50px] py-[20px]">
        <div className="container-fluid p-0">
          <div className="row justify-center">
            <div className="col-md-12 sm:pb-2">
              <div className="text-center pb-2  ">
                <div className='d-flex justify-center'>
                  <div className=" px-2 py-[7px] font-[cd-m]  text-[13px] font-[500]  text-[#212833]  border border-black rounded-[30px] sm:w-[120px] w-[120px] ">PRICING</div>
                </div>

                <div className="row justify-center  pb-3">
                  <div className="col-md-6 sm:pt-3 pt-4  ">
                    <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[28px]   text-[#212833]   sm:leading-[40px] leading-[32px] text-center   ">Customizable Plans to Suit Your Business</p>
                    <p className='text-[16px]'>Tailored Registration Packages to Suit Your Requirements. From Registration Only to Full Compliance Services.</p>
                    <div className='sm:flex  justify-center align-items-center'>
                      <div className='d-flex align-items-center justify-center text-[16px]'><span className='mr-2'></span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="9.5" stroke="#ADADAD" />
                        <path d="M11.212 7.23H9.7V5.62H11.212V7.23ZM11.212 15H9.7V8.042H11.212V15Z" fill="#ADADAD" />
                      </svg>
                      </div>
                      <div className='sm:pb-0 pb-4 sm:ml-4'>
                        <div className="sm:pt-0 pt-4">
                          <div className="border border-dark py-2 sm:w-[130px] px-3 w-full flex justify-between items-center rounded-[10px]">
                            <span>HK$ HKD</span>
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.40226 11.3701C9.48086 11.2915 9.48084 11.1641 9.40222 11.0855C9.32363 11.007 9.19628 11.007 9.11772 11.0856L5.83453 14.3686C5.24786 14.9553 4.29672 14.9553 3.71006 14.3686L0.426865 11.0856C0.348309 11.007 0.220955 11.007 0.142373 11.0855C0.0637509 11.1641 0.0637283 11.2915 0.142323 11.3701L3.71004 14.9378C4.2967 15.5245 5.24788 15.5245 5.83455 14.9378L9.40226 11.3701Z" fill="black" />
                              <path d="M9.40226 4.62988C9.48086 4.70847 9.48084 4.83591 9.40222 4.91447C9.32363 4.993 9.19628 4.99298 9.11772 4.91442L5.83453 1.63137C5.24786 1.04474 4.29672 1.04474 3.71006 1.63137L0.426865 4.91443C0.348309 4.99298 0.220955 4.993 0.142373 4.91447C0.0637509 4.83591 0.0637283 4.70847 0.142323 4.62988L3.71004 1.06216C4.2967 0.475493 5.24788 0.475493 5.83455 1.06216L9.40226 4.62988Z" fill="black" />

                            </svg>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>




          </div>
          <div className='row justify-center'>
            <div className='col-md-4 mb-4 d-flex'>
              <div className='bg-[#F3EFE7] rounded-[20px] p-2 w-full'>
                <div className='bg-[#FFFDFA] rounded-[20px] p-4 flex-1'>
                  <p className='font-[cd-se] text-[20px] text-[#212833]'>Essential</p>
                  <p className='text-[16px] text-[#767676]'>For those who already have a Hong Kong office address</p>
                  <div className='align-items-center d-flex gap-2'>
                    <p className='text-[25px] font-[cd-m] text-[#212833] p-0 m-0'>HK$</p>
                    <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>5,800</p>
                  </div>
                  <p className='text-[#767676] text-[14px] pb-2'>HK$3,850 government fees included</p>
                  <button className="font-[cd-m] font-[500] text-[16px] text-[#212833]  border-[1px] border-[#212833] px-5 py-[10px] rounded-[30px] text-center bg-[#fff] hover:bg-[#212833] hover:text-[#fff] w-full ">
                    Get this plan
                  </button>
                  <div className='pt-3'>
                    <button className="font-[cd-m] font-[500] text-[16px] text-[#212833]  border-[1px] border-[#212833] px-5 py-[10px] rounded-[30px] text-center bg-[#fff] hover:bg-[#212833] hover:text-[#fff] w-full ">
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

            <div className='col-md-4 mb-4 d-flex'>
              <div className='bg-[#F3EFE7] rounded-[20px] p-2 w-full'>
                <div className='bg-[#FFFDFA] rounded-[20px] p-4 flex-1'>
                  <p className='font-[cd-se] text-[20px] text-[#212833]'>All-inclusive</p>
                  <p className='text-[16px] text-[#767676]'>For those who already have a Hong Kong office address</p>
                  <div className='align-items-center d-flex gap-2'>
                    <p className='text-[25px] font-[cd-m] text-[#212833] p-0 m-0'>HK$</p>
                    <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>7,800</p>
                  </div>
                  <p className='text-[#767676] text-[14px] pb-2'>HK$3,850 government fees included</p>
                  <button className="font-[cd-m] font-[500] text-[16px] text-[#212833]  border-[1px] border-[#212833] px-5 py-[10px] rounded-[30px] text-center bg-[#fff] hover:bg-[#212833] hover:text-[#fff] w-full ">
                    Get this plan
                  </button>
                  <div className='pt-3'>
                    <button className="font-[cd-m] font-[500] text-[16px] text-[#212833]  border-[1px] border-[#212833] px-5 py-[10px] rounded-[30px] text-center bg-[#fff] hover:bg-[#212833] hover:text-[#fff] w-full ">
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
                    <p className='font-[cd-se] text-[18px] text-[#212833] pt-3'>Registered Address</p>
                    <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#212833]">
                      <li>Registered address for 1 year</li>
                      <li>Notifications when you receive mail</li>
                      <li>Scanning and forwarding of notices and documents to this address</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </section>
      <section className="bg-[#F3EFE7] sm:px-20 px-6  sm:py-[50px] py-[30px]">
        <div className="overflow-hidden">
          <div className="row justify-center">
            <div className="col-md-6">
              <p className='text-[18px] text-[#212833] text-center sm:pt-4'>WHAT YOU GET</p>
              <p className="font-[cd-se] text-center  sm:text-[35px] text-[28px] text-[#212833] sm:leading-[38px] leading-[31px] ">Set Your New Hong Kong Business Up for Success</p>
            </div>
          </div>
          <div className='flex justify-center pt-4'>
            <div className='col-md-10'>
              <div className='row justify-between align-items-center'>
                <div className='col-md-5 mb-4'>
                  <Image src="/assets/Rectangle 4630.png" className="w-full" width={1080} height={1080} alt="no-img" />
                </div>
                <div className='col-md-5 mb-4'>
                  <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>Business Bank Account Opening, Simplified</p>
                  <p className='font-[cd-r] text-[#000] text-[16px]'>We connect you with our partner banks and assist with your business bank account application. Our partners include HSBC, DBS, Transwap, Airwallex, and WorldFirst.</p>
                  <Image src="/assets/aaaaa.png" width={200} height={100} alt="no-img" />
                </div>
              </div>
              <div className='row justify-between align-items-center'>
                <div className='col-md-5 mb-4 order-md-2 order-1'>
                  <Image src="/assets/Rectangle 4631.png" className="w-full" width={1080} height={1080} alt="no-img" />
                </div>
                <div className='col-md-5 order-md-1 order-2'>
                  <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>Ongoing Business Support Beyond Startup</p>
                  <p className='font-[cd-r] text-[#000] text-[16px]'>From company registration to accounting and bookkeeping services, our local accountants have you covered for the first year and beyond.</p>

                </div>
              </div>
              <div className='row justify-between align-items-center'>
                <div className='col-md-5 mb-4 order-md-1 order-1'>
                  <Image src="/assets/Rectangle 4639.png" className="w-full" width={1080} height={1080} alt="no-img" />
                </div>
                <div className='col-md-5 mb-4 order-md-2 order-2'>
                  <p className='font-[cd-se] text-[#000] sm:text-[25px] text-[20px] sm:leading-[28px] leading-[23px]'>Ensure Proper Tax Compliance</p>
                  <p className='font-[cd-r] text-[#000] text-[16px]'>
                    We&apos;ll provide information on Hong Kong tax rates and local allowances, ensuring you stay tax-compliant while doing business in Hong Kong.
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>

      </section>
      <PreIncorporation/>
<FAQ/>


      <Footer />
    </>
  );
}
