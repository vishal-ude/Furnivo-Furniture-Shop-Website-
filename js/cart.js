/**
 * ============================================================================
 * FURNIVO - CART SYSTEM
 * Shopping cart storage, quantity adjustment, and order summary logic
 * ============================================================================
 */

function getCartItems() {
  try {
    return JSON.parse(localStorage.getItem('furnivo_cart')) || [];
  } catch (e) {
    return [];
  }
}

function updateCartQuantity(productName, delta) {
  let cart = getCartItems();
  const item = cart.find((i) => i.name === productName);
  if (item) {
    item.qty = (item.qty || 1) + delta;
    if (item.qty <= 0) {
      cart = cart.filter((i) => i.name !== productName);
    }
  }
  localStorage.setItem('furnivo_cart', JSON.stringify(cart));
  if (typeof initCartCounter === 'function') {
    initCartCounter();
  }
  if (typeof renderCartPage === 'function') {
    renderCartPage();
  }
}

function removeCartItem(productName) {
  let cart = getCartItems();
  cart = cart.filter((i) => i.name !== productName);
  localStorage.setItem('furnivo_cart', JSON.stringify(cart));
  if (typeof initCartCounter === 'function') {
    initCartCounter();
  }
  if (typeof renderCartPage === 'function') {
    renderCartPage();
  }
  if (typeof showToast === 'function') {
    showToast(`Removed ${productName} from Cart`, 'delete');
  }
}