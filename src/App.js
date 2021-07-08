import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./App.css";
import Counter from "./components/Counter";
import TimeUtils from "./Utils/TimeUtils"
export default function App() {
  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const VIS2022endTime = 1631160000; // use UNIX timestamp in seconds
  const remainingTime = VIS2022endTime - startTime;
  const days = Math.ceil(remainingTime / TimeUtils.daySeconds);
  const daysDuration = days * TimeUtils.daySeconds;

  return (
     <Counter daysDuration={daysDuration} remainingTime={remainingTime}></Counter>
  );
}
