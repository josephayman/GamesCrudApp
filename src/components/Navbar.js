import { Link } from "react-router-dom"
import "../styles/App.css"
const Navbar = () => {
  return (
    <div className="nav">
        <div className="nav__logo">
            <h1>EG</h1>
        </div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/games">Games</Link>
            </li>
            <li>
                <Link to="/docs">Docs</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar