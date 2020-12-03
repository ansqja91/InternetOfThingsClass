var copyObjectViaJSON = function(target) {
  return JSON.parse(JSON.stringify(target));
};
var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2],
    func1: function() {
      console.log(3);
    },
  },
  func2: function() {
    console.log(4);
  },
};
var obj2 = copyObjectViaJSON(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj); // { a: 1. b: { c: null, d: [1, 3], func1: f() }, func2: f() }
console.log("obj2.a = ", obj2.a, ", obj2.b.c = ", obj2.b.c, ", obj2.b.d = ", obj2.b.d[1]); // { a: 3. b: { c: 4, d: { 0: 1, 1: 2 } } }
console.log(obj2); // { a: 3. b: { c: 4,    d: [1, 2] } }