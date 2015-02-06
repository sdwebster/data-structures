// functional-shared
var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  return _.reduce(this.children, function(result, child){
    return result || child.contains(target);
  }, this.value === target);
};


/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addChild -> O(1)
 * contains -> O(n) ?
 *
 */
