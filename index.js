var _ = require('lodash')
var uniqueRandomArray = require('unique-random-array')
var characters = require('./characters.json')

var characterNames = _.map(characters, character => character.short_name)

module.exports = uniqueRandomArray(characterNames)

module.exports.characters = characters
module.exports.characterNames = characterNames
module.exports.character = character => _.find(characters, c => character == c.short_name)