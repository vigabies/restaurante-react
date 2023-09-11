import Styles from "./filter.module.scss";
import filtros from "./filtros.json"

// uma opção de puxar ele é essa
// interface IOpcao {
//     id: number;
//     label: string;
// }

type IOpcao = typeof filtros[0];

export default function Filtros(){
    return (
        <div>
           {filtros.map((opcao) => (
               <button key={opcao.id}>
                   {opcao.label}
               </button>
           ))}
        </div>
    )
}