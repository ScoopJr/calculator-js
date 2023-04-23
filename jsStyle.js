//using js style sheet to clean up index file and style classes

// body class
const bodyClass = 
    //"bg-purple-800 bg-gradient-to-br from-blue-300 bg-opacity-25";
    "bg-blue-800 bg-gradient-to-br from-gray-300 bg-opacity-25";
const body = document.querySelector("body");
bodyClass.split(" ").forEach((cls) => body.classList.add(cls)); 
    // convert string into an array. creates new element for every space

// calcBody class
const calcBodyClass = 
    //"max-w-lg rounded overflow-hidden shadow-2xl bg-pink-700 bg-opacity-75 bg-gradient-to-tr from-gray-800 flex";
    "max-w-lg rounded overflow-hidden shadow-2xl bg-blue-700 bg-opacity-75 bg-gradient-to-tr from-gray-800 flex";
const calcBody = document.querySelector(".calcBody");
calcBodyClass.split(" ").forEach((cls) => calcBody.classList.add(cls)); 

// output class
const outputClass = 
    "flex flex-col w-3/4 h-12 justify-center items-end m-1 bg-gray-300 text-gray-900 font-semibold px-2 border border-black hover:border-gray-500 rounded";
const output = document.querySelector(".output");
outputClass.split(" ").forEach((cls) => output.classList.add(cls)); 

// previousNumber class
const previousNumberClass = 
    "flex max-w-lg h-1/3 pb-5 pt-1 text-gray-600 text-xs";
const previousNumber = document.querySelector(".previousNumber");
previousNumberClass.split(" ").forEach((cls) => previousNumber.classList.add(cls)); 

// currentNumber class
const currentNumberClass = 
    "flex max-w-lg h-2/3 pb-2 text-xl";
const currentNumber = document.querySelector(".currentNumber");
currentNumberClass.split(" ").forEach((cls) => currentNumber.classList.add(cls)); 

// all buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    addClasses(btn)
})

// specific button types
function addClasses(button) {
const btnNumberClass = "hover:bg-blue-500 border-blue-500"; //"hover:bg-green-500 border-green-500";
const btnOperatorClass = "hover:bg-red-500 border-red-500"; //"hover:bg-blue-500 border-blue-500";
const btnClearClass = "hover:bg-black-500 border-black-500"; //"hover:bg-orange-500 border-orange-500";
const btnDecimalClass = "hover:bg-red-500 border-red-500"; //"hover:bg-red-500 border-red-500";
const btnEqualsClass = "hover:bg-green-500 border-green-500"; //"hover:bg-yellow-500 border-yellow-500";

if (button.classList.value === "number") {
    btnNumberClass.split(" ").forEach((cls) => button.classList.add(cls));
} else if (button.classList.value === "operator") {
    btnOperatorClass.split(" ").forEach((cls) => button.classList.add(cls));
} else if (button.classList.value === "clear") {
    btnClearClass.split(" ").forEach((cls) => button.classList.add(cls));
} else if (button.classList.value === "decimal") {
    btnDecimalClass.split(" ").forEach((cls) => button.classList.add(cls));
} else if (button.classList.value === "equals") {
    btnEqualsClass.split(" ").forEach((cls) => button.classList.add(cls));
}

// all buttons
const baseClass = 
    "number flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 border hover:border-transparent rounded text-white border-2 text-2xl"
    baseClass.split(" ").forEach((cls) => button.classList.add(cls));
}

