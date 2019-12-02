const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "imgsrc": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const siteData = [];

for (var data in siteContent)
  siteData.push(siteContent[data]);

function processNav() {

  const navData = [];
  const navItems = Array.from(Array.from(document.getElementsByTagName('nav'))[0].getElementsByTagName('a'));

  for (var data in siteData[0])
    navData.push(siteData[0][data]);
  
  for (var i = 0; i < navItems.length; i++) {
    navItems[i].innerHTML = navData[i];
    navItems[i].style.color = 'green';
    navItems[i].href = '/' + navData[i] + '.html';
  }

  { // Building new elements

    var itemOne = document.createElement('a');
    var itemTwo = document.createElement('a');

    itemOne.innerHTML = 'Github';
    itemTwo.innerHTML = 'Portolio';

    itemOne.href = 'https://github.com/Neytoro';
    itemTwo.href = 'neytorokx.com';

    itemOne.style.color = 'green';
    itemTwo.style.color = 'green';

    Array.from(document.getElementsByTagName('nav'))[0].prepend(itemOne);
    Array.from(document.getElementsByTagName('nav'))[0].appendChild(itemTwo);

  }

  document.getElementById('logo-img').src = navData[6];

}

processNav();

function processCTA() {

  const ctaData = [];

  for (var data in siteData[1])
    ctaData.push(siteData[1][data]);

  Array.from(document.getElementsByClassName('cta'))[0].style.justifyContent = 'space-around';

  const CTAH = Array.from(Array.from(document.getElementsByClassName('cta-text'))[0].getElementsByTagName('h1'))[0];

  CTAH.innerHTML = ctaData[0].replace(/ /g, '</br>');

  Array.from(Array.from(document.getElementsByClassName('cta-text'))[0].getElementsByTagName('button'))[0].innerHTML = ctaData[1];

  Array.from(Array.from(document.getElementsByClassName('cta-text'))[0].getElementsByTagName('button'))[0].onclick = () => {

    window.location = '/sign_up.html';

  };

  document.getElementById('cta-img').src = ctaData[2];

}

processCTA();

function processMainContent() {

  const mainData = [];

  for (var data in siteData[2])
    mainData.push(siteData[2][data]);

  { // Top Sections

    const sectionA = Array.from(Array.from(document.getElementsByClassName('top-content'))[0].getElementsByClassName('text-content'))[0];
    const sectionB = Array.from(Array.from(document.getElementsByClassName('top-content'))[0].getElementsByClassName('text-content'))[1];
  
    Array.from(sectionA.getElementsByTagName('h4'))[0].innerHTML = mainData[0];
    Array.from(sectionA.getElementsByTagName('p'))[0].innerHTML = mainData[1];
  
    Array.from(sectionB.getElementsByTagName('h4'))[0].innerHTML = mainData[2];
    Array.from(sectionB.getElementsByTagName('p'))[0].innerHTML = mainData[3];

  }

  document.getElementById('middle-img').src = mainData[4];

  { // Bottom Sections

    const sectionC = Array.from(Array.from(document.getElementsByClassName('bottom-content'))[0].getElementsByClassName('text-content'))[0];
    const sectionD = Array.from(Array.from(document.getElementsByClassName('bottom-content'))[0].getElementsByClassName('text-content'))[1];
    const sectionE = Array.from(Array.from(document.getElementsByClassName('bottom-content'))[0].getElementsByClassName('text-content'))[2];
  
    Array.from(sectionC.getElementsByTagName('h4'))[0].innerHTML = mainData[5];
    Array.from(sectionC.getElementsByTagName('p'))[0].innerHTML = mainData[6];
  
    Array.from(sectionD.getElementsByTagName('h4'))[0].innerHTML = mainData[7];
    Array.from(sectionD.getElementsByTagName('p'))[0].innerHTML = mainData[8];
  
    Array.from(sectionE.getElementsByTagName('h4'))[0].innerHTML = mainData[9];
    Array.from(sectionE.getElementsByTagName('p'))[0].innerHTML = mainData[10];

  }

}

processMainContent();

function processContacts() {

  const contactData = [];

  for (var data in siteData[3])
    contactData.push(siteData[3][data]);

  const contactSection = Array.from(document.getElementsByClassName('contact'))[0];

  contactSection.style.width = "20%";

  Array.from(contactSection.getElementsByTagName('h4'))[0].innerHTML = contactData[0];

  Array.from(contactSection.getElementsByTagName('p'))[0].innerHTML = contactData[1];
  Array.from(contactSection.getElementsByTagName('p'))[1].innerHTML = contactData[2];
  Array.from(contactSection.getElementsByTagName('p'))[2].innerHTML = contactData[3];

}

processContacts();

Array.from(Array.from(document.getElementsByTagName('footer'))[0].getElementsByTagName('p'))[0].innerHTML = siteData[4].copyright;
