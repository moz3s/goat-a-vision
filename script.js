const menu = document.getElementById("menu");
const op = document.getElementById('open')
const openMenu = () => {
    menu.style.transform = "translate(0%)";
    op.style.display = 'none';
}

const closeMenu = () => {
    menu.style.transform = "translateX(-100%)";
    op.style.display = 'block';
}