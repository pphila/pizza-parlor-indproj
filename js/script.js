//Business Logic

function Pizza(size, crust, toppings = []) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

Pizza.prototype.pizzaCost = function () {
  let defaultPrice = 10;
  this.toppings.forEach(function (toppings, index) {
    defaultPrice = (index + 1) * 2;
  });
  if (this.size === "small") {
    defaultPrice += 0;
  } else if (this.size === "medium") {
    defaultPrice += 13;
  } else if (this.size === "large") {
    defaultPrice += 15;
  };
  if (this.crust === "thin") {
    defaultPrice += 12;
  } else if (this.crust === "traditional") {
    defaultPrice += 13;
  } else if (this.crust === "thicc") {
    defaultPrice += 14;
  } else if (this.crust === "vegan") {
    defaultPrice += 15;
  };
  return defaultPrice;
}

//User Interface Logic

function showOrderForm() {
  document.getElementById("pizza-order").removeAttribute("class");
}

function handleOrderSubmit(event) {
  event.preventDefault();
  const selectedSize = document.getElementById("pizza-size").value;
  const selectedCrust = document.getElementById("crust").value;
  const toppingsArr = [];
  const selectedToppings = document.querySelectorAll("input[type=checkbox][name='topping']:checked");
  for (let i=0; i<selectedToppings.length; i++) {
  toppingsArr.push(selectedToppings[i].value)
  };
  
  const newOrder = new Pizza(selectedSize, selectedCrust, selectedToppings);
  let totalCost = newOrder.pizzaCost();
  let viewToppings = toppingsArr.join(", ");
  document.getElementById("order-total").removeAttribute("class");
  document.querySelector(".return-size").innerText = selectedSize;
  document.querySelector(".return-crust").innerText = selectedCrust;
  document.querySelector(".return-toppings").innerText = viewToppings;
  document.querySelector(".return-total").innerText = totalCost;
}

window.addEventListener("load", function() {
  document.querySelector("form#customer-order").addEventListener("submit", handleOrderSubmit);
  document.querySelector("button.btn").addEventListener("click", showOrderForm);
})