$(function() {

// THIS IS THE MODEL
// On the Model, this is where all the data is stored. In most cases this would be a database, but this also means that the model is the part of the application that 
// STORES data for and to the application.
// Contains data from both the SERVER and the USER
// creates the data object variable 
    var data = {

// sets data.lastID = 0
        lastID: 0,
// creates an empty array for data.pizzas
        pizzas: []
    };
// MODEL END

// THIS IS THE CONTROLLER
// The model and the view never directly talk to each other.
// The controller is the only thing that connects them.
// On the Controller, connects the MODEL and the VIEW, and interacts with both of them to create the FUNCTIONALITY of the application. 
// MVCs are created so that when the view is changed, or the model is changed, it does not disturb either of the two. 
// creates the octopus object variable
    var octopus = {

// creates the octopus.addPizza method function where:
// This function is called by the View to add a pizza within the model (or stores the pizza data)
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
// also called by the view, when you click on the x on each actual pizza
// add and remove pizza are the only method funtions within the controller that changes the model part of the application (or changes the data)
        removePizza: function(pizza) {

// the variable clickedPizza = data.pizzas[pizza.id -1], so sets the id of the pizza array item method to 1 less
            var clickedPizza = data.pizzas[ pizza.id - 1 ];

// sets the current clickedPizza.visible arry item method to false
            clickedPizza.visible = false;

// returns the view.render function
            view.render();
        },

// creates the octopus.getVisiblePizzas method function that takes pizza as an argument where
// this retrieves data from the model
// in other terms, rather than the view directly asking the model for how many pizzas we have, it asks the controller, who then asks the model, and then tells
// the view
        getVisiblePizzas: function() {
// this doesn't actually return the pizzas to the view, it filters only the number of pizzas (and their id's) that are VISIBLE to the view
// In other words, remove pizza does not actually delete pizzas, it simple changes each pizza.visible status to false. 
// This function retrieves all pizzas that have the pizza'visible true status and returns them to the view. 
            var visiblePizzas = data.pizzas.filter(function(pizza) {
                return pizza.visible;

            });
            return visiblePizzas;
        },

        init: function() {
            view.init();
        }
    };

// CONTROLLER END

// VIEW BEGIN 
// On view: Includes all DOM elements, input elements, buttons and images. in other words, the part of the application that contains the INTERFACE of the application
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
}
// VIEW END

());
