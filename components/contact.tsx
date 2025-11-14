import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#142c24] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative bg-[#01A878] rounded-3xl overflow-hidden h-96 md:h-full min-h-96 animate-slide-in-left">
            <Image
              src="/images/doctor2.png"
              alt="Medical team"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Form */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple Steps to Your
              <br />
              <span className="text-[#019c70]">Perfect Smile</span>
            </h2>
            <p className="text-gray-300 mb-8">We'll contact you shortly to help solve your issue.</p>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-white text-[#142c24] px-6 py-4 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#019c70]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-white text-[#142c24] px-6 py-4 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#019c70]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <select className="bg-white text-[#142c24] px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#019c70]">
                  <option>Preferred time for contact</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
                <input
                  type="text"
                  placeholder="What's bothering you?"
                  className="bg-white text-[#142c24] px-6 py-4 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#019c70]"
                />
              </div>

              <textarea
                placeholder="Comment or Question (optional)"
                rows={4}
                className="w-full bg-white text-[#142c24] px-6 py-4 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#019c70] resize-none"
              />

              <button
                type="submit"
                className="w-full bg-[#019c70] text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Leave Contact
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
