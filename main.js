/* eslint-disable no-unused-vars */
var quote = 'Music produces a kind of pleasure which human nature cannot do without.'
var arrObj = toObjects(quote)
var $challenge = document.getElementById('challenge')

function toObjects(characters) {
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
    var spanChar = document.createElement('span')
    spanChar.textContent = output // return a span?
    return spanChar
  }
}
// Loop through character objects
// For each of them
//  Create a new span
//  Append the new span to the page
function showChars(input) {
  for (var i = 0; i < input.length; i++) {
    var runSingle = single(input[i])
    $challenge.appendChild(runSingle)
  }
}

showChars(arrObj)
