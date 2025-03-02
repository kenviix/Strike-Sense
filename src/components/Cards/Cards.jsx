import React from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";

import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              heading={card.heading}
              series={card.series}
              unit={card.unit}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
