var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;


  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function(){
    var result = storage[0];
    for (var i = 0; i < count - 1; i++){
      storage[i] = storage[i+1];
    }
    delete storage[count];
    count && count--;
    return result;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
