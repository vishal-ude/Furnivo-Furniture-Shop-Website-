/* ==========================================================================
   FURNIVO - MAIN JAVASCRIPT
   Student / Classroom Project Style (Simple Vanilla JavaScript)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. Master Products Database (with 4 Image Angles & Complete Metadata)
   -------------------------------------------------------------------------- */
var FURNIVO_PRODUCTS = {
  "oslo-sofa": {
    id: "oslo-sofa",
    name: "Oslo Lounge Modular Sofa",
    category: "Living Room",
    categoryKey: "living",
    price: 84999,
    oldPrice: 94999,
    rating: 4.9,
    reviews: 128,
    badge: "Bestseller",
    badgeClass: "bg-secondary-custom",
    material: "Solid Oak + Premium Bouclé",
    finish: "Natural Matte Oak",
    dimensions: "280 × 105 × 78 cm",
    warranty: "15 Years Timber Warranty",
    delivery: "5–7 Working Days (Free)",
    assembly: "White Glove In-Room Assembly Included",
    description: "The Oslo Lounge Sofa combines architectural Scandinavian proportions with ultra-soft tactile bouclé upholstery and an FSC-certified solid timber plinth base. Engineered for modular versatility and enduring heirloom comfort.",
    specifications: {
      "Dimensions": "280cm (W) x 105cm (D) x 78cm (H)",
      "Frame": "FSC Solid European Oak & Kiln-Dried Pine",
      "Upholstery": "High-Density Italian Bouclé (80,000 Martindale)",
      "Cushioning": "Multi-layer high-resilience foam & natural feather blend",
      "Finish": "Cold-pressed natural vegetable oil",
      "Assembly": "Complimentary White Glove In-Room Assembly"
    },
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["Olive Bouclé", "Warm Sand", "Oatmeal Wool"]
  },

  "nova-table": {
    id: "nova-table",
    name: "Nova Oak Dining Table",
    category: "Dining Room",
    categoryKey: "dining",
    price: 58499,
    oldPrice: 64999,
    rating: 4.9,
    reviews: 94,
    badge: "Solid Oak",
    badgeClass: "bg-dark",
    material: "100% Solid European White Oak",
    finish: "Natural Hardwax Oil",
    dimensions: "150 × 150 × 76 cm (Round)",
    warranty: "15 Years Structural Timber Integrity",
    delivery: "7–10 Working Days (Free)",
    assembly: "Included",
    description: "The Nova Dining Table celebrates authentic timber grain with gently rounded edge profiles and hand-mortised pedestal legs. Finished with natural non-toxic plant wax for heat and stain resistance.",
    specifications: {
      "Dimensions": "150cm (Diameter) x 76cm (H)",
      "Seating Capacity": "6 - 8 Persons comfortably",
      "Finish": "Cold-pressed Matte Organic Hardwax",
      "Maintenance": "Wipe with damp cloth; annual natural oil polish",
      "Warranty": "15 Years Structural Timber Integrity"
    },
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["Natural European Oak", "Smoked Dark Walnut"]
  },

  "haven-chair": {
    id: "haven-chair",
    name: "Haven Bouclé Lounge Chair",
    category: "Living Room",
    categoryKey: "living",
    price: 34999,
    oldPrice: 38999,
    rating: 4.8,
    reviews: 82,
    badge: "New Arrival",
    badgeClass: "bg-secondary-custom",
    material: "High-Density Tactile Bouclé + Curved Oak",
    finish: "Muted Warm White / Smoked Oak",
    dimensions: "84 × 82 × 76 cm",
    warranty: "10 Years Frame Warranty",
    delivery: "3–5 Working Days (Free)",
    assembly: "Delivered Fully Assembled",
    description: "Sculpted with organic contours and cocooning ergonomic proportions. The Haven Chair brings architectural warmth, tactile serenity, and comfortable lumbar support to any living room or reading corner.",
    specifications: {
      "Dimensions": "84cm (W) x 82cm (D) x 76cm (H)",
      "Frame": "Hand-bent Solid Oak timber armrests",
      "Upholstery": "Tactile Como Bouclé in Ivory & Charcoal",
      "Weight Capacity": "Tested up to 180 kg",
      "Assembly": "Delivered Fully Assembled"
    },
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1580481077197-09d3587e9e62?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["Bouclé Ivory", "Charcoal Wool"]
  },

  "aria-bed": {
    id: "aria-bed",
    name: "Aria Japandi King Platform Bed",
    category: "Bedroom",
    categoryKey: "bedroom",
    price: 72999,
    oldPrice: 79999,
    rating: 5.0,
    reviews: 64,
    badge: "Japandi Platform",
    badgeClass: "bg-dark",
    material: "Solid Fluted White Ash & Natural Linen",
    finish: "Muted Natural Ash & Honey Teak",
    dimensions: "205 × 220 × 105 cm",
    warranty: "15 Years Frame Warranty",
    delivery: "5–7 Working Days (Free)",
    assembly: "White Glove In-Room Assembly Included",
    description: "A tranquil platform bed featuring a rhythmically fluted solid timber headboard and floating base geometry inspired by Kyoto architecture. Designed to bring calmness and grounded luxury to your master suite.",
    specifications: {
      "Dimensions": "205cm (W) x 220cm (L) x 105cm (H)",
      "Mattress Size": "Standard King (78 x 72 inches)",
      "Slats": "Solid beech sprung posture slats included",
      "Headboard": "Acoustic-softened fluted ash paneling",
      "Warranty": "15 Years Frame Warranty"
    },
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["Muted Natural Linen", "Honey Teak"]
  },

  "forma-wardrobe": {
    id: "forma-wardrobe",
    name: "Forma Heritage Double Wardrobe",
    category: "Bedroom",
    categoryKey: "bedroom",
    price: 112000,
    oldPrice: 125000,
    rating: 4.9,
    reviews: 41,
    badge: "Master Crafted",
    badgeClass: "bg-secondary-custom",
    material: "Smoked Walnut & Brushed Brass Hardware",
    finish: "Smoked Dark Walnut",
    dimensions: "180 × 65 × 215 cm",
    warranty: "20 Years Structural Timber Warranty",
    delivery: "7–10 Working Days (Free)",
    assembly: "White Glove Multi-Man Setup Included",
    description: "Heirloom craftsmanship meets generous modern storage. Hand-joined mortise-and-tenon construction with integrated soft-touch LED sensor lighting, solid cedar drawer linings, and antique brushed brass handles.",
    specifications: {
      "Dimensions": "180cm (W) x 65cm (D) x 215cm (H)",
      "Interior": "Dual hanging rails, 6 solid cedar drawers, top shelf",
      "Hardware": "Soft-close German Blum hinges & antiqued brass pulls",
      "Timber": "FSC-certified American Walnut",
      "Delivery": "White Glove multi-man setup included"
    },
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["Smoked Walnut", "Natural White Ash"]
  },

  "luna-table": {
    id: "luna-table",
    name: "Luna Fluted Round Coffee Table",
    category: "Living Room",
    categoryKey: "living",
    price: 22499,
    oldPrice: 26999,
    rating: 4.9,
    reviews: 110,
    badge: "Fluted Oak",
    badgeClass: "bg-dark",
    material: "Handcrafted Fluted Oak Timber",
    finish: "Matte Clear Hardwax Lacquer",
    dimensions: "90 × 90 × 40 cm",
    warranty: "10 Years Warranty",
    delivery: "3–5 Working Days (Free)",
    assembly: "Delivered Fully Assembled",
    description: "An iconic centerpiece table featuring an architectural fluted drum base and a smooth chamfered top. Perfect for grounding contemporary lounge spaces with organic textures and natural timber warmth.",
    specifications: {
      "Dimensions": "90cm (Diameter) x 40cm (H)",
      "Base": "Solid White Oak fluted tambour slats",
      "Top": "Cross-banded oak veneer with solid timber edging",
      "Finish": "Stain-resistant matte clear lacquer",
      "Assembly": "Delivered fully assembled"
    },
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["Natural Oak", "Deep Espresso"]
  },

  "smaland-sectional": {
    id: "smaland-sectional",
    name: "Smaland Curved Modular Sectional",
    category: "Living Room",
    categoryKey: "living",
    price: 124000,
    oldPrice: 139000,
    rating: 4.96,
    reviews: 39,
    badge: "Curated Set",
    badgeClass: "bg-secondary-custom",
    material: "Belgian Organic Linen & Solid Timber Base",
    finish: "Cream Linen & Brushed Teak",
    dimensions: "320 × 180 × 74 cm",
    warranty: "15 Years Frame Warranty",
    delivery: "5–7 Working Days (Free)",
    assembly: "White Glove In-Room Assembly Included",
    description: "An architectural sweeping sectional with softly curved modular elements and tactile Belgian linen upholstery. Designed for flowing open-plan living rooms.",
    specifications: {
      "Dimensions": "320cm (W) x 180cm (D) x 74cm (H)",
      "Frame": "FSC European Beechwood & Kiln-Dried Pine",
      "Upholstery": "Belgian Organic Washable Linen Blend",
      "Cushioning": "Dual-density foam with channel-quilted fiber top",
      "Assembly": "Complimentary White Glove Setup Included"
    },
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["Cream Linen", "Sand Tan", "Sage Bouclé"]
  },

  "koben-armchair": {
    id: "koben-armchair",
    name: "Koben Low-Slung Armchair",
    category: "Living Room",
    categoryKey: "living",
    price: 29999,
    oldPrice: 34999,
    rating: 4.87,
    reviews: 28,
    badge: "Handwoven",
    badgeClass: "bg-dark",
    material: "Solid Ash Timber & Handwoven Danish Cord",
    finish: "Natural Ash / Sand Linen",
    dimensions: "78 × 80 × 72 cm",
    warranty: "10 Years Frame Warranty",
    delivery: "3–5 Working Days (Free)",
    assembly: "Delivered Fully Assembled",
    description: "Low-slung minimalist silhouette crafted from hand-shaped ash timber and resilient woven cord seat with an ergonomic reclined angle.",
    specifications: {
      "Dimensions": "78cm (W) x 80cm (D) x 72cm (H)",
      "Frame": "FSC Solid Ash Timber with matte oil finish",
      "Seat": "Hand-strung unbleached paper cord",
      "Weight Capacity": "Tested up to 160 kg",
      "Assembly": "Delivered fully assembled"
    },
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1580481077197-09d3587e9e62?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["Ash / Linen", "Walnut / Wool"]
  },

  "komorebi-tables": {
    id: "komorebi-tables",
    name: "Komorebi Travertine Nesting Tables",
    category: "Living Room",
    categoryKey: "living",
    price: 38500,
    oldPrice: 42000,
    rating: 4.93,
    reviews: 51,
    badge: "Organic Form",
    badgeClass: "bg-secondary-custom",
    material: "Honed Italian Travertine & Antiqued Bronze",
    finish: "Warm Travertine Stone",
    dimensions: "Small: 55 × 42 cm | Large: 80 × 48 cm",
    warranty: "5 Years Material Warranty",
    delivery: "3–5 Working Days (Free)",
    assembly: "Delivered Fully Assembled",
    description: "Pair of organic-shaped nesting coffee tables featuring honed Italian travertine tops and hand-patinated solid bronze pedestal pillars.",
    specifications: {
      "Dimensions": "Large: 80x80x48cm, Small: 55x55x42cm",
      "Top": "Natural honed Italian Roman travertine",
      "Base": "Solid cast iron with antiqued bronze patina",
      "Sealer": "Non-staining matte stone sealant",
      "Assembly": "Delivered fully assembled"
    },
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["Warm Travertine", "Honed Limestone"]
  },

  "kyoto-chair": {
    id: "kyoto-chair",
    name: "Kyoto Solid Ash Dining Chair",
    category: "Dining Room",
    categoryKey: "dining",
    price: 16999,
    oldPrice: 19999,
    rating: 4.9,
    reviews: 58,
    badge: "Curved Timber",
    badgeClass: "bg-dark",
    material: "100% Solid White Ash & Organic Linen",
    finish: "Muted Natural Ash",
    dimensions: "52 × 54 × 78 cm",
    warranty: "10 Years Frame Warranty",
    delivery: "3–5 Working Days (Free)",
    assembly: "Delivered Fully Assembled",
    description: "Inspired by Kyoto teahouses, featuring steam-bent solid ash wood backrests and an ergonomic upholstered seat cushion in stain-resistant Belgian linen.",
    specifications: {
      "Dimensions": "52cm (W) x 54cm (D) x 78cm (H)",
      "Frame": "FSC-certified Solid White Ash",
      "Seat Cushion": "High-density foam with removable linen cover",
      "Weight Capacity": "Tested up to 150 kg",
      "Assembly": "Delivered fully assembled"
    },
    images: [
      "https://images.unsplash.com/photo-1580481077197-09d3587e9e62?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["Natural Ash", "Smoked Walnut"]
  },

  "nordic-nightstand": {
    id: "nordic-nightstand",
    name: "Nordic Floating Oak Nightstand",
    category: "Bedroom",
    categoryKey: "bedroom",
    price: 14499,
    oldPrice: 16999,
    rating: 4.85,
    reviews: 47,
    badge: "Wall-Mounted",
    badgeClass: "bg-secondary-custom",
    material: "Solid European Oak & Soft-Close Blum Drawer",
    finish: "Natural Matte Oak",
    dimensions: "45 × 35 × 18 cm",
    warranty: "10 Years Warranty",
    delivery: "3–5 Working Days (Free)",
    assembly: "Mounting Hardware & Template Included",
    description: "A space-saving floating bedside table with clean mitred joints, invisible French cleat wall mounting, and a smooth soft-close drawer.",
    specifications: {
      "Dimensions": "45cm (W) x 35cm (D) x 18cm (H)",
      "Material": "Solid European White Oak with clear hardwax finish",
      "Hardware": "Blum soft-close concealed undermount runners",
      "Mounting": "Heavy-duty aluminum French cleat (included)",
      "Assembly": "Fully assembled; wall mounting required"
    },
    images: [
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["Natural Oak", "Deep Espresso"]
  },

  "zenith-sideboard": {
    id: "zenith-sideboard",
    name: "Zenith Fluted Credenza Sideboard",
    category: "Living Room",
    categoryKey: "living",
    price: 64999,
    oldPrice: 74999,
    rating: 4.94,
    reviews: 72,
    badge: "Fluted Tambour",
    badgeClass: "bg-dark",
    material: "Smoked American Walnut & Brushed Brass",
    finish: "Smoked Walnut / Brass",
    dimensions: "160 × 48 × 76 cm",
    warranty: "15 Years Frame Warranty",
    delivery: "5–7 Working Days (Free)",
    assembly: "White Glove In-Room Delivery Included",
    description: "An architectural storage credenza featuring smooth tambour sliding doors that curve around the corners, internal adjustable shelving, and integrated cable management.",
    specifications: {
      "Dimensions": "160cm (W) x 48cm (D) x 76cm (H)",
      "Timber": "FSC Smoked American Walnut & White Ash",
      "Doors": "Curved tambour sliding mechanism",
      "Storage": "4 interior adjustable shelves, dual cable pass-throughs",
      "Assembly": "Delivered fully assembled"
    },
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["Smoked Walnut", "Natural White Ash"]
  }
};

/* --------------------------------------------------------------------------
   1B. Multi-Currency Engine
   -------------------------------------------------------------------------- */
var FURNIVO_CURRENCIES = {
  INR: { symbol: "₹", rate: 1.0, name: "INR (₹)", locale: "en-IN" },
  USD: { symbol: "$", rate: 0.012, name: "USD ($)", locale: "en-US" },
  EUR: { symbol: "€", rate: 0.011, name: "EUR (€)", locale: "de-DE" },
  GBP: { symbol: "£", rate: 0.0095, name: "GBP (£)", locale: "en-GB" },
  AED: { symbol: "AED ", rate: 0.044, name: "AED (AED)", locale: "en-AE" }
};

function getCurrency() {
  return localStorage.getItem("furnivo_currency") || "INR";
}

function setCurrency(currCode) {
  if (!FURNIVO_CURRENCIES[currCode]) currCode = "INR";
  localStorage.setItem("furnivo_currency", currCode);
  syncCurrencySelects();
  refreshAllPrices();
  renderCartDrawer();
  if (document.getElementById("cart-items-tbody") || document.getElementById("cart-items-container")) {
    renderCartPage();
  }
  showToast(`Currency changed to ${FURNIVO_CURRENCIES[currCode].name}`);
}

function formatPrice(amountInINR) {
  const code = getCurrency();
  const curr = FURNIVO_CURRENCIES[code] || FURNIVO_CURRENCIES.INR;
  const converted = Math.round(amountInINR * curr.rate);
  return `${curr.symbol}${converted.toLocaleString(curr.locale)}`;
}

function syncCurrencySelects() {
  const current = getCurrency();
  const selects = document.querySelectorAll(".currency-selector-select");
  selects.forEach(function (sel) {
    sel.value = current;
  });
}

function refreshAllPrices() {
  // Update all product cards on home/shop/collections
  const productCards = document.querySelectorAll(".product-card, .shop-product-card-col");
  productCards.forEach(function (card) {
    const currentPriceEl = card.querySelector(".product-current-price, .shop-current-price");
    const oldPriceEl = card.querySelector(".product-old-price, .shop-old-price");
    
    let pid = null;
    const onclickAttr = card.getAttribute("onclick") || "";
    const match = onclickAttr.match(/product-details\.html\?id=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) pid = match[1];

    if (!pid) {
      const wishBtn = card.querySelector(".btn-wishlist");
      if (wishBtn) {
        const wishMatch = (wishBtn.getAttribute("onclick") || "").match(/toggleWishlist\([^,]+,\s*['"]([^'"]+)['"]/);
        if (wishMatch && wishMatch[1]) pid = wishMatch[1];
      }
    }

    if (pid && FURNIVO_PRODUCTS[pid]) {
      const p = FURNIVO_PRODUCTS[pid];
      if (currentPriceEl) currentPriceEl.textContent = formatPrice(p.price);
      if (oldPriceEl && p.oldPrice) oldPriceEl.textContent = formatPrice(p.oldPrice);
    }
  });

  // Update product details page
  const pPriceEl = document.getElementById("p-price");
  const pOldPriceEl = document.getElementById("p-old-price");
  if (pPriceEl) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id") || "oslo-sofa";
    const product = FURNIVO_PRODUCTS[productId] || FURNIVO_PRODUCTS["oslo-sofa"];
    pPriceEl.textContent = formatPrice(product.price);
    if (pOldPriceEl && product.oldPrice) pOldPriceEl.textContent = formatPrice(product.oldPrice);
  }

  // Update quick view modal if open
  const qvPrice = document.getElementById("quickview-price");
  if (qvPrice && window.activeQuickViewProductId && FURNIVO_PRODUCTS[window.activeQuickViewProductId]) {
    qvPrice.textContent = formatPrice(FURNIVO_PRODUCTS[window.activeQuickViewProductId].price);
  }
}

/* --------------------------------------------------------------------------
   1C. Promo / Coupon Engine
   -------------------------------------------------------------------------- */
var FURNIVO_PROMO_CODES = {
  "WELCOME10": { type: "percent", value: 10, label: "10% Welcome Discount", minOrder: 0 },
  "FURNIVO5000": { type: "flat", value: 5000, label: "₹5,000 Studio Privilege", minOrder: 30000 },
  "SPRING15": { type: "percent", value: 15, label: "15% Spring Season Discount", minOrder: 0 },
  "LUXURY": { type: "flat", value: 10000, label: "₹10,000 Luxury Tier Discount", minOrder: 100000 }
};

function getAppliedPromo() {
  try {
    return JSON.parse(localStorage.getItem("furnivo_applied_promo")) || null;
  } catch (e) {
    return null;
  }
}

function applyPromoCode(inputCode, subtotal) {
  if (!inputCode) return { success: false, message: "Please enter a coupon code." };
  const code = inputCode.trim().toUpperCase();
  const promo = FURNIVO_PROMO_CODES[code];

  if (!promo) {
    return { success: false, message: "Invalid promo code. Try WELCOME10 or SPRING15." };
  }

  if (promo.minOrder && subtotal < promo.minOrder) {
    return { success: false, message: `Minimum order of ${formatPrice(promo.minOrder)} required for code ${code}.` };
  }

  const promoData = { code: code, type: promo.type, value: promo.value, label: promo.label };
  localStorage.setItem("furnivo_applied_promo", JSON.stringify(promoData));
  return { success: true, message: `Promo code "${code}" applied successfully!`, promo: promoData };
}

function removePromoCode() {
  localStorage.removeItem("furnivo_applied_promo");
  if (document.getElementById("cart-items-tbody") || document.getElementById("cart-items-container")) {
    renderCartPage();
  }
  renderCartDrawer();
  showToast("Coupon code removed.");
}

function calculateDiscount(subtotal) {
  const promo = getAppliedPromo();
  if (!promo) return 0;
  if (promo.type === "percent") {
    return Math.round((subtotal * promo.value) / 100);
  } else if (promo.type === "flat") {
    return Math.min(subtotal, promo.value);
  }
  return 0;
}

/* --------------------------------------------------------------------------
   2. DOM Initialization
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  // Ensure popup drawers & modals exist in DOM
  ensureDrawersExist();
  ensureCheckoutModalExists();

  // Sync currency selector state
  syncCurrencySelects();

  // Update badge counters on every page load
  updateCartCounter();
  updateWishlistCounter();
  syncWishlistButtons();
  syncNavbarProfile();

  // Initialize general interactive elements
  initBackToTop();
  initNewsletter();
  initConsultationForm();
  initSearch();
  initSearchAutocomplete();
  initQuickViewModal();

  // Apply currency formatting across initial page view
  refreshAllPrices();

  // Page-specific initialization
  if (document.getElementById("authFormsWrapper") || document.getElementById("signInForm")) {
    initAuthPage();
  }

  if (document.getElementById("product-detail-container") || document.getElementById("p-main-img")) {
    initProductDetailsPage();
    initProductReviews();
  }

  if (document.getElementById("cart-items-tbody") || document.getElementById("cart-items-container")) {
    initCartPage();
  }

  if (document.getElementById("shopProductsGrid") || document.getElementById("shop-products") || document.getElementById("products-container")) {
    initShopPage();
  }
});

/* --------------------------------------------------------------------------
   3. Toast Notification Helper
   -------------------------------------------------------------------------- */
function showToast(message, type = "success") {
  let toastEl = document.getElementById("furnivoToast");
  let messageEl = document.getElementById("toastMessage");
  let iconEl = document.getElementById("toastIcon");

  if (!toastEl) {
    // Dynamically inject if not already present in page
    const container = document.createElement("div");
    container.className = "toast-container position-fixed bottom-0 end-0 p-3";
    container.style.zIndex = "2100";
    container.innerHTML = `
      <div id="furnivoToast" class="toast align-items-center text-white bg-dark border-0 rounded-4 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body d-flex align-items-center gap-2">
            <i id="toastIcon" class="bi bi-check-circle-fill text-warning fs-5"></i>
            <span id="toastMessage">${message}</span>
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;
    document.body.appendChild(container);
    toastEl = document.getElementById("furnivoToast");
    messageEl = document.getElementById("toastMessage");
    iconEl = document.getElementById("toastIcon");
  } else {
    messageEl.textContent = message;
  }

  if (iconEl) {
    if (type === "wishlist") {
      iconEl.className = "bi bi-heart-fill text-danger fs-5";
    } else if (type === "cart") {
      iconEl.className = "bi bi-bag-check-fill text-warning fs-5";
    } else {
      iconEl.className = "bi bi-check-circle-fill text-warning fs-5";
    }
  }

  const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 3000 });
  toast.show();
}

/* --------------------------------------------------------------------------
   4. Cart Management (localStorage & Cart Drawer Popup)
   -------------------------------------------------------------------------- */
// Default empty array so cart count starts at 0
function getCart() {
  try {
    return JSON.parse(localStorage.getItem("furnivo_cart")) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("furnivo_cart", JSON.stringify(cart));
  updateCartCounter();
  renderCartDrawer();
}

// Update Cart Counters across all pages
function updateCartCounter() {
  const cart = getCart();
  const totalCount = cart.reduce(function (sum, item) {
    return sum + (Number(item.qty) || 1);
  }, 0);

  // Update badge number counters
  const cartBadges = document.querySelectorAll(".cart-badge");
  cartBadges.forEach(function (badge) {
    badge.textContent = totalCount;
  });

  // Update text elements like "Cart"
  const cartTextEls = document.querySelectorAll(".cart-count-text");
  cartTextEls.forEach(function (el) {
    el.textContent = `Cart`;
  });
}

// Add Product to Cart
function addToCart(productId, quantity = 1, finish = null) {
  const product = FURNIVO_PRODUCTS[productId];
  if (!product) return;

  const cart = getCart();
  const selectedFinish = finish || (product.colors ? product.colors[0] : "Standard");
  const existingItem = cart.find(function (item) {
    return item.id === productId && item.finish === selectedFinish;
  });

  if (existingItem) {
    existingItem.qty += Number(quantity);
  } else {
    cart.push({
      id: productId,
      qty: Number(quantity),
      finish: selectedFinish
    });
  }

  saveCart(cart);
  showToast(`${product.name} added to cart.`, "cart");
}

// Update Quantity of an Item in Cart
function updateCartItemQty(productId, finish, change) {
  const cart = getCart();
  const item = cart.find(function (i) {
    return i.id === productId && i.finish === finish;
  });

  if (item) {
    item.qty += change;
    if (item.qty <= 0) {
      removeFromCart(productId, finish);
      return;
    }
  }

  saveCart(cart);
  if (document.getElementById("cart-items-tbody") || document.getElementById("cart-items-container")) {
    renderCartPage();
  }
}

// Remove Product from Cart
function removeFromCart(productId, finish) {
  let cart = getCart();
  cart = cart.filter(function (item) {
    return !(item.id === productId && item.finish === finish);
  });

  saveCart(cart);
  showToast("Product removed from cart.", "cart");

  if (document.getElementById("cart-items-tbody") || document.getElementById("cart-items-container")) {
    renderCartPage();
  }
}

/* --------------------------------------------------------------------------
   5. Wishlist Management (localStorage & Wishlist Drawer Popup)
   -------------------------------------------------------------------------- */
function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem("furnivo_wishlist")) || [];
  } catch (e) {
    return [];
  }
}

function saveWishlist(wishlist) {
  localStorage.setItem("furnivo_wishlist", JSON.stringify(wishlist));
  updateWishlistCounter();
  syncWishlistButtons();
  renderWishlistDrawer();
}

function updateWishlistCounter() {
  const wishlist = getWishlist();
  const wishlistBadges = document.querySelectorAll(".wishlist-badge");
  wishlistBadges.forEach(function (badge) {
    badge.textContent = wishlist.length;
  });
}

function syncWishlistButtons() {
  const wishlist = getWishlist();

  // Sync on-card wishlist buttons
  const buttons = document.querySelectorAll(".btn-wishlist");
  buttons.forEach(function (btn) {
    const onclickAttr = btn.getAttribute("onclick") || "";
    // extract product ID from onclick="toggleWishlist(this, 'id', event)"
    const match = onclickAttr.match(/toggleWishlist\([^,]+,\s*['"]([^'"]+)['"]/);
    if (match && match[1]) {
      const pId = match[1];
      const icon = btn.querySelector("i");
      if (wishlist.includes(pId)) {
        btn.classList.add("active");
        if (icon) {
          icon.classList.remove("bi-heart");
          icon.classList.add("bi-heart-fill");
        }
      } else {
        btn.classList.remove("active");
        if (icon) {
          icon.classList.remove("bi-heart-fill");
          icon.classList.add("bi-heart");
        }
      }
    }
  });

  // Sync Product Details page Wishlist button
  const detailBtn = document.getElementById("p-btn-wishlist");
  if (detailBtn) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id") || "oslo-sofa";
    const icon = detailBtn.querySelector("i");
    if (wishlist.includes(productId)) {
      detailBtn.classList.add("active");
      if (icon) {
        icon.classList.remove("bi-heart");
        icon.classList.add("bi-heart-fill");
      }
    } else {
      detailBtn.classList.remove("active");
      if (icon) {
        icon.classList.remove("bi-heart-fill");
        icon.classList.add("bi-heart");
      }
    }
  }
}

function toggleWishlist(button, productId, event) {
  if (event) {
    if (typeof event.stopPropagation === "function") event.stopPropagation();
    if (typeof event.preventDefault === "function") event.preventDefault();
  } else if (window.event) {
    window.event.cancelBubble = true;
  }

  const wishlist = getWishlist();
  const index = wishlist.indexOf(productId);
  const product = FURNIVO_PRODUCTS[productId] || { name: "Product" };

  if (index > -1) {
    wishlist.splice(index, 1);
    if (button) {
      button.classList.remove("active");
      const icon = button.querySelector("i");
      if (icon) {
        icon.classList.remove("bi-heart-fill");
        icon.classList.add("bi-heart");
      }
    }
    showToast(`${product.name} removed from Wishlist.`, "wishlist");
  } else {
    wishlist.push(productId);
    if (button) {
      button.classList.add("active");
      const icon = button.querySelector("i");
      if (icon) {
        icon.classList.remove("bi-heart");
        icon.classList.add("bi-heart-fill");
      }
    }
    showToast(`${product.name} saved to Wishlist!`, "wishlist");
  }

  saveWishlist(wishlist);
}

function clearWishlist() {
  saveWishlist([]);
  showToast("Wishlist cleared.", "wishlist");
}

function addAllWishlistToCart() {
  const wishlist = getWishlist();
  if (wishlist.length === 0) return;
  wishlist.forEach(function (id) {
    const product = FURNIVO_PRODUCTS[id];
    if (product) {
      const cart = getCart();
      const defaultFinish = product.colors ? product.colors[0] : "Standard";
      const existing = cart.find(i => i.id === id && i.finish === defaultFinish);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ id: id, qty: 1, finish: defaultFinish });
      }
      localStorage.setItem("furnivo_cart", JSON.stringify(cart));
    }
  });
  updateCartCounter();
  renderCartDrawer();
  showToast("All saved wishlist items added to cart!", "cart");
}

/* --------------------------------------------------------------------------
   5B. Drawers (Popups) DOM Injection & Rendering
   -------------------------------------------------------------------------- */
function ensureDrawersExist() {
  // Wishlist Offcanvas Drawer
  if (!document.getElementById("furnivoWishlistDrawer")) {
    const wishlistDiv = document.createElement("div");
    wishlistDiv.className = "offcanvas offcanvas-end furnivo-drawer";
    wishlistDiv.tabIndex = -1;
    wishlistDiv.id = "furnivoWishlistDrawer";
    wishlistDiv.setAttribute("aria-labelledby", "furnivoWishlistDrawerLabel");
    wishlistDiv.innerHTML = `
      <div class="offcanvas-header border-bottom py-3 px-4">
        <div class="d-flex align-items-center gap-2">
          <i class="bi bi-heart-fill text-danger fs-5"></i>
          <h5 class="offcanvas-title fw-bold mb-0" id="furnivoWishlistDrawerLabel">Saved Wishlist</h5>
          <span class="badge bg-secondary-custom rounded-pill ms-1 wishlist-badge">0</span>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onclick="closeWishlistDrawer()"></button>
      </div>
      <div class="offcanvas-body p-4" id="furnivoWishlistBody"></div>
      <div class="offcanvas-footer border-top p-3 bg-light-custom" id="furnivoWishlistFooter"></div>
    `;
    document.body.appendChild(wishlistDiv);
  }

  // Cart Offcanvas Drawer
  if (!document.getElementById("furnivoCartDrawer")) {
    const cartDiv = document.createElement("div");
    cartDiv.className = "offcanvas offcanvas-end furnivo-drawer";
    cartDiv.tabIndex = -1;
    cartDiv.id = "furnivoCartDrawer";
    cartDiv.setAttribute("aria-labelledby", "furnivoCartDrawerLabel");
    cartDiv.innerHTML = `
      <div class="offcanvas-header border-bottom py-3 px-4">
        <div class="d-flex align-items-center gap-2">
          <i class="bi bi-bag-check-fill text-secondary-custom fs-5"></i>
          <h5 class="offcanvas-title fw-bold mb-0" id="furnivoCartDrawerLabel">Your Shopping Cart</h5>
          <span class="badge bg-dark rounded-pill ms-1 cart-badge">0</span>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onclick="closeCartDrawer()"></button>
      </div>
      <div class="offcanvas-body p-4" id="furnivoCartBody"></div>
      <div class="offcanvas-footer border-top p-3 bg-light-custom" id="furnivoCartFooter"></div>
    `;
    document.body.appendChild(cartDiv);
  }
}

function openWishlistDrawer(event) {
  if (event) {
    if (typeof event.stopPropagation === "function") event.stopPropagation();
    if (typeof event.preventDefault === "function") event.preventDefault();
  }
  ensureDrawersExist();
  renderWishlistDrawer();
  const drawerEl = document.getElementById("furnivoWishlistDrawer");
  if (drawerEl && typeof bootstrap !== "undefined" && bootstrap.Offcanvas) {
    const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(drawerEl);
    offcanvas.show();
  }
}

function closeWishlistDrawer() {
  const drawerEl = document.getElementById("furnivoWishlistDrawer");
  if (drawerEl && typeof bootstrap !== "undefined" && bootstrap.Offcanvas) {
    const offcanvas = bootstrap.Offcanvas.getInstance(drawerEl);
    if (offcanvas) offcanvas.hide();
  }
}

function renderWishlistDrawer() {
  const body = document.getElementById("furnivoWishlistBody");
  const footer = document.getElementById("furnivoWishlistFooter");
  if (!body) return;

  const wishlist = getWishlist();
  if (wishlist.length === 0) {
    body.innerHTML = `
      <div class="drawer-empty-state">
        <div class="drawer-empty-icon">
          <i class="bi bi-heart"></i>
        </div>
        <h5 class="fw-bold text-dark mb-1">Your Wishlist is Empty</h5>
        <p class="text-muted small mb-4">Explore our bespoke furniture catalog and tap the heart icon to save pieces you love.</p>
        <a href="shop.html" class="btn btn-dark-custom rounded-pill px-4 py-2" onclick="closeWishlistDrawer()">
          Explore Catalog <i class="bi bi-arrow-right ms-1"></i>
        </a>
      </div>
    `;
    if (footer) footer.innerHTML = "";
    return;
  }

  let html = `<div class="d-flex flex-column gap-3">`;
  wishlist.forEach(function (id) {
    const p = FURNIVO_PRODUCTS[id];
    if (!p) return;

    html += `
      <div class="drawer-item-card rounded-4 p-3 position-relative">
        <div class="d-flex gap-3 align-items-center">
          <a href="product-details.html?id=${p.id}" onclick="closeWishlistDrawer()">
            <img src="${p.images[0]}" alt="${p.name}" class="rounded-3" style="width: 70px; height: 70px; object-fit: cover;">
          </a>
          <div class="flex-grow-1 min-w-0">
            <span class="badge bg-light text-muted border small mb-1">${p.category}</span>
            <a href="product-details.html?id=${p.id}" class="text-dark fw-bold text-decoration-none d-block text-truncate small" onclick="closeWishlistDrawer()">${p.name}</a>
            <div class="text-secondary-custom fw-bold small mt-1">${formatPrice(p.price)}</div>
          </div>
          <div class="d-flex flex-column gap-2 align-items-end">
            <button class="btn btn-sm text-danger border-0 p-1" onclick="toggleWishlist(null, '${p.id}', event);" title="Remove">
              <i class="bi bi-trash fs-6"></i>
            </button>
            <button class="btn btn-sm btn-dark rounded-pill px-2 py-1 small" style="font-size: 0.75rem;" onclick="addToCart('${p.id}', 1);">
              <i class="bi bi-cart-plus me-1"></i> Add
            </button>
          </div>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  body.innerHTML = html;

  if (footer) {
    footer.innerHTML = `
      <div class="d-flex gap-2">
        <button class="btn btn-outline-dark rounded-pill flex-fill py-2 small" onclick="clearWishlist()">
          <i class="bi bi-trash3 me-1"></i> Clear All
        </button>
        <button class="btn btn-dark-custom rounded-pill flex-fill py-2 small" onclick="addAllWishlistToCart()">
          <i class="bi bi-bag-plus me-1"></i> Add All to Cart
        </button>
      </div>
    `;
  }
}

function openCartDrawer(event) {
  if (event) {
    if (typeof event.stopPropagation === "function") event.stopPropagation();
    if (typeof event.preventDefault === "function") event.preventDefault();
  }
  ensureDrawersExist();
  renderCartDrawer();
  const drawerEl = document.getElementById("furnivoCartDrawer");
  if (drawerEl && typeof bootstrap !== "undefined" && bootstrap.Offcanvas) {
    const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(drawerEl);
    offcanvas.show();
  }
}

function closeCartDrawer() {
  const drawerEl = document.getElementById("furnivoCartDrawer");
  if (drawerEl && typeof bootstrap !== "undefined" && bootstrap.Offcanvas) {
    const offcanvas = bootstrap.Offcanvas.getInstance(drawerEl);
    if (offcanvas) offcanvas.hide();
  }
}

function renderCartDrawer() {
  const body = document.getElementById("furnivoCartBody");
  const footer = document.getElementById("furnivoCartFooter");
  if (!body) return;

  const cart = getCart();
  if (cart.length === 0) {
    body.innerHTML = `
      <div class="drawer-empty-state">
        <div class="drawer-empty-icon">
          <i class="bi bi-bag-x"></i>
        </div>
        <h5 class="fw-bold text-dark mb-1">Your Cart is Empty</h5>
        <p class="text-muted small mb-4">You haven't added any handcrafted pieces to your cart yet.</p>
        <a href="shop.html" class="btn btn-dark-custom rounded-pill px-4 py-2" onclick="closeCartDrawer()">
          Start Shopping <i class="bi bi-arrow-right ms-1"></i>
        </a>
      </div>
    `;
    if (footer) footer.innerHTML = "";
    return;
  }

  let subtotal = 0;
  let html = `<div class="d-flex flex-column gap-3">`;

  cart.forEach(function (item) {
    const p = FURNIVO_PRODUCTS[item.id];
    if (!p) return;
    const itemTotal = p.price * item.qty;
    subtotal += itemTotal;

    html += `
      <div class="drawer-item-card rounded-4 p-3">
        <div class="d-flex gap-3 align-items-center">
          <a href="product-details.html?id=${p.id}" onclick="closeCartDrawer()">
            <img src="${p.images[0]}" alt="${p.name}" class="rounded-3" style="width: 70px; height: 70px; object-fit: cover;">
          </a>
          <div class="flex-grow-1 min-w-0">
            <a href="product-details.html?id=${p.id}" class="text-dark fw-bold text-decoration-none d-block text-truncate small mb-1" onclick="closeCartDrawer()">${p.name}</a>
            <div class="small text-muted mb-1">Finish: <span class="text-dark">${item.finish || 'Standard'}</span></div>
            <div class="d-flex align-items-center justify-content-between">
              <span class="text-secondary-custom fw-bold small">${formatPrice(itemTotal)}</span>
              <div class="d-inline-flex align-items-center border rounded-pill bg-light px-2 py-0">
                <button class="btn btn-sm btn-link text-dark text-decoration-none px-1 py-0" onclick="updateCartItemQty('${p.id}', '${item.finish}', -1);">-</button>
                <span class="px-2 fw-bold small" style="font-size:0.8rem;">${item.qty}</span>
                <button class="btn btn-sm btn-link text-dark text-decoration-none px-1 py-0" onclick="updateCartItemQty('${p.id}', '${item.finish}', 1);">+</button>
              </div>
            </div>
          </div>
          <button class="btn btn-sm text-danger border-0 p-1 ms-1" onclick="removeFromCart('${p.id}', '${item.finish}');" title="Remove">
            <i class="bi bi-trash fs-6"></i>
          </button>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  body.innerHTML = html;

  const freeShippingThreshold = 25000;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const diff = freeShippingThreshold - subtotal;
  const freeShippingText = diff <= 0 
    ? `<span class="text-success fw-bold"><i class="bi bi-check-circle-fill me-1"></i> You unlocked Free White-Glove Delivery!</span>` 
    : `<span>Add <strong>${formatPrice(diff)}</strong> more for <strong>Free Delivery</strong></span>`;

  const discount = calculateDiscount(subtotal);
  const appliedPromo = getAppliedPromo();
  const deliveryFee = subtotal >= freeShippingThreshold ? 0 : 1500;
  const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

  if (footer) {
    let discountRowHtml = "";
    if (appliedPromo && discount > 0) {
      discountRowHtml = `
        <div class="d-flex justify-content-between align-items-center mb-1 text-success small">
          <span>Promo (${appliedPromo.code}):</span>
          <span class="fw-bold">-${formatPrice(discount)}</span>
        </div>
      `;
    }

    footer.innerHTML = `
      <div class="mb-3">
        <div class="d-flex justify-content-between small text-muted mb-1">
          <span>Delivery Tier</span>
          <span>${progressPercent}%</span>
        </div>
        <div class="cart-progress-bar mb-2">
          <div class="cart-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>
        <div class="small text-center">${freeShippingText}</div>
      </div>
      <div class="mb-2 pt-2 border-top">
        <div class="d-flex justify-content-between align-items-center mb-1 small text-muted">
          <span>Subtotal:</span>
          <span class="fw-bold text-dark">${formatPrice(subtotal)}</span>
        </div>
        ${discountRowHtml}
        <div class="d-flex justify-content-between align-items-center mb-1 small text-muted">
          <span>Delivery:</span>
          <span class="${deliveryFee === 0 ? 'text-success fw-bold' : 'fw-bold text-dark'}">${deliveryFee === 0 ? 'FREE' : formatPrice(deliveryFee)}</span>
        </div>
        <div class="d-flex justify-content-between align-items-center pt-2 border-top">
          <span class="fw-bold text-dark">Estimated Total:</span>
          <span class="fw-bold text-secondary-custom fs-5">${formatPrice(grandTotal)}</span>
        </div>
      </div>
      <div class="d-flex flex-column gap-2 mt-3">
        <a href="cart.html" class="btn btn-dark-custom rounded-pill w-100 py-2 text-center" onclick="closeCartDrawer()">
          View Full Cart Page <i class="bi bi-arrow-right ms-1"></i>
        </a>
        <button class="btn btn-outline-dark rounded-pill w-100 py-2 small" onclick="openCheckoutModal()">
          <i class="bi bi-shield-lock me-1"></i> Proceed to Checkout
        </button>
      </div>
    `;
  }
}

/* --------------------------------------------------------------------------
   6. Product Category Filtering (Home Page)
   -------------------------------------------------------------------------- */
function filterCategory(category, buttonElement) {
  if (buttonElement) {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    buttonElement.classList.add("active");
  }

  const products = document.querySelectorAll(".product-item");
  products.forEach(function (product) {
    const productCategory = product.getAttribute("data-category");

    if (category === "all" || productCategory === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

/* --------------------------------------------------------------------------
   7. Live Search & Floating Autocomplete Dropdown
   -------------------------------------------------------------------------- */
function initSearch() {
  const searchInputs = document.querySelectorAll(".nav-search-input, .nav-search-box input");

  searchInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      const query = this.value.toLowerCase().trim();
      const productCards = document.querySelectorAll(".product-item, .shop-product-card-col");

      if (!productCards.length) {
        return;
      }

      productCards.forEach(function (card) {
        const title = card.querySelector(".product-title, .card-title, .shop-card-title")?.textContent.toLowerCase() || "";
        const meta = card.querySelector(".text-muted, .product-subtitle")?.textContent.toLowerCase() || "";
        const category = card.getAttribute("data-category") || "";

        if (title.includes(query) || meta.includes(query) || category.includes(query)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });

    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const query = this.value.trim();
        if (query && !document.getElementById("products-container") && !document.getElementById("shopProductsGrid")) {
          window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
        }
      }
    });
  });
}

function initSearchAutocomplete() {
  const searchWrappers = document.querySelectorAll(".nav-search-box");

  searchWrappers.forEach(function (wrapper) {
    wrapper.classList.add("nav-search-wrap");
    const input = wrapper.querySelector("input");
    if (!input) return;

    // Create or find dropdown element
    let dropdown = wrapper.querySelector(".search-autocomplete-dropdown");
    if (!dropdown) {
      dropdown = document.createElement("div");
      dropdown.className = "search-autocomplete-dropdown";
      wrapper.appendChild(dropdown);
    }

    input.addEventListener("input", function () {
      const query = this.value.trim().toLowerCase();
      if (!query || query.length < 1) {
        dropdown.classList.remove("show");
        dropdown.innerHTML = "";
        return;
      }

      const allKeys = Object.keys(FURNIVO_PRODUCTS);
      const matches = allKeys.filter(function (key) {
        const p = FURNIVO_PRODUCTS[key];
        return (
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          (p.material && p.material.toLowerCase().includes(query)) ||
          (p.description && p.description.toLowerCase().includes(query))
        );
      });

      if (matches.length === 0) {
        dropdown.innerHTML = `
          <div class="p-3 text-center text-muted small">
            <i class="bi bi-search mb-1 d-block fs-5"></i>
            No pieces found matching "<strong>${query}</strong>"
          </div>
        `;
        dropdown.classList.add("show");
        return;
      }

      let html = `<div class="d-flex flex-column gap-1">`;
      matches.slice(0, 5).forEach(function (key) {
        const p = FURNIVO_PRODUCTS[key];
        html += `
          <a href="product-details.html?id=${p.id}" class="search-result-item">
            <img src="${p.images[0]}" alt="${p.name}" class="search-result-img">
            <div class="flex-grow-1 min-w-0">
              <span class="badge bg-light text-muted border" style="font-size:0.65rem;">${p.category}</span>
              <div class="fw-bold text-truncate small text-dark mt-1">${p.name}</div>
              <div class="text-secondary-custom fw-semibold small">${formatPrice(p.price)}</div>
            </div>
            <i class="bi bi-arrow-right text-muted small"></i>
          </a>
        `;
      });

      if (matches.length > 5) {
        html += `
          <div class="border-top pt-2 mt-1 text-center">
            <a href="shop.html?search=${encodeURIComponent(query)}" class="small text-secondary-custom fw-bold text-decoration-none">
              View all ${matches.length} results <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        `;
      }

      html += `</div>`;
      dropdown.innerHTML = html;
      dropdown.classList.add("show");
    });

    input.addEventListener("focus", function () {
      if (this.value.trim().length >= 1) {
        dropdown.classList.add("show");
      }
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
      if (!wrapper.contains(e.target)) {
        dropdown.classList.remove("show");
      }
    });

    // Close on Escape key
    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        dropdown.classList.remove("show");
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. Product Details Page Renderer
   -------------------------------------------------------------------------- */
function initProductDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id") || "oslo-sofa";
  const product = FURNIVO_PRODUCTS[productId] || FURNIVO_PRODUCTS["oslo-sofa"];

  // Update Page Title
  document.title = `${product.name} | Furnivo`;

  // Populate Breadcrumb
  const breadcrumbCategory = document.getElementById("p-breadcrumb-category");
  const breadcrumbName = document.getElementById("p-breadcrumb-name");
  if (breadcrumbCategory) breadcrumbCategory.textContent = product.category;
  if (breadcrumbName) breadcrumbName.textContent = product.name;

  // Populate Images & 4 Thumbnails
  const mainImage = document.getElementById("p-main-img");
  const thumbnailsContainer = document.getElementById("p-thumbnails-container");

  if (mainImage && product.images && product.images.length > 0) {
    mainImage.src = product.images[0];
    mainImage.alt = product.name;
  }

  if (thumbnailsContainer && product.images) {
    thumbnailsContainer.innerHTML = "";
    product.images.forEach(function (imgSrc, index) {
      const thumb = document.createElement("img");
      thumb.src = imgSrc;
      thumb.alt = `${product.name} angle view ${index + 1}`;
      thumb.className = `p-thumb-img img-thumbnail rounded-3 ${index === 0 ? "active" : ""}`;
      thumb.onclick = function () {
        if (mainImage) mainImage.src = imgSrc;
        document.querySelectorAll(".p-thumb-img").forEach(t => t.classList.remove("active"));
        this.classList.add("active");
      };
      thumbnailsContainer.appendChild(thumb);
    });
  }

  // Populate Text Metadata
  const categoryEl = document.getElementById("p-category");
  const nameEl = document.getElementById("p-name");
  const ratingEl = document.getElementById("p-rating");
  const reviewsEl = document.getElementById("p-reviews");
  const priceEl = document.getElementById("p-price");
  const oldPriceEl = document.getElementById("p-old-price");
  const descEl = document.getElementById("p-desc");
  const materialEl = document.getElementById("p-material");
  const finishEl = document.getElementById("p-finish");
  const dimEl = document.getElementById("p-dimensions");
  const warrantyEl = document.getElementById("p-warranty");
  const deliveryEl = document.getElementById("p-delivery");
  const assemblyEl = document.getElementById("p-assembly");

  if (categoryEl) categoryEl.textContent = product.category;
  if (nameEl) nameEl.textContent = product.name;
  if (ratingEl) ratingEl.textContent = product.rating;
  if (reviewsEl) reviewsEl.textContent = `(${product.reviews} Reviews)`;
  if (priceEl) priceEl.textContent = formatPrice(product.price);

  if (oldPriceEl) {
    if (product.oldPrice) {
      oldPriceEl.textContent = formatPrice(product.oldPrice);
      oldPriceEl.style.display = "inline";
    } else {
      oldPriceEl.style.display = "none";
    }
  }

  if (descEl) descEl.textContent = product.description;
  if (materialEl) materialEl.textContent = product.material;
  if (finishEl) finishEl.textContent = product.finish || "Natural Organic Oil";
  if (dimEl) dimEl.textContent = product.dimensions || "Standard Architectural Size";
  if (warrantyEl) warrantyEl.textContent = product.warranty || "15 Years Timber Warranty";
  if (deliveryEl) deliveryEl.textContent = product.delivery || "5–7 Working Days (Free)";
  if (assemblyEl) assemblyEl.textContent = product.assembly || "White Glove Assembly Included";

  // Populate Color Finishes
  const colorContainer = document.getElementById("p-colors-container");
  if (colorContainer && product.colors) {
    colorContainer.innerHTML = "";
    product.colors.forEach(function (colorName, index) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `btn color-pill me-2 mb-2 ${index === 0 ? "active" : ""}`;
      button.textContent = colorName;
      button.onclick = function () {
        document.querySelectorAll(".color-pill").forEach(p => p.classList.remove("active"));
        this.classList.add("active");
      };
      colorContainer.appendChild(button);
    });
  }

  // Populate Specifications List
  const specList = document.getElementById("p-spec-list");
  if (specList && product.specifications) {
    specList.innerHTML = "";
    for (const [key, value] of Object.entries(product.specifications)) {
      const li = document.createElement("li");
      li.className = "d-flex justify-content-between py-2 border-bottom small";
      li.innerHTML = `<strong>${key}</strong> <span class="text-muted text-end">${value}</span>`;
      specList.appendChild(li);
    }
  }

  // Quantity Selector
  let qtyValue = 1;
  const qtyInput = document.getElementById("p-qty-input");
  const btnMinus = document.getElementById("p-btn-minus");
  const btnPlus = document.getElementById("p-btn-plus");

  if (btnMinus && qtyInput) {
    btnMinus.onclick = function () {
      if (qtyValue > 1) {
        qtyValue--;
        qtyInput.value = qtyValue;
      }
    };
  }

  if (btnPlus && qtyInput) {
    btnPlus.onclick = function () {
      qtyValue++;
      qtyInput.value = qtyValue;
    };
  }

  // Add to Cart Button
  const btnAddCart = document.getElementById("p-btn-add-cart");
  if (btnAddCart) {
    btnAddCart.onclick = function () {
      const selectedColor = document.querySelector(".color-pill.active")?.textContent || (product.colors ? product.colors[0] : "Standard");
      addToCart(product.id, qtyValue, selectedColor);
    };
  }

  // Buy Now Button
  const btnBuyNow = document.getElementById("p-btn-buy-now");
  if (btnBuyNow) {
    btnBuyNow.onclick = function () {
      const selectedColor = document.querySelector(".color-pill.active")?.textContent || (product.colors ? product.colors[0] : "Standard");
      addToCart(product.id, qtyValue, selectedColor);
      openCheckoutModal();
    };
  }

  // Wishlist Button
  const btnWishlist = document.getElementById("p-btn-wishlist");
  if (btnWishlist) {
    const wishlist = getWishlist();
    const icon = btnWishlist.querySelector("i");
    if (wishlist.includes(product.id)) {
      btnWishlist.classList.add("active");
      if (icon) {
        icon.classList.remove("bi-heart");
        icon.classList.add("bi-heart-fill");
      }
    } else {
      btnWishlist.classList.remove("active");
      if (icon) {
        icon.classList.remove("bi-heart-fill");
        icon.classList.add("bi-heart");
      }
    }
    btnWishlist.onclick = function (e) {
      toggleWishlist(this, product.id, e);
    };
  }

  // Render Related Products ("You May Also Like")
  renderRelatedProducts(product.id);
}

function renderRelatedProducts(currentId) {
  const container = document.getElementById("related-products-container");
  if (!container) return;

  container.innerHTML = "";
  const allIds = Object.keys(FURNIVO_PRODUCTS);
  const relatedIds = allIds.filter(id => id !== currentId).slice(0, 3);

  relatedIds.forEach(function (id) {
    const p = FURNIVO_PRODUCTS[id];
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
      <div class="card product-card h-100 border-0 shadow-sm" onclick="window.location.href='product-details.html?id=${p.id}'" style="cursor:pointer;">
        <div class="product-img-box position-relative">
          <img src="${p.images[0]}" class="card-img-top" alt="${p.name}" loading="lazy">
          <span class="badge badge-tag ${p.badgeClass || 'bg-secondary-custom'}">${p.badge || 'Furnivo'}</span>
          <button class="btn-wishlist ${getWishlist().includes(p.id) ? 'active' : ''}" onclick="toggleWishlist(this, '${p.id}', event)">
            <i class="bi bi-heart"></i>
          </button>
          <button class="btn-quickview" onclick="openQuickView('${p.id}', event)">
            <i class="bi bi-eye me-1"></i> Quick View
          </button>
        </div>
        <div class="card-body">
          <div class="product-meta-row">
            <span class="product-category">${p.category}</span>
            <span class="product-rating"><i class="bi bi-star-fill me-1"></i>${p.rating} (${p.reviews})</span>
          </div>
          <h5 class="product-title">${p.name}</h5>
          <p class="product-subtitle">${p.material}</p>
          <div class="swatches-row">
            <small class="swatches-label">Finishes:</small>
            <span class="swatch active" style="background:#523A28;" title="Finish 1"></span>
            <span class="swatch" style="background:#D1C7BD;" title="Finish 2"></span>
          </div>
          <div class="product-card-footer">
            <div class="product-price-wrapper">
              <span class="product-old-price">${p.oldPrice ? formatPrice(p.oldPrice) : '&nbsp;'}</span>
              <span class="product-current-price">${formatPrice(p.price)}</span>
            </div>
            <div class="product-actions-btn-group">
              <a href="product-details.html?id=${p.id}" class="btn btn-outline-dark" onclick="event.stopPropagation();">
                Details
              </a>
              <button class="btn btn-dark" onclick="event.stopPropagation(); addToCart('${p.id}', 1);">
                <i class="bi bi-cart-plus me-1"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

/* --------------------------------------------------------------------------
   8B. Customer Reviews & Ratings Engine
   -------------------------------------------------------------------------- */
var DEFAULT_PRODUCT_REVIEWS = [
  {
    name: "Ananya Deshmukh",
    city: "Mumbai",
    rating: 5,
    title: "Remarkable craftsmanship & serene texture",
    date: "12 days ago",
    comment: "The tactile bouclé upholstery and solid timber plinth look even more luxurious in person than on photos. Delivered seamlessly by the white-glove team to our 7th floor penthouse.",
    verified: true,
    helpful: 24
  },
  {
    name: "Rajesh Kapoor",
    city: "Pune",
    rating: 5,
    title: "Heirloom quality timber jointing",
    date: "3 weeks ago",
    comment: "Exceptional solid white oak grain. The natural matte hardwax finish is smooth, moisture repellent, and smells completely organic. Highly recommend Furnivo!",
    verified: true,
    helpful: 18
  },
  {
    name: "Sneha Mehta",
    city: "Bengaluru",
    rating: 4,
    title: "Stunning minimalist aesthetic",
    date: "1 month ago",
    comment: "Fits our Scandinavian Japandi living room concept flawlessly. Generously proportioned and deeply comfortable for hosting guests.",
    verified: true,
    helpful: 11
  }
];

var selectedReviewRating = 5;

function setReviewFormRating(stars) {
  selectedReviewRating = stars;
  const starIcons = document.querySelectorAll(".star-rating-selector .star-icon");
  starIcons.forEach(function (icon) {
    const starVal = Number(icon.getAttribute("data-star")) || 0;
    if (starVal <= stars) {
      icon.classList.add("active", "bi-star-fill");
      icon.classList.remove("bi-star");
    } else {
      icon.classList.remove("active", "bi-star-fill");
      icon.classList.add("bi-star");
    }
  });
  const ratingText = document.getElementById("selectedRatingText");
  if (ratingText) {
    ratingText.textContent = `${stars} out of 5 Stars`;
  }
}

function initProductReviews() {
  const container = document.getElementById("customer-reviews-container");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id") || "oslo-sofa";
  renderProductReviews(productId);
}

function renderProductReviews(productId) {
  const container = document.getElementById("customer-reviews-container");
  if (!container) return;

  const product = FURNIVO_PRODUCTS[productId] || FURNIVO_PRODUCTS["oslo-sofa"];
  let storedReviews = [];
  try {
    storedReviews = JSON.parse(localStorage.getItem(`furnivo_reviews_${productId}`)) || [];
  } catch (e) {
    storedReviews = [];
  }

  const allReviews = [...storedReviews, ...DEFAULT_PRODUCT_REVIEWS];
  const totalCount = allReviews.length;
  const avgRating = (allReviews.reduce((sum, r) => sum + Number(r.rating), 0) / totalCount).toFixed(1);

  let reviewsListHtml = "";
  allReviews.forEach(function (r, index) {
    let starsHtml = "";
    for (let i = 1; i <= 5; i++) {
      starsHtml += `<i class="bi bi-star-fill ${i <= r.rating ? 'text-warning' : 'text-muted opacity-25'} me-1"></i>`;
    }

    reviewsListHtml += `
      <div class="review-card mb-3">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <div>
            <div class="d-flex align-items-center gap-2 mb-1">
              <strong class="text-dark">${r.name}</strong>
              <span class="verified-badge"><i class="bi bi-patch-check-fill me-1"></i>Verified Buyer</span>
            </div>
            <div class="text-muted small">${r.city ? r.city + ' • ' : ''}${r.date}</div>
          </div>
          <div class="text-warning small">${starsHtml}</div>
        </div>
        <h6 class="fw-bold text-dark mb-1">${r.title}</h6>
        <p class="text-muted small mb-3">${r.comment}</p>
        <div class="d-flex align-items-center justify-content-between pt-2 border-top border-light">
          <small class="text-muted"><i class="bi bi-hand-thumbs-up me-1 text-secondary-custom"></i> Helpful (${r.helpful || 0})</small>
          <button class="btn btn-sm btn-link text-muted text-decoration-none p-0 small" onclick="upvoteReview(this, ${r.helpful || 0})">
            Was this helpful? <span class="text-dark fw-bold">Yes</span>
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="row g-4 mb-4">
      <div class="col-lg-4">
        <div class="p-4 bg-light-custom rounded-4 border text-center h-100 d-flex flex-column justify-content-center">
          <div class="display-4 fw-bold text-dark mb-1">${avgRating}</div>
          <div class="text-warning fs-5 mb-2">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
          </div>
          <div class="text-muted small mb-3">Based on ${totalCount} Verified Reviews</div>
          <button class="btn btn-dark-custom rounded-pill py-2 px-4 shadow-sm" onclick="toggleReviewForm()">
            <i class="bi bi-pencil-square me-1"></i> Write a Review
          </button>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="p-4 bg-white rounded-4 border">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold mb-0 text-dark">Rating Breakdown</h5>
            <span class="badge bg-success-subtle text-success rounded-pill px-3 py-1 small">98% Recommendation Rate</span>
          </div>
          <div class="d-flex flex-column gap-2 small">
            <div class="d-flex align-items-center gap-2">
              <span class="text-muted" style="width: 45px;">5 Star</span>
              <div class="progress flex-grow-1" style="height: 8px;">
                <div class="progress-bar bg-warning" style="width: 88%;"></div>
              </div>
              <span class="text-muted text-end" style="width: 35px;">88%</span>
            </div>
            <div class="d-flex align-items-center gap-2">
              <span class="text-muted" style="width: 45px;">4 Star</span>
              <div class="progress flex-grow-1" style="height: 8px;">
                <div class="progress-bar bg-warning" style="width: 10%;"></div>
              </div>
              <span class="text-muted text-end" style="width: 35px;">10%</span>
            </div>
            <div class="d-flex align-items-center gap-2">
              <span class="text-muted" style="width: 45px;">3 Star</span>
              <div class="progress flex-grow-1" style="height: 8px;">
                <div class="progress-bar bg-warning" style="width: 2%;"></div>
              </div>
              <span class="text-muted text-end" style="width: 35px;">2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Review Form (Hidden by default) -->
    <div id="writeReviewFormWrap" class="p-4 bg-white rounded-4 border shadow-sm mb-4" style="display: none;">
      <h5 class="fw-bold mb-3 text-dark"><i class="bi bi-star-fill text-warning me-2"></i>Write a Customer Review</h5>
      <form id="productReviewForm" onsubmit="handleReviewSubmit(event, '${productId}')">
        <div class="mb-3">
          <label class="form-label small fw-bold text-dark mb-1">Overall Rating:</label>
          <div class="d-flex align-items-center gap-3">
            <div class="star-rating-selector" id="formStarRating">
              <i class="bi bi-star-fill star-icon active" data-star="1" onclick="setReviewFormRating(1)"></i>
              <i class="bi bi-star-fill star-icon active" data-star="2" onclick="setReviewFormRating(2)"></i>
              <i class="bi bi-star-fill star-icon active" data-star="3" onclick="setReviewFormRating(3)"></i>
              <i class="bi bi-star-fill star-icon active" data-star="4" onclick="setReviewFormRating(4)"></i>
              <i class="bi bi-star-fill star-icon active" data-star="5" onclick="setReviewFormRating(5)"></i>
            </div>
            <span class="small fw-semibold text-secondary-custom" id="selectedRatingText">5 out of 5 Stars</span>
          </div>
        </div>
        <div class="row g-3 mb-3">
          <div class="col-md-6">
            <label class="form-label small fw-bold text-dark mb-1">Your Name *</label>
            <input type="text" id="reviewAuthorName" class="form-control rounded-3" placeholder="e.g. Vishal Sharma" required>
          </div>
          <div class="col-md-6">
            <label class="form-label small fw-bold text-dark mb-1">City / Region *</label>
            <input type="text" id="reviewAuthorCity" class="form-control rounded-3" placeholder="e.g. Pune, Maharashtra" required>
          </div>
          <div class="col-12">
            <label class="form-label small fw-bold text-dark mb-1">Review Headline *</label>
            <input type="text" id="reviewHeadline" class="form-control rounded-3" placeholder="e.g. Magnificent solid oak table and smooth finish" required>
          </div>
          <div class="col-12">
            <label class="form-label small fw-bold text-dark mb-1">Detailed Review *</label>
            <textarea id="reviewComment" class="form-control rounded-3" rows="4" placeholder="Tell us about the wood grain, comfort, delivery speed, and how it feels in your space..." required></textarea>
          </div>
        </div>
        <div class="d-flex justify-content-end gap-2">
          <button type="button" class="btn btn-outline-secondary rounded-pill px-4" onclick="toggleReviewForm()">Cancel</button>
          <button type="submit" class="btn btn-dark-custom rounded-pill px-4">Submit Review</button>
        </div>
      </form>
    </div>

    <!-- Reviews List Container -->
    <div id="reviewsListItems">
      ${reviewsListHtml}
    </div>
  `;
}

function toggleReviewForm() {
  const formWrap = document.getElementById("writeReviewFormWrap");
  if (!formWrap) return;
  if (formWrap.style.display === "none") {
    formWrap.style.display = "block";
    formWrap.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    formWrap.style.display = "none";
  }
}

function handleReviewSubmit(e, productId) {
  e.preventDefault();
  const name = document.getElementById("reviewAuthorName")?.value.trim() || "Verified Buyer";
  const city = document.getElementById("reviewAuthorCity")?.value.trim() || "";
  const title = document.getElementById("reviewHeadline")?.value.trim() || "Excellent Craftsmanship";
  const comment = document.getElementById("reviewComment")?.value.trim() || "";

  const newReview = {
    name: name,
    city: city,
    rating: selectedReviewRating,
    title: title,
    date: "Just now",
    comment: comment,
    verified: true,
    helpful: 1
  };

  let stored = [];
  try {
    stored = JSON.parse(localStorage.getItem(`furnivo_reviews_${productId}`)) || [];
  } catch (err) {
    stored = [];
  }

  stored.unshift(newReview);
  localStorage.setItem(`furnivo_reviews_${productId}`, JSON.stringify(stored));

  showToast("Thank you! Your verified review has been published.");
  renderProductReviews(productId);
}

function upvoteReview(btn, count) {
  if (btn) {
    btn.innerHTML = `<span class="text-success fw-bold"><i class="bi bi-check-lg me-1"></i>Thank you!</span>`;
    btn.disabled = true;
  }
}

/* --------------------------------------------------------------------------
   9. Cart Page Renderer (Full Interactive Cart)
   -------------------------------------------------------------------------- */
function initCartPage() {
  renderCartPage();
}

function renderCartPage() {
  const cart = getCart();
  const tbody = document.getElementById("cart-items-tbody");
  const subtotalEl = document.getElementById("cart-subtotal");
  const deliveryEl = document.getElementById("cart-delivery");
  const discountRowEl = document.getElementById("cart-discount-row");
  const discountAmountEl = document.getElementById("cart-discount-amount");
  const discountLabelEl = document.getElementById("cart-discount-label");
  const totalEl = document.getElementById("cart-total");
  const emptyMessage = document.getElementById("cart-empty-message");
  const cartContent = document.getElementById("cart-content-wrapper");

  if (!tbody) return;

  if (cart.length === 0) {
    if (emptyMessage) emptyMessage.style.display = "block";
    if (cartContent) cartContent.style.display = "none";
    return;
  } else {
    if (emptyMessage) emptyMessage.style.display = "none";
    if (cartContent) cartContent.style.display = "flex";
  }

  tbody.innerHTML = "";
  let subtotal = 0;

  cart.forEach(function (item) {
    const p = FURNIVO_PRODUCTS[item.id];
    if (!p) return;

    const itemTotal = p.price * item.qty;
    subtotal += itemTotal;

    const tr = document.createElement("tr");
    tr.className = "align-middle";
    tr.innerHTML = `
      <td class="ps-0 py-3">
        <div class="d-flex align-items-center gap-3">
          <img src="${p.images[0]}" alt="${p.name}" class="rounded-3" style="width: 75px; height: 75px; object-fit: cover;">
          <div>
            <a href="product-details.html?id=${p.id}" class="text-dark fw-bold text-decoration-none mb-1 d-block">${p.name}</a>
            <small class="text-muted d-block">Finish: ${item.finish || 'Standard'}</small>
            <small class="text-secondary-custom fw-semibold">${formatPrice(p.price)}</small>
          </div>
        </div>
      </td>
      <td class="text-center py-3">
        <div class="d-inline-flex align-items-center border rounded-pill bg-light p-1">
          <button class="btn btn-sm btn-link text-dark text-decoration-none px-2 py-0" onclick="updateCartItemQty('${p.id}', '${item.finish}', -1)">-</button>
          <span class="px-2 fw-bold small">${item.qty}</span>
          <button class="btn btn-sm btn-link text-dark text-decoration-none px-2 py-0" onclick="updateCartItemQty('${p.id}', '${item.finish}', 1)">+</button>
        </div>
      </td>
      <td class="text-end py-3 fw-bold">
        ${formatPrice(itemTotal)}
      </td>
      <td class="text-end pe-0 py-3">
        <button class="btn btn-sm text-danger border-0 bg-transparent p-0" onclick="removeFromCart('${p.id}', '${item.finish}')" title="Remove">
          <i class="bi bi-trash fs-5"></i>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Calculate Order Summary with Promos and Currency
  const deliveryFee = subtotal >= 25000 ? 0 : 1500;
  const discount = calculateDiscount(subtotal);
  const appliedPromo = getAppliedPromo();
  const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (deliveryEl) {
    deliveryEl.textContent = deliveryFee === 0 ? "FREE" : formatPrice(deliveryFee);
    if (deliveryFee === 0) deliveryEl.className = "text-success fw-bold";
    else deliveryEl.className = "text-dark fw-bold";
  }

  // Handle Promo Code UI Display on Cart Page
  const promoContainer = document.getElementById("cart-applied-promo-wrap");
  if (promoContainer) {
    if (appliedPromo && discount > 0) {
      promoContainer.innerHTML = `
        <div class="d-flex align-items-center justify-content-between p-2 bg-success-subtle rounded-3 mb-3 border border-success-subtle">
          <div class="d-flex align-items-center gap-2">
            <i class="bi bi-tag-fill text-success"></i>
            <div>
              <strong class="text-success small d-block">${appliedPromo.code}</strong>
              <small class="text-muted" style="font-size:0.75rem;">${appliedPromo.label}</small>
            </div>
          </div>
          <button class="btn btn-sm text-danger border-0 p-0" onclick="removePromoCode()" title="Remove Coupon">
            <i class="bi bi-x-circle fs-5"></i>
          </button>
        </div>
      `;
    } else {
      promoContainer.innerHTML = "";
    }
  }

  if (discountRowEl && discountAmountEl) {
    if (appliedPromo && discount > 0) {
      discountRowEl.style.display = "flex";
      discountAmountEl.textContent = `-${formatPrice(discount)}`;
      if (discountLabelEl) discountLabelEl.textContent = `Promo (${appliedPromo.code})`;
    } else {
      discountRowEl.style.display = "none";
    }
  }

  if (totalEl) totalEl.textContent = formatPrice(grandTotal);
}

function handleApplyPromo() {
  const input = document.getElementById("cartPromoInput");
  if (!input) return;
  const code = input.value.trim();
  const cart = getCart();
  const subtotal = cart.reduce(function (sum, item) {
    const p = FURNIVO_PRODUCTS[item.id];
    return sum + (p ? p.price * item.qty : 0);
  }, 0);

  const result = applyPromoCode(code, subtotal);
  if (result.success) {
    showToast(result.message);
    input.value = "";
    renderCartPage();
    renderCartDrawer();
  } else {
    showToast(result.message, "error");
  }
}

function proceedToCheckout() {
  openCheckoutModal();
}

/* --------------------------------------------------------------------------
   10. Multi-Step Checkout Modal Engine
   -------------------------------------------------------------------------- */
var activeCheckoutStep = 1;
var selectedPaymentMethodType = "upi";

function ensureCheckoutModalExists() {
  if (document.getElementById("checkoutModal")) return;

  const modalHtml = `
    <div class="modal fade" id="checkoutModal" tabindex="-1" aria-labelledby="checkoutModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered checkout-modal-dialog">
        <div class="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
          <div class="modal-header border-bottom py-3 px-4 bg-light">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-shield-lock-fill text-secondary-custom fs-5"></i>
              <h5 class="modal-title fw-bold mb-0" id="checkoutModalLabel">Furnivo Secure Checkout</h5>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <!-- Step Indicator -->
            <div class="checkout-step-indicator" id="checkoutStepIndicator">
              <div class="checkout-step-item active" id="checkoutStepNode1">
                <div class="checkout-step-node">1</div>
                <span class="checkout-step-label">Shipping</span>
              </div>
              <div class="checkout-step-item" id="checkoutStepNode2">
                <div class="checkout-step-node">2</div>
                <span class="checkout-step-label">Payment</span>
              </div>
              <div class="checkout-step-item" id="checkoutStepNode3">
                <div class="checkout-step-node">3</div>
                <span class="checkout-step-label">Confirmation</span>
              </div>
            </div>

            <!-- Step 1: Shipping Address -->
            <div id="checkoutStep1" class="checkout-step-pane">
              <h6 class="fw-bold mb-3 text-dark"><i class="bi bi-geo-alt me-2 text-secondary-custom"></i>Delivery Address</h6>
              <form id="checkoutShippingForm" onsubmit="event.preventDefault(); goToCheckoutStep(2);">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label small fw-semibold text-muted mb-1">Full Name *</label>
                    <input type="text" id="chkFullName" class="form-control rounded-3" placeholder="e.g. Vishal Sharma" required value="Vishal Sharma">
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small fw-semibold text-muted mb-1">Phone Number *</label>
                    <input type="tel" id="chkPhone" class="form-control rounded-3" placeholder="e.g. +91 98765 43210" required value="+91 98765 43210">
                  </div>
                  <div class="col-12">
                    <label class="form-label small fw-semibold text-muted mb-1">Email Address *</label>
                    <input type="email" id="chkEmail" class="form-control rounded-3" placeholder="e.g. vishal@furnivo.com" required value="vishal@furnivo.com">
                  </div>
                  <div class="col-12">
                    <label class="form-label small fw-semibold text-muted mb-1">Street Address / Studio Suite *</label>
                    <input type="text" id="chkAddress" class="form-control rounded-3" placeholder="e.g. 104 KK Market, Satara Rd" required value="104 KK Market, Satara Rd">
                  </div>
                  <div class="col-md-5">
                    <label class="form-label small fw-semibold text-muted mb-1">City *</label>
                    <input type="text" id="chkCity" class="form-control rounded-3" placeholder="Pune" required value="Pune">
                  </div>
                  <div class="col-md-4">
                    <label class="form-label small fw-semibold text-muted mb-1">State *</label>
                    <input type="text" id="chkState" class="form-control rounded-3" placeholder="Maharashtra" required value="Maharashtra">
                  </div>
                  <div class="col-md-3">
                    <label class="form-label small fw-semibold text-muted mb-1">Postal Code *</label>
                    <input type="text" id="chkPincode" class="form-control rounded-3" placeholder="411037" required value="411037">
                  </div>
                  <div class="col-12">
                    <label class="form-label small fw-semibold text-muted mb-1">Delivery Instructions (Optional)</label>
                    <input type="text" id="chkInstructions" class="form-control rounded-3" placeholder="e.g. Call before delivery / 2nd floor with service lift">
                  </div>
                </div>

                <div class="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                  <button type="button" class="btn btn-outline-secondary rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-dark-custom rounded-pill px-4">
                    Continue to Payment <i class="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </form>
            </div>

            <!-- Step 2: Payment Method -->
            <div id="checkoutStep2" class="checkout-step-pane" style="display: none;">
              <h6 class="fw-bold mb-3 text-dark"><i class="bi bi-credit-card me-2 text-secondary-custom"></i>Select Payment Method</h6>
              
              <div class="row g-3 mb-4">
                <div class="col-sm-6">
                  <div class="payment-method-card selected" onclick="selectPaymentMethod('upi', this)">
                    <div class="d-flex align-items-center gap-2 mb-1">
                      <i class="bi bi-qr-code text-secondary-custom fs-5"></i>
                      <strong class="small text-dark">Instant UPI</strong>
                    </div>
                    <small class="text-muted d-block" style="font-size: 0.75rem;">Google Pay, PhonePe, Paytm, BHIM</small>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="payment-method-card" onclick="selectPaymentMethod('card', this)">
                    <div class="d-flex align-items-center gap-2 mb-1">
                      <i class="bi bi-credit-card-2-front text-secondary-custom fs-5"></i>
                      <strong class="small text-dark">Credit / Debit Card</strong>
                    </div>
                    <small class="text-muted d-block" style="font-size: 0.75rem;">Visa, MasterCard, RuPay, Amex</small>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="payment-method-card" onclick="selectPaymentMethod('netbanking', this)">
                    <div class="d-flex align-items-center gap-2 mb-1">
                      <i class="bi bi-bank text-secondary-custom fs-5"></i>
                      <strong class="small text-dark">Net Banking</strong>
                    </div>
                    <small class="text-muted d-block" style="font-size: 0.75rem;">HDFC, ICICI, SBI, Axis &amp; 50+ Banks</small>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="payment-method-card" onclick="selectPaymentMethod('cod', this)">
                    <div class="d-flex align-items-center gap-2 mb-1">
                      <i class="bi bi-cash-stack text-secondary-custom fs-5"></i>
                      <strong class="small text-dark">Cash on Delivery</strong>
                    </div>
                    <small class="text-muted d-block" style="font-size: 0.75rem;">Pay upon white-glove assembly</small>
                  </div>
                </div>
              </div>

              <!-- Payment Details Subforms -->
              <div id="payFormUpi" class="payment-subform p-3 bg-light rounded-3 mb-4">
                <label class="form-label small fw-semibold text-muted mb-1">Enter your UPI ID / VPA</label>
                <div class="input-group">
                  <input type="text" id="chkUpiId" class="form-control rounded-start-3" placeholder="e.g. user@okhdfcbank" value="vishal@okhdfcbank">
                  <span class="input-group-text bg-white small text-success fw-bold"><i class="bi bi-check-circle me-1"></i>Verified</span>
                </div>
              </div>

              <div id="payFormCard" class="payment-subform p-3 bg-light rounded-3 mb-4" style="display:none;">
                <div class="row g-2">
                  <div class="col-12">
                    <label class="form-label small fw-semibold text-muted mb-1">Card Number</label>
                    <input type="text" class="form-control" placeholder="4532 •••• •••• 8892" value="4532 8900 1234 8892">
                  </div>
                  <div class="col-6">
                    <label class="form-label small fw-semibold text-muted mb-1">Expiry Date</label>
                    <input type="text" class="form-control" placeholder="MM / YY" value="12/28">
                  </div>
                  <div class="col-6">
                    <label class="form-label small fw-semibold text-muted mb-1">CVV</label>
                    <input type="password" class="form-control" placeholder="•••" value="892">
                  </div>
                </div>
              </div>

              <div id="payFormNetbanking" class="payment-subform p-3 bg-light rounded-3 mb-4" style="display:none;">
                <label class="form-label small fw-semibold text-muted mb-1">Select Bank</label>
                <select class="form-select">
                  <option selected>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>State Bank of India (SBI)</option>
                  <option>Axis Bank</option>
                  <option>Kotak Mahindra Bank</option>
                </select>
              </div>

              <div id="payFormCod" class="payment-subform p-3 bg-light rounded-3 mb-4" style="display:none;">
                <div class="d-flex align-items-center gap-2 text-dark small">
                  <i class="bi bi-info-circle-fill text-secondary-custom fs-5"></i>
                  <span>You can inspect and pay securely via Cash or UPI upon White-Glove delivery and installation.</span>
                </div>
              </div>

              <!-- Order Summary preview in step 2 -->
              <div class="p-3 border rounded-3 bg-white mb-4" id="checkoutModalSummary">
                <!-- Dynamically populated -->
              </div>

              <div class="d-flex justify-content-between align-items-center pt-2">
                <button type="button" class="btn btn-outline-secondary rounded-pill px-4" onclick="goToCheckoutStep(1)">
                  <i class="bi bi-arrow-left me-1"></i> Back
                </button>
                <button type="button" class="btn btn-dark-custom rounded-pill px-4" onclick="processPlaceOrder()">
                  <i class="bi bi-lock-fill me-1"></i> Place Order
                </button>
              </div>
            </div>

            <!-- Step 3: Order Receipt & Confirmation -->
            <div id="checkoutStep3" class="checkout-step-pane" style="display: none;">
              <div class="text-center">
                <div class="order-success-icon">
                  <i class="bi bi-check-lg"></i>
                </div>
                <h4 class="fw-bold text-dark mb-1">Thank You for Your Order!</h4>
                <p class="text-muted small mb-3">Your bespoke order has been confirmed and placed with our master studio.</p>
                <div class="badge bg-light text-dark border px-3 py-2 rounded-pill fs-6 mb-4">
                  Order ID: <span id="receiptOrderId" class="fw-bold text-secondary-custom">#FRN-849201</span>
                </div>
              </div>

              <div class="border rounded-4 p-3 bg-light-custom mb-4" id="receiptContent">
                <!-- Dynamically populated with receipt details -->
              </div>

              <div class="d-flex gap-2">
                <button class="btn btn-outline-dark rounded-pill flex-fill py-2" onclick="window.print()">
                  <i class="bi bi-printer me-1"></i> Print Receipt
                </button>
                <a href="shop.html" class="btn btn-dark-custom rounded-pill flex-fill py-2" data-bs-dismiss="modal">
                  Continue Shopping <i class="bi bi-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const container = document.createElement("div");
  container.innerHTML = modalHtml;
  document.body.appendChild(container.firstElementChild);
}

function openCheckoutModal() {
  const cart = getCart();
  if (cart.length === 0) {
    showToast("Your cart is currently empty. Add pieces to proceed to checkout.", "cart");
    return;
  }

  ensureCheckoutModalExists();
  closeCartDrawer();
  goToCheckoutStep(1);

  const modalEl = document.getElementById("checkoutModal");
  if (modalEl && typeof bootstrap !== "undefined" && bootstrap.Modal) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }
}

function goToCheckoutStep(step) {
  activeCheckoutStep = step;

  // Update step indicators
  for (let i = 1; i <= 3; i++) {
    const node = document.getElementById(`checkoutStepNode${i}`);
    const pane = document.getElementById(`checkoutStep${i}`);

    if (node) {
      if (i < step) {
        node.className = "checkout-step-item completed";
      } else if (i === step) {
        node.className = "checkout-step-item active";
      } else {
        node.className = "checkout-step-item";
      }
    }

    if (pane) {
      pane.style.display = (i === step) ? "block" : "none";
    }
  }

  // If in step 2, update summary
  if (step === 2) {
    updateCheckoutStep2Summary();
  }
}

function selectPaymentMethod(method, el) {
  selectedPaymentMethodType = method;
  document.querySelectorAll(".payment-method-card").forEach(c => c.classList.remove("selected"));
  if (el) el.classList.add("selected");

  const upiForm = document.getElementById("payFormUpi");
  const cardForm = document.getElementById("payFormCard");
  const netForm = document.getElementById("payFormNetbanking");
  const codForm = document.getElementById("payFormCod");

  if (upiForm) upiForm.style.display = (method === "upi") ? "block" : "none";
  if (cardForm) cardForm.style.display = (method === "card") ? "block" : "none";
  if (netForm) netForm.style.display = (method === "netbanking") ? "block" : "none";
  if (codForm) codForm.style.display = (method === "cod") ? "block" : "none";
}

function updateCheckoutStep2Summary() {
  const summaryEl = document.getElementById("checkoutModalSummary");
  if (!summaryEl) return;

  const cart = getCart();
  let subtotal = 0;
  cart.forEach(item => {
    const p = FURNIVO_PRODUCTS[item.id];
    if (p) subtotal += p.price * item.qty;
  });

  const discount = calculateDiscount(subtotal);
  const appliedPromo = getAppliedPromo();
  const deliveryFee = subtotal >= 25000 ? 0 : 1500;
  const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

  summaryEl.innerHTML = `
    <div class="d-flex justify-content-between small text-muted mb-1">
      <span>Subtotal (${cart.length} unique items):</span>
      <span class="text-dark fw-semibold">${formatPrice(subtotal)}</span>
    </div>
    ${appliedPromo && discount > 0 ? `
    <div class="d-flex justify-content-between small text-success mb-1">
      <span>Discount (${appliedPromo.code}):</span>
      <span class="fw-bold">-${formatPrice(discount)}</span>
    </div>` : ''}
    <div class="d-flex justify-content-between small text-muted mb-2">
      <span>White-Glove Delivery:</span>
      <span class="${deliveryFee === 0 ? 'text-success fw-bold' : 'text-dark fw-semibold'}">${deliveryFee === 0 ? 'FREE' : formatPrice(deliveryFee)}</span>
    </div>
    <div class="d-flex justify-content-between align-items-center pt-2 border-top">
      <strong class="text-dark">Amount Payable:</strong>
      <strong class="text-secondary-custom fs-5">${formatPrice(grandTotal)}</strong>
    </div>
  `;
}

function processPlaceOrder() {
  const cart = getCart();
  if (cart.length === 0) return;

  const orderId = "#FRN-" + Math.floor(100000 + Math.random() * 900000);
  const name = document.getElementById("chkFullName")?.value || "Valued Client";
  const email = document.getElementById("chkEmail")?.value || "client@furnivo.com";
  const phone = document.getElementById("chkPhone")?.value || "+91 98765 43210";
  const address = document.getElementById("chkAddress")?.value || "104 KK Market, Satara Rd";
  const city = document.getElementById("chkCity")?.value || "Pune";
  const state = document.getElementById("chkState")?.value || "Maharashtra";
  const pincode = document.getElementById("chkPincode")?.value || "411037";

  let subtotal = 0;
  let itemsBreakdownHtml = "";
  cart.forEach(item => {
    const p = FURNIVO_PRODUCTS[item.id];
    if (p) {
      const itemTotal = p.price * item.qty;
      subtotal += itemTotal;
      itemsBreakdownHtml += `
        <div class="d-flex justify-content-between align-items-center py-2 border-bottom small">
          <div>
            <strong class="text-dark">${p.name}</strong>
            <small class="text-muted d-block">${item.finish || 'Standard'} • Qty: ${item.qty}</small>
          </div>
          <span class="fw-semibold text-dark">${formatPrice(itemTotal)}</span>
        </div>
      `;
    }
  });

  const discount = calculateDiscount(subtotal);
  const appliedPromo = getAppliedPromo();
  const deliveryFee = subtotal >= 25000 ? 0 : 1500;
  const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

  const receiptContent = document.getElementById("receiptContent");
  const orderIdEl = document.getElementById("receiptOrderId");
  if (orderIdEl) orderIdEl.textContent = orderId;

  if (receiptContent) {
    receiptContent.innerHTML = `
      <div class="mb-3">
        <h6 class="fw-bold text-dark mb-2">Order Breakdown</h6>
        ${itemsBreakdownHtml}
      </div>
      <div class="row g-3 small mb-3">
        <div class="col-6">
          <span class="text-muted d-block">Deliver To:</span>
          <strong class="text-dark">${name}</strong>
          <div class="text-muted">${address}, ${city}, ${state} - ${pincode}</div>
          <div class="text-muted">${phone}</div>
        </div>
        <div class="col-6">
          <span class="text-muted d-block">Payment Method:</span>
          <strong class="text-dark text-uppercase">${selectedPaymentMethodType}</strong>
          <span class="badge bg-success-subtle text-success d-block w-fit mt-1">Paid / Authorized</span>
          <div class="text-muted mt-1">Est. Delivery: 5–7 Working Days</div>
        </div>
      </div>
      <div class="pt-2 border-top">
        <div class="d-flex justify-content-between align-items-center">
          <span class="fw-bold text-dark">Total Paid:</span>
          <span class="fw-bold text-secondary-custom fs-5">${formatPrice(grandTotal)}</span>
        </div>
      </div>
    `;
  }

  // Save order to history
  const orderRecord = {
    orderId: orderId,
    date: new Date().toISOString(),
    customer: { name, email, phone, address, city, state, pincode },
    items: cart,
    subtotal: subtotal,
    discount: discount,
    promo: appliedPromo,
    delivery: deliveryFee,
    total: grandTotal,
    paymentMethod: selectedPaymentMethodType
  };

  try {
    const existingOrders = JSON.parse(localStorage.getItem("furnivo_orders")) || [];
    existingOrders.unshift(orderRecord);
    localStorage.setItem("furnivo_orders", JSON.stringify(existingOrders));
  } catch (e) {}

  // Clear cart and promo
  saveCart([]);
  localStorage.removeItem("furnivo_applied_promo");

  // Show Step 3
  goToCheckoutStep(3);
  showToast(`Order ${orderId} placed successfully!`, "cart");
}

/* --------------------------------------------------------------------------
   11. Quick View Modal
   -------------------------------------------------------------------------- */
var activeQuickViewProductId = null;

function openQuickView(productId, event) {
  if (event) {
    if (typeof event.stopPropagation === "function") event.stopPropagation();
    if (typeof event.preventDefault === "function") event.preventDefault();
  } else if (window.event) {
    window.event.cancelBubble = true;
  }

  const product = FURNIVO_PRODUCTS[productId];
  if (!product) return;

  activeQuickViewProductId = productId;

  const modalImg = document.getElementById("quickview-img");
  const modalCategory = document.getElementById("quickview-category");
  const modalName = document.getElementById("quickview-name");
  const modalPrice = document.getElementById("quickview-price");
  const modalDesc = document.getElementById("quickview-desc");
  const modalLink = document.getElementById("quickview-link");
  const modalAddBtn = document.getElementById("quickview-add-btn");

  if (modalImg && product.images && product.images.length > 0) {
    modalImg.src = product.images[0];
    modalImg.alt = product.name;
  }
  if (modalCategory) modalCategory.textContent = product.category;
  if (modalName) modalName.textContent = product.name;
  if (modalPrice) modalPrice.textContent = formatPrice(product.price);
  if (modalDesc) modalDesc.textContent = product.description;
  if (modalLink) modalLink.href = `product-details.html?id=${product.id}`;

  const modalEl = document.getElementById("quickViewModal");
  if (modalEl && typeof bootstrap !== "undefined" && bootstrap.Modal) {
    const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);

    if (modalAddBtn) {
      modalAddBtn.onclick = function (e) {
        if (e) e.stopPropagation();
        addToCart(product.id, 1);
        modalInstance.hide();
      };
    }

    modalInstance.show();
  }
}

function closeQuickView() {
  const modalEl = document.getElementById("quickViewModal");
  if (modalEl && typeof bootstrap !== "undefined" && bootstrap.Modal) {
    const modalInstance = bootstrap.Modal.getInstance(modalEl) || bootstrap.Modal.getOrCreateInstance(modalEl);
    if (modalInstance) {
      modalInstance.hide();
    }
  }
}

function initQuickViewModal() {
  const modalEl = document.getElementById("quickViewModal");
  if (!modalEl) return;

  const closeBtns = modalEl.querySelectorAll(".btn-close, [data-bs-dismiss='modal']");
  closeBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (e) e.preventDefault();
      closeQuickView();
    });
  });
}

/* --------------------------------------------------------------------------
   12. Consultation Modal Form
   -------------------------------------------------------------------------- */
function initConsultationForm() {
  const form = document.getElementById("consultationForm");
  const modalEl = document.getElementById("consultationModal");

  if (form && modalEl) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const modalInstance = bootstrap.Modal.getInstance(modalEl);
      if (modalInstance) {
        modalInstance.hide();
      }
      showToast("Consultation booked! Our interior concierge team will contact you.");
      form.reset();
    });
  }
}

/* --------------------------------------------------------------------------
   13. Newsletter Form Validation
   -------------------------------------------------------------------------- */
function initNewsletter() {
  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("newsletterEmail");
  const messageEl = document.getElementById("newsletterMessage");

  if (form && emailInput) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = emailInput.value.trim();

      if (email === "") {
        if (messageEl) {
          messageEl.textContent = "Please enter your email address.";
          messageEl.className = "small text-danger mt-3 mb-0";
        }
        showToast("Please enter your email.");
      } else {
        if (messageEl) {
          messageEl.textContent = "Thank you for joining the Furnivo Guild!";
          messageEl.className = "small text-success mt-3 mb-0";
        }
        showToast("Welcome! Use code WELCOME10 for 10% off your first piece.");
        form.reset();
      }
    });
  }
}

/* --------------------------------------------------------------------------
   14. Back To Top Floating Action Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}

/* --------------------------------------------------------------------------
   15. Shop Page Dynamic Filtering, Sorting & View Toggle
   -------------------------------------------------------------------------- */
function initShopPage() {
  const gridContainer = document.getElementById("shopProductsGrid") || document.getElementById("products-container");
  const shopSearchInput = document.getElementById("shopSearchInput") || document.querySelector(".nav-search-input");
  const shopSortSelect = document.getElementById("shopSortSelect");
  const viewGridBtn = document.getElementById("viewGridBtn");
  const viewListBtn = document.getElementById("viewListBtn");
  const categoryPills = document.querySelectorAll(".shop-cat-pill, .filter-chip, .filter-btn");
  const categoryCheckboxes = document.querySelectorAll(".shop-cat-checkbox");
  const priceFilterBtns = document.querySelectorAll(".shop-price-btn");
  const priceSlider = document.getElementById("shopPriceRange");
  const priceSliderVal = document.getElementById("shopPriceVal");
  const activeChipsContainer = document.getElementById("activeFilterChips");
  const countDisplay = document.getElementById("shopProductCount");
  const resetBtn = document.getElementById("shopResetBtn");
  const clearAllBtn = document.getElementById("shopClearAllBtn");

  let currentCategory = "all";
  let currentSearch = "";
  let currentSort = "featured";
  let currentMaxPrice = 150000;
  let currentPriceRange = "all"; // 'all', 'under-30k', '30k-60k', '60k-100k', 'above-100k'

  // Read URL search param if present
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get("search");
  if (searchParam) {
    currentSearch = searchParam.toLowerCase().trim();
    if (shopSearchInput) shopSearchInput.value = searchParam;
  }

  function updateShopDisplay() {
    const productCards = document.querySelectorAll(".shop-product-card-col, .product-item");
    let visibleCount = 0;

    productCards.forEach(function (card) {
      const category = card.getAttribute("data-category") || "";
      
      // Determine card price
      let price = Number(card.getAttribute("data-price")) || 0;
      if (!price) {
        const priceText = card.querySelector(".product-current-price, .shop-current-price")?.textContent || "";
        const numOnly = priceText.replace(/[^0-9]/g, "");
        if (numOnly) price = Number(numOnly);
      }

      const title = card.querySelector(".product-title, .shop-card-title, .card-title")?.textContent.toLowerCase() || "";
      const subtitle = card.querySelector(".product-subtitle, .shop-card-subtitle, .text-muted")?.textContent.toLowerCase() || "";

      let matchesCategory = (currentCategory === "all" || category === currentCategory);
      let matchesSearch = (!currentSearch || title.includes(currentSearch) || subtitle.includes(currentSearch) || category.includes(currentSearch));
      
      let matchesPrice = (price <= currentMaxPrice || price === 0);
      if (currentPriceRange === "under-30k") matchesPrice = matchesPrice && (price < 30000);
      else if (currentPriceRange === "30k-60k") matchesPrice = matchesPrice && (price >= 30000 && price <= 60000);
      else if (currentPriceRange === "60k-100k") matchesPrice = matchesPrice && (price >= 60000 && price <= 100000);
      else if (currentPriceRange === "above-100k") matchesPrice = matchesPrice && (price > 100000);

      if (matchesCategory && matchesSearch && matchesPrice) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (countDisplay) {
      countDisplay.innerHTML = `Showing <strong class="text-dark fw-bold">${visibleCount}</strong> Handcrafted Pieces`;
    }

    // Sort visible cards
    if (gridContainer && productCards.length > 0) {
      const cardsArray = Array.from(productCards);
      cardsArray.sort(function (a, b) {
        const priceA = Number(a.getAttribute("data-price")) || 0;
        const priceB = Number(b.getAttribute("data-price")) || 0;
        const ratingA = Number(a.getAttribute("data-rating")) || 4.8;
        const ratingB = Number(b.getAttribute("data-rating")) || 4.8;
        const titleA = a.querySelector(".product-title, .shop-card-title")?.textContent || "";
        const titleB = b.querySelector(".product-title, .shop-card-title")?.textContent || "";

        if (currentSort === "price-low") return priceA - priceB;
        if (currentSort === "price-high") return priceB - priceA;
        if (currentSort === "rating") return ratingB - ratingA;
        if (currentSort === "alpha-asc") return titleA.localeCompare(titleB);
        if (currentSort === "alpha-desc") return titleB.localeCompare(titleA);
        return 0;
      });

      cardsArray.forEach(function (card) {
        gridContainer.appendChild(card);
      });
    }
  }

  // Price Slider Listener
  if (priceSlider) {
    priceSlider.addEventListener("input", function () {
      currentMaxPrice = Number(this.value);
      if (priceSliderVal) {
        priceSliderVal.textContent = formatPrice(currentMaxPrice);
      }
      updateShopDisplay();
    });
  }

  // Category Filter Buttons / Chips
  categoryPills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      categoryPills.forEach(p => p.classList.remove("active", "bg-primary", "text-white"));
      this.classList.add("active");
      currentCategory = this.getAttribute("data-category") || "all";
      updateShopDisplay();
    });
  });

  // Sort dropdown
  if (shopSortSelect) {
    shopSortSelect.addEventListener("change", function () {
      const val = this.value;
      if (val.includes("low-to-high") || val.includes("Low to High")) currentSort = "price-low";
      else if (val.includes("high-to-low") || val.includes("High to Low")) currentSort = "price-high";
      else if (val.includes("rating") || val.includes("Rating")) currentSort = "rating";
      else if (val.includes("a-z") || val.includes("A-Z")) currentSort = "alpha-asc";
      else if (val.includes("z-a") || val.includes("Z-A")) currentSort = "alpha-desc";
      else currentSort = "featured";

      updateShopDisplay();
    });
  }

  // Initial update
  updateShopDisplay();
}

/* --------------------------------------------------------------------------
   32. Authentication & User Profile Management (Login, Register, Dashboard)
   -------------------------------------------------------------------------- */
function getLoggedInUser() {
  try {
    const user = localStorage.getItem("furnivo_user");
    return user ? JSON.parse(user) : null;
  } catch (e) {
    return null;
  }
}

function setLoggedInUser(userObj) {
  localStorage.setItem("furnivo_user", JSON.stringify(userObj));
  syncNavbarProfile();
}

function logoutUser() {
  localStorage.removeItem("furnivo_user");
  syncNavbarProfile();
  showToast("You have been signed out of your account.");
  if (document.getElementById("authFormsWrapper")) {
    renderAuthPageState();
  } else {
    window.location.href = "login.html";
  }
}

function handleSignOut() {
  logoutUser();
}

function syncNavbarProfile() {
  const user = getLoggedInUser();
  const nameEls = document.querySelectorAll("#dropdownUserName");
  const roleEls = document.querySelectorAll("#dropdownUserRole");
  const authButtonsEls = document.querySelectorAll("#dropdownAuthButtons");

  if (user) {
    nameEls.forEach(el => el.textContent = user.name || "Member");
    roleEls.forEach(el => el.textContent = "✦ VIP Atelier Member");
    authButtonsEls.forEach(el => {
      el.innerHTML = `
        <div class="d-flex gap-2">
          <a href="login.html" class="btn btn-sm btn-dark-custom w-50 py-1 text-center">My Profile</a>
          <button class="btn btn-sm btn-outline-custom w-50 py-1" onclick="logoutUser()">Sign Out</button>
        </div>
      `;
    });
  } else {
    nameEls.forEach(el => el.textContent = "Welcome to Furnivo");
    roleEls.forEach(el => el.textContent = "Bespoke Furniture Concierge");
    authButtonsEls.forEach(el => {
      el.innerHTML = `
        <div class="d-flex gap-2">
          <a href="login.html?tab=signin" class="btn btn-sm btn-dark-custom w-50 py-1 text-center">Sign In</a>
          <a href="login.html?tab=register" class="btn btn-sm btn-outline-custom w-50 py-1 text-center">Register</a>
        </div>
      `;
    });
  }
}

function togglePasswordVisibility(inputId, buttonEl) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const icon = buttonEl.querySelector("i");
  if (input.type === "password") {
    input.type = "text";
    if (icon) icon.className = "bi bi-eye-slash";
  } else {
    input.type = "password";
    if (icon) icon.className = "bi bi-eye";
  }
}

function switchAuthTab(tabName) {
  const signInBtn = document.getElementById("tabBtnSignIn");
  const regBtn = document.getElementById("tabBtnRegister");
  const signInContent = document.getElementById("signInTabContent");
  const regContent = document.getElementById("registerTabContent");
  const title = document.getElementById("authPageTitle");
  const subtitle = document.getElementById("authPageSubtitle");

  if (tabName === "register") {
    if (signInBtn) signInBtn.classList.remove("active");
    if (regBtn) regBtn.classList.add("active");
    if (signInContent) signInContent.style.display = "none";
    if (regContent) regContent.style.display = "block";
    if (title) title.textContent = "Create Account";
    if (subtitle) subtitle.textContent = "Join the Furnivo Atelier Club for bespoke member benefits and priority consultation.";
  } else {
    if (regBtn) regBtn.classList.remove("active");
    if (signInBtn) signInBtn.classList.add("active");
    if (regContent) regContent.style.display = "none";
    if (signInContent) signInContent.style.display = "block";
    if (title) title.textContent = "Member Access";
    if (subtitle) subtitle.textContent = "Sign in to manage your bespoke orders, curated wishlists, and VIP concierge privileges.";
  }
}

function handleSocialAuth(provider) {
  const mockUser = {
    name: provider === "Google" ? "Rahul Sharma" : "Rahul S.",
    email: `rahul.${provider.toLowerCase()}@example.com`,
    joinedDate: "October 2024",
    tier: "Gold Connoisseur"
  };
  setLoggedInUser(mockUser);
  showToast(`Signed in with ${provider}! Welcome back, ${mockUser.name}.`);
  renderAuthPageState();
}

function handleSignInSubmit(event) {
  event.preventDefault();
  const email = document.getElementById("signInEmail")?.value || "Member";
  const name = email.split("@")[0].replace(".", " ").replace(/\b\w/g, l => l.toUpperCase());
  
  const user = {
    name: name || "Rahul Sharma",
    email: email,
    joinedDate: "October 2024",
    tier: "Gold Connoisseur"
  };
  setLoggedInUser(user);
  showToast(`Welcome back, ${user.name}!`);
  renderAuthPageState();
}

function handleRegisterSubmit(event) {
  event.preventDefault();
  const fullName = document.getElementById("regFullName")?.value || "New Member";
  const email = document.getElementById("regEmail")?.value || "member@furnivo.com";
  const pass = document.getElementById("regPassword")?.value || "";
  const confirmPass = document.getElementById("regConfirmPassword")?.value || "";

  if (pass !== confirmPass) {
    showToast("Passwords do not match. Please check and try again.", "error");
    return;
  }

  const user = {
    name: fullName,
    email: email,
    joinedDate: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    tier: "VIP Atelier Member"
  };
  setLoggedInUser(user);
  showToast(`Account created successfully! Welcome to Furnivo, ${user.name}.`);
  renderAuthPageState();
}

function renderAuthPageState() {
  const user = getLoggedInUser();
  const formsWrapper = document.getElementById("authFormsWrapper");
  const dashboardWrapper = document.getElementById("profileDashboardWrapper");
  const pageTitle = document.getElementById("authPageTitle");
  const pageSubtitle = document.getElementById("authPageSubtitle");

  if (user) {
    if (formsWrapper) formsWrapper.style.display = "none";
    if (dashboardWrapper) dashboardWrapper.style.display = "block";
    if (pageTitle) pageTitle.textContent = "Member Profile";
    if (pageSubtitle) pageSubtitle.textContent = `Welcome to your personal Furnivo sanctuary, ${user.name}.`;

    // Populate dashboard details
    const dashName = document.getElementById("dashboardUserName");
    const dashEmail = document.getElementById("dashboardUserEmail");
    const dashJoin = document.getElementById("dashboardJoinDate");
    const editName = document.getElementById("editName");
    const editEmail = document.getElementById("editEmail");
    const dashWishlist = document.getElementById("dashWishlistCount");
    const dashCart = document.getElementById("dashCartCount");

    if (dashName) dashName.textContent = user.name;
    if (dashEmail) dashEmail.textContent = user.email;
    if (dashJoin) dashJoin.textContent = user.joinedDate || "October 2024";
    if (editName) editName.value = user.name;
    if (editEmail) editEmail.value = user.email;

    if (dashWishlist) dashWishlist.textContent = getWishlist().length;
    if (dashCart) dashCart.textContent = getCartTotalQuantity();
  } else {
    if (formsWrapper) formsWrapper.style.display = "block";
    if (dashboardWrapper) dashboardWrapper.style.display = "none";
    
    // Check URL query param for tab
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get("tab");
    if (tabParam === "register") {
      switchAuthTab("register");
    } else {
      switchAuthTab("signin");
    }
  }
}

function initAuthPage() {
  renderAuthPageState();
}