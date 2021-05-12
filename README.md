# Criptan technical challenge

## Task 1: Vending Machine

### Usage:

Clone the repo and run (node required):
```
node tryTask1.js
```

To customize the inputs to the function, modify the tryTask1 file:
* Introduce a custom product list on line 3.
The format is: Object which keys are the product IDs and values are arrays [PRICE, NAME]
Example:
```
{
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
```
* Change the input money or product id to be purchased in line 20. To buy product with id 2 with 5€:
```
vendingMachine.purchase(500,2);
```

## Task 2: Palindrome Childs

### Usage:

Clone the repo and run (node required):
```
node tryTask2.js
```
To customize the inputs to the function, modify the tryTask2 file and input any number to the function on line 4