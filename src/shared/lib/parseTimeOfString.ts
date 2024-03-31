import { MONTHS } from "../types";

export const parseTimeOfString = (timeString: string) => {
  const date = new Date(timeString);

  const months = date.getMonth();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return {
    year: date.getFullYear(),
    numberOfMonth: months,
    modifiedMonth: MONTHS[months],
    day: date.getDate(),
    hour: hours > 9 ? hours : `0${hours}`,
    minute: minutes > 9 ? minutes : `0${minutes}`,
  };
};
