import React, { useState } from "react";
import "./Covid.css";
import Chart from "./Chart";
import DatePicker from "react-datepicker";
import GenAge from "./GenAge";
import "./react-datepicker.css";
import { ko } from "date-fns/esm/locale";

const Covid = (props) => {
  const [page, setPage] = useState("Home");
  const [startDt, setStartDt] = useState(
    new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
  );
  const [endDt, setEndDt] = useState(new Date());

  return (
    <div className="Main">
      <div className="Toolbar">
        <h1>코로나19 실시간 상황판</h1>
        <h1>Covid-19 Dashboard</h1>
        <h2> ※ 그래프가 보이지 않는 경우 브라우저에서 '안전하지 않은 콘텐츠 : 허용'으로 바꿔주세요.\n https 연결중인 github.io에서 공공데이터 포털 http를 호출할 때 발생하는 오류입니다.</h2>
      </div>
      <div className="Navigation">
        <button
          className="btnNav"
          onClick={() => {
            setPage("Home");
          }}
        >
          Home
        </button>
        <button className="btnNav" onClick={() => setPage("GenAgeCase")}>
          성별/연령별
        </button>
      </div>
      <div className="Content">
        {page === "Home" ? (
          <div className="Middle">
            <div className="Date">
              <DatePicker
                locale={ko} // 언어설정 기본값은 영어
                dateFormat="yyyy/MM/dd" // 날짜 형식 설정
                className="react-datepicker" // 클래스 명 지정 css주기 위해
                maxDate={new Date()} // 선택할 수 있는 최소 날짜값 지정
                closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                placeholderText="시작일자" // placeholder
                selected={startDt} // value
                onChange={(date) => setStartDt(new Date(date))} // 날짜를 선택하였을 때 실행될 함수
              />
              ~
              <DatePicker
                locale={ko} // 언어설정 기본값은 영어
                dateFormat="yyyy/MM/dd" // 날짜 형식 설정
                className="react-datepicker" // 클래스 명 지정 css주기 위해
                maxDate={new Date()} // 선택할 수 있는 최소 날짜값 지정
                closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                placeholderText="시작일자" // placeholder
                selected={endDt} // value
                onChange={(date) => setEndDt(new Date(date))} // 날짜를 선택하였을 때 실행될 함수
              />
              <button
                className="btnSearch"
                onClick={() => props.handleButtonClick(startDt, endDt)}
              >
                검색
              </button>
            </div>
            <Chart data={props.lineChartData} />
          </div>
        ) : (
          <div>
            <h3>기준일자 : {endDt.toString()}</h3>
            <GenAge genData={props.genData} ageData={props.ageData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Covid;
