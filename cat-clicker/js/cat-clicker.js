// Cat clicker premium v2

// Cat Container initiation	
function catContainer() {
	
// variables

var catTitleElement = document.createElement("H1");
var catContainerImg = document.createElement("img")
var list = document.getElementById("cat-container");
var catSecondaryTitleElement = document.createElement("H3");

// Attributes

catContainerImg.setAttribute("id", "catImage");
catTitleElement.setAttribute("id", "catTitle");
catTitleElement.setAttribute("class", "cat-title");
catSecondaryTitleElement.setAttribute("id", "catCount");

// Nodes
list.insertBefore(catSecondaryTitleElement, list.childNodes[0])
list.insertBefore(catContainerImg, list.childNodes[0])	
list.insertBefore(catTitleElement, list.childNodes[0]); 
}
window.addEventListener("load", catContainer, false);

// Variable for the cat Menu structure.
function catMenu() {
var catTitleContainer = document.createElement("div");
var catTitleElement = document.createElement("H2");
var catTitleText = document.createTextNode('Click on any of the buttons to reveal a cat.');
var catContainerIntroText = document.createTextNode("Click the image below to increase your click count.")
var catMenuContainer = document.createElement("ul")
var list = document.getElementById("cat-container")

// creates the array for the cat Menu Items
var catMenuItemLength = document.createDocumentFragment();

var catMenuItems = [
  catMenuItem("Ollie"),
  catMenuItem("Nacho"),
  catMenuItem("Pooper"),
  catMenuItem("Stinky"),
  catMenuItem("Roger")
]

// creates the loop for each value within the cat menu items array.
for(var i = 0; i < catMenuItems.length; i++) {
  catMenuItemLength.appendChild(catMenuItems[i]);
}

// appends the name of each cat to the button
function catMenuItem(text) {
  var catMenuItemContainer = document.createElement("li");
  var catMenuItemButton = document.createElement("button");
  catMenuItemButton.setAttribute("id", text + "-button")
  catMenuItemButton.setAttribute("class", "btn" + " btn-default")
// append button children  
  catMenuItemContainer.appendChild(catMenuItemButton);
  var catMenuTitle = catMenuItemButton.appendChild(document.createTextNode(text));
  return catMenuItemContainer;
}

// Appends all catMenuItems at once

// Attributes
catTitleContainer.setAttribute("class", "cat-title-container");
catMenuContainer.setAttribute("class", "cat-menu");
catMenuContainer.appendChild(catMenuItemLength); 

// Append children
catTitleContainer.appendChild(catTitleElement);
catTitleElement.appendChild(catTitleText);

// Nodes
list.insertBefore(catMenuContainer, list.childNodes[0])	
list.insertBefore(catTitleContainer, list.childNodes[0]); 

}
window.addEventListener("load", catMenu, false);

// Cat Objects and cat menu functions - cat clicker premium v2 end

// used this to learn how to build objects https://discussions.udacity.com/t/honest-opinion-on-cat-clicker-5-cats/24532
// thanks to this forum post, I have learned the importance of using objects for elements with similar attributes to build scalable apps.
// full credit for the original code goes to User : PGS82

// Cat loader

function catLoad(){
	// gets the 'catCount' div element, converts it into a variable. 
	var catClick = document.getElementById("catCount");
    
	// creates the variable for cat button
	var CatButtonObject = function(selector){
	// creates a function for the selector variable
	// defines the element ID of selector. 
	this.element = document.getElementById(selector);
	// defines the click count,
		this.catClickCount = 0;
	};
    
	// adds an event function for when a CatButtonObject object is clicked. Don't quite understand this, but will need to research more on prototype and events.
	CatButtonObject.prototype.addEvent = function(event, fn){
	//adds the event listener to the element which id's has been identified.
		this.element.addEventListener(event, fn);
	};	

	// adds the object for a cat
	var Cat = {
		// adds the image value
		image: document.getElementById("catImage"),
		
		// adds the title value
		title: document.getElementById("catTitle"),
		
		// sets the source element for the image variable
		setSrc: function(src){
		
		// sets the source for the image value
			this.image.src = src;
		},
		
		// sets variable to select the text of the title value
		setTitleText: function(title){
			this.title.innerHTML = title;
		}
	};

	// Creates the objects for each cat button.
	var catButtonOne = new CatButtonObject("Ollie-button");
	var catButtonTwo = new CatButtonObject("Nacho-button");
	var catButtonThree = new CatButtonObject("Pooper-button");
	var catButtonFour = new CatButtonObject("Stinky-button");
	var catButtonFive = new CatButtonObject("Roger-button");

	//adds event for each cat button 	
	catButtonOne.addEvent("click",
	// sets the function to set object values
	function(){
		addCatInfo(this, "img/cat-picture.jpg", "Ollie");
	}
	// binds this function and its values to the object variable name
	.bind(catButtonOne));

	catButtonTwo.addEvent("click", function(){
		addCatInfo(this, "img/cat-picture2.jpg", "Nacho");
	}.bind(catButtonTwo));

	catButtonThree.addEvent("click", function(){
		addCatInfo(this, "img/cat-picture3.jpg", "Pooper");
	}.bind(catButtonThree));

	catButtonFour.addEvent("click", function(){
		addCatInfo(this, "img/cat-picture4.jpg", "Stinky");
	}.bind(catButtonFour));

	catButtonFive.addEvent("click", function(){
		addCatInfo(this, "img/cat-picture5.jpg", "Roger");
	}.bind(catButtonFive));

	// creates the variable that adds values to each CatButtonObject object 
	function addCatInfo(selfElement, catSrc, catTitle){
		// sets the value of the the setSrc variable, converting it into the catSrc variable 
		Cat.setSrc(catSrc);
		// sets the value of setTitleText variable, converting it into the catTitle variable
		Cat.setTitleText(catTitle);
		// increments the value of the catClickCount variable
		selfElement.catClickCount++;
		// sets the inner html value of the catClickCount variable to the number of clicks currently saved by the object.
		catClick.innerHTML = selfElement.catClickCount;
	}

}
window.addEventListener("load", catLoad, false);

