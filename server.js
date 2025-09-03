const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // parse x-www-form-urlencoded

app.post('/webhook/netcore', (req, res) => {
  console.log('📩 Webhook data received from Netcore:');
  console.log(req.body);
  console.log('Headers:', req.headers);
  res.status(200).send('Webhook received');
});

app.get('/webhook/netcore', (req, res) => {
  res.status(200).send('Webhook endpoint is live');
});


app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
