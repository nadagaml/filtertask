import React from 'react'
import serv1 from '../assets/S1.png'
import serv2 from '../assets/S2.png'
import serv3 from '../assets/S3.png'

export default function Services() {
  return (
    <>

<section className="bg-gray-100 mx-auto py-10">
      <div className="relative py-10">
        <h2 className="text-[#7496f3] text-center font-poppins font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight relative">
          Service
          <span className="absolute left-1/2 -translate-x-1/2 -top-4 w-px h-9 bg-[#7496f3] rotate-135"></span>
          <span className="absolute right-1/2 translate-x-1/2 -top-4 w-px h-9 bg-[#7496f3] -rotate-135"></span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {/* Card 1 */}
        <div className="w-72 bg-white rounded-[40px] shadow-md overflow-hidden">
          <img
            src="../../../assets/images/s1.png"
            alt="Service 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-5 overflow-hidden">
            <h5 className="font-poppins text-[#324473] font-black text-sm leading-6 text-left">
              Lorem Ipsum
            </h5>
            <p className="font-poppins text-[#324473] font-normal text-xs leading-5 text-left mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-72 bg-white rounded-[40px] shadow-md overflow-hidden mt-3 md:mt-0">
          <img
            src="../../../assets/images/s2.png"
            alt="Service 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-5 overflow-hidden">
            <h5 className="font-poppins text-[#324473] font-black text-sm leading-6 text-left">
              Lorem Ipsum
            </h5>
            <p className="font-poppins text-[#324473] font-normal text-xs leading-5 text-left mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-72 bg-white rounded-[40px] shadow-md overflow-hidden mt-3 md:mt-0">
          <img
            src="../../../assets/images/s3.png"
            alt="Service 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-5 overflow-hidden">
            <h5 className="font-poppins text-[#324473] font-black text-sm leading-6 text-left">
              Lorem Ipsum
            </h5>
            <p className="font-poppins text-[#324473] font-normal text-xs leading-5 text-left mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="mt-8 px-10 py-4 text-white text-sm font-bold bg-[#5180f6] rounded-full font-poppins">
          Help me
        </button>
      </div>
    </section>
    </>
  )
}
