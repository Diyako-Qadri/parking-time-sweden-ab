"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/images/parking-time-logo.png'
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
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

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const path = usePathname();
    const locale = useLocale();
    // const t = useTranslations('NavItem');
    const t = useTranslations('FooterInfo')
    const b = useTranslations('NavItem')
    return (
        <>
        <footer className="flex md:flex-col justify-center h-80 fixed mt-[100px] w-full text-white bg-pt-primary md:px-16">
            <div className="flex flex-col justify-between md:flex-row border-b-[1px] h-24 border-white">
                <div className="flex w-[490px] justify-start">
                    <div className="flex w-[80px]">
                        <a href="/">
                        <Image
                        src={Logo}
                        alt="headerLogo"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        width={60}
                        height={60}
                        /></a>
                    </div> 
                    <div className="w-48 h-26 gap-8"> 
                        <p className="text-sm">{t("Address")}</p>
                        <p className="text-sm">Nyköpingsvägen 52 | 61150 </p>
                        <p>NYKÖPING</p>
                    </div>
                    <div className="w-36">
                        <p className="text-sm">{t("Contact")}</p>
                        <a href="mailto:info@example.com" className="hover:underline cursor-pointer">info@example.com</a> | 
                        <a href="tel:+46727224400" className="hover:underline cursor-pointer">+46727224400</a>
                        <div className="flex flex-row w-[40px] justify-between"> 
                           <Link href="https://www.instagram.com/parkingtimesweden" passHref legacyBehavior>
                                <a target="_blank"> 
                                <FiInstagram />
                                </a>
                            </Link> 
                            <Link href="https://www.linkedin.com/company/parking-time-sweden/" passHref legacyBehavior>
                                <a target="_blank">
                                <FaLinkedin />
                                </a>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                {/* menu goes here */}
                <div className="w-52 flex flex-col justify-start">
                    <div>
                        <p className="font-bold">{b("Links")}</p>
                    </div>
                    <div className="flex justify-between ">
                       {navItem.map((item, index) => (
                        <Link
                        className={`relative group hover:underline ${path === `/${locale}${item.link}` ? 'active' : ''}`}
                        key={index}
                        href={`/${locale}${item.link}`}
                        >
                            {b(item.name)}
                        </Link>
                       ))}
                    </div>
            </div>
            </div>
            <div className="flex flex-col h-14 justify-end">
                <div className="flex flex-row justify-between">
                    <p className="text-sm">&copy; {currentYear}</p>
                    <Link href="#" className="hover:underline">Privacy Policy</Link>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer

 
    

 
    




