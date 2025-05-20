/*
    Ques : For a given array with prices of 5 items -> [250, 645, 300, 900, 50], all items have an offer of 10% off on them. Change the array to store final price after appying offer.
*/

let price = [250, 645, 300, 900, 50];

// // First Way to calculate
// let i = 0;
// for(let items of price){
//     console.log(`Value of before offer ${i} : ${items}`)
//     let offer = items / 10;
//     price[i] = price[i] - offer;
//     console.log(`Value of after offer : ${price[i]}`);
//     i++;
// }

// 2nd Way to calculate
for (let i = 0; i < price.length; i++){
    let offer = price[i]/10;
    price[i] = price[i] - offer;
}

console.log(price)