let form = document.getElementById("registerform")

form.addEventListener("submit",function(e) {
    e.preventDefault()

    let firstname = document.getElementById("firstname")
    let lastname = document.getElementById("lastname")
    let email = document.getElementById("email")
    let address = document.getElementById("address")
    let gender = document.getElementById("gender")
    let agreeTerms = document.getElementById("agree_terms");
    let errorText = document.getElementById("error-txt")
    errorText.innerText = ""

    firstname.style.borderColor = "";
    lastname.style.borderColor = "";
    email.style.borderColor = "";
    address.style.borderColor = "";
    gender.style.borderColor = "";
    agreeTerms.nextElementSibling.style.color = "";
    
    if(firstname.value.length <1){
        errorText.innerText = "First name must not be empty";
        firstname.style.borderColor ="red";
    }
    else if(!checkCapital(firstname.value)){
        errorText.innerText = "First character of first name must be capital"
        firstname.style.borderColor = "red";
    }
    else if(!validateFirstName(firstname.value)){
        errorText.innerText = "First name must not have any special characters"
        firstname.style.borderColor = "red";
    }
    else if(lastname.value.length > 0 && !checkCapital(lastname.value)){
        errorText.innerText = "First character of last name must be capital"
        lastname.style.borderColor = "red";
    }
    else if (!validateLastName(lastname.value)){
        errorText.innerText = "Last name must not have any special characters"
        lastname.style.borderColor = "red";
    }
    else if (address.value.length < 1){
        errorText.innerText = "Address must not be empty"
        address.style.borderColor = "red";
    }
    else if(email.value.length<1){
        errorText.innerText = "Email must not be empty";
        email.style.borderColor = "red";
    }
    // else if(checkSpace(email.value)){
    //     errorText.innerText = "Email must not have any spaces";
    //     email.style.borderColor = "red";
    // }
    else if(!email.value.endsWith("@zenAcademy.com")){
        errorText.innerText = "Email must ends with @zenAcademy.com";
        email.style.borderColor = "red";
    }
    else if(gender.value=="" || gender.value == undefined){
        errorText.innerText = "Gender must be chosen"
        gender.style.borderColor = "red";
    } 
    else if (!agreeTerms.checked) {
        errorText.innerText = "You must agree to the terms and conditions";
        agreeTerms.nextElementSibling.style.color = "red";
    }
    else{
        window.location.href = "index.html"
    }
})

// function checkSpace(input){
//     let valid = false;
//     for(let i=0; i<input.length; i++){
//         const a = input[i];
//         if(a == ' '){
//             valid = true;
//             return valid;
//         }
//     }
//     return valid;
// }
function checkCapital(input){
    let validation = false;
    let a = input[0];

    if(a >= "A" && a <= "Z"){
        validation = true;
        return validation;
    }
    return validation;
}
function validateFirstName(input){
    let validation = false;
    for(let i = 0; i < input.length; i++){
        const a = input[i];
        if((a >= 'a' && a <='z') || (a >='A' && a<='Z') || (a==' ')){
            validation = true;
        }else{
            validation = false;
            return validation;
        }
    }
    return validation;
}
function validateLastName(input){
    let correct = false;
    if(input.length == 0){
        correct = true;
        return correct;
    }else{
        let validation = false;
        for(let i = 0; i < input.length; i++){
            const a = input[i];
            if((a >= 'a' && a <='z') || (a >='A' && a<='Z') || (a==' ')){
                validation = true;
            }else{
                validation = false;
                return validation;
            }
        }
        return validation;
    }
}
