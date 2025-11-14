'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TrustedSection() {
  return (
    <section className="py-20 px-4 bg-[#0F3D2D]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            The Clinic
            <br />
            <span className="text-[#1DAB89]">Trusted With Smiles</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="aspect-video bg-[#F5F5F5] flex items-center justify-center">
                <Image
                  src={`/patient-testimonial-.jpg?height=250&width=250&query=patient-testimonial-${index}`}
                  alt={`Testimonial ${index}`}
                  width={250}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#1DAB89]">★</span>
                  ))}
                </div>
                <p className="text-[#4A4A4A] text-sm mb-4">
                  "Exceptional dental care with a personal touch. Dr. and team made me feel at home."
                </p>
                <p className="font-semibold text-[#0F3D2D]">Sarah Johnson</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
