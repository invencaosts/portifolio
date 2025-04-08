const DesktopMenu: React.FC = () => {
  return (
    <nav className="hidden md:flex space-x-4">
      <ul className="flex space-x-4 cursor-pointer">
        <li>
          <a
            href="#"
            className="text-secundary hover:text-primary flex items-baseline gap-1"
          >
            <p className="text-primary text-xs">01.</p>
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-secundary hover:text-primary flex items-baseline gap-1"
          >
            <p className="text-primary text-xs">02.</p>Sobre
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-secundary hover:text-primary flex items-baseline gap-1"
          >
            <p className="text-primary text-xs">03.</p>Projetos
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-secundary hover:text-primary flex items-baseline gap-1"
          >
            <p className="text-primary text-xs">04.</p>Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
