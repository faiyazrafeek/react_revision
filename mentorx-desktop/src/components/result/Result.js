import { useState } from 'react';
import DetailedView from '../detailed-view/DetailedView';
import MaterialList from '../material-list/MaterialList';
import SearchBar from '../search/SearchBar';
import SideBar from '../sidebar/SideBar,'
import './Result.css'

const Result = () => {
    const [detail, setDetail] = useState(false)

    const clickMaterial = () => {
        setDetail(!detail)
    }

    return ( 
        <div className="result">
            <div className="result-search-box">
                <div className="search-box">
                    <SearchBar/>
                </div>
            </div>
            <div className="content">
                <div className="left-result">
                    <SideBar/>
                    <MaterialList clickMaterial= {clickMaterial} />
                </div>
                <div className={`right-result ${ detail ? "show" : "" }`}>
                 <DetailedView/> 
                </div>
            </div>
            
        </div>
     );
}
 
export default Result;