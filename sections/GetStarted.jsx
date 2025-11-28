'use client';

// import { useRef, useEffect, useState } from 'react';
import { useEffect } from 'react';
import useMeasure from 'react-use-measure';
import { animate, motion, useMotionValue } from 'framer-motion';
import styles from '../styles';
import { TitleText } from '../components';

const providers = [
  { name: 'Bangkit', logo: '/bangkit.jpg' },
  { name: 'Dicoding', logo: '/dicoding.jpg' },
  { name: 'Google Cloud', logo: '/GCloud.jpg' },
  { name: 'IDCamp', logo: '/idcamp.png' },
  { name: 'Coursera', logo: '/coursera.png' },
  { name: 'Deeplearning.ai', logo: '/deeplearning.png' },
];

const certifications = [
  {
    title: 'Machine Learning Specialization',
    provider: 'Bangkit Academy',
    date: '2023',
    link: '/bangkit.pdf',
  },
  {
    title: 'Deep Learning Specialization',
    provider: 'Coursera (Andrew Ng)',
    date: '2023',
    link: 'https://www.coursera.org/user/f8a6e6acc5b2459cde44431e50cc1e11',
  },
  {
    title: 'Cloud and Generative AI on Amazon Web Server (AWS)',
    provider: 'Dicoding',
    date: '2024',
    link: 'https://www.dicoding.com/certificates/QLZ9VED8EX5D',
  },
  {
    title: 'Architecting on Amazon Web server (AWS)',
    provider: 'Dicoding',
    date: '2025',
    link: 'https://www.dicoding.com/certificates/JLX15V925Z72',
  },
  {
    title: 'Backend Developer Expert dengan Javascript',
    provider: 'Dicoding',
    date: '2025',
    link: 'https://www.dicoding.com/certificates/MRZMN2L7RPYQ',
  },
  {
    title: 'Google Cloud Associate Engineer',
    provider: 'Google Cloud',
    date: '2025',
    link: 'https://www.cloudskillsboost.google/public_profiles/07a76328-e865-46bb-8cbc-326513439157',
  },
  {
    title: 'Backend Developer',
    provider: 'IDCamp',
    date: '2025',
    link: '/IDcamp_Certification.pdf',
  },
  {
    title: 'TOEFL (527)',
    provider: 'ULM',
    date: '2025',
    link: '/Midfai Yabani_Toefl.pdf',
  },
];

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

