import './SideBar.css'

const SideBar = () => {
    return ( 
        <div className="sidebar">
            <div className="sidebar-result">
                <span className="sidebar-item-title">
                    8 results
                </span>

            </div>
            <div className="sidebar-category">
                <span className="sidebar-item-title">
                    Category
                </span>
                <ul className="sidebar-cat-list">
                    <li className="sidebar-cat-item">
                        <input type="radio" />
                        <span>O/L</span>
                    </li>
                    <li className="sidebar-cat-item">
                        <input type="radio" />
                        <span>A/L</span>
                    </li>
                    <li className="sidebar-cat-item">
                        <input type="radio" />
                        <span>University</span>
                    </li>
                </ul>              
            </div>
            <div className="sidebar-type">
                <span className="sidebar-item-title">
                    Material Type
                </span>
                <ul className="sidebar-type-list">
                    <li className="sidebar-type-item">
                        <input type="radio" />
                        <span>PDF</span>
                    </li>
                    <li className="sidebar-type-item">
                        <input type="radio" />
                        <span>Video</span>
                    </li>
                </ul>   
            </div>
            <div className="sidebar-posted-by">
                <span className="sidebar-item-title">
                    Posted By
                </span>
                <ul className="sidebar-posted-list">
                    <li className="sidebar-posted-item">
                        <input type="radio" />
                        <span>Anaz</span>
                    </li>
                    <li className="sidebar-posted-item">
                        <input type="radio" />
                        <span>Gowthami</span>
                    </li>
                </ul>   
            </div>           
        </div>
     );
}
 
export default SideBar;