import React, { useState } from 'react';
import MonthSwitcher from './MonthSwitcher';
import Calendar from './Calendar';
import '../styles/Calendar.css';

const Main = () => {
  const daysOfTheWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const [now, setNow] = useState(new Date());
  const handlePrevMonth = () => {
    const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    setNow(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
    setNow(nextMonth);
  };

  return (
    <div className="mx-auto w-full h-screen">
      <MonthSwitcher now={now} onPrevMonth={handlePrevMonth} onNextMonth={handleNextMonth}/>
      <Calendar daysOfTheWeek={daysOfTheWeek} now={now}/>
    </div>
  );
}

export default Main;
