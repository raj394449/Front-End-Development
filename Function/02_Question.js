/*
    For a given array of numbers, print the square of each value using the forEach loop.
*/

let nums = [2, 4, 6, 8, 10];

// nums.forEach((num) => {
//     console.log(num ** 2);
// });

const calSquare = (num) => {
    console.log(num ** 2);
}

nums.forEach(calSquare);