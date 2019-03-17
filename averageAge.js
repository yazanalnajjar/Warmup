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
 function averageAge(people) { 
 	var ages = 0;
 	var count = 0;                                          //making a variable to store the sum of all the ages and starting our counting process
       for (i = 0 ; i < people.length; i++)               // looping through the array of objects
       if(people[i].age >= 18 && people[i].age <= 50) {	 // making a condition on the range of ages occording to the excersise
       	ages += people[i].age;                           // suming up all the people within the age range
       	count++                                         //counting the number of people within the age range
       }
      return ages/count;                                // calculating the avg.
}

 averageAge(people); // 43+36+44+24 = 36.74
