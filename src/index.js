const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server.config');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/plain' }));   

app.get('/', (req, res) => {
    return res.json({
        message: 'Welcome to AlgoArena - Online Coding Judge App'
    }); 
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 

