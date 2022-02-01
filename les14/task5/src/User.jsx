import React, { useEffect, useState } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ offset, location }) => {
  const [timeData, setTime] = useState({ time: getTimeWithOffset(offset) });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime({ time: getTimeWithOffset(offset) });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timeData]);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{moment(timeData.time).format('LTS')}</div>
    </div>
  );
};

export default Clock;
