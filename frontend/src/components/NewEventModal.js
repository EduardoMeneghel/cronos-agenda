import React, { useState, useEffect, useRef } from 'react';
import useKeyPressEvent from 'react-use-keypress';

const NewEventModal = () => {
  const [showAddEvent, setShowAddEvent] = useState(false);
  const recurrenceDaysRef = useRef(null);

  const toggleAddEvent = () => {
    setShowAddEvent(!showAddEvent);
  };

  useKeyPressEvent(' ', (event) => {
    if (event.ctrlKey) {
      toggleAddEvent();
    }
  });

  const newEvent = () => {
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-200 z-10 ${showAddEvent ? '' : 'hidden'}`}>
      <div className="bg-white p-4 shadow rounded-lg w-8/12 h-8/12">
        <h1 className="text-3xl font-bold mb-4">Cadastro de Eventos</h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="titulo" className="block mb-2">
              Título:
            </label>
            <input
              type="text"
              name="titulo"
              id="titulo"
              required
              className="p-2 border border-gray-300 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="categoria" className="block mb-2">Categoria:</label>
            <select name="categoria" id="categoria" className="p-2 border border-gray-300 w-full rounded">
              <option value="reminder">Lembrete</option>
              <option value="task">Tarefa</option>
              <option value="event">Evento</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="data_inicio" className="block mb-2">Data de Início:</label>
            <input type="date" name="data_inicio" id="data_inicio" required className="p-2 border border-gray-300 w-full rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="data_fim" className="block mb-2">Data de Fim:</label>
            <input type="date" name="data_fim" id="data_fim" required className="p-2 border border-gray-300 w-full rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="cor" className="block mb-2">Cor:</label>
            <input type="color" name="cor" id="cor" required className="border" />
          </div>
          <div className="mb-4">
            <label htmlFor="localizacao" className="block mb-2">Localização:</label>
            <select name="localizacao" id="localizacao" className="p-2 border border-gray-300 w-full rounded">
              <option value="salaA">Sala A</option>
              <option value="salaB">Sala B</option>
              <option value="salaC">Sala C</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="descricao" className="block mb-2">Descrição:</label>
            <textarea name="descricao" id="descricao" rows="4" cols="50" required className="p-2 border border-gray-300 rounded"></textarea>
          </div>
          <div className="mb-4">
            <div>
              <label for="descricao" class="block mb-2">Recorrência</label>
              <input checked id="recurrence" type="radio" value="" name="recurrence" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="recurrence-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Todos os dias selecionados</label>
            </div>
            <div className="d-inline-block">
              <input id="recurrence-radio-days" type="radio" value="" name="recurrence" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="recurrence-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dias da semana selecionados</label>
            </div>
            <div className="flex items-center" id="recurrence-days" ref={recurrenceDaysRef}>
              <input id="sunday" type="checkbox" value="" name="day" className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Domingo</label>
              <input id="monday" type="checkbox" value="" name="day" className="ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Segunda</label>
              <input id="tuesday" type="checkbox" value="" name="day" className="ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Terça</label>
              <input id="wednesday" type="checkbox" value="" name="day" className="ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Quarta</label>
              <input id="thursday" type="checkbox" value="" name="day" className="ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Quinta</label>
              <input id="friday" type="checkbox" value="" name="day" className="ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Sexta</label>
              <input id="saturday" type="checkbox" value="" name="day" className="ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Sábado</label>
            </div>
          </div>
          <div className="col-span-2">
            <a
              onClick={toggleAddEvent}
              className="bg-gray-500 mx-2 text-white px-4 py-2 rounded hover:bg-gray-700 cursor-pointer"
            >
              Cancelar
            </a>
            <a
              onClick={newEvent}
              className="bg-blue-500 mx-2 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              Salvar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEventModal;
