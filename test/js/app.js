riot.tag2('one', '<h1>Foo Component: counter = { counter }</h1>', '', '', function(opts) {
    var self = this;
    riotux.subscribe(self, 'counter');
    
    self.on('mount', function() {
      console.log('Calling the action for change the #counter state in the ', this.root, ' tag.');
      setTimeout(function(){
        riotux.action('counter', 'increment_counter', 1);
      }, 3000);
      setTimeout(function(){
        self.unmount();
      }, 7000);
    });

    self.on('update', function ( ) {
      self.counter = riotux.getter('counter');
    });

    self.on('unmount', function() {
      riotux.unsubscribe(self);
    })
});

riot.tag2('two', '<h1>Bar Component: counter = { counter }</h1>', '', '', function(opts) {
    var self = this;
    riotux.subscribe(self, 'counter');

    self.on('update', function ( ) {
      self.counter = riotux.getter('counter');
    });
});
