import React from 'react';
import { contactData } from '../../constants/about';

export default function Contact() {
  return (
    <div className="w-full rounded-3xl border border-white/60 bg-white/80 px-8 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm dark:bg-gray-800">
      
      {/* Title */}
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
        Contact
      </h1>

      {/* Content */}
      <div className="flex justify-center">
        <div className="space-y-3 text-[1.05rem] text-gray-600 dark:text-gray-300">
          {contactData.map((contact, idx) => (
            <div key={idx} className="flex items-center gap-3">
              {contact}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}