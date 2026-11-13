
"use strict";

// Demo images are illustrative. Replace with real Catanduanes photos.
const photos = {
  beach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop",
  sea: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=700&auto=format&fit=crop",
  coast: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=700&auto=format&fit=crop",
  falls: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=700&auto=format&fit=crop",
  mountain: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=700&auto=format&fit=crop",
  nature: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=700&auto=format&fit=crop",
  hotel: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&auto=format&fit=crop",
  resort: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&auto=format&fit=crop",
  room: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=700&auto=format&fit=crop",
  restaurant: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop",
  food: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&auto=format&fit=crop",
  shop: "https://images.unsplash.com/photo-1473181488821-2d23949a045a?w=700&auto=format&fit=crop",
  surf: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop",
  kayak: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=700&auto=format&fit=crop",
  road: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=700&auto=format&fit=crop",
  boat: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700&auto=format&fit=crop"
};

const destinations = [
  {
    id: 1, name: "Puraran Beach", location: "Baras",
    category: "beach", image: photos.beach,
    description: "A well-known surfing destination in Catanduanes, famous for its coastal scenery and waves."
  },
  {
    id: 2, name: "Binurong Point", location: "Baras",
    category: "viewpoint", image: photos.mountain,
    description: "A scenic coastal viewpoint featuring rolling green hills and ocean views."
  },
  {
    id: 3, name: "Balacay Point", location: "Baras",
    category: "viewpoint", image: photos.coast,
    description: "A beautiful viewpoint overlooking the coastline and surrounding hills."
  },
  {
    id: 4, name: "Maribina Falls", location: "Bato",
    category: "waterfall", image: photos.falls,
    description: "A natural waterfall destination surrounded by lush vegetation."
  },
  {
    id: 5, name: "Bato Church", location: "Bato",
    category: "culture", image: photos.nature,
    description: "A historic church reflecting the cultural and religious heritage of Catanduanes."
  },
  {
    id: 6, name: "Twin Rock Beach", location: "Virac",
    category: "beach", image: photos.sea,
    description: "A coastal destination known for its beach scenery and rock formations."
  },
  {
    id: 7, name: "Mamangal Beach", location: "Virac",
    category: "beach", image: photos.beach,
    description: "A relaxing beach destination suitable for coastal sightseeing."
  },
  {
    id: 8, name: "Talisoy Beach", location: "Virac",
    category: "beach", image: photos.coast,
    description: "A scenic beach with coastal views and distinctive rock formations."
  },
  {
    id: 9, name: "Cagnipa Rolling Hills", location: "Pandan",
    category: "viewpoint", image: photos.mountain,
    description: "Rolling hills and coastal scenery in northern Catanduanes."
  },
  {
    id: 10, name: "Caramoran Coast", location: "Caramoran",
    category: "beach", image: photos.sea,
    description: "Explore the beautiful coastal landscapes of Caramoran."
  }
];

// Demonstration listings, not verified establishments.
const stays = [
  {id:101,name:"Beachfront Resort Listing",location:"Baras",image:photos.resort,type:"Resort",description:"Sample beachfront accommodation listing."},
  {id:102,name:"Island Hotel Listing",location:"Virac",image:photos.hotel,type:"Hotel",description:"Sample hotel listing for travelers."},
  {id:103,name:"Cozy Homestay Listing",location:"San Andres",image:photos.room,type:"Homestay",description:"Sample local homestay listing."},
  {id:104,name:"Nature Retreat Listing",location:"Pandan",image:photos.resort,type:"Resort",description:"Sample nature-focused accommodation listing."}
];

const activities = [
  {id:201,name:"Surfing in Puraran",location:"Baras",image:photos.surf,type:"Surfing",description:"Discover surfing opportunities at Puraran Beach."},
  {id:202,name:"Coastal Sightseeing",location:"Baras",image:photos.coast,type:"Sightseeing",description:"Explore beautiful coastal landscapes."},
  {id:203,name:"Waterfall Adventure",location:"Bato",image:photos.falls,type:"Nature",description:"Discover the island's natural waterfalls."},
  {id:204,name:"Island Photography",location:"Virac",image:photos.beach,type:"Photography",description:"Capture scenic landscapes and memorable island moments."}
];

const transports = [
  {id:301,name:"Airport Transfer Information",location:"Virac",image:photos.road,type:"Airport",description:"Find local transport providers for arrivals at Virac Airport."},
  {id:302,name:"Tricycle Transportation",location:"Virac",image:photos.road,type:"Local Ride",description:"Learn about local tricycle transport and routes."},
  {id:303,name:"Van and Car Services",location:"Catanduanes",image:photos.road,type:"Private Transport",description:"Find local operators for private transportation."},
  {id:304,name:"Ferry Travel Information",location:"San Andres",image:photos.boat,type:"Sea Travel",description:"Check ferry connections and confirm schedules with operators."}
];

const sampleBusinesses = [
  {id:401,name:"Sample Local Restaurant",location:"Virac",category:"restaurant",image:photos.restaurant,status:"Open",description:"Demonstration restaurant listing. Replace with a verified local business."},
  {id:402,name:"Sample Beach Resort",location:"Baras",category:"accommodation",image:photos.resort,status:"Open",description:"Demonstration resort listing. Replace with a verified establishment."},
  {id:403,name:"Sample Souvenir Shop",location:"Virac",category:"shop",image:photos.shop,status:"Open",description:"Demonstration local products and souvenir shop."},
  {id:404,name:"Sample Transport Service",location:"San Andres",category:"transport",image:photos.road,status:"Closed",description:"Demonstration transportation provider listing."}
];

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;",
    '"':"&quot;", "'":"&#39;"
  })[char]);
}

function getSaved(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function saveData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    showToast("Browser storage is unavailable.");
    return false;
  }
}

function safeImage(url, fallback = photos.shop) {
  try {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol)
      ? parsed.href : fallback;
  } catch {
    return fallback;
  }
}

function mapLink(name, location) {
  return "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(`${name}, ${location}, Catanduanes, Philippines`);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 3000);
}

function renderDestinations(items = destinations) {
  const favorites = getSaved("catFavorites");
  $("#destinationGrid").innerHTML = items.map(item => `
    <article class="destination-card" data-detail-type="destination" data-detail-id="${item.id}" tabindex="0" role="button" aria-label="View ${escapeHTML(item.name)}">
      <img src="${safeImage(item.image)}" alt="${escapeHTML(item.name)}" loading="lazy">
      <button class="fav-btn ${favorites.includes(item.id) ? "saved" : ""}" data-favorite="${item.id}" aria-label="Toggle favorite">${favorites.includes(item.id) ? "♥" : "♡"}</button>
      <div class="destination-content">
        <span class="tag">${escapeHTML(item.category.toUpperCase())}</span>
        <h3>${escapeHTML(item.name)}</h3>
        <p>📍 ${escapeHTML(item.location)}, Catanduanes</p>
      </div>
    </article>
  `).join("");
  $("#noResults").classList.toggle("hidden", items.length > 0);
}

function listingCard(item, type) {
  const label = item.type || item.category || "Listing";
  const isBusiness = type === "business";
  const demo = item.id < 500;
  return `
    <article class="listing-card">
      <div class="listing-image">
        <img src="${safeImage(item.image)}" alt="${escapeHTML(item.name)}" loading="lazy">
        <span class="tag">${escapeHTML(label.toUpperCase())}${demo ? " · DEMO" : ""}</span>
      </div>
      <div class="listing-body">
        <h3>${escapeHTML(item.name)}</h3>
        <p>📍 ${escapeHTML(item.location)}, Catanduanes</p>
        <p>${escapeHTML(item.description).slice(0,100)}</p>
        <div class="listing-bottom">
          ${isBusiness
            ? `<span class="status ${item.status === "Closed" ? "closed" : ""}">● ${escapeHTML(item.status || "Contact for hours")}</span>`
            : `<span class="status">Explore more</span>`}
          <button data-detail-type="${type}" data-detail-id="${item.id}">View Details ↗</button>
        </div>
      </div>
    </article>
  `;
}

function renderListings() {
  $("#stayGrid").innerHTML = stays.map(i => listingCard(i,"stay")).join("");
  $("#activityGrid").innerHTML = activities.map(i => listingCard(i,"activity")).join("");
  $("#transportGrid").innerHTML = transports.map(i => listingCard(i,"transport")).join("");
  renderBusinesses();
}

function allBusinesses() {
  return [...getSaved("catBusinesses"), ...sampleBusinesses];
}

function renderBusinesses(filter = "all") {
  const items = allBusinesses().filter(item =>
    filter === "all" || item.category === filter
  );
  $("#businessGrid").innerHTML = items.length
    ? items.map(i => listingCard(i,"business")).join("")
    : `<p class="empty-state">No businesses found in this category.</p>`;
}

function showModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close")?.focus();
}

function closeModals() {
  $$(".modal-backdrop").forEach(modal => modal.classList.add("hidden"));
  document.body.style.overflow = "";
}

function showDetails(type, id) {
  const collections = {
    destination: destinations,
    stay: stays,
    activity: activities,
    transport: transports,
    business: allBusinesses()
  };
  const item = collections[type]?.find(x => String(x.id) === String(id));
  if (!item) return;

  const mapName = type === "destination" ? item.name : item.location;
  const map = mapLink(mapName, item.location);
  const phone = item.phone ? String(item.phone).replace(/[^\d+]/g, "") : "";
  const phoneAction = phone
    ? `<a href="tel:${escapeHTML(phone)}" class="secondary">📞 Contact Business</a>`
    : "";

  $("#detailContent").innerHTML = `
    <img class="modal-image" src="${safeImage(item.image)}" alt="${escapeHTML(item.name)}">
    <span class="eyebrow">${escapeHTML((item.category || item.type || type).toUpperCase())}</span>
    <h2 id="detailTitle">${escapeHTML(item.name)}</h2>
    <div class="modal-details">
      <p>📍 <strong>${escapeHTML(item.location)}, Catanduanes</strong></p>
      <p>${escapeHTML(item.description)}</p>
      ${item.status ? `<p>Business status: ${escapeHTML(item.status)} (owner supplied or demo)</p>` : ""}
      ${type === "destination" ? `<p>Check local transportation, fees and access conditions before traveling.</p>` : ""}
    </div>
    <div class="detail-actions">
      <a href="${map}" target="_blank" rel="noopener noreferrer">📍 View on Google Maps</a>
      ${phoneAction}
    </div>
  `;
  showModal("detailModal");
}

function filterDestinations(category, location) {
  const result = destinations.filter(item =>
    (category === "all" || item.category === category) &&
    (location === "all" || item.location === location)
  );
  renderDestinations(result);
}

function renderReviews() {
  const reviews = getSaved("catReviews");
  $("#reviewGrid").innerHTML = reviews.map(review => `
    <article class="review-card">
      <div class="stars">${"★".repeat(Math.max(1,Math.min(5,Number(review.rating))))}</div>
      <p>${escapeHTML(review.message)}</p>
      <strong>${escapeHTML(review.name)}</strong>
    </article>
  `).join("");
}

// Search form
$("#searchForm").addEventListener("submit", event => {
  event.preventDefault();
  const category = $("#category").value;
  const location = $("#location").value;
  filterDestinations(category, location);

  $$("#filterPills .pill").forEach(btn =>
    btn.classList.toggle("active", btn.dataset.filter === category)
  );

  document.getElementById("destinations").scrollIntoView({behavior:"smooth"});

  const date = $("#travelDate").value;
  const travelers = $("#travelers").value;
  showToast(`Showing destinations for ${travelers} traveler(s)${date ? " on " + date : ""}. Date and traveler availability are not checked.`);
});

// Category shortcuts
$$("[data-pick-category]").forEach(link => {
  link.addEventListener("click", () => {
    const category = link.dataset.pickCategory;
    $("#category").value = category;
    $("#location").value = "all";
    filterDestinations(category,"all");
    $$("#filterPills .pill").forEach(btn =>
      btn.classList.toggle("active", btn.dataset.filter === category)
    );
  });
});

// Destination category filters
$$("#filterPills .pill").forEach(btn => {
  btn.addEventListener("click", () => {
    $$("#filterPills .pill").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    $("#category").value = btn.dataset.filter;
    filterDestinations(btn.dataset.filter, $("#location").value);
  });
});

// Business category filters
$$("[data-business-filter]").forEach(btn => {
  btn.addEventListener("click", () => {
    $$("[data-business-filter]").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    renderBusinesses(btn.dataset.businessFilter);
  });
});

// Delegated card buttons and favorite actions
document.addEventListener("click", event => {
  const favorite = event.target.closest("[data-favorite]");
  if (favorite) {
    event.stopPropagation();
    const id = Number(favorite.dataset.favorite);
    const favorites = getSaved("catFavorites");
    const updated = favorites.includes(id)
      ? favorites.filter(x => x !== id)
      : [...favorites,id];
    if (saveData("catFavorites",updated)) {
      renderDestinations(
        destinations.filter(item =>
          $("#category").value === "all" || item.category === $("#category").value
        ).filter(item =>
          $("#location").value === "all" || item.location === $("#location").value
        )
      );
      showToast(updated.includes(id) ? "Added to favorites" : "Removed from favorites");
    }
    return;
  }

  const detail = event.target.closest("[data-detail-type]");
  if (detail) {
    showDetails(detail.dataset.detailType, detail.dataset.detailId);
  }

  if (event.target.closest("[data-open-business]")) {
    showModal("businessModal");
  }
  if (event.target.closest("[data-close-modal]")) {
    closeModals();
  }
  if (event.target.classList.contains("modal-backdrop")) {
    closeModals();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModals();
  if ((event.key === "Enter" || event.key === " ") &&
      event.target.classList.contains("destination-card")) {
    event.preventDefault();
    showDetails("destination",event.target.dataset.detailId);
  }
});

// Business registration: local browser prototype
$("#businessForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form));

  const phone = data.phone.trim();
  if (!/^\+?[\d\s()-]{7,20}$/.test(phone)) {
    showToast("Please enter a valid contact number.");
    return;
  }

  const business = {
    id: Date.now(),
    name: data.name.trim(),
    category: data.category,
    location: data.location,
    phone,
    description: data.description.trim(),
    image: safeImage(data.image,photos.shop),
    status: data.status
  };

  const items = getSaved("catBusinesses");
  items.unshift(business);

  if (saveData("catBusinesses",items)) {
    renderBusinesses();
    form.reset();
    closeModals();
    showToast("Business added to this browser's demo listings!");
    document.getElementById("businesses").scrollIntoView({behavior:"smooth"});
  }
});

// Reviews
$("#reviewButton").addEventListener("click", () => showModal("reviewModal"));

$("#reviewForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form));
  const reviews = getSaved("catReviews");
  reviews.unshift({
    name: data.name.trim(),
    rating: Number(data.rating),
    message: data.message.trim()
  });
  if (saveData("catReviews",reviews)) {
    renderReviews();
    form.reset();
    closeModals();
    showToast("Your review was saved in this browser.");
  }
});

// Mobile navigation
$("#menuToggle").addEventListener("click", () => {
  const nav = $("#navLinks");
  nav.classList.toggle("open");
  $("#menuToggle").setAttribute("aria-expanded",nav.classList.contains("open"));
});

$$("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    $("#navLinks").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded","false");
  });
});

// Prevent selecting dates in the past
const now = new Date();
const localToday = new Date(now.getTime() - now.getTimezoneOffset()*60000)
  .toISOString().split("T")[0];
$("#travelDate").min = localToday;

// Initialize website
$("#year").textContent = new Date().getFullYear();
renderDestinations();
renderListings();
renderReviews();
