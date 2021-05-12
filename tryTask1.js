const VendingMachine = require('./task1/vendingMachine');

const products = null; // define custom product list here (OPTIONAL)
// Format: Object of products with key ID and value [PRICE, NAME]
// Example
// {
//     1:[100,"Orange juice"],
//     2:[200,"Soda"],
//     3:[150,"Chocolate snack"],
//     4:[250,"Cookies"],
//     5:[180,"Gummy bears"],
//     6:[500,"Condoms"],
//     7:[120,"Crackers"],
//     8:[220,"Potato chips"],
//     9:[80, "Small snack"]
// }

try {
    const vendingMachine = new VendingMachine(products);
    const result = vendingMachine.purchase(1000,3); //Input here
    console.log(result);
} catch (err) {
    console.log('ERROR: ',err.message);
}
