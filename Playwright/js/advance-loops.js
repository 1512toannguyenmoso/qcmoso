let arrNumbers = [3, 5, 6, 2, 1, 7, 8, 97, 11];

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

// Using for..of loop

for (let temp of arrNumbers) {
  console.log(`Is ${temp} a prime number? ${isPrime(temp)}`);
}

// Using forEach loop

arrNumbers.forEach((value, index) => {
  console.log(`Is ${value} a prime number? ${isPrime(value)}`);
  console.log(`And has index = ${index}`);
});

// Using for..in loop

for (let i in arrNumbers) {
  console.log(arrNumbers[i]);
}
