import React from "react";
import { Link } from "react-router-dom"

function Home(){
    return (
        <div>
            <h1 style = {{ color: "white", fontSize: "50px", fontFamily: "Calibri",  backgroundColor: "black", marginTop:"60px"}}>Home</h1>
            <Link to= "/registry" style = {{textDecoration: "none", color: "white", fontFamily: "Calibri", textAlign: "center"}}>Click here to go to registry</Link>
        </div>
    )
}

export default Home;