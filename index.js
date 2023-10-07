const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, 'codecollet_react', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'codecollet_react', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
