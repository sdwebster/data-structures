var BinarySearchTree = function(val){
  var newBST = Object.create(bstMethods);
  newBST.left;
  newBST.right;
  newBST.value = val;
  return newBST;
};
  var bstMethods = {};
  bstMethods.insert = function(val) {
    if(val < this.value) {
      if (this.left) {
        this.left.insert(val);
      } else {
        this.left = BinarySearchTree(val);
      }
    } else {
      if (this.right) {
        this.right.insert(val);
        debugger;
      } else {
        this.right = BinarySearchTree(val);
      }
    }
  };
  bstMethods.contains = function(target) {
    if(target === this.value) {
      return true;
    }
    if(target < this.value) {
      if (this.left) {
        return this.left.contains(target);
      }
    } else {
      if (this.right) {
        return this.right.contains(target);
      }
    }
    return false;
  };
  bstMethods.depthFirstLog = function(cb) {
    cb(this.value);
    !this.left || this.left.depthFirstLog(cb);
    !this.right || this.right.depthFirstLog(cb);
  };
  bstMethods.breadthFirstLog = function(cb) {

  }
/*
 * Complexity: What is the time complexity of the above functions?
 */
