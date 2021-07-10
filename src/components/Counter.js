import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../App.css";
import TimeUtils from "../Utils/TimeUtils"


const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
};

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
    );
};

export default function Counter(props) {
    const {daysDuration,remainingTime,name,date,weeks} = props
    return (
        <div className="App">

            <h2>{name} : {date.toLocaleString()} </h2>
            <h2>{weeks} weeks left</h2>

            <CountdownCircleTimer
                {...timerProps}
                colors={[["#7E2E84"]]}
                duration={daysDuration}
                initialRemainingTime={remainingTime}
            >
                {({ elapsedTime }) =>
                    renderTime("days", TimeUtils.getTimeDays(daysDuration - elapsedTime))
                }
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors={[["#D14081"]]}
                duration={TimeUtils.daySeconds}
                initialRemainingTime={remainingTime % TimeUtils.daySeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > TimeUtils.hourSeconds
                ]}
            >
                {({ elapsedTime }) =>
                    renderTime("hours", TimeUtils.getTimeHours(TimeUtils.daySeconds - elapsedTime))
                }
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors={[["#EF798A"]]}
                duration={TimeUtils.hourSeconds}
                initialRemainingTime={remainingTime % TimeUtils.hourSeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > TimeUtils.minuteSeconds
                ]}
            >
                {({ elapsedTime }) =>
                    renderTime("minutes", TimeUtils.getTimeMinutes(TimeUtils.hourSeconds - elapsedTime))
                }
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors={[["#218380"]]}
                duration={TimeUtils.minuteSeconds}
                initialRemainingTime={remainingTime % TimeUtils.minuteSeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > 0
                ]}
            >
                {({ elapsedTime }) =>
                    renderTime("seconds", TimeUtils.getTimeSeconds(elapsedTime))
                }
            </CountdownCircleTimer>
        </div>
    );
}
