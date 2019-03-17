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

function each(coll, func) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   func(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   func(coll[key], key); 
             } 
       } 
 }

 function filter(coll,predicate){
	if(Array.isArray(coll)){
		var acc = [];
	each (coll,function(element,i){
		if(predicate(element,i)){
			acc.push(element);
		}
	})}
	return acc;
 }
 

 function averageAge(people) { 
 	filter(people , function(element){
 		if (element > 0 ) {
 			element / 2
 		}

 	})
    
 }

 averageAge(people); // 43+36+44+24 = 36.74