

# Tests

### Pizza Parlor Test

### Describe: Pizza()

* Test: "It should return an object with first property of size."
* Code: const pizza = new Pizza("large");
* Expected Output: Pizza {size: "large"}

* Test: "It should return a topping and a size"
### Code: const pizza = new Pizza("large", "cheese")
Expected Output: Pizza {size: "large", topping: "cheese"}

Test: "It should return a size, topping, and crust"
Code: " const pizza = new Pizza("large, "pepperoni", "thin")
Expected Output: Pizza {size: "large", topping: "pepperoni", crust: "thin"}

Describe: pizzaCost()

Test: "It should return an array of toppings for available choices."
Code: Pizza.prototype.toppingsArr();
Expected Output: ["vegan cheese", "pepperoni", "sausage", "canadian bacon", "mushroom", "green pepper", "pineapple"]

Test: "It should increment cost of pizza according to toppings chosen"
Code: const pizza = pizzaCost("mozzarella")
Expected Output: 12;

