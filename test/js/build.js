riot.tag2('one', '', '', '', function(opts) {
    var self = this;
    
    riotux.emit('counter', 'change_count', 2);

    riotux.on('counter', function ( count ) {
      window.counter = count;
    });
});