import React, { useState } from 'react';
import { Mail, Phone } from "lucide-react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://upskilling-egypt.com:3001/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        toast.success('Message sent successfully!', {
        
          autoClose: 3000,  
        });
        setFormData({ name: '', email: '', phone: '' }); 
      } else {
        toast.error('Failed to send message. Please try again later.', {
        
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.', {

        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <section className="w-full bg-white mx-auto py-5">
        <div className="section-title py-5 relative">
          <h2 className="text-[#7496f3] text-4xl md:text-6xl font-black leading-[89.5px] text-center relative font-poppins">
            Contact Us
            <span className="absolute left-[67%] bottom-[80%] w-[2px] h-[45px] bg-[#7496f3] rotate-[135deg]" />
            <span className="absolute right-[67%] bottom-[90%] w-[2px] h-[45px] bg-[#7496f3] rotate-[-135deg]" />
          </h2>
          <span className="absolute left-[67%] top-[65%] w-[2px] h-[45px] bg-[#7496f3] rotate-[50deg]" />
          <span className="absolute right-[67%] top-[65%] w-[2px] h-[45px] bg-[#7496f3] rotate-[-50deg]" />
        </div>

        <div className="my-form w-full md:w-2/3 mx-auto py-4 px-5">
          <div className="flex flex-col md:flex-row md:gap-10 gap-6">

            {/* Form */}
            <div className="w-full md:w-1/2 py-3">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control mb-3 bg-[#CEDCFF] rounded-full w-full p-3"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control mb-3 bg-[#CEDCFF] rounded-full w-full p-3"
                  placeholder="Email"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control mb-3 bg-[#CEDCFF] rounded-full w-full p-3"
                  placeholder="Phone"
                  required
                />
                <div className="flex justify-center mt-4">
                  <button type="submit" className="border-2 border-[#5180F6] rounded-full px-10 py-2 bg-white text-[#5180F6] font-semibold">
                    Send
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="w-full md:w-1/2 py-3 flex flex-col justify-center items-start space-y-6 px-4">
              <div className="flex items-center gap-3">
                <Mail className="text-[#7496f3]" size={24} />
                <span className="text-[#333] font-abel text-sm">upskilling.eg1@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#7496f3]" size={24} />
                <span className="text-[#333] font-abel text-sm">+20 115 493 2137</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ToastContainer />
    </>
  );
}
