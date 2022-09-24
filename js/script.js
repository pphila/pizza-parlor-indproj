//Business Logic

function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

Pizza.prototype.pizzaCost = function () {
  let defaultPrice = 10;
  const choiceToppings = ["vegan cheese", "mozzarella", "pepperoni", "sausage", "canadian bacon", "mushrooms", "green peppers", "pineapples"];
  this.toppings.forEach(function (topping) {
    if(choiceToppings.includes(topping)) {
      defaultPrice += 2;
    }
  });
  if (this.size === "small") {
    defaultPrice += 0;
  } else if (this.size === "medium") {
    defaultPrice += 3;
  } else if (this.size === "large") {
    defaultPrice += 5;
  };
  if (this.crust === "thin") {
    defaultPrice += 2;
  } else if (this.crust === "traditional") {
    defaultPrice += 3;
  } else if (this.crust === "thicc") {
    defaultPrice += 4;
  } else if (this.crust === "vegan") {
    defaultPrice += 5;
  };
  return defaultPrice;
}

/*Pizza.prototype.fullOrder = function () {
  return this.size + " " + this.size + " with " + this.toppings;
}*/

//User Interface Logic

/*function listOrder(orderTodisplay) {
  let orderTotalDiv = document.querySelector("div#order-total");
  orderTotalDiv.innerText = null;
  const totalH2 = document.createElement("h2");
  Object.keys(orderTodisplay.Pizza).forEach(function(key) {
    const order = orderTodisplay.pizzaCost(key);
    const li = document.createElement("li");
    li.append(order.fullOrder());
    totalH2.append(li);
  });
}*/

function showOrderForm() {
  document.getElementById("pizza-order").removeAttribute("class");
}

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