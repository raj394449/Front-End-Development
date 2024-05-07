/*
    Ques : Create an array to store companies 'Bloomberg', 'Microsoft', 'Uber', 'Goolge', 'IBM', 'Netflix'

            a. Remove the first company from the aarray.
            b. Remove Uber & add Ola in its palce.
            c. Add Amazon at the end.
*/

let companies = ["Bloomberg", "Microsoft", 'Uber', "Goolge", "IBM", "Netflix"]
console.log(companies.shift())

companies.splice(2, 1, "Ola")
console.log(companies)

companies.push("Amazon")
console.log(companies)
