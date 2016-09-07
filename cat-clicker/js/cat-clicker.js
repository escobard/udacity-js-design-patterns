// Cat Ojects and cat menu functions - cat clicker premium v2

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
// append button children  
  catMenuItemContainer.appendChild(catMenuItemButton);
  var catMenuTitle = catMenuItemButton.appendChild(document.createTextNode(text));
  return catMenuItemContainer;
}

// Appends all catMenuItems at once

// Attributes
catTitleContainer.setAttribute("id", "cat-title-1");
catTitleContainer.setAttribute("class", "cat-title");
catMenuContainer.setAttribute("class", "cat-menu");
catMenuContainer.appendChild(catMenuItemLength); 

// Append childs
catTitleContainer.appendChild(catTitleElement);
catTitleElement.appendChild(catTitleText);

// Nodes
list.insertBefore(catMenuContainer, list.childNodes[0])	
list.insertBefore(catTitleContainer, list.childNodes[0]); 

}
window.addEventListener("load", catMenu, false);

// Cat Ojects and cat menu functions - cat clicker premium v2 end
