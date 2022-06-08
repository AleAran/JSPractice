// JavaScript source code

//TODO Item Shop & Editor: Won't work on this until the next excercise, since this one doesn't cover object and array... Shame.
//Ph items --> Array of Objects
//Item Selection. 


/*const INTEREST_RATE = 5.04;

const mItemsContainer = [];

let mContinue;
let mInstallments;
let mFinalValue = 0;

//---------------------
//Main Loop//

CreatePHItems();
let menuString = new String();
for (var i = 0; i < mItemsContainer.length; i++) {
    menuString += i +") " + mItemsContainer[i].itemName + " Value: $" + mItemsContainer[i].itemValue + "\n";
}

let itemValue = mItemsContainer[parseInt(prompt("Hello User! \nWrite the number of the item you want to use \n" + menuString))].itemValue;
Calculate(itemValue);
mContinue = confirm("AddAnotherProduct?");

while (mContinue != false) {
    let itemValue = mItemsContainer[parseInt(prompt("Select your next product"))].itemValue;
    Calculate(itemValue);
    mContinue = confirm("AddAnotherProduct?");
}

mInstallments = parseInt(prompt("In how many Installments?"));
Installments(mInstallments);

alert("You have to pay " + mFinalValue + " during " + mInstallments + " Months.");
*/
let div = document.getElementById("testDiv");
let paragraph = document.getElementById("testP");

 // we can get and manipulate the content here
console.log(div.innerHTML);
let h1 = document.createElement("h1");
h1.innerHTML = "<h1>Created H1</h1>";
paragraph.innerHTML = "<h2>Created H2</h2>";

paragraph.append(h1);
//window.close();

//---------------------
//Functions//

function Calculate(newProductValue) {
    mFinalValue += newProductValue;
}

//Barebones Installments calculation with basic Interest, proper calculation will be done later, once I understand properly how to calculate this with the current laws... this is a pain.
function Installments(totalInstallments) {
    if (totalInstallments > 1) {
        //RateCalculation
        mFinalValue = (mFinalValue * ((totalInstallments * INTEREST_RATE) + 100)) / 100;

        //We divide the installments and use Math.Round to truncate up to two decimals.
        mFinalValue = Math.round((mFinalValue /= totalInstallments) * 100) / 100;
    }
}

function CreatePHItems()
{
    const firstItem = new PHItem("Lechuga", 200);
    const secondItem = new PHItem("Tomate", 100);
    const thirdItem = new PHItem("Zanahoria", 50);

    mItemsContainer.push(firstItem, secondItem, thirdItem);
}

//---------------------
//Constructors//

function PHItem(itemName, itemValue) {
    this.itemName = itemName;
    this.itemValue = itemValue;
}
