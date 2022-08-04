//1

const colors = ['red', 'green', 'blue'];

console.log(colors.length);

//2

const animals = ['monkey', 'dog', 'cat'];

let arrLength = animals.length - 1;

console.log(arrLength);

//3

const numbers = [5, 43, 63, 23, 90];

// numbers.splice(0,5);
numbers.length = 0;

console.log(numbers);


//4

const students = ['Polina', 'Dasha', 'Masha'];

students.splice(2,1, 'Borya');
students.splice(0,1, 'Andrey');

console.log(students);

//5

const cats = ['Gachito', 'Tom', 'Batman']

for (i = 0; i<cats.length; i++) {
    console.log([i]);
}


for (let cat of cats) {
    console.log(cat);
}

//6

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const Numbers = evenNumbers.concat(oddNumbers);

console.log(Numbers);

console.log(Numbers.indexOf(8));

//7

const binary = [0, 0, 0, 0]

console.log(binary.join(''));

//8

let word = 'топот';

let palindrom = function (word){
    
    let splitWord = word.split('');
    let revWord = splitWord.reverse();
    let drow = revWord.join('');


    if (word == drow){
        console.log('This is palindrom!');
    } else (console.log("This word is not palindrom!"));
}

console.log(palindrom(word));

//9

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

let sumOne = matrix[0].reduce((a,b) => a+b, 0);
let midOne = sumOne/matrix[0].length;

console.log (midOne);

let sumTwo = matrix[1].reduce((a,b) => a+b, 0);
let midTwo = sumTwo/matrix[1].length;

console.log (midTwo);

let sumTree = matrix[2].reduce((a,b) => a+b, 0);
let midTree = sumTree/matrix[2].length;

console.log (midTree);

let sumFour = matrix[3].reduce((a,b) => a+b, 0);
let midFour = sumFour/matrix[3].length;

console.log (midFour);






