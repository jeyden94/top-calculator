// All Clear Button //

var allClearBtn = document.getElementById("all-clear-btn").addEventListener("click", clearScreen);

function clearScreen() {
    document.getElementById("output-text").textContent = "0";
    termOne = null;
    termTwo = null;
    trackedOperand = null;
}

// Delete Button //

var deleteBtn = document.getElementById("delete-btn").addEventListener("click", deleteLastNum);

function deleteLastNum() {
    var output = document.getElementById("output-text");
    if (output.textContent.length > 1) {
        output.textContent = output.textContent.slice(0, -1);
    }
    else {output.textContent = "0"};
};


// Zero Button //

var zeroBtnValue = document.getElementById("zero-btn").textContent;
var zeroBtnListener = document.getElementById("zero-btn").addEventListener("click", (e) => {
    numberBtnClick(e, zeroBtnValue);
});

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

// Function for Numbered Buttons //

function numberBtnClick(e, btnValue) {
    var currentOutput = document.getElementById("output-text").textContent;
    if (currentOutput === "0") {
        document.getElementById("output-text").textContent = btnValue;
    } else if (currentOutput.length > 8) { 
        return null;
    } 
    else if (liveOperand === true) {
        document.getElementById("output-text").textContent = btnValue;
        liveOperand = false;
    }
    else if (liveOperand === false) {
        document.getElementById("output-text").textContent += btnValue;
    } else {
        document.getElementById("output-text").textContent += btnValue;
    }
};

// --- Operand Buttons --- //

var termOne = null;
var termTwo = null;
var trackedOperand = "";
var liveOperand = false;

// Operand Status Trackers //


var addOperandTracker = document.getElementById("add-btn").textContent;
var subtractOperandTracker = document.getElementById("subtract-btn").textContent;

var addOperandLive = document.getElementById("add-btn").addEventListener("click", (e) => {
    turnOnAddOperand(e, addOperandTracker);
});

function turnOnAddOperand(e, addOperandTracker) {
    
    trackedOperand = "+";
    liveOperand = true;

    console.log(trackedOperand)
    console.log(liveOperand)

};

var subtractOperandLive = document.getElementById("subtract-btn").addEventListener("click", (e) => {
    turnOnSubtractOperand(e, subtractOperandTracker);
});

function turnOnSubtractOperand(e, subtractOperandTracker) {
    
    trackedOperand = "-";
    liveOperand = true;

    console.log(trackedOperand)
    console.log(liveOperand)

}

// Addition Button //

var addBtn = document.getElementById("add-btn").textContent;

var addBtnListener = document.getElementById("add-btn").addEventListener("click", (e) => {
    createAdditionExpression(e, addBtn);
});

function createAdditionExpression(e, addBtn) {
    if (termOne === null) { 
        var currentOutput = document.getElementById("output-text").textContent;
        termOne = parseInt(currentOutput);
        document.getElementById("output-text").textContent = "0";
    }
    else if (termOne !== null) {

        var currentOutput = document.getElementById("output-text").textContent;
        termTwo = parseInt(currentOutput);

        if (trackedOperand === addBtn) {
            sum = addTerms(termOne, termTwo);
            termOne = sum;
            document.getElementById("output-text").textContent = `${sum}`;
        }

        else if (trackedOperand === subtractBtn) {
            difference = subtractTerms(termOne, termTwo);
            termOne = difference;
            document.getElementById("output-text").textContent = `${difference}`;
        }
    }
    trackedOperand = addBtn;
    liveOperand = true;
};

function addTerms(termOne, termTwo) {
    var sum = termOne + termTwo;
    console.log("Sum: " + sum);
    return sum;
};

// Subtract Button //

var subtractBtn = document.getElementById("subtract-btn").textContent;

var subtractBtnListener = document.getElementById("subtract-btn").addEventListener("click", (e) => {
    createSubtractionExpression(e, subtractBtn);
});

function createSubtractionExpression(e, subtractBtn) {
    if (termOne === null) { 
        var currentOutput = document.getElementById("output-text").textContent;
        termOne = parseInt(currentOutput);
        document.getElementById("output-text").textContent = "0";
        trackedOperand = subtractBtn;
    }
    else if (termOne !== null) {

        var currentOutput = document.getElementById("output-text").textContent;
        termTwo = parseInt(currentOutput);

        if (trackedOperand === addBtn) {
            sum = addTerms(termOne, termTwo);
            termOne = sum;
            document.getElementById("output-text").textContent = `${sum}`;
        }

        else if (trackedOperand === subtractBtn) {
            difference = subtractTerms(termOne, termTwo);
            termOne = difference;
            document.getElementById("output-text").textContent = `${difference}`;
        }
    }
    trackedOperand = subtractBtn;
    liveOperand = true;
};

function subtractTerms(termOne, termTwo) {
    var difference = termOne - termTwo;
    console.log("Difference: " + difference);
    return difference;
};


// Equals Button //

var equalsBtn = document.getElementById("equals-btn").textContent;

var equalsBtnListener = document.getElementById("equals-btn").addEventListener("click", (e) => {
    calculateValue(e, termOne, termTwo);
});

function calculateValue(e, termOne) {

    console.log(termOne)
    console.log(termTwo)
    console.log(trackedOperand)

    var currentOutput = document.getElementById("output-text").textContent;
    termTwo = parseInt(currentOutput);

    if (trackedOperand === addBtn) {
        sum = addTerms(termOne, termTwo);
        termOne = sum;
        document.getElementById("output-text").textContent = `${sum}`;
    }

    else if (trackedOperand === subtractBtn) {
        difference = subtractTerms(termOne, termTwo);
        termOne = difference;
        document.getElementById("output-text").textContent = `${difference}`;
    }
    liveOperand = false;
    trackedOperand = "";
    
};