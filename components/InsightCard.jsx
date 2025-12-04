'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrls, title, /** subtitle * */ techStacks, index, onClick }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4 cursor-pointer"
    onClick={onClick}
  >
    <img
      src={imgUrls[0]}
      alt={title}
      className="md:w-[200px] w-full h-[200px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white mb-4">
          {title}
        </h4>
        <div className="flex gap-1 flex-wrap">
          {(techStacks ?? []).map((tech, i) => (
            <span
              key={i}
              className="text-[20px] px-3 py-2 border border-white rounded-full text-white mr-2 my-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
