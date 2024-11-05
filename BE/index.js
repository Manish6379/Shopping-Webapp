const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

app.get('/fruit', (req, res) => {
  res.json({ fruits: ['apple', 'banana', 'orange'] });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
