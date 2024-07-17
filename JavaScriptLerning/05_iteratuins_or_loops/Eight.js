// reduce js

const myNUmns = [1,2,3]

// const myTotal = myNUmns.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNUmns.reduce( (acc, curr) => ( acc + curr), 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "Python",
        price:1999
    },
    {
        itemName: "JAva",
        price:4499
    },
    {
        itemName: "Dsa",
        price:9999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price) , 0)
console.log(priceToPay);