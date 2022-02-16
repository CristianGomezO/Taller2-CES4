import React from "react";

interface TimerProps {
  setTimeOut: (value: boolean) => void;
  questionNumber?: number;
}

const Timer: React.FC<TimerProps> = ({ setTimeOut, questionNumber }) => {
  const [timer, setTimer] = React.useState(30);

  React.useEffect(() => {
    if (timer === 0) return setTimeOut(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

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
