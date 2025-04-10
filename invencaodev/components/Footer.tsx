import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-tertiary flex items-center justify-center flex-col text-secundary fixed bottom-0">
      <div className="w-full h-[2px] bg-primary"></div>
      <div className="flex items-center justify-center gap-4 mt-2">
        <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
          <FaLinkedinIn className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
          <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
          <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
          <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
        </div>
      </div>
      <div className="text-center mt-2 text-md font-bold">
        <p className="text-sm md:text-lg">
          &copy; 2025 Invenção Dev. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
