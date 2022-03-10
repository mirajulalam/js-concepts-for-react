// 1.variable const and let
const fatherName = 'abul khan';
let session = 'rainy';
session = 'winter';
// 2. 6diference condition:<,>,===,!==,<=,>=
//   mutiple condition: && ,||

if (fatherName === 'Abul khan' || session === 'rainy') {

}
else if (fatherName !== 'abul khan') {

}
else {

}
// 3.Array :indexOf,length,push,pop,includes
const number = [12, 344, 5, 3, 632, 6];
const num = number.length
// console.log(num)

number[0] = 333;
number.push(111)
number.pop()
console.log(number.includes(6))
console.log(number)
// 4. loop :while,for

for (let i = 0; i < number.length; i++) {
    const result = number[i]
    // console.log(result)
}


function mutiple(num1, num2) {
    const total = num1 * num2;
    return total;
}
const output = mutiple(10, 40)
// console.log(output)

const student = {
    name: 'hasan khan',
    age: 22,
    subject: ['bangla', 'math', 'english']
}
const setAge = 'age';
// console.log(student.age); direct by property
// console.log(student['age']); acces via property name string
// console.log(student[setAge]) acces by property name in a