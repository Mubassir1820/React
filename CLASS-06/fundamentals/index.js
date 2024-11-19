// Filter, Map, Reduce -> more readable, declarable, chained -> Callback function, returns new array

// Filter

// const numbers = [1,2,3,4,5,6];

// const oddNumbers = numbers.filter(function(element){
//     return element % 2 !== 0;
// });

// console.log(oddNumbers)

// const products = [
//     {name: 'Laptop', price: 1200},
//     {name: 'Phone', price: 800},
//     {name: 'Tablet', price: 500},
//     {name: 'Headphones', price: 200},
// ];

// const expensiveProducts = products.filter(function(element){
//     return element.price > 500
// })

// console.log(expensiveProducts);

// USing arrow function

// const products = [
//     {name: 'Laptop', price: 1200},
//     {name: 'Phone', price: 800},
//     {name: 'Tablet', price: 500},
//     {name: 'Headphones', price: 200},
// ];

// const expensiveProducts = products.filter((element) => element.price > 500)

// console.log(expensiveProducts);

// const products = [
//     {name: 'Laptop', price: 1200, inStock: true },
//     {name: 'Phone', price: 800, inStock: true },
//     {name: 'Tablet', price: 500, inStock: false },
//     {name: 'Headphones', price: 200, inStock: false },
// ];


// const isAvailable = products.filter((product) => product.inStock)

// console.log(isAvailable)


// const products = [
//     {name: 'Laptop', price: 1200, inStock: true },
//     {name: 'Phone', price: 800, inStock: true },
//     {name: 'Tablet', price: 500, inStock: false },
//     {name: 'Headphones', price: 200, inStock: false },
// ];

// const searcValue = 'tablet'
// const search = products.filter(product => product.name.toLowerCase().includes(searcValue.toLowerCase));
// console.log(search);




// Map => Callback function, New array, update-transform, modify

// const numbers = [1,2,3,4,5]

// const doubleNumbers = numbers.map(number => number * 2);
// console.log(doubleNumbers);

// const products = [
//     {name: 'Laptop', price: 1200, inStock: true },
//     {name: 'Phone', price: 800, inStock: true },
//     {name: 'Tablet', price: 500, inStock: false },
//     {name: 'Headphones', price: 200, inStock: false },
// ];

// const productName = products.map(product => product.name);
// console.log(productName);



// const products = [
//     {name: 'Laptop', price: 1200, inStock: true },
//     {name: 'Phone', price: 800, inStock: true },
//     {name: 'Tablet', price: 500, inStock: false },
//     {name: 'Headphones', price: 200, inStock: false },
// ];

// const discountPrice = products.map(product => ({
//     name: product.name,
//     DiscountedPrice: product.price * 0.9,
// }))

// console.log(discountPrice);

// const celciustemp = [0, 10, 30, 50];

// const fahrenheitTemp = celciustemp.map(temp => (temp * 9) / 5 +32);
// console.log(fahrenheitTemp);


// const products = [
//     {name: 'Laptop', price: 1200, inStock: true },
//     {name: 'Phone', price: 800, inStock: true },
//     {name: 'Tablet', price: 500, inStock: false },
//     {name: 'Headphones', price: 200, inStock: false },
// ];

// const formatedProducts = products.map(product => `${product.name} costs $${product.price}`);
// console.log(formatedProducts);


// Reduce 

// const numbers = [10,20,30,40];

// const sum = numbers.reduce(function(accumulator, number){
//     console.log('Previous value of accumulator', accumulator);
//     return accumulator + number;
// },0);

// console.log(sum);

// const products = [
//     {name: 'Laptop', price: 1200, quantity: 5, inStock: true },
//     {name: 'Phone', price: 800, quantity: 10, inStock: true },
//     {name: 'Tablet', price: 500, quantity: 5, inStock: false },
//     {name: 'Headphones', price: 200, quantity: 10, inStock: false },
// ];

// const totalPrice = products.reduce((accumulator, product) => accumulator + product.price,0);
// console.log(totalPrice);

// To find out both quantity and price from the same reduce function

// const totalQuantity = products.reduce((accumulator, product) => {
//     accumulator.totalQuantity += product.quantity;
//     accumulator.totalPrice += product.price;
//     return accumulator;
// },
// {
//     totalQuantity: 0,
//     totalPrice: 0,
// }
// );
// console.log(totalQuantity);



// Flattening

// const arrays = [
//     [1,2],
//     [3,4],
//     [5,6],
// ]

// const flattenedArray = arrays.reduce((accumulator, currentArray) => accumulator.concat(currentArray) ,[]);
// console.log(flattenedArray);

// const players = [
//     {name: 'Alice', scores: {math: 50, science: 70}},
//     {name: 'Bob', scores: {math: 70, science: 80}},
//     {name: 'Ranger', scores: {math: 90, science: 60}},
// ]


// Get the total scores of math and science

// const totalScores = players.reduce((accumulator, player) => {
//     accumulator.math += player.scores.math;
//     accumulator.science += player.scores.science;
//     return accumulator;
// }    
// ,{  math:0, 
//     science:0}
// );

// console.log(totalScores);



const products = [
    {name: 'Laptop', price: 1200, quantity: 5, inStock: true },
    {name: 'Phone', price: 800, quantity: 10, inStock: true },
    {name: 'Tablet', price: 500, quantity: 5, inStock: false },
    {name: 'Headphones', price: 200, quantity: 10, inStock: false },
];

// Get the products inStock, take the price of those products and sum them

// const isAvailable = products.filter(product => product.inStock);
// const productPrice = isAvailable.map(product => product.price);
// const total = productPrice.reduce((accumulator, price) => {
//     accumulator += price;
//     return accumulator;
// }, 0
// );
// console.log(total);

// const availableProductPrice = products.filter(product => product.inStock).map(product => product.price).reduce((accumulator, price) => accumulator += price, 0);
// console.log(availableProductPrice);


// // Print out the names of the available products
// const availableProductName = products.filter(product => product.inStock).map(product => product.name)
// console.log(availableProductName);



// // Print out the number of items whose values are greater than 500

// const productCount = products.filter(product => product.price > 500).reduce((accumulator) => accumulator + 1, 0);
// console.log(productCount);


// Print out the average price of the available products

// const avgPriceAvailable = products.filter(product => product.inStock).map(product => product.price).reduce((accumulator, price, index, Array) => accumulator + price / Array.length, 0)
// console.log(avgPriceAvailable);




// Print out the summation of available products and double its price

const availableProducts = products.filter(product => product.inStock).map(product => product.price * 2).reduce((accumulator,price) => accumulator + price);
console.log(availableProducts);