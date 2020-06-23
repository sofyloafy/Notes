class NoteListView {

    constructor(lists, title, body) {
        this.lists = lists
        this.title = title
        this.body = body
    }

    notelistview() {
        for(var i = 0; i < this.lists.length; i ++) {
        var item = this.lists[i];
        console.log(item)
        var result = (`<ul><li><div>${item.title}: ${item.body}</div></li></ul>`)
        console.log(result)
        
    }
    return result
    }
}

module.exports = {
    NoteListView
}
