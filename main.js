/* eslint-disable no-unused-vars */
var quote = 'Music produces a kind of pleasure which human nature cannot do without.'
var characters = quote.split('')
var spanChar = document.createElement('span')

function toObjects() {
  var arrayObj = []
  for (var i = 0; i < characters.length; i++) {
    var newObject = {
      letter: characters[i]
    }
    arrayObj.push(newObject)
  }
  return arrayObj
}

function single(input) {
  var output = 0
  for (var key in input) {
    output = input[key]
    spanChar.textContent = output // return a span?
  }
}
