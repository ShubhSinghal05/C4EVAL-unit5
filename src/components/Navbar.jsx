import React from "react";
 import {useNavigate} from "react-router-dom"
 import Action from "../redux/Action"

function Navbar(){
     const navigate = useNavigate();
     const show=Action()
    
     
    return (
        <div id="navbar">
        
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"/>
            <input type="text" placeholder="Search Google"/>
            <button className="search" onClick={()=>{
                 navigate("/Home") 
                console.log("clicked")
            }}>Search</button>

            <button onClick={()=>{
             console.log(Action())
            
            }}>Sort A-Z</button>
            
            <button onClick={()=>{
             console.log(Action())
            
            }}>Sort Z-A</button>
            <button onClick={()=>{
             console.log(Action())
            
            }}>Sort by date(Asc)</button>
            <button onClick={()=>{
             console.log(Action())
            
            }}>Sort by date(Dsc)</button>
            <button onClick={()=>{
             console.log(Action())
            
            }}>Sort by Quality(Asc)</button>
            <button onClick={()=>{
             console.log(Action())
            
            }}>Sort by Quality(Dsc)</button>
            <button onClick={()=>{
             console.log(Action())
            
            }}>Filter Expilicit</button>
            </div> 
    )
}

export default Navbar