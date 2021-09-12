import axios from 'axios';
import { useEffect, useState } from 'react';
import MaterialList from '../material-list/MaterialList';
import SearchBar from '../search/SearchBar';
import SideBar from '../sidebar/SideBar,'
import { useLocation } from 'react-router'
import './Result.css'

const Result = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const api_uri = "https://mentorxfa.herokuapp.com/api/posts";
    const {search} = useLocation();

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await axios.get(api_uri + search);
            setPosts(res.data.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1));
            setIsLoading(false)  
        }
        fetchPosts()   
        
        return () => { setPosts([]);setIsLoading(false) };
    }, [search]);
    return ( 
        <div className="result">
            <div className="result-search-box">
                <div className="search-box">
                    <SearchBar/>
                </div>
            </div>
            <div className="content">               
                    <SideBar matCount={posts.length} />
                    <MaterialList loading={isLoading} posts={posts} />                        
            </div>            
        </div>
     );
}
 
export default Result;