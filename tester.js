
const fs = require('fs')

const pass = x => x
const { red, green, gray } = fs.existsSync('node_modules/chalk')
	? require('chalk') : { red: pass, green: pass, gray: pass }

const results = require('./results.json')

const fail = (problemId, message) => {
	console.log(`${problemId}:`, red(`Failed with message:`), gray(`\n${message}`))
}

const test = (problemId, submittedAnswer) => {
	const result = results[problemId]
	if (!result) return fail(problemId, `There is no soultion for '${problemId}'`)

	const expected = JSON.stringify(result)
	const submitted = JSON.stringify(submittedAnswer)

	if (expected === submitted) {
		return console.log(`${problemId}:`, green(`Success!`))
	}

	const displaySubmitted = JSON.stringify(submittedAnswer, null, 2)
	const displayExpected = JSON.stringify(result, null, 2)

	fail(problemId, `Your answer didn't produce the expected result.\n\nYour answer was:\n${displaySubmitted}\n\nExpected was:\n${displayExpected}`)
}

module.exports = { test }