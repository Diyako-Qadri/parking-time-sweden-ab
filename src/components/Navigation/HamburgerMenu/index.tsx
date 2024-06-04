'use client';
import { useState } from 'react';
import { motion, MotionConfig, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


type MenuItem = {
  name: string;
  link: string;
};

const menuItem: MenuItem[] = [
  {
    name: 'Why parking Time?',
    link: '/#why-parking-time',
  },
  {
    name: 'About us',
    link: '/about',
  },
  {
    name: 'News',
    link: '/news',
  },
  {
    name: 'FAQ',
    link: '/#faq',
  },
];

const HamburgerMenu = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleClick = () => {
    setActive(prevActive => !prevActive);
    setOpenMenu(prev => !prev);
  };
  const path = usePathname();
  const [openMenu, setOpenMenu] = useState<boolean>(false);


  const handleMenuItemClick = () => {
    setActive(false);
    setOpenMenu(false);
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -80 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <>
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        <motion.button
          initial={false}
          onClick={handleClick}
          className="relative h-12 w-12"
          animate={active ? 'open' : 'closed'}
        >
          <motion.span
            style={{ left: '50%', top: '25%', x: '-50%', y: '-50%' }}
            className="absolute h-1 w-10 bg-white rounded-md"
            variants={{
              open: {
                rotate: ['0deg', '0deg', '45deg'],
                top: ['25%', '50%', '50%'],
              },
              closed: {
                rotate: ['45deg', '0deg', '0deg'],
                top: ['50%', '50%', '25%'],
              },
            }}
          />
          <motion.span
            style={{ left: '50%', top: '50%', x: '-50%', y: '-50%' }}
            className="absolute h-1 w-10 bg-white rounded-md"
            variants={{
              open: {
                rotate: ['0deg', '0deg', '-45deg'],
              },
              closed: {
                rotate: ['-45deg', '0deg', '0deg'],
              },
            }}
          />
          <motion.span
            style={{
              left: 'calc(50% + 10px)',
              bottom: '25%',
              x: '-50%',
              y: '50%',
            }}
            className="absolute h-1 w-5 bg-white rounded-md"
            variants={{
              open: {
                rotate: ['0deg', '0deg', '-45deg'],
                bottom: ['25%', '50%', '50%'],
                left: '50%',
              },
              closed: {
                rotate: ['-45deg', '0deg', '0deg'],
                bottom: ['50%', '50%', '25%'],
                left: 'calc(50% + 10px)',
              },
            }}
          />
        </motion.button>
      </MotionConfig>
      {openMenu && (
        <div className="absolute flex flex-col bg-pt-primary left-0 w-full text-white h-screen">
          <div className="mx-10 my-10">
            {menuItem.map((item, index) => (
              <Link
                className={path === item.link ? 'active' : ''}
                key={index}
                href={item.link}
                onClick={handleMenuItemClick}
              >
                <motion.p
                  className="my-6 text-lg font-medium"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                >
                  {item.name}
                </motion.p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
