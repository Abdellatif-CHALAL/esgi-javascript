var foo = 1;
let foobar = 10;
(function() {
    console.log(foo);
    // console.log(baz);
    var foo = 2;
    let baz = 3;
    const bar = 4;
    console.log(foobar);
    
})();

console.log(foo);
console.log(bar);
console.log(baz);
console.log(foobar);


console.log("Hello World!");