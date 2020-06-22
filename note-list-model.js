class NoteList {
    constructor() {
        this.list = []
    }

    addToList(text, body) {
        this.list.push({ title: text, body })
    }

    listNotes() {
        return this.list
    }
};

module.exports = {
    NoteList
};

// let newItem = new NoteList()
// newItem.addToList('buy fromage')
// console.log(newItem.list)
