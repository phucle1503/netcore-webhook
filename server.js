const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/webhook/netcore', (req, res) => {
  console.log('📩 Webhook data received from Netcore:');
  console.log(req.body);
  res.status(200).send('Webhook received');
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
