
//String Manipulation

//Reverse a String//
console.log("hello world")
function countCharacters(str) {
    var count = 0
    for (var i = 0; i < str.length; i++) {
        count++
    } return count
} console.log(countCharacters("hello world"))

//Count Characters
function reverseString(str) {
    var newword = ""
    for (var i = str.length - 1; i >= 0; i--) {
        newword += str[i]
    }
    return newword
}
console.log(reverseString("hello"))

//Capitalize Words
function capitalizeWords(sentence) {
    var words = sentence.split(" ")
    var array = []
    for (var i = 0; i < words.length; i++) {
        array.push(words[i][0].toUpperCase() + words[i].substring(1).toLowerCase())
    }
    return array.join(" ")
} console.log(capitalizeWords("hello world"))

/******************************** Maximum */

var arr = [3, 5, 1, 8, 2];
var max = arr[0];

for (var j = 1; j < arr.length; j++) {
    if (arr[j] > max) {
        max = arr[j];
    }
}

console.log(max); 

/********************************Minimum*/

var arr = [3, 5, 1, 8, 2];
var min = arr[0];

for (var j = 1; j < arr.length; j++) {
    if (arr[j] < min) {
        min = arr[j];
    }
}

console.log(min);

/********************************Sum of Array */
var arr = [1, 2, 3, 4, 5];
var sum = 0;

for (var j = 0; j < arr.length; j++) {
    sum += arr[j];
}

console.log(sum);

/**********************************Filter Array */
var arr = [1, 2, 3, 4, 5];
var isEven = [];
var condition = function(num) {
    return num % 2 === 0;
};

for (var j = 0; j < arr.length; j++) {
    if (condition(arr[j])) {
        isEven.push(arr[j]);
    }
}

console.log(isEven); 

//Mathematical Functions//

/***************************************Factorial */
var n = 5;
var factorial = 1;

for (var j = 1; j <= n; j++) {
    factorial *= j;
}

console.log(factorial);

/***********************************Prime Number Check */
var num = 5;
var isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (var j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime);

/**************************************Fibonacci Sequence */
var n = 5;
var sequence = [];

for (var j = 0; j < n; j++) {
    if (j === 0) {
        sequence.push(0);
    } else if (j === 1) {
        sequence.push(1);
    } else {
        sequence.push(sequence[j - 1] + sequence[j - 2]);
    }
}

console.log(sequence); 









