var pilote = function Pilote(nom) {
    const props = {};
    this.name = name;

    this.receiveData = function (data) {
            propos.state = data.state;   
            propos.position = data.position;
            propos.origin = data.origin;
    }

    this.getState = function () {
        return state.state; 
    }
    this.speak = function () {
        switch (this.props.state) {
            case "ready": return "Here we go!";break;
            case "happy": return "Let's have some fun!";break;
            case "sad": return "Outch!!! Damn {state.origin}";break;
            case "ready": return "Here we go!";break;
            case "finish": switch(state.position){
                case 1 : return "I'm the best";
                case 2 : return "Could be the best";
                default : return "Will be better next time"; 
            }
            default:
                break;
        }
    }
 }
 
 console.log(new Pilote("latif"));








 const pilote = new Pilote("Mario");

pilote.receiveData({ state: "ready" });
if (pilote.needUpdate()) console.log("Speak ready", pilote.speak());
pilote.receiveData({ state: "normal" });
if (pilote.needUpdate()) console.log("Speak normal", pilote.speak());
pilote.receiveData({ state: "normal" });
if (pilote.needUpdate()) console.log("Speak normal", pilote.speak());
pilote.receiveData({ state: "happy" });
if (pilote.needUpdate()) console.log("Speak happy", pilote.speak());
pilote.receiveData({ state: "sad", origin: "Luigi" });
if (pilote.needUpdate()) console.log("Speak sad", pilote.speak());
pilote.receiveData({ state: "finish", position: 1 });
if (pilote.needUpdate()) console.log("Speak finish", pilote.speak());
pilote.receiveData({ state: "finish", position: 1 });
if (pilote.needUpdate()) console.log("Speak finish", pilote.speak());