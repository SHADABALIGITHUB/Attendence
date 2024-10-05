const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express app
const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port PORT`);
});