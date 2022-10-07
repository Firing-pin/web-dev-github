// DOM Manipulation Methods: three methods (Adding-removing, moving and changing/replacing)

// 1. set the attributes property of the element (Changing attribute)
// document.body.children[1].children[0].href = 'http://google.com';
// console.dir(document);

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'http://google.com';

anchorElement = document.querySelector('p a');
anchorElement.href = 'http://youtube.com';

// 2. Inserting new HTML element
// process 
// i. create a new element

let newAnchorElement = document.createElement('a');
newAnchorElement.setAttribute('href', 'http://www.youtube');
newAnchorElement.setAttribute('target', '_blank');
newAnchorElement.textContent = 'link of youtube';


// ii. get access to the parent element that should hold the new element.

let firstParagraph = document.querySelector('p');
// iii. insert the new element into the parent element content.

firstParagraph.append(newAnchorElement);

// we can now insert the line break before this anchor element similarly we have added the anchor tag.

let lineBreak = document.createElement('br'); //created
let lineBreakSpace = document.querySelector('a');  // got access
lineBreakSpace.append(lineBreak); // placed



// 3. Removing the element

//process
//i. select the element to be removed
console.dir(document.body.children[2]);

//let pElement = document.body.children[2];


// ii. remove the element
//pElement.remove();

// similarly by giving id or class and using the getElementById or querySelector function

let pElement = document.querySelectorAll('p');
console.log(pElement.length); // Attributes checking
let secondP = pElement[1];
secondP.remove(); 
// or pElement.parentElement.removeChild(pElement); for older browsers

// 4. Changing the element positions i.e, moving the element

// Process
// 1. get access to the element which we are going to move
// 2. move the element to the new position
// firstParagraph we created have the access to the first element 

// firstParagraph.parentElement.append(firstParagraph);
// here we have picked the first element and dragged to body(parent element) then append it to the first paragraph which will by default place it as last paragraph.

// we can also do this by call insert before function which require parentNode and access of that element which will be the element where we call insertBefore function.

const parentDiv = firstParagraph.parentNode;
const newNode = firstParagraph;
let secP = document.getElementById('otherP');   // OR 'firstChild'
parentDiv.insertBefore(newNode, secP);


// iii.. Also we can manipulate content of HTML by using innerHTML property of the document.
// here we can change the content of the element and even add elements to style it or give other features. lets create a p element and see what we can do with this innerHTML property.

let secPElement = document.createElement('p');
//secPElement.setAttribute('innerHTML', 'id');
secPElement.setAttribute( 'class' , 'createdP' );


secPElement.innerHTML = ' This element is created to test the <strong>InnerHTML</strong>'+
' property and see what it can add in this pElement.' + ' <a href="https://www.udemy.com">Udemy</a> is added in this as a link.';

let spaceForP = document.querySelector('#lastChild');
spaceForP.parentElement.append(secPElement);  // will send this p as the last child. // if we omit the .parentElement then it will  send the p inside the #lastChild p element.
