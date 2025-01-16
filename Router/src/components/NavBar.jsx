import { Link, NavLink } from "react-router-dom"

import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
        {/* <Link to={"/"}>Home</Link>
        <Link to={"/nomes"}>Nomes</Link> */}
        {/* LINK ATIVO */}
        <NavLink to={"/"} className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to={"/nomes"} className={({isActive}) => (isActive ? "active" : "")}>Nomes</NavLink>
    </div>
  )
}

export default NavBar