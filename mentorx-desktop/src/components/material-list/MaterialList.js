import './MaterialList.css';
import Material from '../material/Material';
import Loader from '../loader/Loader';
import { Link } from 'react-router-dom';
  
const MaterialList = ({posts, loading, searchTerm}) => {
    return ( 
        <div className="material-list">
            {
                loading ? <Loader/> :
                posts.filter((post) => {
                    if(searchTerm === ""){
                      return post
                    }else if(post.title.toLowerCase().includes(searchTerm.toLowerCase())){
                      return post
                    }
                    
                  })
                  .map(post => (
                    <Link className="link" to={`/result/${post._id}`} key={post._id} >
                        <Material loading={loading}  material={post} />
                    </Link>
                ))
            }
        </div>
     );
}
 
export default MaterialList;