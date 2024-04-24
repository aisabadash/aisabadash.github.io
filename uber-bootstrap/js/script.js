/*
window.addEventListener('DOMContentLoaded', () => {
   const menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu__item'),
      hamburger = document.querySelector('.hamburger');


   hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
   });

   menuItem.forEach(item => {
      item.addEventListener('click', () => {
         hamburger.classList.toggle('hamburger_active');
         menu.classList.toggle('menu_active');
      })
   })
});
*/

// VERSION 1
// const hamburger = document.querySelector('.hamburger');
// const menu = document.querySelector('.menu');

// if (hamburger) {
//    hamburger.addEventListener("click", function (e) {
//       document.body.classList.toggle('body_lock');
//       hamburger.classList.toggle('hamburger_active');
//       menu.classList.toggle('menu_active');
//    });
// }

// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

// if (menuLinks.length > 0) {
//    menuLinks.forEach(menuLink => {
//       menuLink.addEventListener("click", onMenuLinkClick);
//    });

//    function onMenuLinkClick(e) {
//       const menuLink = e.target;
//       if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//          const gotoBlock = document.querySelector(menuLink.dataset.goto);
//          const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.nav').offsetHeight;

//          if (hamburger.classList.contains('hamburger_active')) {
//             hamburger.classList.remove('hamburger_active');
//             menu.classList.remove('menu_active');
//             document.body.classList.remove('body_lock');
//          }

//          window.scrollTo({
//             top: gotoBlockValue,
//             behavior: "smooth"
//          });
//          e.preventDefault();
//       }
//    }
// }

// const navLinkEls = document.querySelectorAll('.menu__link');
// const sectionEls = document.querySelectorAll('.section');

// let currentSection = 'section_1';
// window.addEventListener('scroll', () => {
//    sectionEls.forEach(sectionEl => {
//       if (window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 3)) {
//          currentSection = sectionEl.id;
//       }
//    });

//    navLinkEls.forEach(navLinkEl => {
//       if (navLinkEl.href.includes(currentSection)) {
//          document.querySelector('.menu__link_active').classList.remove('menu__link_active');
//          navLinkEl.classList.add('menu__link_active');
//       }
//    });
// });



//VERSION 2
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

if (hamburger) {
   hamburger.addEventListener("click", function (e) {
      document.body.classList.toggle('body_lock');
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
   });

   const menuItem = document.querySelectorAll('.menu__item');
   menuItem.forEach(item => {
      item.addEventListener('click', () => {
         hamburger.classList.toggle('hamburger_active');
         menu.classList.toggle('menu_active');
         document.body.classList.toggle('body_lock');
      });
   });
}

const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         // console.log('entry.isIntersecting', entry.target.id);
         document.querySelectorAll('.menu__link').forEach((link) => {
            link.classList.toggle(
               'menu__link_active',
               link.getAttribute('href').replace('#', '') === entry.target.id
            );
         });
      }
   });
}, {
   threshold: 0.2,
});
document.querySelectorAll('.section').forEach(
   (section) => observer.observe(section),
);

document.querySelector('.menu').addEventListener('click', (event) => {
   if (event.target.classList.contains('menu__link')) {
      event.preventDefault();
      const id = event.target.getAttribute('href').replace('#', '');

      // console.log("cliked");
      window.scrollTo({
         top: document.getElementById(id).offsetTop,
         behavior: 'smooth',
      });
   }
});



