"use client";
import React, { useEffect, useState } from "react";

interface RegistrationCountdowmProps {
  targetDate: Date | string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

function calculateTimeLeft(targetTime: number, now: number): TimeLeft {
  const difference = targetTime - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
  };
}

const RegistrationCountdowm = ({ targetDate }: RegistrationCountdowmProps) => {
  const targetTime =
    typeof targetDate === "string"
      ? new Date(targetDate).getTime()
      : targetDate.getTime();

  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeLeft = calculateTimeLeft(targetTime, now);

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <div className="flex flex-col items-start md:items-end justify-end">
      <div className="flex items-end justify-center space-x-2.5 font-display text-3 sm:text-[22px] font-bold text-primary-800">
        <div className="flex flex-col items-center justify-center">
          <span className="md:text-sm text-[10px] text-neutral-1000">Days</span>
          <span className="bg-transparent text-[32px] md:text-[46px]">{formatTime(timeLeft.days)}</span>
        </div>
        <span className="font-normal text-[32px] md:text-[46px]">:</span>
        <div className="flex flex-col items-center justify-center">
          <span className="md:text-sm text-[10px] text-neutral-1000">Hours</span>
          <span className="bg-transparent text-[32px] md:text-[46px]">{formatTime(timeLeft.hours)}</span>
        </div>
        <span className="font-normal text-[32px] md:text-[46px]">:</span>
        <div className="flex flex-col items-center justify-center">
          <span className="md:text-sm text-[10px] text-neutral-1000">Minutes</span>
          <span className="bg-transparent text-[32px] md:text-[46px]">{formatTime(timeLeft.minutes)}</span>
        </div>
      </div>
      <span className="md:text-base text-xs text-neutral-1000">Until Close Registration</span>
    </div>
  );
};

export default RegistrationCountdowm;
