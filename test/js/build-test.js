riot.tag2('one', '', '', '', function(opts) {
    var self = this;
    riotux.subscribe(self, ['counter'], function ( state, stateValue, actionName ) {
      console.log(state, stateValue, actionName)
      self.update();
    });

    self.on('mount', function(){
      riotux.action('counter', 'increment_counter', 2);
    });

    self.on('update', function ( ) {
      window.counter = riotux.get('counter');
    });
});