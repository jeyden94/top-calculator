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

// Live Input

var liveInput = false;


// NumberPad //

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
    console.log(e.keyCode);
}

window.addEventListener("keydown", calculateWithKeys, false);

var zeroBtnValue = document.getElementById("zero-btn").textContent;
var zeroBtnListener = document.getElementById("zero-btn").addEventListener("click", (e) => {
    numberBtnClick(e, zeroBtnValue);
});

// One Button //

var oneBtnValue = document.getElementById("one-btn").textContent;
var oneBtnListenerMpuse = document.getElementById("one-btn").addEventListener("click", (e) => {
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

// Decimal Button //

var decimalBtnValue = document.getElementById("decimal-btn").textContent;
var decimalBtnListener = document.getElementById("decimal-btn").addEventListener("click", (e) => {
    numberBtnClick(e, decimalBtnValue);
});

function calculateWithKeys(e) {
    if (e.keyCode === 96) {numberBtnClick(e, zeroBtnValue)}
    else if (e.keyCode === 97) {numberBtnClick(e, oneBtnValue)}
    else if (e.keyCode === 98) {numberBtnClick(e, twoBtnValue)}
    else if (e.keyCode === 99) {numberBtnClick(e, threeBtnValue)}
    else if (e.keyCode === 100) {numberBtnClick(e, fourBtnValue)}
    else if (e.keyCode === 101) {numberBtnClick(e, fiveBtnValue)}
    else if (e.keyCode === 102) {numberBtnClick(e, sixBtnValue)}
    else if (e.keyCode === 103) {numberBtnClick(e, sevenBtnValue)}
    else if (e.keyCode === 104) {numberBtnClick(e, eightBtnValue)}
    else if (e.keyCode === 105) {numberBtnClick(e, nineBtnValue)}
    else if (e.keyCode === 111) {createDivisionExpression(e, divideBtn)}
    else if (e.keyCode === 106) {createMultiplicationExpression(e, multiplyBtn)}
    else if (e.keyCode === 109) {createSubtractionExpression(e, subtractBtn)}    
    else if (e.keyCode === 107) {createAdditionExpression(e, addBtn)}    
    else if (e.keyCode === 13) {calculateValue()}    
    else if (e.keyCode === 110) {numberBtnClick(e, decimalBtnValue)}    
    else if (e.keyCode === 8) {deleteLastNum()}    
};

// Function for Numbered Buttons //

function numberBtnClick(e, btnValue) {
    if (btnValue === decimalBtnValue) {console.log("hi")}
    var currentOutput = document.getElementById("output-text").textContent;
    if (btnValue === decimalBtnValue && currentOutput === "0") {
        return null;
    } else if (btnValue === decimalBtnValue && currentOutput.includes(".")) {
        return null;
    } else if (currentOutput === "0") {
        document.getElementById("output-text").textContent = btnValue;
        liveOperandForScreen = false;
    } else if (currentOutput.length > 8 ) { 
        return null;
    } else if (liveOperandForScreen === true) {
        document.getElementById("output-text").textContent = btnValue;
        liveOperandForScreen = false;
    } else if (liveOperandForScreen === false) {
        document.getElementById("output-text").textContent += btnValue;
    } else {
        document.getElementById("output-text").textContent += btnValue;
    }
    liveInput = true;
    console.log(termOne)
    console.log(liveInput)
};

// --- Expressions --- //

var trackedOperand = "";
var liveOperandForScreen = false;
var liveOperand = false;
var termOne = null;
var termTwo = null;

// Addition Button //

var addBtn = document.getElementById("add-btn").textContent;
var addBtnListener = document.getElementById("add-btn").addEventListener("click", (e) => {
    createAdditionExpression(e, addBtn);
});

function createAdditionExpression(e, addBtn) {

    if (liveInput === false) {return null}

    if (termOne === null) { 
        var currentOutput = document.getElementById("output-text").textContent;
        termOne = parseFloat(currentOutput);
        document.getElementById("output-text").textContent = "0";
    }

    else if (termOne !== null) {
        calculateValue();

    }

    trackedOperand = addBtn;
    liveOperandForScreen = true;
    liveOperand = true;
    liveInput = false;

};

// Subtract Button //

var subtractBtn = document.getElementById("subtract-btn").textContent;
var subtractBtnListener = document.getElementById("subtract-btn").addEventListener("click", (e) => {
    createSubtractionExpression(e, subtractBtn);
});

function createSubtractionExpression(e, subtractBtn) {

    if (liveInput === false) {return null}

    liveOperandForScreen = true;
    liveOperand = true;

    if (termOne === null) { 
        var currentOutput = document.getElementById("output-text").textContent;
        termOne = parseFloat(currentOutput);
        document.getElementById("output-text").textContent = "0";
    }

    else if (termOne !== null) {
        calculateValue();
    }

    trackedOperand = subtractBtn;
    liveOperand = true;
    liveInput = false;

};


// Multiplication Button //

var multiplyBtn = document.getElementById("multiply-btn").textContent;
var addBtnListener = document.getElementById("multiply-btn").addEventListener("click", (e) => {
    createMultiplicationExpression(e, multiplyBtn);
});

function createMultiplicationExpression(e, multiplyBtn) {

    if (liveInput === false) {return null}

    if (termOne === null) { 
        var currentOutput = document.getElementById("output-text").textContent;
        termOne = parseFloat(currentOutput);
        document.getElementById("output-text").textContent = "0";
    }

    else if (termOne !== null) {
        calculateValue();
    }

    trackedOperand = multiplyBtn;
    liveOperandForScreen = true;
    liveOperand = true;
    liveInput = false;

};

// Division Button //

var divideBtn = document.getElementById("divide-btn").textContent;
var addBtnListener = document.getElementById("divide-btn").addEventListener("click", (e) => {
    createDivisionExpression(e, divideBtn);
});

function createDivisionExpression(e, divideBtn) {

    if (liveInput === false) {return null}

    if (termOne === null) { 
        var currentOutput = document.getElementById("output-text").textContent;
        termOne = parseFloat(currentOutput);
        document.getElementById("output-text").textContent = "0";
    }

    else if (termOne !== null) {
        calculateValue();
    }

    trackedOperand = divideBtn;
    liveOperandForScreen = true;
    liveOperand = true;
    liveInput = false;

};

// Equals Button //

var equalsBtn = document.getElementById("equals-btn").textContent;
var equalsBtnListener = document.getElementById("equals-btn").addEventListener("click", calculateValue);

// Primary Calculation Function //

function calculateValue() {

    if (termOne !== null && liveInput === true) {

        var currentOutput = document.getElementById("output-text").textContent;
        termTwo = parseFloat(currentOutput);

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

        else if (trackedOperand === multiplyBtn) {
            product = multiplyTerms(termOne, termTwo);
            termOne = product;
            document.getElementById("output-text").textContent = `${product}`;
        }

        else if (trackedOperand === divideBtn) {
            quotient = divideTerms(termOne, termTwo);
            termOne = quotient;
            document.getElementById("output-text").textContent = `${quotient}`;
        }

        liveOperand = false;
        trackedOperand = "";

    } else {
        return null
    };
};

// Individual Math Functions //

function addTerms(termOne, termTwo) {
    var sum = termOne + termTwo;
    if (sum.toString().length > 8) {
        sum = sum.toPrecision(8);
    }
    return sum;
};

function subtractTerms(termOne, termTwo) {
    var difference = termOne - termTwo;
    if (difference.toString().length > 8) {
        difference = difference.toPrecision(8);
    }
    return difference;
};

function multiplyTerms(termOne, termTwo) {
    var product = termOne * termTwo;
    if (product.toString().length > 8) {
        product = product.toPrecision(8);
    }
    return product;
};

function divideTerms(termOne, termTwo) {
    var quotient = termOne / termTwo;
    if (quotient.toString().length > 8) {
        quotient = quotient.toPrecision(8);
    }
    return quotient;
};
