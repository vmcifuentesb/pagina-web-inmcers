import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '../../data/faq';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto w-full">
      {faqData.slice(0, 8).map((item, idx) => (
        <div
          key={idx}
          className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 shadow-sm"
        >
          <button
            onClick={() => toggleAccordion(idx)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer transition-colors hover:bg-slate-50/50 focus:outline-none"
            aria-expanded={openIndex === idx}
          >
            <span className="font-extrabold text-sm sm:text-base text-slate-800">{item.pregunta}</span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-slate-500 transition-transform duration-300 ${
                openIndex === idx ? 'rotate-180 text-primary' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
            }`}
          >
            <p className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
              {item.respuesta}
            </p>
          </div>
        </div>
      ))}
      <div className="text-center pt-8">
        <div className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 py-2 px-4 rounded-full text-xs text-slate-500">
          <HelpCircle className="w-4 h-4 text-primary shrink-0" />
          <span>¿Tiene otra pregunta? PBX Asesoría Gratuita: <strong>2218-2800</strong></span>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
