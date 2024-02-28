
/*
Assignment 5: Problem 3 - Turn the following array of numbers into an array of strings.
The strings should include the number and whether it is odd or even.
Remove any zeros and negative numbers from your result, and order the array from smallest to largest.

For example:
const numbers = [ 5, 4, 3, 2, 1, 0, -1, -2 ]

Would result in:
[
	'1 is odd',
	'2 is even',
	'3 is odd',
	'4 is even',
	'5 is odd'
]

You can use the included `isEven` function to determine if a number is even or odd.

TO TEST:
You can run this example by running `node problems/problem-3` in your terminal,
or you can run all by running `node run-all`.
*/

const { test } = require('../tester')

const isEven = number => number % 2 === 0 // returns true if the number is even

const numbers = [ -10, -5, 0, 5, 10, 8, -2 ]

const numberStrings = numbers // append your array methods here
						.filter(number => number > 0)
						.sort(function(a, b){return a - b})
						.map(number => {
							if(isEven(number)){
								return `${number} is even`
							}else return `${number} is odd`
						})
test("Problem 3", numberStrings)