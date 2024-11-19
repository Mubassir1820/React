// Looops and Iteration
// For, While, Do...while, For...of


/*

    For Loop;

    for(initialization; condition; increment/decrement){
        console.log("I am here")
    }

*/

// for(let i = 0; i<= 5; i++){
//     console.log(i)
// }


// let sum = 0;

// for(let i = 1; i<=5; i++){
//     console.log(sum, i)
//     sum = sum + i;
// }

// console.log(sum)


// Display even numbers between 1 and 10

// for(let i = 1; i <=10; i++){
//     if(i%2 == 0){
//         console.log(i, "Even Number")
//     }
// }

// fruites = ['apple', 'banana', 'cherry', 'date']

// for(let i = 0; i <= fruites.length; i++){
//     console.log(`Output of i: ${i}`);
//     console.log(`Output of i fruits: ${fruites[i]}`)
// }

// Research about nested loops

/*
while(condition) {

    console.log("I am here")

}
*/

// let i = 0;
// while(i <= 5){
//     console.log(i);
//     i = i + 1;
// }

// let i = 0

// do{
//     console.log(i);
//     i = i + 1;
// }while(i <= 5);
// console.log(i);


// for ... of loop

// const colors = ['red', 'green', 'blue'];

// for(let color of colors){
//     console.log(color);
// }

// const user = {
//     name: "Alice",
//     age: 25,
//     preofession: "Engineer",
// };

// // console.log(Object.entries(user))

// for(let [key, value] of Object.entries(user)){
//     console.log(`The key is: ${key}, and contains the value: ${value}`);
// }

// const [players1,players2] = ['Sakib', 'Tamim']
// console.log(players2);


// Iterating over arguments in function


// let numbers = [1,2,3,4,5,6];

// for(let num of numbers) {
//     // console.log(num);

//     if(num == 4) {
//         break;
//     }
//     console.log(num);
// }

// Calculate the sum of Array -  cost numbers - [10,20,30,40,50]
// Modify array elements


// const numbers = [10,20,30,40,50]

// numbers.forEach(function(number) {
//     console.log(number)
// });

// For... in

// const fruites = ['apple', 'banana', 'mango']

// for(let index in fruites) {
//     console.log(fruites[index])
// }

// difference between for in and for of is index vs value prints

const students = {
    name: 'Mubassir',
    age: 26,
    major: 'Engineer',
}
// for(let key in students) {
//     console.log(students[key])
// }

Object.keys(students).forEach((key) => {
    console.log(key);
})