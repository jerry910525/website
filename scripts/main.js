var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
alert('hello!');
document.querySelector('a').onclick = function() {
    alert('好色喔><');
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test2.png') {
      myImage.setAttribute ('src','images/test.png');
    } else {
      myImage.setAttribute ('src','images/test2.png');
    }
}


var myButton = document.querySelector('button');


function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hello, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}