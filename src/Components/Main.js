import React from "react";
import Card from "./Card";
import Collage from "./Collage";
import Data from "../data";
import data from "../data";

export default function Main(){

    const cards = Data.map(cardData => {
        return(
            <Card
                img={"/Images/" + cardData.coverImg}
                rating={cardData.stats.rating}
                reviewCount={cardData.stats.reviewCount}
                country={cardData.location}
                title={cardData.title}
                price={cardData.price}
            /> 
        )
    })


    return(
        <div className="Main">
            <Collage/>
            {cards}
        </div>
    )
}