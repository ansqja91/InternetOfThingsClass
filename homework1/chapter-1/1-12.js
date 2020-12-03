var target = {
  name: 'test',
  gender: 'test',
};

var copyObject = function(target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

console.log(copyObject(target));