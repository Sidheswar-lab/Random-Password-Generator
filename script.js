const btn = document.querySelector("#createPassword");
const textField = document.querySelector("#passwordbox");
const copyBtn = document.querySelector("#copyBtn");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const specialSym = "!@#$%^&*()_+-=|\:;<>,./?~[]"
const allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generatePassword(){
    let length = Math.floor(8 + (Math.random()*5));
    let password = "";
    password = password + upperCase.charAt(Math.floor(Math.random()*upperCase.length));
    password = password + lowerCase.charAt(Math.floor(Math.random()*lowerCase.length));
    password = password + specialSym.charAt(Math.floor(Math.random()*specialSym.length));
    password = password + number.charAt(Math.floor(Math.random()*number.length));
    for(let i=3;i<length;i++){
        password = password + allChar.charAt(Math.floor(Math.random()*allChar.length));
    }
    textField.value = password;
    textField.removeAttribute("disabled");
}

btn.addEventListener('click',generatePassword);

function copyPassword(){
    textField.select();
    document.execCommand("copy");
    alert("Copied: "+textField.value);
}
copyBtn.addEventListener('click',copyPassword);