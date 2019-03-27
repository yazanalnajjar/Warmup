/* 
Given an array of integers, return indices of the two numbers
such that they add up to a specific target.
You may assume that each input would have exactly one solution.
Example:
var nums = [2, 7, 11, 15], target = 9,
twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;
*/

var nums = [2, 7, 11, 15], target = 9;
function arrint(array ,target) {
      var arr= [];
    
      for(var i = 0 ;i < array.length ; i++){
        var sum = array[i+1];
        console.log(sum);
        if(array[i] + sum === target){
            arr.push(array[i] + ',' + sum);
        }
        
        //    arr.push(array[i]+sum);
           
            
      }
      return arr;
      

}