/* eslint-disable no-unused-vars */
var quote = 'Music produces a kind of pleasure which human nature cannot do without.'
var characters = quote.split('')
var intoObjects = toObjects()
var $challenge = document.getElementById('challenge')

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

function single(char) {
  var text = document.createTextNode(char)
  $challenge.appendChild(text)
}
