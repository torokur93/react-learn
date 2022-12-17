import React from "react";
import CardImage from "../Images/airbnb-card.webp"

export default function Card(){
    return(
        <div className="Card">
            <img className="CardImage" src={CardImage}/>
            <p className="CardRating">⭐4,99<span className="CardRegion">(156) Egyesült államok</span></p>
            <h5 className="CardMotto">Tervezd meg a tökéletes New York-i nyaralást</h5>
            <h4 className="CardPrice">Akár €18 /fő</h4>
        </div>
    )
}