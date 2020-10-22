
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
    let tab =  chaine.split(' ');
    for (let index = 0; index < tab.length; index++) {
        tab[index]  = ucfirts(tab[index]);
    }
    return tab.join(' ');
}

// console.log(capitalize("abdellatif chalal etudaie en france"));


function camelCase(chaine){
    if (typeof chaine !== "string" || chaine === "" ) {
        return "";
    }
    let tab =  chaine.split(' ');
    for (let index = 0; index < tab.length; index++) {
        tab[index]  = ucfirts(tab[index]);
    }
    return tab.join('');
}

// console.log(camelCase("abdellatif chalal etudaie en france"));


function snake_case(chaine){
    if (typeof chaine !== "string" || chaine === "" ) {
        return "";
    }
     return chaine.toLowerCase().split(' ').join('_');
}

// console.log(snake_case("Abdellatif CHALALA etudaie en france"));

function leet(chaine){
    if (typeof chaine !== "string" || chaine === "" ) {
        return "";
    }
     return chaine.replace('A','4').replace('a','4').replace('E','3').replace('e','3').replace('I','1').replace('i','1').replace('O','0').replace('o','0').replace('U','(_)').replace('u','(_)').replace('Y','7').replace('y','7');
}
 
// console.log(leet("Abdellatif CHALALA etudaie en france"));


function prop_access(prairie){
    let path = ""+prairie.objectName+".";
    if ( prairie !== "undefined") {
        return path;
    }
   return "sdjbsdhjqf";
    
    
}

var prairie = {animal:{type:{name: "chien"}}};
// console.log(prop_access(prairie));
