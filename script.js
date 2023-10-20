const menu = document.getElementById("menu");
const cl = document.getElementById('close');
let clickCount = 0;
function handleScreenSize() {
    if (window.innerWidth > 500) {
        function menuOpening() {
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
        cl.addEventListener("click", menuOpening);
    } else {
        function menuOpening() {
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
        cl.addEventListener("click", menuOpening);
    }
}

// Az eseménykezelő hozzárendelése a képernyő méretének változásához
window.addEventListener('resize', handleScreenSize);

// Az eseménykezelő kezdeti meghívása az oldal betöltésekor
handleScreenSize();