const express = require('express');
const app = express();
const PORT = process.env.PORT || 5555;
 
app.get('*', (req, res) => {
  res.send('Node.js serverless on Unubo Cloud.');
});

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
