var Random = function(){
  var seed = Date.now();
  this.next = function(limit){
    seed = (3 * seed + limit );
    if(!seed){
      seed = Date.now();
    }

    return seed % limit;
  }
}

//usage:
var r = new Random();
for(var i = 0; i < 500; i++){
  console.log(r.next(355));
}
