import './SearchBar.css'
import { Link } from 'react-router-dom'

const SearchBar = ({term}) => {
    return ( 
        <div className="search-bar">
            <input type="text"  id="search" onChange={term} />
            <Link to="/result">
                <button className="search-btn">Search</button>            
            </Link>
        </div>
     );
}
 
export default SearchBar;