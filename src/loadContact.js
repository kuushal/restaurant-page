export default function loadContact() {
    const mainContainer = document.querySelector('#content');
    mainContainer.textContent = '';
    // Navbar
    const navBar = document.createElement('nav');
    const unorderedList = document.createElement('ul');

    const listItem1 = document.createElement('li');
    const listItem2 = document.createElement('li');
    const listItem3 = document.createElement('li');

    const link1 = document.createElement('a');
    const link2 = document.createElement('a');
    const link3 = document.createElement('a');

    link1.textContent = 'HOME';
    link2.textContent = 'MENU';
    link3.textContent = 'CONTACT';

    listItem1.appendChild(link1);
    listItem2.appendChild(link2);
    listItem3.appendChild(link3);

    unorderedList.appendChild(listItem1);
    unorderedList.appendChild(listItem2);
    unorderedList.appendChild(listItem3);

    navBar.appendChild(unorderedList);

    mainContainer.appendChild(navBar);


    // Main section
    const mainSection = document.createElement('main');

    const heading = document.createElement('h1');
    heading.textContent = 'CONTACT';
    mainSection.appendChild(heading);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    // first menu item
    const menuCardTea = document.createElement('div');
    menuCardTea.classList.add('menu-card');

    const menuHeadingTea = document.createElement('h2');
    menuHeadingTea.textContent = 'Chef Honey';
    menuCardTea.appendChild(menuHeadingTea);

    const paraTea = document.createElement('p');
    paraTea.classList.add('desc');
    paraTea.textContent = 'chefhoney@honey.com';
    menuCardTea.appendChild(paraTea);

    const teaImg = document.createElement('img');
    teaImg.classList.add('menu-img');
    teaImg.src = "./honey_tea.jpg";
    teaImg.alt = 'Honey tea';
    menuCardTea.appendChild(teaImg);

    const teaPara = document.createElement('p');
    teaPara.classList.add('price');
    teaPara.textContent = '+41 9999999999';
    menuCardTea.append(teaPara);



    menuContainer.appendChild(menuCardTea.cloneNode(true));
    menuContainer.appendChild(menuCardTea.cloneNode(true));
    mainSection.appendChild(menuContainer);
    mainContainer.appendChild(mainSection);



    // footer 

    const footer = document.createElement('footer');
    footer.textContent = " @2023";

    mainContainer.appendChild(footer);
}