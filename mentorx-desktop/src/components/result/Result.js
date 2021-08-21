import MaterialList from '../material-list/MaterialList';
import SearchBar from '../search/SearchBar';
import SideBar from '../sidebar/SideBar,'
import './Result.css'

const Result = () => {
    return ( 
        <div className="result">
            <div className="result-search-box">
                <div className="search-box">
                    <SearchBar/>
                </div>
            </div>
            <div className="content">
                <SideBar/>
                <MaterialList/>
            </div>
        </div>
     );
}
 
export default Result;