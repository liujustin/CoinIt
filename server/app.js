const express = require('express');
const path = require('path');

const configRoutes = require('./routes');

// Express
const app = express();

configRoutes(app);

// Serve static files from React
app.use(express.static(path.join(__dirname, '/client/build')));

// "catchall" for routes that do not match one of the routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/', 'index.html'));
});

// Express server port
const port = process.env.PORT || 8000;
app.listen(port);
console.log(`Server is running on ${port}`);
