function CarStore ( ) {
  riot.observable(this)
  this.on('setColor', function ( color ) {
    window.color = color;
  });
  this.on('personStartCar', function ( ) {
    window.started = true;
  });
  this.on('getColor', function(){
    console.log('carStore');
    riotux.emmit('getCarColor');
  })
};

var carStore = new CarStore();
riotux.addStore('carStore', carStore);
