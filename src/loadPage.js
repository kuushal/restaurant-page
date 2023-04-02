export default function loadPage() {
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
    heading.textContent = 'Welcome to Zuten Letzten Instaz';
    mainSection.appendChild(heading);

    const image = document.createElement('img');
    image.src = "./rest.jpg";
    image.alt = "Restaurant image";
    mainSection.appendChild(image);

    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');

    para1.textContent = "Zuten Letzten Instaz is located one block away from the historic Berlin Wall and serves as the city’soldest tavern. The restaurant received its name in 1924 by then owner G. Hoffmann, prior to this, the tavern was nicknamed Maria Beil.";

    para2.textContent = " Although the building is one of the oldest houses in Berlin, it was reconstructed in 1963 after taking heavy damage during World War II and while the interiors are no longer original, the current design reflects the style of the original house.";

    para3.textContent = "As one of the city’s most famous restaurants, several well noted guests have visited Zur Letzten Instanz including, Napoleon Bonaparte, Ludwig Von Beethoven, and former German Chancellor Angela Merkel";

    mainSection.appendChild(para1);
    mainSection.appendChild(para2);
    mainSection.appendChild(para3);

    mainContainer.appendChild(mainSection);

    // footer 

    const footer = document.createElement('footer');
    footer.textContent = " @2023";

    mainContainer.appendChild(footer);

}