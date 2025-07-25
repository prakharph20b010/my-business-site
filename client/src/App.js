import React, { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    fetch(`${backendUrl}/api/hello`)
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => console.error('API fetch failed:', err));
  }, []);

  return (
    <div>
      <h1>My Business Website</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;

