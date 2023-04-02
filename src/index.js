import loadPage from "./loadPage";
import loadMenu from "./loadMenu";
import loadContact from "./loadContact";

loadPage();
attachEvents();


function attachEvents() {
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => link.addEventListener('click', changePagesHandler));
}

function changePagesHandler(e) {
    if (e.target.textContent === 'HOME') {
        loadPage();
    } else if (e.target.textContent === 'MENU') {
        loadMenu();
    } else if (e.target.textContent === 'CONTACT') {
        console.log('contact clicked')
        loadContact();
    }
    attachEvents();
}