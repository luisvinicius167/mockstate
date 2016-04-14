riot.tag2('one', '', '', '', function(opts) {
    var self = this;

    riotux.listen('init', function ( value ) {
      window.initied = value;
    });

    riotux.listen('getName', function ( name ) {
      self.name = name;
      console.log(self.name)
    });
    
    self.on('mount', function() {
      riotux.emit('getLen', 'one', 'two');
    })
    
    riotux.listen('getLen', function () {
      window.lenEmit = 2;
    });  
    
    self.on('unmount', function () {
      riotux.cancel('init');
    });
});