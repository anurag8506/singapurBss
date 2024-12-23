"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function Header1() {
 
    const [openMenu, setOpenMenu] = useState<string | null>(null); 
    const handleMouseEnter = (menu: string) => {
      setOpenMenu(menu);
    };
  

    const handleMouseLeave = () => {
      setOpenMenu(null);
    };
 
  return (
    <div>
        
      
       
           <section className="bg-[#212833] overflow-hidden sm:px-20 px-6 sm:py-5 py-5">
        <div className="container-fluid p-0">
        <div  className="row justify-content-between ">
            <div className="col-md-2 ">
                <div className=" ">
                <div className="col-md-12">
                <div  className="col-12">
                  <h3 className=" font-[cd-b]  mb-3 text-[16px] text-[#939393]">
                    INCORPORATION
                  </h3>
                  <ul className="list-unstyled">
                    <li className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="/incorporation/forLocals" className="text-white no-underline hover:underline ">
                        For Foreigners
                     </Link >
                    </li>
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="/incorporation/incorporation(Foreigners)" className="text-white no-underline hover:underline">
                      For Singaporeans & PRs
                     </Link >
                    </li>
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="/incorporation/aspire-business-account" className="text-white no-underline hover:underline">
                      Aspire Business Account
                     </Link >
                    </li>
                  </ul>
                  <h3 className="font-semibold mb-3 text-[16px] text-[#939393] pt-5" >OTHER SERVICES</h3>
                  <ul className="list-unstyled">
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="/nominee-director" className="text-white no-underline hover:underline">
                      Nominee Director
                     </Link >
                    </li>
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="/convert-sole-proprietorship-into-pte-ltd" className="text-white no-underline hover:underline">
                      Convert Sole Proprietorship into Pte Ltd.
                     </Link >
                    </li>
                  
                  </ul>
              
                </div>
                </div>
              
                </div>
            </div>
            <div className="col-md-2 ">
                <div className=" ">
                <div className="col-md-12">
                <div  className="col-12">
                  <h3 className=" font-[cd-b]  mb-3 text-[16px] text-[#939393]">
                  ACCOUNTING
                  </h3>
                  <ul className="list-unstyled">
                    <li className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="/accounting/accounting-services" className="text-white no-underline hover:underline ">
                      Accounting & Tax
                     </Link >
                    </li>
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="/accounting/accounting-for-ecommerce" className="text-white no-underline hover:underline">
                      Ecommerce Accounting
                     </Link >
                    </li>
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="/accounting/bookkeeping" className="text-white no-underline hover:underline">
                    Bookkeeping
                     </Link >
                    </li>
                 

                  </ul>
                  <h3 className="font-semibold mb-3 text-[16px] text-[#939393] pt-5" >COMPANY SECRETARY
                  </h3>
                  <ul className="list-unstyled">
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                      Company Secretary
                     </Link >
                    </li>
               
                   
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                      Transfer of Shares
                     </Link >
                    </li>
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                      Allotment of Shares
                     </Link >
                    </li>
                  
                   
                  
                  
                  </ul>
                
              
                </div>
                </div>
              
                </div>
            </div>


            <div className="col-md-2 ">
                <div className=" ">
                <div className="col-md-12">
                <div  className="col-12">
                  <h3 className=" font-[cd-b]  mb-3 text-[16px] text-[#939393]"> FEATURES</h3>
                  <ul className="list-unstyled">
                    <li className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline ">
                      Invoicing
                     </Link >
                    </li>
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                     Ecommerce Insights
                     </Link >
                    </li>
                
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                    Reporting
                     </Link >
                    </li>
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                      Demo
                     </Link >
                    </li>

                  </ul>
                
              
                </div>
                </div>
              
                </div>
            </div>
            <div className="col-md-2  ">
                <div className=" ">
                <div className="col-md-12">
                <div  className="col-12">
                  <h3 className="font-semibold mb-3 text-[16px] text-[#939393] " >COMPANY</h3>
                  <ul className="list-unstyled">
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                      About Us
                     </Link >

                    </li>
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                      Our Partners
                     </Link >
                    </li>
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                      Contact Us
                     </Link >
                    </li>
                    
               
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                      Careers at CloudBss
                     </Link >
                    </li>
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                      Privacy Policy
                     </Link >
                    </li>
                 
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                      Terms & Conditions
                     </Link >
                    </li>
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                      Terms of Business
                     </Link >
                    </li>
                  </ul>
                
              
                </div>
                </div>
              
                </div>
            </div>


            <div className="col-md-2 ">
                <div className=" ">
                <div className="col-md-12">
                <div  className="col-12">
                    <div>

                        
                    </div>
                  <h3 className=" font-[cd-b]  mb-3 text-[16px] text-[#939393]">RESOURCES</h3>
                  <ul className="list-unstyled">
                    <li className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline ">
                      Our Blog
                     </Link >
                    </li>
                  
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                      Company Name Search
                     </Link >
                    </li>
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                      Business Name Generator
                     </Link >
                    </li>
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                      Margin Calculator
                     </Link >
                    </li>
                    <li  className="font-[cd-r] mb-2 text-[14px]">
                      <Link href="#" className="text-white no-underline hover:underline">
                      Ebay Fee Calculator
                     </Link >
                    </li>
                

                  </ul>
                
              
                </div>
                </div>
              
                </div>
            </div>
        </div>
        </div>
      </section>
      <section className="bg-[#212833] overflow-hidden sm:px-20 px-6 ">
        <div className="container-fluid p-0">
      <div className="row">
        <div className="col-md-12">
      
        <p className="border border-t border-[#939393] w-full"></p>
        <div className="row">
        <div className="col-md-6 mb-4 pt-4">
            <div className="d-flex align-items-center">
            <Image src="/assets/Group17606.png" className="w-[120px]"width={500} height={500} alt="no-img"/>
            <div>
                <div>
                    <div className="d-flex align-items-center justify-content-between">
                    <div className="relative border border-[ #6B6B6B] px-3 py-2 rounded-[10px] ml-4" 
                  onMouseEnter={() => handleMouseEnter("products")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center text-lg hover:text-gray-900 group font-[cd-r]">
                  <div className="d-flex items-center gap-3 text-[#fff]">
          <svg className="shadow rounded-circle" width="30" height="30" viewBox="0 0 505 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M505 252.475C505 391.969 392 505 252.5 505C113 505 0 391.969 0 252.475C0 247.274 0.15 242.124 0.51 237.023H504.51C504.837 242.124 505 247.274 505 252.475Z" fill="#F2F2F2" />
                            <path d="M505 252.475H0C0 247.274 0.15 242.124 0.51 237.023C8.43 104.75 118.27 0 252.51 0C386.75 0 496.57 104.75 504.55 237.023C504.85 242.124 505 247.274 505 252.475Z" fill="#EF2B2D" />
                            <path d="M172.98 102.48L177.07 113.722L188.97 114.262L179.43 121.472L182.7 133.114L172.76 126.423L162.84 132.973L166.25 121.572L156.83 114.042L168.83 113.872L172.98 102.48Z" fill="white" />
                            <path d="M253.47 102.48L257.56 113.722L269.46 114.262L259.92 121.472L263.2 133.114L253.25 126.423L243.33 132.973L246.75 121.572L237.32 114.042L249.33 113.872L253.47 102.48Z" fill="white" />
                            <path d="M193.711 143.634L197.801 154.875L209.701 155.425L200.161 162.626L203.441 174.277L193.491 167.587L183.571 174.137L186.991 162.736L177.561 155.205L189.561 155.035L193.711 143.634Z" fill="white" />
                            <path d="M239.189 143.634L243.269 154.875L255.179 155.425L245.629 162.626L248.909 174.277L238.959 167.587L229.049 174.137L232.459 162.736L223.039 155.205L235.039 155.035L239.189 143.634Z" fill="white" />
                            <path d="M214.65 73.6177L218.74 84.8688L230.64 85.4088L221.1 92.6196L224.37 104.261L214.43 97.57L204.51 104.121L207.92 92.7196L198.5 85.1888L210.5 85.0188L214.65 73.6177Z" fill="white" />
                            <path d="M189.859 198.15C179.411 201.845 168.23 202.979 157.253 201.459C146.276 199.939 135.824 195.807 126.773 189.411C117.723 183.016 110.338 174.542 105.239 164.702C100.14 154.862 97.4755 143.943 97.4688 132.86C97.462 121.777 100.113 110.854 105.2 101.008C110.287 91.1615 117.661 82.6791 126.704 76.2723C135.746 69.8656 146.194 65.7213 157.169 64.1874C168.144 62.6535 179.327 63.7747 189.779 67.4568C172.651 67.7668 156.329 74.7922 144.329 87.0199C132.329 99.2476 125.611 115.699 125.622 132.833C125.632 149.966 132.37 166.409 144.385 178.622C156.4 190.835 172.73 197.841 189.859 198.13V198.15Z" fill="white" />
                            <path opacity="0.12" d="M393.219 72.8876C350.809 39.5048 297.934 22.2501 243.999 24.1928C120.329 28.3532 21.439 131.993 22.789 255.736C23.0098 277.969 26.4764 300.051 33.0791 321.282C34.4202 325.652 37.1596 329.461 40.876 332.123C44.5924 334.784 49.0801 336.151 53.649 336.014C304.779 327.483 381.699 151.865 399.989 95.2898C401.282 91.3111 401.327 87.0318 400.116 83.0271C398.906 79.0224 396.499 75.484 393.219 72.8876Z" fill="white" />
                          </svg>
                          Singapore
          </div>
       
                  </button>

                  {openMenu === "products" && (
                  <div className="absolute left-0 top-[20px] py-2 mt-4 w-[280px] bg-white shadow-md rounded-md transition-all ease-in-out">
                  <ul className="pl-5 py-0 space-y-4">
                    <Link href="/" className="no-underline">
                      <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
                      <svg className="shadow rounded-circle" width="30" height="30" viewBox="0 0 505 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M505 252.475C505 391.969 392 505 252.5 505C113 505 0 391.969 0 252.475C0 247.274 0.15 242.124 0.51 237.023H504.51C504.837 242.124 505 247.274 505 252.475Z" fill="#F2F2F2" />
                            <path d="M505 252.475H0C0 247.274 0.15 242.124 0.51 237.023C8.43 104.75 118.27 0 252.51 0C386.75 0 496.57 104.75 504.55 237.023C504.85 242.124 505 247.274 505 252.475Z" fill="#EF2B2D" />
                            <path d="M172.98 102.48L177.07 113.722L188.97 114.262L179.43 121.472L182.7 133.114L172.76 126.423L162.84 132.973L166.25 121.572L156.83 114.042L168.83 113.872L172.98 102.48Z" fill="white" />
                            <path d="M253.47 102.48L257.56 113.722L269.46 114.262L259.92 121.472L263.2 133.114L253.25 126.423L243.33 132.973L246.75 121.572L237.32 114.042L249.33 113.872L253.47 102.48Z" fill="white" />
                            <path d="M193.711 143.634L197.801 154.875L209.701 155.425L200.161 162.626L203.441 174.277L193.491 167.587L183.571 174.137L186.991 162.736L177.561 155.205L189.561 155.035L193.711 143.634Z" fill="white" />
                            <path d="M239.189 143.634L243.269 154.875L255.179 155.425L245.629 162.626L248.909 174.277L238.959 167.587L229.049 174.137L232.459 162.736L223.039 155.205L235.039 155.035L239.189 143.634Z" fill="white" />
                            <path d="M214.65 73.6177L218.74 84.8688L230.64 85.4088L221.1 92.6196L224.37 104.261L214.43 97.57L204.51 104.121L207.92 92.7196L198.5 85.1888L210.5 85.0188L214.65 73.6177Z" fill="white" />
                            <path d="M189.859 198.15C179.411 201.845 168.23 202.979 157.253 201.459C146.276 199.939 135.824 195.807 126.773 189.411C117.723 183.016 110.338 174.542 105.239 164.702C100.14 154.862 97.4755 143.943 97.4688 132.86C97.462 121.777 100.113 110.854 105.2 101.008C110.287 91.1615 117.661 82.6791 126.704 76.2723C135.746 69.8656 146.194 65.7213 157.169 64.1874C168.144 62.6535 179.327 63.7747 189.779 67.4568C172.651 67.7668 156.329 74.7922 144.329 87.0199C132.329 99.2476 125.611 115.699 125.622 132.833C125.632 149.966 132.37 166.409 144.385 178.622C156.4 190.835 172.73 197.841 189.859 198.13V198.15Z" fill="white" />
                            <path opacity="0.12" d="M393.219 72.8876C350.809 39.5048 297.934 22.2501 243.999 24.1928C120.329 28.3532 21.439 131.993 22.789 255.736C23.0098 277.969 26.4764 300.051 33.0791 321.282C34.4202 325.652 37.1596 329.461 40.876 332.123C44.5924 334.784 49.0801 336.151 53.649 336.014C304.779 327.483 381.699 151.865 399.989 95.2898C401.282 91.3111 401.327 87.0318 400.116 83.0271C398.906 79.0224 396.499 75.484 393.219 72.8876Z" fill="white" />
                          </svg>
                        <span>SK</span>
                      </li>
                    </Link>
                    <Link href="/hong-kong" className="no-underline">
                      <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
                      <svg width="30" height="30" viewBox="0 0 505 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 252.5C0 113.048 113.048 0 252.5 0V0C391.952 0 505 113.048 505 252.5V252.5C505 391.952 391.952 505 252.5 505V505C113.048 505 0 391.952 0 252.5V252.5Z" fill="#D80027" />
                            <path d="M270.754 201.363C265.672 222.505 256.64 218.474 252.207 236.911C226.1 230.635 210.02 204.38 216.297 178.269C222.572 152.162 248.829 136.082 274.937 142.358C266.072 179.235 275.3 182.454 270.754 201.363ZM203.003 217.029C221.541 228.397 214.913 235.741 231.079 245.654C217.04 268.545 187.104 275.723 164.212 261.685C141.32 247.647 134.141 217.708 148.18 194.817C180.512 214.644 186.422 206.862 203.003 217.029ZM196.967 286.306C213.507 272.188 218.443 280.759 232.867 268.448C250.301 288.873 247.875 319.563 227.451 336.997C207.025 354.431 176.335 352.004 158.903 331.581C187.749 306.961 182.174 298.933 196.967 286.306ZM260.989 313.455C252.671 293.363 262.348 291.314 255.1 273.794C279.912 263.526 308.352 275.315 318.623 300.128C328.891 324.94 317.1 353.38 292.287 363.649C277.782 328.606 268.427 331.427 260.989 313.455ZM306.592 260.956C284.913 262.657 285.955 252.819 267.052 254.302C264.952 227.532 284.954 204.127 311.725 202.025C338.496 199.93 361.901 219.931 364 246.701C326.19 249.666 325.979 259.437 306.592 260.956Z" fill="#F0F0F0" />
                          </svg>
                        <span>Hong Kong</span>
                      </li>
                    </Link>
                  </ul>
                </div>
                
                  )}
                </div>

                    </div>
                </div>
            </div>
            </div>
            <p className="text-[#C1C1C1] text-[12px] pt-4 font-[cd-r]" >Copyright © 2023–2024 Cloud Bss. Pvt. Ltd., India. All rights reserved. Cloud Bss. Pvt. Ltd. has obtained waiver towards the The India Code on Take-overs and Mergers (Code) and is not subjected to the implications arising from the requirements of the Code. All the protections afforded by the Code do not apply to the shareholders of Cloud Bss, including the right to receive a minimum offer price from an offeror in a mandatory or voluntary offer. Here is further information.</p>
        </div>
        <div className="col-md-6 mb-4 pt-4">
           <div className="justify-content-end d-flex gap-4">
            <button className="border border-[#fff] px-4 py-2 rounded-full bg-black text-white d-flex align-items-center gap-2">
            <svg width="19" height="19" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9326 3.72212C13.3737 3.21372 13.71 2.62319 13.9223 1.98444C14.1345 1.34569 14.2185 0.671298 14.1694 0C12.8152 0.109315 11.5581 0.746241 10.669 1.77355C10.2432 2.26592 9.92056 2.83871 9.72014 3.45801C9.51971 4.07731 9.44559 4.73053 9.50216 5.37899C10.1627 5.3845 10.8157 5.23792 11.4106 4.95061C12.0055 4.6633 12.5262 4.24296 12.9326 3.72212ZM15.8729 12.4032C15.8808 11.5091 16.1163 10.6318 16.5572 9.85395C16.9982 9.07613 17.6301 8.4235 18.3933 7.95764C17.9116 7.26367 17.2749 6.69146 16.5336 6.28639C15.7924 5.88132 14.9669 5.65454 14.1227 5.62403C12.3025 5.43734 10.6223 6.68582 9.65385 6.68582C8.6854 6.68582 7.32023 5.64736 5.80338 5.6707C4.81174 5.70336 3.84549 5.99248 2.99889 6.50985C2.15228 7.02722 1.45422 7.75518 0.972782 8.62273C-1.0808 12.1932 0.447717 17.5022 2.5013 20.3842C3.43475 21.796 4.60156 23.3945 6.14175 23.3362C7.68194 23.2779 8.18367 22.3794 9.96889 22.3794C11.7541 22.3794 12.3025 23.3362 13.8194 23.3012C15.3362 23.2662 16.4097 21.8544 17.3898 20.4425C18.0841 19.4175 18.6265 18.2974 19 17.1171C18.0753 16.7227 17.2863 16.0661 16.7306 15.2284C16.1749 14.3907 15.8767 13.4085 15.8729 12.4032Z" fill="#CACACA"/>
</svg>

            App Store
            </button>
            <button className="border border-[#fff] px-4 py-2 rounded-full bg-black text-white d-flex align-items-center gap-2">
            <svg width="19" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.27141 8.90697L12.3332 5.84515L2.44366 0.286855C1.78822 -0.0672682 1.1742 -0.11697 0.635765 0.270288L9.27141 8.90697ZM12.8551 12.4917L16.0381 10.7014C16.6593 10.3535 17 9.86062 17 9.3139C17 8.76822 16.6593 8.27431 16.0391 7.9264L13.1574 6.30799L9.91339 9.55102L12.8551 12.4917ZM0.103545 1.02306C0.0372761 1.22704 0 1.45484 0 1.70439V16.9307C0 17.3252 0.0869778 17.6648 0.244366 17.935L8.6284 9.54998L0.103545 1.02306ZM9.27141 10.192L0.933975 18.5304C1.09343 18.5915 1.26532 18.6236 1.44652 18.6236C1.76958 18.6236 2.1061 18.5284 2.44884 18.3378L12.0319 12.9566L9.27141 10.192Z" fill="#CACACA"/>
</svg>

            App Store
            </button>

           </div>
          
<div className="d-flex justify-content-sm-end justify-content-evenly pt-5 pb-5">
<svg className="ml-3 mr-3" width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.02014 3.12892H9.79192V0.131969C8.93407 0.042765 8.07212 -0.00127633 7.20965 2.81451e-05C4.64622 2.81451e-05 2.89328 1.56447 2.89328 4.42948V6.89867H0V10.2537H2.89328V18.8488H6.36145V10.2537H9.24531L9.67883 6.89867H6.36145V4.75934C6.36145 3.76978 6.62533 3.12892 8.02014 3.12892Z" fill="#CACACA"/>
</svg>
<svg  className="ml-3 mr-3" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1375 0H5.14076C2.30597 0 0 2.30597 0 5.14076V13.1375C0 15.9723 2.30597 18.2783 5.14076 18.2783H13.1375C15.9723 18.2783 18.2783 15.9723 18.2783 13.1375V5.14076C18.2783 2.30597 15.9723 0 13.1375 0ZM9.13913 13.7087C6.61951 13.7087 4.56956 11.6593 4.56956 9.13913C4.56956 6.61896 6.61951 4.56956 9.13913 4.56956C11.6588 4.56956 13.7087 6.61896 13.7087 9.13913C13.7087 11.6593 11.6588 13.7087 9.13913 13.7087ZM14.2799 4.56956C13.9644 4.56956 13.7087 4.31381 13.7087 3.99837C13.7087 3.68286 13.9644 3.42717 14.2799 3.42717C14.5953 3.42717 14.8511 3.68286 14.8511 3.99837C14.8511 4.31381 14.5953 4.56956 14.2799 4.56956Z" fill="#CACACA"/>
</svg>
<svg className="ml-3 mr-3" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 2.74464C0 2.13845 0.212169 1.63835 0.636488 1.24435C1.06081 0.850323 1.61244 0.65332 2.29136 0.65332C2.95816 0.65332 3.49765 0.847286 3.90986 1.23525C4.33418 1.63533 4.54635 2.15663 4.54635 2.7992C4.54635 3.38113 4.34025 3.86606 3.92804 4.25403C3.50372 4.6541 2.94603 4.85414 2.25499 4.85414H2.2368C1.57 4.85414 1.03051 4.6541 0.618303 4.25403C0.206095 3.85395 0 3.35081 0 2.74464ZM0.23641 18.6568V6.50901H4.27356V18.6568H0.23641ZM6.51037 18.6568H10.5475V11.8737C10.5475 11.4494 10.596 11.122 10.693 10.8917C10.8627 10.4795 11.1204 10.1309 11.4659 9.84603C11.8114 9.56112 12.2448 9.41867 12.7661 9.41867C14.124 9.41867 14.8029 10.334 14.8029 12.1647V18.6568H18.8401V11.6918C18.8401 9.89755 18.4157 8.53668 17.5671 7.60923C16.7184 6.68177 15.597 6.21805 14.2028 6.21805C12.6388 6.21805 11.4204 6.89091 10.5475 8.23662V8.273H10.5293L10.5475 8.23662V6.50901H6.51037C6.53461 6.89696 6.54674 8.10325 6.54674 10.1279C6.54674 12.1525 6.53461 14.9955 6.51037 18.6568Z" fill="#CACACA"/>
</svg>
<svg className="ml-3 mr-3" width="19" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.0476334 0L7.59068 10.0815L0 18.2783H1.70836L8.35398 11.1019L13.7235 18.2783H19.5371L11.5696 7.62965L18.635 0H16.9266L10.8063 6.60928L5.86124 0H0.0476334ZM2.5599 1.25785H5.23068L17.0244 17.0202H14.3536L2.5599 1.25785Z" fill="#CACACA"/>
</svg>

</div>
        </div>

        </div>
        </div>
      </div>
        </div>
      </section>

    </div>
  );
}
