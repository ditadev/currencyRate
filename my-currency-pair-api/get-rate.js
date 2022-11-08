const fetch = require('node-fetch');

module.exports = async function rate(curPair){
    cur=curPair;
    const response = await fetch('https://www.freeforexapi.com/api/live?pairs='+cur);
    const data = await response.json();
    
    return data.rates[cur].rate;
    }