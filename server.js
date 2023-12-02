const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const creatorsRoute = require('./routes/creators'); // Import creators route

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Use the creators route
app.use('/api/creators', creatorsRoute);

app.get('/', (req, res) => {
  res.send('ContentPreview Hub API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
