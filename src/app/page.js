"use client";
import { useState } from "react";
import Image from "next/image";
import estilos from "./page.module.css";

import Banner from "../../public/banner.jpg";
import Topo from "./componentes/Topo";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(false);

  function mudarTema() {
    setDarkTheme(!darkTheme);
  }

  return (
    <div className={darkTheme ? estilos.dark : estilos.light}>
      <main className={estilos.main}>
        <Topo alterarTema={mudarTema} dark={darkTheme} />
        <section className={estilos.secao_banner}></section>

        <section className={estilos.container_texto}>
          <div className={estilos.secao_texto}>
            <h1>Bem-Vindo a Barber Shop</h1>
            <p>
              Nossa barbearia sempre oferece profissionais de qualidade e
              estamos prontos para lidar com suas maiores expectativas.
            </p>
            <p>
              Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos
              uma equipe premiada que demonstrou o talento de mestres barbeiros
              em vários concursos de estilo. Deixe nosso barbeiro ser seu
              estilista pessoal e você nunca ficará desapontado.
            </p>
            <p>S.Kelly</p>
          </div>
        </section>
      </main>
    </div>
  );
}
