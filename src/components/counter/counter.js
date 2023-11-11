

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const TimerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  animation: timer-animation 1s infinite;
`;

const TimerAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #eee;
  }
  100% {
    background-color: #fff;
  }
`;

const TimerDisplay = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #000;
`;

const Counter = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = { ...prevTime };
        newTime.seconds++;
        if (newTime.seconds === 60) {
          newTime.seconds = 0;
          newTime.minutes++;
        }
        if (newTime.minutes === 60) {
          newTime.minutes = 0;
          newTime.hours++;
        }
        if (newTime.hours === 24) {
          newTime.hours = 0;
          newTime.days++;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimerContainer>
      <TimerDisplay>
        {time.days} days, {time.hours} hours, {time.minutes} minutes, and{" "}
        {time.seconds} seconds
      </TimerDisplay>
    </TimerContainer>
  );
};

export default Counter;
