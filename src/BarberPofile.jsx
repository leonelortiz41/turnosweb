// BarberProfile.js
import React, { useState } from 'react';

function BarberProfile({ availableSlots, setAvailableSlots, onGoBack }) {
  const [newSlotDate, setNewSlotDate] = useState('');
  const [newSlotTime, setNewSlotTime] = useState('');

  const handleAddSlot = (e) => {
    e.preventDefault();
    if (newSlotDate && newSlotTime) {
      setAvailableSlots([...availableSlots, { date: newSlotDate, time: newSlotTime, reserved: false }]);
      setNewSlotDate('');
      setNewSlotTime('');
    }
  };

  const handleDeleteSlot = (indexToDelete) => {
    setAvailableSlots(availableSlots.filter((_, index) => index !== indexToDelete));
  };

  return (
    <main>
      <h2>Perfil de Barbero</h2>
      <p>Bienvenido al perfil de barbero. Aquí podrás gestionar los turnos y servicios.</p>
      <form onSubmit={handleAddSlot} className="slot-form">
        <h3>Agregar Turnos Disponibles</h3>
        <div className="form-group">
          <label htmlFor="slot-date">Fecha:</label>
          <input
            type="date"
            id="slot-date"
            value={newSlotDate}
            onChange={(e) => setNewSlotDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="slot-time">Hora:</label>
          <input
            type="time"
            id="slot-time"
            value={newSlotTime}
            onChange={(e) => setNewSlotTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Agregar Turno</button>
      </form>
      <h3>Turnos Disponibles</h3>
      <ul className="available-slots">
        {availableSlots.map((slot, index) => (
          <li key={index}>
            {slot.date} - {slot.time} {slot.reserved && '(Reservado)'}
            <button onClick={() => handleDeleteSlot(index)} className="delete-button">Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={onGoBack} className="back-button">Volver al Menú Principal</button>
    </main>
  );
}

export default BarberProfile;