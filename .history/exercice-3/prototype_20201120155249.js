String.prototype.ucfirst = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);

}

console.log("latif".ucfirst())