

String.prototype.ucfirst = function (){
    if (typeof this !== "string" || this === "" ) {
        return "";
    }
    return this.charAt(0).toUpperCase() + this.slice(1);
}

console.log("sdjknd");
console.log("latifdv df".ucfirst());

















// String.prototype.ucfirst = function () {
//     return this.charAt(0).toUpperCase() + this.slice(1);

// }