const assert = require('../helper')
const functions = require('../note-list-model.js')



function testAddToList(text, body) {
  const lists = new functions.NoteList;
  lists.addToList(text, body)
  assert.isTrue(lists.list[0].title === text);
  assert.isTrue(lists.list[0].body === body);
};

function testListNotes() {
  const lists = new functions.NoteList;
  lists.addToList('Hello world', 'Jack')
  assert.isTrue(lists.listNotes()[0].title === 'Hello world');
  assert.isTrue(lists.listNotes()[0].body === 'Jack');
};




testAddToList('I love JS!');
testListNotes();