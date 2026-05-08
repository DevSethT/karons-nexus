import { useEffect, useState } from "react";
import "./Clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="clock__container">
      <h2 className="clock__date">
        TODAY is <span className="clock__day">{time.toLocaleDateString()}</span>
      </h2>
      <p className="clock__text">The curent time is:</p>
      <h2 className="clock__time" id="clock">
        {time.toLocaleTimeString()}
      </h2>
    </div>
  );
}

export default Clock;
