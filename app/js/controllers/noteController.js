var NoteApp = angular.module("NoteApp").controller("NoteController", function() {
    this.message = "";
    this.memory="";
    this.info="";
    this.status=1;
    this.count  = function() {
        result= 100 - this.message.length;
        if(result<20){
            this.status=2;
        }
        if(result<10){
            this.status=3;
        }
        return result;
    };
    this.clear = function() {this.message = "";this.info="";this.status=0;};
    this.save  = function() {this.memory=this.message;this.info="Note sauvegardée";this.status=0};
    this.updateInfo=function() {
        if(this.message!=this.memory) {
            this.info = "Note modifiée";
        }
    };
});
