var a = 10;
var b = a;
var obj1 = { c: 10, d: 'ddd' };
var obj2 = obj1;

b = 15;
obj2.c = 20;

console.log("a = ", a);
console.log("b = ", b);
console.log("obj1 = ", obj1);
console.log("obj2.c, obj2.d = ", obj2.c, obj2.d);
console.log("b = ", b);
console.log("obj2.c = ", obj2.c);