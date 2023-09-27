/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekDays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(weekDay: string): boolean {
  const isSaturday = weekDay === "Saturday";
  const isSunday = weekDay === "Sunday";

  if (isSaturday || isSunday) return true;

  return false;
}
