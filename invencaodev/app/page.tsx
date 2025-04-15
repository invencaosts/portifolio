"use client";

import Header from "@/components/Header";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Topic from "@/components/Topic";
import CardTeach from "@/components/CardTech";

import { TypeAnimation } from "react-type-animation";

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

const Home: React.FC = () => {
  // Função para rolar o carrossel de tecnologias
  const scrollContainer = (direction: "left" | "right") => {
    const container = document.getElementById("tech-carousel");
    if (container) {
      const scrollAmount = 200; // Quantidade de pixels para rolar
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* Cabeçalho */}
      <Header />

      {/* Home */}
      <div id="home" className="p-4 mt-[60] text-secundary scroll-mt-20">
        <div className="font-bold overflow-hidden">
          <p className="text-xl md:text-2xl">Oi, meu nome é</p>
          <p className="text-4xl text-primary md:text-6xl">
            Guilherme da Invenção
          </p>
          <TypeAnimation
            sequence={[
              "Desenvolvedor Full-Stack",
              900,
              "Criador de soluções em software",
              900,
              "Apaixonado por tecnologia",
              900,
            ]}
            repeat={Infinity}
            speed={50}
            className="text-2xl md:text-4xl"
          />
        </div>
        <div>
          <p className="mt-3 md:text-xl md:w-[50%]">
            Bem-vindo! Sou um desenvolvedor de software com experiência em
            desenvolvimento web. Comecei minha jornada na programação em 2021 e
            sou apaixonado por novas tecnologias. Estou sempre buscando aprender
            e me aprimorar a cada dia.
          </p>
        </div>
        <div className="md:flex md:w-full md:justify-between md:gap-4">
          <div className="mt-4 md:w-[50%]">
            <Button
              label="Ver Cúrriculo"
              size="md"
              variant="primary"
              width="full"
              onClick={() => {
                alert("Currículo clicado");
              }}
              href="https://drive.google.com/file/d/1UEqj05hKkTWgyKCU0T_nIwsj4kMdqcBT/view?usp=drive_link"
            />
          </div>
          <div className="mt-4 md:w-[50%]">
            <Button
              label="Entre em contato"
              size="md"
              variant="outline"
              width="full"
              href="https://wa.me/5579999684200?text=Oi! Gostaria de saber mais sobre seus serviços."
            />
          </div>
        </div>
      </div>

      {/* Sobre mim */}
      <div id="sobre" className="w-full scroll-mt-20 ">
        <Topic id="01." label="Sobre mim" />
        <div className="px-4 text-secundary">
          <p>
            Meu foco é desenvolvimento utilizando tecnologias web como
            JavaScript, TypeScript, ReactJS, entre outras. Atualmente, estou
            estudando tecnologias de desenvolvimento mobile, como Java e Kotlin.
            <br />
            <br />
            Tenho formação técnica em Análise e Desenvolvimento de Sistemas
            pelo:{" "}
            <span className="text-primary">
              <a
                href="https://www.se.senai.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SENAI - Serviço Nacional de Aprendizagem Industrial / SE -
                Brasil.
              </a>
            </span>
            <br />
            <br />
            Atualmente, estou cursando Bacharelado em Sistemas de Informação
            pelo:{" "}
            <span className="text-primary">
              <a
                href="https://www.ifs.edu.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                IFS - Instituto Federal de Sergipe / SE - Brasil.
              </a>
            </span>
            <br />
            <br />
            As tecnologias que mais utilizo como desenvolvedor:
          </p>
        </div>

        {/* Carrossel de tecnologias */}
        <div className="relative px-4 py-4">
          {/* Botão para rolar para a esquerda */}
          <button
            onClick={() => scrollContainer("left")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md z-10"
          >
            {"<"}
          </button>

          {/* Contêiner do carrossel */}
          <div
            id="tech-carousel"
            className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
          >
            <CardTeach
              icon={FaReact}
              label="React JS"
              color="#61DAFB"
              className="flex-shrink-0 w-[120px] h-[100px]"
            />
            <CardTeach
              icon={FaNodeJs}
              label="Node.js"
              color="#339933"
              className="flex-shrink-0 w-[120px] h-[100px]"
            />
            <CardTeach
              icon={FaHtml5}
              label="HTML5"
              color="#E34F26"
              className="flex-shrink-0 w-[120px] h-[100px]"
            />
            <CardTeach
              icon={FaCss3Alt}
              label="CSS3"
              color="#1572B6"
              className="flex-shrink-0 w-[120px] h-[100px]"
            />
            <CardTeach
              icon={FaJs}
              label="JavaScript"
              color="#F7DF1E"
              className="flex-shrink-0 w-[120px] h-[100px]"
            />
          </div>

          {/* Botão para rolar para a direita */}
          <button
            onClick={() => scrollContainer("right")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md z-10"
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default Home;
