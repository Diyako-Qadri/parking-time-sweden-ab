import HamburgerMenu from './HamburgerMenu'
import DesktopMenu from './DesktopMenu';

const Navigation = () => {
  return (
    <>
      <div className="md:hidden">
        <HamburgerMenu />
      </div>
      <div className="hidden md:flex">
        <DesktopMenu />
      </div>
    </>
  );
};

export default Navigation;
