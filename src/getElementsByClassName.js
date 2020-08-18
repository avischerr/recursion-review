// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, currentNode) {
  var results = [];

  var getElementsHelper = function(currentNode) {
    currentNode = currentNode || document.body;
    if (currentNode.classList.contains(className)) {
      results.push(currentNode);
    }
    if (currentNode.hasChildNodes()) {
      for (var i = 0; i < currentNode.children.length; i++) {
        var child = currentNode.children[i];
        getElementsHelper(child);
      }
    }
    return;
  };

  getElementsHelper();
  return results;
};