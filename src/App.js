import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./App.css";
import Counter from "./components/Counter";
import TimeUtils from "./Utils/TimeUtils"
import {data} from "./data/data";
export default function App() {


  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds

  return (
      <div>
        {data.map((conference,index)=>{
          const remainingTime = conference.endTime - startTime;
          const days = Math.ceil(remainingTime / TimeUtils.daySeconds);
          const daysDuration = days * TimeUtils.daySeconds;

          return (<div>
            <Counter daysDuration={daysDuration}
                     remainingTime={remainingTime}
                     name={conference.name}></Counter>
          </div>)
        })}
      </div>

  );
}
