// const express = require('express');
// // const React = require('react');
// // const ReactDOMServer = require('react-dom/server');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// // const App = require('./App').default;

// const app = express();
// const port = 5000;

// // middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
//   });

// app.post('submit-contact', (req, res) => {
//     const { myName, myEmail, myReason, myComments} = req.body;

//     // input validation
//     if(!myName || typeof myName !== 'string' || myName.trim() === '') {
//         return res.status(400).json({ error: 'Name is required' });
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(!myEmail || !emailRegex.test(myEmail)) {
//         return res.status(400).json({ error: 'Valid email is required.' });
//     }

//     if(!myReason || typeof myReason !== 'string' || myReason.trim() === '') {
//         return res.status(400).json({ error: 'Reason is required' });
//     }

//     if(!myComments || typeof myComments !== 'string' || myComments.trim() === '') {
//         return res.status(400).json({ error: 'Comments are required' });
//     }

//     console.log('Form Data Recieved:', { myName, myEmail, myReason, myComments});

//     // respond to the client
//     res.status(200).json({ 
//         message: 'Form submitted successfully',
//         recievedData: {
//             name: myName,
//             email: myEmail,
//             reason: myReason,
//             comments: myComments,
//         }, 
//     });
// });



// Importing required modules
const express = require("express"); // Framework for building web servers
const bodyParser = require("body-parser"); // Middleware to parse incoming requestbodies
const cors = require("cors"); // Middleware to allow cross-origin requests
const app = express(); // Initialize the Express application
const PORT = 5000; // Port number for the server
// Middleware
app.use(cors()); // Enable CORS to allow requests from the frontend (React)
app.use(bodyParser.json()); // Parse JSON-formatted request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded requestbodies
// POST route to handle form data
app.post("/submit-contact", (req, res) => {
    console.log("this is req", req.body)
    // Extract data from the request body
    const { myName, myEmail, myReason, myComments } = req.body;
    // Input validation for the "Name" field
    if (!myName || typeof myName !== "string" || myName.trim() === "") {
        return res.status(400).json({ error: "Name is required." }); // Send error if validation fails
    }
    // Input validation for the "Email" field
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to validate email
    if (!myEmail || !emailRegex.test(myEmail)) {
        return res.status(400).json({ error: "Valid email is required." }); // Send error if validation fails
    }
    // Input validation for the "Reason for Contact" field
    const validReasons = ["New Patient", "Appointment", "House Call", "Information",
        "Ask the Vet"]; // List of valid options
    if (!myReason || !validReasons.includes(myReason)) {
        return res.status(400).json({ error: "Invalid reason for contact." }); // Send error if validation fails
    }
    // Input validation for the "Comments" field
    if (!myComments || typeof myComments !== "string" || myComments.trim() === "") {
        return res.status(400).json({ error: "Comments are required." }); // Send error if validation fails
    }
    // Log the received data to the server console for debugging purposes
    console.log("Form Data Received:", { myName, myEmail, myReason, myComments });
    // Send a successful response back to the client with a message and the entered  data
    res.status(200).json({
        message: "Form data received successfully!",
        receivedData: {
            name: myName,
            email: myEmail,
            reason: myReason,
            comments: myComments,
        },
    });
});

app.post("/cart", (req, res) => {
    // Extract data from the request body
    const { productName, price } = req.body;
    // Log the received data to the server console for debugging purposes
    console.log("Form Data of product Received:", { productName, price });
    // Send a successful response back to the client with a message and the entered  data
    res.status(200).json({
        message: "Here is your cart!",
        receivedData: {
            productName: productName,
            price: price
        },
    });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log that the server is running
});