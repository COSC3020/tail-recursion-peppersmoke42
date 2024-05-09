// Credit goes to ChatGPT for test cases
const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '');

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
for (let i = 0; i < 10; i++)
    assert.strictEqual(fiboTailRecurse(i, 0, 1), fibonacci(i));