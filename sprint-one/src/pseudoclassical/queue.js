var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(val){
  this.storage[this.tail] = val;
  this.tail++;
};

Queue.prototype.dequeue = function(){
  var result = this.storage[this.head];
  delete this.storage[this.head];
  this.head - this.tail && this.head++;
  return result;
};

Queue.prototype.size = function(){
  return this.tail - this.head;
};

