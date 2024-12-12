"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <div className="max-w-2xl w-full px-6 py-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 mb-6">
          Contact us for all your queries. From explaining bookkeeping to starting a business in Madagascar.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name*"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
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
              className="border border-gray-300 rounded-md p-2 w-full"
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
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md w-full hover:bg-gray-800 transition"
          >
            Send your message
          </button>
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
  );
}
