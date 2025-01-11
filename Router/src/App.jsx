import './App.css'

import { Outlet } from 'react-router-dom'

// LINK ENTRE PAGINAS
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <Outlet/>
        <h3>Footer</h3>
      </div>
    </>
  )
}

export default App
