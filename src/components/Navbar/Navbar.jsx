import './Navbar.css'
import { Link } from "react-router-dom"

const NavBar = ()=>{
  return (
    <nav className="nav-bar">
      <div>
        <a>Home</a>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar;