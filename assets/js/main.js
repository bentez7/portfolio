/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== EXPERIENCE TABS ====================*/
const expTabs = document.querySelectorAll('[data-target]'),
    expContents = document.querySelectorAll('[data-content]')

expTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        expContents.forEach(content => {
            content.classList.remove('experience__content-active')
        })
        if (target) target.classList.add('experience__content-active')

        expTabs.forEach(t => {
            t.classList.remove('experience__active')
        })
        tab.classList.add('experience__active')
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.portfolio__container .swiper-button-next',
        prevEl: '.portfolio__container .swiper-button-prev',
    },
    pagination: {
        el: '.portfolio__container .swiper-pagination',
        clickable: true,
    },
});

/*==================== CREDENTIALS SWIPER ====================*/
let swiperCredentials = new Swiper('.credentials__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 32,
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination-credentials',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
    }
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,


    pagination: {
        el: '.swiper-pagination-testimonial',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: { slidesPerView: 2 },
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')
        const navTarget = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if(!navTarget) return

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            navTarget.classList.add('active-link')
        }else{
            navTarget.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*==================== VIEW-ONLY DOCUMENT VIEWER ====================*/
/* Certificates and reference letters are shown in a watermarked lightbox rather
   than linked as files, so there is no download target and no direct URL in the
   markup. Note this is a deterrent, not real protection: anything a browser can
   display, a determined visitor can capture. The watermark is what actually
   makes a captured copy hard to misuse. */
const docViewer = document.getElementById('doc-viewer'),
    docStage = document.getElementById('viewer-stage'),
    docTitle = document.getElementById('viewer-title')

let lastDocTrigger = null

function openDoc(src, title, trigger) {
    if (!docViewer) return
    lastDocTrigger = trigger || null
    docStage.style.backgroundImage = "url('" + src + "')"
    docTitle.textContent = title || 'Document'
    docViewer.hidden = false
    document.body.style.overflow = 'hidden'
    docViewer.querySelector('.viewer__close').focus()
}

function closeDoc() {
    if (!docViewer || docViewer.hidden) return
    docViewer.hidden = true
    docStage.style.backgroundImage = ''
    document.body.style.overflow = ''
    if (lastDocTrigger) lastDocTrigger.focus()
}

/* Delegated, because Swiper rebuilds its looped slide clones on resize and any
   listener bound straight to a clone would be thrown away with it. */
document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-doc]')
    if (trigger) {
        openDoc(trigger.dataset.doc, trigger.dataset.docTitle, trigger)
        return
    }
    if (e.target.closest('[data-viewer-close]')) closeDoc()
})

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDoc()
})

/* Keep focus inside the viewer while it is open. */
document.addEventListener('focusin', e => {
    if (docViewer && !docViewer.hidden && !docViewer.contains(e.target)) {
        docViewer.querySelector('.viewer__close').focus()
    }
})

/* Block the casual save routes on protected artwork: right-click menu,
   drag-to-desktop, and text selection. */
function guardProtected(e) {
    if (e.target.closest && e.target.closest('.protected')) e.preventDefault()
}
document.addEventListener('contextmenu', guardProtected)
document.addEventListener('dragstart', guardProtected)
