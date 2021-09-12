import React, { useEffect, useState } from 'react'
import './DetailedView.css'
import { BsX } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";

export default function DetailedView() {

    const api_uri = "https://mentorxfa.herokuapp.com/api";   
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [material, setMaterial] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [bookmark, setBookmark] = useState(false);

    const history = useHistory();
   
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(api_uri+"/posts/" + path);
            setMaterial(res.data);  
            setTitle(res.data.title)
            setDesc(res.data.desc)          
            setUrl(res.data.url)           
        }
        getPost();      
    }, [path])

    const downloadMaterial = () => {
        window.open(url)
    }

    const addtoBookmark = () => {
        setBookmark(!bookmark)
    }

    return (
        <div className="detailed-view">
            <div className="detail-header">
                <Link className="link" to="/result"><BsX/></Link>
            </div>
            <div className="detail-body">
                <h2>{material.title}  </h2>
                <div className="detail-body-details">
                    <Link className="link" to={`/result/?user=${material.username}`}>Posted by : {material.username} </Link>
                    <span>{new Date(material.createdAt).toLocaleDateString()}</span>
                </div>
                
                <p>{material.desc}</p>
                <div className="detail-footer">
                    <button onClick={downloadMaterial} className="detail-download"> Download <FaCloudDownloadAlt/></button>                               
                    <button onClick={addtoBookmark} className="detail-library"> { !bookmark ? `Add to Bookmarks` : 'Remove from Bookmark' } <VscLibrary/></button>                               
                </div>
            </div>
        </div>
    )
}
