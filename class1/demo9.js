// old syntex
let add = function(x, y) {
    return x + y;
}
console.log(add(10, 20)) // 30

// new arrow syntax
let add2 = (x, y) => x + y;
console.log(add2(100, 200)) // 300

console.log(typeof add2);

let hello = name => 'hello '+ name;
console.log(hello('mark'))

let sayHello = () => 'welcome guest';
console.log(sayHello())