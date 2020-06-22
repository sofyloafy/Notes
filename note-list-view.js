class NoteListView {

    constructor(lists, title, body) {
        this.lists = lists
        this.title = title
        this.body = body
    }

    notelistview() {

        var item = this.lists[0];
        console.log(item)
        var result = (`<ul><li><div>${item.title}: ${item.body}</div></li></ul>`)
        console.log(result)
        return result
    }
}

module.exports = {
    NoteListView
}
