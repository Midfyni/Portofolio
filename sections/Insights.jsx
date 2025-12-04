'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles';
import { projects } from '../constants';
import { staggerContainer } from '../utils/motion';
import { TitleText } from '../components';
import InsightCard from '../components/InsightCard';

const Insights = () => {
  const [selected, setSelected] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="Insights" className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText title={<>Selected Projects</>} textStyles="text-center" />
        <p className="mt-3 text-gray-200 max-w-xl mx-auto text-sm sm:text-base text-center">
          Here are some projects to get to know me better.
        </p>

        <div className="mt-[50px] flex flex-col gap-[30px]">
          {projects.map((item, index) => (
            <InsightCard
              key={index}
              {...item}
              index={index + 1}
              onClick={() => {
                setSelected(item);
                setActiveImage(0);
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="bg-[#1a1a1a] px-8 pt-8 rounded-2xl w-full max-w-4xl shadow-2xl relative overflow-y-auto max-h-[90vh]"
            >
              {/* Sticky Close button (inside modal) */}
              <div className="sticky top-0 z-20 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="text-white hover:text-gray-400 text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex flex-col items-center m-4">
                {/* Main Image */}
                {selected.imgUrls && selected.imgUrls.length > 0 && (
                  <motion.img
                    key={selected.imgUrls[activeImage]}
                    src={selected.imgUrls[activeImage]}
                    alt={selected.title}
                    className="max-w-[1000px] w-full max-h-[500px] object-contain rounded-xl mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Thumbnails */}
                {selected.imgUrls && selected.imgUrls.length > 1 && (
                  <div className="flex gap-4 mb-6 overflow-x-auto justify-center w-full">
                    {selected.imgUrls.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`thumb-${i}`}
                        className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 ${activeImage === i ? 'border-purple-500 scale-105' : 'border-transparent opacity-70 hover:opacity-100'} transition-all duration-300`}
                        onClick={() => setActiveImage(i)}
                      />
                    ))}
                  </div>
                )}

                {/* Text Content */}
                <div className="text-center px-4">
                  <h3 className="text-3xl font-bold text-white">{selected.title}</h3>
                  <p className="mt-4 text-gray-300 text-lg leading-relaxed text-left whitespace-pre-line">
                    {selected.subtitle}
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-700 py-4 mt-4 flex justify-center gap-4 sticky bottom-0 z-20 bg-[#1a1a1a]">
                {/* GitHub Button */}
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${selected.github === '' ? 'hidden' : ''} inline-flex items-center gap-2 px-5 py-2.5 border border-gray-600 text-white rounded-full hover:bg-gray-800 transition-colors duration-300`}
                >
                  <img src="/github.png" alt="GitHub" className="w-5 h-5" />
                  <span>GitHub</span>
                </a>

                {/* Website Button */}
                <a
                  href={selected.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${selected.website === '' ? 'hidden' : ''} inline-flex items-center gap-2 px-5 py-2.5 border border-purple-500 text-white rounded-full hover:bg-purple-600 hover:border-transparent transition-colors duration-300`}
                >
                  🌐 <span>Visit Website</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Insights;
