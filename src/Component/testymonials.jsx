import React from 'react'
import ellipseImg from '../assets/Ellipse 1.png'

export default function testymonials() {
  return (
    <>
    <section className="mx-auto py-5">
      {/* Section Title */}
      <div className="section-title py-5 relative">
        <h2 className="text-[#6D91EE] text-center text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight relative">
          Testimonials
          {/* Top Left Line */}
          <span className="absolute left-[67%] bottom-[80%] w-[2px] h-[45px] bg-[#6D91EE] rotate-[135deg]"></span>
          {/* Top Right Line */}
          <span className="absolute right-[67%] bottom-[90%] w-[2px] h-[45px] bg-[#6D91EE] rotate-[-135deg]"></span>
          {/* Bottom Left Line */}
          <span className="absolute left-[67%] top-[65%] w-[2px] h-[45px] bg-[#6D91EE] rotate-[50deg]"></span>
          {/* Bottom Right Line */}
          <span className="absolute right-[67%] top-[65%] w-[2px] h-[45px] bg-[#6D91EE] rotate-[-50deg]"></span>
        </h2>
      </div>

      {/* Testimonials */}
      <div className="flex flex-wrap justify-center py-3">
        {/* Testimonial 1 */}
        <div className="py-5 px-3 md:w-1/2 lg:w-1/4">
          <div className="mycard p-3 rounded-xl border border-[#6D91EE] bg-white">
            <div className="flex items-center space-x-3">
              <div>
                <img src={ellipseImg} alt="Testimonial" className="w-[50px] h-[50px] rounded-full" />
              </div>
              <div className="info-test flex-1">
                <h4 className="text-[#6D91EE] font-semibold text-lg">Courtney Henry</h4>
                <p className="text-left text-sm text-[#333] my-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                {/* <img src={starImg} alt="Stars" className="w-[80px]" /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="py-5 px-3 md:w-1/2 lg:w-1/4">
          <div className="mycard p-3 rounded-xl border border-[#6D91EE] bg-white">
            <div className="flex items-center space-x-3">
              <div>
                <img src={ellipseImg} alt="Testimonial" className="w-[50px] h-[50px] rounded-full" />
              </div>
              <div className="info-test flex-1">
                <h4 className="text-[#6D91EE] font-semibold text-lg">Courtney Henry</h4>
                <p className="text-left text-sm text-[#333] my-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                {/* <img src={starImg} alt="Stars" className="w-[80px]" /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="py-5 px-3 md:w-1/2 lg:w-1/4">
          <div className="mycard p-3 rounded-xl border border-[#6D91EE] bg-white">
            <div className="flex items-center space-x-3">
              <div>
                <img src={ellipseImg} alt="Testimonial" className="w-[50px] h-[50px] rounded-full" />
              </div>
              <div className="info-test flex-1">
                <h4 className="text-[#6D91EE] font-semibold text-lg">Courtney Henry</h4>
                <p className="text-left text-sm text-[#333] my-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                {/* <img src={starImg} alt="Stars" className="w-[80px]" /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="py-5 px-3 md:w-1/2 lg:w-1/4">
          <div className="mycard p-3 rounded-xl border border-[#6D91EE] bg-white">
            <div className="flex items-center space-x-3">
              <div>
                <img src={ellipseImg} alt="Testimonial" className="w-[50px] h-[50px] rounded-full" />
              </div>
              <div className="info-test flex-1">
                <h4 className="text-[#6D91EE] font-semibold text-lg">Courtney Henry</h4>
                <p className="text-left text-sm text-[#333] my-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                {/* <img src={starImg} alt="Stars" className="w-[80px]" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}
