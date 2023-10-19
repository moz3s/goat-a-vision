const menu = document.getElementById("menu");
const cl = document.getElementById('close');
let clickCount = 0;
function menuOpening(){
   if (clickCount%2 === 0){
    menu.classList.remove('menu1');
    menu.classList.add('menu2');
    cl.classList.remove('close1');
    cl.classList.add('close2');
   }
   else{
    menu.classList.remove('menu2');
    menu.classList.add('menu1');
    cl.classList.add('close1');
    cl.classList.remove('close2');
   }
   clickCount++;
}
cl.addEventListener("click", menuOpening);