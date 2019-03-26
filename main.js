// Remember to realx and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript

// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE: please use the console to test your code :)


//==============================================================================
/*                              Q1                                            */
//==============================================================================
/*
 using closures create a function called makePizza that has the following properties and methods
 crust a property represented by a string. ex "thin","thick". 
 size a property represented by a string. ex "M","L".
 numberOfSlice a property that hold the number of slice, ex: 8
 ** the values of all properties will be provided as arguments in the function invocation. 
 addIngredients a function that add a new ingredient to the ingredients property.
 displayIngredients a function that displays a comma separated string of all ingredients. ex: The ingredients are:tomato,mushroom,meat
 bakePizza a function that display a string with your pizza description after 2 seconds. ex "Your thin M 8 slice pizza is done" 
 eatSlice a function that let you eat from the pizza as long as the numberOfSlice is greater than zero and decrease the total number of slices by one.
 */
//Example:
// var pizza = makePizza("thin", "M", 2);
// pizza.addIngredients("tomato");
// pizza.addIngredients("meshroom");
// pizza.addIngredients("meat");
// console.log(pizza.displayIngredaints());
// pizza.bakePizza();
// pizza.eatSlice();
// pizza.eatSlice();
// pizza.eatSlice();

// Write your code here .....
//create function makepizza

function makePizzaNew(crust , size , numOfSlice){
    var instance = {};
    instance.crust = crust;
    instance.size = size;
    instance.numOfSlice = numOfSlice;
    instance.ingredients = [];
    
    
    instance.addIngredients = function(ingred){
        
       return instance.ingredients.push(ingred);
    }

    instance.displayIngredients = function(){
        var display = "The ingredients are";
        for(var i=0 ; i<instance.ingredients.length ; i++){
            if(i  === instance.ingredients.length-1) {
                display = display + instance.ingredients + '.';
            }else {
                display = display + instance.ingredients + ','
            }
        
        }
        return display;
            }

            instance.bakePizza = function(){

                return setTimeout(function(){return "Your"+ instance.crust + ' ' +instance.size + ' ' + instance.numOfSlice + "pizza is done" } , 2000);
            }

            instance.eatSlice = function(){
                if(instance.numOfSlice  > 0){
                    instance.numOfSlice--;
                }else {
                    return "Stop Eating";
                }
            }




    
    return instance;

        
    }
    


//=============================================================================
/*                                  Q2                                       */
//=============================================================================
/*
Create a readingList class by using OOP concept, where:
Your class should has:
"read" for the number of books that finish reading
"unRead" for the number of books that still not read
"toRead" array for the books names that want to read in the future
"currentRead" for the name of the book that is reading currently
"readBooks" Array of the names of books that finish read
"AddBook" function that:
a- Accept the book name as parameter
b- Add the new book to "toRead" array
c- Increment the number of the unread books.
"finishCurrentBook" function that:
a- Add the "currentRead" to the "readBooks" array
b- Increment the "read" books
c- Change the "currentRead" to be the first book from "toRead" array
d- Decrement the number of "unread" books
*/
// Write your code here .....

function readingList(){
    var obj = {};
    obj.read  = 0;
    obj.unRead = 0; // read in the future
    obj.toRead = [];
    obj.currentRead = "";
    obj.readBooks = [];
    obj.AddBook = AddBook;
    obj.finishCurrentBook = finishCurrentBook;
    return obj;
    
}


function AddBook(bookName){
    var that = this;
    if(that.currentRead  == ""){
        that.currentRead = bookName;
    }
    that.toRead.push(bookName);
    that.unRead++
}
function finishCurrentBook(){
    var that = this;
    that.readBooks.push(this.currentRead);
    that.read++;
    that.toRead.unshift(that.currentRead);
    that.unRead--;
}



// to make sure that you are actually reading, make a comment below this and type: Yes I am

//=============================================================================
/*                                  Q3                                       */
//=============================================================================
//Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
//makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
//itemSize should be either "big", "medium" and "small"
//big sized items will hold 3 slots in the storage
//medium sized items will hold 2 slots in the storage
//small sized items  will hold 1 slot in the storage
//return "Can't fit" if you try to add an item that exceeds the storage size limit
//when the safe is full return a string representing all the items that are in the safe
//Example:
//  var safe = makeSafe(5)
//  safe('watch','small')
//  safe('gold-bar','big')
//  safe('silver-bar','big') => "Can't fit"
//  safe('money','small') => "watch gold-bar money"

// Write your code here .....

function makeSafe(initial){
    var obj = {};
    obj.sizeLimit = initial;
    
    obj.addItem = function(item , itemSize)
    {
        var itemSize = "".split('');
        for(var i =0 ;i<itemSize.length ; i++){

            if(itemSize[i] === "big"){
                sizeLimit = 3 + "slots in the storge";
            }else if(itemSize[i] === 'medium') {
                sizeLimit = 2 +' ' +itemSize[i];
            }else if (itemSize[i] === "small") {
                sizeLimit = 1 + "slots in the storge";
            }else {
                return "Can't Fit";
            }
        }
    }

    return obj;
} //specify the storge size limit



//================================================================================
/*                              Q4                                              */
//================================================================================

// You can only use MDN as a resource in case you need one (https://developer.mozilla.org/en-US/docs/Learn/HTML).
// 1. Create new HTML file a with a three buttons and div with heading and paragraph inside it.
//      a. button1 : Important
//      b. button2 : normal
//      c. button3 : rest
// You can use this code for the div content: 
// Heading for the div
// I'm a simple html paragraph and the css can controll my attributes. The JS will make the page interactive.
// 2.Create an input text and a button called Add.
// 3. Create a new JS file  and link between the js and HTML
// 4. Create css file and link it to your HTML file, and write css code for the following: 
//     a. Change the background color for the whole page.
//     b. Change the font family for the header of the page.  
//     c. Enlarge the input text (both: width & height).
// 5. Add Interaction for the buttons as the following: 
// When the Important button clicked! change the background color to red and text to white and heading to dark red.
// When the normal button clicked! change the background color to lightblue and text to white and heading to dark blue
// When the rest button clicked! change the background color to white and the text to black.
// 6. Connect jQuery library to the HTML file
// 7. Write javascript function when user type text inside the input text and click the "Add" 
//     button it will add the text to the ul element.

//================================================================================
/*                              Q5                                             */
//================================================================================
// Theoretical questions.
// 1- In your own words,Why do we use Closures ? clouse uses intead of global variable to be more secured
// 2- In OOP, what does "this" refer to ?   this is used to invoke from another function (refactor)
// 3- What is jQuery? library for javaScript That help us to make code less and readble
// 4- what is the diffrence between Closure's methods and The OOP's methods? clusure all the function it inside the clousre and oop we can invoke function as much as we  want


                              //  Good Luck :))