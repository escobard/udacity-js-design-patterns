// First Cat Click function

 var clicks = 0;
    function catClicked() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };
	
// Second Cat Click function

 var clicks2 = 0;
    function catClicked2() {
        clicks2 += 1;
        document.getElementById("clicks2").innerHTML = clicks2;
    };

// First Cat Click function
var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');