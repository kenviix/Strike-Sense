import { useEffect, useState } from "react";
import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import { punchData } from "./Data/Data";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/userData")
      .then((res) => res.json())
      .then((data) => {
        const records = data.All_records;
        for (const [key, value] of Object.entries(records)) {
          const mainKey = value.timestamp.S.substring(0, 11);
          const data = [];
          data.push(value["Punch Speed (km/h)"].N);
          data.push(value["Punch Speed (km/h)"].N);
          data.push(value["Punch Id"].N);
          data.push(value["Punch Id"].N);
          punchData[mainKey] = data;
        }
        console.log(punchData);
      });
  }, []);

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
