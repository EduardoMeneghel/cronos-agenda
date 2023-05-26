import React, { useEffect } from 'react';
import { RenderCalendar } from '../utils/Utils';

function Body(props) {
  const { daysOfTheWeek, now } = props;

  useEffect(() => {
    getEventsOfMonth();
  }, []);

  function getEventsOfMonth() {
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const startOfMonth = currentYear + '-' + (currentMonth + 1).toString().padStart(2, '0') + '-01';
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const endOfMonth = currentYear + '-' + (currentMonth + 1).toString().padStart(2, '0') + '-' + lastDayOfMonth.toString().padStart(2, '0');

    fetch('http://localhost:3002/events/monthly', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "start_datetime": startOfMonth,
        "end_datetime": endOfMonth
      })
    })
      .then(response => response.json())
      .then(datas => {
        datas.forEach(function (data) {
          const startDate = new Date(data.dt_start_datetime);
          const endDate = new Date(data.dt_end_datetime);

          const diaInicio = String(startDate.getDate()).padStart(2, '0');
          const mesInicio = String(startDate.getMonth() + 1).padStart(2, '0');
          const anoInicio = String(startDate.getFullYear());

          const diaFim = String(endDate.getDate()).padStart(2, '0');

          const diaInicioNum = parseInt(diaInicio);
          const diaFimNum = parseInt(diaFim);

          for (let dia = diaInicioNum; dia <= diaFimNum; dia++) {
            const diaFormatado = String(dia).padStart(2, '0');
            const dataFormatada = diaFormatado + mesInicio + anoInicio;
            const elementoPai = document.getElementById(dataFormatada);

            if (elementoPai) {
              const divEvento = document.createElement("div");
              divEvento.classList.add("m-1", "event-view");
              divEvento.onclick = function () {
                playMusic();
              };

              if (data.ds_color) {
                divEvento.style.backgroundColor = data.ds_color;
              } else {
                divEvento.classList.add("bg-blue-600");
              }

              const tituloEvento = document.createElement("h3");
              tituloEvento.classList.add("text-lg", "font-semibold", "text-white");
              tituloEvento.textContent = data.nm_title + " - " + data.ds_description;

              divEvento.appendChild(tituloEvento);

              elementoPai.appendChild(divEvento);
            } else {
              console.log("Elemento pai não encontrado para a data: ", dataFormatada);
            }
          }
        });
      });
  }

  return (
    <div className="flex h-5/6">
      <div className="w-2/12 bg-white">
        <table className="w-auto w-full mx-auto">
          <tbody>
            {RenderCalendar(now)}
          </tbody>
        </table>
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
            <tbody>{RenderCalendar(now)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Body;
