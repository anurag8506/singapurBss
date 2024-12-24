"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Header from '../components/header';
import Footer from '../components/footer'
import Image from "next/image";
import RunBusiness from '../components/run-your-business'

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (res.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
      } else {
        setResponseMessage(result.error || "Failed to send the message.");
      }
    } catch (error: unknown) {
      console.error("Error occurred while submitting the form:", error);
      setResponseMessage("Something went wrong.");
    }
  };

  return (
    
    <div>
          <Header />
          <section className='bg-[#F3EFE7]'>
                        <div className="overflow-hidden sm:px-20 px-6  sm:pt-[100px] pt-[50px] sm:py-[40px] py-[20px]">
                            <div className="container-fluid p-0">
                                <div className="d-flex justify-center">
                                    <div className="col-md-6 mb-4">
                                        <p className="text-center">Cloud Bss IND : Contact Us</p>
                                        <p className="font-[cd-b] text-[#212833] text-[33px] leading-[35px] p-text text-center sm:text-[45px] sm:leading-[45px]">
                                        Contact Us
                                        </p>
                                        <p className="font-[cd-r] p-text text-center text-[18px]  text-[#212833]   ">Contact us for all your queries. From explaining the difference between bookkeeping and accounting, starting a business in Madagascar, to recommending the business books our CEO loves – we&apos;ve got the answers.
                                        </p>
        
                                    
                                    </div>
        
                                </div>
                                <div className="d-flex justify-center">
                                    <div className="col-md-6">
                                    <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name*"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full  outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full  outline-none"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputClass="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your phone number"
              specialLabel="Phone Number"
                  
            />
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange} 
              className="border border-gray-300 rounded-md p-2 w-full  outline-none"
            >
              <option value="" disabled>
                Interested in*
              </option>
              <option value="Consulting">Consulting</option>
              <option value="Accounting">Accounting</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="How can we help?*"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 outline-none w-full"
            required
          ></textarea>
          <div className="d-flex justify-center">
          <button
            type="submit"
         className="font-[cd-m] font-[500] text-[14px] text-[#212833]  border-[1px] border-[#212833]  py-[8px] px-6 rounded-[30px] text-center bg-[#fff] hover:bg-[#000] hover:text-[#fff]"
          >
            Send your message
          </button>

          </div>
          {responseMessage && (
            <p className="text-center text-green-600 mt-2">{responseMessage}</p>
          )}
        </form>
        <p className="text-xs text-center text-gray-500 mt-4">
          By clicking, you agree to our {" "}
          <a href="#" className="text-blue-600 underline">
            Terms & Conditions
          </a>
          , {" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
        </p>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                       
                    </section>
                    <section className="overflow-hidden ">
                    <Image src="/assets/image (12).png" className="w-full"
                                                    width={1080}
                                                    height={1080}
                                                    alt="no-img"
                                                />
                    
                                </section>


<RunBusiness/>

<Footer/>
    </div>
  );
}
