'use client'
import Header from '../components/header';
import Footer from '../components/footer'
import Image from 'next/image';
import { Checkbox, } from "@nextui-org/react";


import { useState } from "react";

export default function Home() {


    const [activeRegStep, setActiveRegStep] = useState<number | null>(null);
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        category: "",
        itemPrice: "",
        shippingCharge: "",
        quantitySold: "",
        itemCost: "",
        shippingCost: "",
        paymentMethod: "PayPal",
        reserveprice: '',
        listingUpdate: ''
    });
    const regStep = (index: number) => {
        setActiveRegStep(activeRegStep === index ? null : index);
    };
    const toggleFAQ = (index: number) => {
        setActiveFAQ(activeFAQ === index ? null : index);
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
                                <div className="row align-items-start  justify-between">
                                    <div className='col-md-5 mb-4'>
                                        <div className='rounded-[20px] bg-[#F3EDE6] py-3 sm:px-5 px-3 w-full'>
                                            <div className='sm:p-5'>
                                                <p className='sm:text-[25px] text-[22px] leading-[25px] font-[cd-m] pt-4'>Selling information</p>
                                                <p className='sm:text-[18px] text-[16px]'>Item price is the amount a customer pays for the product. Shipping charge is what you charge customers for each delivery.</p>
                                                <div className='pt-4'>
                                                    <div className="space-y-4">
                                                        <select
                                                            className="w-full border border-gray-300 py-2 px-3 rounded-lg text-base"
                                                            value={formData.category}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, category: e.target.value })
                                                            }
                                                        >
                                                            <option value="">Choose category</option>
                                                            <option value="electronics">Electronics</option>
                                                            <option value="clothing">Clothing</option>
                                                            <option value="home">Home</option>
                                                        </select>
                                                        <input
                                                            type="number"
                                                            placeholder="Item price"
                                                            className="w-full border border-gray-300 py-2 px-3 rounded-lg text-base"
                                                            value={formData.itemPrice}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, itemPrice: e.target.value })
                                                            }
                                                        />
                                                        <input
                                                            type="number"
                                                            placeholder="Shipping charge"
                                                            className="w-full border border-gray-300 py-2 px-3 rounded-lg text-base"
                                                            value={formData.shippingCharge}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, shippingCharge: e.target.value })
                                                            }
                                                        />
                                                        <input
                                                            type="number"
                                                            placeholder="Quantity sold"
                                                            className="w-full border border-gray-300 py-2 px-3 rounded-lg text-base"
                                                            value={formData.quantitySold}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, quantitySold: e.target.value })
                                                            }
                                                        />
                                                    </div>
                                                </div>


                                                <div className=" col-12 mt-8">
                                                    <h3 className="text-lg font-semibold mb-2">Costs</h3>
                                                    <p className="text-sm text-gray-600 mb-4 font-[400] leading-relaxed">
                                                        Item cost is what your supplier charges you for the product. Shipping cost is what your supplier charges for delivery.
                                                    </p>
                                                    <div className="col-12 flex gap-2">
                                                        <div className="col-md-6">

                                                            <input
                                                                type="number"
                                                                placeholder="Item cost"
                                                                className=" border border-gray-300 w-full px-3 py-2 rounded-lg font-[400] text-base"
                                                                value={formData.itemCost}
                                                                onChange={(e) =>
                                                                    setFormData({ ...formData, itemCost: e.target.value })
                                                                }
                                                            />
                                                        </div>
                                                        <div className="col-md-6">

                                                            <input
                                                                type="number"
                                                                placeholder="Shipping cost"
                                                                className=" border border-gray-300 w-full px-3 py-2 rounded-lg font-[400] text-base"
                                                                value={formData.shippingCost}
                                                                onChange={(e) =>
                                                                    setFormData({ ...formData, shippingCost: e.target.value })
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                </div>




                                                <div className="mt-8">
                                                    <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                                                    <div className="items-center">
                                                        <label className="flex font-[400] items-center text-base">
                                                            <input
                                                                type="radio"
                                                                name="paymentMethod"
                                                                value="PayPal"
                                                                checked={formData.paymentMethod === "PayPal"}
                                                                onChange={(e) =>
                                                                    setFormData({ ...formData, paymentMethod: e.target.value })
                                                                }
                                                                className="mr-2 font-[400]"
                                                            />
                                                            PayPal
                                                        </label>
                                                        <label className="flex font-[400] items-center text-base">
                                                            <input
                                                                type="radio"
                                                                name="paymentMethod"
                                                                value="eBay"
                                                                checked={formData.paymentMethod === "eBay"}
                                                                onChange={(e) =>
                                                                    setFormData({ ...formData, paymentMethod: e.target.value })
                                                                }
                                                                className="mr-2 "
                                                            />
                                                            eBay Managed Payments
                                                        </label>
                                                    </div>
                                                </div>

                                                <h2 className='pt-4 font-[cd-m] text-lg  mb-2'>Optional Features</h2>
                                                <p className="text-sm text-gray-600 mb-4 font-[400] leading-relaxed"> Additional paid features to boost your eBay listing</p>
                                                <select
                                                    className="w-full border border-gray-300 py-2 px-3 rounded-lg text-base"
                                                    value={formData.reserveprice}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, reserveprice: e.target.value })
                                                    }
                                                >
                                                    <option value="">Reserve Price</option>
                                                    <option value="electronics">Electronics</option>
                                                    <option value="clothing">Clothing</option>
                                                    <option value="home">Home</option>
                                                </select>
                                                <div className='pt-3'>
                                                    <input
                                                        type="text"
                                                        placeholder="Listing Update"
                                                        className="w-full border border-gray-300 py-2 px-3 rounded-lg text-base"
                                                        value={formData.listingUpdate}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, listingUpdate: e.target.value })
                                                        }
                                                    />
                                                    <>


                                                        <Checkbox className='d-flex align-items-center gap-3 outline-none' size="sm">
                                                            Selling Manager Pro Tool
                                                        </Checkbox>
                                                    </>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                    <div className='col-md-5 mb-4'>
                                        <div className='px-4 py-3'>
                                            <div className='d-flex align-items-center justify-between'>
                                                <div><p className='sm:text-[30px] text-[22px] font-[cd-m]'>Revenue :</p></div>
                                                <div><p className='sm:text-[30px] text-[22px] font-[cd-m] '>S$0</p></div>
                                            </div>
                                            <div className='border-dark border '></div>

                                            <div className='d-flex align-items-center justify-between pt-3'>
                                                <div><p className='sm:text-[30px] text-[22px] font-[cd-m]'>Total costs:</p></div>
                                                <div><p className='sm:text-[30px] text-[22px] font-[cd-m] '>S$0</p></div>

                                            </div>
                                            <div className='d-flex align-items-center justify-between'>
                                                <div><p className=' text-[18px] font-[cd-r]'>Final value fee</p></div>
                                                <div><p className=' text-[18px] font-[cd-r] '>S$0</p></div>
                                            </div>
                                            <div className='d-flex align-items-center justify-between'>
                                                <div><p className=' text-[18px] font-[cd-r]'>PayPal fee</p></div>
                                                <div><p className=' text-[18px] font-[cd-r] '>S$0</p></div>
                                            </div>
                                            <div className='d-flex align-items-center justify-between'>
                                                <div><p className=' text-[18px] font-[cd-r]'>Items cost (0 items × £0)</p></div>
                                                <div><p className=' text-[18px] font-[cd-r] '>S$0</p></div>
                                            </div>
                                            <div className='d-flex align-items-center justify-between'>
                                                <div><p className=' text-[18px] font-[cd-r]'>Shipping cost (0 items × £0)</p></div>
                                                <div><p className=' text-[18px] font-[cd-r] '>S$0</p></div>
                                            </div>
                                            <div className='border-dark border '></div>
                                            <div className='d-flex align-items-center justify-between pt-3'>
                                                <div><p className='sm:text-[30px] text-[22px] font-[cd-m]'>Total profit:</p></div>
                                                <div><p className='sm:text-[30px] text-[22px] font-[cd-m] '>S$0</p></div>

                                            </div>
                                            <div className='d-flex align-items-center justify-between'>
                                                <div><p className=' text-[18px] font-[cd-r]'>Profit margin</p></div>
                                                <div><p className=' text-[18px] font-[cd-r] '>0%</p></div>
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
                                <div className='border border-dark rounded-full px-3 py-[8px] w-[180px]'>
                                    <p className='text-[18px] text-[#212833] text-center  m-0'>How it works</p>
                                </div>

                            </div>
                            <p className="font-[cd-se] text-center  sm:text-[40px] text-[28px] text-[#212833] sm:leading-[45px] leading-[30px] sm:pt-[50px] pt-[30px] ">Let&apos;s explore eBay seller fees</p>
                            <p className='p-text text-[16px] text-center'>As an eBay seller, you&apos;re likely focused on profits. You make money by selling items to customers, while eBay earns through account fees per sale. Misunderstanding these fees can erode your margins, but mastering cost distribution ensures a healthy profit for all involved. Let&apos;s explore how to achieve this.</p>

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

                                                <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Insertion Fee & Optional Features in Singapore</span>
                                            </div>
                                        </div>
                                        <span className="font-[cd-m] text-[#212833] text-[25px]">{activeRegStep === 1 ? "-" : "+"}</span>
                                    </div>

                                    {activeRegStep === 1 && (
                                        <div className="row justify-between items-center sm:p-[50px] p-[30px] rounded-[20px] mb-2">
                                            <div className="col-md-6 mb-4 relative">
                                                <p>In Singapore you don’t need to pay for Insertion Fees or Final Value Fees on the Auction and Fixed Price formats. However, you will have to pay a Final Value Fee in case your item sells.
                                                </p>
                                                <p>
                                                    So after selling an item, you will pay:
                                                </p>
                                                <p className='text-[#407BFF]'>

                                                    Total Selling Cost = Insertion Fee + Final Value Fee + any other optional Listing Upgrade Fees.

                                                </p>
                                                <p>
                                                    There is an Insertion Fee, though, when you list an item on other eBay paid sites, such as eBay US, UK, or Australia.

                                                </p>
                                                <p>Some Optional Features can help increase the odds of a sale. All the features are not subject to GST.</p>
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
                                                        <Image src="/assets/Group (4).png" className="w-full" width={1080} height={1080} alt="no-img" />
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

                                                <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Reserve Price feature</span>
                                            </div>
                                        </div>
                                        <span className="font-[cd-m] text-[#212833] text-[25px]">{activeRegStep === 2 ? "-" : "+"}</span>
                                    </div>

                                    {activeRegStep === 2 && (
                                         <div className="row justify-between items-center sm:p-[50px] p-[30px] rounded-[20px] mb-2">
                                         <div className="col-md-6 mb-4 relative">
                                             <p>In Singapore you don’t need to pay for Insertion Fees or Final Value Fees on the Auction and Fixed Price formats. However, you will have to pay a Final Value Fee in case your item sells.
                                             </p>
                                             <p>
                                                 So after selling an item, you will pay:
                                             </p>
                                             <p className='text-[#407BFF]'>

                                                 Total Selling Cost = Insertion Fee + Final Value Fee + any other optional Listing Upgrade Fees.

                                             </p>
                                             <p>
                                                 There is an Insertion Fee, though, when you list an item on other eBay paid sites, such as eBay US, UK, or Australia.

                                             </p>
                                             <p>Some Optional Features can help increase the odds of a sale. All the features are not subject to GST.</p>
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
                                                     <Image src="/assets/Group (4).png" className="w-full" width={1080} height={1080} alt="no-img" />
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

                                                <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Seller Tool feature</span>
                                            </div>
                                        </div>
                                        <span className="font-[cd-m] text-[#212833] text-[25px]">{activeRegStep === 3 ? "-" : "+"}</span>
                                    </div>

                                    {activeRegStep === 3 && (
                                     <div className="row justify-between items-center sm:p-[50px] p-[30px] rounded-[20px] mb-2">
                                     <div className="col-md-6 mb-4 relative">
                                         <p>In Singapore you don’t need to pay for Insertion Fees or Final Value Fees on the Auction and Fixed Price formats. However, you will have to pay a Final Value Fee in case your item sells.
                                         </p>
                                         <p>
                                             So after selling an item, you will pay:
                                         </p>
                                         <p className='text-[#407BFF]'>

                                             Total Selling Cost = Insertion Fee + Final Value Fee + any other optional Listing Upgrade Fees.

                                         </p>
                                         <p>
                                             There is an Insertion Fee, though, when you list an item on other eBay paid sites, such as eBay US, UK, or Australia.

                                         </p>
                                         <p>Some Optional Features can help increase the odds of a sale. All the features are not subject to GST.</p>
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
                                                 <Image src="/assets/Group (4).png" className="w-full" width={1080} height={1080} alt="no-img" />
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                    )}
                                </div>

                                <div className="bg-white rounded-[20px]">
                                    <div
                                        className="flex justify-between items-center cursor-pointer bg-white sm:p-[20px] p-[20px] rounded-[20px] mb-2"
                                        onClick={() => regStep(4)}
                                    >
                                        <div>
                                            <div className="flex gap-3 align-items-center">

                                                <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Listing Upgrade feature</span>
                                            </div>
                                        </div>
                                        <span className="font-[cd-m] text-[#212833] text-[25px]">{activeRegStep === 4 ? "-" : "+"}</span>
                                    </div>

                                    {activeRegStep === 4 && (
                                     <div className="row justify-between items-center sm:p-[50px] p-[30px] rounded-[20px] mb-2">
                                     <div className="col-md-6 mb-4 relative">
                                         <p>In Singapore you don’t need to pay for Insertion Fees or Final Value Fees on the Auction and Fixed Price formats. However, you will have to pay a Final Value Fee in case your item sells.
                                         </p>
                                         <p>
                                             So after selling an item, you will pay:
                                         </p>
                                         <p className='text-[#407BFF]'>

                                             Total Selling Cost = Insertion Fee + Final Value Fee + any other optional Listing Upgrade Fees.

                                         </p>
                                         <p>
                                             There is an Insertion Fee, though, when you list an item on other eBay paid sites, such as eBay US, UK, or Australia.

                                         </p>
                                         <p>Some Optional Features can help increase the odds of a sale. All the features are not subject to GST.</p>
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
                                                 <Image src="/assets/Group (4).png" className="w-full" width={1080} height={1080} alt="no-img" />
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                    )}
                                </div>
                                <div className="bg-white rounded-[20px]">
                                    <div
                                        className="flex justify-between items-center cursor-pointer bg-white sm:p-[20px] p-[20px] rounded-[20px] mb-2"
                                        onClick={() => regStep(5)}
                                    >
                                        <div>
                                            <div className="flex gap-3 align-items-center">

                                                <span className="font-[cd-m] text-[#212833] sm:text-[25px] text-[18px]">Revenue and Profit</span>
                                            </div>
                                        </div>
                                        <span className="font-[cd-m] text-[#212833] text-[25px]">{activeRegStep === 5 ? "-" : "+"}</span>
                                    </div>

                                    {activeRegStep === 5 && (
                                     <div className="row justify-between items-center sm:p-[50px] p-[30px] rounded-[20px] mb-2">
                                     <div className="col-md-6 mb-4 relative">
                                         <p>In Singapore you don’t need to pay for Insertion Fees or Final Value Fees on the Auction and Fixed Price formats. However, you will have to pay a Final Value Fee in case your item sells.
                                         </p>
                                         <p>
                                             So after selling an item, you will pay:
                                         </p>
                                         <p className='text-[#407BFF]'>

                                             Total Selling Cost = Insertion Fee + Final Value Fee + any other optional Listing Upgrade Fees.

                                         </p>
                                         <p>
                                             There is an Insertion Fee, though, when you list an item on other eBay paid sites, such as eBay US, UK, or Australia.

                                         </p>
                                         <p>Some Optional Features can help increase the odds of a sale. All the features are not subject to GST.</p>
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
                                                 <Image src="/assets/Group (4).png" className="w-full" width={1080} height={1080} alt="no-img" />
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
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-5 py-5">
                <div className="container-fluid p-0">
                    <div className="row align-items-center">

                        <div className="col-md-6 ">
                            <div className='col-md-6'>
                                <Image src="/assets/Picture ⏵ sg-inc-checklist@1x.webp (1).png" className="w-full"
                                    width={1080}
                                    height={1080}
                                    alt="no-img"
                                />

                            </div>
                        </div>
                        <div className="col-md-6 mb-4">

                            <div className="col-md-8">
                                <p className="font-[cd-se]  no-underline sm:text-[38px] text-[30px]  text-[#fff]  sm:leading-[38px] leading-[30px]">Get tips on how to run your business smarter</p>
                                <p className='font-[cd-r] text-[#ABABAB] text-[16px]  pt-4 mb-0'>Learn crucial tips on how to save money and build a flourishing business, with real entrepreneurs sharing their own experiences.</p>
                                <div className="sm:flex  items-center gap-4  pt-4">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-[1200px] px-4 py-2 rounded-full  text-[#0D0D0D]  border border-gray-400 mb-4 outline-none"
                                    />
                                    <button className="bg-white  text-[#0D0D0D]  font-[cd-m] py-2 rounded-full w-[100px] w-full mb-4 ">
                                        SUBSCRIBE
                                    </button>

                                </div>
                                <p className="text-[#fff] text-[14px]"><a className="no-underline text-[#ABABAB] " href="#">By clicking, you agree to our</a> Terms & Conditions, Privacy and Data Protection Policy
                                </p>

                            </div>


                        </div>
                    </div>
                </div>

            </section>



            <Footer />
        </>
    );
}
