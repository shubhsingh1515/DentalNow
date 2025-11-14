"use client"

import { use, useState } from 'react'
import { ChevronLeft, ChevronRight, Send, ArrowRight } from 'lucide-react'

const professionals = [
  { 
    name: "Rohan Mehta", 
    image:"/images/doctor.png",
    specialty: "Cosmetic Dentistry",
    description: "With 8+ years of cosmetic dentistry experience, Rohan's warm approach helps patients feel calm and safe."
  },
  { 
    name: "Nisha Bhatia", 
    image:"/images/doctor.png",
    specialty: "Orthodontics",
    description: "With 10+ years of orthodontics experience, Nisha's gentle approach helps patients achieve their perfect smile."
  },
  { 
    name: "Aarav Mehta", 
    image:"/images/doctor.png",
    specialty: "Endodontics",
    description: "With 9+ years of endodontics experience, Aarav's precise approach ensures painless root canal treatments."
  },
  { 
    name: "Priya Chhabra", 
    image:"/images/doctor.png",
    specialty: "Periodontics",
    description: "With 12+ years of periodontics experience, Priya's caring approach helps maintain healthy gums and teeth."
  },
  { 
    name: "Sneha Kapoor", 
    image:"/images/doctor.png",
    specialty: "Pediatric Dentistry",
    description: "With 8+ years of pediatric dentistry experience, Sneha's warm approach helps children feel calm and safe."
  },
  { 
    name: "Aditya Verma", 
    image:"/images/doctor.png",
    specialty: "Prosthodontics",
    description: "With 11+ years of prosthodontics experience, Aditya's expert approach restores beautiful, functional smiles."
  },
  { 
    name: "Kavya Singh",
    image:"/images/doctor.png", 
    specialty: "Oral Surgery",
    description: "With 15+ years of oral surgery experience, Kavya's skilled approach ensures safe and comfortable surgical procedures."
  },
  { 
    name: "Arjun Patel", 
    image:"/images/doctor.png",
    specialty: "Implantology",
    description: "With 13+ years of implantology experience, Arjun's innovative approach provides lasting dental implant solutions."
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
  const cardsPerView = 4; // Number of cards visible at once

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      Math.min(professionals.length - cardsPerView, prev + 1)
    );
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < professionals.length - cardsPerView;

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-2">Professional Excellence</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professionals Who
            <br />
            <span className="text-[#019c70]">Care About Your Smile</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For us, your smile is more than just a task - it's a mission
          </p>
        </div>

        {/* Team Carousel */}
        <div className="flex items-center gap-6 mb-20">
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            disabled={!canGoPrev}
            className={`flex-shrink-0 p-3 rounded-full transition-all ${
              canGoPrev 
                ? 'text-[#019c70] hover:bg-[#019c70] hover:text-white hover:scale-110' 
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={32} />
          </button>

          {/* Carousel Container */}
          <div className="flex-1 overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-out "
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
              }}
            >
              {/* Team Cards */}
              {professionals.map((prof, i) => (
                <div
                  key={prof.name}
                  className="flex-shrink-0 relative rounded-3xl overflow-hidden  bg-white group transition-all duration-500 hover:scale-110 "
                  style={{ width: `calc(${100 / cardsPerView}% - ${(6 * (cardsPerView - 1)) / cardsPerView}rem)` }}
                >
                  {/* TOP GREEN AREA */}
                  <div className="aspect-square relative bg-[#01A878]">
                        <img
                          src={prof.image}
                      alt={prof.name}
                      className="w-full h-full object-cover transition-all duration-500"
                    />

                    {/* Top Left Tooth Icon */}
                    <div className="absolute top-1 -left-1 opacity-30">
                      <div className="rounded-full ">
                <img
                  src="/logo/logo1.png"
                  className="  w-18 h-18"
                  alt="Tooth Icon"
                />
              </div>
                    </div>

                    {/* Top Right White Arrow */}
                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow transition-all duration-300 group-hover:scale-110">
                      <Send size={18} className="text-[#01A878]" />
                    </div>

                    {/* Hover Overlay Content */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-4">
                      <div className="bg-white/25 backdrop-blur-sm p-5 rounded-2xl w-full shadow-xl border border-white/30">
                        <p className="text-white font-bold text-xs mb-1">{prof.specialty}</p>
                        <p className="text-white text-xs leading-relaxed">
                          {prof.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Name Area */}
                  <div className="p-4 text-center  bg-[#c7f5e1] transition-all duration-500">
                    <h3 className="font-bold text-[#142c24] text-base">{prof.name}</h3>
                    <p className="text-sm text-gray-600">{prof.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            disabled={!canGoNext}
            className={`flex-shrink-0 p-3 rounded-full transition-all ${
              canGoNext 
                ? 'text-[#019c70] hover:bg-[#019c70] hover:text-white hover:scale-110' 
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="  flex items-center justify-center text-white mx-auto "><div className="rounded-full ">
                <img
                  src="/logo/logo1.png"
                  className="  w-20 h-20 object-contain m-2"
                  alt="Tooth Icon"
                />
              </div></div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              Most Frequently Asked <span className="text-[#019c70]">Questions</span>
            </h3>
            <p className="text-gray-600">
              We've gathered answers to the questions we get asked most often
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <button
                key={index}
                className="border-2 border-[#019c70] rounded-full px-6 py-4 text-left hover:bg-[#019c70] hover:text-white transition-all duration-300 flex items-center justify-between group"
              >
                <span className="font-semibold text-[#142c24] group-hover:text-white">{faq}</span>
                <ArrowRight className="text-[#019c70] group-hover:text-white group-hover:translate-x-2 transition-all" size={20} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}