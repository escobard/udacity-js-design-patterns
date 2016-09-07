// Cat Ojects and cat menu functions - cat clicker premium v2


// Cat Ojects and cat menu functions - cat clicker premium v2 end

// Cat containers - cat clicker premium v1 - depracated

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
var catClickContainer = document.createElement("div");
var catSecondaryTitleElement = document.createElement("H2");
var catSecondaryTitleText = document.createTextNode('Clicks:');
var catClickCounter = document.createElement("span")
var catClickNumber = document.createTextNode('0');

// Attributes
catContainerIntro.setAttribute("class", "cat-title");
catTitleContainer.setAttribute("id", "cat-title-1");
catTitleContainer.setAttribute("class", "cat-title");
catContainerImg.setAttribute("src", "img/cat-picture.jpg");
catContainerImg.setAttribute("onClick", "catClicked()");
catClickCounter.setAttribute("id", "clicks");
catClickContainer.setAttribute("class", "click-container");

// Append childs
catContainerIntro.appendChild(catContainerIntroText);
catTitleContainer.appendChild(catTitleElement);
catTitleElement.appendChild(catTitleText);
catSecondaryTitleElement.appendChild(catSecondaryTitleText);
catSecondaryTitleElement.appendChild(catClickCounter);
catClickCounter.appendChild(catClickNumber);
catClickContainer.appendChild(catSecondaryTitleElement);

// Nodes
list.insertBefore(catClickContainer, list.childNodes[0])
list.insertBefore(catContainerImg, list.childNodes[0])	
list.insertBefore(catContainerIntro, list.childNodes[0]);
list.insertBefore(catTitleContainer, list.childNodes[0]); 

}
window.addEventListener("load", cat1, false);
// First Cat Click function

 var clicks = 0;
    function catClicked() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };


// Second Cat function	
function cat2() {
	
// Variables
var catTitleContainer2 = document.createElement("div");
var catTitleElement2 = document.createElement("H1");
var catTitleText2 = document.createTextNode('Nacho');
var catContainerIntro2 = document.createElement("p")
var catContainerIntroText2 = document.createTextNode("Click the image below to increase your click count.")
var catContainerImg2 = document.createElement("img")
var list2 = document.getElementById("cat-2");
var catClickContainer2 = document.createElement("div");
var catSecondaryTitleElement2 = document.createElement("H2");
var catSecondaryTitleText2 = document.createTextNode('Clicks:');
var catClickCounter2 = document.createElement("span")
var catClickNumber2 = document.createTextNode('0');

// Attributes
catContainerIntro2.setAttribute("class", "cat-title");
catTitleContainer2.setAttribute("id", "cat-title-2");
catTitleContainer2.setAttribute("class", "cat-title");
catContainerImg2.setAttribute("src", "img/cat2-picture.jpg");
catContainerImg2.setAttribute("onClick", "catClicked2()");
catClickCounter2.setAttribute("id", "clicks2");
catClickContainer2.setAttribute("class", "click-container");

// Append childs
catContainerIntro2.appendChild(catContainerIntroText2);
catTitleContainer2.appendChild(catTitleElement2);
catTitleElement2.appendChild(catTitleText2);
catSecondaryTitleElement2.appendChild(catSecondaryTitleText2);
catSecondaryTitleElement2.appendChild(catClickCounter2);
catClickCounter2.appendChild(catClickNumber2);
catClickContainer2.appendChild(catSecondaryTitleElement2);

// Nodes
list2.insertBefore(catClickContainer2, list2.childNodes[0])
list2.insertBefore(catContainerImg2, list2.childNodes[0])	
list2.insertBefore(catContainerIntro2, list2.childNodes[0]);
list2.insertBefore(catTitleContainer2, list2.childNodes[0]); 

}
window.addEventListener("load", cat2, false);

// Second Cat Click function

 var clicks2 = 0;
    function catClicked2() {
        clicks2 += 1;
        document.getElementById("clicks2").innerHTML = clicks2;
    };

// Third Cat function
	
function cat3() {
	
// Variables
var catTitleContainer3 = document.createElement("div");
var catTitleElement3 = document.createElement("H1");
var catTitleText3 = document.createTextNode('Pooper');
var catContainerIntro3 = document.createElement("p")
var catContainerIntroText3 = document.createTextNode("Click the image below to increase your click count.")
var catContainerImg3 = document.createElement("img")
var list3 = document.getElementById("cat-3");
var catClickContainer3 = document.createElement("div");
var catSecondaryTitleElement3 = document.createElement("H2");
var catSecondaryTitleText3 = document.createTextNode('Clicks:');
var catClickCounter3 = document.createElement("span")
var catClickNumber3 = document.createTextNode('0');

// Attributes
catContainerIntro3.setAttribute("class", "cat-title");
catTitleContainer3.setAttribute("id", "cat-title-3");
catTitleContainer3.setAttribute("class", "cat-title");
catContainerImg3.setAttribute("src", "img/cat2-picture.jpg");
catContainerImg3.setAttribute("onClick", "catClicked3()");
catClickCounter3.setAttribute("id", "clicks3");
catClickContainer3.setAttribute("class", "click-container");

// Append childs
catContainerIntro3.appendChild(catContainerIntroText3);
catTitleContainer3.appendChild(catTitleElement3);
catTitleElement3.appendChild(catTitleText3);
catSecondaryTitleElement3.appendChild(catSecondaryTitleText3);
catSecondaryTitleElement3.appendChild(catClickCounter3);
catClickCounter3.appendChild(catClickNumber3);
catClickContainer3.appendChild(catSecondaryTitleElement3);

// Nodes
list3.insertBefore(catClickContainer3, list3.childNodes[0])
list3.insertBefore(catContainerImg3, list3.childNodes[0])	
list3.insertBefore(catContainerIntro3, list3.childNodes[0]);
list3.insertBefore(catTitleContainer3, list3.childNodes[0]); 

}
window.addEventListener("load", cat3, false);

// Third Cat Click function

 var clicks3 = 0;
    function catClicked3() {
        clicks3 += 1;
        document.getElementById("clicks3").innerHTML = clicks3;
    };

// Fourth Cat function
	
function cat4() {
	
// Variables
var catTitleContainer4 = document.createElement("div");
var catTitleElement4 = document.createElement("H1");
var catTitleText4 = document.createTextNode('Stinky');
var catContainerIntro4 = document.createElement("p")
var catContainerIntroText4 = document.createTextNode("Click the image below to increase your click count.")
var catContainerImg4 = document.createElement("img")
var list4 = document.getElementById("cat-4");
var catClickContainer4 = document.createElement("div");
var catSecondaryTitleElement4 = document.createElement("H2");
var catSecondaryTitleText4 = document.createTextNode('Clicks:');
var catClickCounter4 = document.createElement("span")
var catClickNumber4 = document.createTextNode('0');

// Attributes
catContainerIntro4.setAttribute("class", "cat-title");
catTitleContainer4.setAttribute("id", "cat-title-4");
catTitleContainer4.setAttribute("class", "cat-title");
catContainerImg4.setAttribute("src", "img/cat2-picture.jpg");
catContainerImg4.setAttribute("onClick", "catClicked4()");
catClickCounter4.setAttribute("id", "clicks4");
catClickContainer4.setAttribute("class", "click-container");

// Append childs
catContainerIntro4.appendChild(catContainerIntroText4);
catTitleContainer4.appendChild(catTitleElement4);
catTitleElement4.appendChild(catTitleText4);
catSecondaryTitleElement4.appendChild(catSecondaryTitleText4);
catSecondaryTitleElement4.appendChild(catClickCounter4);
catClickCounter4.appendChild(catClickNumber4);
catClickContainer4.appendChild(catSecondaryTitleElement4);

// Nodes
list4.insertBefore(catClickContainer4, list4.childNodes[0])
list4.insertBefore(catContainerImg4, list4.childNodes[0])	
list4.insertBefore(catContainerIntro4, list4.childNodes[0]);
list4.insertBefore(catTitleContainer4, list4.childNodes[0]); 

}
window.addEventListener("load", cat4, false);

// Fourth Cat Click function

 var clicks4 = 0;
    function catClicked4() {
        clicks4 += 1;
        document.getElementById("clicks4").innerHTML = clicks4;
    };

// Fifth Cat function
	
function cat5() {
	
// Variables
var catTitleContainer5 = document.createElement("div");
var catTitleElement5 = document.createElement("H1");
var catTitleText5 = document.createTextNode('Roger');
var catContainerIntro5 = document.createElement("p")
var catContainerIntroText5 = document.createTextNode("Click the image below to increase your click count.")
var catContainerImg5 = document.createElement("img")
var list5 = document.getElementById("cat-5");
var catClickContainer5 = document.createElement("div");
var catSecondaryTitleElement5 = document.createElement("H2");
var catSecondaryTitleText5 = document.createTextNode('Clicks:');
var catClickCounter5 = document.createElement("span")
var catClickNumber5 = document.createTextNode('0');

// Attributes
catContainerIntro5.setAttribute("class", "cat-title");
catTitleContainer5.setAttribute("id", "cat-title-5");
catTitleContainer5.setAttribute("class", "cat-title");
catContainerImg5.setAttribute("src", "img/cat2-picture.jpg");
catContainerImg5.setAttribute("onClick", "catClicked5()");
catClickCounter5.setAttribute("id", "clicks5");
catClickContainer5.setAttribute("class", "click-container");

// Append childs
catContainerIntro5.appendChild(catContainerIntroText5);
catTitleContainer5.appendChild(catTitleElement5);
catTitleElement5.appendChild(catTitleText5);
catSecondaryTitleElement5.appendChild(catSecondaryTitleText5);
catSecondaryTitleElement5.appendChild(catClickCounter5);
catClickCounter5.appendChild(catClickNumber5);
catClickContainer5.appendChild(catSecondaryTitleElement5);

// Nodes
list5.insertBefore(catClickContainer5, list5.childNodes[0])
list5.insertBefore(catContainerImg5, list5.childNodes[0])	
list5.insertBefore(catContainerIntro5, list5.childNodes[0]);
list5.insertBefore(catTitleContainer5, list5.childNodes[0]); 

}
window.addEventListener("load", cat5, false);

// Fifth Cat Click function

 var clicks5 = 0;
    function catClicked5() {
        clicks5 += 1;
        document.getElementById("clicks5").innerHTML = clicks5;
    };

// Cat containers end