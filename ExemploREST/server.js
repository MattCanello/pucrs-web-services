const express = require('express');

const PORT = 3010;
const app = express();

app.use(express.json()); // Interpreta aquivos JSON
app.use(express.urlencoded({ extended: true })); // Aceita URL Encoded
app.listen(PORT, function () {
    console.log('server initilized ' + PORT);
});

require('./src/routes/index')(app);