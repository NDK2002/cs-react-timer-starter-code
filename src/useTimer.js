import { useState, useRef, useEffect } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  const [laps, setLaps] = useState([]);
  const [previousTime, setPreviousTime] = useState(0);

  const isStart = useRef(false);
  const active = useRef();
  const refInterval = useRef();
  const split = useRef();

  useEffect(() => {
    split.current.disabled = true;
  }, []);

  const startTimer = () => {
    split.current.disabled = false;
    isStart.current = true;
    active.current.disabled = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((prevTime) => prevTime + 1);
      }
    }, 1000);
  };
  const stopTimer = () => {
    split.current.disabled = true;
    isStart.current = false;
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    split.current.disabled = true;
    setTime(0);
    setLaps([]);
    setPreviousTime(0);
    isStart.current = false;
    active.current.disabled = false;
  };

  const splitLaps = () => {
    const lapTime = time - previousTime;
    setLaps([...laps, { lapTime, totalTime: time }]);
    setPreviousTime(time);
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    split,
    splitLaps,
    laps,
  };
};
export default useTimer;
