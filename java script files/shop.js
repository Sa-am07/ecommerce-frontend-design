document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("category-select");
  const minPriceInput = document.getElementById("min-price");
  const maxPriceInput = document.getElementById("max-price");

  const productCards = Array.from(document.querySelectorAll(".product-card"));

  const getCheckedValues = (selector) => {
    return Array.from(document.querySelectorAll(`${selector}:checked`)).map(input =>
      input.nextElementSibling.textContent.trim().toLowerCase()
    );
  };

  const getRatingValues = () => {
    return Array.from(document.querySelectorAll("input[type='checkbox'][id$='-stars']:checked")).map(input => {
      const match = input.id.match(/^(\d)-stars$/);
      return match ? parseInt(match[1]) : null;
    }).filter(Boolean);
  };

  const getConditionValue = () => {
    const selected = document.querySelector("input[name='condition']:checked");
    return selected ? selected.nextElementSibling.textContent.trim().toLowerCase() : "any";
  };

  const searchProducts = () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedCategory = categorySelect.value.toLowerCase();

    const brands = getCheckedValues(".brand");
    const features = getCheckedValues(".feature");
    const ratings = getRatingValues();
    const condition = getConditionValue();

    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

    productCards.forEach(card => {
      const title = card.querySelector(".product-title").textContent.trim().toLowerCase();
      const desc = card.querySelector(".desc")?.textContent.trim().toLowerCase() || "";
      const fullText = title + " " + desc;

      const priceText = card.querySelector(".price").textContent.replace(/[^0-9.]/g, '');
      const price = parseFloat(priceText);

      const ratingElement = card.querySelector(".rating");
      const rating = ratingElement ? parseFloat(ratingElement.textContent) : 0;

      let matches = true;

      if (searchTerm && !fullText.includes(searchTerm)) {
        matches = false;
      }

      if (selectedCategory !== "all" && !fullText.includes(selectedCategory)) {
        matches = false;
      }

      if (brands.length > 0 && !brands.some(brand => fullText.includes(brand))) {
        matches = false;
      }

      if (features.length > 0 && !features.some(feature => fullText.includes(feature))) {
        matches = false;
      }

      if (ratings.length > 0 && !ratings.some(r => Math.floor(rating) === r)) {
        matches = false;
      }

      if (price < minPrice || price > maxPrice) {
        matches = false;
      }

      if (condition !== "any" && !fullText.includes(condition)) {
        matches = false;
      }

      card.style.display = matches ? "block" : "none";
    });
  };

  // Event listeners
  document.querySelector(".apply-btn").addEventListener("click", searchProducts);
  searchInput.addEventListener("input", searchProducts);
  categorySelect.addEventListener("change", searchProducts);

  document.querySelectorAll("input[type='checkbox'], input[type='radio']").forEach(input => {
    input.addEventListener("change", searchProducts);
  });

  // Initial load
  searchProducts();
});
document.addEventListener('DOMContentLoaded', () => {
    const minSlider = document.getElementById('min');
    const maxSlider = document.getElementById('max');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
&nbsp;
&nbsp;

    minSlider.addEventListener('input', () => {
        minPriceInput.value = minSlider.value;
    });
&nbsp;
&nbsp;

    maxSlider.addEventListener('input', () => {
        maxPriceInput.value = maxSlider.value;
    });
&nbsp;
&nbsp;

    minPriceInput.addEventListener('input', () => {
        minSlider.value = minPriceInput.value;
    });
&nbsp;
&nbsp;

    maxPriceInput.addEventListener('input', () => {
        maxSlider.value = maxPriceInput.value;
    });
});