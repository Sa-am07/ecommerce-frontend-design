const deals = [
  { name: "Hygiene equipment", discount: "20%", image: "images/Headphones.png" },
  { name: "Watches", discount: "15%", image: "images/Smart watches.png" },
  { name: "Audio", discount: "25%", image: "images/GoPro cameras.png" },
  { name: "Laptops", discount: "10%", image: "images/tech4.png" },
  { name: "Mobile", discount: "30%", image: "images/Canon cameras.png" }
];

const homeOutdoor = [
  { name: "Soft Chairs", price: 19.00, image: "images/interior1.png" },
  { name: "Sofa & Chair", price: 29.00, image: "images/interior2.png" },
  { name: "Kitchen", price: 39.00, image: "images/interior3.png" },
  { name: "Stools", price: 15.00, image: "images/interior 4.jpg" },
  { name: "Chair", price: 25.00, image: "images/interior 5.jpg" },
  { name: "Outdoor", price: 35.00, image: "images/interior 6.jpg" },
  { name: "Tables", price: 45.00, image: "images/interior 7.jpg" },
  { name: "Decor", price: 55.00, image: "images/interior 8.jpg" }
];

const electronics = [
  { name: "Smartphones", price: 299.00, image: "assets/images/elec1.png" },
  { name: "Tablets", price: 199.00, image: "assets/images/elec2.png" },
  { name: "Laptops", price: 599.00, image: "assets/images/elec3.png" },
  { name: "Headphones", price: 99.00, image: "assets/images/elec4.png" },
  { name: "Speakers", price: 149.00, image: "assets/images/elec5.png" },
  { name: "Watches", price: 249.00, image: "assets/images/elec6.png" },
  { name: "Cameras", price: 399.00, image: "assets/images/elec7.png" },
  { name: "Accessories", price: 49.00, image: "assets/images/elec8.png" }
];

const recommended = [
  { price: 99.00, desc: "Canon Camera EOS 200D", image: "assets/images/rec1.png" },
  { price: 149.00, desc: "GoPro HERO4K", image: "assets/images/rec2.png" },
  { price: 199.00, desc: "Smart Watch", image: "assets/images/rec3.png" },
  { price: 249.00, desc: "Headphones", image: "assets/images/rec4.png" },
  { price: 299.00, desc: "Smartphone", image: "assets/images/rec5.png" },
  { price: 349.00, desc: "Laptop", image: "assets/images/rec6.png" },
  { price: 399.00, desc: "Tablet", image: "assets/images/rec7.png" },
  { price: 449.00, desc: "Speaker", image: "assets/images/rec8.png" },
  { price: 499.00, desc: "Camera", image: "assets/images/rec9.png" },
  { price: 549.00, desc: "Accessories", image: "assets/images/rec10.png" }
];

function renderDeals() {
  const container = document.getElementById("deals-grid");
  if (!container) return;
  container.innerHTML = "";
  deals.forEach(deal => {
    container.innerHTML += `
      <div class="deal-card">
        <img src="${deal.image}" alt="${deal.name}">
        <h3 class="product-title">${deal.name}</h3>
        <div class="discount">${deal.discount} OFF</div>
      </div>
    `;
  });
}

function renderHomeOutdoor() {
  const container = document.getElementById("home-outdoor-grid");
  if (!container) return;
  container.innerHTML = "";
  homeOutdoor.forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3 class="product-title">${product.name}</h3>
        <div class="price">$${product.price.toFixed(2)}</div>
      </div>
    `;
  });
}

function renderElectronics() {
  const container = document.getElementById("electronics-grid");
  if (!container) return;
  container.innerHTML = "";
  electronics.forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3 class="product-title">${product.name}</h3>
        <div class="price">$${product.price.toFixed(2)}</div>
      </div>
    `;
  });
}

function renderRecommended() {
  const container = document.getElementById("recommended-grid");
  if (!container) return;
  container.innerHTML = "";
  recommended.forEach(item => {
    container.innerHTML += `
      <div class="recommended-card">
        <img src="${item.image}" alt="${item.desc}">
        <div class="price">$${item.price.toFixed(2)}</div>
        <p class="product-title">${item.desc}</p>
      </div>
    `;
  });
}

function startCountdown() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 4);
  endDate.setHours(endDate.getHours() + 5);
  endDate.setMinutes(endDate.getMinutes() + 12);
  endDate.setSeconds(endDate.getSeconds() + 59);

  const countdown = setInterval(() => {
    const now = new Date();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

    if (distance < 0) {
      clearInterval(countdown);
      document.querySelector(".countdown").innerHTML = "Offer Expired";
    }
  }, 1000);
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".subscription-form");
  const emailInput = document.getElementById("newsletter-email");

  if (form && emailInput) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = emailInput.value.trim();

      if (email === "") {
        alert("Email field cannot be empty.");
      } else if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
      } else {
        alert("Thank you for subscribing!");
        emailInput.value = "";
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const quoteBtn = document.getElementById("quote-btn");

  if (quoteBtn) {
    quoteBtn.addEventListener("click", function () {
      const name = document.getElementById("quote-name").value.trim();
      const query = document.getElementById("quote-details").value.trim();

      if (name === "" || query === "") {
        alert("Please fill all the fields before submitting.");
      } else {
        alert("Your request has been submitted to suppliers.");
      }
    });
  }
});


// function searchProducts() {
//   const query = document.getElementById("search-input").value.toLowerCase();
//   const titles = document.querySelectorAll(".product-title");
//   titles.forEach(title => {
//     const text = title.textContent.toLowerCase();
//     const card = title.closest(".product-card, .recommended-card, .deal-card");
//     card.style.display = text.includes(query) ? "block" : "none";
//   });
// }
function searchProducts() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const titles = document.querySelectorAll(".product-title");

  titles.forEach(title => {
    const text = title.textContent.toLowerCase();
    const card = title.closest(".product-card, .recommended-card, .deal-card");
    card.style.display = text.includes(query) ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderDeals();
  renderHomeOutdoor();
  renderElectronics();
  renderRecommended();
  startCountdown();
});


