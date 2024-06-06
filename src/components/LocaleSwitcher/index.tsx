'use client';

import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import Image from 'next/image';
import Sweden from "../../../public/images/sweden.png";
import English from "../../../public/images/circle.png";
import Denmark from "../../../public/images/denmark.png";
import Norway from "../../../public/images/norway.png";
import Finland from "../../../public/images/finland.png";
import Sweden1 from "../../../public/images/sweden1.png";
import Denmark1 from "../../../public/images/denmark1.png";
import Norway1 from "../../../public/images/norway1.png";
import Finland1 from "../../../public/images/finland1.png";
import England1 from "../../../public/images/unoitedKingdom.png";

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState('sv'); // default to Swedish
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Extract locale from the URL and set the initial locale
    const localeFromUrl = pathname.split('/')[1];
    if (localeFromUrl && ['sv', 'da', 'no', 'fi', 'en'].includes(localeFromUrl)) {
      setSelectedLocale(localeFromUrl);
    }
  }, [pathname]);

  const onSelectChange = (nextLocale: string) => {
    // Update the selected locale
    setSelectedLocale(nextLocale);

    // Construct the new URL with the next locale
    const newPathname = `/${nextLocale}${pathname.replace(/^\/[a-z]{2}/, '')}`;
    const newSearchParams = searchParams.toString();
    const newUrl = `${newPathname}${newSearchParams ? '?' + newSearchParams : ''}`;

    startTransition(() => {
      router.replace(newUrl);
    });

    // Close dropdown
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Get the flag image based on the selected locale
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
      return Sweden; // Default to Swedish if locale is not recognized
    }
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="rounded bg-transparent text-white px-4 py-1 flex items-center">
        <Image src={getFlagImage(selectedLocale)} alt={selectedLocale} width={25} height={25} />
      </button>
      {dropdownOpen && (
        <ul className="absolute rounded mt-3 ml-2 items-center">
          <li onClick={() => onSelectChange('sv')} className="flex items-center p-2 cursor-pointer">
            <Image src={Sweden1} alt='Swedish' width={30} height={30} className="mr-2" /> Swedish
          </li>
          <li onClick={() => onSelectChange('da')} className="flex items-center p-2 cursor-pointer">
            <Image src={Denmark1} alt='Danish' width={30} height={30} className="mr-2" /> Danish
          </li>
          <li onClick={() => onSelectChange('no')} className="flex items-center p-2 cursor-pointer">
            <Image src={Norway1} alt='Norwegian' width={30} height={30} className="mr-2" /> Norwegian
          </li>
          <li onClick={() => onSelectChange('fi')} className="flex items-center p-2 cursor-pointer">
            <Image src={Finland1} alt='Finnish' width={30} height={30} className="mr-2" /> Finnish
          </li>
          <li onClick={() => onSelectChange('en')} className="flex items-center p-2 cursor-pointer">
            <Image src={England1} alt='English' width={30} height={30} className="mr-2" /> English
          </li>
        </ul>
      )}
    </div>
  );
};

export default LocaleSwitcher;
