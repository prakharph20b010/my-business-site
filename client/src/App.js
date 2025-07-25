// client/src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    if (backendUrl) {
      fetch(`${backendUrl}/api/hello`)
        .then(res => res.json())
        .then(data => setMsg(data.message))
        .catch(err => console.error('API fetch failed:', err));
    }
  }, []);

  return (
    <div className="hero">
      <img src="/logo192.png" alt="PreciQube Logo" style={{ width: 100, marginBottom: 20 }} />
      <h1>Building Global Quantum Optics & Photonics Backbone</h1>
      <p>
        We simplify what slows you down.,<br /> 
        so you can focus on what moves science forward.
      </p>

      {msg && (
        <p style={{ marginTop: '1.5rem', fontSize: '1rem', fontStyle: 'italic' }}>
          Backend says: {msg}
        </p>
      )}
      {msg && (
        <p
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            fontSize: '0.8rem',
            fontStyle: 'italic',
            opacity: 0.6,
            margin: 0,
              }}
        >
          {msg}
        </p>
      )}

      <p style={{ marginTop: '2rem', fontSize: '1rem' }}>
        📧 contact@preciqube.com || jointeam@preciqube.com | 📍 India
      </p>
    </div>
  );
}

export default App;

