
/* =====================================
   ORIGINAL IMAGE LIBRARY
===================================== */
const img={
 beach:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700",
 sea:"https://images.unsplash.com/photo-1519046904884-53103b34b206?w=700",
 coast:"https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=700",
 falls:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=700",
 hills:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=700",
 nature:"https://images.unsplash.com/photo-1500534623283-312aade485b7?w=700",
 hotel:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700",
 resort:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700",
 room:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=700",
 villa:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700",
 pool:"https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=700",
 restaurant:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700",
 shop:"https://images.unsplash.com/photo-1473181488821-2d23949a045a?w=700",
 surf:"https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700",
 road:"https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=700",
 boat:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700"
};

/* =====================================
   ORIGINAL DESTINATIONS
===================================== */
const destinations=[
 {id:1,name:"Puraran Beach",location:"Baras",category:"beach",lat:13.689,lng:124.376,image:img.beach,description:"A popular surfing destination with beautiful coastal scenery.",highlights:["Surfing","Beach","Photography"]},
 {id:2,name:"Binurong Point",location:"Baras",category:"viewpoint",lat:13.670,lng:124.386,image:img.hills,description:"Rolling green hills overlooking the Pacific Ocean.",highlights:["Hiking","Ocean Views","Photography"]},
 {id:3,name:"Balacay Point",location:"Baras",category:"viewpoint",lat:13.678,lng:124.377,image:img.coast,description:"A scenic coastal viewpoint with ocean views.",highlights:["Viewpoint","Sightseeing"]},
 {id:4,name:"Maribina Falls",location:"Bato",category:"waterfall",lat:13.602,lng:124.318,image:img.falls,description:"A natural waterfall surrounded by lush vegetation.",highlights:["Waterfall","Nature"]},
 {id:5,name:"Bato Church",location:"Bato",category:"culture",lat:13.610,lng:124.299,image:img.nature,description:"A historic church reflecting the island's cultural heritage.",highlights:["History","Culture"]},
 {id:6,name:"Twin Rock Beach",location:"Virac",category:"beach",lat:13.570,lng:124.214,image:img.sea,description:"A coastal destination known for its rock formations.",highlights:["Beach","Photography"]},
 {id:7,name:"Mamangal Beach",location:"Virac",category:"beach",lat:13.586,lng:124.181,image:img.beach,description:"A relaxing beach with beautiful sea views.",highlights:["Beach","Relaxation"]},
 {id:8,name:"Talisoy Beach",location:"Virac",category:"beach",lat:13.580,lng:124.235,image:img.coast,description:"A scenic beach with distinctive coastal rocks.",highlights:["Beach","Rock Formations"]},
 {id:9,name:"Cagnipa Rolling Hills",location:"Pandan",category:"viewpoint",lat:14.020,lng:124.170,image:img.hills,description:"Beautiful rolling hills and coastal scenery.",highlights:["Hills","Nature"]},
 {id:10,name:"Caramoran Coast",location:"Caramoran",category:"beach",lat:13.850,lng:124.100,image:img.sea,description:"Explore coastal scenery around Caramoran.",highlights:["Coast","Sightseeing"]},
 {id:11,name:"Pandan Coast",location:"Pandan",category:"beach",lat:14.040,lng:124.170,image:img.beach,description:"Explore the coastline of Pandan.",highlights:["Coast","Photography"]},
 {id:12,name:"Bagamanoc Coast",location:"Bagamanoc",category:"beach",lat:13.940,lng:124.290,image:img.coast,description:"Discover coastal landscapes in Bagamanoc.",highlights:["Coast","Nature"]}
];

/* =====================================
   ORIGINAL SAMPLE STAYS
===================================== */
const stays=[
 {id:101,name:"Puraran Beach Resort — Sample",location:"Baras",type:"Resort",price:2500,rating:4.7,lat:13.665,lng:124.365,amenities:["WiFi","Beach Access","Parking"],photos:[img.resort,img.pool,img.room]},
 {id:102,name:"Virac Island Hotel — Sample",location:"Virac",type:"Hotel",price:1800,rating:4.5,lat:13.584,lng:124.237,amenities:["WiFi","Parking"],photos:[img.hotel,img.room]},
 {id:103,name:"Catanduanes Beach Villa — Sample",location:"Virac",type:"Villa",price:4200,rating:4.8,lat:13.584,lng:124.237,amenities:["WiFi","Pool","Beach Access"],photos:[img.villa,img.pool]},
 {id:104,name:"Happy Island Homestay — Sample",location:"San Andres",type:"Homestay",price:1200,rating:4.6,lat:13.598,lng:124.100,amenities:["WiFi","Parking"],photos:[img.room,img.villa]},
 {id:105,name:"Coastal View Resort — Sample",location:"Pandan",type:"Resort",price:3200,rating:4.7,lat:14.045,lng:124.170,amenities:["Pool","Parking"],photos:[img.resort,img.pool]},
 {id:106,name:"Baras Surf Lodge — Sample",location:"Baras",type:"Beachfront",price:2100,rating:4.6,lat:13.665,lng:124.365,amenities:["WiFi","Beach Access"],photos:[img.beach,img.room]},
 {id:107,name:"Virac Garden Villa — Sample",location:"Virac",type:"Villa",price:4800,rating:4.9,lat:13.584,lng:124.237,amenities:["WiFi","Pool"],photos:[img.villa,img.pool]},
 {id:108,name:"Caramoran Nature Stay — Sample",location:"Caramoran",type:"Homestay",price:1400,rating:4.4,lat:13.850,lng:124.100,amenities:["Parking"],photos:[img.room,img.nature]},
 {id:109,name:"Pandan Seaside Stay — Sample",location:"Pandan",type:"Beachfront",price:2800,rating:4.7,lat:14.045,lng:124.170,amenities:["WiFi","Beach Access"],photos:[img.sea,img.resort]}
];

const activities=[
 {name:"Surfing at Puraran",location:"Baras",image:img.surf,description:"Discover surfing opportunities on the coast."},
 {name:"Waterfall Exploration",location:"Bato",image:img.falls,description:"Explore beautiful natural waterfalls."},
 {name:"Coastal Sightseeing",location:"Baras",image:img.hills,description:"Visit scenic viewpoints and coastal landscapes."}
];
const transport=[
 {name:"Airport Transfer Information",location:"Virac",image:img.road,description:"Find airport transportation options."},
 {name:"Tricycle Transportation",location:"Virac",image:img.road,description:"Explore local transportation services."},
 {name:"Ferry Travel Information",location:"San Andres",image:img.boat,description:"Check routes and schedules with ferry operators."}
];

/* ORIGINAL DEMO BUSINESS ITEMS ARE NOT PUBLIC LISTINGS.
   Public directory displays approved submissions only. */

const municipalities=["all","Baras","Virac","San Andres","Bagamanoc","Gigmoto","Pandan","Caramoran","Bato","San Miguel","Viga","Panganiban"];
const categories=["all","beach","waterfall","viewpoint","culture"];

const municipalityCoords={
 "Baras":[13.67,124.36],
 "Virac":[13.584,124.237],
 "San Andres":[13.598,124.10],
 "Bagamanoc":[13.94,124.29],
 "Gigmoto":[13.78,124.39],
 "Pandan":[14.04,124.17],
 "Caramoran":[13.85,124.10],
 "Bato":[13.61,124.30],
 "San Miguel":[13.65,124.28],
 "Viga":[13.87,124.31],
 "Panganiban":[13.90,124.30]
};

let destinationFiltered=[...destinations];
let stayFiltered=[...stays];
let businessFiltered=[];
let destinationPage=1;
let stayPage=1;
const pageSize=9;
const photoIndexes={};

let destinationMap=null;
let stayMap=null;
let businessMap=null;
let detailMap=null;
let destinationMarkers=null;
let stayMarkers=null;
let businessMarkers=null;
let pickerMap=null;
let pickerMarker=null;
let currentBusinessPhoto="";
let adminFilter="all";

/* =====================================
   UTILITIES
===================================== */
function esc(s){
 return String(s??"").replace(/[&<>"']/g,c=>({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
 }[c]));
}

function getStored(key){
 try{
  const v=JSON.parse(localStorage.getItem(key)||"[]");
  return Array.isArray(v)?v:[];
 }catch{return []}
}

function setStored(key,value){
 try{
  localStorage.setItem(key,JSON.stringify(value));
  return true;
 }catch{
  alert("Browser storage is full or unavailable. Try using smaller photos.");
  return false;
 }
}

function readObject(key){
 try{return JSON.parse(sessionStorage.getItem(key)||"null")}
 catch{return null}
}

function safeImage(url,fallback=img.shop){
 const value=String(url||"").trim();
 if(value.startsWith("data:image/jpeg;base64,")||
    value.startsWith("data:image/png;base64,")||
    value.startsWith("data:image/webp;base64,"))return value;
 try{
  const u=new URL(value);
  if(u.protocol==="https:"||u.protocol==="http:")return u.href;
 }catch{}
 return fallback;
}

function safeLink(url){
 try{
  const u=new URL(String(url));
  return ["https:","http:"].includes(u.protocol)?u.href:"";
 }catch{return ""}
}

function businessImage(b){
 return safeImage(b.image,img.shop);
}

function getSession(){
 return readObject("mcgSession");
}

function isAdmin(){
 return getSession()?.role==="admin";
}

function isTourist(){return getSession()?.role==="tourist";}

function isOwner(){
 return getSession()?.role==="owner";
}

function allBusinesses(){
 return getStored("mcgBusinesses");
}

function saveBusinesses(data){
 return setStored("mcgBusinesses",data);
}

function updateNav(){
 const user=getSession();
 document.getElementById("signinNavText").textContent=
  user?(user.role==="admin"?"Admin":user.role==="tourist"?"My Bookings":"Dashboard"):"Sign In";
 document.getElementById("partnerNavBtn").textContent=
  user?(user.role==="admin"?"Admin Panel ↗":user.role==="tourist"?"Explore Stays ↗":"My Business ↗"):"List Your Business ↗";
}

function showPage(page){
 const pages=[
  "home","destinations","stays","activities","transport",
  "businesses","about","partner","signin","dashboard","admin",
  "touristRegister","touristBookings","register"
 ];

 if(!pages.includes(page))page="home";

 if(page==="dashboard"&&!isOwner())page="signin";
 if(page==="admin"&&!isAdmin())page="signin";
 if(page==="touristBookings"&&!isTourist())page="signin";

 pages.forEach(p=>{
  document.getElementById(p+"Page").classList.toggle("hidden",p!==page);
 });

 document.body.classList.toggle("owner-portal-mode",page==="dashboard");
 document.querySelectorAll("[data-nav]").forEach(a=>{
  a.classList.toggle("active",a.dataset.nav===page);
 });

 document.getElementById("navLinks").classList.remove("open");
 document.getElementById("menuBtn").setAttribute("aria-expanded","false");
 document.getElementById("menuBtn").textContent="☰";
 history.replaceState(null,"","#"+page);
 window.scrollTo(0,0);

 if(page==="destinations"&&destinationMap){
  setTimeout(()=>destinationMap.invalidateSize(),100);
 }
 if(page==="stays"&&stayMap){
  setTimeout(()=>stayMap.invalidateSize(),100);
 }
 if(page==="businesses"){
  renderBusinesses();
  if(businessMap){
   setTimeout(()=>businessMap.invalidateSize(),100);
  }
 }
 if(page==="dashboard")renderOwnerDashboard();
 if(page==="admin")renderAdminDashboard();
 if(page==="touristBookings")renderTouristBookings();
 updateNav();
}

function openPartnerArea(){
 if(isAdmin())showPage("admin");
 else if(isOwner())showPage("dashboard");
 else if(isTourist())showPage("stays");
 else showPage("register");
}

function openSignInArea(){
 if(isAdmin())showPage("admin");
 else if(isOwner())showPage("dashboard");
 else if(isTourist())showPage("touristBookings");
 else showPage("signin");
}

/* =====================================
   ORIGINAL EMBEDDED MAP ENGINE
===================================== */
function createMap(id,zoom=10){
 const map=L.map(id,{
  scrollWheelZoom:false,
  zoomControl:true
 }).setView([13.78,124.25],zoom);

 L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
   attribution:'&copy; OpenStreetMap contributors',
   maxZoom:19
  }
 ).addTo(map);

 return map;
}

function photoMarker(item,isStay=false,label=null){
 const photo=isStay?item.photos[0]:item.image;
 const text=label||item.name;

 return L.divIcon({
  className:"",
  html:`
   <div class="photo-pin ${isStay?"stay":""}">
    <div class="photo-pin-label">${esc(text)}</div>
    <div class="photo-pin-image">
     <img src="${esc(safeImage(photo,img.beach))}" alt="">
    </div>
    <div class="photo-pin-tip"></div>
    <div class="photo-pin-dot"></div>
   </div>
  `,
  iconSize:[66,83],
  iconAnchor:[32,77],
  popupAnchor:[0,-80]
 });
}

function businessPhotoMarker(b){
 return L.divIcon({
  className:"",
  html:`
   <div class="photo-pin business">
    <div class="photo-pin-label">${esc(b.name)}</div>
    <div class="photo-pin-image">
     <img src="${esc(businessImage(b))}" alt="">
    </div>
    <div class="photo-pin-tip"></div>
    <div class="photo-pin-dot"></div>
   </div>
  `,
  iconSize:[66,83],
  iconAnchor:[32,77],
  popupAnchor:[0,-80]
 });
}

function fitMap(map,points){
 if(!points.length){
  map.setView([13.78,124.25],10);
 }else if(points.length===1){
  map.setView(points[0],12);
 }else{
  map.fitBounds(points,{padding:[65,65],maxZoom:12});
 }
}

function destinationPopup(d){
 return `
  <img class="map-popup-image" src="${d.image}" alt="${esc(d.name)}">
  <div class="map-popup-body">
   <h3>${esc(d.name)}</h3>
   <p class="location">📍 ${esc(d.location)}, Catanduanes</p>
   <p>${esc(d.description)}</p>
   <div class="map-popup-actions">
    <button onclick="openDestination(${d.id})">View Full Details</button>
    <button onclick="focusLocation('destination',${d.id})">Focus Pin</button>
   </div>
  </div>
 `;
}

function stayPopup(items,location){
 return `
  <img class="map-popup-image" src="${items[0].photos[0]}" alt="Sample stays">
  <div class="map-popup-body">
   <h3>Sample Stays in ${esc(location)}</h3>
   <p class="location">📍 ${esc(location)}, Catanduanes</p>
   <p>Example accommodation listings for this municipality.</p>
   <div class="map-popup-scroll">
    ${items.map(s=>`
     <div class="map-popup-item">
      <strong>${esc(s.name)}</strong>
      <small>₱${s.price.toLocaleString()} / night • Demo price</small>
      <button onclick="openStay(${s.id})">View Full Details</button>
     </div>
    `).join("")}
   </div>
  </div>
 `;
}

function updateDestinationMap(){
 if(!destinationMap||!destinationMarkers)return;
 destinationMarkers.clearLayers();

 const points=[];

 destinationFiltered.forEach(d=>{
  const point=[d.lat,d.lng];
  L.marker(point,{
   icon:photoMarker(d),
   title:d.name
  })
  .bindPopup(destinationPopup(d),{
   minWidth:265,
   maxWidth:265
  })
  .addTo(destinationMarkers);

  points.push(point);
 });

 fitMap(destinationMap,points);
 document.getElementById("destinationMapCount").textContent=
  destinationFiltered.length+" PLACES";
}

function updateStayMap(){
 if(!stayMap||!stayMarkers)return;
 stayMarkers.clearLayers();

 const groups={};

 stayFiltered.forEach(s=>{
  if(!groups[s.location])groups[s.location]=[];
  groups[s.location].push(s);
 });

 const points=[];

 Object.entries(groups).forEach(([location,items])=>{
  const first=items[0];
  const point=[first.lat,first.lng];

  L.marker(point,{
   icon:photoMarker(first,true,items.length+" stays"),
   title:"Sample stays in "+location
  })
  .bindPopup(stayPopup(items,location),{
   minWidth:265,
   maxWidth:265
  })
  .addTo(stayMarkers);

  points.push(point);
 });

 fitMap(stayMap,points);
 document.getElementById("stayMapCount").textContent=
  stayFiltered.length+" SAMPLE STAYS";
}

function businessPopup(b){
 return `
  <img class="map-popup-image" src="${esc(businessImage(b))}" alt="${esc(b.name)}">
  <div class="map-popup-body">
   <h3>${esc(b.name)}</h3>
   <p class="location">📍 ${esc(b.municipality)}, Catanduanes</p>
   <p>${esc(b.category)}</p>
   <div class="map-popup-actions">
    <button onclick="openBusiness('${esc(b.id)}')">View Business</button>
    <button onclick="focusBusiness('${esc(b.id)}')">Focus Pin</button>
   </div>
  </div>
 `;
}

function updateBusinessMap(){
 if(!businessMap||!businessMarkers)return;

 businessMarkers.clearLayers();
 const points=[];

 businessFiltered.forEach(b=>{
  if(!Number.isFinite(Number(b.lat))||
     !Number.isFinite(Number(b.lng)))return;

  const point=[Number(b.lat),Number(b.lng)];

  L.marker(point,{
   icon:businessPhotoMarker(b),
   title:b.name
  })
  .bindPopup(businessPopup(b),{
   minWidth:265,maxWidth:265
  })
  .addTo(businessMarkers);

  points.push(point);
 });

 fitMap(businessMap,points);
 document.getElementById("businessMapCount").textContent=
  businessFiltered.length+" BUSINESSES";
}

function toggleMap(type){
 const destination=type==="destination";
 const stay=type==="stay";
 const prefix=destination?"destination":stay?"stay":"business";
 const panel=document.getElementById(prefix+"MapPanel");
 const button=document.getElementById(prefix+"MapBtn");
 const opening=panel.classList.contains("hidden");

 panel.classList.toggle("hidden",!opening);
 button.classList.toggle("active",opening);
 button.querySelector("span").textContent=opening?"Hide Map":"Show Map";

 if(!opening)return;

 if(typeof L==="undefined"){
  panel.querySelector(".embedded-map").innerHTML=
   '<p style="padding:20px">Map unavailable. Check your internet connection.</p>';
  return;
 }

 if(destination){
  if(!destinationMap){
   destinationMap=createMap("destinationMap");
   destinationMarkers=L.layerGroup().addTo(destinationMap);
  }
  setTimeout(()=>{
   destinationMap.invalidateSize();
   updateDestinationMap();
  },120);
 }else if(stay){
  if(!stayMap){
   stayMap=createMap("stayMap");
   stayMarkers=L.layerGroup().addTo(stayMap);
  }
  setTimeout(()=>{
   stayMap.invalidateSize();
   updateStayMap();
  },120);
 }else{
  if(!businessMap){
   businessMap=createMap("businessMap");
   businessMarkers=L.layerGroup().addTo(businessMap);
  }
  setTimeout(()=>{
   businessMap.invalidateSize();
   updateBusinessMap();
  },120);
 }
}

function focusLocation(type,id){
 const isStay=type==="stay";
 const item=(isStay?stays:destinations).find(x=>x.id===id);
 if(!item)return;

 showPage(isStay?"stays":"destinations");

 const panel=document.getElementById(isStay?"stayMapPanel":"destinationMapPanel");

 if(panel.classList.contains("hidden")){
  toggleMap(type);
 }

 setTimeout(()=>{
  const map=isStay?stayMap:destinationMap;
  if(!map)return;

  map.invalidateSize();
  map.setView([item.lat,item.lng],14,{animate:true});

  const layer=isStay?stayMarkers:destinationMarkers;
  layer.eachLayer(marker=>{
   const latlng=marker.getLatLng();
   if(Math.abs(latlng.lat-item.lat)<0.0001&&
      Math.abs(latlng.lng-item.lng)<0.0001){
    marker.openPopup();
   }
  });

  panel.scrollIntoView({behavior:"smooth",block:"center"});
 },250);
}

function focusBusiness(id){
 const b=allBusinesses().find(x=>x.id===id&&x.status==="approved");
 if(!b)return;

 showPage("businesses");

 document.getElementById("businessSearch").value="";
 document.getElementById("businessCategoryFilter").value="all";
 document.getElementById("businessLocationFilter").value="all";
 renderBusinesses();

 const panel=document.getElementById("businessMapPanel");
 if(panel.classList.contains("hidden"))toggleMap("business");

 trackBusinessEvent(id,"mapViews");

 setTimeout(()=>{
  if(!businessMap)return;
  businessMap.invalidateSize();
  businessMap.setView([Number(b.lat),Number(b.lng)],15);

  businessMarkers.eachLayer(marker=>{
   const p=marker.getLatLng();
   if(Math.abs(p.lat-Number(b.lat))<0.000001&&
      Math.abs(p.lng-Number(b.lng))<0.000001){
    marker.openPopup();
   }
  });

  panel.scrollIntoView({behavior:"smooth",block:"center"});
 },300);
}

/* =====================================
   ORIGINAL DETAILS MODAL
===================================== */
function closeModal(){
 stopTouristNavigation();
 document.getElementById("detailModal").classList.add("hidden");

 if(detailMap){
  detailMap.remove();
  detailMap=null;
 }
}

function openDetailMap(item,isStay,isBusiness=false){
 if(typeof L==="undefined")return;

 if(detailMap){
  detailMap.remove();
  detailMap=null;
 }

 detailMap=L.map("detailMap",{
  scrollWheelZoom:false
 }).setView([Number(item.lat),Number(item.lng)],13);

 L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
   attribution:'&copy; OpenStreetMap contributors',
   maxZoom:19
  }
 ).addTo(detailMap);

 L.marker([Number(item.lat),Number(item.lng)],{
  icon:isBusiness?businessPhotoMarker(item):photoMarker(item,isStay)
 }).addTo(detailMap)
 .bindPopup(`<strong>${esc(item.name)}</strong><br>${esc(item.municipality||item.location)}, Catanduanes`)
 .openPopup();

 setTimeout(()=>detailMap.invalidateSize(),150);
}

function renderDetail(item,isStay){
 if(detailMap){
  detailMap.remove();
  detailMap=null;
 }

 const photos=isStay?item.photos:[item.image,img.coast,img.nature];
 const tags=isStay?item.amenities:item.highlights;

 document.getElementById("detailContent").innerHTML=`
  <img class="modal-main-image" src="${photos[0]}" alt="${esc(item.name)}">
  <h2>${esc(item.name)}</h2>
  <p style="color:var(--teal);font-weight:800">
   📍 ${esc(item.location)}, Catanduanes
  </p>

  <p>${isStay
   ?"Sample accommodation listing for demonstration purposes."
   :esc(item.description)}</p>

  <h3>${isStay?"Accommodation Information":"Destination Information"}</h3>

  <div class="detail-info-grid">
   <div class="detail-info">
    <small>TYPE</small>
    <strong>${esc(isStay?item.type:item.category)}</strong>
   </div>
   <div class="detail-info">
    <small>MUNICIPALITY</small>
    <strong>${esc(item.location)}</strong>
   </div>
   <div class="detail-info">
    <small>${isStay?"SAMPLE PRICE":"REGION"}</small>
    <strong>${isStay?"₱"+item.price.toLocaleString()+" / night":"Bicol Region"}</strong>
   </div>
   <div class="detail-info">
    <small>${isStay?"SAMPLE RATING":"LOCATION"}</small>
    <strong>${isStay?"★ "+item.rating:"Approximate location"}</strong>
   </div>
  </div>

  <h3>${isStay?"Amenities":"Highlights"}</h3>
  <div class="detail-tags">
   ${tags.map(t=>`<span>✓ ${esc(t)}</span>`).join("")}
  </div>

  <h3>Photo Gallery</h3>
  <div class="detail-gallery">
   ${photos.map(p=>`<img src="${p}" alt="Illustrative photo">`).join("")}
  </div>

  <h3 style="margin-top:23px">📍 Location Map</h3>
  <p>Explore the location directly below. Zoom, drag and tap the marker.</p>

  <div id="detailMap" class="detail-map"></div>

  ${!isStay?`<section class="safety-panel" aria-label="Tourist safety and live navigation">
   <h3>🧭 Live Location & Directions</h3>
   <p>Use your device location to find a route to this destination. GPS and internet access are required.</p>
   <div class="safety-actions">
    <button type="button" onclick="startTouristNavigation()">📍 Use My Location & Show Route</button>
    <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(item.lat+','+item.lng)}&travelmode=driving" target="_blank" rel="noopener noreferrer">Open Google Maps</a>
   </div>
   <div id="routeStatus" class="safety-status" role="status">Location sharing is off until you press the button.</div>
   <div id="touristTurnPanel" class="tourist-turn-panel hidden" aria-live="polite">
    <strong>🧭 On-site Turn-by-Turn Directions</strong>
    <div id="touristTurnProgress" class="tourist-turn-muted"></div>
    <div id="touristTurnInstruction" class="tourist-turn-main">Waiting for a route…</div>
    <div id="touristTurnDistance" class="tourist-turn-muted"></div>
    <div id="touristNextDistance" class="tourist-turn-muted"></div>
    <div class="tourist-turn-controls">
     <button type="button" id="touristPrevTurn" onclick="touristShowStep(touristStepIndex-1)">← Previous</button>
     <button type="button" id="touristNextTurn" onclick="touristShowStep(touristStepIndex+1)">Next →</button>
     <button type="button" id="touristVoiceBtn" onclick="toggleTouristVoice()">🔇 Voice Off</button>
    </div>
    <p class="tourist-turn-muted">Prototype guidance: instructions update using GPS near turns. Not a substitute for road signs, local advice, or a dedicated navigation app. Some trails and island routes may not be routable.</p>
   </div>
   <h3>🚑 Nearby Emergency Services</h3>
   <p>Services are searched around this tourist destination, not your current GPS location. Map listings and phone numbers may be incomplete or outdated.</p>
   <div id="emergencyResults" class="safety-status" role="status">Searching mapped emergency services…</div>
   <p><strong>Philippines national emergency hotline: <a href="tel:911">911</a></strong>. Confirm local contact details with authorities before traveling.</p>
  </section>`:''}


  ${isStay?`<div class="booking-panel"><h3>📅 Request a Stay</h3><p class="booking-hint">Sample property and prices only. This sends no request to a real accommodation provider.</p><button class="pink-btn" onclick="openBooking('stay',${item.id})">${isTourist()?"Request Booking":"Sign In to Request Booking"}</button></div>`:""}

  <div class="detail-actions">
   <button onclick="closeModal();focusLocation('${isStay?"stay":"destination"}',${item.id})">
    📍 View on Main Map
   </button>
   <button onclick="closeModal()">Close Details</button>
  </div>

  <p style="font-size:10px">
   ${isStay
    ?"Sample property: coordinates, photos, prices and ratings are not verified."
    :"Destination coordinates are approximate and photos are illustrative. Verify access routes before traveling."}
  </p>
 `;

 document.getElementById("detailModal").classList.remove("hidden");
 setTimeout(()=>{openDetailMap(item,isStay);if(!isStay)initializeTouristSafety(item);},80);
}

function openDestination(id){
 const d=destinations.find(x=>x.id===id);
 if(d)renderDetail(d,false);
}

function openStay(id){
 const s=stays.find(x=>x.id===id);
 if(s)renderDetail(s,true);
}

/* =====================================
   ORIGINAL DESTINATION LISTING
===================================== */
function destinationCard(d){
 const saved=getStored("catFavorites").includes(d.id);

 return `
 <article class="card">
  <div class="card-image">
   <img src="${d.image}" alt="${esc(d.name)}" loading="lazy">
   <span class="badge">${esc(d.category.toUpperCase())}</span>
   <button class="heart ${saved?"saved":""}" onclick="toggleFavorite(${d.id})">
    ${saved?"♥":"♡"}
   </button>
  </div>
  <div class="card-body">
   <h3>${esc(d.name)}</h3>
   <p class="card-location">📍 ${esc(d.location)}, Catanduanes</p>
   <p>${esc(d.description)}</p>
   <div class="card-bottom">
    <small>
     <a onclick="focusLocation('destination',${d.id})">📍 View on Map</a>
    </small>
    <button onclick="openDestination(${d.id})">View Details ↗</button>
   </div>
  </div>
 </article>`;
}

function pagination(total,current,type){
 let html="";
 for(let i=1;i<=Math.ceil(total/pageSize);i++){
  html+=`<button class="${i===current?"active":""}"
   onclick="changePage('${type}',${i})">${i}</button>`;
 }
 return html;
}

function renderDestinations(){
 const start=(destinationPage-1)*pageSize;
 const list=destinationFiltered.slice(start,start+pageSize);

 document.getElementById("destinationResults").innerHTML=
  list.length?list.map(destinationCard).join(""):
  '<div class="empty">No destinations found.</div>';

 document.getElementById("destinationCount").textContent=
  `Showing ${destinationFiltered.length?start+1:0}–${Math.min(start+pageSize,destinationFiltered.length)} of ${destinationFiltered.length} destinations`;

 document.getElementById("destinationPagination").innerHTML=
  pagination(destinationFiltered.length,destinationPage,"destination");

 updateDestinationMap();
}

function changePage(type,page){
 if(type==="destination"){
  destinationPage=page;
  renderDestinations();
 }else{
  stayPage=page;
  renderStays();
 }
 window.scrollTo({top:0,behavior:"smooth"});
}

function renderDestinationSidebar(){
 document.getElementById("destinationCategoryFilters").innerHTML=
  categories.map(c=>`
   <label class="filter-option">
    <input type="radio" name="sideCategory" value="${c}"
     ${c==="all"?"checked":""} onchange="destinationSidebarFilter()">
    ${c==="all"?"All destinations":c.charAt(0).toUpperCase()+c.slice(1)}
   </label>
  `).join("");

 document.getElementById("destinationLocationFilters").innerHTML=
  municipalities.map(c=>`
   <label class="filter-option">
    <input type="radio" name="sideLocation" value="${c}"
     ${c==="all"?"checked":""} onchange="destinationSidebarFilter()">
    ${c==="all"?"All municipalities":c}
   </label>
  `).join("");
}

function destinationSidebarFilter(){
 document.getElementById("topCategory").value=
  document.querySelector('[name="sideCategory"]:checked').value;

 document.getElementById("topLocation").value=
  document.querySelector('[name="sideLocation"]:checked').value;

 applyDestinationFilters();
}

function applyDestinationFilters(){
 const q=document.getElementById("destinationSearch").value.toLowerCase().trim();
 const c=document.getElementById("topCategory").value;
 const l=document.getElementById("topLocation").value;

 destinationFiltered=destinations.filter(d=>
  (c==="all"||d.category===c)&&
  (l==="all"||d.location===l)&&
  (d.name+" "+d.location+" "+d.description).toLowerCase().includes(q)
 );

 const sort=document.getElementById("destinationSort").value;

 if(sort==="name")destinationFiltered.sort((a,b)=>a.name.localeCompare(b.name));
 if(sort==="location")destinationFiltered.sort((a,b)=>a.location.localeCompare(b.location));

 document.querySelectorAll('[name="sideCategory"]').forEach(x=>x.checked=x.value===c);
 document.querySelectorAll('[name="sideLocation"]').forEach(x=>x.checked=x.value===l);

 destinationPage=1;
 renderDestinations();
}

function clearDestinationFilters(){
 document.getElementById("destinationSearch").value="";
 document.getElementById("topCategory").value="all";
 document.getElementById("topLocation").value="all";
 document.getElementById("destinationSort").value="default";
 applyDestinationFilters();
}

function categoryShortcut(c){
 showPage("destinations");
 document.getElementById("topCategory").value=c;
 applyDestinationFilters();
}

function toggleFavorite(id){
 const list=getStored("catFavorites");
 const updated=list.includes(id)?list.filter(x=>x!==id):[...list,id];

 if(setStored("catFavorites",updated)){
  renderDestinations();
  document.getElementById("homeDestinations").innerHTML=
   destinations.slice(0,6).map(destinationCard).join("");
 }
}

/* =====================================
   ORIGINAL STAY LISTING
===================================== */
function stayCard(s){
 const index=photoIndexes[s.id]||0;
 const saved=getStored("stayFavorites").includes(s.id);

 return `
 <article class="stay-card">
  <div class="stay-photo">
   <img id="stayPhoto${s.id}" src="${s.photos[index]}" alt="${esc(s.name)}" loading="lazy">
   <div class="stay-badges">
    <span>FEATURED</span>
    <span class="promo">DEMO</span>
   </div>
   <button class="heart ${saved?"saved":""}" onclick="toggleStayFavorite(${s.id})">
    ${saved?"♥":"♡"}
   </button>
   <button class="photo-prev" onclick="changeStayPhoto(${s.id},-1)">‹</button>
   <button class="photo-next" onclick="changeStayPhoto(${s.id},1)">›</button>
  </div>

  <div class="stay-body">
   <div class="stay-type">${esc(s.type.toUpperCase())}</div>
   <h3>${esc(s.name)}</h3>
   <p class="card-location">📍 ${esc(s.location)}, Catanduanes</p>
   <div class="stay-rating">★ ${s.rating.toFixed(1)} <span>Sample rating</span></div>
   <div class="stay-features">
    ${s.amenities.map(a=>`<span>✓ ${esc(a)}</span>`).join("")}
   </div>

   <div class="stay-price-row">
    <div class="price">₱${s.price.toLocaleString()} <small>/ night</small></div>
    <button onclick="openStay(${s.id})">View Details</button>
   </div>

   <div class="demo-note">
    <a onclick="focusLocation('stay',${s.id})">📍 View on Map</a>
    • Illustrative rates only
   </div>
  </div>
 </article>`;
}

function renderStays(){
 const start=(stayPage-1)*pageSize;
 const list=stayFiltered.slice(start,start+pageSize);

 document.getElementById("stayResults").innerHTML=
  list.length?list.map(stayCard).join(""):
  '<div class="empty">No stays match your filters.</div>';

 document.getElementById("stayCount").textContent=
  `Showing ${stayFiltered.length?start+1:0}–${Math.min(start+pageSize,stayFiltered.length)} of ${stayFiltered.length} example stays`;

 document.getElementById("stayPagination").innerHTML=
  pagination(stayFiltered.length,stayPage,"stay");

 updateStayMap();
}

function changeStayPhoto(id,direction){
 const s=stays.find(x=>x.id===id);
 if(!s)return;

 photoIndexes[id]=
  ((photoIndexes[id]||0)+direction+s.photos.length)%s.photos.length;

 const el=document.getElementById("stayPhoto"+id);
 if(el)el.src=s.photos[photoIndexes[id]];
}

function toggleStayFavorite(id){
 const list=getStored("stayFavorites");
 const updated=list.includes(id)?list.filter(x=>x!==id):[...list,id];

 if(setStored("stayFavorites",updated)){
  renderStays();
  document.getElementById("homeStays").innerHTML=
   stays.slice(0,3).map(stayCard).join("");
 }
}

function renderStaySidebar(){
 const types=["all","Hotel","Resort","Villa","Homestay","Beachfront"];

 document.getElementById("stayTypeFilters").innerHTML=
  types.map(t=>`
   <label class="filter-option">
    <input type="radio" name="stayType" value="${t}"
     ${t==="all"?"checked":""} onchange="applyStayFilters()">
    ${t==="all"?"All property types":t}
   </label>
  `).join("");
}

function selectStayType(t){
 document.querySelectorAll('[name="stayType"]').forEach(x=>x.checked=x.value===t);
 applyStayFilters();
}

function applyStayFilters(){
 const q=document.getElementById("staySearch").value.toLowerCase().trim();
 const location=document.getElementById("stayLocation").value;
 const type=document.querySelector('[name="stayType"]:checked')?.value||"all";
 const price=document.querySelector('[name="priceFilter"]:checked')?.value||"all";
 const amenities=[...document.querySelectorAll('[name="amenity"]:checked')].map(x=>x.value);

 stayFiltered=stays.filter(s=>{
  if(q&&!(s.name+" "+s.location+" "+s.type).toLowerCase().includes(q))return false;
  if(location!=="all"&&s.location!==location)return false;
  if(type!=="all"&&s.type!==type)return false;
  if(price==="budget"&&s.price>=2000)return false;
  if(price==="mid"&&(s.price<2000||s.price>4000))return false;
  if(price==="premium"&&s.price<=4000)return false;
  return amenities.every(a=>s.amenities.includes(a));
 });

 const sort=document.getElementById("staySort").value;
 if(sort==="low")stayFiltered.sort((a,b)=>a.price-b.price);
 if(sort==="high")stayFiltered.sort((a,b)=>b.price-a.price);
 if(sort==="rating")stayFiltered.sort((a,b)=>b.rating-a.rating);

 document.querySelectorAll("[data-stay-type]").forEach(b=>
  b.classList.toggle("active",b.dataset.stayType===type)
 );

 stayPage=1;
 renderStays();
}

function clearStayFilters(){
 document.getElementById("staySearch").value="";
 document.getElementById("stayLocation").value="all";
 document.getElementById("staySort").value="default";
 document.querySelector('[name="stayType"][value="all"]').checked=true;
 document.querySelector('[name="priceFilter"][value="all"]').checked=true;
 document.querySelectorAll('[name="amenity"]').forEach(x=>x.checked=false);
 applyStayFilters();
}

/* =====================================
   ORIGINAL OTHER CONTENT
===================================== */
function simpleCard(item){
 return `
 <article class="info-card">
  <img src="${item.image}" alt="${esc(item.name)}" loading="lazy">
  <div>
   <h3>${esc(item.name)}</h3>
   <p>📍 ${esc(item.location)}, Catanduanes</p>
   <p>${esc(item.description)}</p>
   ${activities.includes(item)?`<button onclick="openBooking('activity',${activities.indexOf(item)})">Request Activity</button>`:""}
  </div>
 </article>`;
}

function renderOtherPages(){
 document.getElementById("activitiesGrid").innerHTML=
  activities.map(simpleCard).join("");

 document.getElementById("transportGrid").innerHTML=
  transport.map(simpleCard).join("");
}

/* =====================================
   NEW BUSINESS DIRECTORY
===================================== */
function businessCard(b){
 return `
 <article class="business-card">
  <div class="business-cover">
   <img src="${esc(businessImage(b))}" alt="${esc(b.name)}" loading="lazy">
   <span class="business-category">${esc(b.category)}</span>
  </div>
  <div class="business-card-body">
   <h3>${esc(b.name)}</h3>
   <p class="location">📍 ${esc(b.municipality)}, Catanduanes</p>
   <p>${esc(b.description).slice(0,160)}${b.description.length>160?"...":""}</p>
   ${b.promotion?`<span class="promo-chip">🎁 ${esc(b.promotion)}</span>`:""}
   <div class="business-card-actions">
    <button onclick="openBusiness('${esc(b.id)}')">View Details ↗</button>
    <button onclick="focusBusiness('${esc(b.id)}')">📍 View Map</button>
   </div>
  </div>
 </article>`;
}

function renderBusinesses(){
 const q=document.getElementById("businessSearch").value.toLowerCase().trim();
 const category=document.getElementById("businessCategoryFilter").value;
 const location=document.getElementById("businessLocationFilter").value;

 businessFiltered=allBusinesses().filter(b=>
  b.status==="approved"&&
  (category==="all"||b.category===category)&&
  (location==="all"||b.municipality===location)&&
  (
   b.name+" "+b.description+" "+b.municipality+" "+
   b.category+" "+(b.products||[]).map(p=>p.name).join(" ")
  ).toLowerCase().includes(q)
 );

 document.getElementById("businessCount").textContent=
  businessFiltered.length+" approved businesses found";

 document.getElementById("businessGrid").innerHTML=
  businessFiltered.length?
  businessFiltered.map(businessCard).join(""):
  `<div class="business-empty" style="grid-column:1/-1">
    <h3>🏪 No businesses found</h3>
    <p>There are no approved businesses matching your filters yet.</p>
    <button class="pink-btn" onclick="openPartnerArea()">List Your Business</button>
   </div>`;

 const featured=allBusinesses().filter(b=>b.status==="approved").slice(0,3);
 document.getElementById("homeBusinesses").innerHTML=
  featured.length?
  featured.map(businessCard).join(""):
  `<div class="business-empty" style="grid-column:1/-1">
    <h3>Support Local Businesses</h3>
    <p>Approved business listings will appear here.</p>
    <button class="pink-btn" onclick="openPartnerArea()">Become a Business Partner</button>
   </div>`;

 updateBusinessMap();
}

function trackBusinessEvent(id,type){
 const data=allBusinesses();
 const b=data.find(x=>x.id===id&&x.status==="approved");
 if(!b)return;

 if(!["views","contacts","mapViews"].includes(type))return;
 if(!b.stats)b.stats={views:0,contacts:0,mapViews:0};

 b.stats[type]=(b.stats[type]||0)+1;
 saveBusinesses(data);
}

function openBusiness(id){
 const b=allBusinesses().find(x=>x.id===id&&x.status==="approved");
 if(!b)return;

 trackBusinessEvent(id,"views");
 if(detailMap){detailMap.remove();detailMap=null}

 const products=Array.isArray(b.products)?b.products:[];
 const messenger=safeLink(b.messenger);
 const phone=String(b.phone||"").replace(/[^0-9+]/g,"");
 const email=String(b.email||"").trim();

 const nearby=destinations
  .filter(d=>d.location===b.municipality)
  .slice(0,3);

 document.getElementById("detailContent").innerHTML=`
  <img class="modal-main-image" src="${esc(businessImage(b))}" alt="${esc(b.name)}">
  <h2>${esc(b.name)}</h2>
  <p style="color:var(--teal);font-weight:800">
   📍 ${esc(b.address)}, ${esc(b.municipality)}, Catanduanes
  </p>

  <span class="status-pill status-approved">✓ Approved Listing</span>
  <p>${esc(b.description)}</p>

  ${b.promotion?`<p class="promo-chip">🎁 ${esc(b.promotion)}</p>`:""}

  <div class="detail-info-grid">
   <div class="detail-info"><small>CATEGORY</small><strong>${esc(b.category)}</strong></div>
   <div class="detail-info"><small>MUNICIPALITY</small><strong>${esc(b.municipality)}</strong></div>
   <div class="detail-info"><small>OPERATING HOURS</small><strong>${esc(b.hours||"Contact business")}</strong></div>
   <div class="detail-info"><small>PHONE</small><strong>${esc(b.phone||"Not provided")}</strong></div>
  </div>

  <h3>Products & Services</h3>
  ${products.length?`
   <div class="product-gallery">
    ${products.map(p=>`
     <div class="product-tile">
      <img src="${esc(safeImage(p.image,businessImage(b)))}" alt="${esc(p.name)}">
      <strong>${esc(p.name)}</strong>
      <span>${p.price!==""&&p.price!=null?"₱"+Number(p.price).toLocaleString():"Ask for price"}</span>
     </div>
    `).join("")}
   </div>
  `:'<p>Contact the business for products and services.</p>'}

  <h3>📍 Business Location</h3>
  <p>Explore the owner-selected location on the embedded map.</p>
  <div id="detailMap" class="detail-map"></div>

  ${nearby.length?`
   <div class="nearby-box">
    <h3>🌴 Tourist Destinations in ${esc(b.municipality)}</h3>
    ${nearby.map(d=>`
     <button onclick="closeModal();openDestination(${d.id})">
      📍 ${esc(d.name)}
     </button>
    `).join("")}
   </div>
  `:""}

  <h3 style="margin-top:22px">Contact This Business</h3>
  <div class="detail-actions">
   ${phone?`<button onclick="contactBusiness('${esc(b.id)}','phone')">📞 Call Business</button>`:""}
   ${email?`<button onclick="contactBusiness('${esc(b.id)}','email')">✉ Email</button>`:""}
   ${messenger?`<button onclick="contactBusiness('${esc(b.id)}','messenger')">💬 Messenger</button>`:""}
   <button onclick="closeModal();focusBusiness('${esc(b.id)}')">📍 View on Main Map</button>
   <button onclick="openBooking('business','${esc(b.id)}')">📅 Request Reservation / Service</button>
  </div>

  <p style="font-size:10px">
   Business details and coordinates are owner-submitted and not independently verified in this prototype.
  </p>
 `;

 document.getElementById("detailModal").classList.remove("hidden");
 setTimeout(()=>openDetailMap(b,false,true),80);
}

function contactBusiness(id,type){
 const b=allBusinesses().find(x=>x.id===id&&x.status==="approved");
 if(!b)return;

 let url="";

 if(type==="phone"){
  const number=String(b.phone||"").replace(/[^0-9+]/g,"");
  if(number)url="tel:"+number;
 }
 if(type==="email"&&b.email){
  url="mailto:"+encodeURIComponent(b.email);
 }
 if(type==="messenger"){
  url=safeLink(b.messenger);
 }

 if(!url)return;

 trackBusinessEvent(id,"contacts");

 if(url.startsWith("https://")){
  window.open(url,"_blank","noopener,noreferrer");
 }else{
  window.location.href=url;
 }
}

/* =====================================
   NEW DEMO AUTHENTICATION
   NOT FOR PRODUCTION USE
===================================== */
function togglePassword(id,button){
 const field=document.getElementById(id);
 field.type=field.type==="password"?"text":"password";
 button.textContent=field.type==="password"?"Show":"Hide";
}

function showFormMessage(id,message,success=false){
 const el=document.getElementById(id);
 el.textContent=message;
 el.className="form-message"+(success?" success":"");
}

function fillAdminDemo(){
 document.getElementById("signinEmail").value="admin@mycatanduanesguide.demo";
 document.getElementById("signinPassword").value="AdminDemo123!";
}

function demoAdminCredentials(email,password){
 return email==="admin@mycatanduanesguide.demo"&&
        password==="AdminDemo123!";
}

document.getElementById("partnerForm").addEventListener("submit",function(e){
 e.preventDefault();

 const name=document.getElementById("partnerName").value.trim();
 const email=document.getElementById("partnerEmail").value.trim().toLowerCase();
 const phone=document.getElementById("partnerPhone").value.trim();
 const password=document.getElementById("partnerPassword").value;
 const confirm=document.getElementById("partnerConfirm").value;

 if(password!==confirm){
  showFormMessage("partnerMessage","Passwords do not match.");
  return;
 }

 if(email==="admin@mycatanduanesguide.demo"){
  showFormMessage("partnerMessage","This demonstration email is reserved.");
  return;
 }

 const accounts=getStored("mcgDemoAccounts");

 if(accounts.some(a=>a.email===email)){
  showFormMessage("partnerMessage","An account with this email already exists.");
  return;
 }

 const account={
  id:"owner_"+Date.now()+"_"+Math.random().toString(36).slice(2,8),
  name,email,phone,password,
  role:"owner"
 };

 accounts.push(account);

 if(!setStored("mcgDemoAccounts",accounts))return;

 sessionStorage.setItem("mcgSession",JSON.stringify({
  id:account.id,name:account.name,email:account.email,role:"owner"
 }));

 this.reset();
 showPage("dashboard");
 showOwnerTab("form");
});

document.getElementById("signinForm").addEventListener("submit",function(e){
 e.preventDefault();

 const email=document.getElementById("signinEmail").value.trim().toLowerCase();
 const password=document.getElementById("signinPassword").value;

 if(demoAdminCredentials(email,password)){
  sessionStorage.setItem("mcgSession",JSON.stringify({
   id:"demo-admin",name:"Administrator",email,role:"admin"
  }));
  this.reset();
  showPage("admin");
  return;
 }

 const account=getStored("mcgDemoAccounts").find(a=>
  a.email===email&&a.password===password
 );

 if(!account){
  showFormMessage("signinMessage","Invalid demo email or password.");
  return;
 }

 sessionStorage.setItem("mcgSession",JSON.stringify({
  id:account.id,name:account.name,email:account.email,role:account.role
 }));

 this.reset();
 if(account.role==="tourist"&&pendingBooking){const next=pendingBooking;pendingBooking=null;openBooking(next.kind,next.id);}
 else showPage(account.role==="tourist"?"touristBookings":account.role==="owner"?"dashboard":"home");
 updateNav();
});

function logout(){
 sessionStorage.removeItem("mcgSession");
 updateNav();
 showPage("home");
}

/* =====================================
   BUSINESS OWNER DASHBOARD
===================================== */
function ownerBusinesses(){
 const user=getSession();
 if(!user||user.role!=="owner")return [];
 return allBusinesses().filter(b=>b.ownerId===user.id);
}

function statusBadge(status){
 return `<span class="status-pill status-${esc(status)}">${esc(status.toUpperCase())}</span>`;
}

function renderOwnerDashboard(){
 if(!isOwner())return;

 const user=getSession();
 const items=ownerBusinesses();

 document.getElementById("dashboardUserName").textContent=user.name;
 document.getElementById("ownerTotal").textContent=items.length;
 document.getElementById("ownerViews").textContent=
  items.reduce((n,b)=>n+(b.stats?.views||0),0);
 document.getElementById("ownerContacts").textContent=
  items.reduce((n,b)=>n+(b.stats?.contacts||0),0);
 document.getElementById("ownerMapViews").textContent=
  items.reduce((n,b)=>n+(b.stats?.mapViews||0),0);

 document.getElementById("ownerBusinessList").innerHTML=
  items.length?items.map(b=>`
   <div class="dashboard-business-item">
    <img src="${esc(businessImage(b))}" alt="${esc(b.name)}">
    <div class="item-info">
     <h3>${esc(b.name)}</h3>
     <p>📍 ${esc(b.municipality)} • ${esc(b.category)}</p>
     ${statusBadge(b.status)}
     ${b.status==="rejected"?`<p>${esc(b.reviewNote||"Please review your information and resubmit.")}</p>`:""}
    </div>
    <div class="item-actions">
     <button class="edit" onclick="editBusiness('${esc(b.id)}')">✎ Edit</button>
     ${b.status==="approved"?`<button onclick="openBusiness('${esc(b.id)}')">View</button>`:""}
     <button class="delete" onclick="deleteBusiness('${esc(b.id)}')">Delete</button>
    </div>
   </div>
  `).join(""):
  `<div class="business-empty">
    <h3>No business listings yet</h3>
    <p>Create your first listing to start promoting your business.</p>
    <button class="pink-btn" onclick="showOwnerTab('form')">+ Add Your Business</button>
   </div>`;

 renderOwnerBookingPanel();
 renderOwnerPerformance(items);
 document.getElementById("ownerAnalyticsContent").innerHTML=
  items.length?items.map(b=>`
   <div class="dashboard-business-item">
    <img src="${esc(businessImage(b))}" alt="">
    <div class="item-info">
     <h3>${esc(b.name)}</h3>
     <p>${statusBadge(b.status)}</p>
     <p>👁️ ${b.stats?.views||0} views &nbsp; 💬 ${b.stats?.contacts||0} contact clicks &nbsp; 📍 ${b.stats?.mapViews||0} map interactions</p>
    </div>
   </div>
  `).join(""):
  '<p>No analytics available yet.</p>';
}

function showOwnerTab(tab){
 if(!isOwner())return;

 document.getElementById("ownerListTab").classList.toggle("hidden",tab!=="list");
 document.getElementById("ownerFormTab").classList.toggle("hidden",tab!=="form");
 document.getElementById("ownerAnalyticsTab").classList.toggle("hidden",tab!=="analytics");
 document.getElementById("ownerBookingsTab").classList.toggle("hidden",tab!=="bookings");

 document.querySelectorAll("[data-owner-tab]").forEach(b=>
  b.classList.toggle("active",b.dataset.ownerTab===tab)
 );

 if(tab==="form"){
  if(!document.getElementById("editBusinessId").value)resetBusinessForm();

  setTimeout(()=>{
   initializePickerMap();
   pickerMap?.invalidateSize();
  },150);
 }

 if(["analytics","list","bookings"].includes(tab))renderOwnerDashboard();
}

/* =====================================
   BUSINESS FORM & PRODUCTS
===================================== */
function addProductRow(product={}){
 const row=document.createElement("div");
 row.className="product-row";

 row.innerHTML=`
  <input class="product-name" placeholder="Product / Service Name" maxlength="100" value="${esc(product.name||"")}">
  <input class="product-price" type="number" min="0" step="0.01" placeholder="Price" value="${esc(product.price??"")}">
  <input class="product-image" type="url" placeholder="Image URL (optional)" value="${esc(product.image||"")}">
  <button type="button" title="Remove" onclick="this.parentElement.remove()">×</button>
 `;

 document.getElementById("productRows").appendChild(row);
}

function collectProducts(){
 return [...document.querySelectorAll("#productRows .product-row")]
  .map(row=>({
   name:row.querySelector(".product-name").value.trim(),
   price:row.querySelector(".product-price").value.trim(),
   image:safeLink(row.querySelector(".product-image").value.trim())
  }))
  .filter(p=>p.name);
}

function resetBusinessForm(){
 document.getElementById("businessSubmissionForm").reset();
 document.getElementById("editBusinessId").value="";
 document.getElementById("businessFormTitle").textContent="Add Your Business";
 document.getElementById("productRows").innerHTML="";
 document.getElementById("bizPhotoPreview").classList.add("hidden");
 document.getElementById("businessSubmitMessage").classList.add("hidden");

 currentBusinessPhoto="";
 addProductRow();

 if(pickerMap){
  pickerMap.setView([13.78,124.25],10);
  if(pickerMarker){
   pickerMap.removeLayer(pickerMarker);
   pickerMarker=null;
  }
 }
}

function setPickerLocation(lat,lng){
 document.getElementById("bizLat").value=Number(lat).toFixed(6);
 document.getElementById("bizLng").value=Number(lng).toFixed(6);

 if(!pickerMap)return;

 if(pickerMarker){
  pickerMarker.setLatLng([lat,lng]);
 }else{
  pickerMarker=L.marker([lat,lng],{draggable:true}).addTo(pickerMap);
  pickerMarker.on("dragend",()=>{
   const p=pickerMarker.getLatLng();
   setPickerLocation(p.lat,p.lng);
  });
 }
}

function initializePickerMap(){
 if(typeof L==="undefined")return;

 if(!pickerMap){
  pickerMap=L.map("businessLocationPicker",{
   scrollWheelZoom:false
  }).setView([13.78,124.25],10);

  L.tileLayer(
   "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
   {attribution:"&copy; OpenStreetMap contributors",maxZoom:19}
  ).addTo(pickerMap);

  pickerMap.on("click",e=>{
   setPickerLocation(e.latlng.lat,e.latlng.lng);
  });
 }

 const lat=Number(document.getElementById("bizLat").value);
 const lng=Number(document.getElementById("bizLng").value);

 if(document.getElementById("bizLat").value&&
    document.getElementById("bizLng").value){
  setPickerLocation(lat,lng);
  pickerMap.setView([lat,lng],14);
 }

 pickerMap.invalidateSize();
}

document.getElementById("bizMunicipality").addEventListener("change",function(){
 const coords=municipalityCoords[this.value];
 if(!coords)return;

 document.getElementById("bizLat").value="";
 document.getElementById("bizLng").value="";

 if(pickerMarker&&pickerMap){
  pickerMap.removeLayer(pickerMarker);
  pickerMarker=null;
 }

 if(pickerMap)pickerMap.setView(coords,13);
});

["bizLat","bizLng"].forEach(id=>{
 document.getElementById(id).addEventListener("change",()=>{
  const lat=document.getElementById("bizLat").value;
  const lng=document.getElementById("bizLng").value;

  if(lat!==""&&lng!==""&&
     Number(lat)>=-90&&Number(lat)<=90&&
     Number(lng)>=-180&&Number(lng)<=180){
   setPickerLocation(Number(lat),Number(lng));
   pickerMap?.setView([Number(lat),Number(lng)],14);
  }
 });
});

/* Resize and compress demo photos before local storage */
async function compressImage(file){
 return new Promise((resolve,reject)=>{
  if(!file.type.startsWith("image/")){
   reject(new Error("Please select an image file."));
   return;
  }
  if(file.size>8*1024*1024){
   reject(new Error("Please select an image smaller than 8 MB."));
   return;
  }

  const image=new Image();
  const url=URL.createObjectURL(file);

  image.onload=()=>{
   try{
    const scale=Math.min(1,850/Math.max(image.width,image.height));
    const canvas=document.createElement("canvas");
    canvas.width=Math.round(image.width*scale);
    canvas.height=Math.round(image.height*scale);

    canvas.getContext("2d").drawImage(image,0,0,canvas.width,canvas.height);
    const result=canvas.toDataURL("image/jpeg",0.72);

    URL.revokeObjectURL(url);
    resolve(result);
   }catch(err){
    URL.revokeObjectURL(url);
    reject(err);
   }
  };

  image.onerror=()=>{
   URL.revokeObjectURL(url);
   reject(new Error("Unable to read the image."));
  };

  image.src=url;
 });
}

document.getElementById("bizPhoto").addEventListener("change",async function(){
 const file=this.files[0];
 if(!file)return;

 try{
  currentBusinessPhoto=await compressImage(file);
  const preview=document.getElementById("bizPhotoPreview");
  preview.src=currentBusinessPhoto;
  preview.classList.remove("hidden");
 }catch(err){
  alert(err.message);
  this.value="";
 }
});

document.getElementById("businessSubmissionForm").addEventListener("submit",function(e){
 e.preventDefault();

 if(!isOwner()){
  showPage("signin");
  return;
 }

 const user=getSession();
 const id=document.getElementById("editBusinessId").value;
 const existing=allBusinesses();
 const old=existing.find(b=>b.id===id);

 if(id&&(!old||old.ownerId!==user.id)){
  alert("You cannot edit this listing.");
  return;
 }

 const latValue=document.getElementById("bizLat").value;
 const lngValue=document.getElementById("bizLng").value;
 const lat=Number(latValue);
 const lng=Number(lngValue);

 if(!latValue||!lngValue||
    !Number.isFinite(lat)||!Number.isFinite(lng)||
    lat<12.5||lat>15||lng<123||lng>125.5){
  showFormMessage("businessSubmitMessage",
   "Please select a valid location within the Catanduanes area.");
  return;
 }

 const name=document.getElementById("bizName").value.trim();
 const category=document.getElementById("bizCategory").value;
 const municipality=document.getElementById("bizMunicipality").value;
 const address=document.getElementById("bizAddress").value.trim();
 const description=document.getElementById("bizDescription").value.trim();

 if(!name||!category||!municipality||!address||!description){
  showFormMessage("businessSubmitMessage","Complete all required fields.");
  return;
 }

 const messengerInput=document.getElementById("bizMessenger").value.trim();
 const messenger=safeLink(messengerInput);

 if(messengerInput&&!messenger){
  showFormMessage("businessSubmitMessage","Enter a valid Messenger URL.");
  return;
 }

 const business={
  id:old?.id||"biz_"+Date.now()+"_"+Math.random().toString(36).slice(2,8),
  ownerId:user.id,
  ownerName:user.name,
  name,category,municipality,address,description,
  phone:document.getElementById("bizPhone").value.trim(),
  email:document.getElementById("bizEmail").value.trim(),
  messenger,
  hours:document.getElementById("bizHours").value.trim(),
  image:currentBusinessPhoto||old?.image||img.shop,
  products:collectProducts(),
  promotion:document.getElementById("bizPromo").value.trim(),
  lat,lng,
  status:"pending",
  reviewNote:"",
  stats:old?.stats||{views:0,contacts:0,mapViews:0},
  createdAt:old?.createdAt||new Date().toISOString(),
  updatedAt:new Date().toISOString()
 };

 const updated=old?
  existing.map(b=>b.id===old.id?business:b):
  [...existing,business];

 if(!saveBusinesses(updated))return;

 resetBusinessForm();
 renderBusinesses();
 renderOwnerDashboard();
 showOwnerTab("list");
 alert("Business submitted successfully! Please wait for admin approval.");
});

function editBusiness(id){
 if(!isOwner())return;

 const b=ownerBusinesses().find(x=>x.id===id);
 if(!b)return;

 showPage("dashboard");

 document.getElementById("editBusinessId").value=b.id;
 document.getElementById("businessFormTitle").textContent="Edit Business Listing";
 document.getElementById("bizName").value=b.name;
 document.getElementById("bizCategory").value=b.category;
 document.getElementById("bizMunicipality").value=b.municipality;
 document.getElementById("bizAddress").value=b.address;
 document.getElementById("bizDescription").value=b.description;
 document.getElementById("bizPhone").value=b.phone||"";
 document.getElementById("bizEmail").value=b.email||"";
 document.getElementById("bizMessenger").value=b.messenger||"";
 document.getElementById("bizHours").value=b.hours||"";
 document.getElementById("bizPromo").value=b.promotion||"";
 document.getElementById("bizLat").value=b.lat;
 document.getElementById("bizLng").value=b.lng;

 currentBusinessPhoto=b.image||"";
 const preview=document.getElementById("bizPhotoPreview");
 preview.src=businessImage(b);
 preview.classList.remove("hidden");

 document.getElementById("productRows").innerHTML="";
 (b.products||[]).forEach(addProductRow);
 if(!(b.products||[]).length)addProductRow();

 showOwnerTab("form");
}

function deleteBusiness(id){
 if(!isOwner())return;

 const b=ownerBusinesses().find(x=>x.id===id);
 if(!b)return;

 if(!confirm("Delete this business listing permanently from this browser?"))return;

 const updated=allBusinesses().filter(x=>x.id!==id);
 if(!saveBusinesses(updated))return;

 renderOwnerDashboard();
 renderBusinesses();
}

/* =====================================
   NEW ADMIN APPROVAL SYSTEM
===================================== */
function setAdminFilter(filter){
 if(!isAdmin())return;
 adminFilter=filter;

 document.querySelectorAll("[data-admin-filter]").forEach(b=>
  b.classList.toggle("active",b.dataset.adminFilter===filter)
 );

 renderAdminDashboard();
}

function renderAdminDashboard(){
 if(!isAdmin())return;

 const items=allBusinesses();

 document.getElementById("adminTotal").textContent=items.length;
 document.getElementById("adminPending").textContent=
  items.filter(b=>b.status==="pending").length;
 document.getElementById("adminApproved").textContent=
  items.filter(b=>b.status==="approved").length;
 document.getElementById("adminRejected").textContent=
  items.filter(b=>b.status==="rejected").length;

 const filtered=items.filter(b=>
  adminFilter==="all"||b.status===adminFilter
 );

 document.getElementById("adminBusinessList").innerHTML=
  filtered.length?filtered.map(b=>`
   <div class="dashboard-business-item">
    <img src="${esc(businessImage(b))}" alt="${esc(b.name)}">
    <div class="item-info">
     <h3>${esc(b.name)}</h3>
     <p>👤 ${esc(b.ownerName)} • ${esc(b.category)}</p>
     <p>📍 ${esc(b.address)}, ${esc(b.municipality)}</p>
     <p>${esc(b.description).slice(0,180)}</p>
     ${statusBadge(b.status)}
     ${b.reviewNote?`<p>Admin note: ${esc(b.reviewNote)}</p>`:""}
    </div>
    <div class="item-actions">
     <button onclick="adminPreviewBusiness('${esc(b.id)}')">Review Details</button>
     ${b.status!=="approved"?`
      <button class="approve" onclick="reviewBusiness('${esc(b.id)}','approved')">✓ Approve</button>
     `:""}
     ${b.status!=="rejected"?`
      <button class="reject" onclick="reviewBusiness('${esc(b.id)}','rejected')">× Reject</button>
     `:""}
    </div>
   </div>
  `).join(""):
  '<div class="business-empty">No submissions in this category.</div>';
}

function adminPreviewBusiness(id){
 if(!isAdmin())return;

 const b=allBusinesses().find(x=>x.id===id);
 if(!b)return;

 if(detailMap){detailMap.remove();detailMap=null}

 document.getElementById("detailContent").innerHTML=`
  <img class="modal-main-image" src="${esc(businessImage(b))}" alt="${esc(b.name)}">
  <h2>${esc(b.name)}</h2>
  ${statusBadge(b.status)}
  <p><strong>Owner:</strong> ${esc(b.ownerName)}</p>
  <p><strong>Category:</strong> ${esc(b.category)}</p>
  <p><strong>Location:</strong> ${esc(b.address)}, ${esc(b.municipality)}</p>
  <p><strong>Description:</strong> ${esc(b.description)}</p>
  <p><strong>Phone:</strong> ${esc(b.phone||"Not provided")}</p>
  <p><strong>Email:</strong> ${esc(b.email||"Not provided")}</p>
  <p><strong>Operating Hours:</strong> ${esc(b.hours||"Not provided")}</p>
  <p><strong>Promotion:</strong> ${esc(b.promotion||"None")}</p>

  <h3>Products & Services</h3>
  <div class="detail-tags">
   ${(b.products||[]).map(p=>`<span>${esc(p.name)} ${p.price!==""?"₱"+esc(p.price):""}</span>`).join("")||"No products provided"}
  </div>

  <h3>Submitted Map Location</h3>
  <div id="detailMap" class="detail-map"></div>

  <div class="detail-actions">
   <button onclick="closeModal();reviewBusiness('${esc(b.id)}','approved')">✓ Approve</button>
   <button onclick="closeModal();reviewBusiness('${esc(b.id)}','rejected')">× Reject</button>
  </div>
 `;

 document.getElementById("detailModal").classList.remove("hidden");
 setTimeout(()=>openDetailMap(b,false,true),80);
}

function reviewBusiness(id,status){
 if(!isAdmin())return;
 if(!["approved","rejected"].includes(status))return;

 const data=allBusinesses();
 const b=data.find(x=>x.id===id);
 if(!b)return;

 let note="";

 if(status==="rejected"){
  const response=prompt("Reason for rejection (shown to business owner):","Please correct your business information.");
  if(response===null)return;
  note=response.trim().slice(0,300)||"Please correct your business information.";
 }else{
  if(!confirm("Approve this business for public display?"))return;
 }

 b.status=status;
 b.reviewNote=note;
 b.reviewedAt=new Date().toISOString();

 if(!saveBusinesses(data))return;

 renderAdminDashboard();
 renderBusinesses();
}


/* =====================================
   TOURIST BOOKING REQUESTS (LOCAL DEMO)
   Real bookings require a secure backend,
   verified providers, and availability.
===================================== */
let pendingBooking=null;
function touristAccounts(){return getStored("mcgDemoAccounts");}
function touristRequests(){return getStored("tsiBookingRequests");}
function closeBookingModal(){document.getElementById("bookingModal").classList.add("hidden");}
function openBooking(kind,id){
 const item=kind==="stay"?stays.find(x=>x.id===id):kind==="business"?allBusinesses().find(x=>x.id===id&&x.status==="approved"):activities[id];
 if(!item)return;
 if(!isTourist()){
  pendingBooking={kind,id};
  closeModal();
  closeBookingModal();
  showPage("signin");
  showFormMessage("signinMessage","Sign in with a tourist account to request a booking. New here? Select Create an account, then Tourist.");
  return;
 }
 pendingBooking=null;
 closeModal();
 const isStay=kind==="stay"||(kind==="business"&&item.category==="Accommodation");
 const today=new Date();today.setMinutes(today.getMinutes()-today.getTimezoneOffset());
 const min=today.toISOString().slice(0,10);
 document.getElementById("bookingFormContent").innerHTML=`
  <h2>📅 Request ${isStay?"Accommodation":kind==="business"?"Business Service":"Activity"}</h2>
  <p><strong>${esc(item.name)}</strong> · ${esc(item.location)}, Catanduanes</p>
  <p class="booking-hint">This is a local prototype request, not a confirmed booking. No payment is collected. The request is only visible to a demo owner when using the same browser and linked business.</p>
  <form id="touristBookingForm" class="booking-panel">
   <div class="booking-layout">
    <div><label>${isStay?"CHECK-IN":"VISIT DATE"}</label><input name="start" type="date" min="${min}" required></div>
    <div><label>${isStay?"CHECK-OUT":"PREFERRED TIME"}</label>${isStay?`<input name="end" type="date" min="${min}" required>`:`<input name="time" type="time" required>`}</div>
    <div><label>NUMBER OF GUESTS</label><input name="guests" type="number" min="1" max="20" value="2" required></div>
    <div><label>CONTACT PHONE (OPTIONAL)</label><input name="phone" type="tel" maxlength="25" placeholder="Demo contact only"></div>
   </div>
   <label>ADDITIONAL REQUEST (OPTIONAL)</label><textarea name="notes" maxlength="300" placeholder="Special requests"></textarea>
   <button class="pink-btn" type="submit">Submit Demo Request</button>
  </form>`;
 document.getElementById("bookingModal").classList.remove("hidden");
 document.getElementById("touristBookingForm").addEventListener("submit",e=>{
  e.preventDefault();
  if(!isTourist()){closeBookingModal();showPage("signin");return;}
  const f=new FormData(e.currentTarget),start=String(f.get("start")),end=isStay?String(f.get("end")):null;
  const localToday=new Date();localToday.setMinutes(localToday.getMinutes()-localToday.getTimezoneOffset());
  if(start<localToday.toISOString().slice(0,10)){alert("Please choose a future date.");return;}
  if(isStay&&end<=start){alert("Check-out must be after check-in.");return;}
  const requests=touristRequests();
  requests.push({id:"REQ-"+Date.now()+"-"+Math.random().toString(36).slice(2,6),touristId:getSession().id,touristName:getSession().name,kind,itemId:id,itemName:item.name,ownerId:kind==="business"?item.ownerId:null,businessId:kind==="business"?item.id:null,start,end,time:!isStay?String(f.get("time")):null,guests:Number(f.get("guests")),phone:String(f.get("phone")).slice(0,25),notes:String(f.get("notes")).slice(0,300),status:"pending",createdAt:new Date().toISOString()});
  if(!setStored("tsiBookingRequests",requests))return;
  closeBookingModal();showPage("touristBookings");
 });
}
function renderTouristBookings(){
 if(!isTourist())return;
 const user=getSession(),list=touristRequests().filter(r=>r.touristId===user.id).reverse();
 document.getElementById("touristWelcome").textContent="Welcome, "+user.name;
 document.getElementById("touristBookingList").innerHTML=list.length?list.map(r=>`
 <article class="booking-record"><strong>${esc(r.itemName)}</strong> <span class="status-pill status-pending">${esc(String(r.status||"pending").toUpperCase())} — DEMO ONLY</span>
 <p>${esc(r.kind==="stay"?"Accommodation":r.kind==="business"?"Business Service":"Activity")} · ${esc(r.start)} ${r.end?"to "+esc(r.end):"at "+esc(r.time||"")} · ${Number(r.guests)} guest(s)</p>
 <p>Request ID: ${esc(r.id)}</p><button class="outline-btn" onclick="cancelTouristBooking('${esc(r.id)}')">Delete Demo Request</button></article>`).join(""):
 '<div class="booking-panel"><h3>No booking requests yet</h3><p>Explore stays or activities to try the booking request demonstration.</p></div>';
}
function cancelTouristBooking(id){
 if(!isTourist()||!confirm("Delete this local demo request?"))return;
 const data=touristRequests().filter(r=>!(r.id===id&&r.touristId===getSession().id));
 if(setStored("tsiBookingRequests",data))renderTouristBookings();
}
document.getElementById("touristRegisterForm").addEventListener("submit",function(e){
 e.preventDefault();
 const name=document.getElementById("touristRegName").value.trim(),email=document.getElementById("touristRegEmail").value.trim().toLowerCase(),password=document.getElementById("touristRegPassword").value;
 if(name.length<2||password.length<6){showFormMessage("touristRegisterMessage","Enter a name and a demo password of at least 6 characters.");return;}
 if(email==="admin@mycatanduanesguide.demo"||touristAccounts().some(a=>a.email===email)){showFormMessage("touristRegisterMessage","This email is already in use.");return;}
 const account={id:"tourist_"+Date.now()+"_"+Math.random().toString(36).slice(2,8),name,email,password,role:"tourist"};
 if(!setStored("mcgDemoAccounts",[...touristAccounts(),account]))return;
 sessionStorage.setItem("mcgSession",JSON.stringify({id:account.id,name,email,role:"tourist"}));
 this.reset();
 if(pendingBooking){const next=pendingBooking;pendingBooking=null;openBooking(next.kind,next.id);}else showPage("touristBookings");
 updateNav();
});


/* OWNER PERFORMANCE + RESERVATION MANAGEMENT — LOCAL PROTOTYPE */
function ownerLinkedBookings(){
 const owned=new Set(ownerBusinesses().map(b=>b.id));
 return touristRequests().filter(r=>r.businessId&&owned.has(r.businessId)&&r.ownerId===getSession()?.id);
}
function renderOwnerBookingPanel(){
 const target=document.getElementById("ownerBookingList");if(!target||!isOwner())return;
 const list=ownerLinkedBookings().slice().reverse();
 const pending=list.filter(r=>r.status==="pending").length;
 document.getElementById("ownerPendingCount").textContent=pending?"("+pending+")":"";
 target.innerHTML=`<div class="owner-warning">Prototype only: bookings are stored locally in this browser. A different device or browser will not see them. Real customer reservations require a secure shared backend.</div>`+
 (list.length?list.map(r=>`<div class="owner-booking-item"><strong>${esc(r.itemName)}</strong> ${statusBadge(r.status==="confirmed"?"approved":r.status==="declined"?"rejected":"pending")}
 <p>Guest: ${esc(r.touristName||"Demo tourist")} • ${Number(r.guests)||1} guest(s)</p>
 <p>Date: ${esc(r.start||"")} ${r.end?"– "+esc(r.end):r.time?"at "+esc(r.time):""} • Phone: ${esc(r.phone||"Not provided")}</p>
 <p>Request: ${esc(r.id)} • Notes: ${esc(r.notes||"None")}</p>
 <div class="owner-booking-actions">${r.status==="pending"?`<button class="approve" onclick="updateOwnerBooking('${esc(r.id)}','confirmed')">Confirm</button><button class="reject" onclick="updateOwnerBooking('${esc(r.id)}','declined')">Decline</button>`:""}</div></div>`).join(""):'<p>No linked reservations yet. Approved businesses can receive demo requests through their public View Details page.</p>');
}
function updateOwnerBooking(id,status){
 if(!isOwner()||!["confirmed","declined"].includes(status))return;
 const list=touristRequests(),owned=new Set(ownerBusinesses().map(b=>b.id));
 const r=list.find(x=>x.id===id&&owned.has(x.businessId)&&x.ownerId===getSession().id&&x.status==="pending");
 if(!r)return;
 r.status=status;r.updatedAt=new Date().toISOString();
 if(setStored("tsiBookingRequests",list))renderOwnerDashboard();
}
function renderOwnerPerformance(items){
 const target=document.getElementById("ownerPerformanceContent");if(!target)return;
 const bookings=ownerLinkedBookings(), confirmed=bookings.filter(r=>r.status==="confirmed").length;
 const views=items.reduce((n,b)=>n+Number(b.stats?.views||0),0);
 const contacts=items.reduce((n,b)=>n+Number(b.stats?.contacts||0),0);
 const map=items.reduce((n,b)=>n+Number(b.stats?.mapViews||0),0);
 const vals=[views,contacts,map,bookings.length,confirmed],max=Math.max(1,...vals);
 const labels=["Profile views","Contact clicks","Map visits","Requests","Confirmed"];
 const categories=[...new Set(items.map(b=>b.category))];
 target.innerHTML=`<div class="owner-kpi-grid">
 <div class="owner-kpi"><small>Booking Requests</small><strong>${bookings.length}</strong></div>
 <div class="owner-kpi"><small>Confirmed Requests</small><strong>${confirmed}</strong></div>
 <div class="owner-kpi"><small>Profile Views</small><strong>${views}</strong></div>
 <div class="owner-kpi"><small>Revenue</small><strong>Not tracked</strong></div></div>
 <div class="owner-chart-grid"><div class="owner-chart-box"><h3>Business Engagement</h3>${labels.map((l,i)=>`<div class="owner-bar-row"><span>${l}</span><div class="owner-bar-track"><div class="owner-bar-fill" style="width:${100*vals[i]/max}%"></div></div><b>${vals[i]}</b></div>`).join("")}</div>
 <div class="owner-chart-box"><h3>My Business Categories</h3>${categories.length?categories.map(c=>`<div class="owner-bar-row"><span>${esc(c)}</span><div class="owner-bar-track"><div class="owner-bar-fill" style="width:${100*items.filter(b=>b.category===c).length/Math.max(1,items.length)}%"></div></div><b>${items.filter(b=>b.category===c).length}</b></div>`).join(""):"No businesses submitted yet."}</div></div>
 <div class="owner-warning">Figures reflect demonstration interactions recorded on this device, not verified customers, revenue, or business performance. Revenue and customer satisfaction are not collected by this prototype.</div>`;
}

/* =====================================
   EVENTS
===================================== */
document.getElementById("homeSearch").addEventListener("submit",function(e){
 e.preventDefault();

 showPage("destinations");

 document.getElementById("topCategory").value=
  document.getElementById("homeCategory").value;

 document.getElementById("topLocation").value=
  document.getElementById("homeLocation").value;

 applyDestinationFilters();
});

document.getElementById("destinationSearch").addEventListener("input",applyDestinationFilters);
document.getElementById("topCategory").addEventListener("change",applyDestinationFilters);
document.getElementById("topLocation").addEventListener("change",applyDestinationFilters);

document.getElementById("staySearch").addEventListener("input",applyStayFilters);
document.getElementById("stayLocation").addEventListener("change",applyStayFilters);
document.getElementById("staySort").addEventListener("change",applyStayFilters);

document.querySelectorAll('[name="priceFilter"],[name="amenity"]').forEach(x=>
 x.addEventListener("change",applyStayFilters)
);

document.querySelectorAll("[data-stay-type]").forEach(b=>
 b.addEventListener("click",()=>selectStayType(b.dataset.stayType))
);

document.getElementById("businessSearch").addEventListener("input",renderBusinesses);
document.getElementById("businessCategoryFilter").addEventListener("change",renderBusinesses);
document.getElementById("businessLocationFilter").addEventListener("change",renderBusinesses);

document.getElementById("menuBtn").addEventListener("click",()=>{
 const nav=document.getElementById("navLinks");
 const open=nav.classList.toggle("open");
 document.getElementById("menuBtn").setAttribute("aria-expanded",String(open));
 document.getElementById("menuBtn").textContent=open?"✕":"☰";
});

document.getElementById("bookingModal").addEventListener("click",e=>{if(e.target.id==="bookingModal")closeBookingModal();});
document.getElementById("detailModal").addEventListener("click",e=>{
 if(e.target.id==="detailModal")closeModal();
});

document.addEventListener("keydown",e=>{
 if(e.key==="Escape"){closeModal();closeBookingModal();}
});

/* =====================================
   INITIALIZE
===================================== */
renderDestinationSidebar();
renderStaySidebar();
renderDestinations();
renderStays();
renderOtherPages();
renderBusinesses();

document.getElementById("homeDestinations").innerHTML=
 destinations.slice(0,6).map(destinationCard).join("");

document.getElementById("homeStays").innerHTML=
 stays.slice(0,3).map(stayCard).join("");

document.getElementById("year").textContent=new Date().getFullYear();

const today=new Date();
document.getElementById("travelDate").min=
 new Date(today.getTime()-today.getTimezoneOffset()*60000)
 .toISOString().split("T")[0];

const initial=location.hash.replace("#","");
showPage(initial||"home");
