// ClientProfile.js
import React, { useState } from 'react';

function ClientProfile({ availableSlots, setAvailableSlots, onGoBack }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [message, setMessage] = useState('');

  const handleReserveSlot = (index) => {
    const updatedSlots = availableSlots.map((slot, i) =>
      i === index ? { ...slot, reserved: true } : slot
    );
    setAvailableSlots(updatedSlots);
    setSelectedSlot(updatedSlots[index]);
    setMessage(`Tu turno ha sido reservado para el ${updatedSlots[index].date} a las ${updatedSlots[index].time}.`);
  };

  const handleCancelReservation = () => {
    if (selectedSlot) {
      const updatedSlots = availableSlots.map((slot) =>
        slot === selectedSlot ? { ...slot, reserved: false } : slot
      );
      setAvailableSlots(updatedSlots);
      setSelectedSlot(null);
      setMessage('Tu reserva ha sido cancelada.');
    }
  };

  return (
    <main>
      <h2>Solicitar Turno - Cliente</h2>
      {selectedSlot ? (
        <div>
          <p>{message}</p>
          <button onClick={handleCancelReservation} className="cancel-button">Cancelar Turno</button>
        </div>
      ) : (
        <div>
          <h3>Turnos Disponibles</h3>
          <ul className="available-slots">
            {availableSlots.map((slot, index) => (
              !slot.reserved && (
                <li key={index}>
                  {slot.date} - {slot.time}
                  <button onClick={() => handleReserveSlot(index)} className="reserve-button">Reservar</button>
                </li>
              )
            ))}
          </ul>
        </div>
      )}
      <button onClick={onGoBack} className="back-button">Volver al Menú Principal</button>
    </main>
  );
}

export default ClientProfile;
