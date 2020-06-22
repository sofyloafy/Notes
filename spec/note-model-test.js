const functions = require('../note-model.js')
const assert = require('../helper')


function testNoteText(text) {
  const note = new functions.Note(text);
  assert.isTrue(note.text === text);
};

testNoteText('I love JS!');

function testNotePrint(text) {
  const note = new functions.Note(text)
  assert.isTrue(note.print() === text);
}

testNotePrint('I love JS!');