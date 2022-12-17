import React from "react";

export default function Card(props){

    let badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT";
    }else if(props.location === "Online"){
        badgeText = "ONLINE";
    }


    return(
        <div className="Card">
            {badgeText && <div className="CardBadge">{badgeText}</div>}
            <img className="CardImage" src={props.img}/>
            <p className="CardRating">⭐{props.rating}<span className="CardRegion">({props.reviewCount}) {props.location}</span></p>
            <h5 className="CardTitle">{props.title}</h5>
            <h4 className="CardPrice">Akár €{props.price} /fő</h4>
        </div>
    )
}