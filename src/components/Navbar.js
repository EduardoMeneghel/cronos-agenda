import React from 'react';

function Navbar({ now, onPrevMonth, onNextMonth }) {
  const currentMonth = now.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }).toUpperCase();

  return (
    <div className="calendar-header flex justify-between items-center calendar-bg h-1/6">
        <div className="flex justify-center w-full w-2/6">
            <button
                className="text-5xl font-bold text-white"
                onClick={onPrevMonth}
            >
                {'<'}
            </button>
            <h2 className="text-4xl font-bold text-white flex justify-center items-center w-96 mx-8">{currentMonth}</h2>
            <button
                className="text-5xl font-bold text-white"
                onClick={onNextMonth}
            >
                {'>'}
            </button>
        </div>
        <div>

        </div>
    </div>
  );
}

export default Navbar;