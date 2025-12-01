"use client";

import Header from "@/components/Header";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Topic from "@/components/Topic";
import CardTeach from "@/components/CardTech";
import CardProject from "@/components/CardProject";
import CardJobs from "@/components/CardJobs"; // Importa o componente CardJobs
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaCss3,
  FaPhp,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiKotlin,
  SiJavascript,
} from "react-icons/si";
import { PiFileSql, PiFileCSharpBold } from "react-icons/pi";
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Home: React.FC = () => {
  const [repositories, setRepositories] = useState<any[]>([]);
  const [visibleRepos, setVisibleRepos] = useState<number>(3);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/invencaosts/repos",
          {
            headers: {
              Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            },
          }
        );
        const repos = await response.json();

        if (Array.isArray(repos)) {
          const reposWithLanguages = await Promise.all(
            repos.map(async (repo: any) => {
              const languagesResponse = await fetch(repo.languages_url, {
                headers: {
                  Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                },
              });
              const languages = await languagesResponse.json();
              return { ...repo, languages: Object.keys(languages) };
            })
          );

          setRepositories(reposWithLanguages);
        } else {
          console.error("A resposta da API não é um array:", repos);
        }
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      }
    };

    fetchRepositories();
  }, []);

  const techIcons: { [key: string]: IconType } = {
    react: FaReact,
    node: FaNodeJs,
    typescript: SiTypescript,
    nextjs: SiNextdotjs,
    java: FaJava,
    kotlin: SiKotlin,
    sql: PiFileSql,
    "c#": PiFileCSharpBold,
    javascript: SiJavascript,
    html: FaHtml5,
    css: FaCss3,
    php: FaPhp,
  };

  const toggleRepositories = () => {
    if (isExpanded) {
      setVisibleRepos(3); // Volta para 3 no mobile
    } else {
      setVisibleRepos(6); // Mostra 6 no desktop
    }
    setIsExpanded(!isExpanded); // Alterna o estado
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
          <p className="hidden lg:block lg:text-6xl text-[#999999]">
            Construindo o mundo, vivendo o que construi.
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
          <p className="mt-3 md:text-xl md:w-[75%]">
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
      <div id="sobre" className="w-full scroll-mt-20 md:text-xl">
        <Topic id="02." label="Sobre mim" />

        <div className="px-4 text-secundary grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Texto na esquerda */}
          <div>
            <p>
              Meu foco é desenvolvimento utilizando tecnologias web como
              JavaScript, TypeScript, ReactJS, entre outras. Atualmente, estou
              estudando tecnologias de desenvolvimento mobile, como Java e
              Kotlin.
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

            {/* Carrossel de tecnologias */}
            <div className="relative mt-4">
              <Swiper
                modules={[Autoplay]}
                initialSlide={0}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                slidesPerView="auto"
                spaceBetween={120}
                centeredSlides={false}
                loop={true}
                breakpoints={{
                  300: {
                    slidesPerView: 3,
                  },
                  600: {
                    slidesPerView: 5,
                  },
                }}
                className="flex w-full"
              >
                <SwiperSlide className="cursor-pointer py-4 flex ml-[2px] justify-center items-center">
                  <CardTeach
                    icon={FaReact}
                    label="React JS"
                    color="#61DAFB"
                    className="w-[120px] h-[100px]"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer py-4 flex ml-[2px] justify-center items-center">
                  <CardTeach
                    icon={FaNodeJs}
                    label="Node.js"
                    color="#339933"
                    className="w-[120px] h-[100px]"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer py-4 flex ml-[2px] justify-center items-center">
                  <CardTeach
                    icon={SiTypescript}
                    label="TypeScript"
                    color="#2F74C0"
                    className="w-[120px] h-[100px]"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer py-4 flex ml-[2px] justify-center items-center">
                  <CardTeach
                    icon={SiNextdotjs}
                    label="NextJS"
                    color="#000000"
                    className="w-[120px] h-[100px]"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer py-4 flex ml-[2px] justify-center items-center">
                  <CardTeach
                    icon={FaJava}
                    label="Java"
                    color="#000000"
                    className="w-[120px] h-[100px]"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer py-4 flex ml-[2px] justify-center items-center">
                  <CardTeach
                    icon={SiKotlin}
                    label="Kotlin"
                    color="#000000"
                    className="w-[120px] h-[100px]"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer py-4 flex ml-[2px] justify-center items-center">
                  <CardTeach
                    icon={PiFileCSharpBold}
                    label="C#"
                    color="#000000"
                    className="w-[120px] h-[100px]"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer py-4 flex ml-[2px] justify-center items-center">
                  <CardTeach
                    icon={PiFileSql}
                    label="SQL"
                    color="#000000"
                    className="w-[120px] h-[100px]"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* Imagem na direita (some no mobile) */}
          <div className="flex justify-center items-center">
            <Image
              src="/MinhaFoto.jpg"
              alt="Foto do desenvolvedor do site"
              width={220}
              height={220}
              className="rounded shadow-[25px_25px_0px_-10px_rgba(185,_5,_4,_0.5)] w-[220px] h-[220px] lg:w-[300px] lg:h-[300px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Experiência */}
      <div id="experiencia" className="w-full scroll-mt-20 mt-6">
        <Topic id="03." label="Experiência" />

        <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardJobs
            title="Desenvolvedor de Software"
            company="BST Networks"
            startDate="2025-02"
            description="Desenvolvedor Full Stack | Agilidade na Resolução de Tarefas | Trabalho em equipe e autonomia"
          />

          <CardJobs
            title="Desenvolvedor Freelancer"
            company="Freelance"
            startDate="2024-01"
            description="Trabalhei no desenvolvimento de projetos web. | Aprendi e apliquei conhecimentos em diferentes linguagens e tecnologias. |   Auxiliei na manutenção de sites."
          />

          <CardJobs
            title="GeoServer - CNPq"
            company="CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico"
            startDate="2025-06"
            description="Desenvolvimento de um software de ponta para o compartilhamento e análise de dados de terras griladas no território brasileiro, utilizando ferramentas online e APIs para visualização de dados em formato de mapa. | Conquista Marcante: Fui convidado para a coautoria de um capítulo de livro, onde esse capítulo irá abordar as dificuldades e barreiras tecnológicas na criação de mapas didáticos, explorando soluções inovadoras para a educação."
          />
        </div>

        {/* Botão para carregar mais ou mostrar menos */}
        <div className="flex justify-center mt-4">
          <a
            href="https://www.linkedin.com/in/guilherme-da-invencao-santos-556497282/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition cursor-pointer"
          >
            Veja mais no LinkedIn
          </a>
        </div>
      </div>

      {/* Projetos */}
      <div id="projetos" className="w-full scroll-mt-20 mt-6">
        <Topic id="04." label="Projetos" />

        <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repositories
            .filter(
              (repo) =>
                repo.name !== "invencaosts" && repo.name !== "portifolio"
            )
            .slice(0, visibleRepos) // Exibe apenas o número de repositórios controlado pelo estado
            .map((repo) => (
              <CardProject
                key={repo.id}
                repoName={repo.name}
                description={repo.description || "Sem descrição disponível."}
                technologies={repo.languages.map((lang: string) => ({
                  icon: techIcons[lang.toLowerCase()] || FaReact, // Ícone correspondente ou padrão
                  label: lang,
                }))}
                repoUrl={repo.html_url}
              />
            ))}
        </div>

        {/* Botão para carregar mais ou mostrar menos */}
        <div className="flex justify-center mt-4">
          <button
            onClick={toggleRepositories}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition cursor-pointer"
          >
            {isExpanded ? "Mostrar menos" : "Carregar mais"}
          </button>
        </div>
      </div>

      <div id="contato" className="w-full scroll-mt-20 mt-6">
        <Topic id="05." label="Contato" />

        <div className="px-4 flex flex-col md:flex-row items-center justify-center gap-24 w-full max-w-4xl mx-auto">
          <form
            action="https://formsubmit.co/gui.inven@gmail.com"
            method="POST"
            className="flex flex-col w-full gap-4 lg:w-[500px]"
          >
            <div className="flex flex-col">
              <label htmlFor="name">Nome Completo:</label>
              <input
                type="text"
                name="name"
                placeholder="Ex. Joana D'Arc"
                required
                className="p-2 border-2 border-primary rounded-sm bg-tertiary text-secundary outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Melhor E-Mail:</label>
              <input
                type="email"
                name="email"
                placeholder="Ex. joana@darc.com"
                required
                className="p-2 border-2 border-primary rounded-sm bg-tertiary text-secundary outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message">O que você quer saber?</label>
              <textarea
                name="message"
                placeholder="Ex. Olá, gostaria de saber mais sobre..."
                required
                rows={4}
                className="p-2 border-2 border-primary rounded-sm bg-tertiary text-secundary outline-none"
              />
            </div>

            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://invencaodev.vercel.app/"
            />
            <div>
              <button
                type="submit"
                className="w-full border border-primary bg-primary text-white rounded-md cursor-pointer py-2 px-4 text-tertiary"
              >
                Enviar
              </button>
            </div>
          </form>

          <div className="hidden md:flex flex-col text-end gap-8">
            <div>
              <p className="text-2xl text-primary">E-Mail</p>
              <p className="text-xl ">gui.inven@gmail.com</p>
            </div>
            <div>
              <p className="text-2xl text-primary">Endereço</p>
              <p className="text-xl ">Aracaju - SE</p>
            </div>
            <div>
              <p className="text-2xl text-primary">Mídias Sociais</p>
              <div className="flex items-center justify-end gap-4 mt-2 text-secundary">
                <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
                  <a
                    href="https://www.linkedin.com/in/guilherme-da-invencao-santos-556497282/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="w-6 h-6 md:w-8 md:h-8 text-[#0073B1]" />
                  </a>
                </div>
                <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
                  <a
                    href="https://github.com/invencaosts"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
                  </a>
                </div>
                <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
                  <a
                    href="https://api.whatsapp.com/send?phone=5579999684200&text=Olá Gostaria de saber mais sobre o seu trabalho!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8 text-[#24C660]" />
                  </a>
                </div>
                <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
                  <a
                    href="https://www.instagram.com/invencaodev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="w-6 h-6 md:w-8 md:h-8 text-[#CF005D]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default Home;
