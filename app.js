const express = require('express');
const path = require('path')
const app =  express();
const PORT = 3000;
const server = app.listen(PORT, () => console.log('server started'));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


