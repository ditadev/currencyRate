const fetch = require ('node-fetch');
const prompt = require('prompt-sync')();

const curPair  = prompt("Enter Currency Pair ");
 
async function rate(inputPair){
    const cur = inputPair.toUpperCase();
    const response = await fetch('https://www.freeforexapi.com/api/live?pairs='+ cur);
    const data = await response.json();

    return data.rates[cur].rate;
}

async function main(){
    const pairRate = await rate(curPair);
    console.log("current rate is",pairRate);
}

main();
