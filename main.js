/* eslint-disable no-unused-vars */
var phrase = 'Grumpy wizards make toxic brew for the evil queen and jack'
var space = ''
var characters = phrase.split(space)
var point = null
var newObjects = toObjects()
var $span = document.getElementById('verbiage')

function toObjects() {
  var array = []
  for (var i = 0; i < characters.length; i++) {
    var newObject = {
      letter: characters[i]
    }
    array.push(newObject)
  }
  return array
}

function single(char) {
  var text = document.createTextNode(char)
  $span.appendChild(text)
}
