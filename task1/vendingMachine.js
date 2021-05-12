class VendingMachine {
    change = [500, 200, 100, 50, 20, 10];
    sampleProducts = {
        1:[100,"Orange juice"],
        2:[200,"Soda"],
        3:[150,"Chocolate snack"],
        4:[250,"Cookies"],
        5:[180,"Gummy bears"],
        6:[500,"Condoms"],
        7:[120,"Crackers"],
        8:[220,"Potato chips"],
        9:[80, "Small snack"]
    }

    constructor(products) {
        if (!products) {
            this.products = this.sampleProducts;
            return;
        }
        if(typeof products !== 'object')
            throw new Error("Incorrect product list format. Input must be an object.");
        for(const id in products) {
            if(products[id].constructor !== Array || products[id].length!=2)
                throw new Error("Incorrect product list format. Product must be an array of size 2. Id: " + id);
            if(typeof products[id][0] != 'number' || products[id][0]%10 !== 0)
                throw new Error("Incorrect product list format. Product price must be a multiple of 10. Id: " + id);
        }
        this.products = products;
    }

    purchase(money,id) {
        const product = this.products[id];
        if(!product) {
            throw new Error("The product was not found in the available product list.");
        }
        const productName = product[1];
        const productPrice = product[0];
        if (money<0) {
            throw new Error("Please stop stealing money from the machine.");
        }
        if (money==0) {
            throw new Error("Please remember to introduce the money before making your selection.");
        }
        if (money%10 !== 0) {
            throw new Error("The machine does not admit smaller coins than 10 cents. Please take back your money.");
        }
        if (money>5000) {
            throw new Error("The machine admits up to a 50€ bill. Please take back your money.");
        }
        if (money<productPrice) {
            console.log("You don't have enough money for that product.");
            return {product:null,change:this.getChange(money,0)};
        } 
        const change = this.getChange(money,productPrice);
        return {product:productName,change};
    }

    getChange(money,price) {
        let changeN = money-price;
        let change = [];
        while (changeN>0) {
            for (const coin of this.change) {
                if (coin<=changeN) {
                    change.push(coin);
                    changeN -= coin;
                    break;
                }
            }
        }
        return change;
    }
}

module.exports = VendingMachine;