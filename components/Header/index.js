
// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const anotherHeader = document.querySelector('.header-container');

function Header() {
    
    //Variables

    const newHeader = document.createElement('div'),
          date = document.createElement('span'),
          lambdaTimes = document.createElement('h1'),
          temp = document.createElement('span');


    //Append

    newHeader.appendChild(date);
    newHeader.appendChild(lambdaTimes);
    newHeader.appendChild(temp);

    //ClassList

    newHeader.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // TextContent
    date.textContent = 'March 28th, 2019';
    lambdaTimes.textContent = 'Lambda Times';
    temp.textContent = '98°';

    return newHeader;
}

anotherHeader.appendChild(Header());