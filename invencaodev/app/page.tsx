"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { TypeAnimation } from "react-type-animation";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div id="home">
        <p>Oi, meu nome é</p>
        <p>Guilherme da Invenção</p>
        <TypeAnimation
          sequence={[
            "Desenvolvedor Full-Stack",
            500,
            "Criador de soluções em software",
            900,
            "Apaixonado por tecnologia",
            400,
          ]}
          repeat={Infinity}
          speed={99}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
