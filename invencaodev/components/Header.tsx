import MobileMenu from "@/components/Menus/MobileMenu";
import DesktopMenu from "@/components/Menus/DesktopMenu";

const Header: React.FC = () => {
  return (
    <div className="text-secundary bg-tertiary flex w-full items-center justify-between p-4 shadow-lg/20 sticky">
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
