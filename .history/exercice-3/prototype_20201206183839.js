

function ucfirts(chaine){
    if (typeof chaine !== "string" || chaine === "" ) {
        return "";
    }
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

console.log("latif".ucfirst())

















// String.prototype.ucfirst = function () {
//     return this.charAt(0).toUpperCase() + this.slice(1);

// }