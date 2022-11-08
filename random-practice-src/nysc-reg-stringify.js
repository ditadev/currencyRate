module.exports=async function setString(){
const prompt=require('prompt-sync')();


let studentName= prompt("kindly enter name ");
let studentAge=prompt("Kindly enter age ");
let studentClass=prompt("Kindly enter class ");

let bio={studentName,studentClass,studentAge};


let userObj=JSON.stringify(bio);

}

