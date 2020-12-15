var pilote = function Pilote(nom) {
    this.nom = nom;
    var stat;
    this.receiveData = function (params) {
   
    }

    this.getState = function (params) {
        return this.stat; 
    }
    this.speak = function () {
        switch (state) {
            case "ready": return "Here we go!";break;
            case "happy": return "Let's have some fun!";break;
            case "sad": return "Outch!!! Damn {this.receiveData.}";break;
            case "ready": return "Here we go!";break;
        
            default:
                break;
        }
    }
 }
 
 console.log(new Pilote("latif"));