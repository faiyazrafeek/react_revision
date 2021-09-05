import './Material.css'

const Material = ({clickMaterial}) => {
  

    return ( 
        <div className="material" onClick={clickMaterial} >
            <h2>UOM Aptitude Test Paper 2021</h2>
            <div className="material-details">
                <span>Posted by : Ameen on </span>
                <span>12/06/2021</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit ratione quis culpa quasi expedita rerum quia ea, quae ab.
            </p>
           
        </div>
     );
}
 
export default Material;