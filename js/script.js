function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

Pizza.prototype.toppingsArr = function () {
  const choiceToppings = ["vegan cheese", "mozzarella", "pepperoni", "sausage", "canadian bacon", "mushroom", "green pepper", "pineapple"];
  return choiceToppings;
}