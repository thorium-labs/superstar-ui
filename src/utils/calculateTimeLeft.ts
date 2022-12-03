import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

export interface timerState {
  hours: string | number;
  minutes: string | number;
  seconds: string | number;
}

export const initTimerValues = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export const calculateTimeLeft = (startAt: Date) => {
  if (startAt < new Date()) return initTimerValues;
  const now = new Date();
  const hours = differenceInHours(startAt, now);
  const minutes = differenceInMinutes(startAt, now) % 60;
  const seconds = differenceInSeconds(startAt, now) % 60;
  return { hours, minutes, seconds };
};
