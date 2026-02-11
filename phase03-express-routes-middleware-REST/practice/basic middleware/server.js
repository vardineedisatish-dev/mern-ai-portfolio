
const express = require('express');
const requestLogger = require('./requestLogger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(requestLogger);

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.get('/', (req, res) => {
  res.send('Hello Satish, server is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
