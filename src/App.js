// import "Your code here";
import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    splitLaps,
    split,
    laps,
  } = useTimer(0);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={splitLaps} ref={split}>
            Splits
          </button>
        </div>
        <div className="split-timer">
          <div className="split-timer-title">
            <p className="title number-lap">Laps</p>
            <p className="title time-splited">Time</p>
            <p className="title total-time">Total</p>
          </div>
          {laps
            .slice()
            .reverse()
            .map((lap, index) => (
              <div key={index} className="lap">
                <span>{index + 1}</span>
                <span>{formatTime(lap.lapTime)}</span>
                <span>{formatTime(lap.totalTime)}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
