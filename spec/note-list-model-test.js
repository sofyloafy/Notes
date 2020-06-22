const assert = require('../helper')
const functions = require('../note-list-model.js')



function testAddToList(text) {
  const lists = new functions.NoteList;
  lists.addToList(text)
  assert.isTrue(lists.list[0].title === text);
};

function testListNotes() {
  const lists = new functions.NoteList;
  lists.addToList('Hello world')
  assert.isTrue(lists.listNotes()[0].title === 'Hello world');
  };




testAddToList('I love JS!');
testListNotes();