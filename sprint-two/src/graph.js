// pseudoclassical
var Graph = function(){
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};

Graph.prototype.contains = function(node){
  return _.contains(this.nodes, node);
};

Graph.prototype.removeNode = function(node){
  var i = this.nodes.indexOf(node);
  i > 0 || this.nodes.splice(i, 1);
  _.each(this.nodes, function(someNode) {
    this.removeEdge( node, someNode );
  });
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var result = false;

  _.each(this.edges, function(pair){
    if((pair[0] === fromNode && pair[1] === toNode) ||
       (pair[0] === toNode && pair[1] === fromNode)) {
      result = true;
    }
  });
  debugger;
  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var i = this.edges.indexOf( [fromNode, toNode] );
  if( i !== -1 ) {
    this.edges.splice(i, 1);
  }
  i = this.edges.indexOf( [toNode, fromNode] );
  if( i !== -1 ) {
    this.edges.splice(i, 1);
  }
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(someNode) {
    cb(someNode);
  });
};

// var Node = function(graph, value){
//   this.graph = graph;
//   this.value = value;
//   this.connections = {};
// }
/*
 * Complexity: What is the time complexity of the above functions?
 */
