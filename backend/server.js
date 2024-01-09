import processFormData from './src/utils/utils.js';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import cors from 'cors';
import mongoose from 'mongoose';
import { processReviewData } from './src/utils/utils.js';
// import * as Eta from 'eta'
import dotenv from 'dotenv';

dotenv.config();

// all requests coming to here, node will service and serve the files for our built react app
const mongoURI = process.env.MONGO_URI;
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

async function connect() {
    try {
        await mongoose.connect(mongoURI, {dbName: "HealthGuide"});
        console.log("Connected to MongoDB...");
    }catch(error){
        console.log(error.message);
    }
}

connect();


// app.engine("eta", () => Eta.renderFile);
// app.set("view engine", "eta");
// app.set("views", "./src/views");


// TEST: handles GET requests to /api
// app.get('/api', (req, res) => {
//     const message = "Testing email feature by sending an email from a node server...";
//     console.log(process.env.EMAIL_USER);

//     const options = {
//         from: process.env.EMAIL_USER,         // teachback.ai@gmail.com
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

    if(formData !== undefined || JSON.stringify(formData) !== '{}') {
        console.log("Form data received!");
    }

    processFormData(formData);

    resp.status(200).send("Form submitted successfully!");
})

app.post('/api/submitReview', (req, resp) => {
    const reviewData = req.body;
    if(reviewData !== undefined || JSON.stringify(reviewData) !== '{}') {
        console.log("Review data received!");
    }
    
    processReviewData(reviewData);

    resp.status(200).send("Review submitted successfully!");
})

// handles ALL OTHER GET requests that were not handled above by serving our REACT application
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});
app.listen(PORT, () => console.log(`listening on port ${PORT}`));



//     "start": "node server.js",
//     "build": "cd ../frontend && npm install && npm run build"