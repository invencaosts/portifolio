import MobileMenu from "@/componentsV1/Menus/MobileMenu";
import DesktopMenu from "@/componentsV1/Menus/DesktopMenu";

const Header: React.FC = () => {
  return (
    <div className="text-secundary bg-tertiary flex w-full h-[60] items-center justify-between p-4 shadow-lg/20 fixed top-0 z-10">
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
