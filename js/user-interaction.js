"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

var userName = "";

while (userName === "") {
	userName = prompt("What is your name?")
}

console.log(userName);

// TODO: Show an alert message that welcomes the user based on their input.

alert("Thanks for typing in your name " + userName);

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var response = confirm("Do you like pizza?");
if (response) {
	alert("I love pizza too!")
} else {
	alert("Weird! Who doesn't like pizza!");

}