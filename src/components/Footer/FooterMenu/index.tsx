"use client"
import Link from "next/link";

import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";

type NavItemDesk = {
    name: string;
    link: string;
  };
  
  const navItem: NavItemDesk[] = [
    // {
    //   name: 'Contact',
    //   link: '/contact',
    // },
    {
      name: 'About us',
      link: '/about',
    },
    {
      name: 'News',
      link: '/news',
    },
  ];

  const FooterMenu = () => {
    const path = usePathname();
    const locale = useLocale();
    const t = useTranslations('NavItem');
    return (
      <>
          <div className="w-52 flex flex-col justify-start">
                    <div>
                        <p className="font-bold">{t("Links")}</p>
                    </div>
                    <div className="flex justify-between ">
                       {navItem.map((item, index) => (
                        <Link
                        className={`relative group hover:underline ${path === `/${locale}${item.link}` ? 'active' : ''}`}
                        key={index}
                        href={`/${locale}${item.link}`}
                        >
                            {t(item.name)}
                        </Link>
                       ))}
                    </div>
            </div>

      </>
    )
  }
  export default FooterMenu