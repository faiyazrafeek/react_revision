import './SearchBar.css'
import { Link } from 'react-router-dom'

const SearchBar = () => {
    return ( 
        <div className="search-bar">
            <input type="text" />
            <Link to="/result">
                <button className="search-btn">Search</button>            
            </Link>
        </div>
     );
}
 
export default SearchBar;