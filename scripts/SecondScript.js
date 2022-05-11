// JavaScript source code

//TODO Item Shop & Editor: Won't work on this until the next excercise, since this one doesn't cover object and array... Shame.
//Ph items --> Array of Objects
//Item Selection. 

//Add Item
//Pagar a cuota?
//Cuantas?
//Costo total.


let mFinalValue = 0;
let mInstallments;
let mContinue;

Calculate(parseInt(prompt("Hello User! \nEnter your product value")));
mContinue = confirm("AddAnotherProduct?");

while (mContinue != false) {
    Calculate(parseInt(prompt("Enter your product value")));
    mContinue = confirm("AddAnotherProduct?");
}

mInstallments = parseInt(prompt("In how many Installments?"));
Installments(mInstallments);

alert("You have to pay " + mFinalValue + " during " + mInstallments + " Months.");

window.close();

function Calculate(newProductValue) {
    mFinalValue += newProductValue;
}

//Barebones Installments calculation without Interest, interest rates will be done later.
function Installments(totalInstallments) {
    mFinalValue /= totalInstallments;
}
