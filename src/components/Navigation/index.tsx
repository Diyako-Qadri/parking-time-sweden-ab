import HamburgerMenu from './HamburgerMenu'
import DesktopMenu from './DesktopMenu';

const Navigation = () => {
  return (
    <>
      <div className="NavbarScrren:hidden">
        <HamburgerMenu />
      </div>
      <div className="hidden NavbarScrren:flex">
        <DesktopMenu />
      </div>
    </>
  );
};

export default Navigation;
