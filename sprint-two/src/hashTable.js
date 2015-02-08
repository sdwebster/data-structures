var HashTable = function(lim){
  this._limit = lim || 8;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;

};

HashTable.prototype.insert = function(k, v){
  if (this.counter + 1 > this._limit * 0.75){
    this.resize(this._limit * 2);
  }
  // whether or not we just rescaled, we still need to insert (k,v)
  var i = getIndexBelowMaxForKey(k, this._limit);
  if ( !this._storage.get(i) ) {
    // create a new bucket
    this._storage.set(i, []);
  }
  this._storage.get(i).push([k, v]);
  this.counter++;
};

HashTable.prototype.resize = function(newLim){
  newHashTable = new HashTable(newLim);
  // loop through storage
  this._storage.each(function(bucket){
    // loop through each bucket (if it exists)
    if (bucket) {
      for (var i=0, l=bucket.length; i<l; i++){
        newHashTable.insert(bucket[i][0], bucket[i][1]);
      }
    }
  });
  // overwrite old ht with new ht
  this._limit = newHashTable._limit;
  this._storage = newHashTable._storage;
  this.counter = newHashTable.counter;
  newHashTable = null;
}

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
        this.counter--;
      }
    }
  }
  if (this.counter < this._limit * 0.25 && this._limit >= 2){
    this.resize(~~(this._limit / 2));
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
