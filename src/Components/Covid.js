import React, { useState } from "react";
import CovidPresenter from "./Covid.presenter";
import axios from "axios";
import moment from "moment";

const Covid = () => {
  const [lineChartData, setLineChartData] = useState([]);
  const [ageData, setAgeData] = useState([]);
  const [genData, setGenData] = useState([]);
  const handleButtonClick = (startDt, endDt) => {
    console.log(startDt, endDt);

    setLineChart(startDt, endDt);
    setGenAgeCase(startDt, endDt);
  };

  const setLineChart = async (startDt, endDt) => {
    // console.log("clicked");
    console.log(
      "startDt:" +
      moment(startDt).format("YYYYMMDD") +
      "/endDt:" +
      moment(endDt).format("YYYYMMDD")
    );
    const url =
      "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson";
    const ServiceKey =
      "pazBdlMEQ8jBn1ovS4UfBWEMzypVRd5jPd887GygCIAQWJYJWbzAcAn3w5jaYyPN3lwpX69kUb6dl3rbeMgAww%3D%3D";
    let pageNo = "1";
    let numOfRows = "10";
    let startCreateDt = moment(startDt).format("YYYYMMDD");
    let endCreateDt = moment(endDt).format("YYYYMMDD");
    let tmpArr = [];

    console.log(
      "url",
      url +
      "?ServiceKey=" +
      ServiceKey +
      "&pageNo=" +
      pageNo +
      "&numOfRows=" +
      numOfRows +
      "&startCreateDt=" +
      startCreateDt +
      "&endCreateDt=" +
      endCreateDt
    );

    const response = await axios.get(
      url +
      "?ServiceKey=" +
      ServiceKey +
      "&pageNo=" +
      pageNo +
      "&numOfRows=" +
      numOfRows +
      "&startCreateDt=" +
      startCreateDt +
      "&endCreateDt=" +
      endCreateDt
    );
    // console.log(response.data);

    if (response.data.response.header.resultCode === "00") {
      if (response.data.response.body.items.length !== 0) {
        tmpArr = response.data.response.body.items.item;
        if (tmpArr.length > 1) {
          tmpArr.reverse();
        } else {
          tmpArr = [];
          tmpArr.push(response.data.response.body.items.item);
        }

        tmpArr.sort((a, b) => {
          return a.createDt < b.createDt ? -1 : a.createDt > b.createDt ? 1 : 0
        })
        setLineChartData(tmpArr);
      } else {
        console.log(
          "error : ",
          response.data.response.header.resultCode,
          response.data.response.header.resultMsg
        );
      }
    }
    // console.log("data", data);
  };

  const setGenAgeCase = async (startDt, endDt) => {
    console.log(
      "startDt:" +
      moment(startDt).format("YYYYMMDD") +
      "/endDt:" +
      moment(endDt).format("YYYYMMDD")
    );
    const url =
      "/openapi/service/rest/Covid19/getCovid19GenAgeCaseInfJson";
    const ServiceKey =
      "pazBdlMEQ8jBn1ovS4UfBWEMzypVRd5jPd887GygCIAQWJYJWbzAcAn3w5jaYyPN3lwpX69kUb6dl3rbeMgAww%3D%3D";
    let pageNo = "1";
    let numOfRows = "10";
    let startCreateDt = moment(startDt).format("YYYYMMDD");
    let endCreateDt = moment(endDt).format("YYYYMMDD");
    let tmpArr = [];

    console.log(
      "url",
      url +
      "?ServiceKey=" +
      ServiceKey +
      "&pageNo=" +
      pageNo +
      "&numOfRows=" +
      numOfRows +
      "&startCreateDt=" +
      startCreateDt +
      "&endCreateDt=" +
      endCreateDt
    );

    const response = await axios.get(
      url +
      "?ServiceKey=" +
      ServiceKey +
      "&pageNo=" +
      pageNo +
      "&numOfRows=" +
      numOfRows +
      "&startCreateDt=" +
      endCreateDt +
      "&endCreateDt=" +
      endCreateDt,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json; charset = utf-8'
        }
      }
    );
    console.log(response.data);

    if (response.data.response.header.resultCode === "00") {
      let tmpAge = [];
      let tmpGen = [];
      // console.log(response.data.response.body.items.length);
      if (response.data.response.body.items.length !== 0) {
        tmpArr = response.data.response.body.items.item;
        if (tmpArr === []) return;
        if (tmpArr.length > 1) tmpArr.reverse();

        tmpArr.map((i) => {
          if (i.gubun === "여성" || i.gubun === "남성") {
            tmpGen.push(i);
          } else {
            tmpAge.push(i);
          }
          // console.log("tmpGen", tmpGen);
          // console.log("tmpAge", tmpAge);
          setAgeData(tmpAge);
          setGenData(tmpGen);
        });
      }
    }
  };

  return (
    <CovidPresenter
      lineChartData={lineChartData}
      genData={genData}
      ageData={ageData}
      handleButtonClick={handleButtonClick}
    />
  );
};

export default Covid;
