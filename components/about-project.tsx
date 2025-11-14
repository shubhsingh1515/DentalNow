'use client'

import { motion } from 'framer-motion'

export default function AboutProject() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#1DAB89] rounded-full flex items-center justify-center">
              <span className="text-white font-bold">◆</span>
            </div>
            <h2 className="text-4xl font-bold text-[#0F3D2D]">About Project</h2>
          </div>
          <p className="text-lg text-[#4A4A4A] leading-relaxed max-w-3xl">
            Designed & created an impactful landing page that reflects a modern dental practice focused on patient care and technological innovation. Every element is crafted to communicate trust, professionalism, and accessibility.
          </p>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-[#0F3D2D] mb-6">Tools & Technology</h3>
          <div className="flex flex-wrap gap-4">
            {['UI/UX', 'Figma', 'Typography', 'Animation'].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1DAB89] text-white px-6 py-3 rounded-lg font-semibold"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Color Palette */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#0F3D2D] mb-6">Color Palette</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { color: '#1DAB89', name: 'Primary Green' },
              { color: '#D9D9D9', name: 'Light Gray' },
              { color: '#0F3D2D', name: 'Dark Green' },
              { color: '#000000', name: 'Black' },
            ].map((palette, index) => (
              <motion.div
                key={palette.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-3"
              >
                <div
                  className="w-32 h-32 rounded-full shadow-lg"
                  style={{ backgroundColor: palette.color }}
                />
                <p className="text-[#4A4A4A] font-semibold text-center">{palette.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
