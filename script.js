const products = [
  {
    id: 1,
    name: "Tie-Dye Lounge Set",
    price: 150,
    image: "assets/product-1.jpg",
  },
  {
    id: 2,
    name: "Sunburst Tracksuit",
    price: 150,
    image: "assets/product-2.jpg",
  },
  {
    id: 3,
    name: "Retro Red Streetwear",
    price: 150,
    image: "assets/product-3.jpg",
  },
  {
    id: 4,
    name: "Urban Sportwear Combo",
    price: 150,
    image: "assets/product-4.jpg",
  },
  {
    id: 5,
    name: "Oversized Knit & Coat",
    price: 150,
    image: "assets/product-5.jpg",
  },

  {
    id: 6,
    name: "Chic Monochrome Blazer",
    price: 150,
    image: "assets/product-6.jpg",
  },
];

const selected = new Map();
const productGrid = document.getElementById("productGrid");
const selectedList = document.getElementById("selectedList");
const discountEl = document.getElementById("discount");
const subtotalEl = document.getElementById("subtotal");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const ctaButton = document.getElementById("ctaButton");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
  <img src="${product.image}" alt="${product.name}" class="product-image"/>
  <h4 class="product-name">${product.name}</h4>
  <p class="product-price">$${product.price.toFixed(2)}</p>
  <button id="btn-${product.id}" class="add-btn">
    <span class="btn-text">Add to Bundle</span>
    <img src="assets/icons/plus-icon.svg" class="btn-icon" />
  </button>
`;

  productGrid.appendChild(card);

  document.getElementById(`btn-${product.id}`).addEventListener("click", () => {
    if (selected.has(product.id)) {
      selected.delete(product.id);
    } else {
      selected.set(product.id, product);
    }
    updateUI();
  });
});

function updateUI() {
  // Update progress
  const count = selected.size;
  progressText.textContent = `${count}/3 added`;
  progressFill.style.width = `${Math.min((count / 3) * 100, 100)}%`;

  // Update sidebar list
  selectedList.innerHTML = "";
  let total = 0;

  selected.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.className = "selected-item";
    li.innerHTML = `
    <div class="sidebar-list">
    <img src="${item.image}" alt="${item.name}" class="list-image"/>
    <div class="sidebar-details">
      <p class="product-name">${item.name}</p>
      <p>$${item.price.toFixed(2)}</p>
      <div class="step-box">
        <div class="box">
          <p>-</p>
          <p>1</p>
           <p>+</p>
        </div>
        <button class="delete-btn" onclick="removeItem(${item.id})">
         <img src="assets/icons/icon-trash.png" alt="Delete" class="delete-icon"/>
        </button>
      </div>
    </div>
    </div>
`;

    selectedList.appendChild(li);
  });

  // Discount
  let discount = 0;
  if (count >= 3) {
    discount = total * 0.3;
  }
  discountEl.textContent = `- $${discount.toFixed(2)} (30%)`;
  subtotalEl.textContent = `$${(total - discount).toFixed(2)}`;

  // Toggle CTA button
  ctaButton.disabled = count < 3;
  if (count >= 3) {
    ctaButton.innerHTML = `
    <span>Added to Cart</span>
    <img src="assets/icons/check-icon.svg" class="btn-icon" />
  `;
  } else {
    ctaButton.innerHTML = `Add Bundle to Cart`;
  }

  // Update buttons
  products.forEach((p) => {
    const btn = document.getElementById(`btn-${p.id}`);
    if (selected.has(p.id)) {
      btn.innerHTML = `
      <span class="btn-text-added">Added to Bundle</span>
      <img src="assets/icons/check-icon.svg" class="btn-icon" />
    `;
      btn.style.backgroundColor = "#444";
    } else {
      btn.innerHTML = `
      <span class="btn-text">Add to Bundle</span>
      <img src="assets/icons/plus-icon.svg" class="btn-icon" />
    `;
      btn.style.backgroundColor = "";
    }
  });
}

// CTA click handler
ctaButton.addEventListener("click", () => {
  console.log("Selected Bundle:", Array.from(selected.values()));
});
