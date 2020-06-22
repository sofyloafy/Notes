const assert = require('../helper')
const functions = require('../note-list-model.js')



function testAddToList(text) {
  const lists = new functions.NoteList;
  lists.addToList(text)
  assert.isTrue(lists.list[0].title === text);
};

testAddToList('I love JS!');