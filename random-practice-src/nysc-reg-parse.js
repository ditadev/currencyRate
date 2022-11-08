const nyscRegStringify = require('./nysc-reg-stringify');

let print;  
async function run(){
let data = nyscRegStringify();
let print=JSON.parse(data,(key,value)=>(stringTo));
return print;
}

async function run(){
    console.log("Data:",print);
};

run();