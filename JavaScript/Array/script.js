// // using square brackets
// let arr1 = [45, 64, 44, 66, 23, 53]
// console.log(arr1)

// // using array constructors
// let arr2 = new Array("Sanjay", "Mohan", "Rohan")
// console.log(arr2)

// // using array literal
// let name = Array("Sam", "Ram", "Mohan")
// console.log(name)

// // Array Using For Loop
// let marks = [34, 53, 52, 87, 56, 34, 56]
// for (let i = 0; i < marks.length; i++) {
//     console.log(i, " : ", marks[i])
// }

// for(let mark of marks){
//     console.log(mark)
// }

let marks = [34, 54, 36, 65, 45];

// marks.forEach((value, index) =>{
//     console.log(index," : ", value)
// });

// for(let i in marks){
//     console.log(i, " : ", marks[i])
// }

// // Mapping
// let maps = marks.map((value, index, array) => {
//     console.log(index, value, array);
//     return value + index;
// });
// console.log(maps);

// // filter method
// let arr = marks.filter((a) => {
//     return a > 40;
// })
// console.log(arr)

// // reduce method
// let newarr = marks.reduce((a1, a2) => {
//     return a1 + a2;
// })
// console.log(newarr);