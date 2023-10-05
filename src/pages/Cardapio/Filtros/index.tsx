import Styles from "./filter.module.scss";
import filtros from "./filtros.json";

// uma opção de puxar ele é essa
// interface IOpcao {
//     id: number;
//     label: string;
// }

type IOpcao = (typeof filtros)[0];

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: Props) {
  function selecionarFiltro(opcao: IOpcao) {
    return setFiltro(opcao.id);
  }
  return (
    <div>
      {filtros.map((opcao) => (
        <button key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
