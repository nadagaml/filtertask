import React from 'react'
import heroImage from '../assets/Vector7.png'
import Logo from '../assets/logo.svg'
import part2_bg from '../assets/part2_bg.png'
import part2_img from '../assets/pat2_img.png'
import vectorblue from '../assets/vectorblue.png'

export default function Home() {
  return (
    <>

<section className="relative flex h-screen overflow-hidden bg-gray-100">
  {/* Left Side - Image */}
  <div className="w-1/2 h-full">
  <img src={heroImage} alt="Hero" className="h-full w-full object-center" />

  </div>


  {/* Absolute Content - Centered on top */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 ">
    {/* Logo */}
    <img src={Logo} alt="Logo" className="w-25 mb-20" />

    {/* Experts Button */}
    <button className="bg-[#6D91EE] text-white py-1 px-4 rounded-full mb-6">Experts</button>

    {/* Heading */}
    <h2 className="text-[80px] font-thin font-Poppins text-[#4F4F4F] ">Lorem</h2>
    <h1 className="text-[70px] font-extrabold mb-4 font-Poppins text-[#4F4F4F]">
      Lorem <span>lorem</span>
    </h1>

    {/* Paragraph */}
    <p className="text-gray-600 max-w-md mb-6 font-Poppins font-semibold text-[18px] leading-[25.5px] tracking-normal">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the  
</p>


    {/* Help Me Button */}
    <button className="bg-[#5180F6] text-white py-3 px-8 rounded-full font-semibold shadow-md hover:shadow-lg transition">
      Help Me
    </button>
  </div>
</section>


{/* part2  about*/}


<section
        className="relative mt-8 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${part2_bg})`, height: '85vh' }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-50"></div>

        {/* Vector Image on the Right */}
        <div
          className="absolute top-0 right-0 w-2/3 h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${vectorblue})` }}
        ></div>

        {/* Content */}
        <div className="absolute z-10 top-0 left-0 right-0 bottom-0 ">
          <div className="flex flex-col md:flex-row h-full">
            
            {/* About Us Section */}
<div className="w-full md:w-1/2 flex flex-col justify-center px-5 relative z-20">
  <div className="bg-white/10  p-6 rounded-xl text-white max-w-md">
    <h2 className="font-poppins text-3xl font-extrabold">About Us</h2>
    <p className="font-poppins text-xs font-bold mt-4 leading-5">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>
    <img
      className="rounded-lg w-64 mt-6"
      src={part2_img}
      alt="About Us"
    />
  </div>
</div>


            {/* Where Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-end px-5 mt-5 md:mt-0 h-full">
              {/* Top Text */}
              <div className="text-white mt-5 md:mt-16">
                <h2 className="font-poppins text-5xl font-extrabold text-right mr-20">Where</h2>
                <p className="font-poppins text-[10px] font-bold mt-5 mr-5 text-end leading-[18px] max-w-[500px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s
                  with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              {/* Bottom Button */}
              <div className="w-full flex justify-start mb-5 ml-5 mt-20">
                <button className="px-8 py-2 text-gray-600 font-bold bg-yellow-400 rounded-full font-poppins">
                  Help me
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>


    </>
  )
}
