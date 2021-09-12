import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './SideBar.css'

const SideBar = ({matCount}) => {
    const [cats, setCats] = useState([]);  
    const [users, setUsers] = useState([]);  

    const api_uri = "https://mentorxfa.herokuapp.com/api/categories";   
    const api_uri_users = "https://mentorxfa.herokuapp.com/api/users";   
    const history = useHistory();

 
    useEffect(() => {
        const fetchCats = async() => {
            const res = await axios.get(api_uri);
            const res_users = await axios.get(api_uri_users);
            setCats(res.data); 
            setUsers(res_users.data); 
           
        }
        fetchCats()   
    }, []); 

    const changeCategory = (cat) => {
        console.log(cat);
        history.push(`/result/?cat=${cat}`)
    }
    const changeUsers = (user) => {
        console.log(user);
        history.push(`/result/?user=${user}`)
    }
    return ( 
        <div className="sidebar">
            <div className="sidebar-result">
                <span className="sidebar-item-title">
                    {matCount ? matCount : '...'} results
                </span>
            </div>
            <div className="sidebar-category">
                <span className="sidebar-item-title">
                    Category
                </span>
                <ul className="sidebar-cat-list">
                    {
                        cats.map(cat => (
                            <li onChange={()=> changeCategory(cat.name)} key={cat._id} className="sidebar-cat-item">
                                <input type="radio"  name="category" value={cat.name} />
                                <span>{cat.name}</span>
                            </li>
                        ))
                    }
                </ul>              
            </div>
            {/* <div className="sidebar-type">
                <span className="sidebar-item-title">
                    Material Type
                </span>
                <ul className="sidebar-type-list">
                    <li className="sidebar-type-item">
                        <input type="radio" name="type" />
                        <span>PDF</span>
                    </li>
                    <li className="sidebar-type-item">
                        <input type="radio" name="type" />
                        <span>Video</span>
                    </li>
                </ul>   
            </div> */}
            <div className="sidebar-posted-by">
                <span className="sidebar-item-title">
                    Posted By
                </span>
                <ul className="sidebar-posted-list">
                    {
                       
                        users.map(user => (
                            <li onChange={()=> changeUsers(user.username)} key={user._id} className="sidebar-posted-item">
                                <input type="radio" name="author" value={user.username} />
                                <span>{user.username.slice(0, 1).toUpperCase() + user.username.slice(1) }</span>
                            </li>       
                        ))
                    }            
                </ul>   
            </div>           
        </div>
     );
}
 
export default SideBar;