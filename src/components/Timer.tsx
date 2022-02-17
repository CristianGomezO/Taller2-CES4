/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

interface TimerProps {
  stopTimer: boolean | undefined;
  questionNumber?: number;
  setTimeOut: (value: boolean) => void;
}

const Timer: React.FC<TimerProps> = ({ setTimeOut, questionNumber, stopTimer }) => {
  const [timer, setTimer] = React.useState(30);
  let interval:any = {};

  React.useEffect(() => {
    if (timer === 0) return setTimeOut(true);
    interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

  React.useEffect(() => {
    if (stopTimer) {
      clearInterval(interval);
    } 
  }, [stopTimer, interval]);

  React.useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return (
    <div className="questionTimer">
      <div className="timer-text">{timer}</div>
    </div>
  );
};

export default Timer;
