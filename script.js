const menu = document.getElementById("menu");
const op = document.getElementById('open');
const cl = document.getElementById('close');
let clickCount = 0;
const body = document.querySelector("body");
function menuOpening(){
   if (clickCount%2 === 0){
    menu.style.transform = "translateX(-100%)";
    cl.style.transform = "translateX(30%)";
   }
   else{
    menu.style.transform = "translate(0%)";
    cl.style.transform = "translateX(0%)";
   }
   clickCount++;
}
cl.addEventListener("click", menuOpening);