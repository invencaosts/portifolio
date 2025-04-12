import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-tertiary flex items-center justify-center flex-col text-secundary">
      <div className="w-full h-[2px] bg-primary"></div>
      <div className="flex items-center justify-center gap-4 mt-2">
        <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
          <Link
            href="https://www.linkedin.com/in/guilherme-da-invencao-santos-556497282/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="w-6 h-6 md:w-8 md:h-8" />
          </Link>
        </div>
        <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
          <Link
            href="https://github.com/invencaosts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
          </Link>
        </div>
        <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
          <Link
            href="https://api.whatsapp.com/send?phone=5579999684200&text=Olá Gostaria de saber mais sobre o seu trabalho!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
          </Link>
        </div>
        <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
          <Link
            href="https://www.instagram.com/invencaodev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
          </Link>
        </div>
      </div>
      <div className="text-center mt-2 text-md font-bold">
        <p className="text-sm md:text-lg">
          &copy; 2025 invencaodev. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
