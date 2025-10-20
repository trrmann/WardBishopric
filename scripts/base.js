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
const contentElement = document.createElement('div');

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
selectUsernameElement.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
	inputUsernameLabelElement.classList.toggle('show');
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
        contentElement.textContent = "home content";
        break;
    case "bishop":
        mainTitle.textContent = "Bishop";
        headerMenuItem = bishopMenuItem;
        contentElement.textContent = "bishop content";
        break;
    case "counselor":
        mainTitle.textContent = "Counselor";
        headerMenuItem = counselorMenuItem;
        contentElement.textContent = "counselor content";
        break;
    case "secretary":
        mainTitle.textContent = "Secretary";
        headerMenuItem = secretaryMenuItem;
        contentElement.textContent = "secretary content";
        break;
    case "clerk":
        mainTitle.textContent = "Clerk";
        headerMenuItem = clerkMenuItem;
        contentElement.textContent = "clerk content";
        break;
    case "clerkMemberShip":
        mainTitle.textContent = "Clerk - Membership";
        headerMenuItem = clerkMembershipMenuItem;
        contentElement.textContent = "membership content";
        break;
    case "clerkFinance":
        mainTitle.textContent = "Clerk - Finance";
        headerMenuItem = clerkFinanceMenuItem;
        contentElement.textContent = "finance content";
        break;
    case "SignIn":
        mainTitle.textContent = "Sign In";
        headerMenuItem = signInMenuItem;
        const formElement = document.createElement('form');
            formElement.setAttribute('method','get');
            formElement.setAttribute('action','index.html?page=home');
            formElement.classList.add('signInForm');
        const selectUsernameLabelElement = document.createElement('label');
            selectUsernameLabelElement.textContent="User Name:";
            selectUsernameLabelElement.classList.add('userNameSelectLabel');
            selectUsernameLabelElement.classList.add('show');
        const selectUsernameElement = document.createElement('select');
            selectUsernameElement.setAttribute('name','userNameSelect');
            selectUsernameElement.setAttribute('required','required');
            selectUsernameElement.setAttribute('autofocus','autofocus');
            selectUsernameElement.setAttribute('tabindex','1');
            selectUsernameElement.classList.add('userNameSelect');
            selectUsernameElement.classList.add('signInLabel');
        const selectUsernameOptionElement = document.createElement('option');
            selectUsernameOptionElement.setAttribute('disabled','disabled');
            selectUsernameOptionElement.setAttribute('selected','selected')
            selectUsernameOptionElement.setAttribute('value','');
            selectUsernameOptionElement.textContent="Select a user name ↓";
        const newUsernameOptionElement = document.createElement('option');
            newUsernameOptionElement.setAttribute('value','newUserName');
            newUsernameOptionElement.textContent="New user name.";
        // create stored users
            // build stored users
            // populate stored users
        const inputUsernameLabelElement = document.createElement('label');
            inputUsernameLabelElement.textContent="User Name:";
            inputUsernameLabelElement.classList.add('userNameLabel');
        const inputUsernameElement = document.createElement('input');
            inputUsernameElement.setAttribute('type','text');
            inputUsernameElement.setAttribute('name','userName');
            inputUsernameElement.setAttribute('tabindex','2');
            inputUsernameElement.setAttribute('autocomplete','username');
            inputUsernameElement.classList.add('userName');
            inputUsernameElement.classList.add('signInLabel');
        const inputPasswordLabelElement = document.createElement('label');
            inputPasswordLabelElement.textContent="Password:";
            inputPasswordLabelElement.classList.add('passwordLabel');
            inputPasswordLabelElement.classList.add('show');
        const inputPasswordElement = document.createElement('input');
            inputPasswordElement.setAttribute('type','text');
            inputPasswordElement.setAttribute('name','password');
            inputPasswordElement.setAttribute('required','required');
            inputPasswordElement.setAttribute('tabindex','3');
            inputPasswordElement.setAttribute('autocomplete','password');
            inputPasswordElement.classList.add('password');
            inputPasswordElement.classList.add('signInLabel');
        const inputRememberLabelElement = document.createElement('label');
            inputRememberLabelElement.classList.add('rememberLabel');
        const inputRememberLabelSpanElement = document.createElement('span');
            inputRememberLabelSpanElement.textContent="remember user name on this computer.";
        const inputRememberElement = document.createElement('input');
            inputRememberElement.setAttribute('type','checkbox');
            inputRememberElement.setAttribute('name','remember');
            inputRememberElement.setAttribute('tabindex','4');
            inputRememberElement.classList.add('remember');
        const inputLoginElement = document.createElement('input');
            inputLoginElement.setAttribute('type','submit');
            inputLoginElement.setAttribute('value','Login');
            inputLoginElement.setAttribute('tabindex','5');
            inputLoginElement.classList.add('loginButton');
            inputLoginElement.classList.add('show');
        selectUsernameElement.appendChild(selectUsernameOptionElement);
        selectUsernameElement.appendChild(newUsernameOptionElement);
        // add stored users
        selectUsernameLabelElement.appendChild(selectUsernameElement);
        inputUsernameLabelElement.appendChild(inputUsernameElement);
        inputPasswordLabelElement.appendChild(inputPasswordElement);
        inputRememberLabelElement.appendChild(inputRememberElement);
        inputRememberLabelElement.appendChild(inputRememberLabelSpanElement);
        formElement.appendChild(selectUsernameLabelElement);
        formElement.appendChild(inputUsernameLabelElement);
        formElement.appendChild(inputPasswordLabelElement);
        formElement.appendChild(inputRememberLabelElement);
        formElement.appendChild(inputLoginElement);
        contentElement.appendChild(formElement);
        break;
}
headerMenuItem.classList.toggle('active');
contentContainer.appendChild(contentElement);