

String.prototype.ucfirst = function (){
    return this.charAt(0).toUpperCase() + this.slice(1);
}


console.log("hello latif".ucfirst());



String.prototype.vig = function(code) {
    if (this.length === 0) return this;
  
    while (code.length < this.length) {
      code += code;
    }
    code = code.substr(0, this.length);
    let codeIndex = 0;
  
    return this
      .split("")
      .map((letter, index) => {
        letter = letter.toLowerCase();
        const aCode = "a".charCodeAt(0);
        const letterNumber = letter.charCodeAt(0) - aCode; // [0-25]
  
        if (letterNumber < 0 || letterNumber > 25) return letter;
  
        const codeNumber = code.charCodeAt(codeIndex) - aCode; // [0-25]
        codeIndex++;
  
        return String.fromCharCode(((letterNumber + codeNumber) % 26) + aCode);
      })
      .join("");
  }

  console.log("vig " + "".vig([0-25]));




  Object.prototype.prop_access = function(path) {
    if(path === "" || path == null){
      return this;
    }
    if(this == null){
      return path + " not exist";
    }
    let props = path.split('.');
    let result = this;
    for (var i = 0; i < props.length; i++) {
      result = result[props[i]];
      if (typeof result === 'undefined'){
        return path + "not exist";
      }
    }
    return result;
  }



console.log(prop_access({ animal: { type: { name: "chine"} } }, "animal.type.name"));




// String.prototype.ucfirst = function () {
//     return this.charAt(0).toUpperCase() + this.slice(1);

// }