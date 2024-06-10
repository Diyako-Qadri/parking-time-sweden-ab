'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState, useTransition } from 'react';
import Image from 'next/image';
import Sweden from '../../../public/images/sweden.png';
import English from '../../../public/images/circle.png';
import Denmark from '../../../public/images/denmark.png';
import Norway from '../../../public/images/norway.png';
import Finland from '../../../public/images/finland.png';
import Sweden1 from '../../../public/images/sweden1.png';
import Denmark1 from '../../../public/images/denmark1.png';
import Norway1 from '../../../public/images/norway1.png';
import Finland1 from '../../../public/images/finland1.png';
import England1 from '../../../public/images/unoitedKingdom.png';

const defaultLanguage = 'sv'; 

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState(defaultLanguage);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dropdownRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const localeFromUrl = pathname.split('/')[1];
    if (localeFromUrl && ['sv', 'da', 'no', 'fi', 'en'].includes(localeFromUrl)) {
      setSelectedLocale(localeFromUrl);
    } else {
      setSelectedLocale(defaultLanguage); 
    }
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const onSelectChange = (nextLocale: string) => {
    setSelectedLocale(nextLocale);

    
    const newPathname = `/${nextLocale}${pathname.replace(/^\/[a-z]{2}/, '')}`;
    const newSearchParams = searchParams.toString();
    const newUrl = `${newPathname}${newSearchParams ? '?' + newSearchParams : ''}`;

    startTransition(() => {
      router.replace(newUrl);
    });

    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  const getFlagImage = (locale: string) => {
    if (locale === 'sv') {
      return Sweden;
    } else if (locale === 'da') {
      return Denmark;
    } else if (locale === 'no') {
      return Norway;
    } else if (locale === 'fi') {
      return Finland;
    } else if (locale === 'en') {
      return English;
    } else {
      return Sweden; 
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="rounded bg-transparent text-white px-4 py-1 flex items-center"
      >
        <Image
          src={getFlagImage(selectedLocale)}
          alt={selectedLocale}
          width={25}
          height={25}
        />
      </button>
      <AnimatePresence>
        {dropdownOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="absolute rounded mt-7 z-20 items-center text-white md:bg-pt-green-transparent w-[73px]"
          >
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              onClick={() => onSelectChange('sv')}
              className="flex items-center p-2 cursor-pointer hover:bg-pt-green hover:border-b-[.5px] border-current"
            >
              <Image
                src={Sweden1}
                alt="Swedish"
                width={20}
                height={20}
                className="mr-2"
              />{' '}
              Sv
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              onClick={() => onSelectChange('da')}
              className="flex items-center p-2 cursor-pointer hover:bg-pt-green hover:border-b-[.5px] border-current"
            >
              <Image
                src={Denmark1}
                alt="Danish"
                width={20}
                height={20}
                className="mr-2"
              />{' '}
              Da
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              onClick={() => onSelectChange('no')}
              className="flex items-center p-2 cursor-pointer hover:bg-pt-green hover:border-b-[.5px] border-current"
            >
              <Image
                src={Norway1}
                alt="Norwegian"
                width={20}
                height={20}
                className="mr-2"
              />{' '}
              No
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              onClick={() => onSelectChange('fi')}
              className="flex items-center p-2 cursor-pointer hover:bg-pt-green hover:border-b-[.5px] border-current"
            >
              <Image
                src={Finland1}
                alt="Finnish"
                width={20}
                height={20}
                className="mr-2"
              />{' '}
              Fi
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              onClick={() => onSelectChange('en')}
              className="flex items-center p-2 cursor-pointer hover:bg-pt-green hover:border-b-[.5px] border-current"
            >
              <Image
                src={England1}
                alt="English"
                width={20}
                height={20}
                className="mr-2"
              />{' '}
              En
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LocaleSwitcher;
