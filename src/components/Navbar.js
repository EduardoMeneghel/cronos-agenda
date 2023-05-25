import React from 'react';

function Navbar() {
  return (
    <div className="calendar-header flex justify-between items-center calendar-bg">
        <button 
            className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            Mês Anterior
        </button>
        <h2
            className="text-5xl font-bold text-white"
        >
            Maio 2023
        </h2>
        <button 
            className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            Proximo Mês
        </button>
    </div>
  );
}

export default Navbar;