/*const myHeading = document.querySelector('h1');
myHeading.textContent = '18/08';*/



/*
alert('hello!');
alert('This is a beta test');
alert('For the next-generation designer Yue Qing Wei');
alert('(And of course her lovely part-time semi-employed free-of-charge friends)');*/



/*document.querySelector('h1').addEventListener('click', function () {
  alert('Ouch! Stop poking me!');
});*/


const myImage = document.querySelector('img');






let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt('Please enter your name.');
	if (!myName){
		setUserName();
	}else{
 		localStorage.setItem('name', myName);
  		myHeading.textContent = `${myName}`;
	}
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Welcome back ${storedName}`;
}


myButton.onclick = () => {
  setUserName();
}






myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/coming_soon.jpg') {
    myImage.setAttribute('src','images/coming_soon2.jpg');
  } else {
    myImage.setAttribute('src','images/coming_soon.jpg');
  }
}