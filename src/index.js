const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// IMAGES🙌
const logoImg = document.querySelector('#logo-img')
logoImg.src = siteContent.images['logo-img']

const ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent.images['cta-img']

const middleImg = document.querySelector('#middle-img')
middleImg.src = siteContent.images['accent-img']

// FOOTER LINK💕
const footerLink = document.querySelector('footer a')
footerLink.textContent = siteContent.footer['copyright']
footerLink.classList.add('bold')


// CONTACT😘😒
const contact = document.querySelector('section.contact')
// two ways of typing this 👇👇
// contact.children[0].textContent =siteContent.contact['contact-h4']
contact.querySelector('h4').textContent = siteContent.contact['contact-h4']
// another way of typing this👇👇
// contact.children[1].textContent =siteContent.contact['address']
contact.querySelector('p:nth-of-type(1)').textContent = siteContent.contact['address']
contact.querySelector('p:nth-of-type(2)').textContent = siteContent.contact['phone']
contact.querySelector('p:nth-of-type(3)').textContent = siteContent.contact['email']

// TAGS🤣

// CTA❤️
const ctaH1 = document.querySelector('.cta .cta-text h1')
ctaH1.textContent = siteContent.cta['h1']

const ctaButton = document.querySelector('.cta .cta-text button')
ctaButton.textContent = siteContent.cta['button']

// TOP CONTENT👌👌
const topContent = document.querySelector('.top-content')
topContent.querySelector('h4:nth-of-type(1)').textContent = siteContent["main-content"]['features-h4']
topContent.querySelector('p:nth-of-type(1)').textContent = siteContent["main-content"]['features-content']

topContent.children[1].children[0].textContent = siteContent["main-content"]['about-h4']
topContent.children[1].children[1].textContent = siteContent["main-content"]['about-content']

// BOTTOM CONTENT😂😂
const bottomContent = document.querySelector('.bottom-content')
bottomContent.querySelector('h4:nth-of-type(1)').textContent = siteContent["main-content"]['services-h4']
bottomContent.querySelector('p:nth-of-type(1)').textContent = siteContent["main-content"]['services-content']

bottomContent.children[1].children[0].textContent = siteContent["main-content"]['product-h4']
bottomContent.children[1].children[1].textContent = siteContent["main-content"]['product-content']

bottomContent.children[2].children[0].textContent = siteContent["main-content"]['vision-h4']
bottomContent.children[2].children[1].textContent = siteContent["main-content"]['vision-content']

// NAV LINKS 😒😒
const navLinks = document.querySelector('nav')
console.log(navLinks)
navLinks.children[0].textContent = siteContent.nav['nav-item-1']
navLinks.children[0].classList.add('italic')
navLinks.children[1].textContent = siteContent.nav['nav-item-2']
navLinks.children[1].classList.add('italic')
navLinks.children[2].textContent = siteContent.nav['nav-item-3']
navLinks.children[2].classList.add('italic')
navLinks.children[3].textContent = siteContent.nav['nav-item-4']
navLinks.children[3].classList.add('italic')
navLinks.children[4].textContent = siteContent.nav['nav-item-5']
navLinks.children[4].classList.add('italic')
navLinks.children[5].textContent = siteContent.nav['nav-item-6']
navLinks.children[5].classList.add('italic')