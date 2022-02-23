function sumOfArray(array) {
    console.log("🚀 ~ file: Array.js ~ line 2 ~ sumOfArray ~ array", array)
    var total = 0
    for (i in array) {
        total += parseInt(i)
    }
    return(total)
}

function minOfArray(array) {
    var min = parseInt(array[0])
    array.forEach(element => {
       if (element < min) min = element
    });
    return min
}

function maxOfArray(array) {
    var max = parseInt(array[0])
    array.forEach(element => {
       if (element > max) max = element
    });
    return max
}

const values = [3, 11, 7, 2, 9, 10];

console.log("Sum =", sumOfArray(values));
console.log("Min =", minOfArray(values));
console.log("Max =", maxOfArray(values));