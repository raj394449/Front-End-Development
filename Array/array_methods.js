// let val = [45, 65, 65, 34, 6, 87, 85, 35, 34]

// val.push(45)
// console.log(val)

// val.pop()
// console.log(val)

// console.log(val.toString())

// let arr1 = ['Ram', 'Shyam', 'Mohan', 'Rohan', 'Raman']
// let arr2 = [45, 65, 65, 34, 65, 34]
// let newArray = arr1.concat(arr2)
// console.log(newArray)

// let Heroes = ['Iron Man', 'Super Man', 'Thor', 'Spider'];
// let val = Heroes.shift();
// let val1 = Heroes.unshift()
// console.log(val)
// console.log(val1)

{
    let val = [45, 2, 5, 2, 6, 23, 6, 3, 89]

    // // Syntax : slice(startIndex, endIndex)
    // console.log(val.slice(2, 5))

    // // Syntax : splice(startIndex, delCount, addNewElement)
    // console.log(val.splice(2, 3))
    console.log(val)

    // Add Element
    val.splice(2, 0, 23)
    console.log(val)

    // Delete Element
    val.splice(2, 1)
    console.log(val)

    // Replace Element
    val.splice(2, 1, 132)
    console.log(val)

    console.log(val.splice(3))
}
