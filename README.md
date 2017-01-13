# marvel-characters

This is a fork of the [marvel-characters](https://github.com/mattdesl/marvel-characters) project. On my team we use marvel character names for each of the different test clusters we create. This extends the original project by exporting more than just the character names.

The `characters.json` contains the following information from the marvel API:

 * Id
 * Name
 * Description
 * Thumbnail
 * Links
 * Short Name - Shorter, unique name suitable for a generated hostname. Has the following rules:
   * Strip off the variation of a character (in the API as NAME (VARIATION)  )
   * Replace any whitespace with '-'
   * Remove any non-word characters
   * Restrict the length to 22 characters
    
[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A list of all public comic book character names in the [Marvel universe](https://en.wikipedia.org/wiki/Marvel_Universe), sourced from the API.

**Total Characters:** 1251
**Last Updated:** Friday, January 13th, 2017.

Data provided by Marvel. © 2017 Marvel

## Install

```sh
npm install marvel-characters [--g|--save]
```

## Example

```js
var marvel = require('marvel-characters')

// random character
console.log(marvel())
//=> 'Iron Man'

// all characters
console.log(marvel.characterNames)
//=> ["3-D Man", "A-Bomb", ..., "Zuras", "Zzzax"]

// character information
console.log(marvel.character('iron-man'))
```

## Usage

### API

#### `name = marvel()`

Returns a random Marvel character name, like `"Spider-Man"`.

#### `list = marvel.characterNames`

The array of all character names.

#### `character = marvel.character(short-name)`

The json information for a single character.

#### `list = require('marvel-characters/characters.json')`

The required JSON array.

### CLI

You can also use the CLI here.

```
Usage:
  marvel-characters [opt]
  
Options:
  --help  show help
  --all   list all characters 
```

Example:

```sh
$ marvel-characters
Green Goblin
```

## Running From Source

Clone & install:

```sh
git clone https://github.com/chrisdail/marvel-characters.git
cd marvel-characters
npm install
```

You will need a Marvel Developer account. Once you have API keys, copy them into a `.marvel-charactersrc` file in the same directory. It should look like this, with your keys:

```json
{
  "privateKey": "egadg545151232d02ea0b9asdfasdfd5699a",
  "publicKey": "badsg1cbadsggagafdh0"
}
```

Then use `npm start` to scrape the new data.

## See Also

- [marvel-comics-api](https://github.com/mattdesl/marvel-comics-api)
- [marvel-comics-api-stream](https://github.com/mattdesl/marvel-comics-api-stream)

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/marvel-characters/blob/master/LICENSE.md) for details.
