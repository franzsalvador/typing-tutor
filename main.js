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

function single(input, index, current) {
  var spanChar = document.createElement('span')
  if (index === current) {
    spanChar.className = 'currentChar'
  }
  spanChar.textContent = input.letter
  return spanChar
}

function showChars(characters) {
  for (var i = 0; i < characters.length; i++) {
    var runSingle = single(characters[i], i, appState.currentCharacter)
    $challenge.appendChild(runSingle)
  }
}

var appState = {
  characters: arrObj,
  currentCharacter: 0
}

window.addEventListener('keydown', function (event) {
  $challenge.textContent = ''
  if (event.key === 'Shift') {
    return
  }
  if (event.key !== appState.characters[appState.currentCharacter].letter) {
    appState.characters[appState.currentCharacter].failures++
  }
  showChars(arrObj)
})

showChars(arrObj)
