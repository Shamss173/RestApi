const express = require('express');
const app = express();
const routes = require('./Routers/Products');

app.use('/api/products', [routes]);


// Middleware to catch 404 errors for undefined routes
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
