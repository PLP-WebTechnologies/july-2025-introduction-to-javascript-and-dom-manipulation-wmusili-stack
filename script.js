// -------------------------
// Part 1: Variables + Conditionals
// -------------------------
let userName = "Winnie"; 
let age = 19;

if (age >= 18) {
  document.getElementById("welcomeMessage").textContent = 
    `Hello ${userName}, you are an adult 🎉`;
} else {
  document.getElementById("welcomeMessage").textContent = 
    `Hello ${userName}, you are still a minor 😊`;
}

// -------------------------
// Part 2: Functions
// -------------------------
function calculateTotal(prices) {
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

// -------------------------
// Part 3: Loops
// -------------------------
let cartItems = ["Book", "Pen", "Laptop"];
let prices = [10, 2, 500];

let cartList = document.getElementById("cartList");

for (let i = 0; i < cartItems.length; i++) {
  let li = document.createElement("li");
  li.textContent = `${cartItems[i]} - ${formatCurrency(prices[i])}`;
  cartList.appendChild(li);
}

let total = calculateTotal(prices);
document.getElementById("cartTotal").textContent = formatCurrency(total);

// -------------------------
// Part 4: DOM Manipulation
// -------------------------
// Change text when button clicked
document.getElementById("changeText").addEventListener("click", function() {
  document.getElementById("text").textContent = "You clicked the button! 🎉";
});

// Toggle dark mode
document.getElementById("toggleColor").addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

// Add a new goal dynamically
document.getElementById("addGoal").addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = "Learn something new 🌟";
  document.getElementById("goalList").appendChild(li);
});
