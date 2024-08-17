// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click",() => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })


// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})
    
document.querySelectorAll(".nav-item").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}))



var nameError =document.getElementById('name-error')
var phoneError =document.getElementById('phone-error')
var emailError =document.getElementById('email-error')
var messageError =document.getElementById('message-error')
var submitError =document.getElementById('subit-error')




function validateName(){
    var name = document.getElementById("contact-name").value;

    if(name.lenght == 0){
        nameError.innerHTML = 'name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true;
}
//function validatephone
function validatePhone(){
    var phone = document.getElementById("contact-phone").value;

    if(phone.lenght == 0){
        phoneError.innerHTML = 'phone no is required';
        return false;
    }
    if(phone.lenght !== 10){
        phoneError.innerHTML ='enter  10 digits number' ;
        return false;

    }
    if(!phone.match(/^[1-9]{10}$/)){
        phoneError.innerHTML = 'only phone ';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true;

}

// function validateEmail() 
function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.lenght == 0){
        emailError.innerHTML ='email is required';
        return false;

    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='email invailid'
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true;
}


function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left =required - message.lenght;

    if(left > 0){
        messageError.innerHTML = left + 'email is required';
        return false;

    }
 
    messageError.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true;
}

function validateform(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = 'please fix error to submit';
        setTimeout(function(){
            submitError.style.display ="none";}, 3000);
            return false;
    }
}



let om =prompt("Enter Your Name or Number")
document.write(om)
    
    