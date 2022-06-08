// JavaScript source code

const INTEREST_RATE = 5.04;

let mContinue;
let mInstallments;
let mFinalValue = 0;

const mItemsContainer = GetPHItems() || [];
const mCartContanier = GetCart() || [];


//---------------------
//Main Loop//

//CreatePHItems if needed
mItemsContainer.length === 0 && CreatePHItems();

let menuString = new String();
for (var i = 0; i < mItemsContainer.length; i++) {
    menuString += i +") " + mItemsContainer[i].itemName + " Value: $" + mItemsContainer[i].itemValue + "\n";
}

let item = mItemsContainer[parseInt(prompt("Hello User! \nWrite the number of the item you want to use \n" + menuString))];
mCartContanier.push(item);
mContinue = confirm("AddAnotherProduct?");

while (mContinue != false) {
    let item = mItemsContainer[parseInt(prompt("Select your next product"))].item;
    mCartContanier.push(item);
    mContinue = confirm("AddAnotherProduct?");
}

Calculate();

mInstallments = parseInt(prompt("In how many Installments?"));
Installments(mInstallments);

alert("You have to pay " + mFinalValue + " during " + mInstallments + " Months.");

let div = document.getElementById("testDiv");
let paragraph = document.getElementById("testP");
let link = document.getElementById("testLink");

//Test event. These two are the best, we don't want html to handle and/or know events
link.addEventListener("click", OnClick);
link.onclick = () => { console.log("Arrow funcion on event"); }

window.close();

//---------------------
//Functions//

function Calculate() {
    for (var i = 0; i < mCartContanier.length; i++) {
        mFinalValue += mCartContanier[i].itemValue;
    }
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
    localStorage.setItem('ItemArray', mItemsContainer);
}

function GetPHItems()
{
    return localStorage.getItem('ItemArray');
}

function GetCart()
{
    return localStorage.getItem('CartArray');
}

//---------------------
//Constructors//

function PHItem(itemName, itemValue) {
    this.itemName = itemName;
    this.itemValue = itemValue;
}

//---------------------
//Event Handlers//

function OnClick(){
    console.log("Button Clicked!");
}
