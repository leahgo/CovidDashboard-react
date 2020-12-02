import React, { useState, useEffect } from "react";
import CovidPresenter from "./Covid.presenter";
import TestData from "../Test.xml";
import "./DatePicker.css";
import axios from "axios";

const Covid = () => {
  const [data, setData] = useState([]);

  const handleButtonClick = async () => {
    console.log("clicked");
    const url =
      "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson";
    const ServiceKey =
      "pazBdlMEQ8jBn1ovS4UfBWEMzypVRd5jPd887GygCIAQWJYJWbzAcAn3w5jaYyPN3lwpX69kUb6dl3rbeMgAww%3D%3D";
    let pageNo = "1";
    let numOfRows = "10";
    let startCreateDt = "20200101";
    let endCreateDt = "20201130";
    let tmpArr = [];

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
    console.log(response.data.response.body.items.item);
    tmpArr = response.data.response.body.items.item;
    tmpArr.reverse();
    setData(tmpArr);
    // console.log("data", data);
  };

  return <CovidPresenter data={data} handleButtonClick={handleButtonClick} />;
};

export default Covid;
