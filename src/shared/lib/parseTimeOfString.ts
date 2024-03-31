export const parseTimeOfString = (timeString: string) => {
  const dateTime = new Date(timeString);

  const MONTHS: { [x: number]: string } = {
    0: "Январь",
    1: "Февраль",
    2: "Март",
    3: "Апрель",
    4: "Май",
    5: "Июнь",
    6: "Июль",
    7: "Август",
    8: "Сентябрь",
    9: "Октябрь",
    10: "Ноябрь",
    11: "Декабрь",
  };

  return {
    year: dateTime.getFullYear(),
    modifiedMonth: MONTHS[dateTime.getMonth()], // Используем строку для доступа к месяцу
    day: dateTime.getDate(),
    hour: dateTime.getHours(),
    minute: dateTime.getMinutes(),
  };
};
