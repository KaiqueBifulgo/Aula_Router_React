import {useFetch} from "./Hooks/useFetch"

import { Link, useSearchParams} from "react-router-dom";


const Search = () => {

    const searchP = useSearchParams();

    const url = "http://localhost:3000/products?" + searchP;

     const {data: items} = useFetch(url);

  return (
    <div>
        <h1>Resultados da pesquisa</h1>
         <ul className="produtos">
           {items && items.map((item) => (
            <li key={item.id}>
            <h2>{item.item}</h2>
            <p>R$: {item.preço}</p>
            {/* ROTA DINAMICA */}
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search