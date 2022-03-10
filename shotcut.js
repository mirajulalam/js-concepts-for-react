// truety: true, anynumberPositiveorNegative, '0', [],{},anything else that is not falsy will be truthy
// falsy: false, 0, '', undefine, null ,NaN

let myVar = 5;
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
// if nagetive or falsy
if (!myMoney) {

}

let myMoneys = 80;
let food;
if (myMoneys > 100) {
    food = 'biriyani kabo'
}
else {
    food = 'chai biskuts kabo'
}

// ternary
let food1 = myMoneys > 100 ? 'biriyani kabo' : 'chai biskuts kabo';
// console.log(food1)
let drink = (myMoneys > 100 && myVar > 100) ? 'cock' : 'filter water';
// console.log(drink)

// number to string conversetion
const num = 999;
const sum = num + '';
// console.log(num);

// string to number 
const input = '999';
const add = +input;
// console.log(add)
let isActive = false;
const showUser = () => console.log('show User')
const hideUser = () => console.log('hide User')
// isActive ? showUser() : hideUser
// use && if the left side true then right side will be excuted
isActive && showUser()
// use || if the left side false then right side will be excuted
isActive || hideUser()

// toggle
isActive = !isActive

const obj = { a: 1 };
console.log(Object.keys(obj).length === 0);