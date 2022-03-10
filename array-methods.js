const products = [
    { name: 'laptop', price: 50000, brand: 'dell', color: 'silver' },
    { name: 'mobile', price: 15000, brand: 'samsung', color: 'yellow' },
    { name: 'watch', price: 10000, brand: 'Iphone', color: 'white' },
    { name: 'sunglass', price: 500, brand: 'optics', color: 'gray' }
];
// 1.map
const brand = products.map(product => product.brand);
// console.log(brand);
const price = products.map(product => product.price);
// console.log(price)

// 2.forEach
products.forEach(product => console.log(product))
products.forEach(product => console.log(product.name))
products.forEach(product => {

})

// 3.filter
const productsPirce = products.filter(product => product.price < 13000);
// console.log(productsPirce)
const productsName = products.filter(product => product.name.includes('n'));
// console.log(productsName)

// 4. find
const specialName = products.find(product => product.name.includes('n'));
console.log(specialName);