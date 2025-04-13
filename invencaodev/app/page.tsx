"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { TypeAnimation } from "react-type-animation";
import Button from "@/components/Button";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div id="home" className="p-4 text-secundary">
        <div className="font-bold">
          <p className="text-xl">Oi, meu nome é</p>
          <p className="text-4xl text-primary">Guilherme da Invenção</p>
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
            className="text-2xl"
          />
        </div>
        <div>
          <p className="mt-3">
            Bem-vindo! Sou um desenvolvedor de software com experiência em
            desenvolvimento web. Comecei minha jornada na programação em 2021 e
            sou apaixonado por novas tecnologias. Estou sempre buscando aprender
            e me aprimorar a cada dia.
          </p>
        </div>
        <div>
          <div className="mt-4">
            <Button
              label="Ver Cúrriculo"
              size="md"
              variant="primary"
              width="full"
            />
          </div>
          <div className="mt-4">
            <Button
              label="Entre em contato"
              size="md"
              variant="outline"
              width="full"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
