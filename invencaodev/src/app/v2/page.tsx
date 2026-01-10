import MobileMenu from "@/componentsV2/Menus/MobileMenu";

export default function V2() {
  return (
    <div className="">
      <header className="w-full flex items-center justify-between p-4">
        <div>
          <p>&lt;invencaodev/&gt;</p>
        </div>
        <div>
          <MobileMenu />
        </div>
      </header>
    </div>
  );
}
