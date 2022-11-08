
let nameStr = '{"Name":"Sammy","Age":"20","Class":"ss2"}';

let useCase = JSON.parse(nameStr,(key,value)=>{
    if(value=='20'){
     console.log("Student is an adult");
     }
    return value;
 });


console.log(useCase);
