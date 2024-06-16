'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { LuParkingSquare } from 'react-icons/lu';
import { FaRegMap } from 'react-icons/fa6';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type StatisticData = {
  icon: JSX.Element;
  end: number;
  text: string;
  duration: number;
};

type StatisticItemProps = StatisticData;

const StatisticItem = ({
  icon,
  end,
  text,
  duration,
}: StatisticItemProps) => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <div
      ref={ref}
      className="flex flex-row w-[190px] h-[61px] justify-start md:justify-center gap-4 items-center"
    >
      <div className="text-pt-red text-4xl">{icon}</div>
      <div className="leading-6">
        <h6 className="font-bold text-[22px]">
          {inView && (
            <CountUp start={0} end={end} duration={duration} delay={0} separator=""/>
          )}
          +
        </h6>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Statistics = () => {
  const t = useTranslations("Statistics");

  const statisticsData: StatisticData[] = [
    {
      icon: <FiDownload />,
      end: 5000,
      text: t('downloads'),
      duration: 2,
    },
    {
      icon: <LuParkingSquare />,
      end: 4700,
      text: t('parking-sessions'),
      duration: 2,
    },
    {
      icon: <FaRegMap />,
      end: 30,
      text: t('parking-zone'),
      duration: 2.3,
    },
  ];

  return (
    <div className="h-[680px] md:h-[393px] bg-pt-background flex flex-col justify-center items-center">
      <div className="h-[451px] md:h-[160px] flex md:flex-col justify-center w-[80%] bg-white boxShadow rounded-[20px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-around"
        >
          {statisticsData.map((data, index) => (
            <StatisticItem
              key={index}
              icon={data.icon}
              end={data.end}
              text={data.text}
              duration={data.duration}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;
