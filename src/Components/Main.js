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
                {...cardData}
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