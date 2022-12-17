import React from "react";

export default function Card(props){

    let badgeText;
    if(props.data.openSpots === 0){
        badgeText = "SOLD OUT";
    }else if(props.data.location === "Online"){
        badgeText = "ONLINE";
    }


    return(
        <div className="Card">
            {badgeText && <div className="CardBadge">{badgeText}</div>}
            <img className="CardImage" src={"/Images/"+props.data.coverImg}/>
            <p className="CardRating">⭐{props.data.stats.rating}<span className="CardRegion">({props.data.stats.reviewCount}) {props.data.location}</span></p>
            <h5 className="CardTitle">{props.data.title}</h5>
            <h4 className="CardPrice">Akár €{props.data.price} /fő</h4>
        </div>
    )
}