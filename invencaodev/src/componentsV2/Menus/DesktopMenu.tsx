import GlowLinkButton from "@/componentsV2/GlowLinkButton";

export default function DesktopMenu() {
  return (
    <div>
      <nav className="flex items-center justify-center gap-6">
        <ul className="flex gap-4 text-sm text-end">
          <li>
            <a
              href="#home"
              className="opacity-80 cursor-pointer hover:text-primary transition-colors"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#sobre"
              className="opacity-80 cursor-pointer hover:text-primary transition-colors"
            >
              Sobre
            </a>
          </li>

          <li>
            <a
              href="#projetos"
              className="opacity-80 cursor-pointer hover:text-primary transition-colors"
            >
              Projetos
            </a>
          </li>

          <li>
            <a
              href="#habilidades"
              className="opacity-80 cursor-pointer hover:text-primary transition-colors"
            >
              Habilidades
            </a>
          </li>

          <li>
            <a
              href="#conquistas"
              className="opacity-80 cursor-pointer hover:text-primary transition-colors"
            >
              Conquistas
            </a>
          </li>

          <li>
            <a
              href="#contato"
              className="opacity-80 cursor-pointer hover:text-primary transition-colors"
            >
              Contato
            </a>
          </li>
        </ul>

        <div className="">
          <GlowLinkButton href="#curriculo">Currículo</GlowLinkButton>
        </div>
      </nav>
    </div>
  );
}
