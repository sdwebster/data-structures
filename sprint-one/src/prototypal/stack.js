var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.length = 0;

  return newStack;
};

var stackMethods = {
  push: function(val){
    this.storage[this.length] = val;
    this.length++;
  },
  pop: function(){
    var result = this.storage[this.length - 1];
    delete this.storage[this.length -1];
    this.length && this.length--;
    return result;
  },
  size: function(){
    return this.length;
  }
};


