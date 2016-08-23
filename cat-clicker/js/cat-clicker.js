// First Cat Click function

 var clicks = 0;
    function catClicked() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

// First Cat Title function	
function catTitle1() {
	var catTitleContainer = document.createElement("div");
    var catTitleElement = document.createElement("H1");
    var catTitleText = document.createTextNode("Ollie");
	catTitleContainer.appendChild(catTitleElement);
    catTitleElement.appendChild(catTitleText);
	catTitleContainer.setAttribute("id", "cat-title-1");
	catTitleContainer.setAttribute("class", "cat-title");
	var list = document.getElementById("cat-1");
    list.insertBefore(catTitleContainer, list.childNodes[0]);
}
window.addEventListener("load", catTitle1, false);

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
