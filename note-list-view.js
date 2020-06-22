class NoteListView {

    constructor(lists) {
        this.lists = lists
    }

    notelistview() {
        this.lists.forEach(note => {
            return `<ul><li><div>${note.title}: ${note.body}</div></li></ul>`
        });
    }
}

module.exports = {
    NoteListView
}