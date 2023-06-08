import React, { useState } from 'react';
import { RenderCalendar } from '../utils/Utils';
import Configurations from './Configurations';
import user from '../images/user.png';
import settings from '../images/settings.png';

const Calendar = (props) => {
  const { daysOfTheWeek, now } = props;
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1);
  const nextMonthName = nextMonth.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }).toUpperCase();

  const [showConfigurations, setshowConfigurations] = useState(false);

  const toggleConfigurations = () => {
    setshowConfigurations(!showConfigurations);
  };
  
  return (
    <div className="flex h-5/6">
      <div className="relative flex-1 bg-white">
        <div className="p-6 bg-gray-200 border">
          <p className="text-center mb-3">{nextMonthName}</p>
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
            <tbody>{RenderCalendar(nextMonth, false)}</tbody>
          </table>
        </div>
        <div></div>
        <div className="absolute bottom-0 w-full">
          {showConfigurations && <Configurations />}
          <div className="bg-white flex justify-between p-4">
            <img src={user} className="w-8 inline-block rounded-full" alt="User" />
            <p className="inline-block font-bold">CRONOS AGENDA</p>
            <img
              src={settings}
              className="w-8 inline-block"
              alt="Settings"
              onClick={toggleConfigurations}
            />
          </div>
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
            <tbody>{RenderCalendar(now, true)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Calendar;