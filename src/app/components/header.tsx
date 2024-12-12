"use client";
import Image from "next/image";
import Link from 'next/link'
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header1() {
  const [width, setWidth] = useState(560);
  const [menu, setMenu] = useState(false);
  const updateDimensions = () => {
    console.log("call update dem")
    setWidth(window.innerWidth);
    console.log("width,", window.innerWidth)
  };

  useEffect(() => {


    if (typeof window !== "undefined") {
      console.log("called")
      setWidth(window.innerWidth);
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  const menuToggle = () => {
    setMenu(!menu);
  };
  return (

    <div>
      <header className="absolute  w-100  py-6 items-center  sm:px-20 px-6   pb-10 ">
        <div className="container-fluid ">
          <div className="row align-items-center justify-between">
            <div className="col-md-2">
              <div className="row ">
                <div className="col-md-9 col-5">
                  <Link href="/">
                    <Image
                      src="/assets/logo_bss.png" className="w-full"
                      width={140}
                      height={50}
                      alt="no-img"
                    /></Link>
                </div>
              </div>
              <div className="sm:hidden block absolute right-[22px] top-[30px]" onClick={menuToggle} >
                {menu ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" stroke="#000" /><path d="M6 6l12 12" stroke="#000" /></svg> :
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8l16 0" /><path d="M4 16l16 0" /></svg>}
              </div>
            </div>
            <div className="col-md-10">
              <div className={(width < 500) ? menu ? "row flex justify-between items-center absolute sm:px-0 px-6 bg-[#fff] w-100 left-0 top-[80px] pt-10 pb-28 " : "hidden " : "row flex justify-between items-center"}>
                <div className="col-md-9">
                  <div className="text-start items-center sm:flex justify-center gap-[80px]">
                    <Link href="#" className=" no-underline block ">
                      <span className="font-[cd-m] font-[500] text-[#212833] text-end text-[13px]  ">
                        About
                      </span>
                    </Link>
                    <span className="block  menulist  font-[cd-m] font-[500] text-[#212833]  text-[13px] ">
                      Incorporation
                      <div className="menu-item   relative sm:absolute py-[12px]  sm:top-[60px]">

                        <ul className="rounded-lg max-w-md  bg-[#fff] border-1 border-[#A2A2A2] px-4 py-3 z-10">
                          <li className="pt-[5px]">
                            <Link
                              href="/incorporation/forLocals"
                              className="font-[cd-r] font-[500] no-underline  text-[#000]"
                            >For Locals
                            </Link>
                          </li>
                          <li className="pt-[5pxx]">
                            <Link
                              href="/incorporation/incorporation(Foreigners)"
                              className="font-[cd-r] font-[500] no-underline  text-[#000]"
                            >For Foreigners
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </span>
                    <span className="block  menulist  font-[cd-m] font-[500] text-[#212833]  text-[13px]  ">
                      Accounting


                      <div className="menu-item  relative sm:absolute py-[12px]  sm:top-[60px]">

                        <ul className="rounded-lg max-w-md  bg-[#fff] border-1 border-[#A2A2A2] px-4 py-3 z-10">
                          <h2 className="font-[cd-m] font-[500] text-[#A2A2A2] text-[13px]"> GET STARTED</h2>
                          <li className="pt-[5px]">
                            <Link
                              href="/accounting/accounting-services"
                              className="font-[cd-r] font-[500] no-underline  text-[#000]"
                            > Accounting Services
                            </Link>
                          </li>
                          <li className="pt-[5px]">
                            <Link
                              href="/accounting/accounting-for-ecommerce"
                              className="font-[cd-r] font-[500] no-underline   text-[#000]"
                            >Accounting for Ecommerce
                            </Link>
                          </li>
                          <li className="pt-[5pxx]">
                            <Link
                              href="#"
                              className="font-[cd-r] font-[500] no-underline   text-[#000]"
                            >Bookkeeping
                            </Link>

                          </li>
                          <h2 className="font-[cd-m] font-[500] text-[#A2A2A2] text-[13px] pt-3">EXPLORE MENU</h2>
                          <li className="pt-[5pxx]">
                            <Link
                              href="/accounting/invoicing"
                              className="font-[cd-r] font-[500] no-underline  text-[#000]"
                            >Invoicing
                            </Link>
                          </li>


                          <li className="pt-[5pxx]">
                            <Link
                              href="/accounting/ecommerce-insights"
                              className="font-[cd-r] font-[500] no-underline  text-[#000]"
                            >Ecommerce Insights
                            </Link>
                          </li>
                          <li className="pt-[5pxx]">
                            <Link
                              href="/accounting/reporting"
                              className="font-[cd-r] font-[500] no-underline  text-[#000]"
                            >Reporting
                            </Link>
                          </li>
                          <li className="pt-[5pxx]">
                            <Link
                              href="/accounting/personal-expenses"
                              className="font-[cd-r] font-[500] no-underline  text-[#000]"
                            >Personal Expenses
                            </Link>
                          </li>

                          <li className="pt-[5pxx]">
                            <Link
                              href="/accounting/purchases"
                              className="font-[cd-r] font-[500] no-underline  text-[#000]"
                            >Purchases
                            </Link>
                          </li>



                        </ul>
                      </div>
                    </span>



                    <Link href="/secretary" className=" no-underline block z-10 menulist ff-type font-[100] cursor-pointer  text-[#000] text-start text-[13px] ">
                      <span className="block   font-[cd-m] font-[500] text-[#212833]  text-[13px]  ">
                        Secretary

                      </span>
                    </Link>


                  </div>
                </div>

                <div className="col-md-3 ">
                  <div className="sm:text-end align-items-center sm:flex sm:justify-end">
                    <Link href="#" className=" no-underline block  header-text-para ">
                      <span className="block  menulist  font-[cd-m] font-[500] text-[#212833]  text-[13px]  header-text-para  align-items-center">
                        <div className="flex align-items-center">
                          <svg className="mr-4" width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.2373 16.5176C25.5795 15.3622 25.7647 14.1424 25.7647 12.8824C25.7647 10.475 25.1005 8.22055 23.9451 6.29222V6.2882C23.941 6.28015 23.933 6.27612 23.933 6.26807C21.6786 2.51608 17.5683 0 12.8824 0C6.31235 0 0.881636 4.9436 0.100643 11.3043V11.3123C0.0345394 11.8331 0.000926614 12.3574 0 12.8824C0 19.9837 5.78096 25.7647 12.8824 25.7647C18.6875 25.7647 23.6069 21.904 25.2132 16.6142C25.2253 16.582 25.2333 16.5498 25.2373 16.5176ZM0.780993 12.8824C0.780993 12.5643 0.797096 12.2543 0.82125 11.9403C2.10546 12.5321 3.87276 13.0957 6.09094 13.615C6.22379 13.6472 6.36469 13.6714 6.49754 13.7036C6.54585 15.2616 6.72298 16.735 7.0088 18.0836C6.99673 18.0796 6.98062 18.0796 6.96855 18.0756C4.77855 17.6287 2.79789 16.9524 1.2198 16.119C0.937996 15.0885 0.780993 14.0015 0.780993 12.8824ZM2.43557 6.78739C3.61108 7.18996 5.57162 7.72941 6.94037 8.02732C6.64649 9.52086 6.48546 11.1553 6.48546 12.8824V12.9025L6.26807 12.8542C3.94925 12.3147 2.15779 11.731 0.913842 11.1151C1.13928 9.5571 1.66665 8.09575 2.43557 6.78739ZM24.8227 10.9299C23.4217 11.8115 21.4572 12.5885 19.5127 13.0313C19.4363 13.0474 19.3517 13.0595 19.2752 13.0756C19.2752 13.0112 19.2792 12.9468 19.2792 12.8824C19.2792 11.26 19.1383 9.71813 18.8767 8.30107C18.8968 8.29704 18.9129 8.29704 18.933 8.29301C20.4105 8.03537 22.375 7.32281 23.4097 6.92024C24.1021 8.14004 24.5892 9.49268 24.8227 10.9299ZM18.4983 12.8824C18.4983 12.9951 18.4942 13.1038 18.4942 13.2165C16.8638 13.4983 15.1166 13.6352 13.2729 13.6311V8.71572C14.8818 8.74205 16.4902 8.64245 18.0836 8.41781C18.3493 9.80669 18.4983 11.3163 18.4983 12.8824ZM7.26645 12.8824C7.26645 11.2278 7.43151 9.63358 7.72539 8.18029C9.27529 8.46612 10.8735 8.6352 12.4919 8.69156V13.6271C10.7326 13.5788 8.95323 13.3896 7.26645 13.0635V12.8824ZM13.2729 7.93472V0.813199C15.2938 1.12721 17.057 3.86471 17.9266 7.6489C16.4411 7.85824 14.8872 7.95485 13.2729 7.93472ZM12.4919 0.813199V7.90654C10.9339 7.85018 9.39204 7.68513 7.89447 7.4154C8.78013 3.75601 10.5152 1.12318 12.4919 0.813199ZM7.28658 13.8606C8.97336 14.1746 10.7407 14.3598 12.4919 14.4081V18.6995C10.9138 18.6553 9.36386 18.5023 7.87031 18.2406C7.55228 16.892 7.34697 15.4105 7.28658 13.8606ZM12.4919 19.4765V24.9475C10.6481 24.6576 9.01362 22.3509 8.08368 19.0659C9.51684 19.3034 10.9903 19.4363 12.4919 19.4765ZM13.2729 24.9515V19.4966H13.4299C14.8831 19.4966 16.2881 19.404 17.6327 19.2229C16.6987 22.4233 15.0885 24.6657 13.2729 24.9515ZM13.2729 18.7076V14.4202H13.3896C15.173 14.4202 16.8719 14.2793 18.4701 14.0176C18.3976 15.5756 18.1842 17.053 17.8541 18.3936C16.4008 18.611 14.863 18.7156 13.2729 18.7076ZM19.2591 13.8727C19.4 13.8445 19.5449 13.8244 19.6818 13.7962C21.5739 13.3695 23.4861 12.6287 24.9314 11.7833C24.9636 12.1456 24.9837 12.512 24.9837 12.8864C24.9837 14.0418 24.8187 15.1609 24.5127 16.2197C23.0192 17.1295 21.0425 17.834 18.7801 18.2527L18.7156 18.2648C19.0135 16.9121 19.2028 15.4347 19.2591 13.8727ZM22.995 6.24392C21.9604 6.64246 20.1528 7.28658 18.8002 7.5241L18.7237 7.53618C18.0796 4.6296 16.9242 2.32285 15.4709 1.06279C18.5989 1.74717 21.2841 3.64732 22.995 6.24392ZM10.2978 1.06279C8.88882 2.28259 7.75759 4.48467 7.10542 7.26645C5.82926 6.98868 4.02574 6.49754 2.8623 6.10704C4.57324 3.57888 7.21814 1.73509 10.2978 1.06279ZM1.56199 17.1617C3.07566 17.8743 4.83491 18.4379 6.81154 18.8404C6.94037 18.8686 7.07322 18.8847 7.20204 18.9129C7.86629 21.4974 8.95323 23.5425 10.2938 24.7059C6.27612 23.8243 2.99917 20.9419 1.56199 17.1617ZM15.4669 24.7019C16.7752 23.5667 17.8461 21.586 18.5144 19.082C18.6472 19.0578 18.7881 19.0417 18.921 19.0176C20.9378 18.6472 22.681 18.0756 24.1343 17.3227C22.6689 21.0264 19.4282 23.8364 15.4669 24.7019Z" fill="#212833" />
                          </svg>

                          <span>SK</span>
                        </div>

                        <div className="menu-item relative sm:absolute py-[12px]  sm:top-[60px] top-[10px]">

                          <ul className="rounded-lg max-w-md  bg-[#fff] border-1 border-[#A2A2A2] px-3 py-2 z-10">
                            <li className="pt-[5px]">
                              <Link
                                href="/hong-kong"
                                className="font-[cd-r] font-[500] no-underline sm:text-[14px] text-[#000]"
                              >Hon-Kong
                              </Link>
                            </li>
                            <li className="pt-[2px]">
                              <Link
                                href="/"
                                className="font-[cd-r] font-[500] no-underline sm:text-[14px] text-[#000]"
                              >Singapore
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </span>
                  
                    </Link>
                    <Link href="#" className="block sm:pt-[0px] pt-[15px] sm:ml-5 no-underline align-items-center  header-text-para" ><button className="no-underline block z-10 sm:pt-[7px] pt-[15px] menulist ff-type font-[100] cursor-pointer  text-[#fff] text-start text-[13px] bg-[#000] px-5 py-2 rounded-[30px]" type="button">Log in</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header >

    </div >
  );
}
