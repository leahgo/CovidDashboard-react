import React from "react";
import "./Chart.css";

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const DecideCntChart = (props) => {
  return (
    <div className="Chart">
      <LineChart
        width={900}
        height={500}
        data={props.data}
        // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="stateDt" domain={["auto", "auto"]} />
        <YAxis domain={["auto", "auto"]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="decideCnt"
          stroke="#8884d8"
          name="확진자 수"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="clearCnt"
          stroke="#003882"
          name="격리해제 수"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="examCnt"
          stroke="#007682"
          name="검사진행 수"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="careCnt"
          stroke="#985993"
          name="치료중 환자 수"
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default DecideCntChart;
