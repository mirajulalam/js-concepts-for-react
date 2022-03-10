const number = [12, 344, 5, 3, 632, 6];
const student = {
    name: 'hasan khan',
    age: 22,
    subject: ['bangla', 'math', 'english']
}
// 1. Templeate string
const about = `My number: ${number[1]} My name: ${student.name} My subject: ${student.subject[0]}`;
// 2. Arrow function
const setNumber = () => 99;
const addfiftySix = num => num + 56;
const evenNumber = x => x % 2 == 0;
const addThreeNumber = (x, y, z) => x + y + z;
const addTwo = (num1, num2) => {
    const num = num1 + num2;
    return num;
}
// 3.spread oparator
const newNumber = [...number];
// create a new array form an order array and add an element
const addElement = [...number, 111, 222, 333];

number.push(999)
number.push(999)
number.push(999)
console.log(newNumber);
console.log(number)
console.log(addElement)