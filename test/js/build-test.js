riot.tag2('one', '', '', '', function(opts) {
    var self = this;
    riotux.subscribe(self, ['counter'], function ( ) {
      self.update();
    });

    self.on('mount', function(){
      riotux.action('counter', 'increment_counter', 2);
    });

    self.on('update', function ( ) {
      window.counter = riotux.getter('counter');
    });
});