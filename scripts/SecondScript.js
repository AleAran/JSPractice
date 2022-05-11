// JavaScript source code

//TODO Item Shop & Editor: Won't work on this until the next excercise, since this one doesn't cover object and array... Shame.
//Ph items --> Array of Objects
//Item Selection. 


const INTEREST_RATE = 5.04;

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

//Barebones Installments calculation with basic Interest, proper calculation will be done later, once I understand properly how to calculate this with the current laws... this is a pain.
function Installments(totalInstallments) {
    //RateCalculation
    mFinalValue = (mFinalValue * ((totalInstallments * INTEREST_RATE) + 100)) / 100; 

    //We divide the installments and use Math.Round to truncate up to two decimals.
    mFinalValue = Math.round((mFinalValue /= totalInstallments) * 100) / 100;

}
