setTimeout(()=>{
 document.querySelector('.introvedio').style.display='none';
 document.querySelector('.main').style.opacity='1';

},7000)
const toggleBtn = document.getElementById('toggle');
const body = document.querySelector('#main1');
const port = document.querySelector('.por');
const probig = document.querySelector('.probig');
const nav = document.querySelector('.nav');
const about = document.querySelector('.about');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card21 = document.querySelector('#card21');
const card31 = document.querySelector('#card31');
const p2 = document.querySelector('.p2');
const h2 = document.querySelector('.h22');
const contact1 = document.querySelector('.contact');
const con = document.querySelector('.con-box');
const h111 = document.querySelector('.h111');
const pro = document.querySelector('.projects');
let mode = false;

toggleBtn.addEventListener('click', ()=>{
if(!mode){
 // DARK MODE ACTIVE
 toggleBtn.textContent = 'Dark Mode';
 toggleBtn.style.backgroundColor = 'white';
 toggleBtn.style.color = 'black';
con.style.boxShadow='2px 2px 10px rgba(248, 245, 245, 1)'
card2.style.boxShadow='2px 2px 10px rgba(248, 245, 245, 1)'
card3.style.boxShadow='4px 3px 10px rgba(248, 245, 245, 1)'
card21.style.boxShadow='4px 3px 10px rgba(248, 245, 245, 1)'
card31.style.boxShadow='4px 3px 10px rgba(248, 245, 245, 1)'
 body.style.backgroundColor = '#121212';
 about.style.backgroundColor = '#121212';
 contact1.style.backgroundColor = '#121212';
 probig.style.backgroundColor = '#121212';
 pro.style.backgroundColor = '#121212';
h111.style.color='rgb(35, 209, 191)';
p2.style.color='rgb(35, 209, 191)';

 about.style.color = 'white';
 h2.style.color ='rgb(35, 209, 191)';
 nav.style.backgroundColor = 'rgba(246, 241, 241, 0.86)';
 port.style.setProperty("-webkit-text-stroke", "1.6px rgba(37, 239, 219, 0.83)");
 body.style.color = 'white';

 mode = true;   // ✅ CHANGE HERE
}
else{
 // LIGHT MODE ACTIVE
 toggleBtn.textContent = 'Light Mode';
 toggleBtn.style.backgroundColor = '';
 toggleBtn.style.color = '';
 h2.style.color ="";
 con.style.boxShadow=''
 about.style.backgroundColor = '';
 card2.style.boxShadow = '';
 card3.style.boxShadow = '';
 card21.style.boxShadow = '';
 card31.style.boxShadow = '';
 probig.style.backgroundColor = '';
 about.style.color = '';
 h111.style.color='';
 p2.style.color='';
 contact1.style.backgroundColor='';
 pro.style.backgroundColor='';
 body.style.backgroundColor = '';
 nav.style.backgroundColor = "";
 port.style.setProperty("-webkit-text-stroke", "1.6px rgba(59, 61, 61, 0.831)");
 body.style.color = '';

 mode = false;   // ✅ CHANGE HERE
}
});


const circleGroup = document.querySelector(".circlegroup");

const circles = document.querySelectorAll(".circle");
circleGroup.addEventListener("mouseenter", () => {
  circleGroup.classList.add("spread");

});
circleGroup.addEventListener("mouseleave", () => {
  circleGroup.classList.remove("spread");
});


           // hide when leaving the div
//form summition

