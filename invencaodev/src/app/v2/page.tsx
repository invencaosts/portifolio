"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

import MobileMenu from "@/componentsV2/Menus/MobileMenu";
import DesktopMenu from "@/componentsV2/Menus/DesktopMenu";
import ThemeToggle from "@/componentsV2/ThemeToggle";
import GlowLinkButton from "@/componentsV2/GlowLinkButton";

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
              <p className="mt-6 text-sm text-foreground">
                Criando soluções digitais inovadoras e eficientes <br />
                para impulsionar o sucesso dos meus clientes.
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-center lg:justify-start">
              <div className="flex items-center justify-center">
                <div>
                  <GlowLinkButton href="#contato">
                    Entre em Contato
                  </GlowLinkButton>
                </div>
                <div>
                  <Link
                    href="#projetos"
                    className="bg-tertiary text-primary font-semibold px-6 py-2 ml-4 rounded-lg border-1 border-primary hover:bg-primary hover:text-background transition-colors duration-600"
                  >
                    Ver Projetos
                  </Link>
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
            <Image
              src="/images/imagemteste4.webp"
              alt="Imagem de um desenvolvedor trabalhando em um laptop, cercado por ícones de tecnologia."
              width={400}
              height={250}
              className="w-[400px] h-[280px]"
            />
          </div>
        </section>

        {/* <section id="sobre" className="h-screen">
          <h2>Sobre Mim</h2>
        </section> */}
      </main>
    </div>
  );
}
