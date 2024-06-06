"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import LocaleSwitcher from '@/components/LocaleSwitcher';

type NavItemDesk = {
  name: string;
  link: string;
};

const navItem: NavItemDesk[] = [
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

const DesktopMenu = () => {
  const path = usePathname();
  const locale = useLocale(); // Get the current locale from next-intl
  const t = useTranslations('NavItem');

  return (
    <div className='flex flex-row w-[567px] justify-between h-14 items-center'>
    <div className="flex justify-around gap-[12px] text-base text-white w-[368px]">
      {navItem.map((item, index) => (
        <Link
          className={`relative group ${path === item.link ? 'active' : ''}`}
          key={index}
          href={`/${locale}${item.link}`} // Prepend the current locale to the link
        >
          <span className="relative inline-block pb-px ">
            {t(item.name)}
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-pt-green transform scale-x-0 origin-bottom-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
          </span>
        </Link>
      ))}
    </div>
    <div>
      <LocaleSwitcher />
    </div>
  </div>
);
};

export default DesktopMenu;
