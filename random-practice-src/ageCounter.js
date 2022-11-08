const prompt = require('prompt-sync')();

let age = prompt("how old are you? ");

if(age<18){
    console.log("you are not qualified for NYSC");
}else{
    console.log("You ay proceed to NYSC");
};
