// src/AnalogClock.js
import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css"; // Import CSS for the clock

function AnalogClock({ speed }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate((prevDate) => {
        const newDate = new Date(prevDate.getTime() - 1000 / speed);
        return newDate;
      });
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div style={{ width: "200px", height: "200px", margin: "auto" }}>
      <Clock value={date} />
    </div>
  );
}

export default AnalogClock;
