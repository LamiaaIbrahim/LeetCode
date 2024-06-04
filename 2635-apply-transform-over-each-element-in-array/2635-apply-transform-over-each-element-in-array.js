/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
     let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    let n = fn(arr[i], i);
    new_arr.push(n);
  }
  return new_arr;
};