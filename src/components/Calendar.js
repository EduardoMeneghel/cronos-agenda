import React from 'react';
import Navbar from './Navbar';
import '../styles/Calendar.css';

function Calendar() {
  return (
    <div className="mx-auto w-full h-full">
      {<Navbar />}
    </div>
  );
}

export default Calendar;
