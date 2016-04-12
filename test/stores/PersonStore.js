function PersonStore ( ) {
  riot.observable(this)
  this.on('setName', function ( name ) {
    window.personName = name;
  });
  this.on('getName', function(){
    console.log('personStore');
    window.personGetNameEvent = true;
  })
};

var personStore = new PersonStore();
riotux.addStore('personStore', personStore);