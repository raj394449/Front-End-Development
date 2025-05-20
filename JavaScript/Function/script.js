/*
    Function : 
        
        * It is a block of code.
        * function keyword is used to create a function

    Function Syntax : 
    
            function functionName(Parameter1, Parameter2){
                // Function Body
            }

    Arrow Function :

            () => {
                // Function Body
            }

            const variableName = (Parameter1..) => {
                // Function Body
            }

    Immediately Invoked Function Execution(IIFE) :

            (function(){
                // Function Body
            })();
*/

// Example :

{
    const mul = (a, b) => {
        return a * b;
    }

    let c = mul(3, 4);
    console.log(c)
}


{
    function sum(a, b) {
        console.log(a + b)
    }

    sum(3, 5)
}

{
    let arr = [4, 5, 2, 6, 2, 5, 2]
    arr.forEach((val, idx, arr) => {
        console.log(idx, " : ", val,)
    });
}