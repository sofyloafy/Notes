const assert = require('../helper');
const functions = require('../note-list-view');
const List = require('../note-list-model');

let list = new List.NoteList();
let item = new functions.NoteListView(list.list,list.title,list.body);


function testHTMLString(title, body) {
    list.addToList(title, body)
    item.notelistview()
    assert.isTrue(item.notelistview() === `<ul><li><div>${title}: ${body}</div></li></ul>`)
};


    // const noteTemplate = new functions.NoteListView(list.list, list.title, list.body);
//     console.log(noteTemplate.notelistview())
//     assert.isTrue(noteTemplate.notelistview() === `<ul><li><div>todo: reflect</div></li></ul>`)

// function testHTMLString() {
//     const noteTemplate = new functions.NoteListView(list.list);
//     console.log(noteTemplate.notelistview())
//     assert.isTrue(noteTemplate.notelistview() === `<ul><li><div>to buy: milk</div></li></ul>`)
// };


testHTMLString('to buy', 'milk');
// testHTMLString('to do', 'reflect');
// testHTMLString('to do', 'think');
