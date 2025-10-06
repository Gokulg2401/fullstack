const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

app.post('/api/auth/register', (req, res) => {
  console.log('Registration request:', req.body);
  res.json({ message: 'Registration endpoint reached', data: req.body });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});