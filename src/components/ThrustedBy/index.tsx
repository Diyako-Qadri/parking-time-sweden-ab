'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';

import Partner1 from '../../../public/images/almi.png';
import Partner2 from '../../../public/images/arcticbusiness.png';
import Partner3 from '../../../public/images/fallköping.png';
import Partner4 from '../../../public/images/foundersloft.png';
import Partner5 from '../../../public/images/gobusiness.png';
import Partner6 from '../../../public/images/lansvinnare.png';
import Partner7 from '../../../public/images/ltdbusiness.png';
import Partner8 from '../../../public/images/luleaUni.png';
import Partner9 from '../../../public/images/nassjokommun.png';
import Partner10 from '../../../public/images/ventureCup.png';

const ThrustedBy = () => {
  const images = [
    Partner1,
    Partner2,
    Partner3,
    Partner4,
    Partner5,
    Partner6,
    Partner7,
    Partner8,
    Partner9,
    Partner10,
    Partner1,
    Partner2,
    Partner3,
    Partner4,
    Partner5,
    Partner6,
    Partner7,
    Partner8,
    Partner9,
    Partner10,
  ];

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 33,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className="pb-8 pt-20">
      <div className='flex flex-row w-[100%] justify-center'>
        <div>
          <h2 className="relative line ">
            <span className='bg-white px-4 text-lg font-bold'>Trusted by</span></h2>
        </div>
      </div>
      <div className="h-[216px] w-[100%] pt-4 relative overflow-hidden mask-gradient">
        <motion.div
          ref={ref}
          style={{ x: xTranslation }}
          className="absolute h-[200px] items-center left-0 flex gap-4"
        >
          {[...images, ...images].map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden h-[100px] mx-4 w-[100px] bg-white rounded-xl flex justify-center items-center"
            >
              <Image
                src={item}
                alt="partner"
                fill
                style={{ objectFit: 'contain' }}
                className={
                  index % 10 === 3 ? 'filter invert grayscale brightness-2' : ''
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ThrustedBy;
