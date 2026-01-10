import Link from "next/link";

const DesktopMenu: React.FC = () => {
  return (
    <nav className="hidden md:flex space-x-4">
      <ul className="flex space-x-4 cursor-pointer">
        <li>
          <Link className="flex items-baseline gap-1" href="#home">
            <p className="text-primary text-sm">01.</p>Home
          </Link>
        </li>
        <li>
          <Link className="flex items-baseline gap-1" href="#sobre">
            <p className="text-primary text-sm">02.</p>Sobre
          </Link>
        </li>
        <li>
          <Link className="flex items-baseline gap-1" href="#experiencia">
            <p className="text-primary text-sm">03.</p>Experiência
          </Link>
        </li>
        <li>
          <Link className="flex items-baseline gap-1" href="#projetos">
            <p className="text-primary text-sm">04.</p>Projetos
          </Link>
        </li>
        <li>
          <Link className="flex items-baseline gap-1" href="#contato">
            <p className="text-primary text-sm">05.</p>Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
