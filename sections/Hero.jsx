'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} px-6 sm:px-16`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center mt-20"
    >
      {/* Left side */}
      <div className="text-center md:text-left space-y-6">
        <motion.h1
          variants={textVariant(1.1)}
          className="text-4xl sm:text-6xl font-extrabold text-white"
        >
          Web Developer <br /> & AI Enthusiast
        </motion.h1>
        <motion.p
          variants={slideIn('up', 'tween', 0.3, 1)}
          className="text-lg text-gray-300"
        >
          Passionate about building web applications and integrating AI to drive business success.
        </motion.p>
        <motion.div
          variants={slideIn('up', 'tween', 0.4, 1)}
          className="flex justify-center md:justify-start gap-4"
        >
          <a href="https://www.linkedin.com/in/midfai-yabani/" className="bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-500 transition inline-flex items-center gap-2 px-5 py-2.5" target="_blank" rel="noreferrer">
            Linkedin
          </a>
          <a href="#Insights" className="px-6 py-3 border border-white rounded-full text-white font-semibold hover:bg-gray-800 transition">
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Right side */}
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-3xl" />
        <img
          src="/profilePict.jpg"
          alt="hero_profile"
          className="relative rounded-full w-64 h-64 mx-auto object-cover border-4 border-white shadow-lg"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
