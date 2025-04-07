'use client';
import { useState } from 'react';
import Image from "next/image";
import estilos from "./page.module.css";
import { BsSun, BsMoon } from "react-icons/bs";
import Logo from '../../public/barbearia.png';
import Banner from '../../public/banner.jpg'

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(false);

  function mudarTema() {
    setDarkTheme(!darkTheme);
  }

  return (
    <div className={darkTheme ? estilos.dark : estilos.light}>
    <main className={estilos.main}>
      <header className={estilos.topo}>
        <div className={`${estilos.container} ${estilos.limitar_secao}`}>
          <Image className={estilos.image} src={Logo} alt="logo barbearia"></Image>
          <button onClick={mudarTema}> {darkTheme ? <BsSun /> : <BsMoon />}</button>
        </div>
      </header>

      <section className={estilos.secao_banner}>
      </section>

      <section className={estilos.container_texto}>
        <div className={estilos.secao_texto}>
        <h1>Bem-Vindo a Barber Shop</h1>
        <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
        <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
        <p>S.Kelly</p>
        </div>
      </section>
    </main>
    </div>
  );
}