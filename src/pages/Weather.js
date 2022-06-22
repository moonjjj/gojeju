// import React,{useEffect, useRef} from 'react';
import axios from "axios";

export default function Weather(){
    const weatherKey = "31066fc9d2c616068e6694e5a0e26d2b";
    const request = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=제주&appid=${weatherKey}`).then(response=>response.data);
    return{
        type:WEATHER_VIEW,
        payload: request
    }
}