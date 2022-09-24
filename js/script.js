function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

Pizza.prototype.pizzaCost = function () {
  const choiceToppings = ["vegan cheese", "mozzarella", "pepperoni", "sausage", "canadian bacon", "mushroom", "green pepper", "pineapple"];
  let defaultPrice = 10;
  this.toppings.forEach(function (topping) {
    if(choiceToppings.includes(topping)) {
      defaultPrice += 2;
    }
    return pizzaCost();
  })
}