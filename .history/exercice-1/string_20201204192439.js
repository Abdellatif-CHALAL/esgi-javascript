
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

var prairie = {animal:{type:{name: "chien"}}};
console.log(prop_access(prairie));

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