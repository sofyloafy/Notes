class Note {
  constructor(text) {
    this.text = text
  }

  print = () => {
    return this.text
  }


};

// var note = new Note('I love JS!');
// console.log(note.print())

module.exports = {
  Note
}