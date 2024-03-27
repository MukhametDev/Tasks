function isValidParentheses(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            const topElement = stack.pop();
            if (mapping[char] !== topElement) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValidParentheses("()[]{}"));
console.log(isValidParentheses("(]"));
console.log(isValidParentheses("([)]"));
console.log(isValidParentheses("{[]}")); 
