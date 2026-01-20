/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
      const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) { 
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); 
            console.log(stack)
        } else {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                console.log(stack)
                return false;
            }
        }
    }

    return stack.length === 0;
};