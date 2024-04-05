/*
    Variable : A container that stores a valu.
               Behaves as if it were the value it contains.

    Declaration : let x;
    Assignment : x = 10;

    Both : let x = 10

    Rules : 

        *   Variable name must be unique
        *   Variable name can only contain alpha numeric values & Underscore (_)
        *   Variable name should be start with underscore & letter
        *   Variable name can not start with digit.
        *   Variable name are case sensitive
        *   Variable name cannot contain any spaces
        
    Example : 

        1. let x = 10   --> Valid Variable name
        2. let _my_age = 21   --> Valid Variable name
        3. let 8num = 12    --> Unvalid Variable name
        4. let age1 = 20    --> Valid Variable name

 */

// // Variable Example

// let fullName = 'Sanjay Kumar';
// let age = 21;
// let gender = 'Male';
// let isStudent = true

// console.log(`Your Name is : ${fullName}`);
// console.log(`Your Age : ${age}`);
// console.log(`Your Gender : ${gender}`);
// console.log(`You are avilable ${isStudent}`);
// console.log(typeof fullName);
// console.log(typeof age);
// console.log(typeof gender);
// console.log(typeof isStudent);

// // Accessing Tags by Id
// document.getElementById("p1").textContent = `Your Name is : ${fullName}`;
// document.getElementById("p2").textContent = `Your age is : ${age}`;
// document.getElementById("p3").textContent = `Your gender is : ${gender}`;
// document.getElementById("p4").textContent = `You are student : ${isStudent}`

/*
    Constant Kyeword : 
        *   A variable that can't be changed.
        *   const Keyword used to declare constant variable.
        *   constant variable write in capital letter.
        
    Example : 

        const PI = 3.14;
        // PI = 4 --> pi dosen't change.
        const Adhaar_Id = 343434343434;
*/

const PI = 3.14;
let radius = 4;
let circumference;

// radius = window.prompt('Enter the radius of circle : ');
// radius = Number.(radius);
// PI = 4; --> Not Possible

// circumference = 2 * PI * radius;
// console.log(circumference);

document.getElementById('btn-submit').onclick = () => {
    radius = document.getElementById('text-format').value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById('result').textContent = circumference;
};

