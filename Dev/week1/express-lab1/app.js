
//We import the Express.js library using 
// the require() function and assign it to the variable express.
const express = require('express');

//We create an Express application by calling the express() function and store 
// the returned application object in the variable app
const app = express();
const port = 3001;

//callback function for the root endpoint
const handleRootRequest = (req, res) => {
    res.send('Hello World!');
};

//Callback function for when server starts listening
const handleServerListening = () => {
    console.log(`App is listening on port ${port}`);
};

//Registering routes with the callback functions
app.get('/', handleRootRequest);

//Starting the server and listening on port:
app.listen(port, handleServerListening);