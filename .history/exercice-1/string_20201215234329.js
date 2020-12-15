
function ucfirts(chaine){
    if (typeof chaine !== "string" || chaine === "" ) {
        return "";
    }
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}


function capitalize(chaine){
    if (typeof chaine !== "string" || chaine === "" ) {
        return "";
    }
    return chaine.split(' ').map(word => ucfirts(word)).join(' ');
}

// console.log(capitalize("abdellatif chalal etudaie en france"));


function camelCase(chaine){
    if (typeof chaine !== "string" || chaine === "" ) {
        return "";
    }
    return capitalize(chaine).split(' ').join('');
}

// console.log(camelCase("abdellatif chalal etudaie en france"));


function snake_case(chaine){
    if (typeof chaine !== "string" || chaine === "" ) {
        return "";
    }
     return chaine.toLowerCase().split(' ').join('_');
}

// console.log(snake_case("Abdellatif CHALALA etudaie en france"));

function leet(chaine) {
    return chaine.replace(/[aeiouy]/gi, function (e) {
      switch (e.toLowerCase()) {
        case "a":
          return 4;
        case "e":
          return 3;
        case "i":
          return 1;
        case "o":
          return 0;
        case "u":
          return "(_)";
        case "y":
          return 7;
      }
    });
  }
 
// console.log(leet("abdellatif chalal etudaie en france"));

function verlan (chaine) {
  if(chaine === "" || typeof chaine !== "string") return "";
  return chaine.split('').map(function(param){ return param.toLowerCase()}).reverse().join('');
}

// console.log(verlan("Abdellatif chalal"));

function yoda(chaine) {
    if (typeof chaine !== "string" || chaine === "" ) return "";
    return chaine.split(' ').reverse().join(' ');
}

// console.log(yoda("Abdellatif chalal"));

function vig(string, code) {
  if (typeof string !== "string") return "";
  if (string.length === 0) return string;

  while (code.length < string.length) {
    code += code;
  }
  code = code.substr(0, string.length);
  let codeIndex = 0;

  return string
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



function prop_access(obj, path) {
  if(path === "" || path == null){
    return obj;
  }
  if(obj == null){
    return path + " not exist";
  }
  let props = path.split('.');
  let result = obj;
  for (var i = 0; i < props.length; i++) {
    result = result[props[i]];
    if (typeof result === 'undefined'){
      return path + "not exist";
    }
  }
  return result;
}


function essai() {
    var v = "latif";
    thisf = function afficheName() {
      // console.log(v);
      return v;
    }
}
console.log(essai().afficheName());
// console.log("vig " + vig("latif",[0-25]));

// console.log(prop_access({ animal: { type: { name: "chine"} } }, "animal.type.name"));

