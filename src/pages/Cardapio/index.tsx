import Styles from './Cardapio.module.scss';
import logo from '../../assets/logo.svg';

export default function Cardapio() {
  return (
    <main>
      <nav className={Styles.menu}>
        <img src={logo} alt="logo" />
      </nav>
    </main>
  );
}
