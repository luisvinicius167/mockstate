function CarStore ( ) {
  riot.observable(this)
  this.on('start', function ( person ){
    return person;
  });
}
var carStore = new CarStore();
riotux.addStore('carStore', carStore);