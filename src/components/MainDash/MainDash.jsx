import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = (props) => {
  // console.log(props.punchData);

  return (
    <div className="MainDash">
      <h1>Punch Analysis</h1>
      <Cards punchData={props.punchData} />
      <Table punchData={props.punchData} />
    </div>
  );
};

export default MainDash;
