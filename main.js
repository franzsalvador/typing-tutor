/* eslint-disable no-unused-vars */
var quote = 'Music produces a kind of pleasure which human nature cannot do without.'
var arrObj = toObjects(quote)
var $challenge = document.getElementById('challenge')
var gameOver = document.querySelector('p')

function toObjects(characters) {
  var arrayObj = []
  for (var i = 0; i < characters.length; i++) {
    var newObject = {
      letter: characters[i],
      failures: 0
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
  if (index === current && appState.characters[appState.currentCharacter].failures > 0) {
    spanChar.className = 'failed'
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

window.addEventListener('keydown', function (event) {
  $challenge.innerHTML = ''
  if (event.key === 'Shift') {
    appState.total++
    return
  }
  if (event.key === appState.characters[appState.currentCharacter].letter) {
    appState.currentCharacter++
    appState.total++
  }
  else {
    appState.characters[appState.currentCharacter].failures++
    appState.total++
  }
  showChars(arrObj)
})

var appState = {
  characters: arrObj,
  currentCharacter: 0,
  total: 0 //
}

function score() {
  var totalFails = 0
  for (var i = 0; i < appState.characters.length; i++) {
    totalFails += appState.characters[i].failures
  }
  var score = Math.round(((appState.total - totalFails) / appState.total) * 100) + '%'
}

showChars(arrObj)
