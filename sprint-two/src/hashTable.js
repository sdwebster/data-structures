var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if ( !this._storage.get(i) ) {
    // create a new bucket
    this._storage.set(i, []);
  }
  this._storage.get(i).push([k, v]);
};

HashTable.prototype.retrieve = function(k){
  var bucket = this._storage.get(getIndexBelowMaxForKey(k, this._limit));
  var result;
  if (bucket) {
    for (var i=0, l=bucket.length; i<l; i++){
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  // accomodating a customer who for some reason wants 'null'
  // where any reasonable person would want 'undefined'
  return null;
};

HashTable.prototype.remove = function(k){
  var bucket = this._storage.get(getIndexBelowMaxForKey(k, this._limit));
  var result;
  if (bucket) {
    for (var i=0, l=bucket.length; i<l; i++){
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
