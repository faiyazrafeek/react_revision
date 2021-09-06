import './Material.css'
import { BsBookmark } from "react-icons/bs";


const Material = ({material}) => {
 
    return ( 
        <div className="material">
            <h2>{material.title}  </h2>
            <div className="material-details">
                <span>Posted by : {material.username} </span>
                {/* <span>{new Date(material.createdAt).toLocaleDateString()}</span> */}
            </div>
            
            <p>{material.desc}</p>
            <div className="material-footer">
                <BsBookmark />             
            </div>
        </div>
     );
}
 
export default Material;