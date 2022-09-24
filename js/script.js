//Business Logic

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
    return defaultPrice;
  })
  console.log(defaultPrice);
}

//User Interface Logic

function handleOrderSubmit(event) {
  event.preventDefault();
  const selectedSize = document.getElementById("pizza-size").value;
  const selectedCrust = document.getElementById("crust").value;
  let toppingsArr = [];
  let selectedToppings = document.querySelector("input[name='topping']:checked").each(function () {
    let topping = 
  });
}

window.addEventListener("load", function() {
  document.querySelector("form#customer-order").addEventListener("submit", handleOrderSubmit);
})