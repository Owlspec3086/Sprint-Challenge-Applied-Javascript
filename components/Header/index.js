// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


//Header component created arrow function that will be labeled for this first step
const Header = () => {

    // elements being created to understand html breakdown
    const headerContainer = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    // Add the class
    headerContainer.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //Add the content
    date.textContent = 'MARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';

    //Nest them properly
    headerContainer.appendChild(date);
    headerContainer.appendChild(title);
    headerContainer.appendChild(temp);
    return headerContainer;

};

document.querySelector('.header-container').appendChild(Header());
