"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Send, ArrowRight } from "lucide-react";

const professionals = [
  {
    name: "Rohan Mehta",
    image: "/images/doctor.png",
    specialty: "Cosmetic Dentistry",
    description:
      "With 8+ years of cosmetic dentistry experience, Rohan's warm approach helps patients feel calm and safe.",
  },
  {
    name: "Nisha Bhatia",
    image: "/images/doctor3.png",
    specialty: "Orthodontics",
    description:
      "With 10+ years of orthodontics experience, Nisha's gentle approach helps patients achieve their perfect smile.",
  },
  {
    name: "Aarav Mehta",
    image: "/images/doctor4.png",
    specialty: "Endodontics",
    description:
      "With 9+ years of endodontics experience, Aarav's precise approach ensures painless root canal treatments.",
  },
  {
    name: "Priya Chhabra",
    image: "/images/doctor5.png",
    specialty: "Periodontics",
    description:
      "With 12+ years of periodontics experience, Priya's caring approach helps maintain healthy gums and teeth.",
  },
  {
    name: "Sneha Kapoor",
    image: "/images/doctor.png",
    specialty: "Pediatric Dentistry",
    description:
      "With 8+ years of pediatric dentistry experience, Sneha's warm approach helps children feel calm and safe.",
  },
  {
    name: "Aditya Verma",
    image: "/images/doctor3.png",
    specialty: "Prosthodontics",
    description:
      "With 11+ years of prosthodontics experience, Aditya's expert approach restores beautiful, functional smiles.",
  },
  {
    name: "Kavya Singh",
    image: "/images/doctor5.png",
    specialty: "Oral Surgery",
    description:
      "With 15+ years of oral surgery experience, Kavya's skilled approach ensures safe and comfortable surgical procedures.",
  },
  {
    name: "Arjun Patel",
    image: "/images/doctor4.png",
    specialty: "Implantology",
    description:
      "With 13+ years of implantology experience, Arjun's innovative approach provides lasting dental implant solutions.",
  },

];

const faqs = [
  "How long does the first consultation take?",
  "Can I book an appointment online?",
  "Is dental treatment at your clinic painful?",
  "Do you offer dental care for children?",
  "Teeth cleaning cost?",
  "What types of anesthesia do you use?",
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // Run initially
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardsPerView = isMobile ? 1 : 4;

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return professionals.length - cardsPerView;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= professionals.length - cardsPerView) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <section id="team" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-10">
          <p className="text-gray-600 mb-2 text-sm md:text-base">
            Professional Excellence
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Professionals Who
            <br />
            <span className="text-[#019c70]">Care About Your Smile</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            For us, your smile is more than just a task - it's a mission
          </p>
        </div>

        {/* Desktop: Text Banner */}
        <div className="hidden md:block text-left mb-6">
          <div className="inline-block rounded-full shadow-md backdrop-blur-sm bg-black/20 text-white border border-white/30 px-4 ">
            <div className="flex items-center gap-2 text-white text-sm font-medium">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <circle cx="4" cy="4" r="4" />
              </svg>
              <span>Team</span>
            </div>
          </div>

          <p className="text-gray-700 text-xs font-medium mt-3">
            Trusted professionals with
            <br />
            thousands of happy patients
          </p>
        </div>

        {/* Team Carousel */}
        <div className="relative mb-12 md:mb-20">
          {/* Mobile: Side Cards Preview */}
          {isMobile && (
            <div className="flex items-center justify-center gap-2 mb-4">
              {/* Left Preview */}
              <div className="w-20 flex-shrink-0">
                <div className="rounded-2xl overflow-hidden bg-[#01A878] opacity-60 shadow-md">
                  <div className="aspect-square">
                    <img
                      src={professionals[currentIndex === 0 ? professionals.length - 1 : currentIndex - 1].image}
                      alt={professionals[currentIndex === 0 ? professionals.length - 1 : currentIndex - 1].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5 text-center bg-[#c7f5e1]">
                    <h3 className="font-bold text-[#142c24] text-[8px] leading-tight">
                      {professionals[currentIndex === 0 ? professionals.length - 1 : currentIndex - 1].name}
                    </h3>
                    <p className="text-[7px] text-gray-600 leading-tight">
                      {professionals[currentIndex === 0 ? professionals.length - 1 : currentIndex - 1].specialty}
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Card - Enlarged with hover effect */}
              <div className="flex-1 max-w-[240px]">
                <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl group">
                  {/* TOP GREEN AREA */}
                  <div className="aspect-square relative bg-[#01A878]">
                    <img
                      src={professionals[currentIndex].image}
                      alt={professionals[currentIndex].name}
                      className="w-full h-full object-cover"
                    />

                    {/* Top Left Tooth Icon */}
                    <div className="absolute top-1 -left-1 ">
                      <div className="rounded-full">
                        <div className="rounded-full flex items-center justify-center">
                <img
                  src="/logo/logo1.png"
                  className="w-15 h-15 object-contain"
                />
              </div>
                      </div>
                    </div>

                    {/* Top Right White Arrow */}
                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
                      <Send size={18} className="text-[#01A878]" />
                    </div>

                    {/* Overlay Content - Always visible on mobile center card */}
                    <div className="absolute bottom-0 left-0 right-0 opacity-100 translate-y-0 p-3">
                      <div className="bg-white/25 backdrop-blur-sm p-3 rounded-2xl w-full shadow-xl border border-white/30">
                        <p className="text-white font-bold text-xs mb-1">
                          {professionals[currentIndex].specialty}
                        </p>
                        <p className=" text-[10px] leading-snug">
                          {professionals[currentIndex].description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Name Area */}
                  <div className="p-4 text-center bg-[#c7f5e1]">
                    <h3 className="font-bold text-[#142c24] text-base">
                      {professionals[currentIndex].name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {professionals[currentIndex].specialty}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Preview */}
              <div className="w-20 flex-shrink-0">
                <div className="rounded-2xl overflow-hidden bg-[#01A878] opacity-60 shadow-md">
                  <div className="aspect-square">
                    <img
                      src={professionals[currentIndex === professionals.length - 1 ? 0 : currentIndex + 1].image}
                      alt={professionals[currentIndex === professionals.length - 1 ? 0 : currentIndex + 1].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5 text-center bg-[#c7f5e1]">
                    <h3 className="font-bold text-[#142c24] text-[8px] leading-tight">
                      {professionals[currentIndex === professionals.length - 1 ? 0 : currentIndex + 1].name}
                    </h3>
                    <p className="text-[7px] text-gray-600 leading-tight">
                      {professionals[currentIndex === professionals.length - 1 ? 0 : currentIndex + 1].specialty}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Desktop Carousel */}
          <div className="hidden md:block">
            {/* Carousel Container with arrows on top right */}
            <div className="relative overflow-visible pt-8">
              {/* Navigation Arrows - Positioned on top right */}
              <div className="absolute -top-6 right-0 z-10 flex gap-3">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-[#019c70] text-white hover:bg-[#017d5a] hover:scale-110 transition-all shadow-lg"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-[#019c70] text-white hover:bg-[#017d5a] hover:scale-110 transition-all shadow-lg"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div
                className="flex gap-6 transition-transform duration-500 ease-out overflow-visible"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / cardsPerView)
                  }%)`,
                }}
              >
                {/* Team Cards */}
                {professionals.map((prof, i) => (
                  <div
                    key={prof.name}
                    className="flex-shrink-0 relative rounded-3xl overflow-hidden bg-white group transition-all duration-500 hover:scale-118 hover:shadow-2xl hover:z-20 origin-bottom"
                    style={{
                      width: `calc(${100 / cardsPerView}% - ${
                        (6 * (cardsPerView - 1)) / cardsPerView
                      }rem)`,
                    }}
                  >
                    {/* TOP GREEN AREA */}
                    <div className="aspect-square relative bg-[#01A878]">
                      <img
                        src={prof.image}
                        alt={prof.name}
                        className="w-full h-full object-cover transition-all duration-500"
                      />

                      {/* Top Left Tooth Icon */}
                      <div className="absolute top-1 -left-1 ">
                        {/* <div className="rounded-full">
                          <div className="w-18 h-18 bg-white/20 rounded-full"></div>
                        </div> */}
                        <div className="rounded-full flex items-center justify-center">
                <img
                  src="/logo/logo1.png"
                  className="w-15 h-15 object-contain"
                />
              </div>
                      </div>

                      {/* Top Right White Arrow */}
                      <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow transition-all duration-300 group-hover:scale-110">
                        <Send size={18} className="text-[#01A878]" />
                      </div>

                      {/* Hover Overlay Content */}
                      <div className="absolute bottom-0 left-0 right-0 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all p-3">
                        <div className="bg-white/25 backdrop-blur-sm p-2 rounded-2xl w-full shadow-xl border border-white/30">
                          <p className="text-white font-bold text-[11px] mb-1">
                            {prof.specialty}
                          </p>
                          <p className=" text-[9px]">
                            {prof.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Name Area */}
                    <div className="p-4 text-center bg-[#c7f5e1] transition-all duration-500">
                      <h3 className="font-bold text-[#142c24] text-base">
                        {prof.name}
                      </h3>
                      <p className="text-sm text-gray-600">{prof.specialty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          {isMobile && (
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full transition-all bg-[#019c70] text-white"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full transition-all bg-[#019c70] text-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div id="faq">
          <div className="flex items-center justify-center text-white mx-auto">
            <div className="rounded-full">
              <div className="w-16 h-16 md:w-20 md:h-20  rounded-full m-2">
                <img
                  src="/logo/logo1.png"
                  className=" absolute w-15 h-15 md:w-20 md:h-20 object-contain m-4 md:m-5"
                  alt="Tooth Icon"
                />
              </div>
            </div>
          </div>
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Most Frequently Asked{" "}
              <span className="text-[#019c70]">Questions</span>
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              We've gathered answers to the questions we get asked most often
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {faqs.map((faq, index) => (
              <button
                key={index}
                className="border-2 border-[#019c70] rounded-full px-5 md:px-6 py-3 md:py-4 text-left hover:bg-[#019c70] hover:text-white transition-all duration-300 flex items-center justify-between group"
              >
                <span className="font-semibold text-[#142c24] group-hover:text-white text-sm md:text-base">
                  {faq}
                </span>
                <ArrowRight
                  className="text-[#019c70] group-hover:text-white group-hover:translate-x-2 transition-all flex-shrink-0 ml-2"
                  size={20}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}