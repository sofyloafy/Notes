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

module.exports =  {
  Note,
  assert
};