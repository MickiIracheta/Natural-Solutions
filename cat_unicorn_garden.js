// Create an array to store products
var products = [];

// Define function to add products
function addProduct(product){
  products.push(product);
}

// Initialize array with existing products
addProduct("Organic Laundry Detergent");
addProduct("Non-Toxic Floor Cleaner");
addProduct("Organic All Purpose Cleaner");
addProduct("Organic Glass Cleaner");
addProduct("Organic Carpet Cleaner");

// Create a function to retrieve list of products
function getProducts(){
  return products;
}

// Create a function to update current products
function updateProduct(index, product){
  products.splice(index, 1, product);
}

// Create a function to delete products
function deleteProduct(index){
  products.splice(index, 1);
}

// Create a function to calculate total cost of products
function calculateCost(){
  var cost = 0;
  for(let i = 0; i < products.length; i++){
    cost += products[i].price;
  }
  return cost;
}

// Create a function to place orders
function placeOrder(order){
  var orderTotal = 0;
  for(let i = 0; i < order.length; i++){
    orderTotal += order[i].price;
  }
  return orderTotal;
}

// Create a function to process orders
function processOrder(order){
  for(let i = 0; i < order.length; i++){
    var productIndex = products.findIndex(function(element){
      return element.name === order[i].name;
    });
    products.splice(productIndex, 1);
  }
  return "Order processed";
}

// Create a function to calculate shipping for orders
function calculateShipping(order){
  var shippingCost = 0;
  for(let i = 0; i < order.length; i++){
    shippingCost += order[i].shipping;
  }
  return shippingCost;
}