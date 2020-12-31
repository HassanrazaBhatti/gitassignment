// Question No 1


// var C = prompt("Enter temprature in calsius");
// const updated_tempratuer = 9/5 * C + 32;
// alert("The converted temprature from calsius is   " + updated_tempratuer);  


// Question No 2

// var height = prompt("Enter Your Height");
// const updated_height = height * 2.54;
// console.log(updated_height)



// Question No 3

// var marks = prompt("Enter Your Marks");
// if (marks > 80 ){
//     alert("you are above standard, Admission Granted!")
// }


// Question No 4

// program to check if a number is prime or not
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
if (number === 1) {
    console.log("1 is not a prime number.");
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}