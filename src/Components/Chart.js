import React, { useState } from "react";
import "./Chart.css";

import {
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Bar,
  Area,
} from "recharts";

const DecideCntChart = (props) => {
  // console.log("data", props.data);
  const [isDecideCnt, setIsDecideCnt] = useState(true); // 확진자 수
  const [isClearCnt, setIsClearCnt] = useState(true); // 격리 해제 수
  const [isExamCnt, setIsExamCnt] = useState(true); // 검사 진행 수
  const [isDeathCnt, setIsDeathCnt] = useState(true); // 사망자 수
  const [isCareCnt, setIsCareCnt] = useState(false); // 치료중 환자 수
  const [isResutlNegCnt, setIsResutlNegCnt] = useState(false); // 결과 음성 수
  const [isAccExamCnt, setIsAccExamCnt] = useState(false); // 누적 검사 수
  const [isAccExamCompCnt, setIsAccExamCompCnt] = useState(false); // 누적 검사 완료 수
  const [isAccDefRate, setIsAccDefRate] = useState(false); // 누적 확진률
  return (
    <div className="Chart">
      <ComposedChart
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
        {isDecideCnt && (
          <Area
            type="monotone"
            dataKey="decideCnt"
            stroke="#7400B8"
            fill="#7400B8"
            name="확진자 수"
            dot={false}
          />
        )}
        {isClearCnt && (
          <Area
            type="monotone"
            dataKey="clearCnt"
            stroke="#80FFDB"
            fill="#80FFDB"
            name="격리해제 수"
            dot={false}
          />
        )}
        {isExamCnt && (
          <Line
            type="monotone"
            dataKey="examCnt"
            stroke="#6930C3"
            name="검사진행 수"
            dot={false}
          />
        )}
        {isDeathCnt && (
          <Bar
            type="monotone"
            dataKey="deathCnt"
            fill="#ff0000"
            name="사망자 수"
            dot={false}
          />
        )}
        {isCareCnt && (
          <Line
            type="monotone"
            dataKey="careCnt"
            stroke="#5E60CE"
            name="치료중 환자 수"
            dot={false}
          />
        )}
        {isResutlNegCnt && (
          <Line
            type="monotone"
            dataKey="resutlNegCnt"
            stroke="#64DFDF"
            name="결과 음성 수"
            dot={false}
          />
        )}
        {isAccExamCnt && (
          <Line
            type="monotone"
            dataKey="accExamCnt"
            stroke="#5390D9"
            name="누적 검사 수"
            dot={false}
          />
        )}
        {isAccExamCompCnt && (
          <Line
            type="monotone"
            dataKey="accExamCompCnt"
            stroke="#56CFE1"
            name="누적 검사 완료 수"
            dot={false}
          />
        )}
        {isAccDefRate && (
          <Line
            type="monotone"
            dataKey="accDefRate"
            stroke="#4EA8DE"
            name="누적 확진률"
            unit="%"
            dot={false}
          />
        )}
      </ComposedChart>
      <div className="Option">
        <div className="Checkbox">
          <input
            type="checkbox"
            checked={isDecideCnt}
            onChange={(e) => setIsDecideCnt(e.target.checked)}
          />
          확진자 수
        </div>
        <div className="Checkbox">
          <input
            type="checkbox"
            checked={isClearCnt}
            onChange={(e) => setIsClearCnt(e.target.checked)}
          />
          격리해제 수
        </div>{" "}
        <div className="Checkbox">
          <input
            type="checkbox"
            checked={isExamCnt}
            onChange={(e) => setIsExamCnt(e.target.checked)}
          />
          검사진행 수
        </div>{" "}
        <div className="Checkbox">
          <input
            type="checkbox"
            checked={isDeathCnt}
            onChange={(e) => setIsDeathCnt(e.target.checked)}
          />
          사망자 수
        </div>{" "}
        <div className="Checkbox">
          <input
            type="checkbox"
            checked={isCareCnt}
            onChange={(e) => setIsCareCnt(e.target.checked)}
          />
          치료중 환자 수
        </div>{" "}
        <div className="Checkbox">
          <input
            type="checkbox"
            checked={isResutlNegCnt}
            onChange={(e) => setIsResutlNegCnt(e.target.checked)}
          />
          결과 음성 수
        </div>
        <div className="Checkbox">
          <input
            type="checkbox"
            checked={isAccExamCnt}
            onChange={(e) => setIsAccExamCnt(e.target.checked)}
          />
          누적 검사 수
        </div>
        <div className="Checkbox">
          <input
            type="checkbox"
            checked={isAccExamCompCnt}
            onChange={(e) => setIsAccExamCompCnt(e.target.checked)}
          />
          누적 검사 완료 수
        </div>
        <div className="Checkbox">
          <input
            type="checkbox"
            checked={isAccDefRate}
            onChange={(e) => setIsAccDefRate(e.target.checked)}
          />
          누적 확진률
        </div>
      </div>
    </div>
  );
};

export default DecideCntChart;
