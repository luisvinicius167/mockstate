riot.tag2('one', '<h1>Foo Component: counter = { counter } { count ? "Count: " + count : ""}</h1>', '', '', function(opts) {
    var self = this;
    riotux.subscribe(self, ['counter', 'count'], function ( state, stateValue, actionName ) {
      self.update();
      console.log('The state name: #', state, ' The state value: #', stateValue, 'Action:', actionName);
    });
    
    self.on('mount', function() {
      console.log('Calling the action for change the #counter state in the ', this.root, ' tag.');
      setTimeout(function(){
        riotux.action('counter', 'increment_counter', 1);
      }, 3000);
    });

    self.on('update', function ( ) {
      self.counter = riotux.get('counter');
      self.count = riotux.get('count');
    });

    self.on('unmount', function() {
      riotux.unsubscribe(self);
    })
});

riot.tag2('two', '<h1>Bar Component: counter = { counter }</h1>', '', '', function(opts) {
    var self = this;
    riotux.subscribe(self, 'counter', function ( ) {
      self.update();
    });
    
    setTimeout(function() {
        self.unmount();
      }, 7000);

    self.on('update', function ( ) {
      self.counter = riotux.get('counter');
    });
});
