const getRate = require ('./get-rate');

module.exports = async function printRate(){
    const printRate = await getRate();
 console.log("current  rate is ", getRate);
 }