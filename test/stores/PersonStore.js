function PersonStore ( ) {
  riot.observable(this)
  this.on('setName', function ( name ) {
    window.personName = name;
  });
};

var personStore = new PersonStore();
riotux.addStore('personStore', personStore);

/** Testing */
