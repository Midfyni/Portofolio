'use client';

// import { useRef, useEffect, useState } from 'react';
import { useEffect } from 'react';
import useMeasure from 'react-use-measure';
import { animate, motion, useMotionValue } from 'framer-motion';
import styles from '../styles';
import { TitleText } from '../components';
import { certifications, providers } from '../constants';

const CertificationSection = () => {
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const finalPosition = -width / 2 - 56;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 10,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <section className={`${styles.paddings} mx-auto ${styles.flexCenter} flex-col`}>
      <div className={`${styles.innerWidth} mx-auto flex flex-col relative`}>
        <div className="text-center py-3 mb-12">
          <TitleText title="Certifications & Training" />

          <p className="mt-3 text-gray-200 max-w-xl mx-auto text-sm sm:text-base">
            Achievements and credentials reflecting my commitment to lifelong learning
            and professional growth.
          </p>
        </div>
        <div className="overflow-hidden relative mb-10 justify-center items-center">
          <div className="flex gap-28">
            <motion.div className="left-0 flex gap-28" ref={ref} style={{ x: xTranslation }}>
              {[...providers, ...providers].map((provider, i) => (
                <div key={i} className="flex-shrink-0 w-24 h-24">
                  <img
                    src={provider.logo}
                    alt={provider.name}
                    className="w-24 h-24 object-cover rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Certification Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-gray-700 block"
            >
              <h3 className="text-lg font-bold text-white">{cert.title}</h3>
              <p className="text-sm text-gray-400 mt-1">
                {cert.provider} • {cert.date}
              </p>
              <p className="text-purple-400 text-sm mt-3">View Certificate →</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;

