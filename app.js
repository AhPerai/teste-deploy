const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1 style="color: #f00;">Hello World</h1>');
});

app.listen(PORT, () => {
    console.log(`Este app está escutando na port ${PORT}`);
});