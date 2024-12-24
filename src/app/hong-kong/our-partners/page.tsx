'use client'

import Header from '../components/header';
import { useState } from "react";
import Footer from '../components/footer'
import Image from 'next/image';
import RunBusiness from '../components/run-your-business'
import ResourcesForManaging from "../components/resources-for-managing"


import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    const [selectedButton, setSelectedButton] = useState('btn1');


    const renderSelectedPart = () => {
        if (selectedButton === 'btn1') {
            return (
                <section>
                    <div className="overflow-hidden sm:px-20 px-6  ">
                        <div className="container-fluid p-0">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-4 p-0 m-0">

                                    <div className="row m-0 p-0 align-items-stretch">
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/image 55.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Startup Services</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Amazon Web Services</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Cloud BSS clients enjoy USD$5000 in AWS Activate credits valid
                                                    for 2 years.
                                                </p>
                                                <h4 className="font-[cd-m] text-[22px] leading-[28px] mt-4">How to Redeem:</h4>
                                                <p className="text-[16px] text-gray-500">
                                                    Head to Activate Console and click ‘Register Now’ or ‘Log in’ if you already have an account. You need a valid AWS account to access the application, using the same email address associated with your AWS account, once your Activate account is created, you can apply for credits. When applying from credit, put in the Org ID (1cplc), and verify your account.
                                                </p>
                                                <p className="text-[14px] text-gray-500 mt-auto">
                                                    Amazon Web Services provides startups with low cost, easy to use infrastructure needed to scale and grow any size business. AWS Activate is a program with resources designed to help startups get started on AWS.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17861.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Digital Financial Solutions</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Stripe</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Cloud BSS clients enjoy $10,000 of processing credits.
                                                </p>
                                                <p className="text-[16px] text-gray-500">
                                                    Whether you&apos;re creating a subscription service, an on-demand marketplace, or an ecommerce store, Stripea&apos;s integrated payments platform helps you build and scale your business online.
                                                </p>


                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17862.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Startup Services</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Hubspot</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Cloud BSS clients enjoy up to 90% off Hubspot&apos;s rates.
                                                </p>
                                                <p className="text-[16px] text-gray-500">
                                                    HubSpot offers a full stack of software for marketing, sales, and customer service, with a completely free CRM at its core. They&apos;re powerful alone — but even better when used together.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17865.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Business Bank Accounts</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Wise</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Wise Business is an account that offers everything for a business to grow and operate internationally — without the high fees, hefty admin, and headache of a local bank. Best for sole traders, freelancers, SMEs and enterprises.
                                                </p>

                                            </div>
                                        </div>
                                        
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17863.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Startup Servicess</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Enterprise Nation</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Enterprise Nation is a vibrant community of small businesses and business advisers that exist to shortcut your route to trusted business support. Whether you&apos;re starting or growing a business, Enterprise Nation has the resources, expertise, and connections to help you get it right.
                                                </p>

                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17864.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Digital Financial Solutions</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Payoneer</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Cloud BSS clients enjoy a 50% discount on Payments product and 10% rebate on Working Capital product.
                                                </p>
                                                <p className="text-[16px] text-gray-500">
                                                    Payoneer enables millions of businesses and professionals from more than 200 countries and territories to connect with each other and grow globally through a cross-border payments platform.
                                                </p>

                                            </div>
                                        </div>
                                        
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17867.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Business Bank Accounts</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Cashplus</h3>
                                                <p className="text-[16px] text-gray-700">
                                                    Cloud BSS clients enjoy 1% cashback on card spend and the first year free of charge.</p>
                                                <p className="text-[14px] text-gray-400">
                                                    Cashplus have built on 15 years of success to continue to create one of the UK&apos;s most seamless banking experiences.</p>
                                                <p className="text-[16px] text-gray-500">
                                                    from introducing the first UK prepaid card to being the first non-bank to offer a current account, they offer innovative products to 1.6 million customers worldwide.
                                                </p>

                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17866.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Digital Financial Solutions</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Square</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Square helps sellers of all sizes start, run and grow their business. Their new readers help sellers accept chip and PIN and contactless payments, and they also have tools for customers, like their Cash App, which lets people send money instantly to family or friends.</p>


                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17868.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Ecommerce Solutions</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Sellics</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Sellics is an all-in-one solution to help online sellers succeed on Amazon. They assist sellers, vendors and agencies with SEO, PPC, and brand awareness for Amazon.</p>


                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17870.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Digital Financial Solutions</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">GoCardless</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    GoCardless has built a platform designed and optimised for taking invoice, subscription, membership and instalment payments. They process more than $20bn in transactions a year and they&apos;re proud to count 60,000 businesses around the world as their customers.</p>

                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17869.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Business Bank Accounts</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Tide Bank</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Tide offers business current accounts that are free, easy to open, and helps you start doing what you love. They&apos;re trusted by 300,000+ UK businesses worldwide.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17868.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Ecommerce Solutions</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Teikametrics</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Teikametrics helps thousands of sellers and brand owners easily optimize their performance, across the most valuable marketplaces and business verticals.</p>
                                                <p className="text-[16px] text-gray-500">Their AI-powered technology and optional managed services eliminate tedious work, so you can focus on creating products and experiences that bring joy to your customers lives.</p>

                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17873.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Ecommerce Solutions</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Amazon SPN</h3>

                                                <p className="text-[16px] text-gray-500">
                                                    Amazon&apos;s Service Provider Network was set up to enable sellers to launch, manage and grow their business on Amazon. It provides Amazon sellers with a directory of trusted service providers for a number of Amazon business-related services.</p>

                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17872.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Digital Financial Solutions</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Perx Rewards</h3>

                                                <p className="text-[16px] text-gray-500">
                                                    Perx Rewards is an employee rewards platform that&apos;s an ideal way for you to reward your staff with real funds allowing them the freedom to spend their reward, when and where they want to.</p>
                                                <p className="text-[16px] text-gray-500">Perx Reward and Reload cards are loaded with funds that can be spent at 53 million locations worldwide, in-store and online.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17874.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Compliance & Accounting Software</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Hellotax</h3>

                                                <p className="text-[16px] text-gray-500">
                                                    Cloud BSS clients get bespoke pricing up to 15% off on hellotax products.</p>
                                                <p className="text-[16px] text-gray-500">Hellotax is an innovative tech company that builds automated solutions for VAT compliance. Companies of every size use their software to ensure their VAT compliance while selling online in Europe.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17876.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Ecommerce Solutions</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">BigCommerce</h3>

                                                <p className="text-[16px] text-gray-500">
                                                    Cloud BSS clients enjoy 1 month free of BigCommerce when sign up and pick a plan (this being on top of the 14-day free trial).</p>
                                                <p className="text-[16px] text-gray-500"> BigCommerce (Nasdaq: BIGC) is a leading software-as-a-service (SaaS) ecommerce platform that empowers merchants of all sizes to build, innovate and grow their businesses online. As a leading Open SaaS solution, BigCommerce provides merchants sophisticated enterprise-grade functionality, customization and performance with simplicity and ease of use. Tens of thousands of B2B and B2C companies across 150 countries and numerous industries use BigCommerce to create beautiful, engaging online stores, including Ben & Jerry&apos;s, Molton Brown, S.C. Johnson, Skullcandy, Sony and Vodafone..</p>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17875.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Business Bank Accounts</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Kapaga</h3>

                                                <p className="text-[16px] text-gray-500">
                                                    Cloud BSS clients enjoy two months free of subscription fees for Kapaga’s payment services. This will be applied to active accounts after the initial account opening.</p>
                                                <p className="text-[16px] text-gray-500">

                                                    Kapaga is a cross-border payment service providing tailored business accounts to SMEs in the UK. We embolden international trade by simplifying complex corporate structures, consolidating accounts into one multi-banking platform, and providing competitive FX rates and dedicated account management. Kapaga is the leading provider of financial services for UK SMEs as we combine intuitive functionality and dedicated expertise through a product of passion and a wide variety of business banking services.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17874.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">HR Tech</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Remote</h3>

                                                <p className="text-[16px] text-gray-500">
                                                    Offer for Osome: 20% off Remote’s Global HR Platform</p>
                                                <p className="text-[16px] text-gray-500">

                                                    Remote is a Global HR Platform that helps companies hire, manage, and pay their entire team — and more effectively compete in the modern global economy.
                                                </p>
                                                <p>Products:</p>
                                                <ul className="list-disc pl-6 text-[16px] text-gray-500">
                                                    <li>HRIS - Manage your end-to-end employment lifecycle</li>
                                                    <li>Employer of Record (EOR) - Employ in countries where you don’t have a legal entity</li>
                                                    <li>Contractor Management - Hire and pay international contractors</li>
                                                    <li>Global Payroll - Pay your workers around the world</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            );
        } else if (selectedButton === 'btn2') {
            return (
                <section>
                    <div className="overflow-hidden sm:px-20 px-6 ">
                        <div className="container-fluid p-0">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-4 p-0 m-0">
                                    <div className='row'>

                                <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/image 55.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Startup Services</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Amazon Web Services</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Cloud BSS clients enjoy USD$5000 in AWS Activate credits valid
                                                    for 2 years.
                                                </p>
                                                <h4 className="font-[cd-m] text-[22px] leading-[28px] mt-4">How to Redeem:</h4>
                                                <p className="text-[16px] text-gray-500">
                                                    Head to Activate Console and click ‘Register Now’ or ‘Log in’ if you already have an account. You need a valid AWS account to access the application, using the same email address associated with your AWS account, once your Activate account is created, you can apply for credits. When applying from credit, put in the Org ID (1cplc), and verify your account.
                                                </p>
                                                <p className="text-[14px] text-gray-500 mt-auto">
                                                    Amazon Web Services provides startups with low cost, easy to use infrastructure needed to scale and grow any size business. AWS Activate is a program with resources designed to help startups get started on AWS.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17862.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Startup Services</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Hubspot</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Cloud BSS clients enjoy up to 90% off Hubspot&apos;s rates.
                                                </p>
                                                <p className="text-[16px] text-gray-500">
                                                    HubSpot offers a full stack of software for marketing, sales, and customer service, with a completely free CRM at its core. They&apos;re powerful alone — but even better when used together.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17863.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Startup Servicess</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Enterprise Nation</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Enterprise Nation is a vibrant community of small businesses and business advisers that exist to shortcut your route to trusted business support. Whether you&apos;re starting or growing a business, Enterprise Nation has the resources, expertise, and connections to help you get it right.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        } else if (selectedButton === 'btn3') {
            return (
                <section>
                    <div className="overflow-hidden sm:px-20 px-6 ">
                        <div className="container-fluid p-0">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-4 p-0 m-0">
                                  <div className='row'>
                                  <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17861.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Digital Financial Solutions</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Stripe</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Cloud BSS clients enjoy $10,000 of processing credits.
                                                </p>
                                                <p className="text-[16px] text-gray-500">
                                                    Whether you&apos;re creating a subscription service, an on-demand marketplace, or an ecommerce store, Stripea&apos;s integrated payments platform helps you build and scale your business online.
                                                </p>


                                            </div>
                                        </div>
                                      
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17866.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Digital Financial Solutions</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Square</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Square helps sellers of all sizes start, run and grow their business. Their new readers help sellers accept chip and PIN and contactless payments, and they also have tools for customers, like their Cash App, which lets people send money instantly to family or friends.</p>


                                            </div>
                                        </div>
                                  </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        } else if (selectedButton === 'btn4') {
            return (
                <section>
                    <div className="overflow-hidden sm:px-20 px-6 ">
                        <div className="container-fluid p-0">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-4 p-0 m-0">
                                 <div className='row'>
                                             <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17865.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Business Bank Accounts</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Wise</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Wise Business is an account that offers everything for a business to grow and operate internationally — without the high fees, hefty admin, and headache of a local bank. Best for sole traders, freelancers, SMEs and enterprises.
                                                </p>

                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17867.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Business Bank Accounts</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Cashplus</h3>
                                                <p className="text-[16px] text-gray-700">
                                                    Cloud BSS clients enjoy 1% cashback on card spend and the first year free of charge.</p>
                                                <p className="text-[14px] text-gray-400">
                                                    Cashplus have built on 15 years of success to continue to create one of the UK&apos;s most seamless banking experiences.</p>
                                                <p className="text-[16px] text-gray-500">
                                                    from introducing the first UK prepaid card to being the first non-bank to offer a current account, they offer innovative products to 1.6 million customers worldwide.
                                                </p>

                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17875.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Business Bank Accounts</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Kapaga</h3>

                                                <p className="text-[16px] text-gray-500">
                                                    Cloud BSS clients enjoy two months free of subscription fees for Kapaga’s payment services. This will be applied to active accounts after the initial account opening.</p>
                                                <p className="text-[16px] text-gray-500">

                                                    Kapaga is a cross-border payment service providing tailored business accounts to SMEs in the UK. We embolden international trade by simplifying complex corporate structures, consolidating accounts into one multi-banking platform, and providing competitive FX rates and dedicated account management. Kapaga is the leading provider of financial services for UK SMEs as we combine intuitive functionality and dedicated expertise through a product of passion and a wide variety of business banking services.</p>
                                            </div>
                                        </div>
                                 </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        } 
  
        else if (selectedButton === 'btn5') {
            return (
                <section>
                    <div className="overflow-hidden sm:px-20 px-6  ">
                        <div className="container-fluid p-0">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-4 p-0 m-0">
                                  <div className='row'>
                                  <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17868.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Ecommerce Solutions</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Sellics</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Sellics is an all-in-one solution to help online sellers succeed on Amazon. They assist sellers, vendors and agencies with SEO, PPC, and brand awareness for Amazon.</p>


                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17868.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Ecommerce Solutions</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Teikametrics</h3>
                                                <p className="text-[16px] text-gray-500">
                                                    Teikametrics helps thousands of sellers and brand owners easily optimize their performance, across the most valuable marketplaces and business verticals.</p>
                                                <p className="text-[16px] text-gray-500">Their AI-powered technology and optional managed services eliminate tedious work, so you can focus on creating products and experiences that bring joy to your customers lives.</p>

                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17873.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">Ecommerce Solutions</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Amazon SPN</h3>

                                                <p className="text-[16px] text-gray-500">
                                                    Amazon&apos;s Service Provider Network was set up to enable sellers to launch, manage and grow their business on Amazon. It provides Amazon sellers with a directory of trusted service providers for a number of Amazon business-related services.</p>

                                            </div>
                                        </div>
                                  </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
        else if (selectedButton === 'btn6') {
            return (
                <section>
                    <div className="overflow-hidden sm:px-20 px-6  ">
                        <div className="container-fluid p-0">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-4 p-0 m-0">
                                <div className='row'>
                                <div className="col-md-4 mb-4 d-flex">
        <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
            <div className="text-center">
                <Image
                    src="/assets/Group 17874.png"
                    alt="Amazon Web Services"
                    className="mx-auto w-full object-contain"
                    width={1080}
                    height={1080}
                />
            </div>
            <p className="text-[16px] text-gray-500 pt-4">Compliance & Accounting Software</p>
            <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Hellotax</h3>

            <p className="text-[16px] text-gray-500">
                Cloud BSS clients get bespoke pricing up to 15% off on hellotax products.</p>
            <p className="text-[16px] text-gray-500">Hellotax is an innovative tech company that builds automated solutions for VAT compliance. Companies of every size use their software to ensure their VAT compliance while selling online in Europe.</p>
        </div>
    </div>
                                </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
        else if (selectedButton === 'btn7') {
            return (
                <section>
                    <div className="overflow-hidden sm:px-20 px-6  ">
                        <div className="container-fluid p-0">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-4 p-0 m-0">
                                <div className='row'>
                                <div className="col-md-4 mb-4 d-flex">
                                            <div className="bg-[#F3EDE6] p-3 h-100 rounded-[20px] w-100 d-flex flex-column">
                                                <div className="text-center">
                                                    <Image
                                                        src="/assets/Group 17874.png"
                                                        alt="Amazon Web Services"
                                                        className="mx-auto w-full object-contain"
                                                        width={1080}
                                                        height={1080}
                                                    />
                                                </div>
                                                <p className="text-[16px] text-gray-500 pt-4">HR Tech</p>
                                                <h3 className="font-[cd-m] text-[25px] leading-[28px] mt-4">Remote</h3>

                                                <p className="text-[16px] text-gray-500">
                                                    Offer for Osome: 20% off Remote’s Global HR Platform</p>
                                                <p className="text-[16px] text-gray-500">

                                                    Remote is a Global HR Platform that helps companies hire, manage, and pay their entire team — and more effectively compete in the modern global economy.
                                                </p>
                                                <p>Products:</p>
                                                <ul className="list-disc pl-6 text-[16px] text-gray-500">
                                                    <li>HRIS - Manage your end-to-end employment lifecycle</li>
                                                    <li>Employer of Record (EOR) - Employ in countries where you don’t have a legal entity</li>
                                                    <li>Contractor Management - Hire and pay international contractors</li>
                                                    <li>Global Payroll - Pay your workers around the world</li>
                                                </ul>
                                            </div>
                                        </div>
                                </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }

        else {
            return <div className="text-center">Please select a button</div>;
        }
    };

    return (
        <>
            <Header />

            <section className='bg-[#fff] '>
                <div className="overflow-hidden sm:px-20 px-6 sm:pt-[100px] pt-[50px] pb-5 ">
                    <div className="container-fluid p-0">
                        <div className="row justify-center  pb-5">
                            <div className="col-md-7 sm:pt-1 ">
                                <p className="font-[cd-se] font-[500] no-underline sm:text-[50px] text-[30px] text-[#212833] text-center sm:leading-[50px] leading-[30px]">Discounts & Specials for Cloud BSS clients</p>
                                <p className="font-[cd-r] font-[500] no-underline sm:text-[18px] text-[16px]  text-[#212833] text-center">Explore special offers from our partners - or sign up to become one</p>
                                <div className="flex justify-content-center items-center pt-4">


                                    <button className="bg-[#212833] text-white font-[cd-m] sm:w-[200px]  w-[200px]  py-[12px] rounded-full mb-4">
                                        Become a partner
                                    </button>
                                </div>
                                <Image
                                    src="/assets/image 23 (7).png"
                                    alt=".."
                                    className="w-full object-contain pt-4"
                                    width='8000'
                                    height='100'
                                />

                            </div>
                        </div>


                    </div>
                </div>

            </section>

            <section className=" bg-[#FFFCF5]  overflow-hidden sm:px-20 px-6 sm:py-10 py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-12 sm:pb-2">
                            <div className="text-center pb-2 ">
                                <div className='d-flex justify-center'>
                                    <div className=" px-2 py-[10px] font-[cd-m]  text-[18px] font-[500] text-[#212833] tracking-wider  sm:w-[250px] w-[250px] ">Industries</div>
                                </div>


                            </div>
                        </div>
                        <div className="row justify-content-center ">
                            <div className="col-md-1 mb-4">
                                <button
                                    className={`py-[10px] sm:px-4 rounded-full border border-black text-[14px] font-[cd-m] w-full ${selectedButton === 'btn1' ? 'bg-black text-white' : ' text-black'
                                        }`}
                                    onClick={() => setSelectedButton('btn1')}
                                >
                                    All
                                </button>
                            </div>
                            <div className="col-md-2 mb-4">
                                <button
                                    className={`py-[10px] sm:px-4 rounded-full border border-black text-[14px] font-[cd-m] w-full tracking-wider  ${selectedButton === 'btn2' ? 'bg-black text-white' : ' text-black'
                                        }`}
                                    onClick={() => setSelectedButton('btn2')}
                                >
                                    Startup Services
                                </button>
                            </div>
                            <div className="col-md-2 mb-4">
                                <button
                                    className={`py-[10px] sm:px-4 rounded-full border border-black text-[14px] font-[cd-m] w-full tracking-wider ${selectedButton === 'btn3' ? 'bg-black text-white' : ' text-black'
                                        }`}
                                    onClick={() => setSelectedButton('btn3')}
                                >
                                    Digital Financial Solutions
                                </button>
                            </div>
                            <div className="col-md-2 mb-4">
                                <button
                                    className={`py-[10px] sm:px-4 rounded-full border border-black text-[14px] font-[cd-m] w-full tracking-wider ${selectedButton === 'btn4' ? 'bg-black text-white' : ' text-black'
                                        }`}
                                    onClick={() => setSelectedButton('btn4')}
                                >
                                    Business Bank Accounts
                                </button>
                            </div>


                        </div>
                        <div className="row justify-content-center mb-4">

                            <div className="col-md-2 mb-4">
                                <button
                                    className={`py-[10px] sm:px-4 rounded-full border border-black text-[14px] font-[cd-m] w-full tracking-wider ${selectedButton === 'btn5' ? 'bg-black text-white' : ' text-black'
                                        }`}
                                    onClick={() => setSelectedButton('btn5')}
                                >
                                    Ecommerce Solutions
                                </button>
                            </div>
                            <div className="col-md-3 mb-4">
                                <button
                                    className={`py-[10px] sm:px-4 rounded-full border border-black text-[14px] font-[cd-m] w-full tracking-wider ${selectedButton === 'btn6' ? 'bg-black text-white' : ' text-black'
                                        }`}
                                    onClick={() => setSelectedButton('btn6')}
                                >
                                    Compliance & Accounting Software
                                </button>
                            </div>
                            <div className="col-md-1 mb-4">
                                <button
                                    className={`py-[10px] sm:px-4 rounded-full border border-black text-[14px] font-[cd-m] w-full tracking-wider ${selectedButton === 'btn7' ? 'bg-black text-white' : ' text-black'
                                        }`}
                                    onClick={() => setSelectedButton('btn7')}
                                >
                                    HR Tech
                                </button>
                            </div>

                        </div>


                        <div className="mt-4">{renderSelectedPart()}</div>

                    </div>

                </div>
            </section>
            <ResourcesForManaging/>
            <RunBusiness/>
            
        





            <Footer />
        </>
    );
}
