// let now = new Date()
// console.log(now.getSeconds())

// let myColor = "Red";
// console.log(myColor)

// let myColorsArray = ["Red","Blue","Yellow"]
// console.log(myColorsArray[2]);

// let myFavouriteNumbers = [10,20,30,40,,50]
// console.log(myFavouriteNumbers[5])

// let mixedArray = [1, 'hello', true, [2,3]]
// console.log(mixedArray[3][1])

// let emptyArray = [];
// emptyArray[0] = "Red";
// emptyArray[1] = "Blue";
// emptyArray[3] = "Yellow";
// console.log(emptyArray)
// emptyArray.push("Navy Blue"); // adds at last
// emptyArray.unshift("Red Blue"); // adds at first
// console.log(emptyArray)
// emptyArray.pop();
// emptyArray.shift();
// console.log(emptyArray)

// const colors = ["Red", "Yellow", "Blue", "Navy Blue"];
// console.log(colors[0])
// colors.forEach(function(color) {
//     console.log(color)
// })
// colors.forEach(color => {
//     console.log(color)
// })

// console.log(["Red", "Yellow", "Blue", "Navy Blue"].map((color) => {
//     return color.toUpperCase()
// }));
// const colorv2 = ["Red", "Yellow", "Blue", "Navy Blue"].map((color) => {
//     return color.toUpperCase()
// });
// console.log(colorv2)

// const colorv2 = ["Red", "Yellow", "Blue", "Navy Blue"].filter((color) => {
//     return color.length == 4;
// });
// console.log(colorv2)

// const colorv2 = ["Red", "Yellow", "Navy", "Blue", "Navy Blue"].find((color) => {
//     return color.length == 4;
// });
// console.log(colorv2)

// Research abouth the method: Reduce




// let name = "Tanilur Rahman";
// let age = "25";
// let address = "Dhaka, Bangladesh";


let person = {
    personName : "Alice", 
    age: 25,
    address: {
        city : "San Francisco",
        zip : "94105",
    },
    isStudent: true
}

person.address.zip = 5050;
person.email = "demo@gmail.com";
// console.log(person.address.zip)
delete person.isStudent;
// console.log(person)

let products = [
    {id: 1, name: "Laptop", price: 999},
    {id: 2, name: "Mobile", price: 999},
    {id: 3, name: "Phone", price: 999},
]

console.log(products)


// research about objects in w3school, mdn, javascript.info and how to find and filter elements from here
