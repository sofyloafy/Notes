const functions = require('../note-model.js')


function testNoteText(text){
  const note = new functions.Note;
  console.log(note)
  functions.assert.isTrue(note.text === text);
};

testNoteText('I love JS!');