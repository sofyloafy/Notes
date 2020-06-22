const assert = require('../helper');
const functions = require('../note-list-view');
const List = require('../note-list-model');

let list = new List.NoteList()
list.addToList('todo', 'reflect')
function testHTMLString(list) {
    const noteTemplate = new functions.NoteListView(list.list);
    console.log(list.list)
    // console.log(noteTemplate.notelistview())
    assert.isTrue(noteTemplate.notelistview() === `<ul><li><div>todo: reflect</div></li></ul>`)
};

testHTMLString(list)