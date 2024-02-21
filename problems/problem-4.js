
/*
Assignment 5: Problem 4 - Turn in the following array of arrays into a single object.
The first element in each array is the key, and the second element is the value.

You will also be asked to omit an element from the array.

For example, the following array:

const items = [
	  [ 'name', 'Ford' ],
	  [ 'model', 'Mustang' ],
	  [ 'year', 1964 ], 	// Omit this element
	  [ 'color', 'red' ]
]

Should be turned into the following object:
{
	name: 'Ford',
	model: 'Mustang',
	color: 'red'
}
*/

const { test } = require('../tester')

const items = [
	  [ 'firstName', 'Luke'],
	  [ 'lastName', 'Skywalker'],
	  [ 'age', 19],
	  [ 'occupation', 'Jedi'],
	  [ 'homePlanet', 'Tatooine']
]

// Omit the 'age' element

const person = items // append your code here
	.reduce((acc, [key, value]) => {
		if (key === 'age') return acc
		acc[key] = value
		return acc
	}, { })

test("Problem 4", person)