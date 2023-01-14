import React, { useState, useEffect } from "react";

import "../../styles/clock.css";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const desination = new Date("Oct 28, 2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = desination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (desination < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  }, []);

  return (
    <div className="clock__wrapper d-flex align-items-center gap-3">
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3">{days}</h1>
          <h5 className="text-white fs-6">أيام</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3">{hours}</h1>
          <h5 className="text-white fs-6">ساعات</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3">{minutes}</h1>
          <h5 className="text-white fs-6">دقائق</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3">{seconds}</h1>
          <h5 className="text-white fs-6">ثواني</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
