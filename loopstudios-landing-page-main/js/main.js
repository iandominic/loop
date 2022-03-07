/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 100,
    // reset: true
})

sr.reveal(`.nav__logo`,{delay: 300})
sr.reveal(`.nav__toggle`,{delay: 300})
sr.reveal(`.home__content`,{delay: 400})
sr.reveal(`.creations_content`,{delay: 400})
sr.reveal(`.about__img`,{origin: 'left', interval: 100})
sr.reveal(`.content__text`,{origin: 'bottom'})
sr.reveal(`.footer__logo, .footer__content`,{origin: 'top', interval: 100})


/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('side-nav'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.style.visibility = "visible"
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.style.visibility = "hidden"
    })
}