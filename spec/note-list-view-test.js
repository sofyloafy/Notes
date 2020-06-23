const assert = require('../helper');
const functions = require('../note-list-view');
const List = require('../note-list-model');

let list = new List.NoteList();
let item = new functions.NoteListView(list.list,list.title,list.body);


function testHTMLString(title, body) {
    list.addToList(title, body)
    assert.isTrue(item.notelistview() === `<ul><li><div>${title}: ${body}</div></li></ul>`)
};

testHTMLString('to buy', 'milk');
testHTMLString('to do', 'reflect');
testHTMLString('to do', 'think');
