import React from "react";
import "./GenAge.css";

import { PieChart, Pie } from "recharts";

const GenAge = (props) => {
  return (
    <div className="Main">
      <PieChart width={1000} height={500}>
        <Pie
          data={props.ageData}
          dataKey="death"
          nameKey="gubun"
          cx="30%"
          cy="50%"
          label={(entry) => entry.name}
          outerRadius={130}
          fill="#8884d8"
        />
        <Pie
          data={props.genData}
          dataKey="death"
          nameKey="gubun"
          cx="70%"
          cy="50%"
          label={(entry) => entry.name}
          outerRadius={130}
          fill="#114399"
        />
      </PieChart>
    </div>
  );
};

export default GenAge;
