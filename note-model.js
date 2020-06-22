var assert = {
  isTrue: function (assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    else {
      console.log("All good ✅")
    }
  }
};

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
  Note,
  assert
};