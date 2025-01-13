// CARREGANDO DADOS
import {useFetch} from '../Hooks/useFetch'

const url = "http://localhost:3000/products"

// ROTA DINAMICA
import {Link} from "react-router-dom"

const Home = () => {
  const {data: items} = useFetch(url);

  return (
    <div>
      <h1>Home</h1>
      {/* CARREGAMENTO DE DADOS */}
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

export default Home