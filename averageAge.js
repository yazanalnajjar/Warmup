// Write a function called  averageAge that accpets an array of objects and return the average ages for the people who are between 18 and 50
 
function each(array, func) {
	  for (var i = 0; i < array.length; i++) {
	    func(array[i],i);
	  }
	}

 function reduce(array, f, acc) { 
       if (acc === undefined) { 
             acc = array[0]; 
             array = array.slice(1); 
       } 
       each(array, function(element, i) { 
             acc = f(acc, element, i); 
       }); 
       return acc; 
 }


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
 	var count = 0
      var = sum reduce(people, function(total, element){
      	if(element.age > 18 && element.age < 50){
      		count++
      		return total + element.age; 
      		
      	} 
      },0)
      return sum / count

 }

 averageAge(people); // 43+36+44+24 = 36.74