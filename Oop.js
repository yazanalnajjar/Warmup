// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.




function makeGame(upperbound){
	var Obj = {};
	Obj.upperbound = upperbound;
  Obj.rand=randInt(upperbound);
  var counter=0;
  return  Obj
  	
  
  	
  
}
 var  guessMyNumber =function(num){
	var access = this;
	access.counter++;
	if (num > access.upperbound) {
		return "Out of bounds! Please try a number between 0 and " + access.upperbound + ".";
	} else if (num === access.rand) {
		return "You guessed my number!";
	}
	return "Nope! That wasn't it!";
}

var giveUp =function (){
	return access.rand;
}
var numOfGuesses = function (){
	return access.counter;
}

randInt = function (n) {
	return Math.floor(Math.random() * (n + 1));
}