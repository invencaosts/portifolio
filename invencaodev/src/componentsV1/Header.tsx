import MobileMenu from '@/componentsV1/Menus/MobileMenu';
import DesktopMenu from '@/componentsV1/Menus/DesktopMenu';

const Header: React.FC = () => {
  return (
    <div className="text-secundary bg-tertiary fixed top-0 z-10 flex h-[60] w-full items-center justify-between p-4 shadow-lg/20">
      <div className="text-primary font-bold md:text-lg">
        <p>&lt;invencaodev/&gt;</p>
      </div>
      <div>
        <MobileMenu />
        <DesktopMenu />
      </div>
    </div>
  );
};

export default Header;
