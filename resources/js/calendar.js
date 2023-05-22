let currentYear, currentMonth;

function createCalendar(year, month) {
  const calendar = document.getElementById('calendar');
  const weekdays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0).getDate();

  let html = '<tr>';
  for (let i = 0; i < weekdays.length; i++) {
    html += '<th class="bg-blue-500 text-white border border-black">' + weekdays[i] + '</th>';
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
  fetch('http://localhost:3000/events/monthly', {
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
            divEvento.classList.add("m-1","event-view");
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
            tituloEvento.textContent = data.nm_title +" - "+ data.ds_description;
      
            divEvento.appendChild(tituloEvento);
            
            elementoPai.appendChild(divEvento);
          } else {
            console.log("Elemento pai não encontrado para a data: ", dataFormatada);
          }
        }
      });
    })
}

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.code === 'Space') {
    openCloseEvent();
  } 
});

function openCloseEvent() {
  var addEventElement = document.getElementById("addEvent");
  if (addEventElement.style.display === "none") {
    addEventElement.style.display = "";
  } else {
    addEventElement.style.display = "none";
  }
}

function openRecurrenceDays() {
  var recurrenceDays = document.getElementById("recurrence-days");
  const recurrenceRadio = document.getElementById("recurrence-radio-days");
  if (recurrenceRadio.checked) {
    recurrenceDays.style.display = "";
  } else {
    recurrenceDays.style.display = "none";
  }
}

function clearEvents() {
  const elementosEventView = document.querySelectorAll(".event-view");

  elementosEventView.forEach((elemento) => {
    elemento.remove();
  });
}

//var recurrence = document.getElementById("recurrence").checked;
//var recurrenceRadioDays = document.getElementById("recurrence-radio-days").checked;
//var sunday = document.getElementById("sunday").checked;
//var monday = document.getElementById("monday").checked;
//var tuesday = document.getElementById("tuesday").checked;
//var wednesday = document.getElementById("wednesday").checked;
//var thursday = document.getElementById("thursday").checked;
//var friday = document.getElementById("friday").checked;
//var saturday = document.getElementById("saturday").checked;

function newEvent() {
  var titulo = document.getElementById("titulo").value;
  var categoria = document.getElementById("categoria").value;
  var data_inicio = document.getElementById("data_inicio").value;
  var data_fim = document.getElementById("data_fim").value;
  var cor = document.getElementById("cor").value;
  var localizacao = document.getElementById("localizacao").value;
  var descricao = document.getElementById("descricao").value;

  // Convertendo as datas para objetos Date
  var startDate = new Date(data_inicio);
  var endDate = new Date(data_fim);

  // Criando uma cópia da data de início
  var currentDate = new Date(startDate);

  // Enquanto a data atual for menor ou igual à data de fim
  while (currentDate <= endDate) {
    var eventData = {
      titulo: titulo,
      categoria: categoria,
      data_inicio: currentDate.toISOString(),
      data_fim: currentDate.toISOString(),
      cor: cor,
      localizacao: localizacao,
      descricao: descricao
    };

    fetch("http://localhost:3000/events", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    .then(function (response) {
      clearEvents();
      getEventsOfMonth();
      openCloseEvent();
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.error(error);
    });

    // Incrementando a data atual para o próximo dia
    currentDate.setDate(currentDate.getDate() + 1);
  }
}