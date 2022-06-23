// import React,{useEffect, useRef} from 'react';
// import axios from "axios";

// export default function Weather(){
//     const weatherKey = "31066fc9d2c616068e6694e5a0e26d2b";
//     const request = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=제주&appid=${weatherKey}`).then(response=>response.data);
//     return{
//         type:WEATHER_VIEW,
//         payload: request
//     }
// }


// 아래 링크 참고
// https://velog.io/@sj-lee33/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%8A%A4%ED%84%B0%EB%94%94-6-React-openweathermap-api-%EB%A1%9C-%EA%B0%84%EB%8B%A8%ED%95%9C-%EB%82%A0%EC%94%A8-%EC%9B%B9-%EB%A7%8C%EB%93%A4%EA%B8%B0

import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
import {
  TiWeatherSunny,
  TiWeatherStormy,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherCloudy,
} from "react-icons/ti";
import { BsCloudFog } from "react-icons/bs";

const api = {
  key: "31066fc9d2c616068e6694e5a0e26d2b",
  // key: "4ce2d69a9a47b36734f7d73ad75c6785",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather({ setCold }) {
  // 날짜 가져오기
  const dateBuilder = (d) => {
    let months = [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ];
    // sunday 먼저..!!
    let days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let date = d.getDate();
    let hour = d.getHours();

    return `${year}년 ${month} ${date}일 ${day} ${hour}시`;
  };

  const city = "Jeju";
  const url = `${api.base}weather?q=${city}&appid=${api.key}`;
  const [weather, setWeather] = useState("");

  // 날씨 가져오기
  axios.get(url).then((responseData) => {
    const data = responseData.data;
    setWeather({
      id: data.weather[0].id,
      temperature: data.main.temp,
      main: data.weather[0].main,
      loading: false,
    });
  });

  setCold(weather.temperature < 290 ? true : false);

  const selectIcon = () => {
    let iconId =
      weather.id === 800 ? 0 : (parseInt(weather.id) / 100).toFixed(0);
    switch (iconId) {
      case "0":
        return <TiWeatherSunny size="6rem" color="red" />;
      case "2":
        return <TiWeatherStormy size="6rem" color="black" />;
      case "3":
        return <TiWeatherShower size="6rem" color="blue" />;
      case "5":
        return <TiWeatherDownpour size="6rem" color="navy" />;
      case "6":
        return <TiWeatherSnow size="6rem" color="#000" />;
      case "7":
        return <BsCloudFog size="6rem" color="#000" />;
      case "8":
        return <TiWeatherCloudy size="6rem" color="#000" />;
    }
  };
  return (
    <Wrapper>
      <div className="locationBox">
        <Location>{city} City, KOREA🇰🇷</Location>
        <DateDiv>{dateBuilder(new Date())}</DateDiv>
      </div>

      <div className="weatherBox">
        <Temperature>{(weather.temperature - 273.15).toFixed(2)}℃</Temperature>
        <WeatherDiv>{weather.main}</WeatherDiv>
        {selectIcon()}
      </div>
    </Wrapper>
  );
}
export default Weather;

const Wrapper = styled.div``;

const Location = styled.div`
  color: #000;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 30px;
  font-weight: 500;
  text-shadow: 2px 2px rgba(30, 50, 50, 0.5);
`;

const DateDiv = styled.div`
  color: #000;
  font-size: 15px;
  font-style: italic;
`;

const Temperature = styled.div`
  color: #000;
  font-size: 50px;
  margin-top: .1rem;
`;

const WeatherDiv = styled.div`
  color: #000;
  font-size: 20px;
  margin-top: 1rem;
`;

const WeatherIcon = styled.div``;