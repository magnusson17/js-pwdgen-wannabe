let nameUser = prompt("What's your name?");
let surnameUser = prompt("What's your surname");
let colorUser = prompt("What's your favorite color?");
let numberUser = prompt("What's your favorite number?");

let userChoice = nameUser + surnameUser + colorUser + numberUser;

let passwordGenerator = document.getElementById("password-generator");

passwordGenerator.innerHTML = `<h2>Your password is: ${userChoice}</h2>`;
