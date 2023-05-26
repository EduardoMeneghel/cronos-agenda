import React from 'react';
import { RenderCalendar } from '../utils/Utils';

function Body(props) {
  const { daysOfTheWeek, now } = props;
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1);
  const nextMonthName = nextMonth.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }).toUpperCase();

  return (
    <div className="flex h-5/6">
      <div className="block bg-white">
        <div className="p-6 bg-gray-200 border">
            <p className="text-center mb-3">
                {nextMonthName}
            </p>
            <table>
                <thead>
                    <tr>
                        {daysOfTheWeek.map((day) => (
                        <th key={day} className="p-2 border text-center">
                            {day}
                        </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {RenderCalendar(nextMonth, false)}
                </tbody>
            </table>
        </div>
      </div>
      <div className="w-10/12 bg-blue-500">
        <div className="w-full h-full">
          <table className="w-full h-full">
            <thead>
              <tr>
                {daysOfTheWeek.map((day) => (
                    <th key={day} className="p-2 border text-center">
                        {day}
                    </th>
                ))}
              </tr>
            </thead>
            <tbody>
                {RenderCalendar(now, true)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Body;
