$(function() {
// creates the data object variable 
    var data = {

// sets data.lastID = 0
        lastID: 0,
// creates an empty array for data.pizzas
        pizzas: []
    };

// creates the octopus object variable
    var octopus = {

// creates the octopus.addPizza method function where:
        addPizza: function() {

// the variable thisID = is the value of the incremental addition of the data.lastID value
            var thisID = ++data.lastID;

// pushes the value of the thisID variable into the data.pizzas array as an item. 
            data.pizzas.push({

// sets the method of the the pizzas array item value where:
// data.pizzas.[arraynumber].id = thisID.
                id: thisID,

// data.pizzas.[arraynumber].visible = true.
                visible: true
            });

// returns the view.render function
            view.render();
        },

// create the octopus.removePizza method function that takes pizza as an argument where: 
        removePizza: function(pizza) {

// the variable clickedPizza = data.pizzas[pizza.id -1], so sets the id of the pizza array item method to 1 less
            var clickedPizza = data.pizzas[ pizza.id - 1 ];

// sets the current clickedPizza.visible arry item method to false
            clickedPizza.visible = false;

// returns the view.render function
            view.render();
        },

// creates the octopus.getVisiblePizzas method function that takes pizza as an argument where
        getVisiblePizzas: function() {

            var visiblePizzas = data.pizzas.filter(function(pizza) {
                return pizza.visible;
            });
            return visiblePizzas;
        },

        init: function() {
            view.init();
        }
    };

// the view grabs elements from the DOM that we will use on other parts of the application. 
// attempt to do this for all applications I build moving forward.
    var view = {
// adds an event listener for the button which activates the add pizza function
        init: function() {
            var addPizzaBtn = $('.add-pizza');
            addPizzaBtn.click(function() {
                octopus.addPizza();
            });

            // grab elements and html for using in the render function
            this.$pizzaList = $('.pizza-list');
            this.pizzaTemplate = $('script[data-template="pizza"]').html();

            // Delegated event to listen for removal clicks
            this.$pizzaList.on('click', '.remove-pizza', function(e) {
                var pizza = $(this).parents('.pizza').data();
                octopus.removePizza(pizza);
                return false;
            });

            this.render();
        },

// tells the view to render itself
// in a nutshell clears the pizza list entirely, and renders all visible pizzas each time. 
        render: function() {
            // Cache vars for use in forEach() callback (performance)
            var $pizzaList = this.$pizzaList,
                pizzaTemplate = this.pizzaTemplate;

            // Clear and render
            // sets the html of the .pizza-list to an empty string
            $pizzaList.html('');
            // retrieves visible pizzas from the controler (octopus)
            octopus.getVisiblePizzas().forEach(function(pizza) {
                // for each exsisting pizza object, replace 
                // Replace template markers with data in the pizza object.
                // Fills the template HTML with the pizza ID, and adding it to the pizza list
                var thisTemplate = pizzaTemplate.replace(/{{id}}/g, pizza.id);
                $pizzaList.append(thisTemplate);
            });
        }
    };

    octopus.init();
}());
