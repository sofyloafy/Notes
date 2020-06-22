var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
    }
  };

  class Note{
    constructor(text){
      this.text = text 
    }


  };

  // var note = new Note('I love JS!');
  // console.log(note)

module.exports =  {
  Note,
  assert
};