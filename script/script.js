export function messageError(
    btn , firstName , errorFirstName , lastName , errorLastName ,
    email , errorEmail , message , errorMessage , allRadio , errorQuery ,
    contact , errorContacted , success
){
    btn.addEventListener("click" , (event) => {
        event.preventDefault();
        const regexName = /^[a-zA-Z]+$/;
        if(firstName.value === ""){
            displayError(firstName , errorFirstName);
        } else{
            if(regexName.test(firstName.value)){
                displayValidation(firstName);
            }
            else{
                displayInvalidation(firstName);
            }
        }
        if(lastName.value === ""){
            displayError(lastName , errorLastName);
        }
        else{
            if(regexName.test(lastName.value)){
                displayValidation(lastName);
            }
            else{
                displayInvalidation(lastName);
            }
        }
        const regexEmail = /^[a-zA-Z0-9._%+\-]+@gmail\.com$/;
        if(email.value === ""){
            displayError(email , errorEmail);
        }
        else{
            if(regexEmail.test(email.value)){
                displayValidation(email);
            }
            else{
                displayInvalidation(email);
            }
        }
        if(message.value === ""){
            displayError(message , errorMessage);
        }else{
            displayValidation(message);
        }
        const selected = [...allRadio].find(radio => radio.checked);
        if(!selected){
            displayButtonError(errorQuery);
        }else{
            console.log(selected.value);
            allRadio.forEach(radio => {
                radio.parentElement.style.backgroundColor = "";
            });
            selected.parentElement.style.backgroundColor = "rgba(12, 125, 105 , 0.3)";
        }
        if(!contact.checked){
            displayButtonError(errorContacted);
        }
        if(
            regexName.test(firstName.value) && regexName.test(lastName.value) && regexEmail.test(email.value) &&
            message.value !== "" && selected && contact.checked
        ){
            success.classList.add('showSuccess');
            setTimeout(() => {
                success.classList.remove('showSuccess');
                window.location.reload();
            } , 3000);
        }
    });

    function displayError(valueError , elementError){
        valueError.style.border = "1px solid hsl(0, 66% , 54%)";
        elementError.classList.add('showError');
        setTimeout(() => {
            elementError.classList.remove('showError');
        } , 3000);
    }

    function displayValidation(valueValid){
        valueValid.style.border = "2px solid hsl(169, 82%, 27%)";
    }

    function displayInvalidation(valueInvalid){
        valueInvalid.style.border = "1px solid hsl(0, 66% , 54%)";
    }

    function displayButtonError(errorButton){
        errorButton.classList.add('showError');
        setTimeout(() => {
            errorButton.classList.remove('showError');
        } , 3000);
    }
}