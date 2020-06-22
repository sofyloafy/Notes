class NoteList {
  constructor() {
    this.list = []
  }

  addToList(text) {
    this.list.push(text)
  }
};

module.exports = {
  NoteList
};

// let newItem = new NoteList()
// newItem.addToList('buy fromage')
// console.log(newItem.list)
