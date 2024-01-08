// backend server running on localhost:5000, so all requests to localhost:5000 will be handled by this server
import sendMail from './utils/mailer.js';
import processFormData from './utils/utils.js';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import cors from 'cors';

// all requests coming to here, node will service and serve the files for our built react app

const PORT = process.env.PORT || 5000;
const app = express();
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.use(
    express.static(
        path.resolve(__dirname, '../frontend/build')
    )
);
app.use(express.json());
app.use(cors());

// TEST: handles GET requests to /api
// app.get('/api', (req, res) => {
//     const message = "Testing email feature by sending an email from a node server..."
//     const options = {
//         from: "",         // teachback.ai@gmail.com
//         to: "",
//         subject: "Nodemailer Test",
//         text: message,
//         html: message
//     }
//     sendMail(options, (info) => {
//         console.log("Email sent successfully.");
//     })
//     res.json({message: "Hello from the server!"});
// })

app.post('/api/submitForm', (req, resp) => {
    const formData = req.body;
    console.log("Form data received: ", formData)
    processFormData(formData);

    resp.status(200).send("Form submitted successfully!");
})

app.post('/api/submitReview', (req, resp) => {
    const reviewData = req.body;
    console.log("Review data received: ", reviewData);
    processReviewData(reviewData);

    resp.status(200).send("Review submitted successfully!");
})

// handles ALL OTHER GET requests that were not handled above by serving our REACT application
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

