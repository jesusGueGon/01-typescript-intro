import { Product, taxCalculation } from './06-function-destructuring';

//Se repiten los console.log, ya que al ejecutar codigo import
//importamos todo el archivo y se ejecuta tambien

const shoppingCart: Product[] = [
    {
        description: "Nokia",
        price: 100
    },
    {
        description: "iPad",
        price: 150
    }
];


const [ total, tax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log("Total: ", total);
console.log("Tax: ", tax);
