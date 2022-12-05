import React, { Component, useState, useEffect } from "react";
import "./App.css";
import "./Clock.tsx";

export default function App() {
  function pad(num: number) {
    return ("0" + num).slice(-2);
  }
  const [date, setDate] = useState(new Date());

  function updateClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerID = setInterval(updateClock, 1000);
    return function clearTimerID() {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="App">
      <div className="Date">
        <div>{date.getMonth()}</div>-<div>{date.getDate()}</div>-
        <div>{date.getFullYear()}</div>
      </div>

      <div className="Clock">
        <div>{date.getHours()}</div>:<div>{pad(date.getMinutes())}</div>:
        <div>{pad(date.getSeconds())}</div>
      </div>
    </div>
  );
}
