// let age = 19;

// if (age >= 18) {
//     console.log("You are eligible for voting");
// } else {
//     console.log("You are not eligible for voteing");
// }


/*
    Write a Program to check given year is leap or not
*/

let year = 2100;
if (year % 100 == 0){
    if(year % 400 == 0){
        console.log(`${year} is Leap Year`);
    }
    else{
        console.log(`${year} not a leap year`);
    }
} else{
    if(year % 4 == 0){
        console.log(`${year} is leap year`);
    }else {
        console.log(`${year} not a leap year`)
    }
}