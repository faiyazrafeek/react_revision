import './MaterialList.css';
import Material from '../material/Material';
import Loader from '../loader/Loader';
import { Link } from 'react-router-dom';
  
const MaterialList = ({posts, loading}) => {
    
    return ( 
        <div className="material-list">
            {
                loading ? <Loader/> :
                posts.map(post => (
                    <Link className="link" to={`/result/${post._id}`}>
                        <Material loading={loading} key={post._id} material={post} />
                    </Link>
                ))
            }
        </div>
     );
}
 
export default MaterialList;