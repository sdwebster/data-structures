var Stack = function() {
  var newStack = {
    storage: {},
    length: 0
  };
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {
  push: function(val){
    this.storage[this.length] = val;
    this.length++;
  },
  pop: function(){
    var result = this.storage[this.length - 1];
    this.length && this.length--;
    delete this.storage[this.length];
    return result;
  },
  size: function(){
    return this.length;
  }
};


