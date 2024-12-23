'use client'
import Header from '../components/header';
import Footer from '../components/footer'
import Image from 'next/image';
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
              <section className='bg-[#fff'>
                           <div className="overflow-hidden sm:px-20 px-6 sm:pt-[100px] pt-[50px] ">
                               <div className="container-fluid p-0">
                                   <div className="row align-items-center pb-10 ">
                                       <div className="col-md-6 mb-4">
                                           <div className='col-md-9'>
                                               <p className="font-[cd-se]  no-underline sm:text-[45px] text-[30px] text-[#212833]  sm:leading-[40px] leading-[30px] p-text">
                                               Easily convert from a Sole Proprietorship to a Pte Ltd
                                               </p>
                                           </div>
                                           <div className='col-md-10'>
                                               <p className="font-[cd-r] font-[500] no-underline text-[16px]  text-[#212833] p-text ">If your sole proprietorship is making a significant profit, consider converting it to a Pte. Ltd. structure. This will give you more fundraising options, lower tax rates, and less personal responsibility.</p>
                                               <div className='sm:flex sm:justify-start justify-center   '>
                                               <div className="flex sm:justify-start justify-center   items-center sm:pt-4 pt-2 sm:mr-4">
                                                   <button className=" border border-dark text-[#000] font-[cd-m] sm:w-[220px] w-full  px-6 py-[10px] rounded-full mb-4 hover:bg-[#000] hover:text-[#ffff] ">
                                                   Book a Consultation
                                                   </button>
                                               </div>
                                               <div className="flex sm:justify-start justify-center   items-center sm:pt-4">
                                                   <button className=" border border-dark   font-[cd-m] sm:w-[160px]  w-full  px-6 py-[10px] rounded-full mb-4  hover:bg-[#000] hover:text-[#ffff]">
                                                   Pricing
                                                   </button>
                                               </div>
                                               </div>
                                              
                                           </div>
                                       </div>
                                       <div className='col-md-6 '>
                                           <div className='d-flex justify-content-end'>
                                               <div className='col-md-9'>
                                                   <Image
                                                       src="/assets/av.png"
                                                       alt=".."
                                                       className="w-full object-contain"
                                                       width='8000'
                                                       height='100'
                                                   />
           
                                               </div>
           
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
                         <section className="bg-[#FFFCF5] overflow-hidden sm:px-20 px-6  py-10">
                                       <div className="container-fluid p-0">
                       
                                           <div className="row justify-center">
                                               <div className="col-md-12 sm:pb-2">
                                                   <div className="text-center pb-2">
                                                       <div className='d-flex justify-center'> 
                                                           <div className=" px-2 py-[10px] font-[cd-m]  font-[500]  text-[#212833]  border border-dark rounded-[30px] sm:w-[260px] w-[260px] text-[14px] tracking-wider ">Incorporation Process</div>
                                                       </div>
                       
                                                       <div className="row justify-center  sm:pb-4 pb-3">
                                                           <div className="col-md-5 sm:pt-3 pt-4  ">
                                                               <p className="font-[cd-se]  no-underline sm:text-[40px] text-[30px] text-[#212833]  sm:leading-[40px] leading-[30px]">Change of business structure questions, answered</p>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className='d-flex justify-center'>
                                               <div className='col-md-10'>
                                            <div className="row align-items-center justify-between pt-4">
                                            <div className="col-md-5 mb-4 order-md-2 order-1 ">
                                              
                                                 
                                              <Image src='/assets/image (6).png' alt=".." width='3000' height='3000' className="w-full" />
                                        
                                    
                                  </div>
                                               <div className="col-md-5 mb-4 order-md-1 order-2">
                                                           <p className='text-[20px] font-[cd-se]  text-[#212833] '>What is a Pte Ltd?</p>
                                                           <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[16px]  mb-0 '>A private limited company (Pte Ltd) is the most popular type of business entity in Singapore. This type of company has limited liability, which means that the company&ap0s;s responsibility is limited to the value of the shareholders shares. Profits earned by the company are subject to corporate tax, but shareholders don&apos;t have t
                                                           </p>
                                               </div>
                       
                                             
                                               </div>
                                               <div className='row align-items-center justify-between'>
                                               <div className="col-md-5 mb-4 ">
                                                           <Image src='/assets/image (8).png' alt=".." width='3000' height='3000' className="w-full" />
                                                       </div>
                                                 
                                                    <div className="col-md-5 mb-4">
                                                   
                                                           <p className='text-[20px] font-[cd-se]  text-[#212833] '>Advantages of converting to a Pte Ltd</p>
                                                           <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[16px]  mb-0 '>
                                                            <li>You won’t be legally responsible for all lawsuits filed against your business.
</li>
<li>Sole proprietors face a greater risk of financial ruin than directors of private limited companies.</li>
<li>
You can enjoy tax benefits that a sole proprietor won’t have, such as tax exemptions.</li>

<li>Your capital is not limited.</li>
<li>You can find a successor if you happen to leave the business.</li>
<li>You have a greater chance of partnering with serious businesses.</li>
                                                           </p>
                       
                                               </div>
                                               </div>
                                               <div className='row align-items-center justify-between'>
                                               <div className="col-md-5 mb-4  order-md-2 order-1">
                                                <p className='text-[20px] font-[cd-se]  text-[#212833] '>Are there any downsides?</p>
                                            <p className='font-[cd-r] font-[500] text-[#7C7C7C] text-[16px]  mb-0 '>
                                            While there are many perks that come with converting your sole proprietorship to a Pte Ltd, there are a few drawbacks:

A company&apos;s dissolution is a complex task
Such companies are more difficult to manage
Pte Ltds in Singapore must comply with stricter rules and regulations according to the Singapore Companies Act

Thankfully, we are professionals in all things business structure and what&apos;s best for your needs. Trust us with this process so that you&apos;re paying the right tax and are compliant with authorities at all times.
                                                </p>
                                               </div>
                                                    <div className="col-md-5 mb-4  order-md-2 order-1 ">
                                              
                                                           <Image src='/assets/image (7).png' alt=".." width='3000' height='3000' className="w-full" />
                                                       </div>
                                           </div>
                       
                                           </div>
                                         
                                               </div>
                                                
                      
                                       </div>
                                   </section>

            <section className="bg-[#FFFCF5] overflow-hidden sm:px-20 px-6 sm:py-[100px] py-[30px]">
                <div>
                    
                        <div className="text-center  ">
                            <div className='d-flex justify-center'>
                                <div className="px-2 py-[10px] font-[cd-m]  border border-dark rounded-full text-[16px]  text-[#212833] rounded-[30px] sm:w-[180px] w-[180px] tracking-wider sm:pt-4 ">
                                WHY CLOUD BSS
                                </div>
                            </div>
                            <div className="row justify-center  pb-3">
                                <div className="col-md-6 sm:pt-[50px] pt-[20px] sm:pb-[50px] pb-[20px]  ">
                                    <p className="font-[cd-se] font-[500]  sm:text-[35px] text-[28px] text-[#212833]  sm:leading-[38px] leading-[32px] text-center">Company conversion admin, sorted</p>
                                </div>
                            </div>
                        </div>
                        <div className="row m-0 p-0 d-flex justify-center  ">
                            <div className="col-md-3 mb-4 ">
                                <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                    <div className="mb-4  align-items-center sm:h-[80px]">
                                        <Image src="/assets/image 33 (1).png" alt="Start secure trading quickly"  width="90" height="90" className="object-contain" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]    leading-[20px] sm:h-[20px]">
                                        Your own bookkeeper
                                        
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0">
                                        You&apos;ll work directly with an Cloud Bss expert to make your business&apos;s bookkeeping more efficient. We make sure you pay the right tax from day one with our complete, online bookkeeping services.
                                        
                                        </p>
                                    </div>
                                </div>
                            </div>
                              <div className="col-md-3 mb-4 ">
                                <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                    <div className="mb-4  align-items-center sm:h-[80px]">
                                        <Image src="/assets/image 33 (1).png" alt="Start secure trading quickly"  width="90" height="90" className="object-contain" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]    leading-[20px] sm:h-[20px]">
                                        Your own bookkeeper
                                        
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-0">
                                        You&apos;ll work directly with an Cloud Bss expert to make your business&apos;s bookkeeping more efficient. We make sure you pay the right tax from day one with our complete, online bookkeeping services.
                                        
                                        </p>
                                    </div>
                                </div>
                            </div>

                          
                            <div className="col-md-3 mb-4 ">
                                <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                    <div className="mb-4  align-items-center sm:h-[80px]">
                                        <Image
                                            src="/assets/image 31 (1).png"
                                            alt="Start secure trading quickly"
                                            width="90"
                                            height="90"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]  mb-2  leading-[20px] sm:h-[20px]">
                                        Cash flow clarity
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-4">
                                        Get daily insight into your cash flow to give you financial clarity, with complete bookkeeping services to help you make sense of it all.
                                        </p>

                                    </div>
                      
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="bg-white rounded-[10px] p-4 d-flex flex-column h-100">
                                    <div className="mb-4  align-items-center sm:h-[80px]">
                                        <Image
                                            src="/assets/image 34 (2).png"
                                            alt="Start secure trading quickly"
                                            width="90"
                                            height="90"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="font-[cd-se] font-[500]  text-[#212833]  text-[20px]  mb-2  leading-[20px] sm:h-[20px]">
                                        Compliance and Reporting
                                        </p>
                                        <p className="font-[cd-r] text-[#7C7C7C] text-[16px] mb-4">
                                        You don&apos;t have to deal with the IRD — we&apos;ll do it for you. Our online bookkeeping services will handle all tax, deadlines, and filing so that you pay the right tax and stay compliant.
                                        </p>

                                    </div>
                      
                                </div>
                            </div>

                        </div>

                


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
            <section className="bg-[#FFFCF5] overflow-hidden sm:px-20 px-6  py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2  ">
                                <div className='d-flex justify-center'>
                                    <div className=" px-2 py-[7px] font-[cd-m]  text-[13px] font-[500]  text-[#212833]  border border-black rounded-[30px] sm:w-[120px] w-[120px] ">PRICING</div>
                                </div>

                                <div className="row justify-center  sm:pb-4 pb-3">
                                    <div className="col-md-6 sm:pt-3 pt-4  ">
                                        <p className="font-[cd-se] font-[500]  sm:text-[40px] text-[25px]   text-[#212833]   sm:leading-[40px] leading-[25px] text-center   ">Value-for-money packages for your Pte Ltd business in Singapore</p>
                                        <p className='text-[16px]'>Our packages are tailored to your business stage and monthly revenue. Customise your package with add-ons to suit your needs as you grow.</p>
                                      
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row sm:d-flex justify-center'>
                        <div className='col-md-4 mb-4'>
                            <div className='bg-[#F3EFE7] rounded-[20px] p-2 '>
                                <div className='bg-[#FFFDFA] rounded-[20px] p-4'>
                                    <p className='font-[cd-se] text-[20px]  text-[#212833] '>Operate</p>
                                    <p className='text-[16px] text-[#767676]'>If you want to nail your first year of business and stay compliant</p>
                                    <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>₹2963.89/m</p>
                                    <p className='text-[#767676] text-[14px] pb-2'>₹35,567.00 billed annually</p>
                                    <button className='bg-[#212833] w-full py-[13px] text-[#fff] text-[16px] rounded-full border border-[#212833]' >Get this plan</button>
                                    <div className='pt-3'>
                                        <button className='bg-[#fff] w-full py-[13px]  text-[#212833]  text-[16px] border border-dark rounded-full ' >Talk to an expert</button>

                                    </div>
                                </div>
                                <div className='p-4 '>
                                    <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Cloud BssAccounting software</p>
                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                        <li>Create, send, and chase invoices</li>
                                        <li>Capture bills and receipts easily</li>
                                        <li>Expense Management</li>
                                        <li>Real-time financial reports (Profit & Loss, Balance Sheet, Aged Payables, Aged Receivables)</li>
                                        <li>Use multiple currencies</li>
                                    </ul>
                                    <div className='pt-2'>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Ecommerce</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li>Connect one marketplace</li>

                                        </ul>

                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Bookkeeping</p>


                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li>Unlimited bookkeeping</li>
                                            <li>Automatic reconciliations</li>
                                        </ul>
                                    </div>
                                    <div className='pt-2 pb-3'>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Expert service</p>




                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li>Annual Management reports</li>
                                            <li>In-app chat</li>
                                            <li>Payroll and dividends tax advice</li>
                                            <li>Dedicated accounting team</li>

                                        </ul>

                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Tax and filings</p>


                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">


                                            <li>Unaudited Financial Statements (UFS)</li>
                                            <li>Annual tax return filling</li>
                                        </ul>
                                    </div>
                                    <div className='border border-dark border-t'></div>
                                    <div className='pt-4 d-flex justify-content-between align-items-center'><span className='font-[cd-se] text-[18px]  text-[#212833] '>Optional add-ons</span>
                                   
                                    </div>
                             
        <div>
          <div className="pt-4 d-flex justify-content-between align-items-center">
            <p className="font-[cd-r] text-[14px] text-[#767676] underline">
              Xero Subscription
            </p>
            <p className="font-[cd-r] text-[14px] text-[#767676]">₹37048.64/y</p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <p className="font-[cd-r] text-[14px] text-[#767676]">
              Video call with an expert
            </p>
            <p className="font-[cd-r] text-[14px] text-[#767676]">₹6174.77/h</p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <p className="font-[cd-r] text-[14px] text-[#767676]">
              Personal Income Tax
            </p>
            <p className="font-[cd-r] text-[14px] text-[#767676]">₹9262.16</p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <p className="font-[cd-r] text-[14px] text-[#767676]">
              Full XBRL report
            </p>
            <p className="font-[cd-r] text-[14px] text-[#767676]">₹30873.83</p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <p className="font-[cd-r] text-[14px] text-[#767676]">
              Simplified XBRL report
            </p>
            <p className="font-[cd-r] text-[14px] text-[#767676]">₹18524.30</p>
          </div>
        </div>
    
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <div className='bg-[#F3EFE7] rounded-[20px] p-2 '>
                                <div className='bg-[#FFFDFA] rounded-[20px] p-4'>
                                    <p className='font-[cd-se] text-[20px]  text-[#212833] '>Grow</p>
                                    <p className='text-[16px] text-[#767676]'>For those growing a team and needing payroll and employee services</p>
                                    <p className='text-[35px] font-[cd-b] text-[#212833] p-0 m-0'>₹5557.29/m</p>
                                    <p className='text-[#767676] text-[14px] pb-2'>₹66,687.48 billed annually</p>
                                    <button className='bg-[#212833] w-full py-[13px] text-[#fff] text-[16px] rounded-full border border-[#212833]' >Get this plan</button>
                                    <div className='pt-3'>
                                        <button className='bg-[#fff] w-full py-[13px]  text-[#212833]  text-[16px] border border-dark rounded-full ' >Talk to an expert</button>

                                    </div>
                                </div>
                                <div className='p-4 '>
                                    <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Cloud BssAccounting software</p>
                                    <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                        <li>Create, send, and chase invoices</li>
                                        <li>Capture bills and receipts easily</li>
                                        <li>Expense Management</li>
                                        <li>Real-time financial reports (Profit & Loss, Balance Sheet, Aged Payables, Aged Receivables)</li>
                                        <li>Use multiple currencies</li>
                                    </ul>
                                    <div className='pt-2'>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Ecommerce</p>
                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r] text-[#3945BA]">
                                            <li>Connect one marketplace</li>

                                        </ul>

                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Bookkeeping</p>


                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li>Unlimited bookkeeping</li>
                                            <li>Automatic reconciliations</li>
                                        </ul>
                                    </div>
                                    <div className='pt-2 pb-3'>
                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Expert service</p>







                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">
                                            <li className='text-[#3945BA]'>Monthly Management reports</li>
                                            <li className='text-[#3945BA]'>Video calls with an expert</li>
                                            <li className='text-[#3945BA]'>Ad-hoc tax advice</li>
                                            <li>In-app chat</li>
                                            <li>Payroll and dividends tax advice</li>
                                            <li>Dedicated accounting team</li>

                                        </ul>

                                        <p className='font-[cd-se] text-[18px]  text-[#212833]  pt-3'>Tax and filings</p>


                                        <ul className="list-disc pl-5 text-[14px] font-[cd-r]  text-[#212833] ">


                                            <li>Unaudited Financial Statements (UFS)</li>
                                            <li>Annual tax return filling</li>
                                        </ul>
                                    </div>
                                    <div className='border border-dark border-t'></div>
                                    <div className='pt-4 d-flex justify-content-between align-items-center'><span   className='font-[cd-se] text-[18px]  text-[#212833] '>Optional add-ons</span>
                                        <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 2C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H13C13.2652 0 13.5196 0.105357 13.7071 0.292893C13.8946 0.48043 14 0.734784 14 1C14 1.26522 13.8946 1.51957 13.7071 1.70711C13.5196 1.89464 13.2652 2 13 2H1Z" fill="black" />
                                        </svg>
                                    </div>

                                    <div className='pt-4 d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] underline'>Xero Subscription</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹37048.64/y</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] '>GST filing</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹74097.20/y</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] '>GST registration</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹18524.30</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676]'>Personal Income Tax</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹9262.15</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] '>Full XBRL report</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹30873.83</p>
                                    </div>

                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] '>Simplified XBRL report</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹18524.30</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] underline '>Payroll services, per employee</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹18524.30/y</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'><p className='font-[cd-r] text-[14px] text-[#767676] '>Employee leave tracking, per employee</p>
                                        <p className='font-[cd-r] text-[14px] text-[#767676]'>₹4940.00/y</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                     
                    </div>


                </div>
            </section>
            <section className="bg-[#FFFCF5] overflow-hidden sm:px-20 px-6  py-10">
                <div className="container-fluid p-0">
                   <div className='row justify-center align-items-start'>
                    <div className='col-md-4 mb-4'>
                    <p className='font-[cd-m] text-[25px] text-[#000] p-text'>Add-ons you
                    might need</p>
                    </div>
                    <div className='col-md-8 mb-4'>
                    <div  className='row justify-between align-items-center'>
                        <div className='col-md-8 mb-4 '>
                        <p className='font-[cd-m] text-[22px]'>Urgency filing</p>
                        <p className='font-[cd-r] text-[16px]'>Where applicable, an urgency fee may be applied depending on your filing deadline.</p>
                        </div>
                        <div className='col-md-4 mb-4 '>
                            <div className='d-flex sm:justify-end'>
                                <p className='font-[cd-m] text-[22px]'>S$ 750</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-2 sm:mb-4'>
                    <div className='border border-dark'></div>
                    </div>
                    <div  className='row justify-between align-items-center'>
                        <div className='col-md-8 mb-4 '>
                        <p className='font-[cd-m] text-[22px]'>Simplified XBRL filing</p>
                        <p className='font-[cd-r] text-[16px]'>The Simplified XBRL template caters to smaller businesses and non-publicly traded companies in Singapore. It provides a simple report and a complete set of financial statements in PDF format.</p>
                        </div>
                        <div className='col-md-4 mb-4  sm:pt-4'>
                            <div className='d-flex sm:justify-end'>
                                <p className='font-[cd-m] text-[22px]'>S$ 300/y</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-2 sm:mb-4'>
                    <div className='border border-dark'></div>
                    </div>
                    <div  className='row justify-between align-items-center'>
                        <div className='col-md-8 mb-4  '>
                        <p className='font-[cd-m] text-[22px]'>Full XBRL filing</p>
                        <p className='font-[cd-r] text-[16px]'>Cloud BSS will provide a Full XBRL report including primary statements and selected notes to the financial statements. This comprehensive report represents a company’s financial performance and position.</p>
                        </div>
                        <div className='col-md-4 mb-4 '>
                            <div className='d-flex sm:justify-end'>
                                <p className='font-[cd-m] text-[22px]'>S$ 750</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-2 sm:mb-4'>
                    <div className='border border-dark'></div>
                    </div>
                    </div>
                   </div>


                </div>
            </section>

<FAQ/>
<ResourcesForManaging />
<RunBusiness />
                    
        



            <Footer />
        </>
    );
}
