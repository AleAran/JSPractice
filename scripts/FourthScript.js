// JavaScript source code

//Ok... Time to start giving this a proper store shape.

/* Things to add logic for:
1) Html pages and manipulation, once we start working on it, we are going to make it behave fancy. -> This is priority
2) Product Management -> Add/remove items from store if you are a Manager -> Maybe we can add some sort of library for this? Nothing fancy, but also nothing lazy.
3) Recommended Items -> Don't go crazy here with the scope, just display the items with most sells.
4) Checkout screen -> This one is simple, we do have the work done, but we want to have a proper screen for this one.
5) Filter product types + searcher... I'm 90% sure we do have some sort of library. Am I able to do most of the work?. Yeah, but it might be best for the interest of the project to use more of these things, this isn't gamedev, was told that here we do not to create everthing from scratch.
6) Multi file implementation, we don't want everything in one js file, that's a nono thing to do.*/

//---------------------
//Member declaration//
const INTEREST_RATE = 5.04;

let mContinue;
let mInstallments;
let mFinalValue = 0;

const mItemsContainer = GetPHItems() || [];
const mCartContanier = GetCart() || [];


//---------------------
//Init//

mItemsContainer.length === 0 && CreatePHItems();

let menuString = new String();
for (var i = 0; i < mItemsContainer.length; i++) {
    menuString += i + ") " + mItemsContainer[i].itemName + " Value: $" + mItemsContainer[i].itemValue + "\n";
}


//---------------------
//Main Loop//

while (mContinue != false) {
    try{
        let mPromtMessage = mCartContanier.length === 0 ? "Hello User! \nWrite the number of the item you want to buy" : "Cart:\n" + CreateCartInventory() + "\nSelect your next product";
        let item = mItemsContainer[parseInt(prompt(mPromtMessage + "\n" + menuString))];
        (item != undefined) && mCartContanier.push(item);

        localStorage.setItem('CartArray', JSON.stringify(mCartContanier));

        mContinue = confirm("AddAnotherProduct?");
    } catch (e)
    {
        console.log(e);
        alert("Invalid Item selected!\n Chose another");
    }
}

Calculate();

mInstallments = parseInt(prompt("In how many Installments?"));
Installments(mInstallments);

Swal.fire({ position: 'center', icon: 'success', title: 'You have to pay ' + mFinalValue + ' during ' + mInstallments + ' Months.'});
//alert("You have to pay " + mFinalValue + " during " + mInstallments + " Months.");

let div = document.getElementById("testDiv");
let paragraph = document.getElementById("testP");
let link = document.getElementById("testLink");

//Shutdown
localStorage.removeItem('CartArray');
//window.close();


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

function CreatePHItems(){
    const firstItem = new PHItem("Lechuga", 200);
    const secondItem = new PHItem("Tomate", 100);
    const thirdItem = new PHItem("Zanahoria", 50);

    mItemsContainer.push(firstItem, secondItem, thirdItem);
    localStorage.setItem('ItemArray', JSON.stringify(mItemsContainer));
}

function CreateCartInventory(){
    let cartString = new String();
    for (var i = 0; i < mCartContanier.length; i++) {
        cartString += "- " + mCartContanier[i].itemName + " Value: $" + mCartContanier[i].itemValue + "\n";
    }

    return cartString;
}

function GetPHItems(){
    try {
        const itemArray = JSON.parse(localStorage.getItem('ItemArray'));
        return itemArray;

    } catch (e) {
        console.log(e);
        return undefined;
    }
}

function GetCart(){
    try {
        const cartArray = JSON.parse(localStorage.getItem('CartArray'));
        return cartArray;

    } catch (e) {
        console.log(e);
        return undefined;
    }
}


//---------------------
//Constructors//

function PHItem(itemName, itemValue) {
    this.itemName = itemName;
    this.itemValue = itemValue;
}

//---------------------
//Testing// Stuff we don't fully implement on the code beacuse the final proyect isn't final yet. So we really can't give these things an use.
//---------------------

//Test Spread
function addition(...numberArray) {
    return testReduction = numberArray.reduce((prev, current) => prev + current, 0);
}
console.log(addition(1, 2, 3, 4));

//Test Array Destructuring
const [, second, third] = mItemsContainer;
console.log(second.itemValue);
console.log(third.itemName);

//Test event. These two are the best, we don't want html to handle and/or know events
link.addEventListener("click", OnClick);
link.onclick = () => { console.log("Arrow funcion on event"); }

//---------------------
//Event Handlers//

function OnClick(){
    console.log("Button Clicked!");
}