import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./netflix.css"
function Header() {
    const [banner, setbanner] = useState([])
    const img_baseURL="https://image.tmdb.org/t/p/original"
    const API_KEY ="65677f134de4f91db0fb0baae5c6889d";

    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((response)=>{
        
            console.log(response.data.results)
            setbanner(response.data.results[Math.floor(Math.random()* response.data.results.length)])
        })
    },[])

  
  return (
    <>
    <header 
        style={{
          backgroundImage: `url(${img_baseURL}${banner.backdrop_path})`,height:"100vh",backgroundSize:"cover"
        }}>
<div className="head">
<img src="src/Netflix/images/netflix-logo.png" alt="" />
</div>
<div className="second-head">
    <img src="src/Netflix/images/green-blue-emoji.png" alt="" />
</div>


    </header>
    <div
       
      >
      
      </div>
    </>
  )
}

export default Header