//Guia de estandares:
// Const-> mayusucula.
// var/let js5 y 6, son intercambiables... En Js6. Pero, hay una diferencia: Var vive en toda la funcion, no importa donde se lo crea, let, solamente en el bloque.


let finalValue;
let operation;

let initialValue = prompt("Hello User! \nWrite Initial Value");
let followUpValue = prompt("Write Second Value");

if (!isNaN(initialValue) && !isNaN(followUpValue)) { operation = prompt("Choose operation: + - * /"); }
else { alert("Concatenating strings");}

while (undefined == finalValue) {
    switch (operation) {
        case "-":
            finalValue = initialValue - followUpValue;
            break;

        case "*":
            finalValue = initialValue * followUpValue;
            break;

        case "/":
            finalValue = initialValue / followUpValue;
            break;

        case "+":
            finalValue = parseFloat(initialValue) + parseFloat(followUpValue);
            break;

        case undefined:
            finalValue = initialValue + followUpValue;
            break;

        default:
            alert("Invalid operation");
            operation = prompt("Choose operation: + - * /");
            break;
    }
}

alert("Result " + finalValue);

let iterations = prompt("Ok, now, how many times do you want to loop");
for(i = 0; i < iterations; i++)
{
	finalValue += i;
}
if (isNaN(finalValue)) {alert("Concatenating loop count to the string")};
alert("The new result is " + finalValue);

window.close();