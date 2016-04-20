noteApp.controller('noteController', function() {
  this.charactersLeft = 100;
  this.messageNote = '';
  this.triedSaving = false;
  this.savedNote;

  this.count = () => {
    this.charactersLeft = 100 - this.messageNote.length;
  };
  
  this.clear = () => {
    this.messageNote = '';
    this.count();
  };

  this.save = () => {
    this.triedSaving = true;
    if (this.messageNote.length > 0) {
      this.savedNote = this.messageNote;
      this.saveStatus = 'bg-success text-success';
      this.statusMessage = 'Texte sauvegardé !';
    } else {
      this.saveStatus = 'bg-danger text-danger';
      this.statusMessage = 'La sauvegarde a échoué.';
    }
  };  
});
