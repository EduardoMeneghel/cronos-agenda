import React, { useEffect } from 'react';

export const RenderCalendar = (day, usaId) => {
  const firstDayMonth = new Date(day.getFullYear(), day.getMonth(), 1);
  const lastDayMonth = new Date(day.getFullYear(), day.getMonth() + 1, 0).getDate();
  const firstDayWeek = firstDayMonth.getDay();
  const calendar = [];

  let currentDay = 1;

  for (let i = 0; i < 6; i++) {
    const week = [];

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayWeek) {
        week.push(
          <td key={`empty-${i}-${j}`} className="p-1 border text-center bg-gray-100"></td>
        );
      } else if (currentDay <= lastDayMonth) {
        if(usaId) {
            week.push(
            <td id={`${('0' + currentDay).slice(-2)}${('0' + (day.getMonth() + 1)).slice(-2)}${day.getFullYear()}`} className="p-1 border text-center bg-white">
                {currentDay}
            </td>
            );
        } else {
            week.push(
            <td className="p-1 border text-center bg-white">
                {currentDay}
            </td>
            );
        }
        currentDay++;
      } else {
        week.push(
          <td key={`empty-${i}-${j}`} className="p-1 border text-center bg-gray-100">
            {'\u00A0'}
          </td>
        );
      }
    }

    calendar.push(
      <tr key={`week-${i}`}>
        {week}
      </tr>
    );
  }

  return calendar;
};

export const Utils = () => {
  useEffect(() => {
  }, []);

  return null;
};
