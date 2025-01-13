import { useFetch } from "../Hooks/useFetch"

import { useParams } from "react-router-dom"

const Products = () => {

    const {id} = useParams();

    const url = "http://localhost:3000/products/" + id;

    const {data: products} = useFetch(url);

    if(!products) return <p> Carregando...</p>

  return (
    <div>
        <p>ID do produto: {products.id}</p>
        <div>
            <h1>{products.item}</h1>
            <p>R$ {products.preço}</p>
        </div>
    </div>
  )
}

export default Products