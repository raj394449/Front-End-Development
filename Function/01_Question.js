/*
    Create a function using the function keyword that takes a string as an argument & returns the number of vowels in the   string.

    Create an arrow function to perform the same task.
*/

{
    function countVowels(str) {
        let count = 0;
        for (const char of str) {
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                count++;
            }
        }
        console.log(count)
    }

    countVowels('Sanjay Kumar')
}

{
    const vowelsCount = (str) => {
        let count = 0;
        for (const char of str) {
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                count++;
            }
        }
        console.log(count);
    }
    vowelsCount('Ram')
}
