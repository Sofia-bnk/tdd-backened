let products = [];
let users = [];
let cart = [];

//products
function getProducts() {
  return products;
}
function getProduct(id) {
  return products.find((product) => product.id === id);
}

function addProduct(product) {
  products.push(product);
}

function updateProduct(product) {
  products = products.filter((p) => p.id !== product.id);
  products.push(product);
  return products;
}

function deleteProduct(id) {
  return products.filter((product) => product.id === id);
}

//users
function getUsers() {
  return users;
}

function getUser(login) {
  return users.find((user) => user.login === login);
}
function addUser(user) {
  users.push(user);
}
function deleteUser(login) {
  return users.filter((user) => user.login === login);
}

//carts

function getCart() {
  return cart;
}

function addCartItem(cartItem) {
  cart.push(cartItem);
}

function updateCart(addedItem) {
  cart = cart.filter((i) => i.id !== addedItem.id);
  cart.push(addedItem);
  return cart;
}

function deleteCart(itemId) {
  if (cart.id !== itemId) {
    return "error";
  }
  return cart.filter((cart) => cart.id === itemId);
}

module.exports = {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  getUsers,
  getUser,
  addUser,
  deleteUser,
  getCart,
  addCartItem,
  updateCart,
  deleteCart,
};
