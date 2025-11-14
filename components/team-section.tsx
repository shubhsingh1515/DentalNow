'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TeamSection() {
  return (
    <section id="team" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-[#0F3D2D] mb-4">
            Professionals <span className="text-[#1DAB89]">Who Care</span>
          </h2>
          <p className="text-[#4A4A4A] text-lg">Our team of experienced dental professionals dedicated to your smile</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-6 w-32 h-32 rounded-full overflow-hidden bg-[#F5F5F5] flex items-center justify-center"
              >
                <Image
                  src={`/dentist-professional-.jpg?height=200&width=200&query=dentist-professional-${index}`}
                  alt={`Team Member ${index}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-[#0F3D2D] mb-2">Dr. Professional {index}</h3>
              <p className="text-[#1DAB89] font-semibold mb-3">Dental Specialist</p>
              <p className="text-[#4A4A4A]">Dedicated to providing the best dental care experience</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
