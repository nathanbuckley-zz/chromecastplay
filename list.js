/*
List all chrome cast devices on a network
*/

var cast = require('chromecasts')(),

list = cast;

list.on('update', function(){
  var info = 'List of Chromecasts on network' + '\n';
  for(var i=0; i < list.players.length; i++){
    info += 'Name: ' + list.players[i].name + ' Host: ' + list.players[i].host + '\n';
  }
  console.log(info);
});
