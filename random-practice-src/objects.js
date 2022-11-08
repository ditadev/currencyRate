let marketList = {
    1:'meat',
    2:'fish',
    3:'salt'
};
console.log(Object.values(marketList));

let journal = [
    {events: ["work", "touched tree", "pizza","running", "television"], 
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts","beer"], 
    squirrel: true}
     ];
     console.log(Object.values(journal[0].events));

let journal = [];
function addEntry(events, squirrel) {
   journal.push({events, squirrel});
}

let list=[];
    list.push({index,item});
    




