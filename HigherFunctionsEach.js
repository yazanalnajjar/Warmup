	// 1) 'negativeAll' create function that accept array as input and check the element 
    //     if it's positive make it negative 
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
	function negativeAll(array) {
	 each(array , function(num){
        if(num > 0) {
            return num * -1;
        }else {
            return num;
        }
     });
	}

	/*
	2) using improved each write function that multiply each element in array with
	 4 if index multiply of 4 

	 var x = [2, 4, 6, 8, 10, 12, 14, 16]
		multiplyOfFour(x);  => [16, 64 , 256] 
    */
   
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
            func(array[i], i);
        }
    }
    var x = [2, 4, 6, 8, 10, 12, 14, 16]
	function multiplyOfFour(array) {
        //your code here
        each(array , function(num){
            if(num % 4 === 0){
                return num *4;
            }
        });
	}
