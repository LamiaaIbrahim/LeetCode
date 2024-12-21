/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let x =[] ;
    for (let i = 0; i < nums.length; i++) {
        let temp = 0;
  nums.forEach((item, index) => {
      if (i != index+1){
       temp = nums[i] + nums[index+1];
          }
       if (temp === target){
        x.push(i, index+1);
          
       }});
        if (x.length > 0) {
  break;}
            
            
}
   
    return x;
}
                