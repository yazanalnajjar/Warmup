 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
	 //your code is here

	 return filter(num , function(n){
		return Math.round(n);
	 });

 }

 function filter(array , predicate) {
	 var acc = [];
	 each(array, function(element){
		if(predicate(element)) {
			acc.push(element);
		}
	 });
 }



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


function closestMultipleOf10(num) {
	//your code is here

	return filter(num , function(n){
	   return Math.round(n);
	});

}