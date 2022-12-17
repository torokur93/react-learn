import React from "react";
import Card from "./Card";
import Collage from "./Collage";

export default function Main(){
    return(
        <div className="Main">
            <Collage/>
            <Card
                img="/Images/airbnb-card.webp"
                rating="5.0"
                reviewCount={150}
                country="USA"
                title="hát befosol olyan jó"
                price={9900}
            />
            <Card
                img="/Images/airbnb-card.webp"
                rating="10.0"
                reviewCount={99}
                country="Japan"
                title="ez a legjobb akkor is"
                price={100}
            />
        </div>
    )
}