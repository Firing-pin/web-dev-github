// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"

const firstButton = document.querySelector('button');
console.dir(firstButton);  //confirmation



//    - Select the second button by using an "id"

const secondButton = document.getElementById('secButton');
console.dir(secondButton); //confirmation


// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored 
// function clickFirstButton() {

//     console.dir(firstButton);
// }

// firstButton.addEventListener('click', clickFirstButton);

//    - Output the second button WITHOUT using the variable in which it's stored
// function clickSecondButton(event) {
//     console.dir(event);
// }

// secondButton.addEventListener('click', clickSecondButton);


// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
const blueParagraph = document.body.children[2].children[1];
console.dir(blueParagraph);

const removeParagraph = document.body.children[2].children[3];
console.dir(removeParagraph);
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)

// function to remove the first paragraph

function removeThirdPara() {
    removeParagraph.remove();
    firstButton.textContent = "Text Removed";  // we can check it by inspect it
};
firstButton.addEventListener('click', removeThirdPara);
    

//    - The second button changes the background color of the first paragraph to blue
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
function changeBackgroundColor() {
    const bluePara = document.querySelector('#changeToBlue');
   // bluePara.style.backgroundColor = 'rgb(19,190,237)';  //OR
   //bluePara.className = 'blue-bg';   // OR
   bluePara.classList.add('blue-bg');  // preferred option
    secondButton.textContent = "BG Changed";   // we can check it by inspect it

}

secondButton.addEventListener('click', changeBackgroundColor);


// successfully completed the exercise ... without considering the solution class