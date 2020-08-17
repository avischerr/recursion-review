// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// You should use document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentNode) {
  // create results array
  var results = [];
  // check if node's class is equal to target class
  // target element type? elements[i].nodeType === 1
  if (currentNode) {
    if (currentNode.classList.contains(className)) {
      results.push(currentNode);
    }

    if (currentNode.hasChildNodes()) {
      for (var i = 0; i < currentNode.childNodes.length; i++) {
        getElementsByClassName(className, currentNode.childNodes[i]);
      }
    }
  }

  getElementsByClassName(className, document.body);

  // return results
  console.log(results);
  return results;

};
