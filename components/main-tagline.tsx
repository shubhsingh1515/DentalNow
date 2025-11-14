'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MainTagline() {
  return (
    <section className="py-20 px-4 bg-[#0F3D2D]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#1DAB89] text-xl">◆</span>
            <p className="text-[#1DAB89] text-sm font-semibold uppercase tracking-wider">Here, care begins from the very first moment</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Smile with confidence -
            <span className="text-[#1DAB89]"> we'll take care of the rest.</span>
          </h2>
        </motion.div>

        {/* Showcase Images */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="aspect-video bg-[#F5F5F5] flex items-center justify-center">
                <Image
                  src={`/dental-service-.jpg?height=300&width=400&query=dental-service-${index}`}
                  alt={`Service ${index}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#0F3D2D] mb-2">World class technology</h3>
                <p className="text-[#4A4A4A]">Neighborhood dentist service</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
