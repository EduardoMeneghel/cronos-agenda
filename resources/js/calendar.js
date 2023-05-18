let currentYear, currentMonth;

function createCalendar(year, month) {
  const calendar = document.getElementById('calendar');
  const weekdays = ['SAB', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0).getDate();

  let html = '<tr>';
  for (let i = 0; i < weekdays.length; i++) {
    html += '<th class="bg-blue-500 text-white">' + weekdays[i] + '</th>';
  }
  html += '</tr>';

  let dayCounter = 1;

  for (let row = 0; row < 6; row++) {
    html += '<tr>';
    for (let col = 0; col < weekdays.length; col++) {
      if ((row === 0 && col < firstDay.getDay()) || dayCounter > lastDay) {
        html += '<td></td>';
      } else {
        const id = dayCounter.toString().padStart(2, '0') + (month + 1).toString().padStart(2, '0') + year.toString();
        html += '<td id="' + id + '">' + dayCounter + '</td>';
        dayCounter++;
      }
    }
    html += '</tr>';
    if (dayCounter > lastDay) {
      break;
    }
  }

  calendar.innerHTML = html;

  const calendarTitle = document.getElementById('calendarTitle');
  calendarTitle.textContent = monthNames[month] + ' ' + year;
}

function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  createCalendar(currentYear, currentMonth);
  getEventsOfMonth();
}

function prevMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  createCalendar(currentYear, currentMonth);
  getEventsOfMonth();
}

const currentDate = new Date();
currentYear = currentDate.getFullYear();
currentMonth = currentDate.getMonth();

createCalendar(currentYear, currentMonth);

const prevButton = document.getElementById('prevMonth');
prevButton.addEventListener('click', prevMonth);

const nextButton = document.getElementById('nextMonth');
nextButton.addEventListener('click', nextMonth);

getEventsOfMonth();

function getEventsOfMonth() {
  const startOfMonth = currentYear + '-' + (currentMonth + 1).toString().padStart(2, '0') + '-01';
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const endOfMonth = currentYear + '-' + (currentMonth + 1).toString().padStart(2, '0') + '-' + lastDayOfMonth.toString().padStart(2, '0');
  fetch('http://localhost:3000/events', {
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
      datas.forEach(function(data){
        const date = new Date(data.start_datetime);

        const dia = String(date.getDate()).padStart(2, '0');
        const mes = String(date.getMonth() + 1).padStart(2, '0');
        const ano = String(date.getFullYear());

        const dataFormatada = dia + mes + ano;

        const elementoPai = document.getElementById(dataFormatada);
        const divEvento = document.createElement("div");
        divEvento.classList.add("bg-blue-600", "rounded-lg");

        const tituloEvento = document.createElement("h3");
        tituloEvento.classList.add("text-lg", "font-semibold", "text-white");
        tituloEvento.textContent = data.title;

        const descricaoEvento = document.createElement("p");
        descricaoEvento.classList.add("text-white");
        descricaoEvento.textContent = data.description;

        divEvento.appendChild(tituloEvento);
        divEvento.appendChild(descricaoEvento);

        elementoPai.appendChild(divEvento);
      });
    })
}