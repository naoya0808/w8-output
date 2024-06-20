const email =document.querySelector("#email");
const password =document.querySelector("#password");
const signIn =document.querySelector("#sign-in");

signIn.addEventListener('click', () => {
    const emailDate = email.value;
    const passwordDate = password.value;
    localStorage.setItem("email", emailDate);
    localStorage.setItem("password", passwordDate);
})

window.onload = () => {
    const saveEmail = localStorage.getItem("email");
    const savePassword = localStorage.getItem("password");
    
    document.getElementById("email").value = saveEmail;
    document.getElementById("password").value = savePassword;
};