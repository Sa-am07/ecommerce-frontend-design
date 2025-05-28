document.addEventListener("DOMContentLoaded", function () {
  // Helper to safely select elements
  function getElem(selector) {
    return document.querySelector(selector);
  }

  // Helper to safely select all elements
  function getAll(selector) {
    return document.querySelectorAll(selector);
  }

  // Search
  const searchInput = getElem("#searchInput");
  const productCards = getAll(".product-card");

  if (searchInput && productCards.length > 0) {
    searchInput.addEventListener("input", function () {
      const searchValue = searchInput.value.toLowerCase();

      productCards.forEach((card) => {
        const name = card.querySelector(".product-name");
        if (name) {
          const match = name.textContent.toLowerCase().includes(searchValue);
          card.style.display = match ? "block" : "none";
        }
      });
    });
  }

  // Filter - Category
  const categoryFilter = getElem("#categoryFilter");
  if (categoryFilter) {
    categoryFilter.addEventListener("change", function () {
      const selected = categoryFilter.value.toLowerCase();

      productCards.forEach((card) => {
        const cat = card.dataset.category?.toLowerCase();
        card.style.display = selected === "all" || cat === selected ? "block" : "none";
      });
    });
  }

  // Filter - Brand
  const brandFilter = getElem("#brandFilter");
  if (brandFilter) {
    brandFilter.addEventListener("change", function () {
      const selected = brandFilter.value.toLowerCase();

      productCards.forEach((card) => {
        const brand = card.dataset.brand?.toLowerCase();
        card.style.display = selected === "all" || brand === selected ? "block" : "none";
      });
    });
  }

  // Filter - Rating
  const ratingFilter = getElem("#ratingFilter");
  if (ratingFilter) {
    ratingFilter.addEventListener("change", function () {
      const selectedRating = parseFloat(ratingFilter.value);

      productCards.forEach((card) => {
        const rating = parseFloat(card.dataset.rating);
        card.style.display = isNaN(selectedRating) || rating >= selectedRating ? "block" : "none";
      });
    });
  }

  // Filter - Price Range
  const priceFilter = getElem("#priceFilter");
  if (priceFilter) {
    priceFilter.addEventListener("change", function () {
      const selected = priceFilter.value;

      productCards.forEach((card) => {
        const price = parseFloat(card.dataset.price);
        let show = true;

        if (selected === "under-500") show = price < 500;
        else if (selected === "500-1000") show = price >= 500 && price <= 1000;
        else if (selected === "above-1000") show = price > 1000;

        card.style.display = selected === "all" || show ? "block" : "none";
      });
    });
  }

  // Wishlist toggle
  const wishlistBtns = getAll(".wishlist-btn");
  wishlistBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.classList.toggle("active");
      if (btn.classList.contains("active")) {
        btn.innerHTML = "❤️"; // Wishlisted
      } else {
        btn.innerHTML = "🤍"; // Not wishlisted
      }
    });
  });
});




