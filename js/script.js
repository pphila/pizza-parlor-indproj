//Business Logic

function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

Pizza.prototype.pizzaCost = function () {
  let defaultPrice = 10;
  const choiceToppings = ["vegan-ch", "mozz", "pepperoni", "sausage", "can-b", "mushy", "grn-pepp", "pineapp"];
  this.toppings.forEach(function (topping) {
    if(choiceToppings.includes(topping)) {
      defaultPrice += 2;
    }
  });
  if (this.size === "sm") {
    defaultPrice += 0;
  } else if (this.size === "med") {
    defaultPrice += 3;
  } else if (this.size === "lg") {
    defaultPrice += 5;
  };
  if (this.crust === "thin") {
    defaultPrice += 2;
  } else if (this.crust === "reg") {
    defaultPrice += 3;
  } else if (this.crust === "thick") {
    defaultPrice += 4;
  } else if (this.crust === "veg") {
    defaultPrice += 5;
  };
  return defaultPrice;
}

//User Interface Logic
let pizzaOrder = new Pizza();



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