import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS       // app password here NOT real password
    }
});

async function sendMail(mailDetails, callback){
    try {
        const info = await transporter.sendMail(mailDetails);
        console.log("Email sent!");
        callback(info);
        
    } catch (err) {
        console.log(err);
    }
}

export default sendMail;