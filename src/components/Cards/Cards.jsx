import React from "react";
import "./Cards.css";
// import { cardsData } from "../../Data/Data";

import Card from "../Card/Card";

const Cards = (props) => {
  // console.log(props.punchData);

  const power = [];
  const speed = [];
  const time = [];
  const date = [];
  const accuracy = [];

  for (const [key, value] of Object.entries(props.punchData)) {
    let totalPunches = 0;
    let blockedPunches = 0;
    value.forEach((element) => {
      power.push(element[0]);
      speed.push(element[1]);
      if (element[3] === 0) {
        blockedPunches += 1;
      }
      totalPunches += 1;
      time.push(`${key} ${element[4]}`);
      date.push(key);
    });
    accuracy.push((100 - (blockedPunches / totalPunches) * 100).toFixed(2));
  }

  const cardsData = [
    {
      title: "Punch Power",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      value: Math.max(...power),
      heading: "Max",
      unit: "N",
      series: [
        {
          name: "Punch Power",
          data: power,
        },
      ],
      barValue: props.currentPower,
    },
    {
      title: "Punch Speed",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: props.currentSpeed,
      value: Math.max(...speed),
      heading: "Max",
      unit: "Km/h",
      series: [
        {
          name: "Punch Speed",
          data: speed,
        },
      ],
    },
    {
      title: "Accuracy",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: accuracy[0],
      value: Math.max(...accuracy),
      unit: "%",
      heading: "Max",
      series: [
        {
          name: "Expenses",
          data: accuracy,
        },
      ],
    },
  ];


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
              time={time}
              date={date}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
