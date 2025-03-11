// trim()
let myStr = "  Hien Tran   ";

console.log(myStr);
console.log(myStr.trim());

// toLowerCase() and toUpperCase();
let myName = "Tran Quang Hien";
console.log(myName.toLocaleLowerCase());
console.log(myName.toUpperCase());

// includes()

let myDream = "Be a happy person";
let isYourDreamWorthy = myDream.includes("happy");
console.log("Is your dream worthy?", isYourDreamWorthy);

// replace()

let myPlan = "Be a wise man";
console.log(myPlan.replace("wise", "poor"));

// split()
let myTestAutomationCourse = "Playwright Vietnam K12";
console.log(myTestAutomationCourse.split(" "));

// substring()

let myDreamCar = "Vinfast VF3";
console.log("Model of your dream car?", myDreamCar.substring(8));

// indexOf()

let myDiary =
  "I just do something nice to my parents, because of they are my life.";
console.log(myDiary.indexOf("nice"));
