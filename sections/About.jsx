'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-justify text-secondary-white"
      >
        {/* I am passionate about building{' '}<span className="font-extrabold text-white">robust web applications</span> and integrating {' '}<span className="font-extrabold text-white">artificial intelligence</span> to deliver {' '}<span className="font-extrabold text-white">practical business solutions</span>. With a focus on {' '}<span className="font-extrabold text-white">scalability, performance, and usability</span>, I strive to create digital products that {' '}<span className="font-extrabold text-white">streamline workflows, improve efficiency</span>, and support {' '}<span className="font-extrabold text-white">data-driven decision-making</span>. */}
        Full-stack Developer and AI enthusiast. Graduated in 2025 with a Bachelor’s degree in Computer Science from <a href="https://ulm.ac.id/id/" className="underline font-bold text-white" target="_blank" rel="noreferrer">Lambung Mangkurat University</a>.
        <span className="font-bold text-white"> Over 1 year</span> of experience working as <span className="font-bold text-white"> Web Developer</span> from freelancing and interning. During college, I actively participated in various training programs from
        <a href="https://grow.google/intl/id_id/bangkit/?tab=machine-learning" className="underline font-bold text-white" target="_blank" rel="noreferrer"> Bangkit Academy</a> in 2023 and
        <a href="https://www.dicoding.com/" className="underline font-bold text-white" target="_blank" rel="noreferrer"> Dicoding</a> learning platform to develop my skills as a developer.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
