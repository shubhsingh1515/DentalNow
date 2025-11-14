'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProcessSection() {
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
            Simple Steps to Your
            <span className="text-[#1DAB89]"> Perfect Smile</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { step: '01', title: 'Schedule Appointment', desc: 'Book your visit at your convenience' },
              { step: '02', title: 'Consultation', desc: 'Meet our team and discuss your needs' },
              { step: '03', title: 'Treatment Plan', desc: 'Personalized care plan for you' },
              { step: '04', title: 'Beautiful Smile', desc: 'Achieve the smile you deserve' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#1DAB89]">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-[#D9D9D9]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="w-full aspect-square bg-[#1DAB89] bg-opacity-20 rounded-2xl flex items-center justify-center">
              <Image
                src="/process-steps.jpg"
                alt="Process Steps"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
