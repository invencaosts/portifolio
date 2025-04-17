"use client";

import Header from "@/components/Header";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Topic from "@/components/Topic";
import CardTeach from "@/components/CardTech";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiKotlin } from "react-icons/si";
import { PiFileSql, PiFileCSharpBold } from "react-icons/pi";

const Home: React.FC = () => {
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
        <Topic id="01." label="Sobre mim" />

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

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default Home;
