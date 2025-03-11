// map()
let myNumbers = [3, 4, 2, 1, 5, 11];
let myDoubleNumbers = myNumbers.map((val) => val * 2);
console.log(myDoubleNumbers);

// filter()
let myRandomNumbers = [2, 6, 11, 97];

function isPrime(num) {
  if (num < 2) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
  }
  return true;
}
let myLuckyNumbers = myRandomNumbers.filter((val) => isPrime(val));
console.log(myLuckyNumbers);

// find()

let myHobbies = ["sleeping", "yoga", "eating", "running", "testing", "coding"];
let myTop = myHobbies.find((item) => item.trim().includes("test"));

console.log("My top hobby is", myTop);
