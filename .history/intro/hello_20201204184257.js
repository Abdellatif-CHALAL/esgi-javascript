latof = 12;
var foo = 1;
let foobar = 10;
(function() {
    console.log(foo);
    // console.log(baz);
    var foo = 2;
    console.log(latof);
    let baz = 3;
    const bar = 4;
    console.log(foobar);
    
})();

console.log(latof);
console.log(foo);
// console.log(bar);
// console.log(baz);
console.log(foobar);


console.log("Hello World!");