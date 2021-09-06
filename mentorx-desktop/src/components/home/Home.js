import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchBar from '../search/SearchBar'

import './Home.css'

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const api_uri = "https://mentorxfa.herokuapp.com/api/posts";
    

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await axios.get(api_uri);
            
            setPosts(res.data.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1));
            setIsLoading(false)  
        }
        fetchPosts()   
        
        return () => { setPosts([]);setIsLoading(false) };
    }, []);
    console.log(posts);
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
                    <li className="home-category-item">A/L</li>
                    <li className="home-category-item">O/L</li>
                    <li className="home-category-item">General</li>
                    <li className="home-category-item">University</li>
                    <li className="home-category-item">English</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Home;