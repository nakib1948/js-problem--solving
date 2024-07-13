//1.Task: Array Filtering And Mapping
function filterAndMapping(arr) {
    return arr.filter(people => people.Gender !== "female").map(people => people.Name);
}
// console.log(
//     filterAndMapping([
//         { Name: "Fatima", Age: 30, Gender: "female" },
//         { Name: "Mosharof", Age: 40, Gender: "male" },
//         { Name: "Jalal", Age: 50, Gender: "male" },
//         { Name: "Khadiza", Age: 25, Gender: "female" },
//     ])
// );

//2.Task: Object Manipulation

function objectManipulation(arr) {
    return arr.map(book => book.Title)
}
// console.log(objectManipulation([
//     { Title: "To Kill a Mockingbird", Author: "Harper Lee", Year: 1960 },
//     { Title: "1984", Author: "George Orwell", Year: 1949 },
//     { Title: "The Great Gatsby", Author: "F. Scott Fitzgerald", Year: 1925 },
// ]));

//5.Task: Find And Modify
function printAndModify(arr, name, age) {
    return arr.map(person => {
        if (person.Name === name) {
            person.Age = age;
        }
        return person
    })
}
// console.log(printAndModify([
//     { Name: "Hayat", Age: 20 },
//     { Name: "Hossain", Age: 25 },
//     { Name: "Nakib", Age: 30 },
// ], "Nakib", 35));

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