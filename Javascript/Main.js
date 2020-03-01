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


// Contact us form starts
const
placeholders = document.querySelectorAll('.styled-input__placeholder-text'),
inputs = document.querySelectorAll('.styled-input__input');

placeholders.forEach(function (el, i) {
  let value = el.innerText,
  html = '';
  for (let w of value) {
    if (!value) value = '&nbsp;';
    html += `<span class="letter">${w}</span>`;
  }
  el.innerHTML = html;
});

inputs.forEach(function (el) {
  let parent = el.parentNode;
  el.addEventListener('focus', function () {
    parent.classList.add('filled');
    placeholderAnimationIn(parent, true);
  }, false);
  el.addEventListener('blur', function () {
    if (el.value.length) return;
    parent.classList.remove('filled');
    placeholderAnimationIn(parent, false);
  }, false);
});

function placeholderAnimationIn(parent, action) {
  let act = action ? 'add' : 'remove';
  let letters = parent.querySelectorAll('.letter');
  letters = [].slice.call(letters, 0);
  if (!action) letters = letters.reverse();
  letters.forEach(function (el, i) {
    setTimeout(function () {
      let contains = parent.classList.contains('filled');
      if (action && !contains || !action && contains) return;
      el.classList[act]('active');
    }, 50 * i);
  });
}

setTimeout(function () {
  document.body.classList.add('on-start');
}, 100);

setTimeout(function () {
  document.body.classList.add('document-loaded');
}, 1800);
