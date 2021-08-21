import './Navbar.css'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h2 className="nav-logo">mentorX</h2>
            <ul className="navlink">
                <li className="nav-item">Search</li>
                <li className="nav-item">Bookmarks</li>
                <li className="nav-item">Faiyaz Rafeek</li>
            </ul>            
        </div>
     );
}
 
export default Navbar;