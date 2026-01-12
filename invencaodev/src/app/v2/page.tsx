"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";

import MobileMenu from "@/componentsV2/Menus/MobileMenu";
import DesktopMenu from "@/componentsV2/Menus/DesktopMenu";
import ThemeToggle from "@/componentsV2/ThemeToggle";
import GlowLinkButton from "@/componentsV2/GlowLinkButton";
import CodeCard from "@/componentsV2/CodeCard";
import CardAboutMe from "@/componentsV2/CardAboutMe";

export default function V2() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full h-screen">
      <header
        className={`
    sticky top-0 z-50
    w-full
    h-[60px] lg:h-[80px]
    transition-all duration-300
    ${
      isScrolled
        ? "bg-background shadow-none"
        : "bg-background/70 backdrop-blur-md shadow-sm"
    }
  `}
      >
        {/* Wrapper que ocupa 100% da altura */}
        <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <p className="text-primary font-bold lg:text-xl">
              &lt;invencaodev/&gt;
            </p>
          </Link>

          {/* Ações */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <div className="md:hidden">
              <MobileMenu />
            </div>

            <div className="hidden md:block">
              <DesktopMenu />
            </div>
          </div>
        </div>
      </header>

      <main className="p-4 lg:mx-auto">
        <section
          id="home"
          className="w-full mt-12 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24"
        >
          <div className="text-center lg:text-start">
            <div>
              <p className="text-primary text-base">Olá! Me chamo</p>
            </div>
            <div className="flex align items-center justify-center mt-6 lg:justify-start">
              <h1 className="text-4xl">
                Guilherme da <strong className="text-primary">Invenção</strong>
              </h1>
            </div>
            <div className="mt-6">
              <TypeAnimation
                sequence={[
                  "Front-End Developer",
                  500,
                  "Back-End Developer",
                  500,
                  "DevOps Engineer",
                  500,
                  "SQL Developer",
                  500,
                  "Mobile Developer",
                  500,
                ]}
                repeat={Infinity}
                speed={30}
                className="text-xl lg:text-4xl"
              />
            </div>
            <div>
              <p className="mt-6 text-sm text-foreground/60">
                Criando soluções digitais inovadoras e eficientes <br />
                para impulsionar o sucesso dos meus clientes.
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-center lg:justify-start">
              <div className="flex items-center justify-center">
                <div>
                  <GlowLinkButton
                    href="#contato"
                    className="border-3 border-primary"
                  >
                    Entre em Contato
                  </GlowLinkButton>
                </div>
                <div>
                  <a
                    href="#projetos"
                    className="
                      inline-flex items-center justify-center
                      bg-tertiary text-primary
                      font-semibold
                      px-6 py-2 ml-4
                      rounded-lg
                      border border-primary

                      transition-transform
                      duration-300 ease-out

                      hover:scale-105
                      will-change-transform
                    "
                  >
                    Ver Projetos
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 mt-6 text-foreground lg:mt-0">
                <div>
                  <a
                    href="https://github.com/invencaosts"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuGithub className="w-6 h-6 transition-transform duration-300 ease-out hover:scale-130 hover:text-primary" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/guilherme-da-invencao-santos-556497282"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuLinkedin className="w-6 h-6 transition-transform duration-300 ease-out hover:scale-130 hover:text-primary" />
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:gui.inven@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuMail className="w-6 h-6 transition-transform duration-300 ease-out hover:scale-130 hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <CodeCard />
          </div>
        </section>

        <section id="sobre" className="w-full mt-18 text-foreground">
          <div>
            <h1 className="text-2xl font-semibold">Sobre Mim</h1>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <div className="text-foreground flex items-center justify-start gap-1 text-xl font-semibold">
              <IoNewspaperOutline className="text-primary" />
              <p>Bio</p>
            </div>
            <p className="text-foreground/60">
              Sou um Desenvolvedor de Software com experiência em
              desenvolvimento web. Iniciei minha jornada na programação em 2021
              e sou apaixonado por novas tecnologias.
              <br /> <br />
              Estou sempre buscando aprender e me aprimorar a cada dia. Tenho
              foco em desenvolvimento utilizando tecnologias web, como
              JavaScript, TypeScript, ReactJS, entre outras.
              <br /> <br />
              Atualmente, estou estudando tecnologias para desenvolvimento
              mobile, como Java e Kotlin. Me considero decidido e entusiasmado
              em relação ao aprendizado de novas linguagens e tecnologias. Além
              disso, sou adaptável a mudanças e estou sempre pronto para superar
              qualquer desafio.
            </p>
          </div>
          <div className="mt-8">
            <CardAboutMe
              tipoCard="Educação"
              experiencias={[
                {
                  nomeInstituicao: "IFS - Instituto Federal de Sergipe",
                  titulo: "Bacharelado em Sistemas da Informação",
                  periodo: "2024 - 2028",
                },
                {
                  nomeInstituicao:
                    "SENAI CETCC - Centro de Educação Tecnológica e Ciências",
                  titulo: "Técnico em Análise e Desenvolvimento de Sistemas",
                  periodo: "2021 - 2023",
                },
              ]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
