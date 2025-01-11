import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Nomes from './routes/Nomes.jsx'
// IMPORTANDO ERRO
import ErrorPage from './routes/ErrorPage.jsx'

import Home from './routes/Home.jsx'

//CONFIGURANDO ROUTER
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"


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
