import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import { getFunctions, httpsCallable } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-functions.js';
import { firebaseConfig } from './firebase-config.js';
const $=id=>document.getElementById(id);
const status=$('aiResultStatus'), authStatus=$('aiAuthStatus');
const configured=!Object.values(firebaseConfig).some(v=>String(v).startsWith('REPLACE_'));
let auth,callAI,currentUser=null;
if(configured){
 try{
  const app=initializeApp(firebaseConfig);auth=getAuth(app);
  callAI=httpsCallable(getFunctions(app,'asia-southeast1'),'travelAssistant');
  onAuthStateChanged(auth,user=>{currentUser=user;authStatus.textContent=user?`Signed in: ${user.email}`:'Sign in with Firebase to use the AI planner.';$('aiLogout').hidden=!user;$('aiLogin').hidden=!!user;$('aiSignup').hidden=!!user;$('aiEmail').hidden=!!user;$('aiPassword').hidden=!!user;});
 }catch(e){authStatus.textContent=`Firebase setup error: ${e.message}`;}
}else{authStatus.textContent='Configure public/js/firebase-config.js to activate Firebase AI.';}
const authAction=async mode=>{
 if(!auth)return alert('Configure Firebase first.');
 const email=$('aiEmail').value.trim(),password=$('aiPassword').value;
 try{if(mode==='signup')await createUserWithEmailAndPassword(auth,email,password);else await signInWithEmailAndPassword(auth,email,password);}catch(e){authStatus.textContent=`Sign-in error: ${e.message}`;}
};
$('aiLogin').addEventListener('click',()=>authAction('login'));
$('aiSignup').addEventListener('click',()=>authAction('signup'));
$('aiLogout').addEventListener('click',()=>auth&&signOut(auth));
function node(tag,text,cls){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=String(text);return e;}
function render(result){
 const answer=$('aiAnswer'),cards=$('aiSuggestions');answer.replaceChildren();cards.replaceChildren();
 answer.append(node('p',result.summary||'Here are your suggestions.'));
 for(const day of result.days||[]){const box=node('div',undefined,'ai-day');box.append(node('h3',`Day ${day.day}: ${day.title}`),node('p',day.plan));answer.append(box);}
 if(result.budgetNote)answer.append(node('p',`Budget note: ${result.budgetNote}`,'ai-muted'));
 if(result.disclaimer)answer.append(node('p',result.disclaimer,'ai-muted'));
 for(const item of result.matches||[]){
  const card=node('article',undefined,'ai-result-card');
  if(item.image){const img=node('img');img.src=item.image;img.alt=item.name;img.loading='lazy';card.append(img);}
  card.append(node('h3',item.name),node('p',`${item.kind==='destination'?'Destination':'Local business'} • ${item.location||'Catanduanes'}`),node('p',item.reason||''));
  const btn=node('button','View details');btn.type='button';btn.addEventListener('click',()=>{
   if(item.kind==='destination'&&typeof window.openDestination==='function')window.openDestination(Number(item.id));
   else if(item.kind==='business'&&typeof window.openBusiness==='function')window.openBusiness(item.id);
  });card.append(btn);cards.append(card);
 }
}
$('aiForm').addEventListener('submit',async e=>{
 e.preventDefault();if(!currentUser||!callAI){status.textContent='Please configure Firebase and sign in before using AI.';return;}
 const button=$('aiSubmit');button.disabled=true;status.textContent='Preparing your personalized itinerary…';
 try{
  const response=await callAI({prompt:$('aiPrompt').value.trim(),budget:Number($('aiBudget').value),days:Number($('aiDays').value),travelers:Number($('aiTravelers').value)});
  render(response.data);status.textContent='AI suggestions loaded. Select View details to explore matching website listings.';
 }catch(err){status.textContent=`Unable to generate suggestions: ${err.message}`;}
 finally{button.disabled=false;}
});
