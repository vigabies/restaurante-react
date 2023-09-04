import Styles from "./Filter.module.scss";
import {CgSearch} from "react-icons/cg";

interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Filter({busca, setBusca}: Props) {
  return (
    <div className={Styles.buscador}>
      <input value={busca}
      onChange={(evento) => setBusca(evento.target.value)}
      />
      <CgSearch />
    </div>
  );
}
