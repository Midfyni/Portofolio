'use client';

import { motion } from 'framer-motion';
import { TitleText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const Contact = () => (
  <section className={`${styles.paddings} relative z-1`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <div
        className="bg-[#08090a] shadow-[0px_0px_0px_2px_#ffffff] rounded-md px-2.5 py-1 text-[30px] mb-2 text-white"
        style={{
          opacity: 1,
          filter: 'blur(0px)',
          transform: 'none',
        }}
      >
        Contact
      </div>
      <TitleText title={<>Get in Touch</>} textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        {/* I am passionate about building{' '}<span className="font-extrabold text-white">robust web applications</span> and integrating {' '}<span className="font-extrabold text-white">artificial intelligence</span> to deliver {' '}<span className="font-extrabold text-white">practical business solutions</span>. With a focus on {' '}<span className="font-extrabold text-white">scalability, performance, and usability</span>, I strive to create digital products that {' '}<span className="font-extrabold text-white">streamline workflows, improve efficiency</span>, and support {' '}<span className="font-extrabold text-white">data-driven decision-making</span>. */}
        Have a question or just want to connect? Feel free to <a href="https://mail.google.com/mail/?view=cm&fs=1&to=midfaiybni@gmail.com" className="underline font-bold text-white" target="_blank" rel="noreferrer">send me an email</a>—I'll get back to you shortly..
      </motion.p>
    </motion.div>
  </section>
);

export default Contact;
