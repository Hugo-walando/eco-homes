'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function Faq() {
  // Framer Motion animation fade in up
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is EcoHomes?',
      answer:
        'EcoHomes is a company specializing in building eco-friendly homes.',
    },
    {
      question: 'What is the average size of an EcoHouse?',
      answer:
        'The average size of an EcoHouse can vary depending on the design and specific needs of the client. Typically, they range from 500 to 2,000 square feet, but we offer flexibility in sizing based on your requirements.',
    },
    {
      question: 'How long does it take to build an EcoHouse?',
      answer:
        'The construction time for an EcoHouse typically ranges from 4 to 6 months, depending on the complexity of the design and the availability of materials. We prioritize efficient building processes without compromising on quality.',
    },
    {
      question: 'How are EcoHouses eco-friendly?',
      answer:
        'EcoHouses are designed to minimize environmental impact by using sustainable materials, energy-efficient technologies, and renewable energy sources like solar panels. We also focus on water conservation and reducing carbon footprints in all our builds.',
    },
    {
      question: 'Can I customize the design of my EcoHouse?',
      answer:
        'Yes, we offer full customization of your EcoHouse. From the layout and materials to the interior finishes and smart home solutions, you can personalize the design to suit your style and needs.',
    },
    {
      question: 'Do EcoHouses meet local building codes and regulations?',
      answer:
        'Absolutely. All EcoHouses are designed and constructed to comply with local building codes and regulations, ensuring they meet the highest standards for safety, durability, and sustainability.',
    },
    {
      question: 'Can an EcoHouse be used as a permanent residence?',
      answer:
        'Yes, EcoHouses are designed to be used as permanent residences. They offer the durability, comfort, and energy efficiency needed for long-term living, while being adaptable to different climates and environments.',
    },
    {
      question: 'How can I get a consultation?',
      answer:
        'You can contact us through the contact page for a free consultation.',
    },
  ];
  return (
    <>
      <div className='h-[25dvh] w-full bg-col_white border-b-2 border-col_gray_dark'></div>
      <section className='h-auto w-full flex bg-col_white flex-col items-center z-0 px-4 md:px-12 lg:px-20 pb-12'>
        <div className='w-full py-6  flex flex-col justify-between md:pt-12 md:pb-12 lg:pt-20 lg:pb-16'>
          <motion.h2
            initial='hidden'
            whileInView='animate'
            variants={fadeInUpVariants}
            viewport={{ once: true }}
            className={` text-col_gray_dark font-medium text-3xl md:text-4xl xl:text-5xl pt-5 max-w-[80%] mb-12`}
          >
            Everything you need to know
          </motion.h2>
          <motion.div
            initial='hidden'
            whileInView='animate'
            variants={fadeInUpVariants}
            viewport={{ once: true }}
            className=''
          >
            {faqs.map((faq, index) => (
              <div key={index} className='border-b border-gray-300 py-4'>
                {/* Question */}
                <button
                  onClick={() => toggleQuestion(index)}
                  className='w-full text-left flex justify-between items-center'
                >
                  <h2
                    className={`text-xl ${
                      openIndex === index
                        ? 'text-green-500'
                        : ' text-col_gray_dark'
                    } `}
                  >
                    {faq.question}
                  </h2>
                  <span>
                    {openIndex === index ? (
                      <Minus className='w-6 h-6 text-gray-600' />
                    ) : (
                      <Plus className='w-6 h-6 text-gray-600' />
                    )}
                  </span>
                </button>

                {/* Réponse avec animation */}
                <motion.div
                  initial={false}
                  animate={{ height: openIndex === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className='overflow-hidden'
                >
                  <p className='mt-2 text-col_gray_dark'>{faq.answer}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
