import UserContact from "../UserContact";

function processFormData(formData) {
    if(formData?.emailCopy){
        sendFormDataEmail(formData);
    }

    const userContact = UserContact.build(formData.age, formData.email, formData.phone);
    // save userContact to the database
}


export function sendFormDataEmail(formData) {
    const messageText = generateFormDataTextEmail(formData);
    const messageHTML = generateFormDataTextEmail(formData);

    const options = {
        from: ""
    }
}



export default processFormData;