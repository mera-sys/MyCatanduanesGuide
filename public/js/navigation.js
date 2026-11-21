
/* =====================================
   TOURIST SAFETY & LIVE NAVIGATION
   OpenStreetMap / Overpass + browser GPS + OSRM
   Prototype: external public services may be unavailable.
===================================== */
let touristSpot=null;
let touristWatchId=null;
let touristUserMarker=null;
let touristRouteLine=null;
let touristEmergencyLayer=null;
let touristRequestToken=0;
let touristLastRouteAt=0;
let touristLastRoutePoint=null;
let touristSteps=[];
let touristStepIndex=0;
let touristVoiceEnabled=false;
let touristLastSpokenIndex=-1;
let touristCurrentPosition=null;

function stopTouristNavigation(){
 touristRequestToken++;
 if(touristWatchId!==null && navigator.geolocation){
  navigator.geolocation.clearWatch(touristWatchId);
 }
 touristWatchId=null;
 touristSpot=null;
 touristUserMarker=null;
 touristRouteLine=null;
 touristEmergencyLayer=null;
 touristLastRoutePoint=null;
 touristLastRouteAt=0;
 touristSteps=[];
 touristStepIndex=0;
 touristCurrentPosition=null;
 touristLastSpokenIndex=-1;
 if('speechSynthesis' in window)window.speechSynthesis.cancel();
}
function touristDistanceKm(a,b,c,d){
 const rad=Math.PI/180;
 const h=Math.sin((c-a)*rad/2)**2+Math.cos(a*rad)*Math.cos(c*rad)*Math.sin((d-b)*rad/2)**2;
 return 12742*Math.asin(Math.min(1,Math.sqrt(h)));
}
function touristStatus(message){
 const el=document.getElementById('routeStatus');
 if(el)el.textContent=message;
}
function initializeTouristSafety(spot){
 stopTouristNavigation();
 touristSpot=spot;
 const token=touristRequestToken;
 fetchNearbyEmergency(spot,token);
}
async function fetchNearbyEmergency(spot,token){
 const target=document.getElementById('emergencyResults');
 if(!target)return;
 if(!Number.isFinite(Number(spot.lat))||!Number.isFinite(Number(spot.lng))){target.textContent='Destination coordinates are unavailable.';return;}
 const query=`[out:json][timeout:20];(nwr(around:15000,${Number(spot.lat)},${Number(spot.lng)})[amenity~"^(hospital|clinic|police|fire_station)$"];);out center;`;
 const controller=new AbortController();
 const timer=setTimeout(()=>controller.abort(),25000);
 try{
  const response=await fetch('https://overpass.kumi.systems/api/interpreter',{method:'POST',body:new URLSearchParams({data:query}),signal:controller.signal});
  if(!response.ok)throw new Error('Map service unavailable');
  const data=await response.json();
  if(token!==touristRequestToken||!document.getElementById('emergencyResults'))return;
  const places=(data.elements||[]).map(e=>({
   name:e.tags?.name||'Unnamed emergency facility',
   type:e.tags?.amenity||'service',
   phone:e.tags?.['contact:phone']||e.tags?.phone||'',
   lat:e.lat??e.center?.lat,lng:e.lon??e.center?.lon
  })).filter(e=>Number.isFinite(e.lat)&&Number.isFinite(e.lng))
  .map(e=>({...e,distance:touristDistanceKm(Number(spot.lat),Number(spot.lng),e.lat,e.lng)}))
  .sort((a,b)=>a.distance-b.distance).slice(0,10);
  if(!places.length){target.textContent='No mapped emergency facilities found within 15 km. This does not mean emergency services are unavailable. Call 911 in an emergency.';return;}
  touristEmergencyLayer=L.layerGroup().addTo(detailMap);
  const labels={hospital:'🏥 Hospital',clinic:'🩺 Clinic',police:'👮 Police station',fire_station:'🚒 Fire station'};
  target.innerHTML='';
  places.forEach(place=>{
   const item=document.createElement('div');item.className='emergency-entry';
   const heading=document.createElement('strong');heading.textContent=`${labels[place.type]||'Emergency service'} — ${place.name}`;item.appendChild(heading);
   const distance=document.createElement('span');distance.textContent=`${place.distance.toFixed(1)} km straight-line distance from the tourist spot`;item.appendChild(distance);
   const number=place.phone.trim();
   const phone=document.createElement('small');
   if(number){
    phone.append('Listed phone: ');
    const a=document.createElement('a');a.href='tel:'+number.replace(/[^+\d]/g,'');a.textContent=number;phone.appendChild(a);
   }else phone.textContent='Phone number not available in map data';
   item.appendChild(phone);
   const directions=document.createElement('a');directions.target='_blank';directions.rel='noopener noreferrer';
   directions.href=`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.lat+','+place.lng)}`;
   directions.textContent='Directions to facility';item.appendChild(directions);
   target.appendChild(item);
   L.circleMarker([place.lat,place.lng],{radius:8,color:'#c92b41',fillColor:'#f34c65',fillOpacity:.9})
    .bindPopup(`<strong>${esc(place.name)}</strong><br>${esc(labels[place.type]||'Emergency service')}`)
    .addTo(touristEmergencyLayer);
  });
 }catch(e){
  if(token===touristRequestToken&&document.getElementById('emergencyResults')){
   target.textContent='Nearby emergency listings could not be loaded. Check your connection and use official local emergency contacts. Call 911 in an emergency.';
  }
 }finally{clearTimeout(timer)}
}
function touristInstruction(step){
 const m=step.maneuver||{};
 const road=step.name ? ` onto ${step.name}` : '';
 const type=m.type||'';
 const mod=m.modifier||'';
 if(type==='arrive')return 'You have arrived at your destination';
 if(type==='depart')return `Start driving${road}`;
 if(type==='roundabout'||type==='rotary')return `Enter the roundabout${m.exit?`, take exit ${m.exit}`:''}${road}`;
 if(type==='merge')return `Merge ${mod||'ahead'}${road}`;
 if(type==='fork')return `Keep ${mod||'ahead'}${road}`;
 if(type==='on ramp')return `Take the ramp ${mod||''}${road}`;
 if(type==='off ramp')return `Take the exit ${mod||''}${road}`;
 if(type==='end of road')return `At the end of the road, turn ${mod||'as indicated'}${road}`;
 if(type==='continue'||type==='new name'||type==='notification')return `Continue${road}`;
 if(type==='turn')return `Turn ${mod||'ahead'}${road}`;
 if(type==='use lane')return `Use the ${mod||'indicated'} lane${road}`;
 return `Proceed ${mod||'ahead'}${road}`;
}
function touristSpeak(message){
 if(!touristVoiceEnabled||!('speechSynthesis' in window))return;
 window.speechSynthesis.cancel();
 const utterance=new SpeechSynthesisUtterance(message);
 utterance.lang='en-US';utterance.rate=.95;
 window.speechSynthesis.speak(utterance);
}
function toggleTouristVoice(){
 touristVoiceEnabled=!touristVoiceEnabled;
 const btn=document.getElementById('touristVoiceBtn');
 if(btn)btn.textContent=touristVoiceEnabled?'🔊 Voice On':'🔇 Voice Off';
 if(touristVoiceEnabled&&touristSteps[touristStepIndex])touristSpeak(touristInstruction(touristSteps[touristStepIndex]));
 else if('speechSynthesis' in window)window.speechSynthesis.cancel();
}
function touristShowStep(index,announce=false){
 if(!touristSteps.length)return;
 touristStepIndex=Math.max(0,Math.min(touristSteps.length-1,index));
 const step=touristSteps[touristStepIndex];
 const heading=document.getElementById('touristTurnInstruction');
 const detail=document.getElementById('touristTurnDistance');
 const progress=document.getElementById('touristTurnProgress');
 const instruction=touristInstruction(step);
 if(heading)heading.textContent=instruction;
 if(detail)detail.textContent=`Road segment: ${(step.distance/1000).toFixed(2)} km · ${Math.max(1,Math.round(step.duration/60))} min estimated`;
 if(progress)progress.textContent=`Instruction ${touristStepIndex+1} of ${touristSteps.length}`;
 const prev=document.getElementById('touristPrevTurn');
 const next=document.getElementById('touristNextTurn');
 if(prev)prev.disabled=touristStepIndex===0;
 if(next)next.disabled=touristStepIndex===touristSteps.length-1;
 if(announce&&touristLastSpokenIndex!==touristStepIndex){
  touristSpeak(instruction);touristLastSpokenIndex=touristStepIndex;
 }
}
function touristUpdateProgress(lat,lng){
 if(!touristSteps.length)return;
 // Advance when close to the next maneuver; avoid moving backward due to GPS jitter.
 for(let i=touristStepIndex+1;i<Math.min(touristSteps.length,touristStepIndex+3);i++){
  const xy=touristSteps[i].maneuver?.location;
  if(!xy)continue;
  const meters=touristDistanceKm(lat,lng,xy[1],xy[0])*1000;
  if(meters<35)touristShowStep(i,true);
 }
 const next=touristSteps[Math.min(touristStepIndex+1,touristSteps.length-1)];
 const xy=next?.maneuver?.location;
 const el=document.getElementById('touristNextDistance');
 if(el&&xy)el.textContent=`Next maneuver: ~${Math.round(touristDistanceKm(lat,lng,xy[1],xy[0])*1000)} m straight-line distance`;
}
function startTouristNavigation(){
 if(!touristSpot||!detailMap)return;
 if(!navigator.geolocation){touristStatus('This browser does not support GPS location. You can use the Google Maps link.');return;}
 if(!window.isSecureContext){touristStatus('GPS requires HTTPS or localhost. Open the hosted HTTPS site on your phone.');return;}
 if(touristWatchId!==null)navigator.geolocation.clearWatch(touristWatchId);
 touristStatus('Requesting GPS permission…');
 const token=touristRequestToken;
 touristWatchId=navigator.geolocation.watchPosition(async position=>{
  if(token!==touristRequestToken||!detailMap||!touristSpot)return;
  const lat=position.coords.latitude,lng=position.coords.longitude;
  touristCurrentPosition={lat,lng};
  touristUpdateProgress(lat,lng);
  if(!touristUserMarker){
   touristUserMarker=L.circleMarker([lat,lng],{radius:9,color:'#fff',weight:3,fillColor:'#1678ef',fillOpacity:1}).addTo(detailMap).bindPopup('Your current GPS location');
  }else touristUserMarker.setLatLng([lat,lng]);
  const spot=touristSpot;
  const now=Date.now();
  if(touristLastRoutePoint&&now-touristLastRouteAt<30000&&touristDistanceKm(lat,lng,...touristLastRoutePoint)<.08)return;
  touristLastRouteAt=now;touristLastRoutePoint=[lat,lng];
  touristStatus('GPS found. Calculating driving route…');
  try{
   const url=`https://router.project-osrm.org/route/v1/driving/${lng},${lat};${Number(spot.lng)},${Number(spot.lat)}?overview=full&geometries=geojson&steps=true`;
   const res=await fetch(url);if(!res.ok)throw Error('Route service unavailable');
   const json=await res.json();
   if(token!==touristRequestToken||!detailMap)return;
   if(json.code!=='Ok'||!json.routes?.length)throw Error('No road route found');
   const route=json.routes[0];
   touristSteps=(route.legs||[]).flatMap(leg=>leg.steps||[]);
   touristStepIndex=0;
   touristLastSpokenIndex=-1;
   const panel=document.getElementById('touristTurnPanel');
   if(panel)panel.classList.remove('hidden');
   touristShowStep(0,true);
   if(touristRouteLine)detailMap.removeLayer(touristRouteLine);
   touristRouteLine=L.geoJSON(route.geometry,{style:{color:'#1769e0',weight:5,opacity:.85}}).addTo(detailMap);
   detailMap.fitBounds(touristRouteLine.getBounds().pad(.18));
   touristStatus(`Driving route: ${(route.distance/1000).toFixed(1)} km · approximately ${Math.round(route.duration/60)} minutes. Estimates only; roads, ferries and access may differ.`);
  }catch(err){
   if(token!==touristRequestToken||!detailMap)return;
   const straight=touristDistanceKm(lat,lng,Number(spot.lat),Number(spot.lng));
   detailMap.fitBounds([[lat,lng],[Number(spot.lat),Number(spot.lng)]],{padding:[35,35]});
   const panel=document.getElementById('touristTurnPanel');if(panel)panel.classList.add('hidden');
   touristStatus(`GPS found. Road route unavailable (${err.message}). Destination is about ${straight.toFixed(1)} km away in a straight line. Use Google Maps for directions.`);
  }
 },err=>{
  const messages={1:'Location permission denied. Enable location access or use Google Maps.',2:'GPS location unavailable. Try outdoors or check device location settings.',3:'GPS timed out. Try again.'};
  touristStatus(messages[err.code]||'Could not access your location.');
 },{enableHighAccuracy:true,maximumAge:10000,timeout:20000});
}

