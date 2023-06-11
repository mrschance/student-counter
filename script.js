//document.getElementById("count-el").innerText=5;

// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log(count);

// let myAge = 46;
// let humanToDog = 7;
// let myDogAge = myAge * humanToDog;
// console.log(myDogAge);

// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// let lapsCompleted = 0;
// function totalLaps() {
//     lapsCompleted = lapsCompleted + 1;
// }
// totalLaps();
// totalLaps();
// totalLaps();
// console.log(lapsCompleted);

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
    count += 1;
    countEl.textContent = count;
}

function saveCount() {
    console.log(count);
}

let welcomeEl = document.getElementById("welcome-el");
let myName = "Cindy";
let greeting = "Welcome Back, ";
welcomeEl.textContent = greeting + myName;
welcomeEl.textContent += "🤩";

console.log(saveEl);
function save() {
    let saveNew = count + " - ";
    saveEl.textContent += saveNew;
    countEl.textContent = 0;
    count = 0;
}
