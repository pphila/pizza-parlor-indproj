# _Night Owl Pizza_

#### Designed by _Peter Philavanh_

#### _Pizza order form that takes user input and returns what was ordered and a coinciding price_

## Technologies used
* _HTML_
* _CSS_
* _MarkDown_
* _Boostrap_
* _JavaScript_
* _Google fonts_

## Description
_This is a mock webpage to simulate a pizza parlor's online ordering system. The user can select a size, crust, and various toppings for their own customized pizza. The business logic will take all inputs and return a coinciding price for the user's pizza._

## Setup/Installation Requirments
* _Clone this repository to your local machine's desktop_
* _Use cmd GUI to navigate to the cloned repo_
* _View all source code within director_
* _Open index.html in a browser window or view gh-pages deployement from within the repo link_

# Tests

### Pizza Parlor Test

### Describe: Pizza()

* Test: "It should return an object with first property of size."
* Code: const pizza = new Pizza("large");
* Expected Output: Pizza {size: "large"}

* Test: "It should return a topping and a size"
* Code: const pizza = new Pizza("large", "cheese")
* Expected Output: Pizza {size: "large", topping: "cheese"}

* Test: "It should return a size, topping, and crust"
* Code: " const pizza = new Pizza("large, "pepperoni", "thin")
* Expected Output: Pizza {size: "large", topping: "pepperoni", crust: "thin"}

## Known Bugs
* _Order submit button with anchor tag to jump to hidden div when clicked works only when clicked on white space of submit button and not the text within. Feature has been removed for now_
* _Any other bugs, please report to efl2ice89@gmail.com_

## License
Copyright (c) September 2022 Peter Philavanh

### Describe: pizzaCost()

* Test: "It should return an array of toppings for available choices."
* Code: Pizza.prototype.toppingsArr();
* Expected Output: ["vegan cheese", "pepperoni", "sausage", "canadian bacon", "mushroom", "green pepper", "pineapple"]

* Test: "It should increment cost of pizza according to toppings chosen"
* Code: const pizza = pizzaCost("mozzarella")
Expected Output: 12;

