riot.tag2('one', '', '', '', function(opts) {
    var self = this;
    riotux.subscribe(self, 'counter');

    self.on('mount', function(){
      riotux.action('counter', 'change_count', 2);
    });

    self.on('update', function ( ) {
      window.counter = riotux.getter('counter');
      riotux.action('add', 1, 2);
    });
});