import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";




// parent Card

const Card = (props) => {

  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {

  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        {param.title === "Accuracy" ? <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        /> : <span >{param.barValue} {param.unit}</span>}

        <span>{param.title}</span>
      </div>
      <div className="detail">
        <span>{param.heading}</span>
        <span>{param.value} {param.unit}</span>
        <span></span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const time = param.time
  const date = param.date
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      // fill: {
      //   colors: ["#fff"],
      //   type: "gradient",
      // },

      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        show: true,
      },
      xaxis: param.title === "accuracy" ? {
        categories: time
      } : {
        categories: date
      },

    },
  };


  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart options={data.options} series={param.series} type="area" />
      </div>

      {/* <Chart options={data.options} series={series} type="area" /> */}
    </motion.div>
  );
}

export default Card;
