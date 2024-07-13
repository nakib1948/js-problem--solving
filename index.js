//1.Task: Array Filtering And Mapping
function filterAndMapping(arr) {
    return arr.filter(people => people.gender !== "female").map(people => people.name);
}
// console.log(
//     filterAndMapping([
//         { name: "Fatima", age: 30, gender: "female" },
//         { name: "Mosharof", age: 40, gender: "male" },
//         { name: "Khadiza", age: 25, gender: "female" },
//         { name: "Jalal", age: 50, gender: "male" },
//     ])
// );

//2.Task: Object Manipulation

function objectManipulation(arr) {
    return arr.map(book => book.title)
}
// console.log(objectManipulation([
//     { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//     { title: "1984", author: "George Orwell", year: 1949 },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
// ]));

//5.Task: Find And Modify
function printAndModify(arr, name, age) {
    return arr.map(person => {
        if (person.name === name) {
            person.age = age;
        }
        return person
    })
}
// console.log(printAndModify([
//     { name: "Hayat", age: 20 },
//     { name: "Hossain", age: 25 },
//     { name: "Nakib", age: 30 },
// ], "Nakib", 30));

//6.Task: Array Reduction
function arrayReduction(arr) {
    const eventSum = arr.reduce((acc, curr) => {
        if (curr % 2 === 0) {
           acc += curr
        }
        return acc
    }, 0)
    return eventSum
}

// console.log(arrayReduction([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// ]));

//09. Task: Find Maximum Value:
function maximumValue(arr) {
    return Math.max(...arr)
}
// console.log(maximumValue([
//     1, 2, 3, 40, 5, 6, 7, 8, 9, 10
// ]));
