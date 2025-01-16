import './App.css'

import { Outlet } from 'react-router-dom'

// LINK ENTRE PAGINAS
import NavBar from './components/NavBar'

import SearchForm from './components/SearchForm'

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <SearchForm/>
        <Outlet/>
        <h3>Footer</h3>
      </div>
    </>
  )
}

export default App
