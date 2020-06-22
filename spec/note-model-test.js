const functions = require('../note-model.js')


function testNoteText(text) {
  const note = new functions.Note(text);
  // console.log(note)
  functions.assert.isTrue(note.text === text);
};

testNoteText('I love JS!');

function testNotePrint(text) {
  const note = new functions.Note(text)
  functions.assert.isTrue(note.print() === text);
}

testNotePrint('I love JS!');