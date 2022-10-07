// console.log(document);   // similar to alert();
// console.dir(document);

// Drilling technique to find the element of the Html code 

// document.body.children[1].children[0].href = 'http://www.google.com';



// Query Element technique to find the element of the Html code by giving id
//  getElementById is built-in function that returns the element of the Html code by id

// it can be done in 3 ways: 
//first : by calling getElementById(elementId) and changing the element right away by dot notation.

//document.getElementById('external-link').href= 'http://www.google.com';

// second : by calling getElementById(elementId) and changing it by considering a variable and then changing the element.

// let anchorElement = document.getElementById('external-link');
//anchorElement.setAttribute('href', 'http://www.google.com'); //or

// anchorElement.href = 'http://www.google.com';

// third: using the querySelector instead of the id selector

//let anchorElement = document.querySelector('.otherP');
//let anchorElement = document.querySelector('a');
//anchorElement.setAttribute('href', 'http://www.google.com'); //or

//anchorElement.href = 'http://www.google.com';

// Since querySelectorAll returns an array, if we need  all the element then we requires a loop that calls   each elements of the array to   get the elements.

// this querySelector work as CSS selector as we select the elements from the HTML document 'a' { color: rgba(255,255,255,0.5) } ;
// so we can select querySelector( 'p a' ); i.e, a of p element. same as we did in CSS file p a { color: rgba(255,255,255,0.5)};

// querySelector VS getElementById selector

// 1. id selector is to select the id , querySelector can select any element with  ID selector, tag type selector, class selector, combined selectors etc.

// 2. id selector can select only one element with id, querySelector can select multiple elements if applied to class or using querySelectorAll method, now it will give an array of values instead of just one value. On single value it will returns the first element with the specified id selector.

// we can also use other selector methods to select multiple elements like :
// 1. document.getElementsByClassName('some-css-class') 
//: Selects all HTML elements that have the provided CSS class

// 2. document.getElementsByTagName('tag') 
//: Selects all HTML elements that are of the provided HTML tag type




// for example
// in HTML code, if
{/* <div class="outer">
        <div class="select">
            <div class="inner"></div>
        </div>
    </div> */}

// const select = document.querySelector('.select');
// const inner = select.querySelectorAll('.outer .inner');
// console.log(inner.length) ;  // will give 1 not 0 i.e, we get 2 nodes


// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and  save it in a variable with a name of your choice

let head = document.body.firstChild;
// console.log(head);   //<h1> element  // OR
console.dir(head);

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
// let bodyElement = head.parentElement;
// console.log(bodyElement);  //<body> element  //OR 
console.dir(head.parentElement); // create a variable only when you have access to it in later calls. otherwise just console it or obtain its value.

//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)

// let sibling = head.parentElement.children[1];
// console.log(sibling);  // <p> element   // OR

console.dir(head.nextElementSibling);

let sibling = head.parentElement.children.length;
console.log(sibling); // <p>


// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

// let getHead = document.getElementById('getHead');
// console.log(getHead);  //<h1> element        //OR

head = document.getElementById('getHead');
console.dir(getHead);




// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice


let getSecond = document.querySelectorAll('.otherP');
console.log(getSecond.length);  // Additional check  
let second = getSecond[1];

console.log(second);  // second  <p> element
// we can also do this by assigning the second <p> element a class and call that call in querySelector and store the result in a variable which we can later show.

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

second.textContent = "this is new text" ;  // replaced the textContent
console.log(second.textContent.length);
