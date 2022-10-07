// updating character length with inputTextLength.
// follow the convention of using const rather than let in order to avoid infinite  recursion.

const productName = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars'); 

// console.dir(productName); here we can see in maxLength=60
const maxAllowedChars = productName.maxLength;  // so maxAllowedChars=60

function updateCharsRemaining (event) {
    const inputText = event.target.value;
    const inputTextLength = inputText.length;  // if you get array it is also ok

    const remainingChars = maxAllowedChars - inputTextLength; // this will give you the remaining chars 

    remainingCharsElement.textContent = remainingChars; // here we update that value. // here we can say that the remainingCharsElement is assigned to new value but actual value is not changed, we have just change the property of that value i.e, textContent, not the value as a whole.
}
// we can change the property of the value as we change the items in the array but not the array itself.
productName.addEventListener('input', updateCharsRemaining);