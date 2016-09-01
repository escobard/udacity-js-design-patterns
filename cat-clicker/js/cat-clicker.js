// global container variables

// First Cat Click function

 var clicks = 0;
    function catClicked() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

// First Cat function	
function cat1() {
	
// variables
var catTitleContainer = document.createElement("div");
var catTitleElement = document.createElement("H1");
var catTitleText = document.createTextNode('Ollie');
var catContainerIntro = document.createElement("p")
var catContainerIntroText = document.createTextNode("Click the image below to increase your click count.")
var catContainerImg = document.createElement("img")
var list = document.getElementById("cat-1");
var catSecondaryTitleElement = document.createElement("H2");
var catSecondaryTitleText = document.createTextNode('Clicks:');
// attributes
catContainerIntro.setAttribute("class", "cat-title");
catTitleContainer.setAttribute("id", "cat-title-1");
catTitleContainer.setAttribute("class", "cat-title");
catContainerImg.setAttribute("src", "img/cat-picture.jpg");
catContainerImg.setAttribute("onClick", "catClicked()");

// append childs
catContainerIntro.appendChild(catContainerIntroText);
catTitleContainer.appendChild(catTitleElement);
catTitleElement.appendChild(catTitleText);
catSecondaryTitleElement.appendChild(catSecondaryTitleText);

//list nodes
list.insertBefore(catSecondaryTitleElement, list.childNodes[0])
list.insertBefore(catContainerImg, list.childNodes[0])	
list.insertBefore(catContainerIntro, list.childNodes[0]);
list.insertBefore(catTitleContainer, list.childNodes[0]); 

}
window.addEventListener("load", cat1, false);
	

// Second Cat Click function

 var clicks2 = 0;
    function catClicked2() {
        clicks2 += 1;
        document.getElementById("clicks2").innerHTML = clicks2;
    };

// Second Cat Title function	
function catTitle2() {
	var catTitleContainer2 = document.createElement("div");
    var catTitleElement2 = document.createElement("H1");
    var catTitleText2 = document.createTextNode("Nacho");
	catTitleContainer2.appendChild(catTitleElement2);
    catTitleElement2.appendChild(catTitleText2);
	catTitleContainer2.setAttribute("id", "cat-title-2");
	catTitleContainer2.setAttribute("class", "cat-title");
	var list2 = document.getElementById("cat-2");
    list2.insertBefore(catTitleContainer2, list2.childNodes[0]);
}
window.addEventListener("load", catTitle2, false);

// Third Cat Click function

 var clicks3 = 0;
    function catClicked3() {
        clicks3 += 1;
        document.getElementById("clicks3").innerHTML = clicks3;
    };

// Third Cat Title function	
function catTitle3() {
	var catTitleContainer3 = document.createElement("div");
    var catTitleElement3 = document.createElement("H1");
    var catTitleText3 = document.createTextNode("Pooper");
	catTitleContainer3.appendChild(catTitleElement3);
    catTitleElement3.appendChild(catTitleText3);
	catTitleContainer3.setAttribute("id", "cat-title-3");
	catTitleContainer3.setAttribute("class", "cat-title");
	var list3 = document.getElementById("cat-3");
    list3.insertBefore(catTitleContainer3, list3.childNodes[0]);
}
window.addEventListener("load", catTitle3, false);

// Fourth Cat Click function

 var clicks4 = 0;
    function catClicked4() {
        clicks4 += 1;
        document.getElementById("clicks4").innerHTML = clicks4;
    };

// Fourth Cat Title function	
function catTitle4() {
	var catTitleContainer4 = document.createElement("div");
    var catTitleElement4 = document.createElement("H1");
    var catTitleText4 = document.createTextNode("Pooper");
	catTitleContainer4.appendChild(catTitleElement4);
    catTitleElement4.appendChild(catTitleText4);
	catTitleContainer4.setAttribute("id", "cat-title-4");
	catTitleContainer4.setAttribute("class", "cat-title");
	var list4 = document.getElementById("cat-4");
    list4.insertBefore(catTitleContainer4, list4.childNodes[0]);
}
window.addEventListener("load", catTitle4, false);

// Fifth Cat Click function

 var clicks5 = 0;
    function catClicked5() {
        clicks5 += 1;
        document.getElementById("clicks5").innerHTML = clicks5;
    };

// Fourth Cat Title function	
function catTitle5() {
	var catTitleContainer5 = document.createElement("div");
    var catTitleElement5 = document.createElement("H1");
    var catTitleText5 = document.createTextNode("Pooper");
	catTitleContainer5.appendChild(catTitleElement5);
    catTitleElement5.appendChild(catTitleText5);
	catTitleContainer5.setAttribute("id", "cat-title-5");
	catTitleContainer5.setAttribute("class", "cat-title");
	var list5 = document.getElementById("cat-5");
    list5.insertBefore(catTitleContainer5, list5.childNodes[0]);
}
window.addEventListener("load", catTitle5, false);


