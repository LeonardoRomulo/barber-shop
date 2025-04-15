import estilos from "./Topo.module.css";
import Image from "next/image";
import { BsSun, BsMoon } from "react-icons/bs";
import Logo from "../../../../public/barbearia.png";

export default function Topo(props) {
  return (
    <header className={estilos.topo}>
      <div className={`${estilos.container} ${estilos.limitar_secao}`}>
        <Image
          className={estilos.imagem}
          src={Logo}
          alt="logo barbearia"
        ></Image>
        <button 
        onClick={props.alterarTema}
            >
          {props.darkTheme ? <BsSun /> : <BsMoon />}
        </button>
      </div>
    </header>
  );
}
