/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// to test the performance  
const time1 = performance.now(); 
// get the nav list and the div inside each section
const unOrdList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('.landing__container');
// creating fragment to append the nav to it and enhance the performance
const unRealDiv = document.createDocumentFragment();




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// use forEach() method on the sections list inside it
sections.forEach( (section) => {
    // create a function to store the varibles inside it 
    function newFunc(){
        
        let list = document.createElement('li');
        let link = document.createElement('a');
        let data = section.parentElement.getAttribute('data-nav');
        let text = document.createTextNode(data);
        return {list, link, data, text};
      }
    let {list, link, data, text} = newFunc();
    // append the le list to the fragment, the the extracted data-nav to the anchor element, and the anchor elements to the list menu
    list.appendChild(link);
    link.appendChild(text);
    unRealDiv.appendChild(list);
     // Scroll to anchor ID using scroll into view event
     link.addEventListener("click", function() {
       section.scrollIntoView({'behavior':'smooth'});
     
     });
  });
  // append the fragment to the nav bar
  unOrdList.appendChild(unRealDiv);



// create a function to check if the section is active
// use getBoundingClientRect to make sure that the section is in the viewport 
function isItActive() {
  let isInViewport = viewSection();
  function viewSection() {
    return (element) => {
      let rect = element.getBoundingClientRect();
      return (
        rect.right <= (document.documentElement.clientWidth || window.innerWidth) &&
        rect.bottom <= (document.documentElement.clientHeight || window.innerHeight)
  
      );
    };
  }
  // create a function to add ('your-active-class') when the section is inthe viewport or remove it when not

  addActiveClass();
  function addActiveClass() {
    const divLength = document.querySelectorAll('.landing__container').length;
    for (j = 0; j < divLength + 1; j++) {
      let section = document.querySelector(`#section${j}`);
      // in the eventListner using isInviewport function to assign the class when the section is in the view while scrolling
      document.addEventListener(
        "scroll", function () {
          (isInViewport(section)) ?
            section.classList.add('your-active-class') :
            section.classList.remove('your-active-class');
        }
      );
    };
  };
};


const time2 = performance.now(); 
console.log(`this page took ${time2 - time1} milliseconds.`);



/**
 * End Main Functions
 * Begin Events
 * 
*/
isItActive();



// Build menu 

// Scroll to section on link click

// Set sections as active
