import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/SearchBar'

import './Home.css'

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [cats, setCats] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const api_uri = "https://mentorxfa.herokuapp.com/api/posts";
    const api_uri_cat = "https://mentorxfa.herokuapp.com/api/categories";
    

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await axios.get(api_uri);
            const res_cats = await axios.get(api_uri_cat);
            
            setPosts(res.data.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1));
            setCats(res_cats.data)
            setIsLoading(false)  
        }
        fetchPosts()   
        
        return () => { setPosts([]);setIsLoading(false) };
    }, []);
    return ( 
        <div className="home">
            <h1>Welcome to mentorX</h1>
            <h3>Search for and Download materials</h3>
            <div className="home-search-box">
                {/* <input type="text" />
                <button className="home-search-btn">Search</button> */}
                <SearchBar/>
            </div>
            <div className="categories">                
                <ul>
                    { 
                        cats.map(cat => (
                            <Link className="link" to={`/result/?cat=${cat.name}`}>
                            <li key={cat._id} className="home-category-item">{cat.name}</li>
                            </Link>
                        ))
                    }                    
                </ul>
            </div>
        </div>
     );
}
 
export default Home;