var conf = require('rc')('marvel-characters')
var api = require('marvel-comics-api-stream')
var fs = require('fs')
var path = require('path')
var date = require('dateformat')
var _ = require('lodash')

const MAX_NAME_LENGTH = 22;

// Generate a shortname for each character that can be used as an ID. This function will:
// - Strip off the variation of a character (in the API as NAME (VARIATION)  )
// - Replace any whitespace with '-'
// - Remove any non-word characters
// - Restrict the length to 22 characters 
function generateShortName(name) {
  return name.replace(/(.*)\s+\(.*\)/, '$1'
    ).replace(/\s+/g, "-"
    ).replace(/[^\w+-]/g, ""
    ).slice(0, MAX_NAME_LENGTH).toLowerCase()
}

var list = []

api('characters', {
  privateKey: conf.privateKey,
  publicKey: conf.publicKey,
  query: {
    limit: 100
  }
}).on('data', function (character) {
  // Only include characters with images
  if (character.thumbnail.path != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
    shortName = generateShortName(character.name)
    console.log(character.name + " - " + shortName)

    list.push({
      id: character.id,
      short_name: shortName,
      name: character.name,
      description: character.description,
      thumbnail: character.thumbnail,
      urls: character.urls
    })
  }
}).on('end', function () {
  var file = path.resolve(__dirname, '..', 'characters.json')
  list = _.uniqBy(list, function(character) {
    return character.short_name
  })

  console.log("Writing to file: %s", file)
  console.log("**Total Characters:** %d", list.length)
  console.log("**Last Updated:** %s.", date(new Date(), 'dddd, mmmm dS, yyyy'))
  fs.writeFile(file, JSON.stringify(list, null, 2), function (err) {
    if (err) throw err
  })
})