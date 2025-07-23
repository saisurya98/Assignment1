// //  import express
// const express= require('express')

// //  declare express
// const app=express()

// // This is a logical OR operator,It returns the first “truthy” value it finds from leftW to right.
// // "If process.env.PORT has a value (and it’s truthy ), use that. Otherwise, use 3000."
// //  In production we have port number but in local we dont . 
// const PORT = process.env.PORT || 3000

// // tells Express to automatically parse JSON request bodies.
// app.use(express.json());

// // same level go to routes
// const userRoutes = require('./routes/user.routes');
// app.use('/users', userRoutes)


// // Health check route
// // When client sends a GET request to '/', the server responds with a message using res.send()
// //  path here is '/', (req,res) is callback . req- request & res- response
// app.get('/', (req, res) => {
//   res.send('User Profile Microservice is running!');
// });

// // This method starts the Express server.
// // Binds and listens for connections on the specified host and port. 
// // Starts the Express server and listens for requests on the specified PORT

// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });
// Import express
const express = require('express');

// Declare express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Import routes
const userRoutes = require('./routes/user.routes');
app.use('/users', userRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('User Profile Microservice is running!');
});

// ✅ Do NOT call app.listen here
module.exports = app;
