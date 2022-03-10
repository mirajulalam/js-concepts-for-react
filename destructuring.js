// 1. Array destructuring
const student = [21, 42];
const x = [21];
const y = [42];

const [a, b] = [21, 42];

const [c, d] = student;

// 2. object destructuring
const students = {
    name: 'hasan khan',
    age: 22,
    subject: ['bangla', 'math', 'english']
}

const { name, age } = students;
const [subject] = [students.subject];

const employe = {
    id: 111,
    height: 5.8,
    weight: 70,
    machine: 'dell',
    drink: 'water',
    watch: {
        color: 'black',
        brand: 'casio',
        price: 500
    }
}
const { id, machine } = employe;
const { brand, price } = employe?.watch;