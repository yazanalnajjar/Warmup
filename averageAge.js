// Write a function called  averageAge that accpets an array of objects and return the average ages for the people who are between 18 and 50
 

 var people = [ 
       {name: {first: 'Ahmad', middle: 'B.', last: 'AlAhmad'}, age: 85}, 
       {name: {first: 'Amer', last: 'MHD'}, age: 43}, 
       {name: {first: 'Aya', last: 'Sultan'}, age: 36}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 44}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 54}, 
       {name: {first: 'Lina', last: 'MHD'}, age: 14} ,
       {name: {first: 'Obada', last: 'Eddin'}, age: 24} 
 ]; 
/* 17-Mar-2019 by Ayman Hariri
 */
 
 function averageAge(people) { 
       // YOUR CODE HERE 
       var counter = 0; 										// count ages between 18 and 50
       var sum = 0;												// hold the sum of ages
      	for (var i = 0; i < people.length; i++) {				// iterate the array people element
      		if (people[i].age >= 18 && people[i].age <=50) {  	// check the age between 18 and 50
      			counter++;										// increace the counter
       		 	sum += people[i].age;							// add the age to the sum
       		}
      	}
      	return sum / counter; 									// return the average
 }

 averageAge(people); // 43+36+44+24 = 36.74

 averageAge(people); // 43+36+44+24 = 36.74