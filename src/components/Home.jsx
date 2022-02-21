import React from "react";
import {useNavigate} from "react-router-dom"

function Home(){
    const navigate = useNavigate();
    return (
        <>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"/>
<input type="text" placeholder="Search Google" className="search-box"/>
      <input type="submit"  onClick={()=>{
                 navigate("/Navbar") 
                console.log("clicked")
            }}/>
       </>
    )
}

export default Home