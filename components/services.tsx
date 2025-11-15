import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    title: "Dental Treatment",
    description: "Whitening, composite restoration, and smile design for balanced appearance and greater confidence",
    highlighted: true,
  },
  {
    title: "Aesthetic Smile",
    description: "We remove tartar and plaque, refresh breath, and prevent gum diseases and cavities effectively and gently",
  },
  {
    title: "Professional Cleaning",
    description: "Painless treatment of caries, pulpitis, and sensitivity with precise diagnostics and advanced local anesthesia",
  },
  {
    title: "Dental Implants",
    description: "Tooth implants with natural appearance, comfortable bite, and long-lasting results without affecting neighboring teeth",
  },
  {
    title: "Gum Treatment",
    description: "Effective treatment for periodontitis - restoring gum health and maintaining a bright smile",
  },
  {
    title: "Prosthetics",
    description: "Custom dentures that fit perfectly and look completely natural and comfortable",
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle dental care for children, addressing developmental issues and instilling positive habits",
  },
  {
    title: "Teeth Alignment",
    description: "Modern alignment with braces or aligners for the perfect bite and confident smile",
  },
];

export default function Services() {
  return (
<section className="py-20 bg-[#f7f7f7] rounded-3xl">
  <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-4 gap-10">

    {/* COLUMN 1: LEFT TEXT */}
    <div className="flex flex-col justify-start">
      <div className="rounded-full ">
                <img
                  src="/logo/logo1.png"
                  className="  w-20 h-20 object-contain "
                  alt="Tooth Icon"
                />
              </div>

      <h2 className="text-5xl font-bold leading-tight text-[#142c24] mb-4">
        The Clinic <br />
        Trusted <br />
        <span className="text-[#019c70]">With Smiles</span>
      </h2>

      <p className="text-gray-600 max-w-sm">
        Your comfort, peace, and health are our top priorities.
        With us, you'll always get more than just treatment.
      </p>
    </div>

    {/* COLUMN 2: FEATURE CARDS */}
    <div className="flex flex-col gap-6 pt-16">
      {/* CARD 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex gap-2 text-xs text-gray-500 mb-2">
          <span className="bg-gray-100 px-3 py-1 rounded-full">Tech</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">Safety</span>
        </div>
        <h3 className="font-bold text-lg text-[#142c24]">Modern Equipment</h3>
        <p className="text-gray-600 text-sm mt-1">
          We use cutting-edge equipment for accurate diagnostics and painless procedures.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex gap-2 text-xs text-gray-500 mb-2">
          <span className="bg-gray-100 px-3 py-1 rounded-full">Personal</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">Care</span>
        </div>
        <h3 className="font-bold text-lg text-[#142c24]">Individual Approach</h3>
        <p className="text-gray-600 text-sm mt-1">
          Each patient receives a personalized treatment plan tailored to their needs.
        </p>
      </div>
    </div>

    {/* COLUMN 3–4: BIG WHITE BOX */}
    <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-sm relative pb-0">
      <div className="flex flex-col lg:flex-row items-center gap-12">

        {/* TEXT CONTENT */}
        <div className="flex-1">
          <div className="rounded-full ">
                <img
                  src="/logo/logo.png"
                  className="  w-20 h-20 object-contain "
                  alt="Tooth Icon"
                />
              </div>

          <h2 className="text-4xl font-bold text-[#142c24] leading-tight mb-4">
            WHITE SMILE:<br />
            PURE BRIGHTNESS
          </h2>

          <p className="text-[#019c70] font-semibold mb-1">IN JUST 1 SESSION</p>

          <p className="text-gray-600 text-sm mb-6 max-w-sm">
            Get <span className="font-bold">20% off</span> professional teeth whitening until the end of the month.
          </p>

          <button className="bg-[#019c70] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#017a59] transition ml-[-40px]">
            Book Appointment
          </button>
        </div>

        {/* IMAGE SPLIT */}
        <div className="relative flex-1 h-80 rounded-2xl overflow-hidden">
          <img
            src="/images/smile.jpeg"
            alt="White Smile"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white"></div>

          <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center">
            ↔
          </button>

          <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-4 py-1 rounded-full text-gray-800 text-sm shadow">
            • New Smile
          </div>
        </div>
      </div>
    </div>

  </div>

      {/* Services Grid Section */}
      <div className="bg-[#142c24] text-white py-10 rounded-3xl  mt-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="  flex items-center justify-center text-white mx-auto "><div className="rounded-full ">
                <img
                  src="/logo/logo1.png"
                  className="  w-20 h-20 object-contain m-2"
                  alt="Tooth Icon"
                />
              </div></div>
            <h3 className="text-4xl font-bold mb-2">
              Your New Smile <span className="text-[#019c70]">Starts Here</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer group bg-white text-[#142c24] hover:bg-[#019c70] hover:text-white"
                
                   
              >
                <h4 className="font-bold text-lg mb-3">{service.title}</h4>
                <p className="text-sm mb-4 leading-relaxed">{service.description}</p>
                <button className="flex items-center gap-2 font-semibold text-sm text-[#019c70] group-hover:text-white float-right ">
                
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
