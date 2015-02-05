var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.begin = 0;
  newQueue.end = 0;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.end] = val;
  this.end++;
};
queueMethods.dequeue = function () {
  var dequeued = this.storage[this.begin];
  delete this.storage[this.begin];
  this.end - this.begin && this.begin++;
  return dequeued;
};
queueMethods.size = function() {
  return this.end - this.begin;
};
