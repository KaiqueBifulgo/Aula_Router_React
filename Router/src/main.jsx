import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Nomes from './routes/Nomes.jsx'
// IMPORTANDO ERRO
import ErrorPage from './routes/ErrorPage.jsx'

import Home from './routes/Home.jsx'

// ROTA DINAMICA
import Products from './routes/Products.jsx'

// NESTED ROUTE
import Info from './routes/Info.jsx'

// SEARCH
import Search from './routes/Search.jsx'

//CONFIGURANDO ROUTER
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    // COMPONENTE BASE
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "nomes",
        element: <Nomes/>
      },
      // ROTA DINAMICA
      {
        path: "products/:id",
        element: <Products/>
      },
      // NESTED ROUTE
      {
        path: "products/:id/info",
        element: <Info/>
      },
      {
        path: "search",
        element: <Search/>
      },
      {
        path: "teste",
        element: <Navigate to="/" />
      }
    ]
  },
  // {
  //   path: "nomes",
  //   element: <Nomes/>
  // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
