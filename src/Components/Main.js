import React from "react";
import Card from "./Card";
import Collage from "./Collage";
import Data from "../data";
import data from "../data";
import { isTemplateElement } from "@babel/types";

export default function Main(){

    const cards = Data.map(cardData => {
        return(
            <Card
                key={cardData.id}
                img={"/Images/" + cardData.coverImg}
                rating={cardData.stats.rating}
                reviewCount={cardData.stats.reviewCount}
                location={cardData.location}
                title={cardData.title}
                price={cardData.price}
                openSpots={cardData.openSpots}
            /> 
        )
    })


    return(
        <div className="Main">
            <Collage/>
            <div className="CardsList">
                {cards}
            </div>
        </div>
    )
}