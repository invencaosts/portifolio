import GlowLinkButton from "@/componentsV2/GlowLinkButton";

export default function DesktopMenu() {
  return (
    <div>
      <nav className="flex items-center justify-center gap-6">
        <ul className="flex items-center gap-6 text-sm">
          <li className="opacity-80 cursor-pointer hover:text-primary">Home</li>
          <li className="opacity-80 cursor-pointer hover:text-primary">
            Sobre
          </li>
          <li className="opacity-80 cursor-pointer hover:text-primary">
            Projetos
          </li>
          <li className="opacity-80 cursor-pointer hover:text-primary">
            Habilidades
          </li>
          <li className="opacity-80 cursor-pointer hover:text-primary">
            Conquistas
          </li>
          <li className="opacity-80 cursor-pointer hover:text-primary">
            Contato
          </li>
        </ul>
        <div className="">
          <GlowLinkButton href="/curriculo">Currículo</GlowLinkButton>
        </div>
      </nav>
    </div>
  );
}
