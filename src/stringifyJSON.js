// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // stringify a number, null, true and false
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    var resultArray = [];
    for (var i = 0; i < obj.length; i++) {
      var current = stringifyJSON(obj[i]);
      resultArray.push(current);
    }
    resultArray.join(',');
    return '[' + resultArray + ']';
  } else {
    var result = '';
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    result = result.slice(0, result.length - 1);
    return '{' + result + '}';
  }
};
