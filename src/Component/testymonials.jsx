import React from 'react'
import ellipseImg from '../assets/Ellipse 1.png'

export default function testymonials() {
  return (
    <>
    <section className="mx-auto py-5 container pt-8">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-3 pt-10">
  {/* Testimonial 1 */}
  <div className="p-3 flex justify-start">
  <div className="mycard p-5 rounded-2xl border border-[#6D91EE] bg-white w-full">
    <div className="flex items-start space-x-4">
      <img src={ellipseImg} alt="Testimonial" className="w-[50px] h-[50px] rounded-full" />
      <div className="flex-1 text-left">
        <h4 className="text-[#6D91EE] font-semibold text-lg">Courtney Henry</h4>
        <p className="text-sm text-[#333] my-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  </div>
</div>


  {/* Testimonial 2 */}
  <div className="p-3 flex justify-start">
  <div className="mycard p-5 rounded-2xl border border-[#6D91EE] bg-white w-full">
    <div className="flex items-start space-x-4">
      <img src={ellipseImg} alt="Testimonial" className="w-[50px] h-[50px] rounded-full" />
      <div className="flex-1 text-left">
        <h4 className="text-[#6D91EE] font-semibold text-lg">Courtney Henry</h4>
        <p className="text-sm text-[#333] my-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  </div>
</div>


  {/* Testimonial 3 */}
  <div className="p-3 flex justify-start">
  <div className="mycard p-5 rounded-2xl border border-[#6D91EE] bg-white w-full">
    <div className="flex items-start space-x-4">
      <img src={ellipseImg} alt="Testimonial" className="w-[50px] h-[50px] rounded-full" />
      <div className="flex-1 text-left">
        <h4 className="text-[#6D91EE] font-semibold text-lg">Courtney Henry</h4>
        <p className="text-sm text-[#333] my-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  </div>
</div>


  {/* Testimonial 4 */}
  <div className="p-3 flex justify-start">
  <div className="mycard p-5 rounded-2xl border border-[#6D91EE] bg-white w-full">
    <div className="flex items-start space-x-4">
      <img src={ellipseImg} alt="Testimonial" className="w-[50px] h-[50px] rounded-full" />
      <div className="flex-1 text-left">
        <h4 className="text-[#6D91EE] font-semibold text-lg">Courtney Henry</h4>
        <p className="text-sm text-[#333] my-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  </div>
</div>

</div>

    </section>
    
    </>
  )
}
