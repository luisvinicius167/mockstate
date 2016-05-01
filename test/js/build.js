riot.tag2('one', '', '', '', function(opts) {
    var self = this;
    
    self.on('mount', function(){
      riotux.action('counter', 'change_count', 2);
    });

    riotux.on('counter', function ( count ) {
      window.counter = count;
      riotux.action('add', 1, 2);
    });
});