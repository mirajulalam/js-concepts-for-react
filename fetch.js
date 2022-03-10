// 1. JSON : stringify, parse
const students = {
    name: 'hasan khan',
    age: 22,
    subject: ['bangla', 'math', 'english']
};

const studentJSON = JSON.stringify(students);
// console.log(students);
// console.log(studentJSON);
const studentObj = JSON.parse(studentJSON);
// console.log(studentObj)

// 2. fetch

// fetch('url')
//     .then(res => res.json())
//     .than(data => console.log(data));


//keyes , values ,entries

const keyes = Object.keys(students);
const values = Object.values(students)
const entries = Object.entries(students);

// for
const number = [21, 312, 423, 454, 23];
number.forEach(num => console.log(num));
number.map(num => num * 2);

// 3. products add or remove
const products = [
    { name: 'laptop', price: 50000, brand: 'dell', color: 'silver' },
    { name: 'mobile', price: 15000, brand: 'samsung', color: 'yellow' },
    { name: 'watch', price: 10000, brand: 'Iphone', color: 'white' },
    { name: 'sunglass', price: 500, brand: 'optics', color: 'gray' }
];
const newProduncts = { name: 'lamp', price: 1000, color: 'blue' };

const newProdunct = [...products, newProduncts];

const remaining = products.filter(p => p.name !== 'mobile');
console.log(remaining)