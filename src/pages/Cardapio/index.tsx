import Styles from "./Cardapio.module.scss";
import logo from "assets/logo.svg";
import Filter from "./Filter";
import { useState } from "react";
import Filtros from "./Filtros";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState <number | null>(null);

  return (
    <main>
      <nav className={Styles.menu}>
        <img src={logo} alt="logo" />
      </nav>

      <header className={Styles.header}>
        <div className={Styles.header__text}>
          La casa del codice e della massa è l'amore.{" "}
        </div>
      </header>

      <section className={Styles.cardapio}>
        <h3 className={Styles.cardapio__titulo}>Cardápio</h3>
        <Filter busca={busca} setBusca={setBusca} />
        <div className={Styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro}/>
        </div>
      </section>
    </main>
  );
}
