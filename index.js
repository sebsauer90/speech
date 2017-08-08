const PORT = 5000;
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/src'));
const server = app.listen(PORT);
console.log(`hey, I'm listen on port ${PORT} now \n`);

app.get('/', (req, res) => {
  res.sendFile('index.html');
});
