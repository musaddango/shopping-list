let input = document.getElementById("userinput");
let button = document.getElementById("enter"); 
let list = document.getElementById("list");
let li = document.getElementsByTagName("li");
let i = 0;

// Creates an element on entering
function element(){
	let li = document.createElement("li");
	li.setAttribute("class", "btn"+i);
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", strikeThrough)
	list.appendChild(li);
	input.value = "";
}

// Detect the particular button an action is coming from
function  detectItem(){
	return event.target;
}

// Deletes the item whose button has been clicked along with the clicked item
function deleteClickedItem(){
	let li = document.querySelectorAll("li");
	let cl = detectItem().className;
	for (let j = 0; j < li.length; j++){
		let liCl = li[j].className;
		if (liCl === cl || liCl === cl + " " + "done"){
			li[j].remove();
			detectItem().remove();
		}
	}
}

// Creates button and adds a listener to it that allows it delete the content and itself
function createButton(){
	let btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.setAttribute("class", "btn"+i);
	btn.addEventListener("click", deleteClickedItem);
	list.appendChild(btn);
}

// This checks the input inserted into the input field to ensure no enpty lists are made
function inputLenghtCheck(){
	return input.value != "";
}

// Checks the pressed key
function enterKeypress (){
	return event.code === "Enter";
}

// Adds element on click after checking the input to be valid
function addElementAfterClick(){
	if (inputLenghtCheck()){
		element();
		createButton();
		i++
	}
}

// Adds element on pressing the 'enter' key.
function addElementAfterKeypress(){
	if (enterKeypress() && inputLenghtCheck()){
		element();
		createButton();
		i++
	}
}

// Allows for atems to be striked through when clicked upon
function strikeThrough(){
	detectItem().classList.toggle("done");
}

// Adds event listeners based on various actions
button.addEventListener("click", addElementAfterClick);

input.addEventListener("keypress", addElementAfterKeypress);
