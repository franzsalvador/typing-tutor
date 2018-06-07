/* eslint-disable no-unused-vars */
var quote = 'Music produces a kind of pleasure which human nature cannot do without.'
var arrObj = toObjects(quote)
var $challenge = document.getElementById('challenge')

function toObjects(characters) {
  var arrayObj = []
  for (var i = 0; i < characters.length; i++) {
    var newObject = {
      letter: characters[i], failures: 0
    }
    arrayObj.push(newObject)
  }
  return arrayObj
}
// Take one object at a time
function single(input, index, current) {
  var spanChar = document.createElement('span')
  if (index === current) {
    spanChar.className = 'currentChar'
  }
  spanChar.textContent = input.letter //
  return spanChar
}
// Loop through character objects
// For each of them
//  Create a new span
//  Append the new span to the page
function showChars(characters) {
  for (var i = 0; i < characters.length; i++) {
    var runSingle = single(characters[i], i, appState.currentCharacter)
    $challenge.appendChild(runSingle)
  }
}
// Create an Object to represent the application state, and make the characters a property.
// Add a property to the application state to track the index of the currentCharacter.
// Define a CSS class to highlight the current-character.
// Enhance function that renders a character to conditionally add a special current-character class.
var appState = {
  characters: arrObj,
  currentCharacter: 0
}

document.addEventListener('keydown', function() {
  $challenge.textContent = "  "
  showChars(arrObj)
})

showChars(arrObj)
