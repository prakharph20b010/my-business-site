// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;  // ✅ Use dynamic port when deployed

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

