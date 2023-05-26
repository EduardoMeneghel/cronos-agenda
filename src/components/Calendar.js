import React, { useState } from 'react';
import Navbar from './Navbar';
import Body from './Body';
import '../styles/Calendar.css';

const Calendar = () => {
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
      <Navbar
        now={now}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <Body daysOfTheWeek={daysOfTheWeek} now={now}/>
    </div>
  );
}

export default Calendar;
