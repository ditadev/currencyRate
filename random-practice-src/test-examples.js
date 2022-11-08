const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
const random ={firstName: "John", LastName: "Doe", Age:"30"};

console.log(shopping);

const beans = JSON.stringify(shopping);
console.log(beans);

const  rice = JSON.parse(beans);
console.log(rice);

console.log(shopping.length);

 console.log(shopping[3]);

 console.log(shopping[2].toUpperCase());

 console.log(shopping.includes('milk'));
 shopping[3]='chicken'
console.log(shopping);

shopping.push('egg');
console.log(shopping);

console.log(random.LastName);
console.log(random.firstName.includes('brain'));

console.log(shopping.sort());

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;


// for (let i = 0; i < fLen; i++) {
//   if(fruits.includes('Banana')){
//     console.log("contains banana");
//   }
// }

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

