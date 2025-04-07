import MobileMenu from "@/components/MobileMenu";

const Header: React.FC = () => {
  return (
    <div className="text-secundary bg-background-project flex w-full items-center justify-between p-4 shadow-lg/20 sticky">
      <div className="text-primary font-bold">
        <p>&lt;invencaodev/&gt;</p>
      </div>
      <div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
