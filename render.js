const apiUrl = 'http://localhost:3000/events';
const eventsList = document.getElementById('events-list');

function formatDate(date) {
  return new Date(date).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
}

function renderEvents(events) {
  let html = '';
  for (const event of events) {
    html += `
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${event.title}</h5>
          <p class="card-text">${event.description}</p>
          <p class="card-text">${formatDate(event.start_datetime)} - ${formatDate(event.end_datetime)}</p>
          <p class="card-text">${event.location}</p>
        </div>
      </div>
    `;
  }
  eventsList.innerHTML = html;
}

function getEvents() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(events => renderEvents(events))
    .catch(error => console.error(error));
}

getEvents();