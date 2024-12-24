'use client'
import Header from '../components/header';
import Footer from '../components/footer'
import Image from 'next/image';
import FAQ from "../components/faq"
import PreIncorportaion from "../components/pre‑Incorporation"


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

  const closeContent = () => {
    setActiveRegStep(null);
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
            <div className="col-md-6">
              <div className='d-flex justify-center'>
                <div className='border border-dark rounded-full px-3 py-[8px] w-[280px]'>
                  <p className='text-[18px] text-[#212833] text-center  m-0'>WHERE ARE YOU FROM?</p>
                </div>

              </div>
              <p className="font-[cd-se] text-center  sm:text-[40px] text-[28px] text-[#212833] sm:leading-[45px] leading-[30px] sm:pt-[50px] pt-[30px] ">How to pick a company name</p>
              <p className='p-text text-[16px] text-center'>You don’t want ACRA to reject your business name, so we have listed some restrictions that you should know about before you start choosing one. Your business name has to be:</p>

            </div>
          </div>
          <div className="row justify-center pt-5">
            <div className="col-md-10 mb-4">

              <div  >

                <div className="bg-white rounded-[20px]">
                  <div
                    className="flex justify-between items-center cursor-pointer bg-white sm:p-[20px] p-[20px] rounded-[20px] mb-2"
                    onClick={() => regStep(1)}
                  >
                    <div>
                      <div className="flex gap-3 align-items-center">

                        <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Profit</span>
                      </div>
                    </div>
                    <span className="font-[cd-m] text-[#212833] text-[25px]">{activeRegStep === 1 ? "-" : "+"}</span>
                  </div>

                  {activeRegStep === 1 && (
                    <div className="row justify-between items-center sm:p-[50px] p-[30px] rounded-[20px] mb-2">
                      <div className="col-md-6 mb-4 relative">
                        <p>profit is the difference between the amount you spend on your products and the amount you make on your products.</p>
                        <p>

                          When you’re working out the profit of your products, you should use gross profit margin.</p>
                        <p>

                          For working out the profitabily of your business, you should use net profit margin.</p>
                        <p>
                          When you intend to measure the profitability of your business, a gross profit margin is fine for determining the profitability of each item you are selling. However, you would need to calculate net profit to measure the overall profitability of your business.</p>

                        {/* Close Button */}
                        <button
                          className="border border-dark rounded-full w-[100px] py-[5px] text-[16px] font-[cd-m] text-center"
                          onClick={closeContent}
                        >
                          Close
                        </button>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="d-flex justify-end">
                          <div className="col-md-6">
                            <Image src="/assets/accountant-d3df4dd4ef 1 (1).png" className="w-full" width={1080} height={1080} alt="no-img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-[20px]">
                  <div
                    className="flex justify-between items-center cursor-pointer bg-white sm:p-[20px] p-[20px] rounded-[20px] mb-2"
                    onClick={() => regStep(2)}
                  >
                    <div>
                      <div className="flex gap-3 align-items-center">

                        <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Revenue and Profit</span>
                      </div>
                    </div>
                    <span className="font-[cd-m] text-[#212833] text-[25px]">{activeRegStep === 2 ? "-" : "+"}</span>
                  </div>

                  {activeRegStep === 2 && (
                    <div className="row justify-between items-center sm:p-[50px] p-[30px] rounded-[20px] mb-2">
                      <div className="col-md-6 mb-4 relative">
                        <p>profit is the difference between the amount you spend on your products and the amount you make on your products.</p>
                        <p>

                          When you’re working out the profit of your products, you should use gross profit margin.</p>
                        <p>

                          For working out the profitabily of your business, you should use net profit margin.</p>
                        <p>
                          When you intend to measure the profitability of your business, a gross profit margin is fine for determining the profitability of each item you are selling. However, you would need to calculate net profit to measure the overall profitability of your business.</p>

                        {/* Close Button */}
                        <button
                          className="border border-dark rounded-full w-[100px] py-[5px] text-[16px] font-[cd-m] text-center"
                          onClick={closeContent}
                        >
                          Close
                        </button>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="d-flex justify-end">
                          <div className="col-md-6">
                            <Image src="/assets/accountant-d3df4dd4ef 1 (1).png" className="w-full" width={1080} height={1080} alt="no-img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="bg-white rounded-[20px]">
                  <div
                    className="flex justify-between items-center cursor-pointer bg-white sm:p-[20px] p-[20px] rounded-[20px] mb-2"
                    onClick={() => regStep(3)}
                  >
                    <div>
                      <div className="flex gap-3 align-items-center">

                        <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Net Profit Margin</span>
                      </div>
                    </div>
                    <span className="font-[cd-m] text-[#212833] text-[25px]">{activeRegStep === 3 ? "-" : "+"}</span>
                  </div>

                  {activeRegStep === 3 && (
                    <div className="row justify-between items-center sm:p-[50px] p-[30px] rounded-[20px] mb-2">
                      <div className="col-md-6 mb-4 relative">
                        <p>profit is the difference between the amount you spend on your products and the amount you make on your products.</p>
                        <p>

                          When you’re working out the profit of your products, you should use gross profit margin.</p>
                        <p>

                          For working out the profitabily of your business, you should use net profit margin.</p>
                        <p>
                          When you intend to measure the profitability of your business, a gross profit margin is fine for determining the profitability of each item you are selling. However, you would need to calculate net profit to measure the overall profitability of your business.</p>

                        {/* Close Button */}
                        <button
                          className="border border-dark rounded-full w-[100px] py-[5px] text-[16px] font-[cd-m] text-center"
                          onClick={closeContent}
                        >
                          Close
                        </button>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="d-flex justify-end">
                          <div className="col-md-6">
                            <Image src="/assets/accountant-d3df4dd4ef 1 (1).png" className="w-full" width={1080} height={1080} alt="no-img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
