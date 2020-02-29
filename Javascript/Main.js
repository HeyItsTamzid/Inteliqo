// NAVBAR STARTS
// const scroll = new SmoothScroll('a[href*="#"]', {
//   easing: 'easeInOutQuint',
//   speed: 700,
//   speedAsDuration: true,
//   clip: true,
//   offset: 10 
// });

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navigation-list');
const navLinks = document.querySelectorAll('.nav-links');
const overlay = document.querySelector('#overlay');
const socialLinks = document.querySelector('#social-links');
let opened = false;

function addActive(element) {
  element.classList.add('active');
}
function removeActive(element) {
  element.classList.remove('active');
}

hamburger.addEventListener('click', () => {
  if(!opened) {
    addActive(hamburger);
    addActive(navList);
    addActive(socialLinks);
    for(let i = 0; i < navLinks.length; i++) {
      addActive(navLinks[i]);
     }
    overlay.classList.add('nav-is-active');
    overlay.style.zIndex = '1';
    opened = true;
   } else {
      removeActive(hamburger);
      removeActive(navList);
      removeActive(socialLinks);
      for(let i = 0; i < navLinks.length; i++) {
        removeActive(navLinks[i]);
      }
      overlay.classList.remove('nav-is-active');
      overlay.style.zIndex = '-1';
      navList.classList.add('close-nav');
      opened = false;
    }
});

navList.addEventListener('click', (event) => {
  if(event.target.tagName === 'A') {
    removeActive(hamburger);
    removeActive(navList);
    removeActive(socialLinks);
    overlay.classList.remove('nav-is-active');
    for(let i = 0; i < navLinks.length; i++) {
      removeActive(navLinks[i]);
    }
    overlay.style.zIndex = '-1';
    navList.classList.add('close-nav');
  }
});
// NAVBAR ENDS
