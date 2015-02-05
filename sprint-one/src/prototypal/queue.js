var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.head = 0;
  newQueue.tail = 0;
  return newQueue;
};

var queueMethods = {
  enqueue: function(val){
    this.storage[this.tail] = val;
    this.tail++;
  },
  dequeue: function(){
    var result = this.storage[this.head];
    delete this.storage[this.head];
    this.tail - this.head && this.head++;
    return result;
  },
  size: function(){
    return this.tail - this.head;
  }
};
