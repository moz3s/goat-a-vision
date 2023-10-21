const menu = document.getElementById("menu");
const cl = document.getElementById('close');
let clickCount = 0;
 function menuOpening(){
    if (window.innerWidth > 760){
        if (clickCount % 2 === 0) {
            // első kattintás
            menu.style.transform = "translateX(-100%)";
            cl.style.transform = "translateX(360%)";
        } else {
            // második kattintás
            menu.style.transform = "translateX(0%)";
            cl.style.transform = "translateX(0%)";
        }
        clickCount++;
    }
    else{
        if (clickCount % 2 === 0) {
            // első kattintás
            menu.style.transform = "translateX(0%)";
            cl.style.transform = "translateX(0%)";
        } else {
            // második kattintás
            menu.style.transform = "translateX(-100%)";
            cl.style.transform = "translateX(360%)";
        }
        clickCount++;
    }
 }
 cl.addEventListener("click", menuOpening);
