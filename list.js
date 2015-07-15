/*
List all chrome cast devices on a network
*/

var cast = require('chromecasts')(),
list = cast;

list.on('update', function(){
  console.log(list);
});
