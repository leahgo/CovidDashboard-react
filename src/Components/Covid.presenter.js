import React, { useState } from "react";
import "./Covid.css";
import Chart from "./Chart";
import DatePicker from "react-date-picker";
const Covid = (props) => {
  const [startDt, setStartDt] = useState(new Date());
  const [endDt, setEndDt] = useState(new Date());

  return (
    <div className="Main">
      <div className="Toolbar">
        <h1>Covid 19</h1>
      </div>
      <div className="Content">
        <div className="Date">
          <DatePicker
            name="startCreateDt"
            onChange={setStartDt}
            value={startDt}
          />
          ~
          <DatePicker name="endCreateDt" onChange={setEndDt} value={endDt} />
          <button onClick={props.handleButtonClick}>Submit</button>
        </div>
        <Chart data={props.data} />
      </div>
    </div>
  );
};

export default Covid;
