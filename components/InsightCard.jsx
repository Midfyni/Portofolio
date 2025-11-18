'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrls, title, subtitle, index, onClick }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4 cursor-pointer"
    onClick={onClick}
  >
    <img
      src={imgUrls[0]}
      alt={title}
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-2 text-gray-300">
          {subtitle.split(' ').slice(0, 30).join(' ')}
          {subtitle.split(' ').length > 30 && (
            <>
              {' ...'}
              <span className="text-blue-400 cursor-pointer hover:underline">
                See more
              </span>
            </>
          )}
        </p>

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
