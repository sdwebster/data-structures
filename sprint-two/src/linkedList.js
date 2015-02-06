var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    this.tail ? this.tail.next = node : this.head = node;
    this.tail = node;
  };

  list.removeHead = function(){
    var currentHead = this.head;
    var result = currentHead.value;
    this.head = this.head.next;
    // is currentHead going to garbage collect?
    currentHead.next = null;
    currentHead.value = null;
    currentHead = null;
    //currentHead.explode(); === null all the things
    return result;
  };

  list.contains = function(target){
    var result = false;
    // Supa hacka numba 1 // ok not really but still
    // for(var node = this.head;
    //     node !== null && !result;
    //     node = node.next) {
    //   result = node.value === target;
    // }
    var node = this.head;
    while(node !== null && !result) {
      result = node.value === target;
      node = node.next;
    }
    return result;
  };
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
