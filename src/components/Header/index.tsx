"use client"

import LocaleSwitcher from '../LocaleSwitcher';
import Image from 'next/image';
import Logo from '../../../public/images/parking-time-logo.png';
import Navigation from '../Navigation';
const Header = () => {
  return (
    <header className="bg-pt-primary items-center fixed flex justify-between w-full h-20 px-7 md:px-16">
      <div>
        <a href="/">
        <Image
        priority
          src={Logo}
          alt="hederLogo"
          sizes="(min-width: 768px) 50vw, 100vw"
          style={{
            width: '60px',
            height: '60px',
          }}
        /></a>
      </div>
      <div>
        <Navigation />
       
      </div> <LocaleSwitcher/>
    </header>
  );
};

export default Header;
