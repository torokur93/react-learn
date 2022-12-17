import React from "react";

export default function Card(props){
    return(
        <div className="Card">
            <img className="CardImage" src={props.img}/>
            <p className="CardRating">⭐{props.rating}<span className="CardRegion">({props.reviewCount}) {props.country}</span></p>
            <h5 className="CardTitle">{props.title}</h5>
            <h4 className="CardPrice">Akár €{props.price} /fő</h4>
        </div>
    )
}