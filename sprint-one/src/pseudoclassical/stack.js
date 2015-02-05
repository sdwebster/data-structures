var Stack = function() {
  this.storage = {};
  this.length = 0;
};

Stack.prototype.push = function(val) {
  this.storage[this.length] = val;
  this.length++;
};

Stack.prototype.pop = function() {
  var result = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length && this.length--;
  return result;
};

Stack.prototype.size = function() {
  return this.length;
};
