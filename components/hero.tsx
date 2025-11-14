// Updated Hero component matching the UI exactly like the provided image
// (Single-section layout, header included inside same component)

import { ArrowRight, Play, Menu, Search, User, Phone } from "lucide-react";
import Image from "next/image";

const ToothIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 5C15 5 12 8 10 12C8 16 8 20 8 24C8 28 10 32 12 34C14 36 16 35 18 33C19 32 19 30 20 30C21 30 21 32 22 33C24 35 26 36 28 34C30 32 32 28 32 24C32 20 32 16 30 12C28 8 25 5 20 5Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="20" cy="15" r="1.5" fill="white" />
  </svg>
);

export default function Hero() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAVIGATION */}
      <nav className=" top-0 left-0 right-0 bg-white   rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-full flex items-center justify-center">
              <img
                src="/logo/logo2.png"
                className=" absolute w-25 h-25 object-contain ml-[3rem] "
                alt="Tooth Icon"
              />
            </div>

            <div className="hidden md:flex items-center gap-6 mx-5 ml-[4rem]">
              <button className="px-5 py-2 bg-[#019c70] text-white rounded-full text-sm font-medium shadow-sm hover:bg-[#017a59] transition-all">
                Why Choose Us
              </button>
              <a
                href="#"
                className="text-[#142c24] hover:text-[#019c70] text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-[#142c24] hover:text-[#019c70] text-sm font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className="text-[#142c24] hover:text-[#019c70] text-sm font-medium"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-3 z-50 bg-white p-2 rounded-full shadow-md mr-[1rem]">
            <button className="w-10 h-10 bg-[#019c70] rounded-full flex items-center justify-center text-white hover:bg-[#017a59]">
              <Search size={20} />
            </button>
            <button className="w-10 h-10 bg-[#019c70] rounded-full flex items-center justify-center text-white hover:bg-[#017a59]">
              <User size={20} />
            </button>
            <button className="px-6 py-2 bg-[#019c70] text-white rounded-full flex items-center gap-2 font-medium hover:bg-[#017a59]">
              Contact Us <Phone size={18} />
            </button>
          </div>

          {/* Mobile*/}
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className=" pb-20 px-4 ">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8 ">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-[#142c24] pt-10">
              World class <br />
              technology <br />
              <span className="text-[#019c70]">neighbourhood</span>
              <br />
              {/* dentist + paragraph side by side */}
              <div className="flex items-start gap-4 mt-2">
                <span className="text-[#019c70]">dentist</span>

                <p className="text-gray-600 text-xs max-w-xs leading-relaxed pt-2 px-2">
                  <span className="font-semibold text-[#142c24] block text-sm mb-1">
                    Your smile is our calling
                  </span>
                  Connect with trusted doctors, book appointments, and manage
                  your health effortlessly. Everything you need for better care,
                  all in one place.
                </p>
              </div>
            </h1>

            <div className="flex gap-4 items-center flex-wrap">
              <button className="bg-[#019c70] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all">
                Book an Appointment <ArrowRight size={20} />
              </button>
              <button className="text-[#019c70] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={20} />
              </button>
            </div>

            {/* statistics */}
            <div className="flex gap-12 pt-4">
              <div>
                <p className="text-4xl font-bold text-[#142c24]">98%</p>
                <p className="text-gray-600 text-base">satisfied patients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#142c24]">1200+</p>
                <p className="text-gray-600 text-base">
                  healthy smiles every year
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative mt-[-7rem]">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero.jpg"
                className="w-full h-full object-cover aspect-square"
                alt="Dentist"
              />

              <div className="hidden lg:flex absolute top-6 left-6 flex-wrap gap-3 max-w-[250px]">
                {["Quality", "Experience", "Family", "Technology"].map(
                  (tag, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 px-4 py-2 rounded-full text-sm font-medium shadow-md backdrop-blur-sm bg-black/20 text-white border border-white/30"
                    >
                      {/* White dot */}
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4" cy="4" r="4" />
                      </svg>

                      {/* Tag text */}
                      {tag}
                    </div>
                  )
                )}
              </div>

            {/* number badges */}
<div className="absolute left-6 top-3/4 space-y-1">
  {["01", "02", "03"].map((n) => (
    <div
      key={n}
      className="bg-black/30 backdrop-blur-md text-white w-6 h-10 rounded-full flex items-center justify-center  shadow-md border border-white/20"
    >
      {n}
    </div>
  ))}
</div>


              {/* tooth + play */}
            </div>

            {/* extra image small */}
            <div className="hidden lg:block absolute bottom-2 right-2 w-60 h-40 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <div className="rounded-full ">
                <img
                  src="/logo/logo1.png"
                  className=" absolute w-10 h-10 object-contain m-2"
                  alt="Tooth Icon"
                />
              </div>

              {/* Play Icon Centered */}
              <div className="absolute inset-0 flex justify-center items-center z-20">
                <div className="bg-white p-3 rounded-full shadow cursor-pointer hover:scale-110 transition">
                  <Play size={20} className="text-[#142c24]" />
                </div>
              </div>

              {/* Bottom Gradient Text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white z-20">
                <p className="text-[#019c70] text-xs font-medium">
                  5 Secrets for a
                </p>
                <p className="text-sm font-bold">Perfect Smile</p>
              </div>

              {/* Image */}
              <img
                src="/images/hero.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
