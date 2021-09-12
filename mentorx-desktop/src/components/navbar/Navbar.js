import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link className="link" to="/">
                <h2 className="nav-logo">mentorX</h2>
            </Link>
            <ul className="navlink">
                <li className="nav-item">Search</li>
                <li className="nav-item">Bookmarks</li>
                <li className="nav-item">Login</li>
            </ul>            
        </div>
     );
}
 
export default Navbar;