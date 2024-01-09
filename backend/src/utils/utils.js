import mjml2html from "mjml";
import UserContact from "../models/UserContact.js";
import sendMail from "./mailer.js";
import { promises as fs } from "fs";
import dotenv from 'dotenv';

dotenv.config();

export default function processFormData(formData) {
    console.log("Processing form data...");

    if(formData?.emailCopy){
        sendFormDataEmail(formData);
    }

    const userContact = UserContact.build(formData.age, formData.email, formData.phone);
    // TODO: save userContact to the database
}


export async function sendFormDataEmail(formData) {
    const messageText = generateFormDataTextEmail(formData);
    const messageHTML = await generateFormDataHTMLEmail(formData);

    const options = {
        from: process.env.EMAIL_USER,
        to: formData.email,
        subject: "Your Health Guide Responses",
        text: messageText,
        html: messageHTML
    }

    sendMail(options, (info) => {
        console.log(info?.envelope);
    })
}

export function generateFormDataTextEmail(formData) {
    const currentDate = new Date().toDateString();

    return (
        "Health Guide responses for your visit on "+currentDate+"\n\n"+

        getIsGoalTextStatement(formData.isGoal)+"\n"+
        "Your goal for the visit is: "+formData.goal+"\n"+
        "You believe your diagnosis is: "+formData.diagnosis+"\n"+
        "You are curious/concerned about: "+formData.curiosity+"\n"+
        "Your main concern for this visit is: "+formData.mainConcern+"\n"
    )
}

export async function generateFormDataHTMLEmail(formData){
    const isGoalStatement = getIsGoalTextStatement(formData.isGoal);
    const currentDate = new Date().toDateString();
    const { goal, diagnosis, curiosity, mainConcern } = formData;

    try{
        // Read the MJML template file
        const mjmlEmailTemplate = await fs.readFile("./src/templates/emailFormTemplate.mjml", 'utf-8', (error, data) => {
            console.log("Error rendering template", error);
        });

        const hydratedTemplate = mjmlEmailTemplate
            .replace(/<%=\s*it\.currentDate\s*%>/g, currentDate)
            .replace(/<%=\s*it\.isGoalStatement\s*%>/g, isGoalStatement)
            .replace(/<%=\s*it\.goal\s*%>/g, goal)
            .replace(/<%=\s*it\.diagnosis\s*%>/g, diagnosis)
            .replace(/<%=\s*it\.curiosity\s*%>/g, curiosity)
            .replace(/<%=\s*it\.mainConcern\s*%>/g, mainConcern)

        const {html} = mjml2html(hydratedTemplate);

        return html;

    } catch(error){
        console.log("Error rendering template", error);
    }
}

function getIsGoalTextStatement(isGoal){
    if(isGoal.toLowerCase()==="yes") return "You do know why you came to the doctor today."
    if(isGoal.toLowerCase()==="no") return "You do NOT know why you came to the doctor today."
    if(isGoal.toLowerCase()==="unsure") return "You are unsure as to why you came to the doctor today."
}