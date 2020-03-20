import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

console.log("Cześć!");
console.log("Jabłka");
console.log("To jest instrukcja");
console.log("To też jest instrukcja");

function myFunc()
{
  console.log("Ta instrukcja jest wewnątrz funkcji");
}
console.log("Ta instrukcja jest na zewnątrz funkcji");
myFunc();

function myFunc2(name, weather="słonecznie", ...extraArgs)
{
  console.log("Cześć, " + name + "!");
  console.log("Dziś jest " + weather + ".");
  for(let i =0; i < extraArgs.length; i++)
  {
    console.log("Dodatkowy argument: " + extraArgs[i]);
  }
}
myFunc2("Adam", "słonecznie", "raz", "dwa", "trzy");

function myFunc3(name) {
  return("Cześć, " + name + "!");
}

console.log(myFunc3("Janusz"));

function myFunc4(nameFunction) {
  return ("Cześć, " + nameFunction() + "!")
}

console.log(myFunc4(function () {
  return "Adam";
}));

function myfunc5(nameFunction)
{
  return ("Cześć, " + nameFunction() + "!")
}

function printName(nameFunction, printFunction) {
  printFunction(myfunc5(nameFunction))
}

printName(function () {
  {return "Adam"}
}, console.log);

const myFunc6 = (nameFunction) => ("Cześć, " + nameFunction() + "!");
const printName2 = (nameFunction, printFunction) =>
    printFunction(myFunc6(nameFunction));
printName2(function () {
  return "Adam"
}, console.log);

function messageFunction(name, weather)
{
  let message = "Cześć, " + name + "!"
  if (weather == "słonecznie")
  {
    let message = "To ładny dzień.";
    console.log(message);
  }
  else
  {
    let message = "Dziś jest " + weather + ".";
    console.log(message);
  }
  console.log(message);
}

messageFunction("Janusz", "pochmurno");

function messageFunction2(name, weather)
{
  var message = "Cześć, " + name + "!"
  if (weather == "słonecznie")
  {
    message = "To ładny dzień.";
    console.log(message);
  }
  else
  {
    message = "Dziś jest " + weather + ".";
    console.log(message);
  }
  console.log(message);
}

messageFunction2("Janusz", "pochmurno");

function myFunc7(name) {
  let myLocalVar = "słonecznie";
  let innerFunction = function () {
    return ("Cześć, " + name + "! Dziś jest " + myLocalVar + ".");
  }
  return innerFunction();
}

console.log(myFunc7("Janusz"));

let firstBool = true;
let secondBool = false;

let firstString = "To jesrt tekst";
let secondString = "I to też.";

function messageFunction3(weather) {
  let message = `Dziś jest ${weather}.`;
  console.log(message);
}

messageFunction3("słonecznie");

let daysInWeek = 7;
let pi = 3.14;
let hexValue = 0xFFFF;

let name = "Adam";
if (name == "Adam")
{
  console.log("Imię to Adam.");
}
else if (name == "Jacek")
{
  console.log("Imię to Jacek");
}

else
{
  console.log("Imię jest inne.")
}

switch (name)
{
  case "Adam":
    console.log("Imię to Adam.");
    break;
  case "Jacek":
    console.log("Imię to Jacek");
    break;
  default:
    console.log("Imię jest inne.");
    break;
}

let firstVal = 5;
let secondVal = "5";

if (firstVal == secondVal)
{
  console.log("Operandy są takie same.");
}
else
{
  console.log("Operandy nie są takie same.");
}

if (firstVal === secondVal)
{
  console.log("Operandy są identyczne.");
}
else
{
  console.log("Operandy nie są identytczne.");
}

let myData1 = 5 + 5;
let myData2 = 5 + "5";
console.log(`Wynik 1: ${myData1}`);
console.log(`Wynik 2: ${myData2}`);

let myData3 = (5).toString() + String(5);
console.log(`Wynik: ${myData3}`);

let firstVal2 = "5";
let secondVal2 = "5";
let result = Number(firstVal2) + Number(secondVal2);
console.log(`Wynik: ${result}`);

let myArray = Array();
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;

let myArray2 = [96, "Janusz", false];

console.log(`Index 0: ${myArray2[0]}`);
myArray2[0] = 69;
console.log(`Index 0: ${myArray2[0]}`);

for (let i = 0; i<myArray2.length; i++)
{
  console.log((`Index ${i}: ${myArray2[i]}`));
}

console.log(`---`);
myArray2.forEach((value, index) => console.log(`Index ${index}: ${value}`));

function printItems(numValue, stringValue, boolValue) {
  console.log(`Number: ${numValue}`);
  console.log(`String: ${stringValue}`);
  console.log(`Boolean: ${boolValue}`);
}
printItems(myArray2[0], myArray2[1], myArray2[2]);
printItems(...myArray2);

let myOtherArray = [100, "Grażyna", true, ...myArray2];
myOtherArray.forEach((value, index) => console.log(`Index ${index}: ${value}`));

let products = [
  {name: "Kapelusz", price: 24.5, stock: 10},
  {name: "Kajak", price: 289.99, stock: 1},
  {name: "Piłka", price: 10, stock: 0},
  {name: "Buty do biegania", price: 116.50, stock: 20}
];

let totalValue = products
    .filter(item => item.stock >0)
    .reduce((prev, item) => prev + (item.price * item.stock), 0);
console.log(`Wartość łączna: ${totalValue.toFixed(2)} PLN`);

let myData4 = new Object();
myData4.name = "Adam";
myData4.weather = "Słonecznie";
console.log(`Cześć ${myData4.name}!`);
console.log(`Dziś jest ${myData4.weather}.`);

let myData5 = {
  name: "Janusz",
  weather: 'piździ',
  printMessages: function () {
    console.log(`Cześć ${this.name}!`);
    console.log((`Dziś ${myData5.weather}.`))
  }
};
myData5.printMessages();

let myData6 = {};
Object.assign(myData6, myData5);
myData5.printMessages();

import additionFunction from "./maths/sum";
let values = [10, 20, 30, 40, 50];
let total = additionFunction(values);
console.log(`Łącznie: ${total}`);

import { multiply, subtract as minus } from "./maths/operations";
console.log(`Iloczyn: ${multiply(values)}`);
console.log(`Różnica: ${minus(1000, values)}`);

import { asyncAdd } from "./maths";
asyncAdd(values).then(total => console.log(`Suma łączna: ${total}`));

async function doTask() {
  let total3 = await asyncAdd(values);
  console.log(`Suma łączna ${total3}`);
}
doTask();