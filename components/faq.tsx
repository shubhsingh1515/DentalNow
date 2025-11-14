'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer comprehensive dental services including cleanings, root canals, cosmetic dentistry, and more.',
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, we accept most major insurance plans. Please contact us for details.',
    },
    {
      question: 'How often should I visit?',
      answer: 'Most patients should visit every 6 months for regular cleanings and checkups.',
    },
    {
      question: 'What if I\'m anxious about dental work?',
      answer: 'We understand dental anxiety and offer various options to make you comfortable during treatment.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-[#0F3D2D] mb-4">
            Most Frequently Asked <span className="text-[#1DAB89]">Questions</span>
          </h2>
          <p className="text-[#4A4A4A] text-lg">Find answers to common questions about our dental services</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-2 border-[#E0E0E0] rounded-lg overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex justify-between items-center bg-white hover:bg-[#F5F5F5] transition"
              >
                <h3 className="text-lg font-semibold text-[#0F3D2D] text-left">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <div className="w-6 h-6 border-2 border-[#1DAB89] rounded-full flex items-center justify-center">
                    <span className="text-[#1DAB89]">+</span>
                  </div>
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-[#F5F5F5] border-t-2 border-[#E0E0E0]">
                      <p className="text-[#4A4A4A]">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
