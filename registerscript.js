let form = document.getElementById("registerform")

form.addEventListener("submit",function(e) {
    e.preventDefault()
    
    //Min 8 char, dan min 2 kata
    let username = document.getElementById("username")

    // ends with '@gmail.com'
    let email = document.getElementById("email")
    // min 6 char & contains at least 1 digit, 1 capital letter, 1 lowercase letter
    let password = document.getElementById("password")
    //equals with password
    let confirm = document.getElementById("confirm_password")
    //not empty
    let dob = document.getElementById("dob")
    //not empty
    let gender = document.getElementById("gender")
    //not empty
    let plan = form.plan

    let errorText = document.getElementById("error-txt")
    //reset error text
    errorText.innerText = ""

    if(username.value.length <8){
        errorText.innerText = "Username must atleast 8 characters"
    }else if(username.value.trim().split(" ").length<2){
        //" aku jason " => ("aku", "jason") // kalau 2 kata
        errorText.innerText = "Username must at least 2 words"
    }
    else if(!email.value.endsWith("@gmail.com")){
        errorText.innerText = "Email must ends with @gmail.com"
    }
    else if(password.value.length<6){
        errorText.innerText = "Password must be at least 6 characters"
    }
    else if(!validatepassword(password.value)){
        errorText.innerText = "Password must at least contains 1 digit, 1 capital letter, 1 lowercase letter"
    }
    else if(password.value != confirm.value){
        errorText.innerText = "Confirm Password must match with the Password"
    }
    else if(dob.value =="" || dob.value == undefined){
        errorText.innerText = "DOB must be filled"
    }else if(gender.value=="" || gender.value == undefined){
        errorText.innerText = "Gender must be filled"
    }else if(plan.value =="" || plan.value==undefined){
        errorText.innerText = "Plan must be filled"
    }else{
        let checkbox = document.getElementById("agree_terms")
        if(!checkbox.checked){
            errorText.innerText = "You must agree with Terms and Condition"
        }else{
            //Validasi sudah lewat semua
            alert("Register Complete. Now enjoy this")
            window.open("https://bit.ly/face-mc-shooty","_blank")
        }
    }
    alert("Submit!")  
})

function validatepassword(input){
    let containDigits = false
    let containCapital = false
    let containLowerCase = false
    for(let i = 0; i < input.length; i++){
        const c = input[i];
        if(c >= '0' && c <= '9'){
            containDigits = true
        }
        if(c >= 'A' && c <= 'Z'){
            containCapital = true
        }
        if(c >= 'a' && c <= 'z'){
            containLowerCase = true
        }
    }
    return containDigits && containCapital && containLowerCase
}