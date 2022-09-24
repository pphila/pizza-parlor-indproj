//Business Logic

function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

Pizza.prototype.pizzaCost = function () {
  const choiceToppings = ["vegan-ch", "mozz", "pepperoni", "sausage", "can-b", "mushy", "grn-pepp", "pineapp"];
  let defaultPrice = 10;
  this.toppings.forEach(function (topping) {
    if(choiceToppings.includes(topping)) {
      defaultPrice += 2;
    }
    return defaultPrice;
  })
  console.log(pizzaCost);
}

//User Interface Logic

function handleOrderSubmit(event) {
  event.preventDefault();
  const selectedSize = document.getElementById("pizza-size").value;
  const selectedCrust = document.getElementById("crust").value;
  const toppingsArr = [];
  const selectedToppings = document.querySelectorAll("input[name='topping']:checked");
  for (let i=0; i<selectedToppings.length; i++) {
  toppingsArr.push(selectedToppings[i].value)
  };
  const newOrder = new Pizza(selectedSize, selectedCrust, selectedToppings);
  console.log(newOrder);
}

window.addEventListener("load", function() {
  document.querySelector("form#customer-order").addEventListener("submit", handleOrderSubmit);
})