/*
    Operator : Operator is a Symbol that is used to perform some operations

        Syntax : Operand Operator Operand 

        *   Operands = Values, Variable, etc.
        *   Operator = +, -, *, /, etc.

        Example = 8 + 6
    
    Types of Operator in Javascript

        1. Arithmetic Operator

            *   Arithmetic Operators are : +, -, /, *, %, **, 

        2. Logical Operator

            *   Logical Operators are : &&, ||, !

            *   Table : Cond1   |   Cond2   |   &&  |   ||
                        ------------------------------------
                          T     |     T     |    T  |   T
                        ------------------------------------
                          F     |     F     |    F  |   F   
                        ------------------------------------
                          T     |     F     |    F  |   T
                        ------------------------------------
                          F     |     T     |    F  |   T


        3. Assignment Operator
        
            *   Assignment Operator are : =, +=, -=, /=, etc.

        4. Comparison Operator

            *   Relational Operator are : ==, <, >, <=, >=
                    1. Equal to (==)
                    2. Equal to & type (===)
                    3. Not equal to (!=)
                    4. Not equal to & type (!==)

        5. Ternary Operator

            *   Ternary Operator is :-  conditio ? Experison1 : Experison2

        6. Unaray Operator
            1. Increment (++)
                *   Post Increment (a++)
                *   Pre- Increment (--a)
                
            2. Decrement Operator
                *   Post Decrement (a--)
                *   Pre- Decrement (--a)

    Operator Precedence
        1. Parenthesis ()
        2. Exponents
        3. Multiplication & division & Modulo
        4. Addition & Subtraction
*/


// Universal Variable
let a = 10;
let b = 5;

// // Arithmetic Operator
// console.log("Sum : ", a + b);
// console.log("Subtraction : ", a - b);
// console.log("Multiplication : ", a * b);
// console.log("Division : ", a / b);
// console.log("Remainder : ", a % b);
// console.log("Power of  : ", a ** b);

// // Logical Operator
// let isGreater = a > b && a != b;
// console.log(isGreater);

// let isSmaller = a < b || a != b;
// console.log(isSmaller);

// let isEqual = a != b;
// console.log(isEqual);

// // Assignment Operator
// a+=1
// console.log(a)
// a-=1
// console.log(a)
// a*=5
// console.log(a)

// // Ternary Operator
// let new_var = a > b ? a : b;
// console.log("Greatest Number is : ", new_var)

// // Comparison Operator
// let str = '45';
// let num = 45;
// let res = str === num ? true : false;   // Ouptut --> false
// console.log(res)

// let num1 = '20';
// let num2 = 20;
// let new_res = num1 == num2 ? true : false;  // Output --> true
// console.log(new_res);

// let name = 'Sanjay Kumar';
// let new_name = 'Sanjay Kumar'
// let new_name_res = name === new_name ? true : false;  // Output ---> true
// console.log(new_name_res)


// // Unary Operator
// console.log("Post Increment of Value of a : ", a++);
// console.log("Pre Increment of Value a : ", ++a);

// console.log("Post Decrement of Value b : ", b--)    // Output will be 5. (Pahele Print Kiya Uske Baad Value Ko Minus Karega)
// console.log("Pre Decrement of Value b : ", --b);    // Output will be 3. (Kyuki upar pahle 1 ghat chuka tha)
