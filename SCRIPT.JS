let isMenuVisible = true;


const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', toggleMenu);


function toggleMenu() {
    
    isMenuVisible = !isMenuVisible;

    
    document.body.style.overflow = isMenuVisible ? 'hidden' : 'initial';

    
    menuContent.classList.toggle('on', isMenuVisible);
}

