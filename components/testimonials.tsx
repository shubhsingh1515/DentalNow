"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            Most Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We've gathered answers to the questions we get asked most often
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "How long does the first consultation take?",
            "Can I book an appointment online?",
            "Is dental treatment at your clinic painful?",
            "Do you offer dental care for children?",
            "Teeth cleaning cost?",
            "What types of anesthesia do you use?",
          ].map((question, i) => (
            <motion.div
              key={question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="border-2 border-primary rounded-full px-8 py-6 flex items-center justify-between group hover:bg-primary hover:text-white transition-all cursor-pointer"
            >
              <p className="font-medium">{question}</p>
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors flex-shrink-0 ml-4">
                →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
