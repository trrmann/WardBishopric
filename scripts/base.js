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
const page1MenuItem = document.querySelector('.page1-menu-item');
const page1MenuItemAnchor = document.querySelector('.page1-menu-item-anchor');
const page2MenuItem = document.querySelector('.page2-menu-item');
const page2MenuItemAnchor = document.querySelector('.page2-menu-item-anchor');
const main = document.querySelector('.main');
const mainTitle = document.querySelector('.main-title');
//const contentContainer = document.querySelector('.contentContainer');
const footer = document.querySelector('.footer');
// Get the currentYear element from html
const currentYearElement = document.querySelector('.currentyear');
// Get the lastModified element from html
const lastModElement = document.querySelector('.lastModified');

// update the html element with the data
if(currentYearElement) {
    currentYearElement.innerHTML = `&copy; ${currentYear}`;
}
// update the html element with the data
if(lastModElement) {
lastModElement.innerHTML = `Last modification:  ${lastModDate}`;
}
