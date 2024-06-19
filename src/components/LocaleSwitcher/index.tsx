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
import Germany from '../../../public/images/germany.png';
import Sweden1 from '../../../public/images/sweden1.png';
import Denmark1 from '../../../public/images/denmark1.png';
import Norway1 from '../../../public/images/norway1.png';
import Finland1 from '../../../public/images/finland1.png';
import Germany1 from '../../../public/images/germany1.png';
import England1 from '../../../public/images/unoitedKingdom.png';

const defaultLanguage = 'sv';

const locales = [
  { code: 'sv', name: 'Swedish', img: Sweden1, flag: Sweden },
  { code: 'da', name: 'Danish', img: Denmark1, flag: Denmark },
  { code: 'no', name: 'Norwegian', img: Norway1, flag: Norway },
  { code: 'fi', name: 'Finnish', img: Finland1, flag: Finland },
  { code: 'en', name: 'English', img: England1, flag: English },
  { code: 'de', name: 'German', img: Germany1, flag: Germany },
];

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
    if (locales.some(locale => locale.code === localeFromUrl)) {
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="rounded bg-transparent text-white px-4 py-1 flex items-center"
      >
        <Image
          src={locales.find(locale => locale.code === selectedLocale)?.flag || Sweden}
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
            className="md:absolute rounded mt-7 z-20 flex flex-wrap ml-6 gap-5 md:gap-0 items-center w-[85vw] text-white md:bg-pt-green-transparent md:w-[146px] md:right-[-58px]"
          >
            {locales.map(locale => (
              <motion.li
                key={locale.code}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                onClick={() => onSelectChange(locale.code)}
                className="flex items-center p-2 cursor-pointer w-1/4 rounded border-white-100 border-[1px] md:border-0  md:rounded-none hover:bg-pt-green hover:border-b-[.5px] border-current md:w-1/2"
              >
                <Image
                  src={locale.img}
                  alt={locale.name}
                  width={20}
                  height={20}
                  className="mr-2"
                />
                {locale.code.toUpperCase()}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LocaleSwitcher;