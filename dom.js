
// All Clear Button //

var allClearBtn = document.getElementById("all-clear-btn").addEventListener("click", clearScreen);

function clearScreen() {
    document.getElementById("output-text").textContent = "0";
}



// One Button //

var oneBtnValue = document.getElementById("one-btn").textContent;
var oneBtnListener = document.getElementById("one-btn").addEventListener("click", (e) => {
    numberBtnClick(e, oneBtnValue);
});

// Two Button //

var twoBtnValue = document.getElementById("two-btn").textContent;
var twoBtnListener = document.getElementById("two-btn").addEventListener("click", (e) => {
    numberBtnClick(e, twoBtnValue);
});

// Thre Button //

var threeBtnValue = document.getElementById("three-btn").textContent;
var threeBtnListener = document.getElementById("three-btn").addEventListener("click", (e) => {
    numberBtnClick(e, threeBtnValue);
});

// Four Button //

var fourBtnValue = document.getElementById("four-btn").textContent;
var fourBtnListener = document.getElementById("four-btn").addEventListener("click", (e) => {
    numberBtnClick(e, fourBtnValue);
});

// Five Button //

var fiveBtnValue = document.getElementById("five-btn").textContent;
var fiveBtnListener = document.getElementById("five-btn").addEventListener("click", (e) => {
    numberBtnClick(e, fiveBtnValue);
});

// Six Button //

var sixBtnValue = document.getElementById("six-btn").textContent;
var sixBtnListener = document.getElementById("six-btn").addEventListener("click", (e) => {
    numberBtnClick(e, sixBtnValue);
});

// Seven Button //

var sevenBtnValue = document.getElementById("seven-btn").textContent;
var sevenBtnListener = document.getElementById("seven-btn").addEventListener("click", (e) => {
    numberBtnClick(e, sevenBtnValue);
});

// Eight Button //

var eightBtnValue = document.getElementById("eight-btn").textContent;
var eightBtnListener = document.getElementById("eight-btn").addEventListener("click", (e) => {
    numberBtnClick(e, eightBtnValue);
});

// Nine Button //

var nineBtnValue = document.getElementById("nine-btn").textContent;
var nineBtnListener = document.getElementById("nine-btn").addEventListener("click", (e) => {
    numberBtnClick(e, nineBtnValue);
});



function numberBtnClick(e, btnValue) {
    var currentOutput = document.getElementById("output-text").textContent;
    if (currentOutput === "0") {
        document.getElementById("output-text").textContent = btnValue;
    } else {
        document.getElementById("output-text").textContent += btnValue;
    }
    
}







// const add = function(...nums) {
// 	return nums.reduce((summedNums, eachNum) => summedNums + eachNum, 0);
// };

// const subtract = function(...nums) {
// 	return nums.reduce((subtractedNums, eachNum) => subtractedNums - eachNum);
// };

// const sum = function(nums) {
// 	return nums.reduce((summedNums, eachNum) => summedNums + eachNum, 0);
// };

// const multiply = function(nums) {
//   return nums.reduce((numsProduct, eachNum) => numsProduct * eachNum, 1);
// };