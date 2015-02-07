var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    var node = Node(value);
    if (this.head) {
      this.head.previous = node;
      node.next = this.head;
    } else {
      this.tail = node;
    }
    this.head = node;
  };

  list.removeHead = function(){
    var currentHead = this.head;
    var result = currentHead.value;
    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    }
    currentHead = null;
    return result;
  };
  list.removeTail = function(){
    var currentTail = this.tail;
    var result = currentTail.value;
    if (this.head.previous) {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    currentTail = null;
    return result;
  };
  list.addToTail = function(value){
    var node = Node(value);
    if (this.tail) {
      this.tail.next = node;
      node.previous = this.tail;
    } else {
      this.head = node;
    }
    this.tail = node;
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
