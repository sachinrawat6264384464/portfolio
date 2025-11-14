setTimeout(()=>{
 document.querySelector('.introvedio').style.display='none';
 document.querySelector('.main').style.opacity='1';

},1000)
const toggleBtn = document.getElementById('toggle');
const body = document.querySelector('#main1');
const port = document.querySelector('.por');
const nav = document.querySelector('.nav');
let mode = false;
toggleBtn.addEventListener('click', ()=>{
if(!mode){
 toggleBtn.textContent = 'Light Mode';
  toggleBtn.style.backgroundColor = '';
 toggleBtn.style.color = '';
 body.style.backgroundColor = 'rgb(249, 236, 236,1)';
 nav.style.backgroundColor = "";
        port.style.setProperty("-webkit-text-stroke", "1.6px rgba(118, 119, 119, 0.83)");
 
 body.style.color = 'black';
 mode = true;
}
else{
 toggleBtn.textContent = 'Dark Mode';
 toggleBtn.style.backgroundColor = 'white';
 toggleBtn.style.color = 'black';
    body.style.backgroundColor = '#121212';
    nav.style.backgroundColor = 'rgba(246, 241, 241, 0.86)';
      port.style.setProperty("-webkit-text-stroke", "1.6px rgba(241, 246, 246, 0.83)");
     
    body.style.color = 'white';
 mode = false;  }
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


