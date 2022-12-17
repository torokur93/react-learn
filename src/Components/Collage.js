import React from "react";
import CollageImage from "../Images/collage.png"

export default function Collage(){
    return(
        <div>
            <img className="CollageImage" src={CollageImage}></img>
            <h1 className="CollageTitle">Online Experiences</h1>
            <h4 className="CollageText">Airbnb Experiences are in-person or online activities hosted by inspiring local experts. They go beyond typical tours or classes by immersing guests in a Host's unique world.</h4>    
        </div>
    )
}