import GlowLinkButton from '@/componentsV2/GlowLinkButton';

export default function DesktopMenu() {
  return (
    <div>
      <nav className="flex items-center justify-center gap-6">
        <ul className="flex gap-4 text-end text-sm">
          <li>
            <a
              href="#home"
              className="hover:text-primary cursor-pointer opacity-80 transition-colors"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#sobre"
              className="hover:text-primary cursor-pointer opacity-80 transition-colors"
            >
              Sobre
            </a>
          </li>

          <li>
            <a
              href="#projetos"
              className="hover:text-primary cursor-pointer opacity-80 transition-colors"
            >
              Projetos
            </a>
          </li>

          <li>
            <a
              href="#habilidades"
              className="hover:text-primary cursor-pointer opacity-80 transition-colors"
            >
              Habilidades
            </a>
          </li>

          <li>
            <a
              href="#conquistas"
              className="hover:text-primary cursor-pointer opacity-80 transition-colors"
            >
              Conquistas
            </a>
          </li>

          <li>
            <a
              href="#contato"
              className="hover:text-primary cursor-pointer opacity-80 transition-colors"
            >
              Contato
            </a>
          </li>
        </ul>

        <div className="">
          <GlowLinkButton
            blank={true}
            href="https://drive.google.com/file/d/1UEqj05hKkTWgyKCU0T_nIwsj4kMdqcBT/view?usp=sharing"
          >
            Currículo
          </GlowLinkButton>
        </div>
      </nav>
    </div>
  );
}
