import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  return (
    <div className="flex justify-around text-base text-white w-[368px]">
      {navItem.map((item, index) => (
        <Link
          className={path === item.link ? 'active' : ''}
          key={index}
          href={item.link}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default DesktopMenu;
