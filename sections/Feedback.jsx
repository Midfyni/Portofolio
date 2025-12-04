'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText } from '../components';

const experiences = [
  {
    role: 'Backend Developer',
    company: 'Spectani',
    duration: 'Februari 2024 – Oktober 2024',
    type: 'Freelance',
    description:
      'Building a smart farming system web application for the control and monitoring of IoT devices with a focus on the role of establishing a communication channel between the web and IoT devices.',
  },
  {
    role: ' Frontend Web Developer',
    company: 'Bincau Muara',
    duration: 'Jun 2024 – Jul 2024',
    type: 'Freelance',
    description:
      'Developing village profile responsive web applications with React, Tailwind CSS, and API integrations.',
  },
  {
    role: 'Backend Developer',
    company: 'PLN UPDL Banjarbaru',
    duration: 'Sept 2024 – Feb 2025',
    type: 'Intern',
    description:
      'Development of a financial management and automation system for a company named pettycash that uses Optical Character Recognition (OCR) technology and Business workflow automation using appscript to optimize company documentation and data management processes.',
  },
  {
    role: 'Fullstack Web Developer',
    company: 'Lambung Mangkurat university',
    duration: 'Oct 2024 – Feb 2025',
    type: 'Freelance',
    description:
      'Building a web application for registration and administration of internship for statistics major students.',
  },
];

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <TitleText
      title={<>Working Experience</>}
      textStyles="text-center py-3 mb-12"
    />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col relative`}
    >
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 to-blue-500 -translate-x-1/2" />

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 'tween', 0.2, 1)}
          className={`relative w-full md:w-1/2 p-6 my-6 ${
            index % 2 === 0 ? 'md:ml-auto text-left' : 'md:mr-auto text-left'
          }`}
        >
          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {exp.role}
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  exp.type === 'Full-time'
                    ? 'bg-green-600 text-white'
                    : exp.type === 'Freelance'
                      ? 'bg-blue-600 text-white'
                      : 'bg-yellow-500 text-black'
                }`}
              >
                {exp.type}
              </span>
            </div>

            <p className="text-sm sm:text-base text-gray-400 mb-2">
              {exp.company} • {exp.duration}
            </p>
            <p className="text-gray-300">{exp.description}</p>
          </div>

          {/* Timeline Dot */}
          <div className="absolute top-8 left-1/2 w-5 h-5 bg-purple-500 rounded-full border-4 border-black -translate-x-1/2" />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Feedback;
