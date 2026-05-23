import { messageError } from "./script.js"
const elements = {
    btn : document.querySelector('.submit'),
    firstName : document.querySelector('#first'),
    lastName : document.querySelector('#last'),
    email : document.querySelector('#email'),
    general : document.querySelector('#general'),
    support : document.querySelector('#support'),
    message : document.querySelector('#message'),
    contact : document.querySelector('#contacted'),
    errorFirstName : document.querySelector('.errorFirstName'),
    errorLastName : document.querySelector('.errorLastName'),
    errorEmail : document.querySelector('.errorEmail'),
    errorQuery : document.querySelector('.errorQuery'),
    errorMessage : document.querySelector('.errorMessage'),
    errorContacted : document.querySelector('.errorContacted'),
    allRadio : document.querySelectorAll('input[type = radio]'),
    success : document.querySelector('.success')
}

messageError(
    elements.btn , elements.firstName , elements.errorFirstName , elements.lastName ,
    elements.errorLastName , elements.email , elements.errorEmail , elements.message , 
    elements.errorMessage , elements.allRadio , elements.errorQuery , elements.contact , elements.errorContacted ,
    elements.success
);