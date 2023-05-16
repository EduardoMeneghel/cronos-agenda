let reminders = document.getElementById('reminders');
let participants = document.getElementById('participants');
let events = document.getElementById('events');
let categories = document.getElementById('categories');
let recurrences = document.getElementById('recurrences');
let tabReminders = document.getElementById('tabReminders');
let tabParticipants = document.getElementById('tabParticipants');
let tabEvents = document.getElementById('tabEvents');
let tabCategories = document.getElementById('tabCategories');
let tabRecurrences = document.getElementById('tabRecurrences');

function hideTables() {
  let tables = [categories, events, participants, recurrences, reminders];
  tables.forEach(table => table.style.display = 'none');
}

function showTable(table) {
  table.style.display = '';
}

function disableTabs() {
  let tabs = [tabCategories, tabEvents, tabParticipants, tabRecurrences, tabReminders];
  tabs.forEach(tab => tab.classList = "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300");
}

function enableTab(tab) {
  tab.classList = "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500";
}

window.utils = {
  categories() {
    hideTables();
    showTable(categories);
    disableTabs();
    enableTab(tabCategories);
  },

  events() {
    hideTables();
    showTable(events);
    disableTabs();
    enableTab(tabEvents);
  },

  participants() {
    hideTables();
    showTable(participants);
    disableTabs();
    enableTab(tabParticipants);
  },

  recurrences() {
    hideTables();
    showTable(recurrences);
    disableTabs();
    enableTab(tabRecurrences);
  },

  reminders() {
    hideTables();
    showTable(reminders);
    disableTabs();
    enableTab(tabReminders);
  }
};

window.utils.events();
