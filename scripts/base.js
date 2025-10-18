// place the document element as the root variable
const root = document.documentElement;
// Check if the URL contains a query string
const urlParams = new URLSearchParams(window.location.search);
// Get screen information
const smallmediaQueryList = window.matchMedia("screen and (max-width: 40rem)");
const mediaQueryList = window.matchMedia("screen and (min-width: 41rem) and (max-width: 80rem)");
const largeMediaQueryList = window.matchMedia("screen and (min-width: 81rem)");
// Get the current date
const currentYear = new Date().getFullYear();
// Get the documents last modified date
const lastModDate = document.lastModified;
// setup variables
const oldDate = new Date("1776-7-4");

// get parameter value and assign to a variable
const page = urlParams.get('page');
let menu = urlParams.get('menu');

// Get page elements by class
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const headerMenuAnchor = document.querySelector('.header-menu-anchor');
const headerMenuTitle = document.querySelector('.header-menu-title');
const headerMenuNavigation = document.querySelector('.header-menu-navigation');
const headerMenuNavigationList = document.querySelector('.header-menu-navigation-list');
const headerMenuItems = document.querySelectorAll('.header-menu-item');
const activeHeaderMenuItem = document.querySelector('.active');
let headerMenuItem = document.querySelector('.active');
const headerMenuItemAnchors = document.querySelectorAll('.header-menu-item-anchor');
const homeMenuItem = document.querySelector('.home-menu-item');
const homeMenuItemAnchor = document.querySelector('.home-menu-item-anchor');
const bishopMenuItem = document.querySelector('.bishop-menu-item');
const bishopMenuItemAnchor = document.querySelector('.bishop-menu-item-anchor');
const counselorMenuItem = document.querySelector('.counselor-menu-item');
const counselorMenuItemAnchor = document.querySelector('.counselor-menu-item-anchor');
const secretaryMenuItem = document.querySelector('.secretary-menu-item');
const secretaryMenuItemAnchor = document.querySelector('.secretary-menu-item-anchor');
const clerkMenuItem = document.querySelector('.clerk-menu-item');
const clerkMenuItemAnchor = document.querySelector('.clerk-menu-item-anchor');
const clerkMembershipMenuItem = document.querySelector('.clerk-membership-menu-item');
const clerkMembershipMenuItemAnchor = document.querySelector('.clerk-membership-menu-item-anchor');
const clerkFinanceMenuItem = document.querySelector('.clerk-finance-menu-item');
const clerkFinanceMenuItemAnchor = document.querySelector('.clerk-finance-menu-item-anchor');
const signInMenuItem = document.querySelector('.signIn-menu-item');
const signInMenuItemAnchor = document.querySelector('.signIn-menu-item-anchor');
const main = document.querySelector('.main');
const mainTitle = document.querySelector('.main-title');
const contentContainer = document.querySelector('.contentContainer');
const footer = document.querySelector('.footer');
// Get the currentYear element from html
const currentYearElement = document.querySelector('.currentyear');
// Get the lastModified element from html
const lastModElement = document.querySelector('.lastModified');

if(menu) {
	headerMenuNavigation.classList.toggle('show');
	headerMenuAnchor.classList.toggle('show');
    let menu=false;
}
// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
headerMenuAnchor.addEventListener('click', () => {
	headerMenuNavigation.classList.toggle('show');
	headerMenuAnchor.classList.toggle('show');
});

// update the html element with the data
if(currentYearElement) {
    currentYearElement.innerHTML = `&copy; ${currentYear}`;
}
// update the html element with the data
if(lastModElement) {
lastModElement.innerHTML = `Last modification:  ${lastModDate}`;
}
headerMenuItem.classList.toggle('active');
switch (page) {
    case "home":
        mainTitle.textContent = "Home";
        headerMenuItem = homeMenuItem;
        //root.style.setProperty('--contentHeight', '1fr');
        break;
    case "bishop":
        mainTitle.textContent = "Bishop";
        headerMenuItem = bishopMenuItem;
        break;
    case "counselor":
        mainTitle.textContent = "Counselor";
        headerMenuItem = counselorMenuItem;
        break;
    case "secretary":
        mainTitle.textContent = "Secretary";
        headerMenuItem = secretaryMenuItem;
        break;
    case "clerk":
        mainTitle.textContent = "Clerk";
        headerMenuItem = clerkMenuItem;
        break;
    case "clerkMemberShip":
        mainTitle.textContent = "Clerk - Membership";
        headerMenuItem = clerkMembershipMenuItem;
        break;
    case "clerkFinance":
        mainTitle.textContent = "Clerk - Finance";
        headerMenuItem = clerkFinanceMenuItem;
        break;
    case "SignIn":
        mainTitle.textContent = "Sign In";
        headerMenuItem = signInMenuItem;
        break;
}
headerMenuItem.classList.toggle('active');