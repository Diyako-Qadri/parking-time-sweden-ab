'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import Button from '@/components/Buttons';

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
  const locale = useLocale();
  const t = useTranslations('NavItem');

  return (
    <div className="flex flex-row w-[650px] justify-between h-14 gap-6 items-center">
      <div className="flex justify-around gap-[12px] text-base text-white w-[430px]">
        {navItem.map((item, index) => (
          <Link
            className={`relative group ${path === item.link ? 'active' : ''}`}
            key={index}
            href={`/${locale}${item.link}`}
          >
            <span className="relative inline-block pb-px ">
              {t(item.name)}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-pt-green transform scale-x-0 origin-bottom-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
            </span>
          </Link>
        ))}
      </div>
      <div className="flex justify-between items-center w-[230px]">
        <a href={`/${locale}/contact`}>
          <Button variant="desktopWhite" size="desktopPrimary">
            {t('Contact')}
          </Button>
        </a>

        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default DesktopMenu;
