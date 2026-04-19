'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Are invisible grills really invisible?',
      answer: 'Yes, our grills feature a thin stainless steel mesh that is barely visible from outside while providing excellent security and visibility from inside.',
    },
    {
      question: 'How durable are invisible grills?',
      answer: 'Our grills are built to last 10+ years with proper maintenance. They are weather-resistant and made from premium materials.',
    },
    {
      question: 'Can they be installed on any window?',
      answer: 'Our grills can be customized for most window types. We conduct a site assessment to ensure the best fit for your specific requirements.',
    },
    {
      question: 'What is the installation process like?',
      answer: 'Installation typically takes 1-2 days depending on the number of windows. Our expert team handles everything with minimal disruption.',
    },
    {
      question: 'Do you provide after-sales support?',
      answer: 'Yes, we offer 10-year warranty and lifetime maintenance support including cleaning, repairs, and adjustments.',
    },
    {
      question: 'What is the cost range?',
      answer: 'Pricing depends on window size and customization. We offer competitive rates and flexible payment options. Contact us for a free quote.',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Find answers to common questions about our invisible grills
        </p>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 text-left">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-gray-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

