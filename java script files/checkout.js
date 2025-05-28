document.addEventListener("DOMContentLoaded", () => {
  console.log("checkout.js loaded");

  // Remove single item
  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".cart-item").remove();
      console.log("Item removed");
    });
  });

  // Remove all items
  const removeAllBtn = document.querySelector(".remove-all-btn");
  if (removeAllBtn) {
    removeAllBtn.addEventListener("click", () => {
      document.querySelectorAll(".cart-item").forEach(item => item.remove());
      console.log("All items removed");
    });
  }

  // Save for later
  document.querySelectorAll(".save-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Item saved for later (not implemented)");
    });
  });

  // Move to cart from saved
  document.querySelectorAll(".move-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Moved to cart (not implemented)");
    });
  });

  // Apply coupon
  const applyBtn = document.querySelector(".apply-btn");
  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      alert("Coupon applied (logic not implemented)");
    });
  }

  // Checkout button
  const checkoutBtn = document.querySelector(".checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      alert("Proceeding to checkout...");
    });
  }

  // Quantity dropdown
  document.querySelectorAll(".qty-select").forEach((select) => {
    select.addEventListener("change", (e) => {
      alert(`Quantity changed to: ${e.target.value}`);
    });
  });
});

