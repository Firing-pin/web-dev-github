let paraEvent = document.getElementById('eventListen');

function changeParagraphText(event)  {
    paraEvent.textContent = 'Clicked!';
    console.log('paragraph clicked');
    console.log(event);
}
//paraEvent.addEventListener('click', changeParagraphText);  // without () of function changeParagraphText is because we want to change paragraph contents when   click is clicked in future not when code is read by the browser immediately.

// for input field


let inputElement = document.getElementById('textInput');
let inputMaxLength = inputElement.maxLength;

for (let i = -1; i < inputMaxLength; i++) {
    console.log(inputMaxLength);
}

console.dir(inputMaxLength);

// function showInputLength(event) {
//     // let showLength = inputEvent.target.;
//     console.log(showLength);
    
// }

// inputLength.addEventListener('input', showInputLength);

function retrieveUserInput(event) {
    //let userInput = inputElement.value;  // outside variable not expected
    let userInput = event.target.value;
    //let userInput = event.data; // will show discreet input e g k k 
    console.log(userInput);
    console.dir(event);
}

//inputElement.addEventListener('input', retrieveUserInput);