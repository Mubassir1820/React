// Asynchronus programming
                                                               
// Code 1 run - 2sec                           // Code 3 run - 10 sec
// Code 2 run - 2 sec

// Code 4 run - 2 sec

// JS single thread(At a time works in only 1 task, thats why we need asynchrionus)

// console.log("Task 1: Start");
// setTimeout(() => {
//     console.log("Task 2: In progress (after 2 seconds)");
// }, 2000);
// console.log("Task 3: Done");


// function downloadFile() {
//     console.log("Download Started");
//     setTimeout(() => {
//         console.log("Download Completed")
//     }, 3000);
// }
// console.log("Program Starts");
// downloadFile();
// console.log("Program Ends")

// Callback hell


// API:Application Programming Interface = Set of rules
// Fetch-Send-Update-Delete data

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error("error fetching Data", error));