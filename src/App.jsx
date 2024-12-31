import React, { useState } from 'react';
import './App.css';
import BarberProfile from './BarberPofile';
import ClientProfile from './ClientProfile';

function App() {
  const [role, setRole] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleGoBack = () => {
    setRole('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Barbería</h1>
      </header>
      {!role && (
        <main className="role-selection">
          <h2>Seleccione su perfil</h2>
          <button onClick={() => handleRoleSelection('barber')} className="role-button">Ingresar como Barbero</button>
          <button onClick={() => handleRoleSelection('client')} className="role-button">Ingresar como Cliente</button>
        </main>
      )}
      {role === 'client' && (
        <ClientProfile availableSlots={availableSlots} setAvailableSlots={setAvailableSlots} onGoBack={handleGoBack} />
      )}
      {role === 'barber' && (
        <BarberProfile availableSlots={availableSlots} setAvailableSlots={setAvailableSlots} onGoBack={handleGoBack} />
      )}
    </div>
  );
}

export default App;