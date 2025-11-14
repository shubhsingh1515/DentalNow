'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ShowcaseCards() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#0F3D2D] mb-12"
        >
          Why Choose <span className="text-[#1DAB89]">DentalNow</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'The Clinic Trusted With Smiles',
              description: 'Experience the difference of a modern dental practice',
              features: ['Advanced Technology', 'Compassionate Care', 'Convenient Hours'],
            },
            {
              title: 'Personalized Dental Care',
              description: 'Customized treatment plans for your unique needs',
              features: ['Expert Team', 'Latest Equipment', 'Patient Focused'],
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F5] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="grid grid-cols-2">
                <div className="aspect-square bg-[#E0E0E0] flex items-center justify-center">
                  <Image
                    src={`/dental-care-.jpg?height=300&width=300&query=dental-care-${index}`}
                    alt={card.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#0F3D2D] mb-3">{card.title}</h3>
                  <p className="text-[#4A4A4A] text-sm mb-6">{card.description}</p>
                  <div className="space-y-2">
                    {card.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#1DAB89] rounded-full" />
                        <span className="text-sm text-[#4A4A4A]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
