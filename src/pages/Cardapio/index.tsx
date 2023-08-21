import Styles from "./Cardapio.module.scss";
import logo from "assets/logo.svg";

export default function Cardapio() {
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
    </main>
  );
}
